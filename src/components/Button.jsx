import React from 'react';

/**
 * Reusable Button Component for RPCS Design System
 * @param {'primary' | 'secondary'} variant - Button style variant
 * @param {React.ReactNode} children - Button content
 * @param {string} className - Additional custom classes
 */
export default function Button({ 
  variant = 'primary', 
  children, 
  className = '', 
  ...props 
}) {
  const baseClasses = variant === 'primary' ? 'btn-primary' : 'btn-secondary';
  return (
    <button 
      className={`${baseClasses} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
}
