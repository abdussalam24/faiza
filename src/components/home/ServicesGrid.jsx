import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';

const servicesData = [
  {
    title: 'Placing the right people in care roles',
    category: 'CARE STAFFING',
    image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=600',
    bullets: [
      'Senior caregiver placement',
      'Child care staffing',
      'Background screening',
      'Compliance & licensing',
      'Managed staffing retainers'
    ],
    clients: 'families, facilities, daycares',
    link: '/care-staffing'
  },
  {
    title: 'On-demand HR leadership for SMBs',
    category: 'FRACTIONAL HR',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600',
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
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600',
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
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600',
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
    <section id="services" className="section-wrapper" style={{ backgroundColor: '#FFFFFF' }}>
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
            <AnimatedSection key={index} delay={index * 0.1}>
              <Link to={service.link} className="card hover-card service-card">
                <div className="card-image-wrapper">
                  <img src={service.image} alt={service.title} className="card-image" />
                  <div className="card-image-overlay"></div>
                </div>
                <div className="card-content-wrapper">
                  <div className="card-category">{service.category}</div>
                  <h3 className="card-title">{service.title}</h3>
                  <ul className="card-bullets">
                    {service.bullets.map((bullet, idx) => (
                      <li key={idx}>{bullet}</li>
                    ))}
                  </ul>
                  <div className="card-divider"></div>
                  <div className="card-clients">
                    <strong>Clients:</strong> {service.clients}
                  </div>
                  <div className="card-explore">
                    Explore <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>

      <style>{`
        .text-center {
          text-align: center;
        }
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
          color: var(--text-primary);
          overflow: hidden;
          padding: 0;
        }
        .card-image-wrapper {
          position: relative;
          height: 220px;
          width: 100%;
        }
        .card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 16px 16px 0 0;
        }
        .card-image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(180deg, transparent 40%, rgba(232,70,26,0.35) 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
          border-radius: 16px 16px 0 0;
        }
        .service-card:hover .card-image-overlay {
          opacity: 1;
        }
        .card-content-wrapper {
          padding: 2rem 1.5rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        .card-category {
          display: inline-block;
          color: var(--brand-orange);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 12px;
          text-transform: uppercase;
          margin-bottom: 24px;
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
          font-size: 0.9rem;
          color: var(--text-secondary);
        }
        .card-bullets li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: var(--brand-orange);
          font-weight: bold;
        }
        .card-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(232,70,26,0.3), transparent);
          margin-bottom: 1rem;
          border: none;
        }
        .card-clients {
          font-size: 0.85rem;
          color: var(--text-secondary);
          margin-bottom: 1rem;
        }
        .card-explore {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-primary);
          font-weight: 600;
          font-size: 0.9rem;
          transition: color 0.2s;
        }
        .service-card:hover .card-explore {
          color: var(--brand-orange);
        }

        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default ServicesGrid;
