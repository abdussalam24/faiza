import React from 'react';
import ServicePageTemplate from '../../components/ui/ServicePageTemplate';

/* Recruitment & Executive Search — core wording from www.fabzhr.com */
const RecruitmentPage = () => {
  const seoContent = {
    title: "Recruitment & Executive Search | FABZ HR Consulting Canada",
    description: "Recruitment and executive search in Canada: thoughtful sourcing, assessment and selection for specialist, professional and leadership roles, brief to offer."
  };

  const heroContent = {
    title: "Recruitment & Executive Search",
    subtitle: "Thoughtful sourcing and selection for specialist, professional, and leadership roles — from brief to offer."
  };

  const overview = {
    paragraphs: [
      "A single hire can change the direction of a team. Getting it right takes more than posting a job ad and sorting resumes — it takes a clear picture of what success looks like in the role, and a disciplined process for finding people who can deliver it.",
      "FABZ HR runs focused searches for specialist, professional and leadership roles. We define the role and success profile with you, source and assess suitable talent, and support you through interviews and the offer.",
      "Faiza has led hiring for organizations ranging from startups with 10 employees to enterprises with more than 1,000, across finance, technology, healthcare, aviation and education. That hiring-side experience shapes every search: we know what to probe in an interview and which signals matter.",
      "Every search is run with discretion. Candidates are approached respectfully and confidentially, and you only see people who have been properly assessed against the brief we agreed together."
    ],
    glance: {
      who: "Growing companies, SMBs and leadership teams",
      pricing: "Success-based placement fee or retained search — custom quote",
      turnaround: "Typically 3–8 weeks, depending on seniority"
    }
  };

  const includedCards = [
    { icon: '🎯', title: 'Role & Success Profile', desc: 'Defining the role, must-have skills and what success looks like in the first year.' },
    { icon: '🔎', title: 'Talent Sourcing', desc: 'Targeted outreach to active and passive candidates through our network and direct search.' },
    { icon: '🧭', title: 'Candidate Assessment', desc: 'Structured interviews, skills evaluation and reference checks against the agreed brief.' },
    { icon: '👔', title: 'Leadership Search', desc: 'Discreet, confidential searches for managers, directors and executive roles.' },
    { icon: '🤝', title: 'Interview & Offer Support', desc: 'Interview coordination, feedback, offer guidance and support through acceptance.' }
  ];

  const whoFor = {
    is: [
      "Growing businesses hiring for a key specialist or professional role",
      "Leadership teams filling a manager, director or executive position",
      "Organizations that need a confidential search, such as a replacement hire",
      "Companies without an in-house recruiter that want a structured, fair hiring process"
    ],
    isNot: [
      "High-volume or seasonal hiring of many entry-level roles at once",
      "Organizations looking only for a stack of unscreened resumes",
      "Roles that need to be filled within a few days — a good search takes a few weeks"
    ]
  };

  const deliverables = [
    { title: 'Role brief and success profile', desc: 'A written summary of the role, responsibilities, must-have skills, compensation range and what success looks like.' },
    { title: 'Search strategy', desc: 'Where and how we will look for candidates, including target organizations and outreach approach.' },
    { title: 'Assessed shortlist', desc: 'A shortlist of candidates who have been interviewed and assessed against the brief, with a written profile for each.' },
    { title: 'Interview guide and scorecards', desc: 'Structured questions and scoring criteria so every interviewer evaluates candidates consistently.' },
    { title: 'Reference checks', desc: 'References taken for your preferred candidate, summarized before you make an offer.' },
    { title: 'Offer and onboarding guidance', desc: 'Support with the offer, negotiation, start date and the new hire’s first weeks.' }
  ];

  const processSteps = [
    { title: 'Define the Role', desc: 'Agree the role, success profile, compensation range and timeline.' },
    { title: 'Source Talent', desc: 'Reach active and passive candidates through our network and targeted search.' },
    { title: 'Assess Candidates', desc: 'Structured interviews, skills evaluation and screening against the brief.' },
    { title: 'Present a Shortlist', desc: 'You review assessed candidates with clear written profiles.' },
    { title: 'Support Interviews & Offer', desc: 'Coordinate interviews, gather feedback and guide the offer through acceptance.' },
    { title: 'Follow Through', desc: 'Check in after the start date to make sure the placement is working well.' }
  ];

  const engagement = {
    intro: [
      "Recruitment and executive search are offered in two ways, depending on the seniority of the role and how much dedicated search time it needs.",
      "Every search starts with a written agreement covering scope, timeline and fees, so you know exactly what is included before any work begins."
    ],
    points: [
      { title: 'Success-based placement', desc: 'For specialist and professional roles. A one-time placement fee tied to a successful hire, scaled to the role’s seniority. Custom quote.' },
      { title: 'Retained executive search', desc: 'For leadership and confidential roles, where a dedicated search requires committed time and discretion. Custom quote.' },
      { title: 'Hiring support add-on', desc: 'Fractional HR clients can add recruitment support to an existing retainer for ongoing hiring needs.' }
    ]
  };

  const faqs = [
    { q: 'What types of roles do you recruit for?', a: 'We focus on specialist, professional and leadership roles — for example HR, finance, operations, technology, management and executive positions.' },
    { q: 'How long does a search typically take?', a: 'Most searches take 3–8 weeks from brief to accepted offer, depending on the seniority of the role and the market for that skill set.' },
    { q: 'How are your fees structured?', a: 'Fees are agreed in writing before the search begins. Professional roles are usually on a success-based placement fee, and leadership or confidential roles on a retained search. We do not publish fixed rates because every search is different.' },
    { q: 'Can you run a confidential search?', a: 'Yes. We regularly handle confidential searches, for example when replacing an incumbent. Your organization’s name is only shared with candidates when you approve it.' },
    { q: 'Do candidates pay anything?', a: 'No. Candidates are never charged a fee for being considered for or placed in a role.' },
    { q: 'Who makes the final hiring decision?', a: 'You do. We assess candidates, share our honest view and support the process, but the final decision always rests with your organization.' },
    { q: 'Do you recruit outside Ontario?', a: 'Yes. We work with organizations across Canada, and can support international hires together with our Global Mobility service.' },
    { q: 'I am a candidate. How can I be considered for future roles?', a: 'Share your profile through the form on our Careers page. We keep profiles on file and reach out when a suitable role comes up.' }
  ];

  return (
    <ServicePageTemplate
      path="/recruitment-executive-search"
      audience="Growing companies and leadership teams"
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
        { src: '/images/services/service-recruiter.webp', alt: 'Recruiter speaking with a candidate' }
      ]}
    />
  );
};

export default RecruitmentPage;
