import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, X } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import Breadcrumbs from './Breadcrumbs';
import FAQAccordion from './FAQAccordion';
import Seo from '../seo/Seo';
import { breadcrumbSchema, faqSchema, serviceSchema } from '../seo/schema';
import { SERVICES } from '../../data/services';

const ContextImage = ({ image }) =>
  image ? (
    <div className="container">
      <AnimatedSection>
        <img
          src={image.src}
          alt={image.alt}
          width="1200"
          height="400"
          loading="lazy"
          decoding="async"
          className="contextual-image"
        />
      </AnimatedSection>
    </div>
  ) : null;

/**
 * Service page layout. Section order (do not change):
 * Hero/H1 → Overview → What's Included → Who this is for → Deliverables → [extra]
 * → Our Process → Engagement model → FAQ → Related services → CTA
 */
const ServicePageTemplate = ({
  path,
  seoContent,
  heroContent,
  overview,
  includedCards,
  whoFor,
  deliverables,
  processSteps,
  engagement,
  faqs,
  extraComponent,
  extraImages = [],
  audience,
}) => {
  const related = SERVICES.filter((s) => s.path !== path);

  return (
    <>
      <Seo
        title={seoContent.title}
        description={seoContent.description}
        path={path}
        jsonLd={[
          serviceSchema({ name: heroContent.title, description: seoContent.description, path, audience }),
          faqSchema(faqs),
          breadcrumbSchema([{ name: heroContent.title, path }]),
        ]}
      />

      {/* Hero Banner */}
      <section className="service-hero on-navy">
        <div className="container service-hero-inner">
          <span className="section-label on-navy">SERVICE</span>
          <h1 className="service-title">{heroContent.title}</h1>
          <p className="service-subtitle">{heroContent.subtitle}</p>
          <Breadcrumbs items={[{ name: 'Services' }, { name: heroContent.title }]} />
        </div>
        <img
          className="service-hero-door"
          src="/images/fabz-door.webp"
          alt=""
          aria-hidden="true"
          width="560"
          height="793"
          decoding="async"
        />
      </section>

      {/* Overview */}
      <section className="section-wrapper" style={{ backgroundColor: 'var(--cream)' }}>
        <div className="container">
          <div className="overview-grid">
            <AnimatedSection className="overview-text">
              {overview.paragraphs.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </AnimatedSection>

            <AnimatedSection className="overview-sidebar" delay={0.2}>
              <div className="glance-box">
                <h2 className="glance-title">At a Glance</h2>
                <div className="glance-item">
                  <strong>Who it's for:</strong>
                  <p>{overview.glance.who}</p>
                </div>
                <div className="glance-item">
                  <strong>Engagement model:</strong>
                  <p>{overview.glance.pricing}</p>
                </div>
                <div className="glance-item">
                  <strong>Turnaround:</strong>
                  <p>{overview.glance.turnaround}</p>
                </div>
                <Link to="/book-demo" className="btn btn-primary btn-full">Book a Free Consultation</Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-wrapper" style={{ backgroundColor: 'var(--surface-alt)' }}>
        <div className="container">
          <AnimatedSection className="text-center" style={{ marginBottom: '3rem' }}>
            <h2 className="svc-h2">What's Included</h2>
          </AnimatedSection>

          <div className="included-grid">
            {includedCards.map((card, idx) => (
              <AnimatedSection key={card.title} delay={idx * 0.1} className="included-card hover-card">
                <div className="included-icon" aria-hidden="true">{card.icon}</div>
                <h3 className="included-title">{card.title}</h3>
                <p className="included-desc">{card.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <ContextImage image={extraImages[0]} />

      {/* Who this is for / isn't for */}
      {whoFor && (
        <section className="section-wrapper" style={{ backgroundColor: 'var(--cream)' }}>
          <div className="container">
            <AnimatedSection className="text-center" style={{ marginBottom: '3rem' }}>
              <h2 className="svc-h2">Is {heroContent.title} Right for You?</h2>
            </AnimatedSection>
            <div className="fit-grid">
              <AnimatedSection className="fit-card fit-card--yes">
                <h3>Who this is for</h3>
                <ul>
                  {whoFor.is.map((item) => (
                    <li key={item}><Check size={18} aria-hidden="true" className="fit-icon" /> <span>{item}</span></li>
                  ))}
                </ul>
              </AnimatedSection>
              <AnimatedSection className="fit-card fit-card--no" delay={0.1}>
                <h3>Who this isn't for</h3>
                <ul>
                  {whoFor.isNot.map((item) => (
                    <li key={item}><X size={18} aria-hidden="true" className="fit-icon" /> <span>{item}</span></li>
                  ))}
                </ul>
              </AnimatedSection>
            </div>
          </div>
        </section>
      )}

      {/* Deliverables */}
      {deliverables && (
        <section className="section-wrapper" style={{ backgroundColor: 'var(--surface-alt)' }}>
          <div className="container">
            <AnimatedSection className="text-center" style={{ marginBottom: '3rem' }}>
              <h2 className="svc-h2">What You'll Receive</h2>
              <p className="section-subtext" style={{ marginTop: '1rem', marginBottom: 0 }}>Concrete deliverables, agreed in writing at the start of every engagement.</p>
            </AnimatedSection>
            <dl className="deliverables-list">
              {deliverables.map((d, idx) => (
                <AnimatedSection key={d.title} delay={idx * 0.05} className="deliverable">
                  <dt>{d.title}</dt>
                  <dd>{d.desc}</dd>
                </AnimatedSection>
              ))}
            </dl>
          </div>
        </section>
      )}

      {/* Extra Component (e.g. Coaching Packages) */}
      {extraComponent && extraComponent}

      <ContextImage image={extraImages[1]} />

      {/* Our Process */}
      <section className="section-wrapper" style={{ backgroundColor: 'var(--cream)' }}>
        <div className="container">
          <AnimatedSection className="text-center" style={{ marginBottom: '4rem' }}>
            <h2 className="svc-h2">Our Process</h2>
          </AnimatedSection>

          <ol className="process-list">
            {processSteps.map((step, idx) => (
              <AnimatedSection as="li" key={step.title} delay={idx * 0.1} className="process-item">
                <div className="process-number" aria-hidden="true">{idx + 1}</div>
                <div className="process-content">
                  <h3 className="process-title">{step.title}</h3>
                  <p className="process-desc">{step.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </ol>
        </div>
      </section>

      {/* Engagement model */}
      {engagement && (
        <section className="section-wrapper engagement-band on-navy">
          <div className="container">
            <div className="engagement-grid">
              <AnimatedSection>
                <span className="section-label on-navy">ENGAGEMENT MODEL</span>
                <h2 className="engagement-title">How We Work Together</h2>
                {engagement.intro.map((p) => (
                  <p key={p.slice(0, 40)} className="engagement-intro">{p}</p>
                ))}
              </AnimatedSection>
              <AnimatedSection delay={0.15}>
                <ul className="engagement-points">
                  {engagement.points.map((pt) => (
                    <li key={pt.title}>
                      <strong>{pt.title}</strong>
                      <span>{pt.desc}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedSection>
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      <section className="section-wrapper" style={{ backgroundColor: 'var(--surface-alt)' }}>
        <div className="container">
          <AnimatedSection className="text-center" style={{ marginBottom: '3rem' }}>
            <h2 className="svc-h2">Frequently Asked Questions</h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <FAQAccordion faqs={faqs} />
          </AnimatedSection>
        </div>
      </section>

      <ContextImage image={extraImages[2]} />

      {/* Related services */}
      <section className="section-wrapper related-section" style={{ backgroundColor: 'var(--cream)' }} aria-labelledby="related-title">
        <div className="container">
          <AnimatedSection className="text-center" style={{ marginBottom: '2.5rem' }}>
            <h2 id="related-title" className="svc-h2">Explore Our Other Services</h2>
          </AnimatedSection>
          <ul className="related-grid">
            {related.map((s) => (
              <li key={s.path}>
                <Link to={s.path} className="related-card">
                  <strong>{s.name}</strong>
                  <span>{s.short}</span>
                  <em>Learn more <ArrowRight size={16} aria-hidden="true" /></em>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA Band */}
      <section className="cta-band on-navy">
        <div className="container">
          <AnimatedSection style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <h2 className="cta-title">Ready to Find the Perfect Solution?</h2>
            <p className="cta-subtitle">Book a free 30-minute call with Faiza to discuss your needs.</p>
            <Link to="/book-demo" className="btn btn-primary btn-lg">
              Book a Consultation <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .service-hero {
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(circle at 85% 40%, var(--cream-15) 0, transparent 40%),
            var(--navy);
          border-bottom: 4px solid var(--lime);
          padding: 6rem 0;
          color: var(--cream);
        }
        .service-hero-inner {
          position: relative;
          z-index: 1;
        }
        .service-hero-door {
          position: absolute;
          right: max(3vw, calc((100vw - 1260px) / 2));
          top: 50%;
          transform: translateY(-50%);
          height: 120%;
          width: auto;
          opacity: 0.9;
          pointer-events: none;
          filter: drop-shadow(0 20px 30px rgba(11, 32, 48, 0.6));
        }
        /* Display headline treatment — rendered in Manrope */
        .service-title {
          font-size: 3.5rem;
          font-weight: 800;
          letter-spacing: -0.04em;
          margin-bottom: 0.5rem;
          margin-top: 1rem;
          color: var(--cream);
          max-width: 760px;
        }
        .service-subtitle {
          font-size: 1.25rem;
          color: var(--cream-80);
          margin-bottom: 1.5rem;
          max-width: 640px;
        }
        .svc-h2 { font-size: clamp(28px, 3.4vw, 40px); }

        .overview-grid {
          display: flex;
          gap: 4rem;
        }
        .overview-text {
          flex: 0 0 60%;
          font-size: 1.1rem;
          color: var(--navy-80);
          line-height: 1.8;
        }
        .overview-text p {
          margin-bottom: 1.5rem;
        }
        .overview-sidebar {
          flex: 1;
        }
        .glance-box {
          background-color: var(--cream);
          padding: 2rem;
          border-radius: 16px;
          border: 1px solid var(--line);
          border-top: 4px solid var(--lime);
          box-shadow: var(--shadow-card);
        }
        .glance-title {
          font-size: 1.4rem;
          text-align: left;
          margin: 0 0 1.5rem;
        }
        .glance-item {
          margin-bottom: 1.5rem;
        }
        .glance-item strong {
          display: block;
          font-family: var(--font-heading);
          color: var(--navy);
          margin-bottom: 0.25rem;
        }
        .glance-item p {
          color: var(--navy-80);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .included-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1.5rem;
        }
        .included-card {
          background-color: var(--cream);
          padding: 2rem;
          border-radius: 16px;
          border: 1px solid var(--line);
          width: calc(33.333% - 1rem);
          min-width: 280px;
        }
        .included-card:hover {
          border-color: var(--navy);
        }
        .included-icon {
          font-size: 2rem;
          margin-bottom: 1rem;
        }
        .included-title {
          font-size: 1.15rem;
          margin-bottom: 0.75rem;
        }
        .included-desc {
          color: var(--navy-80);
          font-size: 0.95rem;
        }

        .fit-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          max-width: 1000px;
          margin: 0 auto;
        }
        .fit-card {
          border-radius: 16px;
          padding: 2rem;
          border: 1px solid var(--line);
        }
        .fit-card h3 { font-size: 1.3rem; margin-bottom: 1.25rem; }
        .fit-card ul { list-style: none; }
        .fit-card li {
          display: flex;
          gap: 0.75rem;
          align-items: flex-start;
          margin-bottom: 0.9rem;
          line-height: 1.6;
        }
        .fit-icon { flex-shrink: 0; margin-top: 4px; border-radius: 50%; padding: 2px; width: 22px; height: 22px; }
        .fit-card--yes { background: var(--navy); border-color: var(--navy); }
        .fit-card--yes h3 { color: var(--cream); }
        .fit-card--yes li { color: var(--cream-80); }
        .fit-card--yes .fit-icon { background: var(--lime); color: var(--navy); }
        .fit-card--no { background: var(--cream); }
        .fit-card--no li { color: var(--navy-80); }
        .fit-card--no .fit-icon { background: var(--line); color: var(--navy); }

        .deliverables-list {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem 1.5rem;
          max-width: 1000px;
          margin: 0 auto;
        }
        .deliverable {
          background: var(--cream);
          border: 1px solid var(--line);
          border-left: 4px solid var(--lime);
          border-radius: 12px;
          padding: 1.25rem 1.5rem;
        }
        .deliverable dt {
          font-family: var(--font-heading);
          font-weight: 800;
          color: var(--navy);
          margin-bottom: 0.35rem;
        }
        .deliverable dd {
          color: var(--navy-80);
          font-size: 0.95rem;
          line-height: 1.65;
        }

        .process-list {
          list-style: none;
          max-width: 800px;
          margin: 0 auto;
        }
        .process-item {
          display: flex;
          gap: 2rem;
          margin-bottom: 2rem;
        }
        .process-number {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background-color: var(--navy);
          color: var(--lime);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.4rem;
          font-weight: 800;
          font-family: var(--font-heading);
          flex-shrink: 0;
        }
        .process-content {
          padding-top: 0.5rem;
        }
        .process-title {
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
        }
        .process-desc {
          color: var(--navy-80);
        }

        .engagement-band {
          background: var(--navy);
          color: var(--cream);
        }
        .engagement-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 4rem;
          align-items: start;
        }
        .engagement-title {
          color: var(--cream);
          text-align: left;
          margin: 0 0 1.25rem;
          font-size: clamp(28px, 3.4vw, 40px);
        }
        .engagement-intro {
          color: var(--cream-80);
          margin-bottom: 1rem;
        }
        .engagement-points {
          list-style: none;
          border-top: 1px solid var(--cream-15);
        }
        .engagement-points li {
          padding: 1.25rem 0;
          border-bottom: 1px solid var(--cream-15);
        }
        .engagement-points strong {
          display: block;
          font-family: var(--font-heading);
          color: var(--lime);
          font-size: 1.1rem;
          margin-bottom: 0.3rem;
        }
        .engagement-points span {
          color: var(--cream-80);
          line-height: 1.65;
        }

        .related-grid {
          list-style: none;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        .related-card {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          height: 100%;
          padding: 1.75rem;
          border: 1px solid var(--line);
          border-radius: 16px;
          background: var(--cream);
          transition: border-color 0.2s, transform 0.2s, box-shadow 0.2s;
        }
        .related-card:hover {
          border-color: var(--navy);
          transform: translateY(-4px);
          box-shadow: var(--shadow-card-hover);
        }
        .related-card strong {
          font-family: var(--font-heading);
          font-size: 1.2rem;
          color: var(--navy);
        }
        .related-card span {
          color: var(--navy-80);
          font-size: 0.95rem;
          line-height: 1.6;
          flex: 1;
        }
        .related-card em {
          font-style: normal;
          font-family: var(--font-heading);
          font-weight: 800;
          color: var(--navy);
          display: inline-flex;
          align-items: center;
          gap: 6px;
          text-decoration: underline;
          text-decoration-color: var(--lime);
          text-decoration-thickness: 2px;
          text-underline-offset: 4px;
        }

        .cta-band {
          background: var(--navy);
          border-top: 4px solid var(--lime);
          padding: 5rem 0;
          color: var(--cream);
          text-align: center;
        }
        .cta-title {
          font-size: clamp(28px, 3.4vw, 40px);
          margin-bottom: 1rem;
          color: var(--cream);
        }
        .cta-subtitle {
          font-size: 1.1rem;
          margin-bottom: 2rem;
          color: var(--cream-80);
        }

        .contextual-image {
          width: 100%;
          border-radius: 12px;
          margin: 40px 0;
          object-fit: cover;
          height: auto;
          max-height: 400px;
        }

        @media (max-width: 992px) {
          .overview-grid {
            flex-direction: column;
            gap: 2rem;
          }
          .included-card {
            width: calc(50% - 0.75rem);
          }
          .engagement-grid { grid-template-columns: 1fr; gap: 2rem; }
          .related-grid { grid-template-columns: 1fr; }
          .service-hero-door { opacity: 0.25; }
        }
        @media (max-width: 768px) {
          .included-card {
            width: 100%;
            min-width: 0;
          }
          .service-title {
            font-size: 2.5rem;
          }
          .service-hero { padding: 4rem 0; }
          .fit-grid, .deliverables-list { grid-template-columns: 1fr; }
          .process-item { gap: 1.25rem; }
          .service-hero-door { opacity: 0.15; right: -60px; }
        }
      ` }} />
    </>
  );
};

export default ServicePageTemplate;
