import React from 'react';
import TechnicalBadge from './TechnicalBadge';

export default function MissionVision() {
  return (
    <section 
      id="mission-vision" 
      className="relative bg-[#0D0D0D] text-[#FFFFFF] section-padding grid-bg-pattern overflow-hidden"
    >
      <div className="container-custom relative z-10">
        
        {/* TWO-COLUMN EDITORIAL LAYOUT (Desktop >= 1024px) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* LEFT COLUMN: Mission (Cols 1-6) */}
          <div className="lg:col-span-6 relative p-6 sm:p-8 bg-[#050505] border border-white/12 rounded-sm flex flex-col justify-between overflow-hidden group hover:border-[#E51B23]/40 transition-colors shadow-2xl">
            
            {/* Large Subtle Transparent Background Number */}
            <div className="absolute -top-10 -right-6 font-heading font-extrabold text-[140px] sm:text-[180px] text-white/[0.03] select-none pointer-events-none group-hover:text-[#E51B23]/[0.06] transition-colors duration-500">
              01
            </div>

            {/* Corner Ticks */}
            <div className="tech-corner-tl" />
            <div className="tech-corner-tr" />

            <div className="space-y-6 relative z-10">
              <TechnicalBadge text="OUR MISSION" />

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight leading-tight">
                Engineering Innovation <br />
                <span className="text-[#E51B23]">with Purpose.</span>
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
                "To deliver innovative engineering solutions that combine design excellence, advanced simulation, and manufacturing expertise, enabling our clients to develop reliable, optimized, and high-performance products."
              </p>
            </div>

            <div className="pt-6 mt-8 border-t border-white/12 flex items-center justify-between text-xs font-mono text-[#A1A1A1] relative z-10">
              <span>RISE POINT MISSION</span>
              <span className="text-[#E51B23] font-bold">PURPOSE DRIVEN</span>
            </div>

          </div>

          {/* RIGHT COLUMN: Vision (Cols 7-12) */}
          <div className="lg:col-span-6 relative p-6 sm:p-8 bg-[#050505] border border-white/12 rounded-sm flex flex-col justify-between overflow-hidden group hover:border-[#E51B23]/40 transition-colors shadow-2xl">
            
            {/* Large Subtle Transparent Background Number */}
            <div className="absolute -top-10 -right-6 font-heading font-extrabold text-[140px] sm:text-[180px] text-white/[0.03] select-none pointer-events-none group-hover:text-[#E51B23]/[0.06] transition-colors duration-500">
              02
            </div>

            {/* Corner Ticks */}
            <div className="tech-corner-tl" />
            <div className="tech-corner-tr" />

            <div className="space-y-6 relative z-10">
              <TechnicalBadge text="OUR VISION" />

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight leading-tight">
                Engineering a <br />
                <span className="text-[#E51B23]">Better Future.</span>
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
                "To become a globally recognized engineering consultancy known for leadership in simulation-driven product development, innovation, and manufacturing excellence."
              </p>
            </div>

            <div className="pt-6 mt-8 border-t border-white/12 flex items-center justify-between text-xs font-mono text-[#A1A1A1] relative z-10">
              <span>RISE POINT VISION</span>
              <span className="text-[#E51B23] font-bold">GLOBAL LEADERSHIP</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
