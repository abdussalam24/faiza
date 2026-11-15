import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ClipboardCheck, FileSearch, MessagesSquare } from 'lucide-react';
import AnimatedSection from '../components/ui/AnimatedSection';
import PageHero from '../components/ui/PageHero';
import FAQAccordion from '../components/ui/FAQAccordion';
import GoogleFormEmbed from '../components/forms/GoogleFormEmbed';
import Seo from '../components/seo/Seo';
import { breadcrumbSchema, faqSchema } from '../components/seo/schema';
import { HEALTH_CHECK, SITE } from '../config/site';

const AREAS = [
  'Policies, handbook and employment contracts',
  'Hiring, onboarding and offboarding',
  'Performance management and employee relations',
  'Compensation, benefits and job descriptions',
  'HR records, documentation and compliance basics',
  'Team structure and growth readiness',
];

const STEPS = [
  { icon: ClipboardCheck, title: 'Complete the questionnaire', desc: 'Answer 14 practical questions covering six essential areas of HR. It takes about 5 minutes.' },
  { icon: FileSearch, title: 'We review your answers', desc: 'Faiza reviews your responses to identify strengths, gaps and the risks worth addressing first.' },
  { icon: MessagesSquare, title: 'Get your recommendations', desc: 'We share practical recommendations, and you can request a complimentary 30-minute consultation — no obligation.' },
];

const faqs = [
  { q: 'Is the HR Health Check really free?', a: 'Yes. The HR Health Check is free and comes with no obligation. It is a quick way to see where your HR stands and what to prioritize.' },
  { q: 'Who is it for?', a: 'It is designed for small and growing organizations — especially those without a dedicated HR team, or whose HR practices have not been reviewed in a while.' },
  { q: 'How long does it take?', a: 'About 5 minutes. The questionnaire has 14 practical questions across six essential areas of HR.' },
  { q: 'Is my information kept confidential?', a: 'Yes. Your answers are used only to prepare your recommendations and are handled in line with our Privacy Policy.' },
];

