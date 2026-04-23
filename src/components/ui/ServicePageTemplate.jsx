import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from './AnimatedSection';


const FAQAccordion = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="faq-container">
      {faqs.map((faq, index) => (
        <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
          <button className="faq-question" onClick={() => toggleFAQ(index)}>
            {faq.q}
            <ChevronDown 
              className="faq-icon" 
              style={{ transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0)' }} 
            />
          </button>
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="faq-answer-wrapper"
              >
                <div className="faq-answer">
                  {faq.a}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}

      <style>{`
        .faq-container {
          max-width: 800px;
          margin: 0 auto;
        }
        .faq-item {
          margin-bottom: 1rem;
          border: 1px solid #E5E7EB;
          border-radius: 12px;
          background-color: #FFFFFF;
          overflow: hidden;
          transition: border-color 0.2s;
        }
        .faq-item.open {
          border-color: var(--brand-orange);
        }
        .faq-question {
          width: 100%;
          text-align: left;
          padding: 1.5rem;
          font-size: 1.1rem;
          font-weight: 600;
          color: #0D1421;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: background-color 0.2s;
        }
        .faq-question:hover {
          background-color: #FFF8F5;
        }
        .faq-icon {
          color: var(--brand-orange);
          transition: transform 0.3s ease;
        }
        .faq-answer-wrapper {
          overflow: hidden;
        }
        .faq-answer {
          padding: 0 1.5rem 1.5rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }
      `}</style>
    </div>
  );
};

const ServicePageTemplate = ({ seoContent, heroContent, overview, includedCards, processSteps, faqs, extraComponent, extraImages = [] }) => {
  return (
    <>
      <Helmet>
        <title>{seoContent.title}</title>
        <meta name="description" content={seoContent.description} />
      </Helmet>

      {/* Hero Banner */}
      <section className="service-hero">
        <div className="container">
          <span className="section-label" style={{ color: 'var(--brand-orange)' }}>SERVICE</span>
          <h1 className="service-title">{heroContent.title}</h1>
          <p className="service-subtitle">{heroContent.subtitle}</p>
          <div className="breadcrumb">
            <Link to="/">Home</Link> / <span>Services</span> / <span>{heroContent.title}</span>
          </div>
        </div>
      </section>
      <div className="gradient-divider"></div>

      {/* Overview */}
      <section className="section-wrapper" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div className="overview-grid">
            <AnimatedSection className="overview-text">
              {overview.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </AnimatedSection>
            
            <AnimatedSection className="overview-sidebar" delay={0.2}>
              <div className="glance-box">
                <h3>At a Glance</h3>
                <div className="glance-item">
                  <strong>Who it's for:</strong>
                  <p>{overview.glance.who}</p>
                </div>
                <div className="glance-item">
                  <strong>Pricing Model:</strong>
                  <p>{overview.glance.pricing}</p>
                </div>
                <div className="glance-item">
                  <strong>Turnaround:</strong>
                  <p>{overview.glance.turnaround}</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-wrapper" style={{ backgroundColor: '#FFF8F5' }}>
        <div className="container">
          <AnimatedSection className="text-center" style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem' }}>What's Included</h2>
          </AnimatedSection>
          
          <div className="included-grid">
            {includedCards.map((card, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1} className="included-card hover-card">
                <div className="included-icon">{card.icon}</div>
                <h3 className="included-title">{card.title}</h3>
                <p className="included-desc">{card.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Extra Image 1: After What's Included */}
      {extraImages[0] && (
        <div className="container">
          <AnimatedSection>
            <img src={extraImages[0]} alt="Contextual Image 1" className="contextual-image" />
          </AnimatedSection>
        </div>
      )}

      {/* Extra Component (e.g. Coaching Packages) */}
      {extraComponent && extraComponent}

      {/* Extra Image 2: Before Our Process */}
      {extraImages[1] && (
        <div className="container">
          <AnimatedSection>
            <img src={extraImages[1]} alt="Contextual Image 2" className="contextual-image" />
          </AnimatedSection>
        </div>
      )}

      {/* Our Process */}
      <section className="section-wrapper" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <AnimatedSection className="text-center" style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem' }}>Our Process</h2>
          </AnimatedSection>
          
          <div className="process-list">
            {processSteps.map((step, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1} className="process-item">
                <div className="process-number">{idx + 1}</div>
                <div className="process-content">
                  <h3 className="process-title">{step.title}</h3>
                  <p className="process-desc">{step.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-wrapper" style={{ backgroundColor: '#FFF8F5' }}>
        <div className="container">
          <AnimatedSection className="text-center" style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem' }}>Frequently Asked Questions</h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <FAQAccordion faqs={faqs} />
          </AnimatedSection>
        </div>
      </section>

      {/* Extra Image 3: Between FAQ and CTA */}
      {extraImages[2] && (
        <div className="container">
          <AnimatedSection>
            <img src={extraImages[2]} alt="Contextual Image 3" className="contextual-image" />
          </AnimatedSection>
        </div>
      )}

      {/* CTA Band */}
      <section className="cta-band">
        <div className="container">
          <AnimatedSection style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <h2 className="cta-title">Ready to Find the Perfect Solution?</h2>
            <p className="cta-subtitle">Book a free 30-minute call with Faiza to discuss your needs.</p>
            <Link to="/book-demo" className="btn btn-ghost-white" style={{ minHeight: '48px', display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '0 2rem', borderRadius: '8px' }}>
              Book a Consultation <ArrowRight size={18} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <style>{`
        .service-hero {
          background-color: #FFF8F5;
          border-bottom: 1px solid #E5E7EB;
          padding: 6rem 0;
          position: relative;
          overflow: hidden;
        }
        .service-hero::after {
          content: '';
          position: absolute;
          top: -50%;
          right: -20%;
          width: 800px;
          height: 800px;
          background: radial-gradient(circle, rgba(232, 92, 26, 0.1) 0%, rgba(0,0,0,0) 70%);
          z-index: 0;
        }
        .service-hero .container {
          position: relative;
          z-index: 1;
        }
        .service-title {
          font-size: 3.5rem;
          margin-bottom: 0.5rem;
          margin-top: 1rem;
          color: #0D1421;
        }
        .service-subtitle {
          font-size: 1.25rem;
          color: #6B7280;
          margin-bottom: 1.5rem;
          max-width: 700px;
        }
        .breadcrumb {
          font-size: 0.95rem;
          color: #9CA3AF;
        }
        .breadcrumb a {
          color: #374151;
          transition: color 0.2s;
        }
        .breadcrumb a:hover {
          color: var(--brand-orange);
        }

        .overview-grid {
          display: flex;
          gap: 4rem;
        }
        .overview-text {
          flex: 0 0 65%;
          font-size: 1.1rem;
          color: var(--text-secondary);
          line-height: 1.8;
        }
        .overview-text p {
          margin-bottom: 1.5rem;
        }
        .overview-sidebar {
          flex: 0 0 35%;
        }
        .glance-box {
          background-color: #FFFFFF;
          padding: 2rem;
          border-radius: 16px;
          border: 1px solid #E5E7EB;
          box-shadow: 0 4px 24px rgba(0,0,0,0.07);
        }
        .glance-box h3 {
          margin-bottom: 1.5rem;
          color: var(--brand-orange);
          font-family: var(--font-body);
        }
        .glance-item {
          margin-bottom: 1.5rem;
        }
        .glance-item strong {
          display: block;
          color: #0D1421;
          margin-bottom: 0.25rem;
        }
        .glance-item p {
          color: var(--text-secondary);
          font-size: 0.95rem;
        }

        .included-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1.5rem;
        }
        .included-card {
          background-color: #FFFFFF;
          padding: 2rem;
          border-radius: 16px;
          border: 1px solid #E5E7EB;
          width: calc(33.333% - 1rem);
          min-width: 300px;
          transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
        }
        .included-card:hover {
          border-color: var(--brand-orange);
          box-shadow: 0 8px 32px rgba(232,70,26,0.1);
          transform: translateY(-4px);
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
          color: var(--text-secondary);
          font-size: 0.95rem;
        }

        .process-list {
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
          background-color: rgba(232, 92, 26, 0.1);
          color: var(--brand-orange);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: 700;
          font-family: var(--font-heading);
          flex-shrink: 0;
          border: 1px solid var(--brand-orange);
        }
        .process-content {
          padding-top: 0.5rem;
        }
        .process-title {
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
        }
        .process-desc {
          color: var(--text-secondary);
        }

        .cta-band {
          background: linear-gradient(135deg, var(--brand-orange), var(--brand-orange-hover));
          padding: 5rem 0;
          color: white;
          text-align: center;
        }
        .cta-band > div > div {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .cta-title {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          color: white;
        }
        .cta-subtitle {
          font-size: 1.1rem;
          margin-bottom: 2rem;
          opacity: 0.9;
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
          }
          .included-card {
            width: calc(50% - 0.75rem);
          }
        }
        @media (max-width: 768px) {
          .included-card {
            width: 100%;
          }
          .service-title {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </>
  );
};

export default ServicePageTemplate;
