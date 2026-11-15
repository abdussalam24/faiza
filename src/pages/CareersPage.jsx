import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '../components/ui/AnimatedSection';
import PageHero from '../components/ui/PageHero';
import Seo from '../components/seo/Seo';
import { breadcrumbSchema } from '../components/seo/schema';
import { CAREERS, SITE } from '../config/site';

const CareersPage = () => {
  // The iframe is mounted after hydration so its onLoad always fires (prerendered HTML shows the loader).
  const [mounted, setMounted] = useState(false);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <>
      <Seo
        title="Careers | FABZ HR International Inc."
        description="Looking for a professional or leadership role in Canada? Share your profile with FABZ HR and we will reach out when the right opportunity comes up."
        path="/careers"
        jsonLd={breadcrumbSchema([{ name: 'Careers', path: '/careers' }])}
      />

      <PageHero
        eyebrow="CAREERS"
        title="Work With Us"
        subtitle="Find your next opportunity in HR, professional, or leadership roles."
        breadcrumbs={[{ name: 'Careers' }]}
      />

      {/* Intro */}
      <section className="section-wrapper careers-intro" style={{ backgroundColor: 'var(--cream)', paddingBottom: '2rem' }}>
        <div className="container">
          <AnimatedSection className="text-center">
            <p className="careers-lead">
              We connect talented professionals with meaningful roles. Submit your profile below — we keep profiles on file and reach out when the right role comes up.
            </p>
            <p className="careers-licence">
              {SITE.legalName} holds an <strong>{SITE.recruiterLicence.label}</strong>. Candidates are never charged a fee to be considered for or placed in a role.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Google Form */}
      <section className="careers-form-section" style={{ backgroundColor: 'var(--cream)' }} aria-labelledby="careers-form-title">
        <div className="container">
          <div className="careers-form-card">
            <h2 id="careers-form-title" className="careers-form-title">Share Your Profile</h2>
            <div className="careers-iframe-wrap" aria-busy={!loaded}>
              {!loaded && (
                <div className="careers-loading" role="status">
                  <span className="spinner" aria-hidden="true" />
                  <span>Loading the application form…</span>
                </div>
              )}
              {mounted && (
                <iframe
                  src={CAREERS.googleFormEmbedUrl}
                  title="FABZ HR careers application form"
                  className={`careers-iframe ${loaded ? 'is-loaded' : ''}`}
                  loading="lazy"
                  onLoad={() => setLoaded(true)}
                >
                  Loading…
                </iframe>
              )}
              <noscript>
                <p className="careers-noscript">
                  <a className="text-link" href={CAREERS.googleFormPublicUrl}>Open the application form in Google Forms</a>
                </p>
              </noscript>
            </div>
          </div>

          <p className="careers-fallback">
            Having trouble with the form? Email your resume to{' '}
            <a className="text-link" href={`mailto:${CAREERS.resumeEmail}?subject=${encodeURIComponent('Resume — FABZ HR careers')}`}>
              {CAREERS.resumeEmail}
            </a>
            {' '}or <a className="text-link" href={CAREERS.googleFormPublicUrl} target="_blank" rel="noopener noreferrer">open the form in a new tab<span className="sr-only"> (opens in a new tab)</span></a>.
          </p>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="careers-cta on-navy">
        <div className="container careers-cta-inner">
          <div>
            <h2 className="careers-cta-title">Hiring for your organization instead?</h2>
            <p>We help growing businesses and leadership teams find the right people.</p>
          </div>
          <div className="careers-cta-actions">
            <Link to="/recruitment-executive-search" className="btn btn-ghost-white">Recruitment &amp; Executive Search</Link>
            <Link to="/contact" className="btn btn-primary">
              Talk to Us <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .careers-licence {
          max-width: 760px;
          margin: 1.25rem auto 0;
          display: inline-block;
          border-left: 3px solid var(--lime);
          padding-left: 12px;
          color: var(--navy-80);
          text-align: left;
        }
        .careers-licence strong { color: var(--navy); }
        .careers-lead {
          font-size: 1.2rem;
          color: var(--navy-80);
          max-width: 800px;
          margin: 0 auto;
        }
        .careers-form-section {
          padding-bottom: 5rem;
        }
        .careers-form-card {
          max-width: 860px;
          margin: 0 auto;
          background: var(--cream);
          border: 1px solid var(--line);
          border-top: 4px solid var(--lime);
          border-radius: 16px;
          box-shadow: var(--shadow-card);
          padding: 2rem 1rem 1rem;
        }
        .careers-form-title {
          font-size: clamp(24px, 3vw, 32px);
          margin-bottom: 1rem;
        }
        .careers-iframe-wrap {
          position: relative;
          min-height: 1200px;
        }
        .careers-iframe {
          display: block;
          width: 100%;
          min-height: 1200px;
          height: 1200px;
          border: 0;
          opacity: 0;
          transition: opacity 0.3s ease;
          background: var(--cream);
        }
        .careers-iframe.is-loaded { opacity: 1; }
        .careers-loading {
          position: absolute;
          inset: 0 0 auto 0;
          padding-top: 6rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          color: var(--muted);
          font-family: var(--font-heading);
          font-weight: 600;
        }
        .spinner {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 4px solid var(--line);
          border-top-color: var(--navy);
          border-right-color: var(--lime);
          animation: careers-spin 0.9s linear infinite;
        }
        @keyframes careers-spin { to { transform: rotate(360deg); } }
        .careers-noscript { text-align: center; padding: 2rem; }
        .careers-fallback {
          text-align: center;
          margin: 2rem auto 0;
          max-width: 760px;
          color: var(--navy-80);
        }
        .careers-cta {
          background: var(--navy);
          border-top: 4px solid var(--lime);
          padding: 4rem 0;
          color: var(--cream);
        }
        .careers-cta-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 2rem;
          flex-wrap: wrap;
        }
        .careers-cta-title {
          color: var(--cream);
          text-align: left;
          margin: 0 0 0.5rem;
          font-size: clamp(24px, 3vw, 34px);
        }
        .careers-cta p { color: var(--cream-80); }
        .careers-cta-actions { display: flex; gap: 1rem; flex-wrap: wrap; }
        @media (max-width: 768px) {
          .careers-form-card { padding: 1.5rem 0.25rem 0.5rem; border-radius: 12px; }
          .careers-form-title { padding: 0 1rem; }
          .careers-iframe, .careers-iframe-wrap { min-height: 1400px; height: 1400px; }
        }
      ` }} />
    </>
  );
};

export default CareersPage;
