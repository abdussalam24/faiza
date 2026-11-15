import { BOOKING } from './config.js';

/**
 * Emails Faiza a booking notification through FormSubmit (same service as the
 * website forms, so it lands in the same inbox in the same table format).
 * Never throws — a failed notification must not cancel a confirmed booking.
 */
export async function notifyOwner(fields) {
  try {
    const res = await fetch(`https://formsubmit.co/ajax/${BOOKING.notifyEmail}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json', Origin: 'https://www.fabzhr.com', Referer: 'https://www.fabzhr.com/book-demo' },
      body: JSON.stringify({ _subject: `New booking: ${fields.name} — ${fields.when}`, _template: 'table', _captcha: 'false', ...fields }),
    });
    return res.ok;
  } catch (err) {
    console.error('Booking notification failed:', err.message);
    return false;
  }
}
