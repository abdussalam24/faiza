import React from 'react';
import { CheckCircle, Shield, Eye, Handshake } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';

/* Core values — wording from www.fabzhr.com */
export const CORE_VALUES = [
  { icon: CheckCircle, title: 'Accountability', desc: 'Own our commitments and follow through.' },
  { icon: Shield, title: 'Respect', desc: 'Listen and treat each person with care.' },
  { icon: Eye, title: 'Transparency', desc: 'Communicate clearly about scope, progress, and expectations.' },
  { icon: Handshake, title: 'Trust', desc: 'Earn confidence through consistent, honest work.' },
];

const ValuesSection = ({
  label = 'OUR PHILOSOPHY',
  title = 'Built on Four Unshakeable Principles',
  subtitle = 'The standards behind every conversation and commitment.',
}) => (
  <section className="section-wrapper motto-section" style={{ backgroundColor: 'var(--cream)', paddingTop: '4rem' }}>
    <div className="container">
      <AnimatedSection className="text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
        <span className="section-label">{label}</span>
        <h2 className="gradient-heading" style={{ fontSize: 'clamp(26px, 3.6vw, 40px)', maxWidth: '640px', textAlign: 'center' }}>{title}</h2>
        <p className="section-subtext" style={{ textAlign: 'center', marginTop: '1rem' }}>{subtitle}</p>
      </AnimatedSection>

      <div className="values-grid">
        {CORE_VALUES.map(({ icon: Icon, title: t, desc }, index) => (
          <AnimatedSection key={t} delay={index * 0.1} className="value-card-wrapper">
            <div className="card value-card">
              <div className="value-icon"><Icon size={36} aria-hidden="true" /></div>
              <h3 className="value-title">{t}</h3>
              <p className="value-desc">{desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>

    <style dangerouslySetInnerHTML={{ __html: `
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
      }
      .value-icon {
        color: var(--lime);
        background: var(--navy);
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
        box-shadow: 0 0 0 8px var(--lime-20);
      }
      .value-title {
        font-size: 1.25rem;
        margin-bottom: 0.75rem;
        font-weight: 800;
      }
      .value-desc {
        color: var(--navy-80);
        font-size: 0.98rem;
        margin: 0;
        line-height: 1.7;
      }

      @media (max-width: 992px) {
        .values-grid { grid-template-columns: repeat(2, 1fr); }
      }
      @media (max-width: 576px) {
        .values-grid { grid-template-columns: 1fr; }
      }
    ` }} />
  </section>
);

export default ValuesSection;
