import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { CHAT, SITE } from '../../config/site';

/*
 * "Ask FABZ HR" — React port of the quick-answer assistant on www.fabzhr.com
 * (bottom-right bubble, same label). Answers are matched on keywords, so no data
 * leaves the browser. If Tawk.to IDs are set in src/config/site.js, Tawk loads instead.
 */

const contactLine = `email ${SITE.email} or call ${SITE.phone.display}`;

const ANSWERS = [
  { k: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening', 'salam', 'assalam'], a: 'Hello! I can tell you about our four services: Recruitment & Executive Search, Fractional HR, Global Mobility and Career Coaching. What would you like to know?' },
  { k: ['thank', 'thanks', 'thx'], a: `You're welcome! If you need anything else, just ask, or ${contactLine}.` },
  { k: ['bye', 'goodbye'], a: 'Thanks for visiting FABZ HR. Have a great day!' },
  { k: ['service', 'services', 'what do you do', 'offer', 'help with'], a: 'We offer four services: 1) Recruitment & Executive Search, 2) Fractional HR, 3) Global Mobility and 4) Career Coaching. Ask me about any of them.', link: { to: '/#services', label: 'See all services' } },
  { k: ['hr support', 'fractional', 'hr policy', 'policies', 'policy', 'employee relations', 'performance', 'people operations', 'hr help', 'hr department', 'audit', 'handbook'], a: 'Fractional HR gives your organization senior, hands-on HR leadership without a full-time hire — HR audits, policies, employee relations, recruiting strategy and more.', link: { to: '/fractional-hr', label: 'Fractional HR' } },
  { k: ['hire', 'hiring', 'recruit', 'recruitment', 'talent', 'find staff', 'find employee', 'executive search', 'headhunt', 'leadership role', 'staffing'], a: 'Our Recruitment & Executive Search service helps you fill specialist, professional and leadership roles. We define the role, source and assess suitable talent, and support you through interviews and the offer.', link: { to: '/recruitment-executive-search', label: 'Recruitment & Executive Search' } },
  { k: ['career', 'resume', 'cv', 'linkedin', 'interview', 'coaching', 'career help', 'next step', 'promotion'], a: 'Career Coaching helps with your resume and LinkedIn, interview preparation, career transitions and executive presence — one-on-one with a senior HR leader.', link: { to: '/career-coaching', label: 'Career Coaching' } },
  { k: ['global', 'mobility', 'relocat', 'move abroad', 'moving', 'cross-border', 'cross border', 'international', 'immigrat', 'visa', 'work permit'], a: 'Global Mobility supports cross-border moves for employers and individuals: relocation planning, international onboarding and assignment policies. For regulated immigration advice we work alongside licensed immigration professionals.', link: { to: '/global-mobility', label: 'Global Mobility' } },
  { k: ['job', 'jobs', 'opening', 'openings', 'vacanc', 'position', 'apply', 'application', 'work for', 'career with'], a: 'You can share your profile through the form on our Careers page and we will reach out when a suitable role comes up.', link: { to: '/careers', label: 'Careers' } },
  { k: ['partner', 'partnership', 'vendor', 'collaborat', 'supplier'], a: 'We welcome vendors and service partners. Use the contact form with "Vendor / Partnership" selected to introduce your organization.', link: { to: '/contact?service=partnership#contact-form', label: 'Partner with us' } },
  { k: ['price', 'pricing', 'cost', 'fee', 'fees', 'charge', 'rate', 'how much', 'quote'], a: 'Pricing depends on the scope of the work — we offer monthly retainers, project fees, coaching packages and placement fees, and always confirm a custom quote in writing before work starts.', link: { to: '/contact', label: 'Request a quote' } },
  { k: ['where', 'location', 'located', 'office', 'address', 'toronto', 'canada', 'country', 'ontario'], a: `${SITE.registrationSentence} We work with clients across Ontario and Canada, and support international moves.` },
  { k: ['contact', 'email', 'phone', 'call', 'reach', 'talk to', 'speak', 'human', 'person'], a: `You can ${contactLine}, or use the contact form. ${SITE.responseTime}.`, link: { to: '/contact', label: 'Contact page' } },
  { k: ['consultation', 'book', 'appointment', 'meeting', 'discovery', 'health check'], a: 'You can book a free discovery call with Faiza — 30 minutes, no obligation.', link: { to: '/book-demo', label: 'Book a consultation' } },
  { k: ['about', 'who are you', 'who is fabz', 'company', 'fabz', 'faiza', 'founder'], a: `${SITE.registrationSentence} FABZ HR was founded by Faiza Hussain, an HR leader with 14+ years of experience, 6+ in leadership roles.`, link: { to: '/about', label: 'About us' } },
  { k: ['process', 'how do you work', 'how does it work', 'approach', 'steps', 'start'], a: 'Our process has three steps: 1) assess your needs, 2) agree on a plan (scope, timeline, contacts), 3) deliver and follow through, keeping you informed along the way.' },
  { k: ['mission', 'vision', 'values'], a: 'Our mission is to help organizations build strong teams and professionals pursue meaningful careers. Our core values are Accountability, Respect, Transparency and Trust.', link: { to: '/about', label: 'Our mission & values' } },
];

const FALLBACK = `Sorry, I don't have an answer for that one. Please ${contactLine}, or use the contact form, and our team will get back to you.`;
const PROMPTS = [
  ['HR support', 'Tell me about HR support'],
  ['Hiring', 'I need to hire'],
  ['Career help', 'I need career help'],
  ['Global move', 'Help with a global move'],
];

function reply(text) {
  const t = ` ${text.toLowerCase().replace(/[^a-z0-9\s'-]/g, ' ').replace(/\s+/g, ' ')} `;
  let best = null;
  let score = 0;
  ANSWERS.forEach((item) => {
    let s = 0;
    item.k.forEach((k) => {
      if (k.length <= 3 ? t.includes(` ${k} `) : t.includes(k)) s += k.split(' ').length;
    });
    if (s > score) { score = s; best = item; }
  });
  return best ? { text: best.a, link: best.link } : { text: FALLBACK, link: { to: '/contact', label: 'Contact us' } };
}

const TAWK_ENABLED = Boolean(CHAT.tawk.propertyId && CHAT.tawk.widgetId);

const TawkLoader = () => {
  useEffect(() => {
    if (document.getElementById('tawk-script')) return;
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();
    const s = document.createElement('script');
    s.id = 'tawk-script';
    s.async = true;
    s.src = `https://embed.tawk.to/${CHAT.tawk.propertyId}/${CHAT.tawk.widgetId}`;
    s.charset = 'UTF-8';
    s.setAttribute('crossorigin', '*');
    document.body.appendChild(s);
  }, []);
  return null;
};

const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { who: 'bot', text: 'Hi! I can help you find the right FABZ HR service. What would you like to know?' },
  ]);
  const [question, setQuestion] = useState('');
  const [busy, setBusy] = useState(false);
  const launcherRef = useRef(null);
  const inputRef = useRef(null);
  const logRef = useRef(null);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        launcherRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  useEffect(() => {
    if (logRef.current) logRef.current.scrollTop = logRef.current.scrollHeight;
  }, [messages]);

  if (TAWK_ENABLED) return <TawkLoader />;

  const ask = (value) => {
    const v = value.trim();
    if (!v || busy) return;
    setBusy(true);
    setQuestion('');
    setMessages((m) => [...m, { who: 'user', text: v }, { who: 'bot', text: 'Typing…', pending: true }]);
    setTimeout(() => {
      const r = reply(v);
      setMessages((m) => [...m.filter((x) => !x.pending), { who: 'bot', ...r }]);
      setBusy(false);
      inputRef.current?.focus();
    }, 450);
  };

  return (
    <div className="chat-widget">
      <div
        id="chat-panel"
        className="chat-panel"
        role="dialog"
        aria-label="FABZ HR guide"
        hidden={!open}
      >
        <div className="chat-head">
          <div>
            <strong>FABZ HR Guide</strong>
            <small>Quick answers · {SITE.email}</small>
          </div>
          <button
            type="button"
            className="chat-close"
            aria-label="Close chat"
            onClick={() => { setOpen(false); launcherRef.current?.focus(); }}
          >
            <X size={22} aria-hidden="true" />
          </button>
        </div>
        <div className="chat-log" ref={logRef} aria-live="polite">
          {messages.map((m, i) => (
            <div key={i} className={`chat-message ${m.who}`}>
              <p>{m.text}</p>
              {m.link && (
                <Link to={m.link.to} className="chat-link" onClick={() => setOpen(false)}>
                  {m.link.label} →
                </Link>
              )}
            </div>
          ))}
        </div>
        <div className="chat-prompts">
          {PROMPTS.map(([label, q]) => (
            <button key={label} type="button" onClick={() => ask(q)}>{label}</button>
          ))}
        </div>
        <form
          className="chat-form"
          onSubmit={(e) => { e.preventDefault(); ask(question); }}
        >
          <label htmlFor="chat-question" className="sr-only">Your question</label>
          <input
            id="chat-question"
            ref={inputRef}
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Type your question…"
            autoComplete="off"
          />
          <button type="submit" disabled={busy}>Send</button>
        </form>
        <div className="chat-handoff">
          <span>Need a person?</span>
          <Link to="/contact" onClick={() => setOpen(false)}>Send an enquiry</Link>
        </div>
      </div>

      <button
        ref={launcherRef}
        type="button"
        className="chat-launch"
        aria-expanded={open}
        aria-controls="chat-panel"
        onClick={() => setOpen((o) => !o)}
      >
        <span className="chat-spark" aria-hidden="true">✦</span> {CHAT.label}
      </button>

      <style dangerouslySetInnerHTML={{ __html: `
        .chat-widget {
          position: fixed;
          right: clamp(14px, 2vw, 30px);
          bottom: clamp(14px, 2vw, 26px);
          z-index: 999;
          font-family: var(--font-body);
        }
        .chat-launch {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          border: 2px solid var(--lime);
          border-radius: 50px;
          background: var(--navy);
          color: var(--lime);
          padding: 12px 20px;
          box-shadow: 0 10px 28px rgba(11, 32, 48, 0.35);
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 0.92rem;
          min-height: 48px;
        }
        .chat-launch:hover { background: var(--lime); color: var(--navy); }
        .chat-spark { font-size: 1.15rem; }
        .chat-panel {
          position: absolute;
          right: 0;
          bottom: calc(100% + 12px);
          width: min(360px, calc(100vw - 28px));
          height: min(540px, calc(100dvh - 110px));
          background: var(--cream);
          color: var(--navy);
          box-shadow: 0 16px 60px rgba(11, 32, 48, 0.4);
          border: 1px solid var(--line);
          border-radius: 15px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }
        .chat-panel[hidden] { display: none; }
        .chat-head {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: var(--navy);
          color: var(--cream);
          padding: 12px 14px 12px 17px;
          border-bottom: 3px solid var(--lime);
        }
        .chat-head strong { display: block; font-family: var(--font-heading); }
        .chat-head small { display: block; color: var(--cream-80); font-size: 0.75rem; }
        .chat-close { color: var(--cream); display: flex; align-items: center; justify-content: center; min-width: 44px; }
        .chat-log {
          flex: 1;
          overflow-y: auto;
          padding: 16px;
          background: var(--surface-alt);
        }
        .chat-message {
          max-width: 90%;
          padding: 10px 13px;
          margin: 0 0 12px;
          border-radius: 12px;
          font-size: 0.9rem;
          line-height: 1.45;
          overflow-wrap: anywhere;
        }
        .chat-message p { line-height: 1.45; }
        .chat-message.bot {
          background: var(--cream);
          border: 1px solid var(--line);
          border-top-left-radius: 2px;
        }
        .chat-message.user {
          background: var(--navy);
          color: var(--cream);
          margin-left: auto;
          border-top-right-radius: 2px;
        }
        .chat-link {
          display: inline-flex;
          align-items: center;
          min-height: 32px;
          margin-top: 4px;
          font-weight: 700;
          color: var(--navy);
          text-decoration: underline;
          text-decoration-color: var(--lime);
          text-decoration-thickness: 2px;
          text-underline-offset: 3px;
        }
        .chat-prompts {
          display: flex;
          gap: 6px;
          flex-wrap: wrap;
          padding: 10px 12px 0;
        }
        .chat-prompts button {
          border: 1px solid var(--navy);
          color: var(--navy);
          border-radius: 30px;
          background: var(--cream);
          padding: 4px 11px;
          font-size: 0.78rem;
          font-weight: 700;
          min-height: 32px;
        }
        .chat-prompts button:hover { background: var(--lime); }
        .chat-form { display: flex; gap: 7px; padding: 10px 12px; }
        .chat-form input {
          min-width: 0;
          flex: 1;
          padding: 10px;
          font-size: 0.9rem;
          border-radius: 7px;
        }
        .chat-form button {
          border-radius: 7px;
          background: var(--navy);
          color: var(--lime);
          padding: 0 14px;
          font-weight: 800;
        }
        .chat-form button:disabled { opacity: 0.5; cursor: wait; }
        .chat-handoff {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 10px;
          padding: 4px 13px;
          background: var(--surface-alt);
          border-top: 1px solid var(--line);
          font-size: 0.82rem;
          color: var(--muted);
        }
        .chat-handoff a {
          font-weight: 800;
          color: var(--navy);
          text-decoration: underline;
          display: inline-flex;
          align-items: center;
        }
      ` }} />
    </div>
  );
};

export default ChatWidget;
