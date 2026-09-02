import React from 'react';

export default function EngineeringImage({
  src,
  alt = 'RPCS Engineering Visual',
  number,
  category,
  label,
  coordinates,
  variant,
  aspectRatio = 'aspect-[16/10]',
  objectFit = 'object-cover',
  className = ''
}) {
  return (
    <div 
      className={`relative overflow-hidden rounded-md shadow-xl transition-all duration-400 group ${className}`}
    >
      {/* MAIN IMAGE WITH SUBTLE HOVER SCALE */}
      <div className={`w-full overflow-hidden ${aspectRatio}`}>
        <img 
          src={src} 
          alt={alt} 
          className={`w-full h-full ${objectFit} transform transition-transform duration-400 ease-out group-hover:scale-[1.03]`}
          loading="lazy"
        />
      </div>
    </div>
  );
}

