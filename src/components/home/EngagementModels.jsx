import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarClock, FileText, Compass, Briefcase } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';

/*
 * Replaces the former public pricing strip. Qualitative only — no percentages
 * or rates are published; every engagement is quoted individually.
 */
const models = [
  { icon: CalendarClock, title: 'Monthly Retainers', desc: 'Ongoing fractional HR support, scoped to the hours and coverage you need each month.' },
  { icon: FileText, title: 'Project Fees', desc: 'A fixed, agreed scope for defined work — an HR audit, a handbook, or a global mobility assignment.' },
  { icon: Compass, title: 'Coaching Packages', desc: 'Session bundles for individuals, matched to where you are in your career and how much support you want.' },
  { icon: Briefcase, title: 'Placement Fees', desc: 'A success-based fee for recruitment and executive search, tied to a successful hire.' },
];

const EngagementModels = () => (
  <section className="section-wrapper engagement-section" style={{ backgroundColor: 'var(--surface-alt)' }}>
    <div className="container">
      <AnimatedSection className="text-center" style={{ marginBottom: '3rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <span className="section-label">HOW WE WORK</span>
        <h2 style={{ fontSize: 'clamp(26px, 3.4vw, 40px)' }}>Engagement Models That Fit Your Needs</h2>
        <p className="section-subtext" style={{ marginBottom: 0, marginTop: '1rem' }}>
          Every engagement is scoped with you and confirmed in a written custom quote before work begins — no surprises.
        </p>
      </AnimatedSection>

      <div className="revenue-grid">
        {models.map(({ icon: Icon, title, desc }, index) => (
          <AnimatedSection key={title} delay={index * 0.1}>
            <div className="revenue-tile">
              <div className="revenue-icon"><Icon size={40} aria-hidden="true" /></div>
              <h3>{title}</h3>
              <p>{desc}</p>
              <div className="revenue-accent"></div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <p className="engagement-cta">
        <Link to="/contact" className="text-link">Request a custom quote →</Link>
      </p>
    </div>

    <style dangerouslySetInnerHTML={{ __html: `
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
        background: var(--cream);
        border: 1px solid var(--line);
        border-radius: 16px;
        padding: 32px 28px;
        text-align: center;
        height: 100%;
        transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .revenue-tile:hover {
        border-color: var(--navy);
        transform: translateY(-4px);
        box-shadow: var(--shadow-card-hover);
      }
      .revenue-icon {
        color: var(--navy);
        background: var(--lime);
        width: 72px;
        height: 72px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 1.5rem;
      }
      .revenue-tile h3 {
        font-size: 18px;
        margin-bottom: 0.75rem;
        font-weight: 800;
      }
      .revenue-tile p {
        color: var(--navy-80);
        font-size: 0.95rem;
        line-height: 1.65;
        margin-bottom: 1.5rem;
        flex-grow: 1;
      }
      .revenue-accent {
        height: 4px;
        width: 40px;
        background-color: var(--lime);
        border-radius: 2px;
        margin-top: auto;
      }
      .engagement-cta {
        text-align: center;
        margin-top: 2.5rem;
      }
      @media (max-width: 992px) {
        .revenue-grid { grid-template-columns: repeat(2, 1fr); }
      }
      @media (max-width: 576px) {
        .revenue-grid { grid-template-columns: 1fr; }
      }
    ` }} />
  </section>
);

export default EngagementModels;
