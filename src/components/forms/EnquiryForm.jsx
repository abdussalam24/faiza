import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FORMS } from '../../config/site';
import FormSubmitFields from './FormSubmitFields';

export const HOME_SERVICE_OPTIONS = ['Recruitment & Executive Search', 'Fractional HR', 'Global Mobility', 'Career Services', 'Other'];
export const CONTACT_SERVICE_OPTIONS = [...HOME_SERVICE_OPTIONS, 'Vendor / Partnership'];

/** Fire this from anywhere to preselect a service in the on-page enquiry form and focus it. */
export const SELECT_SERVICE_EVENT = 'fabz:select-service';

/**
 * Enquiry form posting to FormSubmit with the shared field names:
 * fullName, email, countryCode, phone, service, message.
 *
 * variant="compact" — homepage layout (placeholders, visually hidden labels)
 * variant="full"    — contact page layout (visible labels)
 */
const EnquiryForm = ({
  id = 'enquiry',
  variant = 'compact',
  services = HOME_SERVICE_OPTIONS,
  subject = 'New website enquiry — FABZ HR',
  defaultService = '',
  submitLabel = 'Send Enquiry',
}) => {
  const [service, setService] = useState(defaultService);
  const [submitting, setSubmitting] = useState(false);
  const nameRef = useRef(null);
  const labelClass = variant === 'compact' ? 'sr-only' : 'form-label';
  const ph = (text) => (variant === 'compact' ? text : undefined);

  useEffect(() => setService(defaultService), [defaultService]);

  // Re-enable the button if the visitor comes back via the browser's back button (bfcache).
  useEffect(() => {
    const reset = () => setSubmitting(false);
    window.addEventListener('pageshow', reset);
    return () => window.removeEventListener('pageshow', reset);
  }, []);

  useEffect(() => {
    const onSelect = (e) => {
      if (e.detail && services.includes(e.detail)) setService(e.detail);
      nameRef.current?.focus({ preventScroll: true });
    };
    window.addEventListener(SELECT_SERVICE_EVENT, onSelect);
    return () => window.removeEventListener(SELECT_SERVICE_EVENT, onSelect);
  }, [services]);

  return (
    <form
      id={`form-${id}`}
      action={FORMS.action}
      method="POST"
      className={`enquiry-form enquiry-form--${variant}`}
      onSubmit={() => setSubmitting(true)}
    >
      <FormSubmitFields subject={subject} />

      <div className="form-group">
        <label htmlFor={`${id}-fullName`} className={labelClass}>Full name <span aria-hidden="true">*</span></label>
        <input
          ref={nameRef}
          id={`${id}-fullName`}
          type="text"
          name="fullName"
          placeholder={ph('Full Name')}
          autoComplete="name"
          required
          aria-required="true"
        />
      </div>

      <div className="form-group">
        <label htmlFor={`${id}-email`} className={labelClass}>Email address <span aria-hidden="true">*</span></label>
        <input
          id={`${id}-email`}
          type="email"
          name="email"
          placeholder={ph('Email Address')}
          autoComplete="email"
          required
          aria-required="true"
        />
      </div>

      <div className="form-group">
        <span className={labelClass} id={`${id}-phone-label`}>Phone number <span aria-hidden="true">*</span></span>
        <div className="phone-row" role="group" aria-labelledby={`${id}-phone-label`}>
          <label htmlFor={`${id}-countryCode`} className="sr-only">Country calling code</label>
          <input
            id={`${id}-countryCode`}
            type="text"
            name="countryCode"
            defaultValue="+1"
            inputMode="tel"
            autoComplete="tel-country-code"
            pattern="\+?[0-9]{1,4}"
            maxLength={5}
            title="Country calling code, e.g. +1"
            required
            aria-required="true"
          />
          <label htmlFor={`${id}-phone`} className="sr-only">Phone number with area code</label>
          <input
            id={`${id}-phone`}
            type="tel"
            name="phone"
            placeholder={ph('Phone Number')}
            autoComplete="tel-national"
            required
            aria-required="true"
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor={`${id}-service`} className={labelClass}>Service you're interested in <span aria-hidden="true">*</span></label>
        <select
          id={`${id}-service`}
          name="service"
          required
          aria-required="true"
          value={service}
          onChange={(e) => setService(e.target.value)}
        >
          <option value="" disabled>Select a Service</option>
          {services.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor={`${id}-message`} className={labelClass}>Message</label>
        <textarea
          id={`${id}-message`}
          name="message"
          placeholder={ph('Your Message')}
          rows={variant === 'compact' ? 4 : 5}
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary btn-full"
        disabled={submitting}
        style={{ width: '100%', minHeight: '48px' }}
      >
        {submitting ? 'Sending…' : submitLabel}
      </button>
      <p className="form-note">
        Fields marked <span aria-hidden="true">*</span><span className="sr-only">with an asterisk</span> are required.
        By sending this form you agree to our <Link className="text-link" to="/privacy">Privacy Policy</Link>.
      </p>

      <style dangerouslySetInnerHTML={{ __html: `
        .enquiry-form .form-group {
          margin-bottom: 1rem;
        }
        .enquiry-form .form-label {
          display: block;
          font-weight: 700;
          font-size: 0.9rem;
          color: var(--navy);
          margin-bottom: 0.4rem;
        }
        .enquiry-form .phone-row {
          display: grid;
          grid-template-columns: 88px 1fr;
          gap: 0.75rem;
        }
        .enquiry-form input:user-invalid,
        .enquiry-form select:user-invalid {
          border-color: var(--navy);
          border-width: 2px;
          box-shadow: inset 4px 0 0 var(--navy);
        }
        .enquiry-form .form-note {
          margin-top: 0.85rem;
          font-size: 0.85rem;
          color: var(--muted);
          line-height: 1.5;
        }
        .enquiry-form .form-note .text-link {
          font-weight: 600;
        }
      ` }} />
    </form>
  );
};

export default EnquiryForm;
