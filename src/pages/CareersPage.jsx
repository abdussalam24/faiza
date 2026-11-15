import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '../components/ui/AnimatedSection';
import PageHero from '../components/ui/PageHero';
import Seo from '../components/seo/Seo';
import { breadcrumbSchema } from '../components/seo/schema';
import GoogleFormEmbed from '../components/forms/GoogleFormEmbed';
import { CAREERS, SITE } from '../config/site';

const CareersPage = () => {
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
          <GoogleFormEmbed
            embedUrl={CAREERS.googleFormEmbedUrl}
            publicUrl={CAREERS.googleFormPublicUrl}
            title="FABZ HR careers application form"
            heading="Share Your Profile"
            headingId="careers-form-title"
            loadingText="Loading the application form…"
          />

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
      ` }} />
    </>
  );
};

export default CareersPage;
