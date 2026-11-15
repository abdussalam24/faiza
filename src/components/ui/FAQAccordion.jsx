import React, { useId, useState } from 'react';
import { ChevronDown } from 'lucide-react';

/**
 * Accessible FAQ accordion. Every answer is in the HTML (hidden attribute when
 * collapsed) so the FAQPage schema always matches visible page content.
 */
const FAQAccordion = ({ faqs, defaultOpen = 0 }) => {
  const [openIndex, setOpenIndex] = useState(defaultOpen);
  const baseId = useId();

  return (
    <div className="faq-container">
      {faqs.map((faq, index) => {
        const open = openIndex === index;
        const qId = `${baseId}-q${index}`;
        const aId = `${baseId}-a${index}`;
        return (
          <div key={faq.q} className={`faq-item ${open ? 'open' : ''}`}>
            <h3 className="faq-heading">
              <button
                type="button"
                id={qId}
                className="faq-question"
                aria-expanded={open}
                aria-controls={aId}
                onClick={() => setOpenIndex(open ? -1 : index)}
              >
                <span>{faq.q}</span>
                <ChevronDown className="faq-icon" aria-hidden="true" />
              </button>
            </h3>
            <div id={aId} role="region" aria-labelledby={qId} className="faq-answer" hidden={!open}>
              {faq.a}
            </div>
          </div>
        );
      })}

      <style dangerouslySetInnerHTML={{ __html: `
        .faq-container {
          max-width: 800px;
          margin: 0 auto;
        }
        .faq-item {
          margin-bottom: 1rem;
          border: 1px solid var(--line);
          border-radius: 12px;
          background-color: var(--cream);
          overflow: hidden;
          transition: border-color 0.2s;
        }
        .faq-item.open {
          border-color: var(--navy);
          box-shadow: inset 4px 0 0 var(--lime);
        }
        .faq-heading {
          font-size: inherit;
          margin: 0;
        }
        .faq-question {
          width: 100%;
          text-align: left;
          padding: 1.5rem;
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--navy);
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          transition: background-color 0.2s;
        }
        .faq-question:hover {
          background-color: var(--surface-alt);
        }
        .faq-icon {
          color: var(--navy);
          flex-shrink: 0;
          transition: transform 0.3s ease;
        }
        .faq-item.open .faq-icon {
          transform: rotate(180deg);
        }
        .faq-answer {
          padding: 0 1.5rem 1.5rem;
          color: var(--navy-80);
          line-height: 1.7;
        }
      ` }} />
    </div>
  );
};

export default FAQAccordion;
