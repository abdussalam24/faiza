import React from 'react';
import ServicePageTemplate from '../../components/ui/ServicePageTemplate';

const CareStaffingPage = () => {
  const seoContent = {
    title: "Care Staffing Services | FABZ HR Consulting Canada",
    description: "Professional care staffing solutions — senior caregiver placement, child care staffing, background screening, and compliance across Canada."
  };

  const heroContent = {
    title: "Care Staffing",
    subtitle: "Placing the right people in the right care roles — every time."
  };

  const overview = {
    paragraphs: [
      "Finding the right care professional goes beyond checking qualifications. It requires a deep understanding of trust, reliability, and empathy. At FABZ HR Consulting, we specialize in sourcing, screening, and placing top-tier care staff for families and facilities.",
      "Whether you need an experienced senior caregiver, a dedicated child care worker, or a team for a daycare facility, we manage the entire recruitment process.",
      "Our rigorous vetting ensures that every candidate we present meets the highest standards of safety, competence, and compassion."
    ],
    glance: {
      who: "Families, care facilities, daycares",
      pricing: "Placement fees (15–25% of first-year salary) + optional retainer",
      turnaround: "Typically 1–3 weeks"
    }
  };

  const includedCards = [
    { icon: '🏠', title: 'Senior Caregiver Placement', desc: 'Finding qualified, vetted caregivers for elderly or special needs individuals.' },
    { icon: '👶', title: 'Child Care Staffing', desc: 'Nannies, daycare workers, and after-school staff.' },
    { icon: '🔍', title: 'Background Screening', desc: 'Comprehensive criminal and reference checks.' },
    { icon: '📋', title: 'Compliance & Licensing', desc: 'Ensuring all placements meet regulatory requirements.' },
    { icon: '🔁', title: 'Managed Staffing Retainers', desc: 'Ongoing staffing support on a monthly basis.' }
  ];

  const processSteps = [
    { title: 'Discovery Call', desc: 'Understand your care needs and environment.' },
    { title: 'Candidate Sourcing', desc: 'Access our vetted candidate network.' },
    { title: 'Screening & Vetting', desc: 'Background checks, references, compliance review.' },
    { title: 'Interview & Selection', desc: 'You meet the top candidates.' },
    { title: 'Placement & Onboarding', desc: 'We support the transition.' },
    { title: 'Ongoing Support', desc: 'Optional managed retainer for continued needs.' }
  ];

  const faqs = [
    { q: 'How long does a placement typically take?', a: 'Most placements are completed within 1–3 weeks depending on role complexity and location.' },
    { q: 'Do you conduct background checks on all candidates?', a: 'Yes. All candidates go through criminal background checks and reference verification before being presented to clients.' },
    { q: 'Which provinces in Canada do you serve?', a: 'We currently serve clients primarily in Ontario, with plans to expand across Canada. Contact us to discuss your location.' },
    { q: 'What is a managed staffing retainer?', a: 'A monthly agreement where FABZ handles your ongoing staffing needs — sourcing, vetting, and replacing candidates as required.' },
    { q: 'What are your placement fees?', a: 'Our placement fee is 15–25% of the placed candidate\'s first-year salary, depending on role seniority and scope.' }
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
        'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=900',
        'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=900'
      ]}
    />
  );
};

export default CareStaffingPage;
