import React from 'react';
import ServicePageTemplate from '../../components/ui/ServicePageTemplate';

const unsplash = (id) => `https://images.unsplash.com/photo-${id}?auto=format&fm=webp&fit=crop&w=1200&h=400&q=70`;

const GlobalMobilityPage = () => {
  const seoContent = {
    title: "Global Mobility Services | FABZ HR Consulting Canada",
    description: "Global mobility and relocation support for employers and professionals: work permit coordination, international onboarding and cross-border HR compliance."
  };

  const heroContent = {
    title: "Global Mobility",
    subtitle: "Moving talent across borders — compliantly and confidently."
  };

  const overview = {
    paragraphs: [
      "Relocating employees internationally is complex, involving immigration laws, tax implications, and personal transitions. FABZ HR Consulting simplifies global mobility for both companies and individuals.",
      "We ensure that your international assignments are compliant, cost-effective, and smooth for the employee and their family.",
      "Whether you are bringing talent into Canada or moving employees abroad, we design policies and coordinate logistics to make the transition seamless.",
      "We focus on the people side of a move — planning, communication, onboarding and policy — and coordinate with licensed immigration consultants, lawyers and tax advisors where regulated advice is required, so every part of the move is handled by the right expert."
    ],
    glance: {
      who: "Growing companies, expats, multinationals",
      pricing: "Project fee per assignment — custom quote",
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

  const whoFor = {
    is: [
      "Employers hiring international talent into Canada for the first time",
      "Companies sending employees on short- or long-term assignments abroad",
      "Professionals and families planning a career move to or from Canada",
      "HR teams that need an international assignment or relocation policy"
    ],
    isNot: [
      "Anyone seeking representation before Immigration, Refugees and Citizenship Canada — this must come from a licensed immigration consultant (RCIC) or lawyer, whom we can coordinate with",
      "Personal tax filing — we work alongside your tax advisor rather than replacing them",
      "Moves that need to happen within days; good relocations need a few weeks of planning"
    ]
  };

  const deliverables = [
    { title: 'Mobility plan and timeline', desc: 'A step-by-step plan covering documents, key dates, responsibilities and dependencies for the move.' },
    { title: 'Document checklist', desc: 'A tailored list of the records and paperwork the employee and employer will need to gather.' },
    { title: 'Cost estimate', desc: 'A projected budget for the assignment covering allowances, travel, housing and support services.' },
    { title: 'Assignment policy', desc: 'A clear international assignment or relocation policy that your company can reuse for future moves.' },
    { title: 'Arrival and onboarding pack', desc: 'Practical guidance for the first weeks — banking, SIN, health coverage, housing and settling in.' },
    { title: 'Specialist coordination', desc: 'Introductions to and coordination with licensed immigration, legal and tax professionals where needed.' }
  ];

  const processSteps = [
    { title: 'Initial Consultation', desc: 'Understand the assignment parameters and destination.' },
    { title: 'Policy Design & Cost Estimate', desc: 'Define allowances and project total costs.' },
    { title: 'Immigration Preparation', desc: 'Gather documents and coordinate the necessary work permit applications.' },
    { title: 'Relocation Logistics', desc: 'Coordinate flights, housing, and moving services.' },
    { title: 'On-the-ground Support', desc: 'Assist with local setup (banking, SIN/SSN, etc.).' },
    { title: 'Repatriation Planning', desc: 'Planning the return home when the assignment ends.' }
  ];

  const engagement = {
    intro: [
      "Global mobility work is usually quoted per assignment, because every destination, family situation and timeline is different.",
      "For employers with several moves a year, we can agree an ongoing arrangement that covers policy, planning and coordination for each assignment."
    ],
    points: [
      { title: 'Per-assignment project fee', desc: 'A fixed scope for one move, from initial planning through arrival support. Custom quote.' },
      { title: 'Policy design project', desc: 'A one-time project to create or update your international assignment policy.' },
      { title: 'Ongoing mobility support', desc: 'For employers with regular moves, a retainer that covers planning and coordination across assignments.' }
    ]
  };

  const faqs = [
    { q: 'Which countries do you support for global mobility?', a: 'We specialize in Canada, with coverage for UAE and Pakistan assignments. We partner with specialists in Australia and the USA for those markets.' },
    { q: 'Can you help with work permit applications?', a: 'Yes. We guide employers and employees through the work permit and visa application process, including documentation preparation.' },
    { q: 'How long does relocation coordination take?', a: 'Timelines vary by destination, but we typically begin 6–12 weeks before the move date to ensure smooth transitions.' },
    { q: 'Do you work with individuals or only companies?', a: 'Both. We support individuals (expats) navigating a move, as well as companies managing employee transfers.' },
    { q: 'What is an international assignment policy?', a: 'A formal document outlining your company\'s rules for international transfers — covering allowances, housing, tax equalization, and repatriation.' },
    { q: 'Are you a licensed immigration consultant?', a: 'No. FABZ HR focuses on the HR and people side of a move. Where regulated immigration advice or representation is needed, we coordinate with licensed immigration consultants (RCICs) or lawyers.' },
    { q: 'Can you support the employee’s family as well?', a: 'Yes. Family considerations such as schooling, housing and a partner’s career are part of planning a successful move, and we include them in the plan.' },
    { q: 'What happens if the move date changes?', a: 'Plans change often. We update the timeline, checklist and cost estimate with you and keep everyone informed so nothing falls through the cracks.' }
  ];

  return (
    <ServicePageTemplate
      path="/global-mobility"
      audience="Employers, expatriates and multinational teams"
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
        { src: '/images/services/service-global-move.webp', alt: 'Professional planning an international move' },
        { src: unsplash('1526778548025-fa2f459cd5c1'), alt: 'World map engraved into a wooden surface' }
      ]}
    />
  );
};

export default GlobalMobilityPage;
