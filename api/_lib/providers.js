/**
 * Calendar providers. Each exposes:
 *   getBusy(start: Date, end: Date) → [{ start: Date, end: Date }]
 *   createMeeting({ start, end, subject, html, attendee: { name, email } }) → { joinUrl, eventId }
 *
 * Choose with BOOKING_PROVIDER = "microsoft" (Teams) or "google" (Meet).
 * If unset, whichever provider has its environment variables filled in is used.
 */

const env = (k) => (process.env[k] || '').trim();

async function http(url, options, label) {
  const res = await fetch(url, options);
  const text = await res.text();
  let data;
  try { data = text ? JSON.parse(text) : {}; } catch { data = { raw: text }; }
  if (!res.ok) {
    const msg = data?.error?.message || data?.error_description || data?.error || text;
    throw new Error(`${label} failed (${res.status}): ${typeof msg === 'string' ? msg : JSON.stringify(msg)}`);
  }
  return data;
}

const form = (obj) => new URLSearchParams(obj).toString();
const utcNoZ = (d) => d.toISOString().slice(0, 19); // "2026-11-17T14:00:00"

/* ── Microsoft 365 / Teams (Microsoft Graph, app-only) ─────────────────────── */
const microsoft = {
  name: 'microsoft',
  platform: 'Microsoft Teams',
  isConfigured: () => ['MS_TENANT_ID', 'MS_CLIENT_ID', 'MS_CLIENT_SECRET', 'MS_CALENDAR_USER'].every((k) => env(k)),

  async token() {
    const data = await http(
      `https://login.microsoftonline.com/${env('MS_TENANT_ID')}/oauth2/v2.0/token`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: form({
          client_id: env('MS_CLIENT_ID'),
          client_secret: env('MS_CLIENT_SECRET'),
          scope: 'https://graph.microsoft.com/.default',
          grant_type: 'client_credentials',
        }),
      },
      'Microsoft sign-in'
    );
    return data.access_token;
  },

  async getBusy(start, end) {
    const user = env('MS_CALENDAR_USER');
    const token = await this.token();
    const data = await http(
      `https://graph.microsoft.com/v1.0/users/${encodeURIComponent(user)}/calendar/getSchedule`,
      {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json', Prefer: 'outlook.timezone="UTC"' },
        body: JSON.stringify({
          schedules: [user],
          startTime: { dateTime: utcNoZ(start), timeZone: 'UTC' },
          endTime: { dateTime: utcNoZ(end), timeZone: 'UTC' },
          availabilityViewInterval: 15,
        }),
      },
      'Microsoft free/busy'
    );
    const schedule = data.value?.[0];
    if (!schedule || schedule.error) throw new Error(`Microsoft free/busy: ${schedule?.error?.message || 'no schedule returned'}`);
    return (schedule.scheduleItems || [])
      .filter((i) => !['free', 'workingElsewhere'].includes(i.status))
      .map((i) => ({ start: new Date(`${i.start.dateTime.slice(0, 19)}Z`), end: new Date(`${i.end.dateTime.slice(0, 19)}Z`) }));
  },

  async createMeeting({ start, end, subject, html, attendee, requestId }) {
    const user = env('MS_CALENDAR_USER');
    const token = await this.token();
    const event = await http(
      `https://graph.microsoft.com/v1.0/users/${encodeURIComponent(user)}/events`,
      {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          subject,
          body: { contentType: 'HTML', content: html },
          start: { dateTime: utcNoZ(start), timeZone: 'UTC' },
          end: { dateTime: utcNoZ(end), timeZone: 'UTC' },
          attendees: [{ emailAddress: { address: attendee.email, name: attendee.name }, type: 'required' }],
          isOnlineMeeting: true,
          onlineMeetingProvider: 'teamsForBusiness',
          allowNewTimeProposals: false,
          transactionId: requestId,
        }),
      },
      'Microsoft create meeting'
    );
    // Outlook emails the invitation (with the Teams link) to the attendee automatically.
    return { eventId: event.id, joinUrl: event.onlineMeeting?.joinUrl || null };
  },
};

/* ── Google Workspace / Gmail + Google Meet (Calendar API, OAuth refresh token) ─ */
const google = {
  name: 'google',
  platform: 'Google Meet',
  isConfigured: () => ['GOOGLE_CLIENT_ID', 'GOOGLE_CLIENT_SECRET', 'GOOGLE_REFRESH_TOKEN'].every((k) => env(k)),
  calendarId: () => env('GOOGLE_CALENDAR_ID') || 'primary',

  async token() {
    const data = await http(
      'https://oauth2.googleapis.com/token',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: form({
          client_id: env('GOOGLE_CLIENT_ID'),
          client_secret: env('GOOGLE_CLIENT_SECRET'),
          refresh_token: env('GOOGLE_REFRESH_TOKEN'),
          grant_type: 'refresh_token',
        }),
      },
      'Google sign-in'
    );
    return data.access_token;
  },

  async getBusy(start, end) {
    const token = await this.token();
    const id = this.calendarId();
    const data = await http(
      'https://www.googleapis.com/calendar/v3/freeBusy',
      {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ timeMin: start.toISOString(), timeMax: end.toISOString(), items: [{ id }] }),
      },
      'Google free/busy'
    );
    const cal = data.calendars?.[id];
    if (!cal || cal.errors?.length) throw new Error(`Google free/busy: ${JSON.stringify(cal?.errors || 'calendar not found')}`);
    return cal.busy.map((b) => ({ start: new Date(b.start), end: new Date(b.end) }));
  },

  async createMeeting({ start, end, subject, html, attendee, requestId }) {
    const token = await this.token();
    const event = await http(
      `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(this.calendarId())}/events?conferenceDataVersion=1&sendUpdates=all`,
      {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          summary: subject,
          description: html,
          start: { dateTime: start.toISOString() },
          end: { dateTime: end.toISOString() },
          attendees: [{ email: attendee.email, displayName: attendee.name }],
          conferenceData: { createRequest: { requestId, conferenceSolutionKey: { type: 'hangoutsMeet' } } },
          reminders: { useDefault: true },
        }),
      },
      'Google create meeting'
    );
    // sendUpdates=all → Google emails the invitation (with the Meet link) to the attendee.
    return { eventId: event.id, joinUrl: event.hangoutLink || event.conferenceData?.entryPoints?.find((e) => e.entryPointType === 'video')?.uri || null };
  },
};

const PROVIDERS = { microsoft, google };

/** The active provider, or null if none is configured. */
export function getProvider() {
  const chosen = env('BOOKING_PROVIDER').toLowerCase();
  if (chosen) return PROVIDERS[chosen]?.isConfigured() ? PROVIDERS[chosen] : null;
  return [microsoft, google].find((p) => p.isConfigured()) || null;
}
