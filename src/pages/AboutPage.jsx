import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/ui/AnimatedSection';
import PageHero from '../components/ui/PageHero';
import ValuesSection from '../components/home/ValuesSection';
import Seo from '../components/seo/Seo';
import { breadcrumbSchema } from '../components/seo/schema';
import { SITE } from '../config/site';

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

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Faiza Hussain',
    jobTitle: 'Founder & Principal HR Consultant',
    worksFor: { '@type': 'Organization', name: SITE.legalName, url: `${SITE.url}/` },
    image: `${SITE.url}/faiza.webp`,
    alumniOf: [
      { '@type': 'CollegeOrUniversity', name: 'Institute of Business Management (IoBM)' },
      { '@type': 'Organization', name: 'Pakistan Institute of Corporate Governance' },
    ],
  };

  return (
    <>
      <Seo
        title="About Faiza Hussain | FABZ HR International Inc."
        description="Meet Faiza Hussain, founder of FABZ HR: 14+ years in HR, 6+ in leadership, across finance, tech, aviation, healthcare and more. Our mission, vision and values."
        path="/about"
        jsonLd={[breadcrumbSchema([{ name: 'About', path: '/about' }]), personSchema]}
      />

      <PageHero
        title="About FABZ HR International Inc."
        subtitle="Built on experience. Driven by purpose."
        breadcrumbs={[{ name: 'About' }]}
      />

      {/* Founder Story */}
      <section className="section-wrapper" style={{ backgroundColor: 'var(--cream)' }}>
        <div className="container">
          <div className="founder-story-grid">
            <AnimatedSection className="founder-image-col">
              <div className="founder-image-wrapper">
                <img
                  src="/faiza.webp"
                  alt="Portrait of Faiza Hussain, founder of FABZ HR"
                  width="720"
                  height="720"
                  decoding="async"
                  className="founder-image"
                />
                <div className="founder-image-border" aria-hidden="true"></div>
              </div>
            </AnimatedSection>

            <AnimatedSection className="founder-text-col" delay={0.2}>
              <span className="section-label">MEET THE FOUNDER</span>
              <h2 className="founder-name">Faiza Hussain</h2>
              <p className="founder-role">Founder & Principal HR Consultant</p>

              <div className="founder-bio section-subtext" style={{ marginLeft: 0, textAlign: 'left' }}>
                <p>Faiza Hussain brings over 14 years of diverse experience, with more than 6 years in leadership capacity, in establishing and revitalizing HR operations to achieve organizational objectives.</p>
                <p style={{ marginTop: '16px' }}>She holds a Director's Training Program certificate from the Pakistan Institute of Corporate Governance (2023), an Executive MBA in HR & Marketing from IoBM (2019), and a Bachelor's in Business Administration in HR from Toronto, Canada (2011).</p>
                <p style={{ marginTop: '16px' }}>Faiza has collaborated with prestigious organizations such as Deloitte, KPMG, Microsoft, Air Canada Rouge, British Council, Berlitz, and Pakistan Mercantile Exchange.</p>
                <p style={{ marginTop: '16px' }}>She has managed HR functions for companies ranging from large enterprises with over 1,000 employees to startups with as few as 10 employees, working both as a direct employee and on a project basis.</p>
                <p style={{ marginTop: '16px' }}>Her expertise spans: setting up and revamping HR offices, deploying HR systems, revising and implementing policies, ensuring corporate governance, handling employee grievances, HR consulting and auditing, and driving employee engagement through digital marketing.</p>
              </div>

              <ul className="founder-badges">
                <li className="badge">Director's Training (PICG 2023)</li>
                <li className="badge">EMBA HR & Marketing (IoBM 2019)</li>
                <li className="badge">BBA HR (Toronto 2011)</li>
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="stats-bar" aria-label="FABZ HR in numbers">
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

      {/* Who we are + Mission & Vision (wording from www.fabzhr.com) */}
      <section className="section-wrapper" style={{ backgroundColor: 'var(--surface-alt)' }} aria-labelledby="purpose-title">
        <div className="container">
          <AnimatedSection className="about-intro">
            <span className="section-label">ABOUT US</span>
            <h2 id="purpose-title" className="about-intro-title">People-centered support with a global outlook.</h2>
            <p className="registration-line">{SITE.registrationSentence} We hold an {SITE.recruiterLicence.label}{SITE.recruiterLicence.number && ` (No. ${SITE.recruiterLicence.number})`}.</p>
            <p>We support organizations and professionals through recruitment and executive search, fractional HR, global mobility and career services. As we grow across borders, we remain grounded in clear guidance, practical action, and respect for every person we meet.</p>
          </AnimatedSection>

          <div className="purpose-grid">
            <AnimatedSection className="purpose-panel">
              <span>OUR MISSION</span>
              <h3>Connections that drive lasting growth.</h3>
              <p>Our mission is to help organizations build strong teams and professionals pursue meaningful careers through personalized HR solutions. We connect talent with opportunity, offer practical guidance, and deliver service that supports lasting growth across the workforce.</p>
            </AnimatedSection>
            <AnimatedSection className="purpose-panel" delay={0.1}>
              <span>OUR VISION</span>
              <h3>A more open world of work.</h3>
              <p>We envision a future where organizations can find and develop the people who move them forward, and professionals can pursue meaningful careers wherever opportunity takes them. FABZ HR aims to be a trusted global partner, recognized for thoughtful and innovative people solutions.</p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Core values */}
      <ValuesSection
        label="WHAT GUIDES US"
        title="Our Core Values"
        subtitle="Guided by People. Grounded in Trust. The standards behind every conversation and commitment."
      />

      {/* Sector Expertise */}
      <section className="section-wrapper" style={{ backgroundColor: 'var(--surface-alt)' }}>
        <div className="container text-center">
          <AnimatedSection style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2 className="gradient-heading" style={{ fontSize: 'clamp(28px, 3.4vw, 40px)', marginBottom: '2.5rem' }}>Across Every Industry That Matters</h2>
            <ul className="sector-cloud">
              {sectors.map((sector) => (
                <li key={sector} className="sector-pill">{sector}</li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </section>

      {/* Global Reach */}
      <section className="section-wrapper" style={{ backgroundColor: 'var(--cream)' }}>
        <div className="container text-center">
          <AnimatedSection style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2 className="gradient-heading" style={{ fontSize: 'clamp(28px, 3.4vw, 40px)', marginBottom: '2.5rem' }}>Where We Serve</h2>
            <ul className="reach-grid">
              {locations.map((loc) => (
                <li key={loc.country} className={`reach-card ${loc.status === 'Active' ? 'active' : ''}`}>
                  <div className="reach-flag" aria-hidden="true">{loc.flag}</div>
                  <h3 className="reach-country">{loc.country}</h3>
                  <div className={`reach-status ${loc.status === 'Active' ? 'status-active' : 'status-pending'}`}>
                    {loc.status}
                  </div>
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="section-wrapper about-cta on-navy">
        <div className="container">
          <AnimatedSection style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(28px, 3.4vw, 40px)', marginBottom: '1.5rem', color: 'var(--cream)' }}>Ready to Work with an HR Partner You Can Trust?</h2>
            <Link to="/book-demo" className="btn btn-primary btn-lg">Book a Discovery Call →</Link>
          </AnimatedSection>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .founder-story-grid {
          display: flex;
          gap: 5rem;
          align-items: flex-start;
        }
        .founder-image-col {
          flex: 0 0 38%;
        }
        .founder-text-col {
          flex: 1;
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
          border: 3px solid var(--lime);
          border-radius: 16px;
          z-index: 1;
        }
        .founder-name {
          font-size: clamp(36px, 4vw, 48px);
          color: var(--navy);
          margin: 0 0 0.25rem;
          text-align: left;
        }
        .founder-role {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          color: var(--muted);
          font-weight: 600;
          margin-bottom: 2rem;
        }
        .founder-badges {
          list-style: none;
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          margin-top: 2rem;
        }
        .badge {
          background-color: var(--cream);
          border: 1.5px solid var(--navy);
          padding: 0.5rem 1rem;
          border-radius: 30px;
          font-family: var(--font-heading);
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--navy);
        }

        .stats-bar {
          background-color: var(--navy);
          border-top: 4px solid var(--lime);
          padding: 4rem 0;
          color: var(--cream);
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
          font-weight: 800;
          line-height: 1;
          margin-bottom: 0.5rem;
          color: var(--lime);
        }
        .stat-label {
          font-size: 1.1rem;
          font-weight: 500;
          color: var(--cream-80);
        }

        .about-intro {
          max-width: 820px;
          margin-bottom: 3rem;
        }
        .about-intro-title {
          text-align: left;
          margin: 0 0 1rem;
          font-size: clamp(28px, 3.4vw, 40px);
        }
        .about-intro p { color: var(--navy-80); font-size: 1.05rem; margin-bottom: 0.75rem; }
        .registration-line {
          font-family: var(--font-heading);
          font-weight: 700;
          color: var(--navy) !important;
          border-left: 3px solid var(--lime);
          padding-left: 10px;
        }
        .purpose-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }
        .purpose-panel {
          background: var(--cream);
          border: 1px solid var(--line);
          border-top: 4px solid var(--lime);
          border-radius: 12px;
          padding: 2rem;
        }
        .purpose-panel > span {
          font-family: var(--font-heading);
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.16em;
          color: var(--muted);
        }
        .purpose-panel h3 {
          font-size: 1.5rem;
          margin: 0.9rem 0 0.75rem;
        }
        .purpose-panel p { color: var(--navy-80); line-height: 1.7; }

        .sector-cloud {
          list-style: none;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
          max-width: 900px;
          margin: 0 auto;
        }
        .sector-pill {
          background-color: var(--cream);
          border: 1.5px solid var(--navy);
          padding: 0.75rem 1.5rem;
          border-radius: 30px;
          font-size: 1.05rem;
          transition: background-color 0.2s ease, color 0.2s ease;
          cursor: default;
          color: var(--navy);
        }
        .sector-pill:hover {
          background-color: var(--navy);
          color: var(--cream);
        }

        .reach-grid {
          list-style: none;
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 1.5rem;
        }
        .reach-card {
          background-color: var(--cream);
          border: 1px solid var(--line);
          border-radius: 16px;
          padding: 2rem;
          min-width: 200px;
          transition: transform 0.2s, border-color 0.2s, box-shadow 0.2s;
        }
        .reach-card.active {
          border: 2px solid var(--navy);
          box-shadow: var(--shadow-card);
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
          color: var(--navy);
          margin-bottom: 0.5rem;
        }
        .reach-status {
          font-family: var(--font-heading);
          font-size: 0.85rem;
          font-weight: 700;
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          display: inline-block;
        }
        .status-active {
          background-color: var(--lime);
          color: var(--navy);
        }
        .status-pending {
          background-color: var(--surface-alt);
          color: var(--muted);
        }
        .about-cta {
          background: var(--navy);
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
          .founder-name { text-align: center; }
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
          .purpose-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 768px) {
          .founder-image-col {
            width: 100%;
          }
          .founder-image {
            width: 100%;
            max-height: 320px;
            object-fit: cover;
            object-position: top;
            aspect-ratio: auto;
          }
          .stat-number { font-size: 2.5rem; }
        }
      ` }} />
    </>
  );
};

export default AboutPage;