const HRHealthCheckPage = () => (
  <>
    <Seo
      title="Free HR Health Check | FABZ HR International Inc."
      description="Take the free FABZ HR Health Check: a short questionnaire on your policies, hiring and people practices, followed by practical recommendations. No obligation."
      path="/hr-health-check"
      jsonLd={[breadcrumbSchema([{ name: 'Free HR Health Check', path: '/hr-health-check' }]), faqSchema(faqs)]}
    />

    <PageHero
      eyebrow="FREE HR HEALTH CHECK"
      title="Book a Free HR Health Check"
      subtitle="Find out where your HR stands today — and what to fix first. A 5-minute questionnaire, reviewed by a senior HR leader."
      breadcrumbs={[{ name: 'Free HR Health Check' }]}
    >
      <a href="#health-check-form" className="btn btn-primary btn-lg hc-hero-cta">
        Start the Health Check <ArrowRight size={18} aria-hidden="true" />
      </a>
    </PageHero>

    {/* What we review */}
    <section className="section-wrapper" style={{ backgroundColor: 'var(--cream)' }}>
      <div className="container hc-intro-grid">
        <AnimatedSection>
          <span className="section-label">WHAT WE REVIEW</span>
          <h2 className="hc-h2">A practical snapshot of your people practices</h2>
          <p className="hc-lead">
            Many growing organizations run HR on informal habits until a problem forces a change. The HR Health Check helps you spot gaps early, so you can protect your business and support your team with confidence.
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <ul className="hc-areas">
            {AREAS.map((a) => <li key={a}>{a}</li>)}
          </ul>
        </AnimatedSection>
      </div>
    </section>

    {/* How it works */}
    <section className="section-wrapper" style={{ backgroundColor: 'var(--surface-alt)' }}>
      <div className="container">
        <AnimatedSection className="text-center" style={{ marginBottom: '3rem' }}>
          <h2 className="hc-h2" style={{ textAlign: 'center', margin: '0 auto' }}>How It Works</h2>
        </AnimatedSection>
        <ol className="hc-steps">
          {STEPS.map(({ icon: Icon, title, desc }, i) => (
            <AnimatedSection as="li" key={title} delay={i * 0.1} className="hc-step">
              <span className="hc-step-num" aria-hidden="true">{i + 1}</span>
              <Icon size={30} aria-hidden="true" className="hc-step-icon" />
              <h3>{title}</h3>
              <p>{desc}</p>
            </AnimatedSection>
          ))}
        </ol>
      </div>
    </section>

    {/* The form */}
    <section id="health-check-form" className="hc-form-section" style={{ backgroundColor: 'var(--cream)' }} aria-labelledby="hc-form-title">
      <div className="container">
        <GoogleFormEmbed
          embedUrl={HEALTH_CHECK.googleFormEmbedUrl}
          publicUrl={HEALTH_CHECK.googleFormPublicUrl}
          title="FABZ HR Free HR Health Check form"
          heading="Start Your Free HR Health Check"
          headingId="hc-form-title"
          loadingText="Loading the HR Health Check…"
        />
        <p className="hc-fallback">
          Having trouble with the form?{' '}
          <a className="text-link" href={HEALTH_CHECK.googleFormPublicUrl} target="_blank" rel="noopener noreferrer">
            Open it in a new tab<span className="sr-only"> (opens in a new tab)</span>
          </a>{' '}
          or email us at <a className="text-link" href={`mailto:${SITE.email}?subject=${encodeURIComponent('Free HR Health Check')}`}>{SITE.email}</a>.
        </p>
      </div>
    </section>

    {/* FAQ */}
    <section className="section-wrapper" style={{ backgroundColor: 'var(--surface-alt)' }}>
      <div className="container">
        <AnimatedSection className="text-center" style={{ marginBottom: '3rem' }}>
          <h2 className="hc-h2" style={{ textAlign: 'center', margin: '0 auto' }}>Frequently Asked Questions</h2>
        </AnimatedSection>
        <FAQAccordion faqs={faqs} />
      </div>
    </section>

    {/* Closing CTA */}
    <section className="hc-cta on-navy">
      <div className="container hc-cta-inner">
        <div>
          <h2 className="hc-cta-title">Prefer to talk it through?</h2>
          <p>Book a free 30-minute discovery call with Faiza instead.</p>
        </div>
        <div className="hc-cta-actions">
          <Link to="/fractional-hr" className="btn btn-ghost-white">Fractional HR</Link>
          <Link to="/book-demo" className="btn btn-primary">
            Book a Consultation <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>

    <style dangerouslySetInnerHTML={{ __html: `
      .hc-hero-cta { margin: 0.5rem 0 1.75rem; }
      .hc-h2 {
        font-size: clamp(28px, 3.4vw, 40px);
        text-align: left;
        margin: 0 0 1rem;
      }
      .hc-intro-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4rem;
        align-items: center;
      }
      .hc-lead { color: var(--navy-80); font-size: 1.08rem; }
      .hc-areas {
        list-style: none;
        display: grid;
        gap: 0.75rem;
      }
      .hc-areas li {
        position: relative;
        padding: 1rem 1.25rem 1rem 3rem;
        background: var(--cream);
        border: 1px solid var(--line);
        border-radius: 12px;
        color: var(--navy);
        font-weight: 600;
      }
      .hc-areas li::before {
        content: '✓';
        position: absolute;
        left: 1rem;
        top: 50%;
        transform: translateY(-50%);
        width: 22px;
        height: 22px;
        border-radius: 50%;
        background: var(--lime);
        color: var(--navy);
        font-size: 0.75rem;
        font-weight: 800;
        display: grid;
        place-items: center;
      }
      .hc-steps {
        list-style: none;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1.5rem;
      }
      .hc-step {
        position: relative;
        background: var(--cream);
        border: 1px solid var(--line);
        border-radius: 16px;
        padding: 2rem;
      }
      .hc-step-num {
        position: absolute;
        top: 1.25rem;
        right: 1.5rem;
        font-family: var(--font-heading);
        font-weight: 800;
        font-size: 2.5rem;
        line-height: 1;
        color: var(--line);
      }
      .hc-step-icon {
        color: var(--lime);
        background: var(--navy);
        border-radius: 12px;
        padding: 10px;
        width: 50px;
        height: 50px;
        margin-bottom: 1.25rem;
      }
      .hc-step h3 { font-size: 1.2rem; margin-bottom: 0.5rem; }
      .hc-step p { color: var(--navy-80); line-height: 1.65; }
      .hc-form-section { padding: 5rem 0; scroll-margin-top: 100px; }
      .hc-fallback {
        text-align: center;
        margin: 2rem auto 0;
        max-width: 760px;
        color: var(--navy-80);
      }
      .hc-cta {
        background: var(--navy);
        border-top: 4px solid var(--lime);
        padding: 4rem 0;
        color: var(--cream);
      }
      .hc-cta-inner {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 2rem;
        flex-wrap: wrap;
      }
      .hc-cta-title {
        color: var(--cream);
        text-align: left;
        margin: 0 0 0.5rem;
        font-size: clamp(24px, 3vw, 34px);
      }
      .hc-cta p { color: var(--cream-80); }
      .hc-cta-actions { display: flex; gap: 1rem; flex-wrap: wrap; }
      @media (max-width: 900px) {
        .hc-intro-grid { grid-template-columns: 1fr; gap: 2rem; }
        .hc-steps { grid-template-columns: 1fr; }
      }
      @media (max-width: 576px) {
        .hc-form-section { padding: 3rem 0; }
      }
    ` }} />
  </>
);

export default HRHealthCheckPage;
