import React from 'react';

export default function EngineeringImage({
  src,
  alt = 'RPCS Engineering Visual',
  number,
  category,
  label,
  coordinates,
  variant = 'top-left', // 'minimal' | 'top-left' | 'bottom-left' | 'coordinates'
  aspectRatio = 'aspect-[16/10]',
  objectFit = 'object-cover',
  className = ''
}) {
  return (
    <div 
      className={`relative bg-[#050505] border border-white/12 hover:border-[#E51B23]/50 transition-all duration-400 group overflow-hidden rounded-sm shadow-2xl ${className}`}
    >
      {/* Corner Brackets */}
      <div className="tech-corner-tl" />
      <div className="tech-corner-tr" />
      <div className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b-2 border-l-2 border-[#E51B23]" />
      <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b-2 border-r-2 border-[#E51B23]" />

      {/* Subtle Engineering Grid Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none z-10" />

      {/* Subtle Dark Bottom Gradient for Legibility */}
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent pointer-events-none z-10" />

      {/* ====================================================================
          VARIANT A: TOP-LEFT (Number & Category top-left, Label top-right)
          ==================================================================== */}
      {variant === 'top-left' && (
        <div className="absolute top-3 left-3 right-3 z-20 flex items-center justify-between pointer-events-none">
          <div className="flex items-center gap-2 bg-[#050505]/85 border border-white/12 px-2.5 py-1 backdrop-blur-md">
            {number && (
              <span className="text-[11px] font-mono font-bold text-[#E51B23]">
                {number}
              </span>
            )}
            {number && category && (
              <span className="text-[10px] text-gray-500 font-mono">•</span>
            )}
            {category && (
              <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-200">
                {category}
              </span>
            )}
          </div>

          {label && (
            <div className="hidden sm:flex items-center gap-1.5 bg-[#050505]/85 border border-white/12 px-2 py-0.5 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E51B23] animate-pulse" />
              <span className="text-[9px] font-mono font-semibold text-[#A1A1A1] uppercase tracking-widest">
                {label}
              </span>
            </div>
          )}
        </div>
      )}

      {/* ====================================================================
          VARIANT B: BOTTOM-LEFT (Number in top-left, Category & Label in bottom dark bar)
          ==================================================================== */}
      {variant === 'bottom-left' && (
        <>
          {number && (
            <div className="absolute top-3 left-3 z-20 pointer-events-none bg-[#050505]/85 border border-white/12 px-2.5 py-1 backdrop-blur-md">
              <span className="text-[11px] font-mono font-bold text-[#E51B23]">
                {number}
              </span>
            </div>
          )}

          <div className="absolute bottom-3 left-3 right-3 z-20 flex items-center justify-between text-[10px] font-mono text-[#A1A1A1] bg-[#050505]/90 backdrop-blur-md px-3 py-2 border border-white/12 rounded-sm pointer-events-none">
            <span className="font-semibold text-slate-200 uppercase tracking-wider">{category}</span>
            <span className="text-white font-bold uppercase">{label}</span>
          </div>
        </>
      )}

      {/* ====================================================================
          VARIANT C: COORDINATES (Top-left number/category + Top-right/Bottom-right technical data)
          ==================================================================== */}
      {variant === 'coordinates' && (
        <>
          <div className="absolute top-3 left-3 right-3 z-20 flex items-center justify-between pointer-events-none">
            <div className="flex items-center gap-2 bg-[#050505]/85 border border-white/12 px-2.5 py-1 backdrop-blur-md">
              {number && (
                <span className="text-[11px] font-mono font-bold text-[#E51B23]">
                  {number}
                </span>
              )}
              {number && category && (
                <span className="text-[10px] text-gray-500 font-mono">•</span>
              )}
              {category && (
                <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-200">
                  {category}
                </span>
              )}
            </div>

            {coordinates && (
              <span className="text-[9px] font-mono text-[#A1A1A1] bg-[#050505]/80 px-2 py-0.5 border border-white/12 tracking-wider">
                {coordinates}
              </span>
            )}
          </div>

          {label && (
            <div className="absolute bottom-3 left-3 z-20 pointer-events-none flex items-center gap-2 bg-[#050505]/90 border border-white/12 px-3 py-1 rounded-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E51B23]" />
              <span className="text-[10px] font-mono font-bold text-white uppercase tracking-wider">
                {label}
              </span>
            </div>
          )}
        </>
      )}

      {/* ====================================================================
          VARIANT D: MINIMAL (Small red accent line + category label only, perfect for Hero & Industries)
          ==================================================================== */}
      {variant === 'minimal' && (
        <div className="absolute bottom-3 left-3 right-3 z-20 flex items-center justify-between pointer-events-none">
          <div className="flex items-center gap-2 bg-[#050505]/85 border border-white/12 px-2.5 py-1 backdrop-blur-md">
            <div className="w-2.5 h-[2px] bg-[#E51B23] group-hover:w-5 transition-all duration-400" />
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-200">
              {category}
            </span>
          </div>

          {label && (
            <div className="text-[9px] font-mono font-semibold text-[#A1A1A1] bg-[#050505]/85 border border-white/12 px-2 py-0.5 backdrop-blur-md uppercase tracking-wider">
              {label}
            </div>
          )}
        </div>
      )}

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
