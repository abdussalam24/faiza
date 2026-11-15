import React from 'react';
import { Link } from 'react-router-dom';
import LegalLayout from './LegalLayout';
import { SITE } from '../../config/site';

const Email = () => <a href={`mailto:${SITE.email}?subject=Privacy%20request`}>{SITE.email}</a>;

const sections = [
  {
    id: 'information-we-collect',
    title: 'Information we collect',
    body: (
      <>
        <p>We collect only the personal information we need to respond to you and provide our services. This includes:</p>
        <ul>
          <li><strong>Enquiry and booking forms</strong> — your name, email address, phone number, country code, the service you are interested in, company details, preferred appointment times and anything you write in your message.</li>
          <li><strong>Candidate profiles and resumes</strong> — information you submit through our careers application form (hosted on Google Forms) or send us by email, such as your contact details, work history, education, certifications, work authorization status and resume.</li>
          <li><strong>Communications</strong> — the content of emails, calls and chat messages you exchange with us.</li>
          <li><strong>Cookies and technical data</strong> — basic technical information such as your browser type, device, pages visited and approximate location derived from your IP address, collected through cookies and similar technologies.</li>
          <li><strong>Analytics</strong> — aggregated information about how visitors use our website, if analytics is enabled (see Cookies below).</li>
        </ul>
        <p>Please do not send us sensitive information (such as health information, social insurance numbers or financial account details) through our website forms unless we specifically ask for it.</p>
      </>
    ),
  },
  {
    id: 'how-we-use',
    title: 'How we use your information',
    body: (
      <>
        <p>We use personal information to:</p>
        <ul>
          <li>respond to your enquiries and schedule consultations;</li>
          <li>provide recruitment and executive search, fractional HR, global mobility and career services;</li>
          <li>assess candidates and match them with suitable roles, and share candidate profiles with prospective employers <strong>only with the candidate's consent</strong>;</li>
          <li>send service-related communications, such as appointment confirmations and follow-ups;</li>
          <li>maintain and improve our website and services; and</li>
          <li>meet our legal, accounting and regulatory obligations.</li>
        </ul>
        <p>We do not sell or rent your personal information. We will only send you marketing emails if you have consented, in line with Canada's Anti-Spam Legislation (CASL), and you can unsubscribe at any time.</p>
      </>
    ),
  },
  {
    id: 'legal-basis',
    title: 'Consent and legal basis',
    body: (
      <>
        <p>We follow the <em>Personal Information Protection and Electronic Documents Act</em> (PIPEDA) and its ten fair information principles. We collect, use and disclose personal information with your knowledge and consent, except where the law permits or requires otherwise.</p>
        <p>By submitting a form, booking a consultation or sending us your resume, you consent to us using your information for the purposes described in this policy. Where information is more sensitive, or where we want to use it for a new purpose, we will ask for your express consent.</p>
      </>
    ),
  },
  {
    id: 'third-parties',
    title: 'Third-party service providers',
    body: (
      <>
        <p>We use trusted service providers to operate our website and business. They may process personal information on our behalf, and only for the purposes we specify:</p>
        <table className="legal-table">
          <thead>
            <tr><th scope="col">Provider</th><th scope="col">Purpose</th></tr>
          </thead>
          <tbody>
            <tr><td>FormSubmit (formsubmit.co)</td><td>Delivers enquiry and booking form submissions to our email inbox.</td></tr>
            <tr><td>Google Forms (Google LLC)</td><td>Hosts our careers application form and stores candidate submissions.</td></tr>
            <tr><td>Tawk.to (if enabled)</td><td>Provides live chat. Our built-in “Ask FABZ HR” assistant runs in your browser and does not send your questions to a third party.</td></tr>
            <tr><td>Vercel Inc.</td><td>Hosts our website and processes standard server logs (such as IP addresses) for security and performance.</td></tr>
            <tr><td>Google Analytics (if enabled)</td><td>Measures website traffic and usage in aggregate.</td></tr>
            <tr><td>Google Maps &amp; Google Fonts</td><td>Display the map on our contact page and load website fonts.</td></tr>
          </tbody>
        </table>
        <p>We require our providers to protect personal information and to use it only to provide services to us. We may also disclose information where required by law, or to protect our rights or the safety of others.</p>
      </>
    ),
  },
  {
    id: 'retention',
    title: 'Data retention',
    body: (
      <>
        <p>We keep personal information only as long as we need it for the purposes described above, or as required by law:</p>
        <ul>
          <li><strong>Enquiries</strong> that do not become client engagements are kept for up to 2 years, then deleted.</li>
          <li><strong>Client records</strong> are kept for the length of the engagement and for up to 7 years afterwards to meet accounting and legal requirements.</li>
          <li><strong>Candidate profiles and resumes</strong> are kept for up to 2 years from your last contact with us, so we can let you know about suitable roles. You can ask us to delete your profile at any time.</li>
        </ul>
        <p>When information is no longer needed, we securely delete or anonymize it.</p>
      </>
    ),
  },
  {
    id: 'your-rights',
    title: 'Your rights',
    body: (
      <>
        <p>Subject to limited exceptions under the law, you have the right to:</p>
        <ul>
          <li><strong>Access</strong> the personal information we hold about you;</li>
          <li><strong>Correct</strong> information that is inaccurate or incomplete;</li>
          <li><strong>Request deletion</strong> of your information where we no longer need it;</li>
          <li><strong>Withdraw your consent</strong> at any time, subject to legal or contractual restrictions. If you withdraw consent, we may not be able to continue providing a service; we will explain the consequences.</li>
        </ul>
        <p>To make a request, email <Email />. We will respond within 30 days. We may need to verify your identity before acting on your request.</p>
        <p>If you are not satisfied with our response, you can contact the <a href="https://www.priv.gc.ca/" target="_blank" rel="noopener noreferrer">Office of the Privacy Commissioner of Canada<span className="sr-only"> (opens in a new tab)</span></a>.</p>
      </>
    ),
  },
  {
    id: 'cookies',
    title: 'Cookies',
    body: (
      <>
        <p>Cookies are small files stored on your device. We use:</p>
        <ul>
          <li><strong>Essential cookies and local storage</strong> needed for the website to work, such as remembering your place in a form;</li>
          <li><strong>Analytics cookies</strong>, if enabled, to understand how visitors use the site in aggregate; and</li>
          <li><strong>Third-party cookies</strong> set by embedded content, such as Google Forms, Google Maps or a scheduling tool.</li>
        </ul>
        <p>You can block or delete cookies in your browser settings. Some features, such as embedded forms, may not work properly without them.</p>
      </>
    ),
  },
  {
    id: 'international-transfers',
    title: 'International transfers',
    body: (
      <p>Some of our service providers store or process information outside Canada, including in the United States. When your information is outside Canada, it is subject to the laws of that country and may be accessible to its courts, law enforcement and national security authorities. We choose providers that offer a comparable level of protection.</p>
    ),
  },
  {
    id: 'security',
    title: 'How we protect your information',
    body: (
      <p>We use reasonable physical, organizational and technical safeguards to protect personal information, including encrypted connections (HTTPS), access controls and limiting access to people who need it. No method of transmission over the internet is completely secure, but we work to protect your information and will notify you and the Privacy Commissioner of Canada of any breach that creates a real risk of significant harm, as required by law.</p>
    ),
  },
  {
    id: 'children',
    title: "Children's privacy",
    body: (
      <p>Our website and services are intended for adults. We do not knowingly collect personal information from children under 16 through this website. If you believe a child has sent us personal information, please contact us and we will delete it.</p>
    ),
  },
  {
    id: 'changes',
    title: 'Changes to this policy',
    body: (
      <p>We may update this policy from time to time. The “Last updated” date at the top of this page shows when it was last changed. If we make significant changes, we will post a notice on our website.</p>
    ),
  },
  {
    id: 'contact',
    title: 'Contact us about privacy',
    body: (
      <>
        <p>Our privacy officer is responsible for our compliance with this policy. For privacy questions, access or correction requests, or complaints, contact:</p>
        <p>
          <strong>Privacy Officer, {SITE.legalName}</strong><br />
          Email: <Email /><br />
          {SITE.location}
        </p>
        <p>You can also reach us through our <Link to="/contact">contact page</Link>.</p>
      </>
    ),
  },
];

const PrivacyPage = () => (
  <LegalLayout
    title="Privacy Policy"
    description="How FABZ HR International Inc. collects, uses, shares and protects personal information under PIPEDA, including form submissions, resumes and cookies."
    path="/privacy"
    intro={
      <p className="legal-callout">
        {SITE.legalName} (“FABZ HR”, “we”, “us”) respects your privacy. This policy explains how we handle personal information collected through www.fabzhr.com and in the course of providing our services, in accordance with Canada's <em>Personal Information Protection and Electronic Documents Act</em> (PIPEDA).
      </p>
    }
    sections={sections}
  />
);

export default PrivacyPage;
