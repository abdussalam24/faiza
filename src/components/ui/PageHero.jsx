import React from 'react';
import Breadcrumbs from './Breadcrumbs';

/**
 * Navy page header used by inner pages (About, Contact, Careers, legal pages).
 * The door symbol sits on the right as a purely decorative element.
 */
const PageHero = ({ eyebrow, title, subtitle, breadcrumbs, door = true, children }) => (
  <section className="page-hero on-navy">
    <div className="container page-hero-inner">
      {eyebrow && <span className="section-label on-navy">{eyebrow}</span>}
      <h1 className="page-title">{title}</h1>
      {subtitle && <p className="page-subtitle">{subtitle}</p>}
      {children}
      {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
    </div>
    {door && (
      <img
        className="page-hero-door"
        src="/images/fabz-door.webp"
        alt=""
        aria-hidden="true"
        width="560"
        height="793"
        decoding="async"
      />
    )}

    <style dangerouslySetInnerHTML={{ __html: `
      .page-hero {
        position: relative;
        overflow: hidden;
        background:
          radial-gradient(circle at 82% 40%, var(--cream-15) 0, transparent 42%),
          var(--navy);
        color: var(--cream);
        padding: 6rem 0;
        border-bottom: 4px solid var(--lime);
        text-align: center;
      }
      .page-hero-inner {
        position: relative;
        z-index: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .page-title {
        font-size: 3rem;
        margin-bottom: 0.75rem;
        color: var(--cream);
        max-width: 860px;
      }
      .page-subtitle {
        font-size: 1.25rem;
        color: var(--cream-80);
        margin-bottom: 1.5rem;
        max-width: 720px;
      }
      .page-hero-door {
        position: absolute;
        right: max(2vw, calc((100vw - 1320px) / 2));
        bottom: -24px;
        height: 115%;
        width: auto;
        opacity: 0.22;
        pointer-events: none;
        z-index: 0;
      }
      @media (max-width: 768px) {
        .page-hero { padding: 4rem 0; }
        .page-title { font-size: 2.25rem; }
        .page-subtitle { font-size: 1.1rem; }
        .page-hero-door { opacity: 0.12; right: -40px; }
      }
    ` }} />
  </section>
);

export default PageHero;
