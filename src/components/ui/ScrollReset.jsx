import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/** On client-side navigation: scroll to #hash target if present, otherwise to the top. */
const ScrollReset = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ block: 'start' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

export default ScrollReset;
