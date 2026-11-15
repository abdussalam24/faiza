import React, { useEffect, useState } from 'react';
import { FORMS, SITE } from '../../config/site';

/** Absolute thank-you URL: canonical host at build time, current origin once hydrated (works on previews). */
export const useThankYouUrl = () => {
  const [url, setUrl] = useState(`${SITE.url}${FORMS.thankYouPath}`);
  useEffect(() => {
    setUrl(`${window.location.origin}${FORMS.thankYouPath}`);
  }, []);
  return url;
};

/**
 * FormSubmit control fields shared by every form on the site:
 * _subject, _template (table), _captcha (false), _next (thank-you redirect) and the _honey honeypot.
 */
const FormSubmitFields = ({ subject }) => {
  const next = useThankYouUrl();
  return (
    <>
      <input type="hidden" name="_subject" value={subject} />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value={next} />
      <div className="form-honeypot" aria-hidden="true">
        <label>
          Leave this field empty
          <input type="text" name="_honey" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        .form-honeypot {
          position: absolute !important;
          left: -9999px !important;
          width: 1px !important;
          height: 1px !important;
          overflow: hidden !important;
        }
      ` }} />
    </>
  );
};

export default FormSubmitFields;
