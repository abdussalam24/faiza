import React from 'react';
import { Link } from 'react-router-dom';
import LegalLayout from './LegalLayout';
import { SITE } from '../../config/site';

const sections = [
  {
    id: 'acceptance',
    title: 'Acceptance of terms',
    body: (
      <p>By accessing or using www.fabzhr.com (the “Website”) or engaging {SITE.legalName} (“FABZ HR”, “we”, “us”), you agree to these Terms of Service. If you do not agree, please do not use the Website. Where you sign a separate written agreement or statement of work with us, that agreement governs the engagement and takes priority over these Terms if they conflict.</p>
    ),
  },
  {
    id: 'services',
    title: 'Description of services',
    body: (
      <>
        <p>FABZ HR provides human resources consulting services, including recruitment and executive search, fractional HR support, global mobility coordination and career coaching.</p>
        <ul>
          <li>Our services are <strong>consulting and advisory</strong> in nature. We do not guarantee employment, a job offer, a placement, a promotion or any particular business outcome.</li>
          <li>We are <strong>not a law firm</strong> and are <strong>not a licensed immigration consultant</strong>. Information on this Website and our HR guidance are not legal, immigration, tax or financial advice. Where such advice is needed, we will recommend or coordinate with an appropriately licensed professional.</li>
          <li>Information on the Website is provided for general purposes and may change without notice.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'obligations',
    title: 'Client and candidate obligations',
    body: (
      <>
        <h3>Clients agree to:</h3>
        <ul>
          <li>provide accurate, complete and timely information needed for us to deliver the services;</li>
          <li>make final hiring, employment and business decisions themselves and remain responsible for complying with employment, health and safety and other applicable laws; and</li>
          <li>not hire, directly or indirectly, a candidate introduced by FABZ HR without paying the agreed placement fee, as set out in the client's agreement.</li>
        </ul>
        <h3>Candidates agree to:</h3>
        <ul>
          <li>provide truthful and accurate information about their identity, work history, qualifications and work authorization; and</li>
          <li>consent to reasonable reference and background checks where required for a role.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'fees',
    title: 'Fees and payment terms',
    body: (
      <>
        <p>Fees are set out in a written quote, proposal or agreement before work begins and may take the form of monthly retainers, project fees, coaching packages or placement fees. Unless the agreement says otherwise:</p>
        <ul>
          <li>invoices are payable within 15 days of the invoice date;</li>
          <li>fees are stated in Canadian dollars and are exclusive of applicable taxes (such as HST), which will be added to invoices; and</li>
          <li>we may pause work on overdue accounts after giving written notice.</li>
        </ul>
        <p>Candidates are never charged a fee for being considered for or placed in a job.</p>
      </>
    ),
  },
  {
    id: 'engagement',
    title: 'Engagement and cancellation',
    body: (
      <>
        <p>An engagement begins when you accept our quote or sign an agreement. Unless your agreement states otherwise:</p>
        <ul>
          <li><strong>Consultations and coaching sessions</strong> can be rescheduled or cancelled free of charge with at least 24 hours' notice. Sessions cancelled with less notice, or missed, may be counted as used.</li>
          <li><strong>Retainers</strong> may be cancelled by either party with 30 days' written notice.</li>
          <li><strong>Projects</strong> cancelled after work has started will be invoiced for work completed and expenses incurred up to the cancellation date.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'ip',
    title: 'Intellectual property',
    body: (
      <>
        <p>The Website and its content — including text, graphics, logos, the FABZ HR name and brand, and design — are owned by or licensed to FABZ HR and are protected by Canadian and international intellectual property laws. You may view and print pages for personal, non-commercial use only.</p>
        <p>On full payment, clients receive a licence to use deliverables created for them (such as policies and handbooks) for their own internal business purposes. FABZ HR keeps ownership of its pre-existing materials, templates, methods and know-how.</p>
      </>
    ),
  },
  {
    id: 'confidentiality',
    title: 'Confidentiality',
    body: (
      <p>Each party will keep the other's confidential information confidential and use it only for the purposes of the engagement, except where disclosure is required by law. Personal information is handled in accordance with our <Link to="/privacy">Privacy Policy</Link>.</p>
    ),
  },
  {
    id: 'liability',
    title: 'No warranty and limitation of liability',
    body: (
      <>
        <p>The Website and its content are provided “as is” without warranties of any kind. We do not warrant that the Website will be uninterrupted, error-free or free of viruses.</p>
        <p>To the maximum extent permitted by law, FABZ HR is not liable for any indirect, incidental, special, consequential or punitive damages, or for lost profits, revenue or data, arising from your use of the Website or our services. Our total liability for any claim relating to an engagement is limited to the fees you paid to us for that engagement in the 12 months before the claim arose.</p>
        <p>Nothing in these Terms limits liability that cannot be limited under applicable law.</p>
      </>
    ),
  },
  {
    id: 'indemnification',
    title: 'Indemnification',
    body: (
      <p>You agree to indemnify and hold harmless FABZ HR, its directors, employees and contractors from claims, losses and expenses (including reasonable legal fees) arising from your breach of these Terms, your misuse of the Website, or information you provide that is false or infringes the rights of others.</p>
    ),
  },
  {
    id: 'third-party-links',
    title: 'Third-party links and services',
    body: (
      <p>The Website may link to or embed third-party websites and tools, such as Google Forms, Google Maps, LinkedIn and scheduling services. We are not responsible for their content, availability or privacy practices. Your use of them is governed by their own terms.</p>
    ),
  },
  {
    id: 'governing-law',
    title: 'Governing law',
    body: (
      <p>These Terms are governed by the laws of the Province of Ontario and the federal laws of Canada that apply there, without regard to conflict-of-law rules. Subject to the dispute resolution section below, the courts of Ontario have exclusive jurisdiction.</p>
    ),
  },
  {
    id: 'disputes',
    title: 'Dispute resolution',
    body: (
      <p>If a dispute arises, please contact us first so we can try to resolve it informally. If it is not resolved within 30 days, either party may propose mediation in Toronto, Ontario, with costs shared equally. If mediation does not resolve the dispute, either party may bring proceedings in the courts of Ontario.</p>
    ),
  },
  {
    id: 'changes',
    title: 'Changes to these terms',
    body: (
      <p>We may update these Terms from time to time. The “Last updated” date at the top of this page shows when they were last changed. Continued use of the Website after changes are posted means you accept the updated Terms. Changes do not affect signed agreements already in place.</p>
    ),
  },
  {
    id: 'contact',
    title: 'Contact',
    body: (
      <p>
        Questions about these Terms? Contact {SITE.legalName} at <a href={`mailto:${SITE.email}`}>{SITE.email}</a> or <a href={`tel:${SITE.phone.href}`}>{SITE.phone.display}</a>. {SITE.registrationSentence}
      </p>
    ),
  },
];

const TermsPage = () => (
  <LegalLayout
    title="Terms of Service"
    description="Terms of Service for FABZ HR International Inc.: our consulting services, client and candidate obligations, fees, cancellation and Ontario governing law."
    path="/terms"
    intro={
      <p className="legal-callout">
        Please read these Terms carefully. They explain the rules for using our website and the general terms on which FABZ HR provides its services.
      </p>
    }
    sections={sections}
  />
);

export default TermsPage;
