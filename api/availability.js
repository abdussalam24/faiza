import { BOOKING } from './_lib/config.js';
import { bookingWindow, computeSlots } from './_lib/slots.js';
import { getProvider } from './_lib/providers.js';

/**
 * GET /api/availability
 * → { configured: false }                         when no calendar is connected yet (site falls back to the request form)
 * → { configured: true, platform, timezone, slotMinutes, days: { 'YYYY-MM-DD': ['ISO', …] } }
 */
export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const provider = getProvider();
  if (!provider) return res.status(200).json({ configured: false });

  try {
    const { start, end } = bookingWindow();
    const busy = await provider.getBusy(start, end);
    return res.status(200).json({
      configured: true,
      platform: provider.platform,
      timezone: BOOKING.timezone,
      slotMinutes: BOOKING.slotMinutes,
      days: computeSlots(busy),
    });
  } catch (err) {
    console.error('availability error:', err.message);
    return res.status(502).json({ configured: true, error: 'Calendar temporarily unavailable' });
  }
}
