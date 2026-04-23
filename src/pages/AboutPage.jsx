import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/ui/AnimatedSection';
import SectionLabel from '../components/ui/SectionLabel';
import ValuesSection from '../components/home/ValuesSection';

const AboutPage = () => {
  const sectors = [
    'Financial', 'Capital Markets', 'Audit & Consulting', 'Healthcare',
    'Technology', 'Pharmaceutical', 'Aviation', 'Hospitality', 'Retail',
    'Insurance', 'Education'
  ];

  const locations = [
    { country: 'Canada', flag: '🇨🇦', status: 'Active' },
    { country: 'USA', flag: '🇺🇸', status: 'Coming Soon' },
    { country: 'Australia', flag: '🇦🇺', status: 'Coming Soon' },
    { country: 'UAE', flag: '🇦🇪', status: 'Coming Soon' },
    { country: 'Pakistan', flag: '🇵🇰', status: 'Coming Soon' },
  ];

  return (
    <>
      <Helmet>
        <title>About Faiza Hussain | FABZ HR Consulting</title>
        <meta name="description" content="Meet Faiza Hussain — 14+ years of HR expertise across Canada, financial, tech, aviation, healthcare sectors and more." />
      </Helmet>

      {/* Hero Banner */}
      <section className="page-hero">
        <div className="container text-center">
          <h1 className="page-title">About FABZ HR Consulting</h1>
          <p className="page-subtitle">Built on experience. Driven by purpose.</p>
          <div className="breadcrumb">
            <Link to="/">Home</Link> / <span>About</span>
          </div>
        </div>
      </section>
      <div className="gradient-divider"></div>

      {/* Founder Story */}
      <section className="section-wrapper" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div className="founder-story-grid">
            <AnimatedSection className="founder-image-col">
              <div className="founder-image-wrapper">
                <img
                  src="/faiza.png"
                  alt="Faiza Hussain"
                  className="founder-image"
                />
                <div className="founder-image-border"></div>
              </div>
            </AnimatedSection>

            <AnimatedSection className="founder-text-col" delay={0.2}>
              <span className="section-label">MEET THE FOUNDER</span>
              <h2 className="founder-name">Faiza Hussain</h2>
              <h3 className="founder-role">Founder & Principal HR Consultant</h3>

              <div className="founder-bio section-subtext" style={{ marginLeft: 0, textAlign: 'left' }}>
                <p>Faiza Hussain brings over 14 years of diverse experience, with more than 6 years in leadership capacity, in establishing and revitalizing HR operations to achieve organizational objectives.</p>
                <p style={{ marginTop: '16px' }}>She holds a Director's Training Program certificate from the Pakistan Institute of Corporate Governance (2023), an Executive MBA in HR & Marketing from IoBM (2019), and a Bachelor's in Business Administration in HR from Toronto, Canada (2011).</p>
                <p style={{ marginTop: '16px' }}>Faiza has collaborated with prestigious organizations such as Deloitte, KPMG, Microsoft, Air Canada Rouge, British Council, Berlitz, and Pakistan Mercantile Exchange.</p>
                <p style={{ marginTop: '16px' }}>She has managed HR functions for companies ranging from large enterprises with over 1,000 employees to startups with as few as 10 employees, working both as a direct employee and on a project basis.</p>
                <p style={{ marginTop: '16px' }}>Her expertise spans: setting up and revamping HR offices, deploying HR systems, revising and implementing policies, ensuring corporate governance, handling employee grievances, HR consulting and auditing, and driving employee engagement through digital marketing.</p>
              </div>

              <div className="founder-badges" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem' }}>
                <span className="badge" style={{ padding: '0.5rem 1rem', borderRadius: '30px', border: '1px solid var(--brand-orange)', fontSize: '0.85rem', fontWeight: '600', transition: 'all 0.2s ease', cursor: 'default' }}>Director's Training (PICG 2023)</span>
                <span className="badge" style={{ padding: '0.5rem 1rem', borderRadius: '30px', border: '1px solid var(--brand-orange)', fontSize: '0.85rem', fontWeight: '600', transition: 'all 0.2s ease', cursor: 'default' }}>EMBA HR & Marketing (IoBM 2019)</span>
                <span className="badge" style={{ padding: '0.5rem 1rem', borderRadius: '30px', border: '1px solid var(--brand-orange)', fontSize: '0.85rem', fontWeight: '600', transition: 'all 0.2s ease', cursor: 'default' }}>BBA HR (Toronto 2011)</span>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="stats-bar">
        <div className="container">
          <div className="stats-grid">
            <AnimatedSection className="stat-item" delay={0.1}>
              <div className="stat-number">14+</div>
              <div className="stat-label">Years of Experience</div>
            </AnimatedSection>
            <AnimatedSection className="stat-item" delay={0.2}>
              <div className="stat-number">6+</div>
              <div className="stat-label">Years in Leadership</div>
            </AnimatedSection>
            <AnimatedSection className="stat-item" delay={0.3}>
              <div className="stat-number">10+</div>
              <div className="stat-label">Industries Served</div>
            </AnimatedSection>
            <AnimatedSection className="stat-item" delay={0.4}>
              <div className="stat-number">1000+</div>
              <div className="stat-label">Employees Managed</div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <ValuesSection />

      {/* Sector Expertise */}
      <section className="section-wrapper" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container text-center">
          <AnimatedSection style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2 className="gradient-heading" style={{ fontSize: '2.5rem', marginBottom: '2.5rem' }}>Across Every Industry That Matters</h2>
            <div className="sector-cloud">
              {sectors.map((sector, idx) => (
                <span key={idx} className="sector-pill">{sector}</span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Global Reach */}
      <section className="section-wrapper" style={{ backgroundColor: '#FFF8F5' }}>
        <div className="container text-center">
          <AnimatedSection style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2 className="gradient-heading" style={{ fontSize: '2.5rem', marginBottom: '2.5rem' }}>Where We Serve</h2>
            <div className="reach-grid">
              {locations.map((loc, idx) => (
                <div key={idx} className={`reach-card ${loc.status === 'Active' ? 'active' : ''}`}>
                  <div className="reach-flag">{loc.flag}</div>
                  <h3 className="reach-country">{loc.country}</h3>
                  <div className={`reach-status ${loc.status === 'Active' ? 'status-active' : 'status-pending'}`}>
                    {loc.status}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="section-wrapper" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <AnimatedSection style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: '#0D1421' }}>Ready to Work with an HR Partner You Can Trust?</h2>
            <Link to="/book-demo" className="btn btn-primary btn-lg">Book a Discovery Call →</Link>
          </AnimatedSection>
        </div>
      </section>

      <style>{`
        .page-hero {
          background-color: #FFF8F5;
          border-bottom: 1px solid #E5E7EB;
          padding: 6rem 0;
        }
        
        .page-title {
          font-size: 3rem;
          margin-bottom: 0.5rem;
          color: #0D1421;
        }
        .page-subtitle {
          font-size: 1.25rem;
          color: #6B7280;
          margin-bottom: 1.5rem;
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

        .founder-story-grid {
          display: flex;
          gap: 5rem;
          align-items: flex-start;
        }
        .founder-image-col {
          flex: 0 0 40%;
        }
        .founder-text-col {
          flex: 0 0 60%;
        }
        .founder-image-wrapper {
          position: relative;
        }
        .founder-image {
          border-radius: 16px;
          width: 100%;
          height: auto;
          position: relative;
          z-index: 2;
          aspect-ratio: 3/4;
          object-fit: cover;
        }
        .founder-image-border {
          position: absolute;
          top: -20px;
          left: -20px;
          right: 20px;
          bottom: 20px;
          border: 2px solid var(--brand-orange);
          border-radius: 16px;
          z-index: 1;
        }

        .founder-name {
          font-family: var(--font-heading);
          font-size: 3rem;
          color: var(--brand-orange);
          margin-bottom: 0.25rem;
        }
        .founder-role {
          font-size: 1.25rem;
          color: var(--text-heading);
          font-weight: 500;
          margin-bottom: 2rem;
        }

        .stats-bar {
          background-color: var(--brand-orange);
          padding: 4rem 0;
          color: white;
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          text-align: center;
        }
        .stat-number {
          font-family: var(--font-heading);
          font-size: 3.5rem;
          font-weight: 700;
          line-height: 1;
          margin-bottom: 0.5rem;
        }
        .stat-label {
          font-size: 1.1rem;
          font-weight: 500;
          opacity: 0.9;
        }

        .sector-cloud {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
          max-width: 900px;
          margin: 0 auto;
        }
        .sector-pill {
          background-color: #FFFFFF;
          border: 1px solid var(--brand-orange);
          padding: 0.75rem 1.5rem;
          border-radius: 30px;
          font-size: 1.05rem;
          transition: all 0.2s ease;
          cursor: default;
          color: #0D1421;
        }
        .sector-pill:hover, .badge:hover {
          background-color: var(--brand-orange);
          color: white;
        }

        .reach-grid {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 1.5rem;
        }
        .reach-card {
          background-color: #FFFFFF;
          border: 1px solid #E5E7EB;
          border-radius: 16px;
          padding: 2rem;
          min-width: 200px;
          transition: transform 0.2s, border-color 0.2s, box-shadow 0.2s;
        }
        .reach-card.active {
          border-color: var(--brand-orange);
          box-shadow: 0 4px 20px rgba(232,92,26,0.1);
        }
        .reach-card:hover {
          transform: translateY(-4px);
        }
        .reach-flag {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
        .reach-country {
          font-size: 1.25rem;
          color: #0D1421;
          margin-bottom: 0.5rem;
        }
        .reach-status {
          font-size: 0.85rem;
          font-weight: 600;
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          display: inline-block;
        }
        .status-active {
          background-color: rgba(45, 212, 191, 0.1);
          color: var(--accent-teal);
        }
        .status-pending {
          background-color: #F3F4F6;
          color: var(--text-secondary);
        }

        @media (max-width: 992px) {
          .founder-story-grid {
            flex-direction: column;
            gap: 4rem;
          }
          .founder-image-col {
            width: 80%;
            margin: 0 auto;
          }
          .founder-text-col {
            text-align: center;
            width: 100%;
          }
          .founder-bio {
            text-align: center !important;
            margin-left: auto !important;
            margin-right: auto !important;
          }
          .founder-badges {
            justify-content: center;
          }
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 768px) {
          .founder-image-col {
            width: 100%;
          }
          .founder-image {
            width: 100%;
            max-height: 320px;
            object-fit: cover;
            aspect-ratio: auto;
          }
        }
        @media (max-width: 576px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </>
  );
};

export default AboutPage;
