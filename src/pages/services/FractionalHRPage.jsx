import React from 'react';
import ServicePageTemplate from '../../components/ui/ServicePageTemplate';

const unsplash = (id) => `https://images.unsplash.com/photo-${id}?auto=format&fm=webp&fit=crop&w=1200&h=400&q=70`;

const FractionalHRPage = () => {
  const seoContent = {
    title: "Fractional HR Services | FABZ HR Consulting Canada",
    description: "On-demand senior HR leadership for growing Canadian businesses: HR audits, policy design, employee relations and recruiting strategy, without a full-time hire."
  };

  const heroContent = {
    title: "Fractional HR",
    subtitle: "Senior HR leadership, on your terms — without the full-time cost."
  };

  const overview = {
    paragraphs: [
      "Growing businesses often reach a point where they need high-level HR expertise, but don't yet require a full-time, in-house HR Director. That's where Fractional HR comes in.",
      "We provide on-demand HR leadership to build your foundations, manage employee relations, and create scalable policies that protect your business and engage your team.",
      "From comprehensive HR audits to ongoing monthly retainers, we act as an extension of your leadership team.",
      "Faiza has built and revitalized HR functions for organizations ranging from startups with 10 employees to enterprises with more than 1,000. That experience means you get practical advice that fits your size today, with structures that can grow with you."
    ],
    glance: {
      who: "SMBs, 10–100 employees",
      pricing: "Monthly retainer or fixed project fee — custom quote",
      turnaround: "Flexible, starting immediately"
    }
  };

  const includedCards = [
    { icon: '📊', title: 'HR Audits & Policy Design', desc: 'Full review of your HR processes and documentation.' },
    { icon: '🎯', title: 'Recruiting Strategy', desc: 'Building hiring pipelines and job frameworks.' },
    { icon: '🤝', title: 'Employee Relations', desc: 'Handling conflicts, performance, and culture.' },
    { icon: '💰', title: 'Comp & Benefits Advisory', desc: 'Benchmarking salaries and structuring packages.' },
    { icon: '📅', title: 'Monthly Retainer Packages', desc: 'Dedicated fractional HR hours each month.' }
  ];

  const whoFor = {
    is: [
      "Founders and owners spending too much of their own time on people issues",
      "Businesses with roughly 10–100 employees that have outgrown informal HR",
      "Teams preparing for growth, a funding round, an acquisition or a new location",
      "Organizations whose HR lead has left and need experienced cover while they decide next steps"
    ],
    isNot: [
      "Companies that need a full-time, on-site HR department every day",
      "Payroll processing or benefits administration on its own — we advise on these but do not run payroll",
      "Formal legal representation — for litigation or tribunal matters we work alongside your employment lawyer"
    ]
  };

  const deliverables = [
    { title: 'HR health check report', desc: 'A written review of your current policies, documents and practices, with risks and quick wins ranked by priority.' },
    { title: 'Prioritized HR roadmap', desc: 'A practical 90-day and 12-month plan that matches your budget and growth stage.' },
    { title: 'Employee handbook and policies', desc: 'Clear, plain-language policies written or updated for your workplace, reviewed against Ontario requirements.' },
    { title: 'Job descriptions and hiring toolkit', desc: 'Role profiles, interview guides and scorecards that make hiring more consistent.' },
    { title: 'Manager guidance', desc: 'Coaching and templates for performance conversations, onboarding and difficult situations.' },
    { title: 'Monthly HR summary', desc: 'For retainer clients, a short update on what was done, what is open and what is coming next.' }
  ];

  const processSteps = [
    { title: 'Discovery & Needs Assessment', desc: 'We evaluate your current HR maturity and pain points.' },
    { title: 'HR Audit (Optional but recommended)', desc: 'Deep dive into policies, compliance, and systems.' },
    { title: 'Strategic Roadmap', desc: 'We propose a prioritized plan of action.' },
    { title: 'Implementation', desc: 'Drafting policies, setting up systems, training managers.' },
    { title: 'Ongoing Partnership', desc: 'We become your on-call HR department.' },
    { title: 'Scale & Adjust', desc: 'Adjust hours and focus as your company grows.' }
  ];

  const engagement = {
    intro: [
      "Most clients start with an HR health check, which gives both of us a clear picture of where things stand. From there you can choose a one-off project or an ongoing retainer.",
      "Every engagement is scoped with you and confirmed in a written custom quote, so you know exactly what is included before any work begins."
    ],
    points: [
      { title: 'Project fee', desc: 'A fixed scope and fixed fee for defined work such as an HR audit, a handbook or a policy refresh.' },
      { title: 'Monthly retainer', desc: 'A set number of HR hours each month for ongoing support, adjustable as your needs change.' },
      { title: 'Flexible scaling', desc: 'Increase or reduce support as your team grows, without the cost of a full-time hire.' }
    ]
  };

  const faqs = [
    { q: 'What exactly is Fractional HR?', a: 'Fractional HR means you get access to a senior HR professional (like a part-time HR Director) at a fraction of the cost of a full-time hire. Ideal for growing businesses that need HR expertise but aren\'t ready for a full-time department.' },
    { q: 'Is this right for a company with only 15 employees?', a: 'Absolutely. Fractional HR is especially valuable for companies between 10–100 employees who need HR structure without the overhead.' },
    { q: 'How many hours per month do you work with us?', a: 'Packages start from 8 hours/month and scale based on your needs. We\'ll recommend the right level during your discovery call.' },
    { q: 'What\'s included in an HR audit?', a: 'A comprehensive review of your policies, job descriptions, compliance status, onboarding/offboarding processes, and people practices — with a written recommendations report.' },
    { q: 'Can we scale up services as we grow?', a: 'Yes. Our retainer packages are flexible and can be adjusted monthly.' },
    { q: 'Do you work on-site or remotely?', a: 'Most work is done remotely by video call and email, which keeps costs down. On-site visits in Ontario can be arranged when they add value, for example for workshops or sensitive conversations.' },
    { q: 'Can you help with a difficult employee situation right now?', a: 'Yes. Many clients first contact us about an urgent issue such as a performance problem, a complaint or a termination. We can help you plan next steps quickly and then look at preventing similar issues.' },
    { q: 'How is this different from hiring an HR consultant for one project?', a: 'Fractional HR is an ongoing relationship: we learn your business, attend to issues as they come up and help you build HR over time, rather than delivering one report and leaving.' }
  ];

  return (
    <ServicePageTemplate
      path="/fractional-hr"
      audience="Small and mid-sized businesses"
      seoContent={seoContent}
      heroContent={heroContent}
      overview={overview}
      includedCards={includedCards}
      whoFor={whoFor}
      deliverables={deliverables}
      processSteps={processSteps}
      engagement={engagement}
      faqs={faqs}
      extraImages={[
        { src: unsplash('1600880292203-757bb62b4baf'), alt: 'Two colleagues high-fiving across a desk in a bright office' },
        { src: unsplash('1553877522-43269d4ea984'), alt: 'Professionals working on laptops at a shared office desk' }
      ]}
    />
  );
};

export default FractionalHRPage;
