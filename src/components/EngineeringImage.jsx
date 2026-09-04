import React from 'react';

export default function EngineeringImage({
  src,
  alt = 'RPCS Engineering Visual',
  className = ''
}) {
  return (
    <div className={`relative flex items-center justify-center group ${className}`}>
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-auto max-h-[480px] object-contain transition-transform duration-500 ease-out group-hover:scale-[1.02]"
        loading="lazy"
      />
    </div>
  );
}

