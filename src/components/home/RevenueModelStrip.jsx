import React from 'react';
import AnimatedSection from '../ui/AnimatedSection';

import { CalendarClock, FileText, Compass, Briefcase } from 'lucide-react';

const RevenueModelStrip = () => {
  const models = [
    { icon: <CalendarClock size={48} />, title: 'Monthly Retainers', desc: 'Fractional HR, care staffing managed services' },
    { icon: <FileText size={48} />, title: 'Project Fees', desc: 'Global mobility assignments, HR audits, handbooks' },
    { icon: <Compass size={48} />, title: 'Coaching Packages', desc: '3, 6, or 12-session bundles for individuals' },
    { icon: <Briefcase size={48} />, title: 'Placement Fees', desc: '15–25% of first-year salary for care placements' }
  ];

  return (
    <section className="section-wrapper revenue-section" style={{ backgroundColor: '#FFF8F5', paddingBottom: '0' }}>
      <div className="container">
        <AnimatedSection className="text-center" style={{ marginBottom: '3rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span className="section-label">HOW WE WORK</span>
          <h2 style={{ fontSize: '2rem' }}>Shared Revenue Model Across All Four Pillars</h2>
        </AnimatedSection>
        
        <div className="revenue-grid">
          {models.map((model, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="revenue-tile">
                <div className="revenue-icon">{model.icon}</div>
                <h3>{model.title}</h3>
                <p>{model.desc}</p>
                <div className="revenue-accent"></div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      <style>{`
        .revenue-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          align-items: stretch;
        }
        .revenue-grid > div {
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        .revenue-tile {
          background: #FFFFFF;
          border: 1px solid #E5E7EB;
          border-radius: 16px;
          padding: 32px 28px;
          text-align: center;
          height: 100%;
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
        }
        .revenue-tile:hover {
          border-color: var(--brand-orange);
          transform: translateY(-4px);
          box-shadow: 0 8px 32px rgba(232, 70, 26, 0.12);
        }
        .revenue-icon {
          color: var(--brand-orange);
          margin-bottom: 1.5rem;
        }
        .revenue-tile h3 {
          color: #0D1421;
          font-size: 18px;
          margin-bottom: 0.75rem;
          font-family: var(--font-syne);
          font-weight: 700;
        }
        .revenue-tile p {
          color: var(--text-secondary);
          font-size: 0.9rem;
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }
        .revenue-accent {
          height: 4px;
          width: 40px;
          background-color: var(--brand-orange);
          border-radius: 2px;
          margin-top: auto;
        }
        @media (max-width: 992px) {
          .revenue-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 576px) {
          .revenue-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </section>
  );
};

export default RevenueModelStrip;
