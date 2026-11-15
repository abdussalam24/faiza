import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';
import { SELECT_SERVICE_EVENT } from '../forms/EnquiryForm';

/* "Find your FABZ path" — 2-step chooser carried over from www.fabzhr.com. */
const PATHS = {
  organization: [
    { label: 'Strengthen our HR function', sub: 'Policies, employee relations, people operations', service: 'Fractional HR', path: '/fractional-hr', description: 'Flexible, senior HR expertise can help you establish processes, handle people challenges and support your team — without a full-time hire.' },
    { label: 'Hire a key person', sub: 'Professional or leadership recruitment', service: 'Recruitment & Executive Search', path: '/recruitment-executive-search', description: 'A focused search can help you define the role, reach qualified people, and make a confident hiring decision.' },
    { label: 'Support a cross-border move', sub: 'Planning for international people transitions', service: 'Global Mobility', path: '/global-mobility', description: 'Global Mobility can help coordinate the people side of an international move and clarify the next planning steps.' },
  ],
  career: [
    { label: 'Plan my next career step', sub: 'Resume, interviews and direction', service: 'Career Coaching', path: '/career-coaching', description: 'Career Coaching can help you clarify your goals, present your experience with confidence and prepare for the next opportunity.' },
    { label: 'Explore a move across borders', sub: 'Career and relocation planning', service: 'Global Mobility', path: '/global-mobility', description: 'Global Mobility can help you organize the people and career considerations of a cross-border transition.' },
    { label: 'Find my next role', sub: 'Share your profile with our team', service: null, serviceName: 'Careers', path: '/careers', description: 'Share your profile through our careers form and we will reach out when a role that fits your goals comes up.' },
  ],
};

