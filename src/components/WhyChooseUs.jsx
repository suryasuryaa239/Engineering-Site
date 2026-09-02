import React from 'react';
import TechnicalBadge from './TechnicalBadge';
import { ShieldCheck, Activity, Zap, TrendingUp, Layers, Users } from 'lucide-react';

const benefitsLeft = [
  {
    number: '01',
    title: 'Engineering Excellence',
    description: 'Highly skilled engineers with expertise in design, simulation and manufacturing.',
    icon: ShieldCheck
  },
  {
    number: '02',
    title: 'Simulation-Driven Development',
    description: 'Advanced FEA and CFD methodologies to validate designs before production.',
    icon: Activity
  },
  {
    number: '03',
    title: 'Faster Time-to-Market',
    description: 'Reduce physical prototypes through virtual testing and optimization.',
    icon: Zap
  }
];

const benefitsRight = [
  {
    number: '04',
    title: 'Cost Optimization',
    description: 'Minimize development and manufacturing costs through engineering insights.',
    icon: TrendingUp
  },
  {
    number: '05',
    title: 'End-to-End Support',
    description: 'From concept development to production implementation.',
    icon: Layers
  },
  {
    number: '06',
    title: 'Customer-Focused Approach',
    description: 'Tailored engineering solutions for every project requirement.',
    icon: Users
  }
];

export default function WhyChooseUs() {
  return (
    <section 
      id="why-us" 
      className="relative bg-[#050505] text-[#FFFFFF] section-padding grid-bg-pattern overflow-hidden"
    >
      <div className="container-custom relative z-10">
        
        {/* 3-COLUMN EDITORIAL LAYOUT (Desktop >= 1024px) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* LEFT COLUMN: Section Intro & Headline (Cols 1-4) */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-32 animate-fade-up">
            <TechnicalBadge text="WHY CHOOSE US" />
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight leading-tight">
              Your Trusted <br className="hidden sm:inline" />
              <span className="text-[#E51B23]">Engineering Partner</span>
            </h2>
            
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
              Engineering expertise, simulation-driven development, and manufacturing support — helping businesses move from concept to production with confidence.
            </p>

            <div className="pt-4 border-t border-white/12 text-xs font-mono text-[#A1A1A1] flex items-center justify-between">
              <span>RISE POINT ADVANTAGE</span>
              <span className="text-[#E51B23] font-bold">100% PRECISION</span>
            </div>
          </div>

          {/* CENTER COLUMN: Benefits 01 - 03 (Cols 5-8) */}
          <div className="lg:col-span-4 space-y-8 lg:border-l lg:border-r lg:border-white/12 lg:px-8">
            {benefitsLeft.map((item) => {
              const IconComp = item.icon;
              return (
                <div 
                  key={item.number} 
                  className="group relative bg-[#0D0D0D] border border-white/12 p-6 rounded-sm hover:border-[#E51B23]/50 transition-all duration-300 shadow-xl"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-[#E51B23] font-bold tracking-widest bg-[#050505] px-2.5 py-1 border border-white/12 rounded-sm">
                      {item.number}
                    </span>
                    <IconComp className="w-5 h-5 text-slate-300 group-hover:text-[#E51B23] transition-colors" />
                  </div>

                  <h3 className="text-lg font-bold text-white font-heading tracking-tight mb-2 group-hover:text-[#E51B23] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-[#A1A1A1] text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mt-4 h-[2px] w-0 bg-[#E51B23] group-hover:w-full transition-all duration-300" />
                </div>
              );
            })}
          </div>

          {/* RIGHT COLUMN: Benefits 04 - 06 (Cols 9-12) */}
          <div className="lg:col-span-4 space-y-8">
            {benefitsRight.map((item) => {
              const IconComp = item.icon;
              return (
                <div 
                  key={item.number} 
                  className="group relative bg-[#0D0D0D] border border-white/12 p-6 rounded-sm hover:border-[#E51B23]/50 transition-all duration-300 shadow-xl"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-[#E51B23] font-bold tracking-widest bg-[#050505] px-2.5 py-1 border border-white/12 rounded-sm">
                      {item.number}
                    </span>
                    <IconComp className="w-5 h-5 text-slate-300 group-hover:text-[#E51B23] transition-colors" />
                  </div>

                  <h3 className="text-lg font-bold text-white font-heading tracking-tight mb-2 group-hover:text-[#E51B23] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-[#A1A1A1] text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mt-4 h-[2px] w-0 bg-[#E51B23] group-hover:w-full transition-all duration-300" />
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
