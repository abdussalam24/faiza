import React from 'react';
import PageHero from '../../components/ui/PageHero';
import Seo from '../../components/seo/Seo';
import { breadcrumbSchema } from '../../components/seo/schema';

export const LAST_UPDATED = 'November 15, 2026';

/** Shared layout for Privacy, Terms and Accessibility pages. sections: [{ id, title, body }] */
const LegalLayout = ({ title, description, path, intro, sections }) => (
  <>
    <Seo title={`${title} | FABZ HR Consulting`} description={description} path={path} jsonLd={breadcrumbSchema([{ name: title, path }])} />
    <PageHero title={title} subtitle={`Last updated: ${LAST_UPDATED}`} breadcrumbs={[{ name: title }]} door={false} />

    <section className="legal-section">
      <div className="container legal-grid">
        <nav className="legal-toc" aria-label="On this page">
          <p className="legal-toc-title">On this page</p>
          <ol>
            {sections.map((s) => (
              <li key={s.id}><a href={`#${s.id}`}>{s.title}</a></li>
            ))}
          </ol>
        </nav>
        <article className="legal-body">
          {intro}
          {sections.map((s, i) => (
            <section key={s.id} id={s.id} aria-labelledby={`${s.id}-h`}>
              <h2 id={`${s.id}-h`}>{i + 1}. {s.title}</h2>
              {s.body}
            </section>
          ))}
        </article>
      </div>
    </section>

    <style dangerouslySetInnerHTML={{ __html: `
      .legal-section {
        background: var(--cream);
        padding: 4.5rem 0 6rem;
      }
      .legal-grid {
        display: grid;
        grid-template-columns: 260px 1fr;
        gap: 4rem;
        align-items: start;
      }
      .legal-toc {
        position: sticky;
        top: 110px;
        border-left: 3px solid var(--lime);
        padding-left: 1rem;
      }
      .legal-toc-title {
        font-family: var(--font-heading);
        font-weight: 800;
        font-size: 0.8rem;
        letter-spacing: 0.14em;
        text-transform: uppercase;
        color: var(--muted);
        margin-bottom: 0.5rem;
      }
      .legal-toc ol { list-style: none; counter-reset: toc; }
      .legal-toc li { counter-increment: toc; }
      .legal-toc a {
        display: flex;
        gap: 0.5rem;
        min-height: 34px;
        align-items: center;
        font-size: 0.92rem;
        color: var(--navy-80);
        line-height: 1.35;
      }
      .legal-toc a::before { content: counter(toc) '.'; color: var(--muted); }
      .legal-toc a:hover { color: var(--navy); text-decoration: underline; text-decoration-color: var(--lime); text-decoration-thickness: 2px; }
      .legal-body { max-width: 760px; color: var(--navy-80); }
      .legal-body > p, .legal-body section p { margin-bottom: 1rem; line-height: 1.75; }
      .legal-body section { scroll-margin-top: 110px; margin-bottom: 2.5rem; }
      .legal-body h2 {
        font-size: 1.5rem;
        text-align: left;
        margin: 0 0 1rem;
        max-width: none;
        padding-top: 0.5rem;
        border-top: 1px solid var(--line);
        padding-top: 1.5rem;
      }
      .legal-body h3 { font-size: 1.1rem; margin: 1.25rem 0 0.5rem; }
      .legal-body ul { margin: 0 0 1rem 1.25rem; }
      .legal-body li { margin-bottom: 0.5rem; line-height: 1.7; }
      .legal-body strong { color: var(--navy); }
      .legal-body a { color: var(--navy); font-weight: 600; text-decoration: underline; text-decoration-color: var(--lime); text-decoration-thickness: 2px; text-underline-offset: 3px; }
      .legal-callout {
        background: var(--surface-alt);
        border-left: 4px solid var(--lime);
        border-radius: 8px;
        padding: 1.25rem 1.5rem;
        margin-bottom: 2rem;
      }
      .legal-table { width: 100%; border-collapse: collapse; margin-bottom: 1rem; font-size: 0.95rem; }
      .legal-table th, .legal-table td { text-align: left; padding: 0.75rem; border-bottom: 1px solid var(--line); vertical-align: top; }
      .legal-table th { font-family: var(--font-heading); color: var(--navy); background: var(--surface-alt); }
      @media (max-width: 900px) {
        .legal-grid { grid-template-columns: 1fr; gap: 2rem; }
        .legal-toc { position: static; }
      }
      @media (max-width: 576px) {
        .legal-table { display: block; overflow-x: auto; }
      }
    ` }} />
  </>
);

export default LegalLayout;