const FabzPathGuide = () => {
  const [step, setStep] = useState(1);
  const [persona, setPersona] = useState(null);
  const [result, setResult] = useState(null);
  const headingRef = useRef(null);
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) { firstRender.current = false; return; }
    headingRef.current?.focus();
  }, [step]);

  const choosePersona = (p) => { setPersona(p); setStep(2); };
  const chooseResult = (r) => { setResult(r); setStep(3); };
  const reset = () => { setPersona(null); setResult(null); setStep(1); };

  const askAbout = () => {
    const target = document.getElementById('enquiry');
    if (target) {
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
    }
    setTimeout(() => window.dispatchEvent(new CustomEvent(SELECT_SERVICE_EVENT, { detail: result.service })), 300);
  };

  return (
    <section className="path-section on-navy" aria-labelledby="path-title">
      <div className="container path-layout">
        <AnimatedSection className="path-intro">
          <span className="section-label on-navy">INTERACTIVE GUIDE</span>
          <h2 id="path-title">Find your FABZ path.</h2>
          <p>Two quick choices can help you find the service to explore first. No sign-up needed.</p>
          <ul className="path-decor" aria-hidden="true">
            <li>HR</li><li>Talent</li><li>Careers</li><li>Global</li>
          </ul>
        </AnimatedSection>

        <AnimatedSection className="path-card" delay={0.15}>
          <div className="path-top">
            <span>YOUR PATH</span>
            <span aria-live="polite">{step === 3 ? 'Your match' : `Step ${step} of 2`}</span>
          </div>
          <div className="path-bars" aria-hidden="true">
            <span className={step >= 1 ? 'on' : ''} />
            <span className={step >= 2 ? 'on' : ''} />
          </div>

          {step === 1 && (
            <div className="path-stage">
              <h3 ref={headingRef} tabIndex={-1}>Who needs support?</h3>
              <p>Choose the perspective that fits your question.</p>
              <div className="path-options">
                <button type="button" onClick={() => choosePersona('organization')}>
                  <strong>My organization</strong>
                  <small>People operations, hiring, or international teams</small>
                </button>
                <button type="button" onClick={() => choosePersona('career')}>
                  <strong>My career</strong>
                  <small>Career direction, a new role or a cross-border move</small>
                </button>
              </div>
            </div>
          )}

          {step === 2 && persona && (
            <div className="path-stage">
              <button type="button" className="path-back" onClick={reset}>← Back</button>
              <h3 ref={headingRef} tabIndex={-1}>What are you working on?</h3>
              <p>Pick the closest match. We can discuss the details later.</p>
              <div className="path-options">
                {PATHS[persona].map((item) => (
                  <button type="button" key={item.label} onClick={() => chooseResult(item)}>
                    <strong>{item.label}</strong>
                    <small>{item.sub}</small>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && result && (
            <div className="path-result">
              <span className="result-label">A GOOD PLACE TO START</span>
              <h3 ref={headingRef} tabIndex={-1}>{result.service || result.serviceName}</h3>
              <p>{result.description}</p>
              <div className="path-actions">
                <Link to={result.path} className="btn btn-primary">
                  Explore {result.service || result.serviceName} <ArrowRight size={16} aria-hidden="true" />
                </Link>
                {result.service && (
                  <button type="button" className="btn btn-ghost" onClick={askAbout}>Ask about this service</button>
                )}
                <button type="button" className="path-reset" onClick={reset}>Start over</button>
              </div>
            </div>
          )}
        </AnimatedSection>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .path-section {
          background: var(--navy);
          color: var(--cream);
          padding: 100px 0;
          overflow: hidden;
        }
        .path-layout {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 64px;
          align-items: center;
        }
        .path-intro h2 {
          color: var(--cream);
          text-align: left;
          margin: 0 0 16px;
          max-width: 420px;
        }
        .path-intro p {
          color: var(--cream-80);
          max-width: 430px;
          font-size: 1.06rem;
        }
        .path-decor {
          list-style: none;
          display: flex;
          flex-wrap: wrap;
          gap: 9px;
          margin-top: 28px;
        }
        .path-decor li {
          border: 1px solid var(--cream-15);
          border-radius: 40px;
          padding: 7px 14px;
          color: var(--lime);
          font-family: var(--font-heading);
          font-size: 0.8rem;
          font-weight: 700;
        }
        .path-card {
          background: var(--cream);
          color: var(--navy);
          border: 1px solid var(--line);
          border-radius: 16px;
          padding: 30px;
          min-height: 400px;
          box-shadow: 0 25px 60px rgba(11, 32, 48, 0.5);
        }
        .path-top {
          display: flex;
          justify-content: space-between;
          font-family: var(--font-heading);
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          color: var(--muted);
        }
        .path-bars {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 7px;
          margin: 16px 0 28px;
        }
        .path-bars span {
          height: 6px;
          background: var(--line);
          border-radius: 10px;
          transition: background 0.3s;
        }
        .path-bars span.on { background: var(--navy); }
        .path-stage h3, .path-result h3 {
          font-size: clamp(1.5rem, 2.6vw, 2.2rem);
          margin-bottom: 8px;
          outline: none;
        }
        .path-stage > p, .path-result > p {
          color: var(--navy-80);
          margin-bottom: 22px;
        }
        .path-options {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 12px;
        }
        .path-options button {
          min-height: 120px;
          text-align: left;
          background: var(--cream);
          border: 1.5px solid var(--line);
          border-radius: 10px;
          padding: 18px;
          color: var(--navy);
          transition: transform 0.2s, border-color 0.2s, box-shadow 0.2s;
        }
        .path-options button:hover {
          transform: translateY(-3px);
          border-color: var(--navy);
          box-shadow: inset 0 -4px 0 var(--lime), 0 8px 20px var(--navy-12);
        }
        .path-options strong, .path-options small { display: block; }
        .path-options strong {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1rem;
          margin-bottom: 6px;
        }
        .path-options small {
          font-family: var(--font-body);
          font-size: 0.86rem;
          color: var(--muted);
          line-height: 1.4;
        }
        .path-back, .path-reset {
          color: var(--navy);
          font-weight: 700;
          font-size: 0.92rem;
          text-decoration: underline;
          text-decoration-color: var(--lime);
          text-decoration-thickness: 2px;
          text-underline-offset: 3px;
        }
        .path-back { margin-bottom: 8px; }
        .result-label {
          display: block;
          font-family: var(--font-heading);
          font-size: 0.75rem;
          letter-spacing: 0.15em;
          font-weight: 800;
          color: var(--muted);
          margin-bottom: 12px;
          border-left: 3px solid var(--lime);
          padding-left: 8px;
        }
        .path-actions .btn { font-size: 0.95rem; }
        .path-actions {
          display: flex;
          gap: 14px;
          align-items: center;
          flex-wrap: wrap;
          margin-top: 8px;
        }
        @media (max-width: 900px) {
          .path-layout { grid-template-columns: 1fr; gap: 32px; }
          .path-card { min-height: 0; padding: 22px; }
        }
        @media (max-width: 768px) {
          .path-section { padding: 64px 0; }
        }
      ` }} />
    </section>
  );
};

export default FabzPathGuide;
