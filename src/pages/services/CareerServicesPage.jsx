import React from 'react';
import { Link } from 'react-router-dom';
import ServicePageTemplate from '../../components/ui/ServicePageTemplate';
import AnimatedSection from '../../components/ui/AnimatedSection';

const unsplash = (id) => `https://images.unsplash.com/photo-${id}?auto=format&fm=webp&fit=crop&w=1200&h=400&q=70`;

const CareerServicesPage = () => {
  const seoContent = {
    title: "Career Services | FABZ HR International Inc.",
    description: "Career services from a senior HR leader: resume and LinkedIn updates, interview preparation, career coaching and transition planning for your next move."
  };

  const heroContent = {
    title: "Career Services",
    subtitle: "Own your career. Build your future. With expert guidance every step of the way."
  };

  const overview = {
    paragraphs: [
      "Navigating a career transition, aiming for a promotion, or searching for a new role can be overwhelming. Working with an experienced HR leader gives you an insider's perspective on what hiring managers are really looking for.",
      "Our career services are designed to give you clarity, confidence, and a strategic action plan to reach your professional goals.",
      "From optimizing your resume to mastering executive presence, we equip you with the tools to stand out.",
      "Faiza has spent more than 14 years on the hiring side of the table across finance, technology, healthcare, aviation and education. Coaching with her means honest, practical feedback on how your experience will be read by the people making the decision."
    ],
    glance: {
      who: "Professionals, executives, new grads",
      pricing: "Coaching packages (3, 6 or 12 sessions) — contact for pricing",
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

  const whoFor = {
    is: [
      "New graduates who want to present their experience with confidence",
      "Mid-career professionals aiming for a promotion or a move into a new industry",
      "Internationally trained professionals entering the Canadian job market",
      "Managers and executives preparing for senior interviews or a bigger leadership role"
    ],
    isNot: [
      "Anyone looking for a guaranteed job offer — coaching improves your odds, but the decision rests with employers",
      "People who want someone else to run their job search for them; coaching works best when you put in the effort",
      "Mental-health or therapy support — we can suggest where to find qualified help"
    ]
  };

  const deliverables = [
    { title: 'Career goals summary', desc: 'A short written summary of where you are, where you want to go and the gaps to close.' },
    { title: 'Rewritten resume', desc: 'A resume tailored to your target roles and to how Canadian employers and applicant-tracking systems read it.' },
    { title: 'LinkedIn profile updates', desc: 'Headline, About section and experience rewritten to attract the right recruiters.' },
    { title: 'Interview practice with feedback', desc: 'Realistic mock interviews with specific, actionable feedback on content and delivery.' },
    { title: 'Job search action plan', desc: 'A weekly plan for targeting employers, networking and following up.' },
    { title: 'Session notes', desc: 'Key points and next steps after each session, so you always know what to work on.' }
  ];

  const processSteps = [
    { title: 'Discovery Session', desc: 'Assess your current situation and goals.' },
    { title: 'Document Audit', desc: 'Review and refine your resume and LinkedIn.' },
    { title: 'Strategy Development', desc: 'Create a tailored job search or growth plan.' },
    { title: 'Skills Coaching', desc: 'Interview prep, networking, or executive presence.' },
    { title: 'Action & Accountability', desc: 'Execute the plan with ongoing support.' },
    { title: 'Review & Refine', desc: 'Adjust strategy based on market feedback.' }
  ];

  const engagement = {
    intro: [
      "Coaching is offered as packages of 3, 6 or 12 one-hour sessions, so you can choose the level of support that matches your goal.",
      "Not sure where to start? Begin with a single discovery session and we will recommend the right package — or tell you honestly if you don't need one."
    ],
    points: [
      { title: 'Coaching packages', desc: 'Bundles of 60-minute video sessions, priced per package. Contact us for current pricing.' },
      { title: 'Single sessions', desc: 'A one-off session for a focused need such as a resume review or a big interview.' },
      { title: 'Flexible scheduling', desc: 'Sessions are booked at times that suit you, including outside standard office hours where possible.' }
    ]
  };

  const faqs = [
    { q: 'Who are your career services for?', a: 'Anyone navigating a career change, job search, promotion, or simply feeling stuck. We work with fresh graduates, mid-career professionals, and C-suite executives.' },
    { q: 'Are sessions conducted online or in-person?', a: 'Sessions are conducted via video call (Zoom or Google Meet), making them accessible from anywhere in Canada and beyond.' },
    { q: 'How long is each coaching session?', a: 'Each session is 60 minutes. Sessions are scheduled at a time that works for you.' },
    { q: 'Do you specialize in specific industries?', a: 'Faiza\'s background spans 10+ industries including Finance, Tech, Healthcare, Aviation, and Education — giving you an experienced sounding board regardless of your field.' },
    { q: 'Can I start with a single session to try it out?', a: 'Yes. Book a single discovery session first. If you\'d like to continue, we\'ll match you to the right package.' },
    { q: 'I trained outside Canada. Can you help me with the Canadian job market?', a: 'Yes. We help internationally trained professionals translate their experience into the format, language and expectations Canadian employers look for.' },
    { q: 'Will you write my resume for me?', a: 'We rewrite it with you. You get a polished document, and you also understand why it works, so you can tailor it for each application.' },
    { q: 'Is what I share kept confidential?', a: 'Yes. Everything you share in coaching is kept confidential and is never shared with employers or anyone else without your permission.' }
  ];

  const CoachingPackages = (
    <section className="section-wrapper" style={{ backgroundColor: 'var(--cream)' }}>
      <div className="container">
        <AnimatedSection className="text-center" style={{ marginBottom: '3rem' }}>
          <h2 className="svc-h2">Coaching Packages</h2>
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
            <Link to="/book-demo" className="btn btn-ghost btn-full">Contact for Pricing</Link>
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
            <Link to="/book-demo" className="btn btn-primary btn-full">Contact for Pricing</Link>
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
            <Link to="/book-demo" className="btn btn-ghost btn-full">Contact for Pricing</Link>
          </AnimatedSection>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .packages-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          max-width: 1000px;
          margin: 0 auto;
        }
        .package-card {
          background-color: var(--cream);
          border: 1px solid var(--line);
          border-radius: 16px;
          padding: 2.5rem 2rem;
          display: flex;
          flex-direction: column;
          position: relative;
        }
        .package-card.highlighted {
          border: 2px solid var(--navy);
          box-shadow: var(--shadow-card-hover);
          transform: translateY(-10px);
        }
        .js .package-card.highlighted.reveal:not(.is-visible) {
          transform: translateY(30px);
        }
        .popular-badge {
          position: absolute;
          top: -14px;
          left: 50%;
          transform: translateX(-50%);
          background-color: var(--lime);
          color: var(--navy);
          padding: 0.25rem 1rem;
          border-radius: 20px;
          font-family: var(--font-heading);
          font-size: 0.8rem;
          font-weight: 800;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          white-space: nowrap;
        }
        .package-card h3 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
          text-align: center;
        }
        .package-sessions {
          text-align: center;
          color: var(--navy);
          font-family: var(--font-heading);
          font-weight: 800;
          margin: 0 auto 2rem;
          font-size: 1.05rem;
          border-bottom: 3px solid var(--lime);
          padding-bottom: 2px;
        }
        .package-features {
          list-style: none;
          flex-grow: 1;
          margin-bottom: 2rem;
        }
        .package-features li {
          margin-bottom: 1rem;
          padding-left: 1.75rem;
          position: relative;
          color: var(--navy-80);
        }
        .package-features li::before {
          content: '✓';
          position: absolute;
          left: 0;
          top: 2px;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: var(--lime);
          color: var(--navy);
          font-size: 0.75rem;
          font-weight: 800;
          display: grid;
          place-items: center;
        }
        .package-best-for {
          background-color: var(--surface-alt);
          padding: 1rem;
          border-radius: 8px;
          margin-bottom: 1.5rem;
          font-size: 0.9rem;
          text-align: center;
          color: var(--navy-80);
        }
        .package-best-for strong { color: var(--navy); }

        @media (max-width: 992px) {
          .packages-grid {
            grid-template-columns: 1fr;
            max-width: 500px;
          }
          .package-card.highlighted {
            transform: translateY(0);
          }
        }
      ` }} />
    </section>
  );

  return (
    <ServicePageTemplate
      path="/career-services"
      audience="Professionals, executives and new graduates"
      seoContent={seoContent}
      heroContent={heroContent}
      overview={overview}
      includedCards={includedCards}
      whoFor={whoFor}
      deliverables={deliverables}
      processSteps={processSteps}
      engagement={engagement}
      faqs={faqs}
      extraComponent={CoachingPackages}
      extraImages={[
        { src: unsplash('1542744094-24638eff58bb'), alt: 'Man sketching a workflow strategy on a whiteboard' },
        { src: unsplash('1522202176988-66273c2fd55f'), alt: 'Three young professionals laughing together around laptops at a café table' }
      ]}
    />
  );
};

export default CareerServicesPage;
