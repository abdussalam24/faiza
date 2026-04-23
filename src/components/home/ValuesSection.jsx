import React from 'react';
import { Handshake, Shield, Eye, CheckCircle } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';

const ValuesSection = () => {
  const values = [
    { icon: <Handshake size={56} />, title: 'Trust', desc: 'We show up with honesty in every engagement, every time.' },
    { icon: <Shield size={56} />, title: 'Respect', desc: 'Every client, candidate, and colleague is treated with dignity.' },
    { icon: <Eye size={56} />, title: 'Transparency', desc: 'Clear communication and no hidden agendas.' },
    { icon: <CheckCircle size={56} />, title: 'Accountability', desc: 'We own our results and stand behind our work.' }
  ];

  return (
    <section className="section-wrapper motto-section" style={{ backgroundColor: '#FFF8F5', paddingTop: '4rem' }}>
      <div className="container">
        <AnimatedSection className="text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
          <span className="section-label">OUR PHILOSOPHY</span>
          <h2 className="gradient-heading" style={{ fontSize: '2.5rem', maxWidth: '600px', textAlign: 'center' }}>Built on Four Unshakeable Principles</h2>
          <p className="section-subtext" style={{ textAlign: 'center' }}>We don't just talk about our values; we live them in every interaction.</p>
        </AnimatedSection>
        
        <div className="values-grid">
          {values.map((val, index) => (
            <AnimatedSection key={index} delay={index * 0.1} className="value-card-wrapper">
              <div className="card value-card">
                <div className="value-icon">{val.icon}</div>
                <h3 className="value-title">{val.title}</h3>
                <p className="value-desc">{val.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      <style>{`
        .values-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          margin: 0 auto;
          align-items: stretch;
        }
        .values-grid > div {
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        .value-card {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 2.5rem 1.5rem;
          height: 100%;
          box-sizing: border-box;
        }
        .value-icon {
          color: var(--brand-orange);
          margin-bottom: 1.5rem;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          transition: box-shadow 0.3s ease;
          flex-shrink: 0;
        }
        .value-card:hover .value-icon {
          box-shadow: 0 0 0 8px rgba(232,70,26,0.15);
        }
        .value-title {
          font-size: 1.25rem;
          margin-bottom: 0.75rem;
          font-weight: 700;
        }
        .value-desc {
          color: var(--text-secondary);
          font-size: 0.95rem;
          margin: 0;
          line-height: 1.7;
        }

        @media (max-width: 992px) {
          .values-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 576px) {
          .values-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default ValuesSection;
