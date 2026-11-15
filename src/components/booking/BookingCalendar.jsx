import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, CalendarCheck, Clock, Video, ArrowLeft, Check } from 'lucide-react';
import { SERVICES } from '../../data/services';
import { SITE } from '../../config/site';

/**
 * Live booking calendar. Reads open slots from /api/availability (Faiza's real calendar)
 * and books through /api/book, which sends the Teams / Google Meet invitation.
 * If online booking isn't connected yet (or the API is unreachable), renders `fallback`.
 */

const WEEKDAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const SERVICE_OPTIONS = [...SERVICES.map((s) => s.name), 'Not sure yet'];

const visitorTz = () => {
  try { return Intl.DateTimeFormat().resolvedOptions().timeZone || 'local time'; } catch { return 'local time'; }
};
/** YYYY-MM-DD of an instant in the visitor's time zone. */
const localKey = (iso) => {
  const d = new Date(iso);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
};
const fmtTime = (iso) => new Date(iso).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
const fmtDayLong = (key) => {
  const [y, m, d] = key.split('-').map(Number);
  return new Date(y, m - 1, d).toLocaleDateString([], { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
};
const fmtWhen = (iso) => new Date(iso).toLocaleString([], { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit' });

const BookingCalendar = ({ fallback, bare = false }) => {
  const card = `bk-card${bare ? " bk-card--bare" : ""}`;
  const [status, setStatus] = useState('loading'); // loading | ready | fallback
  const [data, setData] = useState(null);
  const [month, setMonth] = useState(null); // { y, m } (m: 0-11)
  const [day, setDay] = useState(null);
  const [slot, setSlot] = useState(null);
  const [step, setStep] = useState('pick'); // pick | details | done
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [fieldErrors, setFieldErrors] = useState({});
  const [result, setResult] = useState(null);
  const [tz, setTz] = useState('');
  const timesRef = useRef(null);
  const nameRef = useRef(null);
  const doneRef = useRef(null);

  const load = useCallback(async (keepSelection = false) => {
    try {
      const res = await fetch('/api/availability', { headers: { Accept: 'application/json' } });
      const json = res.ok ? await res.json() : null;
      if (!json || !json.configured || json.error) { setStatus('fallback'); return; }
      setData(json);
      setStatus('ready');
      if (!keepSelection) {
        const first = Object.values(json.days).flat()[0];
        if (first) {
          const d = new Date(first);
          setMonth({ y: d.getFullYear(), m: d.getMonth() });
        }
      }
    } catch {
      setStatus('fallback');
    }
  }, []);

  useEffect(() => {
    setTz(visitorTz());
    load();
  }, [load]);

  // Regroup slots by the visitor's local date.
  const byDay = useMemo(() => {
    const map = {};
    if (!data) return map;
    Object.values(data.days).flat().forEach((iso) => {
      const k = localKey(iso);
      (map[k] ||= []).push(iso);
    });
    Object.values(map).forEach((list) => list.sort());
    return map;
  }, [data]);

  const dayKeys = Object.keys(byDay).sort();
  const firstMonth = dayKeys[0] ? { y: +dayKeys[0].slice(0, 4), m: +dayKeys[0].slice(5, 7) - 1 } : null;
  const lastMonth = dayKeys.length ? { y: +dayKeys.at(-1).slice(0, 4), m: +dayKeys.at(-1).slice(5, 7) - 1 } : null;
  const mIndex = (x) => (x ? x.y * 12 + x.m : 0);

  if (status === 'fallback') return fallback;

  if (status === 'loading') {
    return (
      <div className={card} aria-busy="true">
        <div className="bk-loading" role="status">
          <span className="bk-spinner" aria-hidden="true" />
          <span>Loading available times…</span>
        </div>
        <noscript>
          <p className="bk-noscript">Online booking needs JavaScript. Please email <a href={`mailto:${SITE.email}`}>{SITE.email}</a> to book.</p>
        </noscript>
        <BookingStyles />
      </div>
    );
  }

  /* ── Done ── */
  if (step === 'done' && result) {
    return (
      <div className={`${card} bk-done`}>
        <div className="bk-done-icon" aria-hidden="true"><Check size={40} strokeWidth={3} /></div>
        <h2 ref={doneRef} tabIndex={-1} className="bk-title">You're booked!</h2>
        <p className="bk-done-when">{fmtWhen(result.start)}</p>
        <p className="bk-done-tz">Times shown in {tz}</p>
        <p>
          A calendar invitation with your <strong>{result.platform}</strong> link has been sent to <strong>{result.email}</strong>.
          Please check your inbox (and spam folder).
        </p>
        {result.joinUrl && (
          <a className="btn btn-primary" href={result.joinUrl} target="_blank" rel="noopener noreferrer">
            <Video size={18} aria-hidden="true" /> Open meeting link<span className="sr-only"> (opens in a new tab)</span>
          </a>
        )}
        <p className="bk-small">Need to change the time? Reply to the invitation or email <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.</p>
        <BookingStyles />
      </div>
    );
  }

  /* ── Details form ── */
  if (step === 'details' && slot) {
    const submit = async (e) => {
      e.preventDefault();
      const f = new FormData(e.currentTarget);
      const payload = Object.fromEntries(f.entries());
      payload.start = slot;
      setSubmitting(true);
      setError('');
      setFieldErrors({});
      try {
        const res = await fetch('/api/book', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
        const json = await res.json().catch(() => ({}));
        if (res.ok && json.ok) {
          setResult({ ...json, start: json.start || slot, email: payload.email });
          setStep('done');
          requestAnimationFrame(() => doneRef.current?.focus());
          return;
        }
        if (res.status === 409) {
          setError(json.error || 'That time was just taken. Please choose another.');
          setSlot(null);
          setStep('pick');
          await load(true);
          return;
        }
        setFieldErrors(json.fields || {});
        setError(json.error || 'Something went wrong. Please try again.');
      } catch {
        setError(`We couldn't reach the booking service. Please try again or email ${SITE.email}.`);
      } finally {
        setSubmitting(false);
      }
    };

    return (
      <div className={card}>
        <button type="button" className="bk-back" onClick={() => { setStep('pick'); setError(''); }}>
          <ArrowLeft size={16} aria-hidden="true" /> Change time
        </button>
        <div className="bk-summary">
          <CalendarCheck size={20} aria-hidden="true" />
          <div>
            <strong>{fmtWhen(slot)}</strong>
            <span>{data.slotMinutes} minutes · {data.platform} · {tz}</span>
          </div>
        </div>
        <h2 className="bk-title">Your details</h2>
        {error && <p className="bk-error" role="alert">{error}</p>}
        <form onSubmit={submit} className="bk-form" noValidate={false}>
          <div className="bk-honeypot" aria-hidden="true">
            <label>Leave empty<input type="text" name="_honey" tabIndex={-1} autoComplete="off" /></label>
          </div>
          <div className="bk-row">
            <div className="bk-field">
              <label htmlFor="bk-name">Full name <span aria-hidden="true">*</span></label>
              <input ref={nameRef} id="bk-name" name="fullName" type="text" autoComplete="name" required aria-required="true" aria-invalid={!!fieldErrors.fullName} aria-describedby={fieldErrors.fullName ? 'bk-name-err' : undefined} />
              {fieldErrors.fullName && <span id="bk-name-err" className="bk-field-error">{fieldErrors.fullName}</span>}
            </div>
            <div className="bk-field">
              <label htmlFor="bk-email">Email <span aria-hidden="true">*</span></label>
              <input id="bk-email" name="email" type="email" autoComplete="email" required aria-required="true" aria-invalid={!!fieldErrors.email} aria-describedby={fieldErrors.email ? 'bk-email-err' : 'bk-email-hint'} />
              <span id="bk-email-hint" className="bk-hint">Your meeting invitation will be sent here.</span>
              {fieldErrors.email && <span id="bk-email-err" className="bk-field-error">{fieldErrors.email}</span>}
            </div>
          </div>
          <div className="bk-row">
            <div className="bk-field">
              <label htmlFor="bk-phone">Phone <span className="bk-optional">(optional)</span></label>
              <input id="bk-phone" name="phone" type="tel" autoComplete="tel" />
            </div>
            <div className="bk-field">
              <label htmlFor="bk-company">Company <span className="bk-optional">(optional)</span></label>
              <input id="bk-company" name="company" type="text" autoComplete="organization" />
            </div>
          </div>
          <div className="bk-field">
            <label htmlFor="bk-service">What would you like to discuss?</label>
            <select id="bk-service" name="service" defaultValue="">
              <option value="">Select a service</option>
              {SERVICE_OPTIONS.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <div className="bk-field">
            <label htmlFor="bk-message">Anything we should know? <span className="bk-optional">(optional)</span></label>
            <textarea id="bk-message" name="message" rows={3} maxLength={2000} />
          </div>
          <button type="submit" className="btn btn-primary btn-full btn-lg" disabled={submitting}>
            {submitting ? 'Booking…' : 'Confirm booking'}
          </button>
          <p className="bk-small">By booking you agree to our <a href="/privacy">Privacy Policy</a>.</p>
        </form>
        <BookingStyles />
      </div>
    );
  }

  /* ── Pick a date & time ── */
  const y = month?.y;
  const m = month?.m;
  const first = new Date(y, m, 1);
  const lead = (first.getDay() + 6) % 7; // Monday-first
  const daysInMonth = new Date(y, m + 1, 0).getDate();
  const cells = [...Array(lead).fill(null), ...Array.from({ length: daysInMonth }, (_, i) => i + 1)];
  const monthLabel = first.toLocaleDateString([], { month: 'long', year: 'numeric' });
  const canPrev = firstMonth && mIndex(month) > mIndex(firstMonth);
  const canNext = lastMonth && mIndex(month) < mIndex(lastMonth);
  const shift = (n) => {
    const d = new Date(y, m + n, 1);
    setMonth({ y: d.getFullYear(), m: d.getMonth() });
  };

  const chooseDay = (key) => {
    setDay(key);
    setError('');
    requestAnimationFrame(() => timesRef.current?.focus());
  };
  const chooseSlot = (iso) => {
    setSlot(iso);
    setStep('details');
    requestAnimationFrame(() => nameRef.current?.focus());
  };

  return (
    <div className={card}>
      <h2 className="bk-title">Pick a date &amp; time</h2>
      <p className="bk-meta">
        <span><Clock size={16} aria-hidden="true" /> {data.slotMinutes} minutes</span>
        <span><Video size={16} aria-hidden="true" /> {data.platform}</span>
      </p>
      {error && <p className="bk-error" role="alert">{error}</p>}

      {dayKeys.length === 0 ? (
        <p className="bk-empty">There are no open times in the next few weeks. Please email <a href={`mailto:${SITE.email}`}>{SITE.email}</a> and we'll find a time.</p>
      ) : (
        <div className="bk-layout">
          <div className="bk-calendar">
            <div className="bk-month">
              <button type="button" onClick={() => shift(-1)} disabled={!canPrev} aria-label="Previous month"><ChevronLeft size={20} aria-hidden="true" /></button>
              <h3 aria-live="polite">{monthLabel}</h3>
              <button type="button" onClick={() => shift(1)} disabled={!canNext} aria-label="Next month"><ChevronRight size={20} aria-hidden="true" /></button>
            </div>
            <div className="bk-grid" role="group" aria-label={`Available dates in ${monthLabel}`}>
              {WEEKDAYS.map((w) => <span key={w} className="bk-wd" aria-hidden="true">{w}</span>)}
              {cells.map((d, i) => {
                if (!d) return <span key={`e${i}`} />;
                const key = `${y}-${String(m + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
                const available = !!byDay[key];
                return (
                  <button
                    key={key}
                    type="button"
                    className={`bk-day ${available ? 'is-available' : ''} ${day === key ? 'is-selected' : ''}`}
                    disabled={!available}
                    aria-pressed={day === key}
                    aria-label={`${fmtDayLong(key)}${available ? `, ${byDay[key].length} times available` : ', unavailable'}`}
                    onClick={() => chooseDay(key)}
                  >
                    {d}
                  </button>
                );
              })}
            </div>
            <p className="bk-tz">Times shown in <strong>{tz}</strong></p>
          </div>

          <div className="bk-times">
            {day && byDay[day] ? (
              <>
                <h3 ref={timesRef} tabIndex={-1}>{fmtDayLong(day)}</h3>
                <ul className="bk-slot-list">
                  {byDay[day].map((iso) => (
                    <li key={iso}>
                      <button type="button" className="bk-slot" onClick={() => chooseSlot(iso)}>{fmtTime(iso)}</button>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <p className="bk-hint-box">Select a highlighted date to see available times.</p>
            )}
          </div>
        </div>
      )}
      <BookingStyles />
    </div>
  );
};

const BookingStyles = () => (
  <style dangerouslySetInnerHTML={{ __html: `
    .bk-card {
      background: var(--cream);
      border: 1px solid var(--line);
      border-top: 4px solid var(--lime);
      border-radius: 16px;
      box-shadow: var(--shadow-card);
      padding: 2rem;
    }
    .bk-card--bare { border: 0; box-shadow: none; padding: 0; background: transparent; border-radius: 0; }
    .bk-title { font-size: clamp(22px, 2.6vw, 28px); text-align: left; margin: 0 0 0.5rem; max-width: none; outline: none; }
    .bk-meta { display: flex; gap: 1.25rem; flex-wrap: wrap; color: var(--muted); font-size: 0.95rem; margin-bottom: 1.5rem; }
    .bk-meta span { display: inline-flex; align-items: center; gap: 6px; }
    .bk-loading { display: flex; flex-direction: column; align-items: center; gap: 1rem; padding: 4rem 0; color: var(--muted); font-family: var(--font-heading); font-weight: 600; }
    .bk-spinner { width: 44px; height: 44px; border-radius: 50%; border: 4px solid var(--line); border-top-color: var(--navy); border-right-color: var(--lime); animation: bk-spin 0.9s linear infinite; }
    @keyframes bk-spin { to { transform: rotate(360deg); } }
    .bk-layout { display: grid; grid-template-columns: 1.2fr 1fr; gap: 1.75rem; }
    .bk-month { display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.75rem; }
    .bk-month h3 { font-size: 1.1rem; margin: 0; }
    .bk-month button { width: 40px; height: 40px; min-height: 40px; border-radius: 50%; display: grid; place-items: center; color: var(--navy); border: 1px solid var(--line); }
    .bk-month button:hover:not(:disabled) { background: var(--surface-alt); }
    .bk-month button:disabled { opacity: 0.35; cursor: not-allowed; }
    .bk-grid { display: grid; grid-template-columns: repeat(7, 1fr); gap: 4px; }
    .bk-wd { text-align: center; font-family: var(--font-heading); font-size: 0.72rem; font-weight: 800; color: var(--muted); padding: 4px 0; text-transform: uppercase; letter-spacing: 0.05em; }
    .bk-day { aspect-ratio: 1; min-height: 38px; border-radius: 50%; font-family: var(--font-heading); font-weight: 600; color: var(--muted); font-size: 0.95rem; }
    .bk-day:disabled { cursor: default; opacity: 0.45; }
    .bk-day.is-available { color: var(--navy); font-weight: 800; background: var(--lime-20); box-shadow: inset 0 0 0 1.5px var(--navy); }
    .bk-day.is-available:hover { background: var(--lime); }
    .bk-day.is-selected, .bk-day.is-selected:hover { background: var(--navy); color: var(--lime); }
    .bk-tz { margin-top: 0.75rem; font-size: 0.85rem; color: var(--muted); }
    .bk-tz strong { color: var(--navy); }
    .bk-times h3 { font-size: 1rem; margin: 0 0 0.75rem; outline: none; }
    .bk-times h3:focus-visible, .bk-title:focus-visible { outline: none; box-shadow: none; }
    .bk-slot-list { list-style: none; display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.5rem; max-height: 340px; overflow-y: auto; padding: 2px; }
    .bk-slot { width: 100%; padding: 0.6rem; border: 1.5px solid var(--navy); border-radius: 8px; font-family: var(--font-heading); font-weight: 700; color: var(--navy); background: var(--cream); }
    .bk-slot:hover { background: var(--navy); color: var(--lime); }
    .bk-hint-box { border: 2px dashed var(--line); border-radius: 12px; padding: 1.5rem; color: var(--muted); text-align: center; }
    .bk-empty { color: var(--navy-80); }
    .bk-back { display: inline-flex; align-items: center; gap: 6px; color: var(--navy); font-weight: 700; text-decoration: underline; text-decoration-color: var(--lime); text-decoration-thickness: 2px; text-underline-offset: 3px; margin-bottom: 0.75rem; min-height: 36px; }
    .bk-summary { display: flex; gap: 0.75rem; align-items: flex-start; background: var(--navy); color: var(--cream); border-radius: 12px; padding: 1rem 1.25rem; margin-bottom: 1.5rem; }
    .bk-summary svg { color: var(--lime); flex-shrink: 0; margin-top: 3px; }
    .bk-summary strong { display: block; font-family: var(--font-heading); }
    .bk-summary span { font-size: 0.88rem; color: var(--cream-80); }
    .bk-form label { display: block; font-family: var(--font-heading); font-weight: 700; font-size: 0.9rem; color: var(--navy); margin-bottom: 0.4rem; }
    .bk-optional { font-weight: 500; color: var(--muted); }
    .bk-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
    .bk-field { margin-bottom: 1rem; }
    .bk-hint { display: block; font-size: 0.8rem; color: var(--muted); margin-top: 0.3rem; }
    .bk-field-error { display: block; font-size: 0.85rem; font-weight: 700; color: var(--navy); margin-top: 0.3rem; border-left: 3px solid var(--navy); padding-left: 6px; }
    .bk-form [aria-invalid="true"] { border: 2px solid var(--navy); box-shadow: inset 4px 0 0 var(--navy); }
    .bk-error { background: var(--surface-alt); border-left: 4px solid var(--navy); color: var(--navy); font-weight: 600; padding: 0.75rem 1rem; border-radius: 8px; margin-bottom: 1rem; }
    .bk-honeypot { position: absolute !important; left: -9999px !important; width: 1px; height: 1px; overflow: hidden; }
    .bk-small { font-size: 0.85rem; color: var(--muted); margin-top: 0.85rem; }
    .bk-small a, .bk-empty a, .bk-noscript a { color: var(--navy); font-weight: 600; text-decoration: underline; text-decoration-color: var(--lime); text-decoration-thickness: 2px; }
    .bk-done { text-align: center; display: flex; flex-direction: column; align-items: center; gap: 0.75rem; }
    .bk-done .bk-title { text-align: center; }
    .bk-done-icon { width: 80px; height: 80px; border-radius: 50%; background: var(--lime); color: var(--navy); display: grid; place-items: center; box-shadow: 0 0 0 10px var(--lime-20); margin-bottom: 0.5rem; }
    .bk-done-when { font-family: var(--font-heading); font-weight: 800; font-size: 1.15rem; color: var(--navy); }
    .bk-done-tz { font-size: 0.85rem; color: var(--muted); margin-top: -0.5rem; }
    .bk-done p { color: var(--navy-80); max-width: 460px; }
    .bk-noscript { padding: 1rem; text-align: center; }
    @media (max-width: 720px) {
      .bk-card { padding: 1.25rem; }
      .bk-layout, .bk-row { grid-template-columns: 1fr; }
      .bk-slot-list { grid-template-columns: repeat(3, 1fr); max-height: none; }
    }
  ` }} />
);

export default BookingCalendar;
