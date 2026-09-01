import React from 'react';
import TechnicalBadge from './TechnicalBadge';
import EngineeringImage from './EngineeringImage';
import { ArrowRight } from 'lucide-react';

import indAutomotiveImg from '../assets/images/ind_automotive.png';
import indAerospaceImg from '../assets/images/ind_aerospace.png';
import indEnergyImg from '../assets/images/ind_energy.png';
import indMachineryImg from '../assets/images/ind_machinery.png';
import indConsumerImg from '../assets/images/ind_consumer.png';
import indOilGasImg from '../assets/images/ind_oilgas.png';

const industries = [
  {
    number: '01',
    title: 'Automotive',
    category: 'AUTOMOTIVE ENGINEERING',
    label: 'CHASSIS & THERMAL',
    description: 'Vehicle components, chassis systems, thermal management and lightweight structures.',
    image: indAutomotiveImg
  },
  {
    number: '02',
    title: 'Aerospace',
    category: 'AEROSPACE SYSTEMS',
    label: 'TURBINE & FEA',
    description: 'Structural analysis, fluid flow simulations and component optimization.',
    image: indAerospaceImg
  },
  {
    number: '03',
    title: 'Energy',
    category: 'ENERGY ENGINEERING',
    label: 'WIND & POWER',
    description: 'Renewable energy systems, turbines, heat exchangers and power equipment.',
    image: indEnergyImg
  },
  {
    number: '04',
    title: 'Industrial Machinery',
    category: 'INDUSTRIAL SYSTEMS',
    label: 'PUMPS & VALVES',
    description: 'Heavy engineering equipment, pumps, valves and manufacturing systems.',
    image: indMachineryImg
  },
  {
    number: '05',
    title: 'Consumer Products',
    category: 'PRODUCT ENGINEERING',
    label: 'ENCLOSURES & DFM',
    description: 'Product performance enhancement and design validation.',
    image: indConsumerImg
  },
  {
    number: '06',
    title: 'Oil & Gas',
    category: 'ENERGY / OIL & GAS',
    label: 'PIPELINES & VALVES',
    description: 'Pressure equipment, piping systems and flow analysis.',
    image: indOilGasImg
  }
];

export default function Industries() {
  return (
    <section 
      id="industries" 
      className="relative bg-[#050505] text-[#FFFFFF] border-t border-white/12 section-padding grid-bg-pattern overflow-hidden"
    >
      <div className="container-custom relative z-10 space-y-12 lg:space-y-16">
        
        {/* SECTION INTRO */}
        <div className="max-w-3xl space-y-4 animate-fade-up">
          <TechnicalBadge text="INDUSTRIES WE SERVE" />
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight leading-tight">
            Engineering Solutions <br className="hidden sm:inline" />
            <span className="text-[#E51B23]">Across Diverse Industries.</span>
          </h2>
          
          <p className="text-slate-300 text-base lg:text-lg leading-relaxed font-normal">
            Our engineering expertise supports organizations across multiple industries, helping them solve complex design, simulation, optimization, and manufacturing challenges.
          </p>
        </div>

        {/* 6-CARD GRID SYSTEM */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {industries.map((ind) => (
            <div 
              key={ind.number}
              className="tech-card bg-[#0D0D0D] border border-white/12 rounded-sm overflow-hidden flex flex-col justify-between group hover:border-[#E51B23]/50 transition-all duration-300 relative shadow-xl"
            >
              {/* Corner Technical Marks */}
              <div className="tech-corner-tl" />
              <div className="tech-corner-tr" />

              <div>
                {/* Engineering Image Visual Frame */}
                <EngineeringImage 
                  src={ind.image}
                  alt={`Rise Point Consultancy Services - ${ind.title} Engineering Solutions`}
                  category={ind.category}
                  label={ind.label}
                  variant="minimal"
                  aspectRatio="aspect-[16/10]"
                />

                {/* Card Content Body */}
                <div className="p-6 space-y-3">
                  
                  {/* Number & Title */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-[#E51B23] font-bold tracking-widest">
                      {ind.number}
                    </span>
                    <span className="w-4 h-[1px] bg-[#E51B23] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                  </div>

                  <h3 className="text-xl font-extrabold text-white font-heading tracking-tight group-hover:text-[#E51B23] transition-colors">
                    {ind.title}
                  </h3>

                  <p className="text-[#A1A1A1] text-sm leading-relaxed font-normal">
                    {ind.description}
                  </p>

                </div>
              </div>

              {/* Card Footer with Arrow */}
              <div className="px-6 pb-6 pt-2 flex items-center justify-between text-xs font-mono text-[#A1A1A1] border-t border-white/5 group-hover:border-white/12 transition-colors">
                <span className="text-[11px] uppercase tracking-wider group-hover:text-white transition-colors">
                  ENGINEERING CAPABILITIES
                </span>
                
                <div className="w-8 h-8 rounded-sm bg-[#141414] border border-white/12 flex items-center justify-center text-white group-hover:bg-[#E51B23] group-hover:border-[#E51B23] transition-colors">
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
