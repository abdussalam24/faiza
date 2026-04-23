import React from 'react';
import ServicePageTemplate from '../../components/ui/ServicePageTemplate';

const GlobalMobilityPage = () => {
  const seoContent = {
    title: "Global Mobility Services | FABZ HR Consulting Canada",
    description: "Expert global mobility and relocation support. Visa assistance, international onboarding, and cross-border compliance."
  };

  const heroContent = {
    title: "Global Mobility",
    subtitle: "Moving talent across borders — compliantly and confidently."
  };

  const overview = {
    paragraphs: [
      "Relocating employees internationally is complex, involving immigration laws, tax implications, and personal transitions. FABZ HR Consulting simplifies global mobility for both companies and individuals.",
      "We ensure that your international assignments are compliant, cost-effective, and smooth for the employee and their family.",
      "Whether you are bringing talent into Canada or moving employees abroad, we design policies and coordinate logistics to make the transition seamless."
    ],
    glance: {
      who: "Growing companies, expats, multinationals",
      pricing: "Project-based fees per assignment",
      turnaround: "6–12 weeks prior to move date"
    }
  };

  const includedCards = [
    { icon: '📄', title: 'Visa & Work Permit Support', desc: 'Guidance and preparation for work authorization applications.' },
    { icon: '🚚', title: 'Relocation Coordination', desc: 'End-to-end relocation logistics support.' },
    { icon: '🌐', title: 'International Onboarding', desc: 'Setting employees up for success in a new country.' },
    { icon: '⚖️', title: 'Cross-Border Compliance', desc: 'Employment law and tax compliance across jurisdictions.' },
    { icon: '📝', title: 'Assignment Policy Design', desc: 'Drafting international assignment policies for your company.' }
  ];

  const processSteps = [
    { title: 'Initial Consultation', desc: 'Understand the assignment parameters and destination.' },
    { title: 'Policy Design & Cost Estimate', desc: 'Define allowances and project total costs.' },
    { title: 'Immigration Preparation', desc: 'Gather documents and file necessary work permits.' },
    { title: 'Relocation Logistics', desc: 'Coordinate flights, housing, and moving services.' },
    { title: 'On-the-ground Support', desc: 'Assist with local setup (banking, SIN/SSN, etc.).' },
    { title: 'Repatriation Planning', desc: 'Planning the return home when the assignment ends.' }
  ];

  const faqs = [
    { q: 'Which countries do you support for global mobility?', a: 'We specialize in Canada, with coverage for UAE and Pakistan assignments. We partner with specialists in Australia and the USA for those markets.' },
    { q: 'Can you help with work permit applications?', a: 'Yes. We guide employers and employees through the work permit and visa application process, including documentation preparation.' },
    { q: 'How long does relocation coordination take?', a: 'Timelines vary by destination, but we typically begin 6–12 weeks before the move date to ensure smooth transitions.' },
    { q: 'Do you work with individuals or only companies?', a: 'Both. We support individuals (expats) navigating a move, as well as companies managing employee transfers.' },
    { q: 'What is an international assignment policy?', a: 'A formal document outlining your company\'s rules for international transfers — covering allowances, housing, tax equalization, and repatriation.' }
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
        'https://images.unsplash.com/photo-1569154941061-e231b4aa8eda?w=900',
        'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=900'
      ]}
    />
  );
};

export default GlobalMobilityPage;
