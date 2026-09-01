import React from 'react';

/**
 * Reusable Technical Badge Component
 * @param {string} text - Label text
 * @param {string} className - Additional custom classes
 */
export default function TechnicalBadge({ text, className = '' }) {
  return (
    <div className={`tech-label ${className}`}>
      <span className="red-accent-line" />
      <span>{text}</span>
    </div>
  );
}
