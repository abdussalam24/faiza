import React from 'react';
import ServicePageTemplate from '../../components/ui/ServicePageTemplate';

const FractionalHRPage = () => {
  const seoContent = {
    title: "Fractional HR Services | FABZ HR Consulting Canada",
    description: "On-demand senior HR leadership for SMBs. HR audits, policy design, employee relations, and recruitment strategy."
  };

  const heroContent = {
    title: "Fractional HR",
    subtitle: "Senior HR leadership, on your terms — without the full-time cost."
  };

  const overview = {
    paragraphs: [
      "Growing businesses often reach a point where they need high-level HR expertise, but don't yet require a full-time, in-house HR Director. That's where Fractional HR comes in.",
      "We provide on-demand HR leadership to build your foundations, manage employee relations, and create scalable policies that protect your business and engage your team.",
      "From comprehensive HR audits to ongoing monthly retainers, we act as an extension of your leadership team."
    ],
    glance: {
      who: "SMBs, 10–100 employees",
      pricing: "Monthly retainer packages or project-based fees",
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

  const processSteps = [
    { title: 'Discovery & Needs Assessment', desc: 'We evaluate your current HR maturity and pain points.' },
    { title: 'HR Audit (Optional but recommended)', desc: 'Deep dive into policies, compliance, and systems.' },
    { title: 'Strategic Roadmap', desc: 'We propose a prioritized plan of action.' },
    { title: 'Implementation', desc: 'Drafting policies, setting up systems, training managers.' },
    { title: 'Ongoing Partnership', desc: 'We become your on-call HR department.' },
    { title: 'Scale & Adjust', desc: 'Adjust hours and focus as your company grows.' }
  ];

  const faqs = [
    { q: 'What exactly is Fractional HR?', a: 'Fractional HR means you get access to a senior HR professional (like a part-time HR Director) at a fraction of the cost of a full-time hire. Ideal for growing businesses that need HR expertise but aren\'t ready for a full-time department.' },
    { q: 'Is this right for a company with only 15 employees?', a: 'Absolutely. Fractional HR is especially valuable for companies between 10–100 employees who need HR structure without the overhead.' },
    { q: 'How many hours per month do you work with us?', a: 'Packages start from 8 hours/month and scale based on your needs. We\'ll recommend the right level during your discovery call.' },
    { q: 'What\'s included in an HR audit?', a: 'A comprehensive review of your policies, job descriptions, compliance status, onboarding/offboarding processes, and people practices — with a written recommendations report.' },
    { q: 'Can we scale up services as we grow?', a: 'Yes. Our retainer packages are flexible and can be adjusted monthly.' }
  ];

  return (
    <ServicePageTemplate 
      seoContent={seoContent}
      heroContent={heroContent}
      overview={overview}
      includedCards={includedCards}
      processSteps={processSteps}
      faqs={faqs}
      extraImages={[
        'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900',
        'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=900'
      ]}
    />
  );
};

export default FractionalHRPage;
