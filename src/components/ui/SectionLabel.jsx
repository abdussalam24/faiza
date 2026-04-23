import React from 'react';

const SectionLabel = ({ text }) => {
  return (
    <div style={{
      display: 'inline-block',
      color: 'var(--brand-orange)',
      fontSize: '0.75rem',
      fontWeight: '700',
      letterSpacing: '12px',
      textTransform: 'uppercase',
      marginBottom: '24px',
      borderLeft: '1px solid var(--brand-orange)',
      paddingLeft: '12px',
    }}>
      {text}
    </div>
  );
};

export default SectionLabel;
