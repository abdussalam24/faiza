import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';

const servicesData = [
  {
    title: 'Thoughtful sourcing and selection, from brief to offer',
    category: 'RECRUITMENT & EXECUTIVE SEARCH',
    image: '/images/services/service-recruiter.webp',
    alt: 'Recruiter speaking with a candidate',
    bullets: [
      'Role & success profile',
      'Talent sourcing',
      'Candidate assessment',
      'Leadership search',
      'Interview & offer support'
    ],
    clients: 'growing companies, SMBs, leadership teams',
    link: '/recruitment-executive-search'
  },
  {
    title: 'On-demand HR leadership for SMBs',
    category: 'FRACTIONAL HR',
    image: '/images/services/service-hr-advisor.webp',
    alt: 'HR advisor working with a leadership team',
    bullets: [
      'HR audits & policy design',
      'Recruiting strategy',
      'Employee relations',
      'Comp & benefits advisory',
      'Monthly retainer packages'
    ],
    clients: 'SMBs, 10–100 employees',
    link: '/fractional-hr'
  },
  {
    title: 'Moving talent across borders, compliantly',
    category: 'GLOBAL MOBILITY',
    image: '/images/services/service-global-move.webp',
    alt: 'Professional planning an international move',
    bullets: [
      'Visa & work permit support',
      'Relocation coordination',
      'International onboarding',
      'Cross-border compliance',
      'Assignment policy design'
    ],
    clients: 'growing companies, expats, multinationals',
    link: '/global-mobility'
  },
  {
    title: 'Helping individuals own their career path',
    category: 'CAREER COACHING',
    image: '/images/services/service-career-coach.webp',
    alt: 'Career coach and job seeker working together',
    bullets: [
      'Resume & LinkedIn audit',
      'Interview prep & coaching',
      'Career transition planning',
      'Executive presence coaching',
      'Job search strategy'
    ],
    clients: 'professionals, executives, new grads',
    link: '/career-coaching'
  }
];

const ServicesGrid = () => {
  return (
    <section id="services" className="section-wrapper" style={{ backgroundColor: 'var(--cream)' }}>
      <div className="container">
        <AnimatedSection className="text-center">
          <span className="section-label">WHAT WE OFFER</span>
          <h2>Four Pillars. One Trusted Partner.</h2>
          <p className="section-subtext">
            Specialized HR solutions designed to meet you wherever you are in your journey.
          </p>
        </AnimatedSection>

        <div className="services-grid">
          {servicesData.map((service, index) => (
            <AnimatedSection key={service.link} delay={index * 0.1}>
              <Link to={service.link} className="card hover-card service-card">
                <div className="card-image-wrapper">
                  <img
                    src={service.image}
                    alt={service.alt}
                    width="1200"
                    height="480"
                    loading="lazy"
                    decoding="async"
                    className="card-image"
                  />
                </div>
                <div className="card-content-wrapper">
                  <div className="card-category">{service.category}</div>
                  <h3 className="card-title">{service.title}</h3>
                  <ul className="card-bullets">
                    {service.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                  <div className="card-divider"></div>
                  <div className="card-clients">
                    <strong>Clients:</strong> {service.clients}
                  </div>
                  <div className="card-explore">
                    Explore <span className="sr-only">{service.category.toLowerCase()}</span> <ArrowRight size={16} aria-hidden="true" />
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .services-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
          align-items: stretch;
        }
        .services-grid > div {
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        .service-card {
          display: flex;
          flex-direction: column;
          height: 100%;
          text-decoration: none;
          color: var(--navy-80);
          overflow: hidden;
          padding: 0;
        }
        .card-image-wrapper {
          position: relative;
          height: 220px;
          width: 100%;
          border-bottom: 4px solid var(--lime);
        }
        .card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 16px 16px 0 0;
          transition: transform 0.4s ease;
        }
        .service-card:hover .card-image {
          transform: scale(1.03);
        }
        .card-image-wrapper { overflow: hidden; border-radius: 16px 16px 0 0; }
        .card-content-wrapper {
          padding: 2rem 1.5rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        .card-category {
          display: inline-block;
          color: var(--muted);
          font-family: var(--font-heading);
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          margin-bottom: 16px;
        }
        .card-title {
          font-size: 1.25rem;
          margin-bottom: 1.5rem;
          line-height: 1.3;
        }
        .card-bullets {
          list-style: none;
          margin-bottom: 1.5rem;
          flex-grow: 1;
          padding: 0;
        }
        .card-bullets li {
          position: relative;
          padding-left: 1.25rem;
          margin-bottom: 0.5rem;
          font-size: 0.95rem;
          color: var(--navy-80);
        }
        .card-bullets li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0.6em;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--lime);
          box-shadow: 0 0 0 1px var(--navy);
        }
        .card-divider {
          height: 1px;
          background: var(--line);
          margin-bottom: 1rem;
        }
        .card-clients {
          font-size: 0.9rem;
          color: var(--muted);
          margin-bottom: 1rem;
        }
        .card-clients strong { color: var(--navy); }
        .card-explore {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--navy);
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 0.95rem;
        }
        .service-card:hover .card-explore {
          text-decoration: underline;
          text-decoration-color: var(--lime);
          text-decoration-thickness: 2px;
          text-underline-offset: 4px;
        }

        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
        }
      ` }} />
    </section>
  );
};

export default ServicesGrid;
