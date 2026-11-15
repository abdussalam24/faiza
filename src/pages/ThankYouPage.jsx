import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import Seo from '../components/seo/Seo';
import { SITE } from '../config/site';

/** FormSubmit `_next` redirect target for every form on the site. */
const ThankYouPage = () => (
  <>
    <Seo
      title="Thank You | FABZ HR Consulting"
      description="Thanks for contacting FABZ HR International Inc. We have received your message and will reply within 1 business day. Explore our HR services in the meantime."
      path="/thank-you"
      noindex
    />
    <section className="status-page">
      <div className="container status-inner">
        <div className="status-icon" aria-hidden="true"><Check size={48} strokeWidth={3} /></div>
        <h1 className="status-title">Thanks — we've received your message</h1>
        <p className="status-copy">
          {SITE.responseTime}. If your matter is urgent, call us on{' '}
          <a className="text-link" href={`tel:${SITE.phone.href}`}>{SITE.phone.display}</a> or email{' '}
          <a className="text-link" href={`mailto:${SITE.email}`}>{SITE.email}</a>.
        </p>
        <div className="status-actions">
          <Link to="/" className="btn btn-primary">Back to Home</Link>
          <Link to="/#services" className="btn btn-ghost">Explore Our Services</Link>
        </div>
      </div>
    </section>
    <StatusStyles />
  </>
);

export const StatusStyles = () => (
  <style dangerouslySetInnerHTML={{ __html: `
    .status-page {
      background: var(--cream);
      padding: 7rem 0;
      min-height: 60vh;
      display: flex;
      align-items: center;
    }
    .status-inner {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      max-width: 760px;
    }
    .status-icon {
      width: 96px;
      height: 96px;
      border-radius: 50%;
      background: var(--lime);
      color: var(--navy);
      display: grid;
      place-items: center;
      margin-bottom: 2rem;
      box-shadow: 0 0 0 10px var(--lime-20);
    }
    .status-code {
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: clamp(64px, 12vw, 120px);
      line-height: 1;
      color: var(--navy);
      margin-bottom: 0.5rem;
    }
    .status-code span { color: var(--navy); text-decoration: underline; text-decoration-color: var(--lime); text-decoration-thickness: 10px; text-underline-offset: 10px; }
    .status-title {
      font-size: clamp(30px, 4.5vw, 48px);
      margin-bottom: 1rem;
    }
    .status-copy {
      color: var(--navy-80);
      font-size: 1.1rem;
      margin-bottom: 2rem;
    }
    .status-actions {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
      justify-content: center;
    }
    .status-links {
      list-style: none;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
      width: 100%;
      margin: 0 0 2.5rem;
    }
    .status-links a {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.25rem;
      text-align: left;
      padding: 1.25rem 1.5rem;
      border: 1px solid var(--line);
      border-radius: 14px;
      background: var(--cream);
      transition: border-color 0.2s, transform 0.2s, box-shadow 0.2s;
    }
    .status-links a:hover {
      border-color: var(--navy);
      transform: translateY(-3px);
      box-shadow: var(--shadow-card-hover);
    }
    .status-links strong { font-family: var(--font-heading); color: var(--navy); }
    .status-links span { color: var(--muted); font-size: 0.92rem; line-height: 1.5; }
    @media (max-width: 576px) {
      .status-page { padding: 4rem 0; }
      .status-links { grid-template-columns: 1fr; }
    }
  ` }} />
);

export default ThankYouPage;
