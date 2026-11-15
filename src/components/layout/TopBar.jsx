import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SITE } from '../../config/site';

const TopBar = () => (
  <div className="topbar">
    <div className="container topbar-inner">
      <div className="topbar-contact">
        <a href={`mailto:${SITE.email}`} className="topbar-link">
          <Mail size={14} aria-hidden="true" />
          <span><span className="sr-only">Email: </span>{SITE.email}</span>
        </a>
      </div>
      <Link to="/book-demo" className="topbar-link topbar-cta">
        Book a Free Discovery Call <ArrowRight size={14} aria-hidden="true" />
      </Link>
    </div>
    <style dangerouslySetInnerHTML={{ __html: `
      .topbar {
        background-color: var(--navy);
        color: var(--cream-80);
        padding: 0.35rem 0;
        font-size: 0.875rem;
        border-bottom: 1px solid var(--cream-15);
      }
      .topbar-inner {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .topbar-contact {
        display: flex;
        gap: 1.5rem;
      }
      .topbar-link {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: var(--cream-80);
        transition: color 0.2s;
        min-height: 32px;
      }
      .topbar-link:hover {
        color: var(--lime);
      }
      .topbar-cta {
        color: var(--lime);
        font-weight: 700;
        font-family: var(--font-heading);
      }
      @media (max-width: 768px) {
        .topbar-inner { flex-direction: column; gap: 0.25rem; text-align: center; }
        .topbar-contact { gap: 1rem; flex-wrap: wrap; justify-content: center; }
      }
    ` }} />
  </div>
);

export default TopBar;
