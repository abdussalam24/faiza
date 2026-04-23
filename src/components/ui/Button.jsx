import React from 'react';

const Button = ({ children, variant = 'primary', className = '', fullWidth, ...props }) => {
  const baseClass = 'btn';
  const variantClass = variant === 'primary' ? 'btn-primary' : 'btn-ghost';
  const widthClass = fullWidth ? 'btn-full' : '';

  return (
    <button className={`${baseClass} ${variantClass} ${widthClass} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
