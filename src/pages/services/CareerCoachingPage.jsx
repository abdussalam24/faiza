import React from 'react';
import ServicePageTemplate from '../../components/ui/ServicePageTemplate';
import AnimatedSection from '../../components/ui/AnimatedSection';

const CareerCoachingPage = () => {
  const seoContent = {
    title: "Career Coaching | FABZ HR Consulting Canada",
    description: "Expert career coaching, resume audits, interview prep, and executive presence coaching for professionals and executives."
  };

  const heroContent = {
    title: "Career Coaching",
    subtitle: "Own your career. Build your future. With expert guidance every step of the way."
  };

  const overview = {
    paragraphs: [
      "Navigating a career transition, aiming for a promotion, or searching for a new role can be overwhelming. Working with an experienced HR leader gives you an insider's perspective on what hiring managers are really looking for.",
      "Our career coaching services are designed to give you clarity, confidence, and a strategic action plan to reach your professional goals.",
      "From optimizing your resume to mastering executive presence, we equip you with the tools to stand out."
    ],
    glance: {
      who: "Professionals, executives, new grads",
      pricing: "Session bundles (3, 6, 12 sessions)",
      turnaround: "Schedule at your own pace"
    }
  };

  const includedCards = [
    { icon: '📄', title: 'Resume & LinkedIn Audit', desc: 'Professional review and rewrite of your career documents.' },
    { icon: '🎤', title: 'Interview Prep & Coaching', desc: 'Mock interviews, feedback, and technique building.' },
    { icon: '🔄', title: 'Career Transition Planning', desc: 'Mapping your path to a new role or industry.' },
    { icon: '👔', title: 'Executive Presence Coaching', desc: 'Building confidence, gravitas, and leadership presence.' },
    { icon: '🗺️', title: 'Job Search Strategy', desc: 'Targeted approach to finding the right opportunities.' }
  ];

  const processSteps = [
    { title: 'Discovery Session', desc: 'Assess your current situation and goals.' },
    { title: 'Document Audit', desc: 'Review and refine your resume and LinkedIn.' },
    { title: 'Strategy Development', desc: 'Create a tailored job search or growth plan.' },
    { title: 'Skills Coaching', desc: 'Interview prep, networking, or executive presence.' },
    { title: 'Action & Accountability', desc: 'Execute the plan with ongoing support.' },
    { title: 'Review & Refine', desc: 'Adjust strategy based on market feedback.' }
  ];

  const faqs = [
    { q: 'Who is career coaching for?', a: 'Anyone navigating a career change, job search, promotion, or simply feeling stuck. We work with fresh graduates, mid-career professionals, and C-suite executives.' },
    { q: 'Are sessions conducted online or in-person?', a: 'Sessions are conducted via video call (Zoom or Google Meet), making them accessible from anywhere in Canada and beyond.' },
    { q: 'How long is each coaching session?', a: 'Each session is 60 minutes. Sessions are scheduled at a time that works for you.' },
    { q: 'Do you specialize in specific industries?', a: 'Faiza\'s background spans 10+ industries including Finance, Tech, Healthcare, Aviation, and Education — giving you an experienced sounding board regardless of your field.' },
    { q: 'Can I start with a single session to try it out?', a: 'Yes. Book a single discovery session first. If you\'d like to continue, we\'ll match you to the right package.' }
  ];

  const CoachingPackages = (
    <section className="section-wrapper" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container">
        <AnimatedSection className="text-center" style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.5rem' }}>Coaching Packages</h2>
        </AnimatedSection>

        <div className="packages-grid">
          {/* Starter Pack */}
          <AnimatedSection delay={0.1} className="package-card">
            <h3>Starter Pack</h3>
            <div className="package-sessions">3 Sessions</div>
            <ul className="package-features">
              <li>Resume + LinkedIn audit</li>
              <li>2 coaching sessions (60 min each)</li>
            </ul>
            <div className="package-best-for">
              <strong>Best for:</strong> Individuals exploring options
            </div>
            <a href="/book-demo" className="btn btn-ghost btn-full">Contact for Pricing</a>
          </AnimatedSection>

          {/* Growth Pack */}
          <AnimatedSection delay={0.2} className="package-card highlighted">
            <div className="popular-badge">Most Popular</div>
            <h3>Growth Pack</h3>
            <div className="package-sessions">6 Sessions</div>
            <ul className="package-features">
              <li>Everything in Starter</li>
              <li>Interview prep + mock interviews</li>
              <li>Job search strategy plan</li>
            </ul>
            <div className="package-best-for">
              <strong>Best for:</strong> Active job seekers
            </div>
            <a href="/book-demo" className="btn btn-primary btn-full">Contact for Pricing</a>
          </AnimatedSection>

          {/* Transformation Pack */}
          <AnimatedSection delay={0.3} className="package-card">
            <h3>Transformation Pack</h3>
            <div className="package-sessions">12 Sessions</div>
            <ul className="package-features">
              <li>Everything in Growth</li>
              <li>Executive presence coaching</li>
              <li>Career transition roadmap</li>
            </ul>
            <div className="package-best-for">
              <strong>Best for:</strong> Career changers & executives
            </div>
            <a href="/book-demo" className="btn btn-ghost btn-full">Contact for Pricing</a>
          </AnimatedSection>
        </div>
      </div>

      <style>{`
        .packages-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          max-width: 1000px;
          margin: 0 auto;
        }
        .package-card {
          background-color: #FFFFFF;
          border: 1px solid #E5E7EB;
          border-radius: 16px;
          padding: 2.5rem 2rem;
          display: flex;
          flex-direction: column;
          position: relative;
        }
        .package-card.highlighted {
          border-color: var(--brand-orange);
          box-shadow: 0 10px 30px rgba(232,92,26,0.15);
          transform: translateY(-10px);
        }
        .popular-badge {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          background-color: var(--brand-orange);
          color: white;
          padding: 0.25rem 1rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        .package-card h3 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
          text-align: center;
        }
        .package-sessions {
          text-align: center;
          color: var(--brand-orange);
          font-weight: 700;
          margin-bottom: 2rem;
          font-size: 1.1rem;
        }
        .package-features {
          list-style: none;
          flex-grow: 1;
          margin-bottom: 2rem;
        }
        .package-features li {
          margin-bottom: 1rem;
          padding-left: 1.5rem;
          position: relative;
          color: var(--text-secondary);
        }
        .package-features li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--accent-teal);
          font-weight: bold;
        }
        .package-best-for {
          background-color: #FFF8F5;
          padding: 1rem;
          border-radius: 8px;
          margin-bottom: 1.5rem;
          font-size: 0.9rem;
          text-align: center;
        }

        @media (max-width: 992px) {
          .packages-grid {
            grid-template-columns: 1fr;
            max-width: 500px;
          }
          .package-card.highlighted {
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );

  return (
    <ServicePageTemplate 
      seoContent={seoContent}
      heroContent={heroContent}
      overview={overview}
      includedCards={includedCards}
      processSteps={processSteps}
      faqs={faqs}
      extraComponent={CoachingPackages}
      extraImages={[
        'https://images.unsplash.com/photo-1542744094-24638eff58bb?w=900',
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900'
      ]}
    />
  );
};

export default CareerCoachingPage;
