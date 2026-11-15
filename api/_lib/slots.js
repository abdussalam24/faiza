import { BOOKING } from './config.js';
import { zonedParts, zonedToUtc, dateKey, addDays, parseHM } from './time.js';

/** The UTC window covered by the booking calendar, starting today (business time zone). */
export function bookingWindow(now = new Date(), cfg = BOOKING) {
  const today = zonedParts(now, cfg.timezone);
  const last = addDays(today, cfg.maxDaysAhead);
  return {
    start: zonedToUtc(today.year, today.month, today.day, 0, 0, cfg.timezone),
    end: zonedToUtc(last.year, last.month, last.day, 23, 59, cfg.timezone),
  };
}

/**
 * Bookable slots, grouped by business-local date: { 'YYYY-MM-DD': ['ISO start', …] }.
 * busy: [{ start: Date, end: Date }] from the calendar provider.
 */
export function computeSlots(busy, now = new Date(), cfg = BOOKING) {
  const today = zonedParts(now, cfg.timezone);
  const earliest = now.getTime() + cfg.minNoticeHours * 3600000;
  const buffer = cfg.bufferMinutes * 60000;
  const slotMs = cfg.slotMinutes * 60000;
  const { h: sh, m: sm } = parseHM(cfg.dayStart);
  const { h: eh, m: em } = parseHM(cfg.dayEnd);
  const blocks = busy.map((b) => ({ start: b.start.getTime() - buffer, end: b.end.getTime() + buffer }));
  const out = {};

  for (let i = 0; i <= cfg.maxDaysAhead; i += 1) {
    const day = addDays(today, i);
    if (!cfg.workdays.includes(day.weekday)) continue;
    const dayStart = zonedToUtc(day.year, day.month, day.day, sh, sm, cfg.timezone).getTime();
    const dayEnd = zonedToUtc(day.year, day.month, day.day, eh, em, cfg.timezone).getTime();
    const slots = [];
    for (let t = dayStart; t + slotMs <= dayEnd; t += slotMs) {
      if (t < earliest) continue;
      const end = t + slotMs;
      if (blocks.some((b) => t < b.end && end > b.start)) continue;
      slots.push(new Date(t).toISOString());
    }
    if (slots.length) out[dateKey(day)] = slots;
  }
  return out;
}

/** True if `isoStart` is one of the currently bookable slots. */
export function isSlotAvailable(isoStart, busy, now = new Date(), cfg = BOOKING) {
  const all = computeSlots(busy, now, cfg);
  return Object.values(all).some((list) => list.includes(isoStart));
}
