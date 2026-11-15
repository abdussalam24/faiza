import { randomUUID } from 'node:crypto';
import { BOOKING } from './_lib/config.js';
import { bookingWindow, isSlotAvailable } from './_lib/slots.js';
import { getProvider } from './_lib/providers.js';
import { notifyOwner } from './_lib/notify.js';

const EMAIL_RE = /^[^\s@<>()[\]\\,;:"]+@[^\s@<>()[\]\\,;:"]+\.[A-Za-z]{2,}$/;
const LIMITS = { name: 100, email: 200, phone: 40, company: 150, service: 100, message: 2000 };

const clean = (v, max) => (typeof v === 'string' ? v.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, '').trim().slice(0, max) : '');
const escapeHtml = (s) => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

/**
 * POST /api/book  { start, fullName, email, phone?, company?, service?, message?, _honey? }
 * Creates the meeting in the connected calendar (Teams or Meet link included), which emails
 * the invitation to the visitor; then emails a notification to FABZ HR.
 */
export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const provider = getProvider();
  if (!provider) return res.status(503).json({ error: 'Online booking is not available right now.' });

  const body = typeof req.body === 'string' ? (() => { try { return JSON.parse(req.body); } catch { return {}; } })() : (req.body || {});

  // Honeypot: bots fill hidden fields. Pretend success, do nothing.
  if (clean(body._honey, 100)) return res.status(200).json({ ok: true });

  const data = {
    name: clean(body.fullName, LIMITS.name),
    email: clean(body.email, LIMITS.email).toLowerCase(),
    phone: clean(body.phone, LIMITS.phone),
    company: clean(body.company, LIMITS.company),
    service: clean(body.service, LIMITS.service),
    message: clean(body.message, LIMITS.message),
  };
  const startIso = clean(body.start, 40);
  const start = new Date(startIso);

  const errors = {};
  if (data.name.length < 2) errors.fullName = 'Please enter your full name.';
  if (!EMAIL_RE.test(data.email)) errors.email = 'Please enter a valid email address.';
  if (Number.isNaN(start.getTime()) || start.toISOString() !== startIso) errors.start = 'Please choose a time slot.';
  if (Object.keys(errors).length) return res.status(400).json({ error: 'Please check the highlighted fields.', fields: errors });

  try {
    // Re-check against the live calendar so two people can't book the same slot.
    const { start: winStart, end: winEnd } = bookingWindow();
    const busy = await provider.getBusy(winStart, winEnd);
    if (!isSlotAvailable(startIso, busy)) {
      return res.status(409).json({ error: 'Sorry, that time was just taken. Please choose another slot.' });
    }

    const end = new Date(start.getTime() + BOOKING.slotMinutes * 60000);
    const when = new Intl.DateTimeFormat('en-CA', { timeZone: BOOKING.timezone, dateStyle: 'full', timeStyle: 'short' }).format(start);
    const rows = [
      ['Name', data.name],
      ['Email', data.email],
      ['Phone', data.phone],
      ['Company', data.company],
      ['Service', data.service],
      ['Message', data.message],
    ].filter(([, v]) => v);
    const html = `<p>Free consultation booked through fabzhr.com.</p><table>${rows
      .map(([k, v]) => `<tr><td><strong>${k}</strong></td><td>${escapeHtml(v).replace(/\n/g, '<br>')}</td></tr>`)
      .join('')}</table>`;

    const meeting = await provider.createMeeting({
      start,
      end,
      subject: `${BOOKING.meetingTitle} with ${data.name}`,
      html,
      attendee: { name: data.name, email: data.email },
      requestId: randomUUID(),
    });

    await notifyOwner({
      name: data.name,
      email: data.email,
      phone: data.phone || '—',
      company: data.company || '—',
      service: data.service || '—',
      message: data.message || '—',
      when: `${when} (${BOOKING.timezone})`,
      platform: provider.platform,
      meetingLink: meeting.joinUrl || 'See the event in your calendar',
    });

    return res.status(200).json({ ok: true, start: start.toISOString(), end: end.toISOString(), platform: provider.platform, joinUrl: meeting.joinUrl });
  } catch (err) {
    console.error('booking error:', err.message);
    return res.status(502).json({ error: 'We could not complete your booking. Please try again or email us.' });
  }
}
