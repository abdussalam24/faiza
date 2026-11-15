/**
 * Booking settings. Every value can be overridden with a Vercel environment variable
 * (Project ▸ Settings ▸ Environment Variables) — no code change needed.
 */
const num = (v, d) => (v === undefined || v === '' || Number.isNaN(Number(v)) ? d : Number(v));

export const BOOKING = {
  /** Business time zone — working hours below are in this zone. */
  timezone: process.env.BOOKING_TIMEZONE || 'America/Toronto',
  /** Working days, 1 = Monday … 7 = Sunday. */
  workdays: (process.env.BOOKING_DAYS || '1,2,3,4,5').split(',').map(Number),
  /** Daily booking window (24-hour HH:MM). */
  dayStart: process.env.BOOKING_START || '09:00',
  dayEnd: process.env.BOOKING_END || '17:00',
  /** Meeting length and spacing. */
  slotMinutes: num(process.env.BOOKING_SLOT_MINUTES, 30),
  bufferMinutes: num(process.env.BOOKING_BUFFER_MINUTES, 15),
  /** How soon / how far ahead people can book. */
  minNoticeHours: num(process.env.BOOKING_MIN_NOTICE_HOURS, 24),
  maxDaysAhead: num(process.env.BOOKING_MAX_DAYS, 30),
  /** Meeting title shown in both calendars. */
  meetingTitle: process.env.BOOKING_MEETING_TITLE || 'FABZ HR — Free Consultation',
  /** Where booking notifications are emailed (via FormSubmit). */
  notifyEmail: process.env.BOOKING_NOTIFY_EMAIL || 'contact@fabzhr.com',
};
