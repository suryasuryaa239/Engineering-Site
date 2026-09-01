import React from 'react';
import TechnicalBadge from './TechnicalBadge';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const processSteps = [
  {
    number: '01',
    title: 'Concept & Requirements',
    description: 'Understanding product objectives and engineering challenges.'
  },
  {
    number: '02',
    title: 'Design Development',
    description: '3D CAD modeling and engineering detailing.'
  },
  {
    number: '03',
    title: 'Virtual Validation',
    description: 'FEA and CFD simulations for performance assessment.'
  },
  {
    number: '04',
    title: 'Design Optimization',
    description: 'Engineering improvements based on simulation results.'
  },
  {
    number: '05',
    title: 'Manufacturing Planning',
    description: 'CAM programming and production readiness.'
  },
  {
    number: '06',
    title: 'Production Support',
    description: 'Manufacturing assistance and engineering consultation.'
  }
];

export default function Process() {
  return (
    <section 
      id="process" 
      className="relative bg-[#050505] text-[#FFFFFF] border-t border-white/12 section-padding grid-bg-pattern overflow-hidden"
    >
      <div className="container-custom relative z-10 space-y-16 lg:space-y-20">
        
        {/* SECTION INTRO */}
        <div className="max-w-3xl space-y-4 animate-fade-up">
          <TechnicalBadge text="OUR PROCESS" />
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight leading-tight">
            From Concept <span className="text-[#E51B23]">to Success.</span>
          </h2>
          
          <p className="text-slate-300 text-base lg:text-lg leading-relaxed font-normal">
            Our structured engineering process ensures every project moves efficiently from initial requirements through design, validation, optimization, and production support.
          </p>
        </div>

        {/* DESKTOP HORIZONTAL TIMELINE (>= 1200px) */}
        <div className="hidden xl:block relative">
          
          {/* Continuous Connecting Line */}
          <div className="absolute top-[42px] left-8 right-8 h-[2px] bg-white/12 -z-0" />
          <div className="absolute top-[42px] left-8 w-1/3 h-[2px] bg-[#E51B23] -z-0" />

          {/* 6 Steps Grid */}
          <div className="grid grid-cols-6 gap-4 relative z-10">
            {processSteps.map((step, idx) => (
              <div 
                key={step.number} 
                className="group flex flex-col space-y-4 pr-2"
              >
                {/* Step Circle Node */}
                <div className="w-12 h-12 rounded-sm bg-[#0D0D0D] border border-white/12 group-hover:border-[#E51B23] group-hover:bg-[#E51B23] flex items-center justify-center transition-all duration-300 shadow-xl">
                  <span className="font-mono text-xs font-bold text-[#E51B23] group-hover:text-white transition-colors">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="bg-[#0D0D0D] border border-white/12 p-4 rounded-sm group-hover:border-[#E51B23]/50 transition-colors h-full flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="text-[10px] font-mono text-[#E51B23] font-bold uppercase">
                      PHASE {step.number}
                    </div>
                    <h3 className="text-sm font-bold text-white font-heading tracking-tight group-hover:text-[#E51B23] transition-colors leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-[#A1A1A1] text-xs leading-relaxed font-normal">
                      {step.description}
                    </p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-white/5 text-[10px] font-mono text-[#A1A1A1] flex items-center justify-between">
                    <span>STEP {idx + 1}/6</span>
                    {idx < 5 && <ArrowRight className="w-3 h-3 text-[#E51B23]" />}
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>

        {/* TABLET GRID (768px - 1199px) */}
        <div className="hidden md:grid xl:hidden grid-cols-2 lg:grid-cols-3 gap-6">
          {processSteps.map((step) => (
            <div 
              key={step.number} 
              className="bg-[#0D0D0D] border border-white/12 p-6 rounded-sm space-y-3 relative group hover:border-[#E51B23]/50 transition-all duration-300"
            >
              <div className="flex items-center justify-between text-xs font-mono text-[#E51B23]">
                <span className="font-bold">{step.number}</span>
                <span className="text-[10px] text-[#A1A1A1] uppercase">WORKFLOW STEP</span>
              </div>
              <h3 className="text-base font-bold text-white font-heading tracking-tight group-hover:text-[#E51B23] transition-colors">
                {step.title}
              </h3>
              <p className="text-[#A1A1A1] text-xs leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* MOBILE VERTICAL TIMELINE (< 768px) */}
        <div className="md:hidden relative pl-6 border-l-2 border-white/12 space-y-8">
          {processSteps.map((step) => (
            <div key={step.number} className="relative group">
              
              {/* Bullet Node */}
              <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-[#050505] border-2 border-[#E51B23] group-hover:bg-[#E51B23] transition-colors" />

              <div className="bg-[#0D0D0D] border border-white/12 p-5 rounded-sm space-y-2">
                <span className="text-xs font-mono text-[#E51B23] font-bold">
                  STEP {step.number}
                </span>
                <h3 className="text-base font-bold text-white font-heading">
                  {step.title}
                </h3>
                <p className="text-[#A1A1A1] text-xs leading-relaxed">
                  {step.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
