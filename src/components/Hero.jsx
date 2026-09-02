import React from 'react';
import Button from './Button';
import TechnicalBadge from './TechnicalBadge';
import EngineeringImage from './EngineeringImage';
import { ArrowRight, ChevronRight } from 'lucide-react';
import heroComponentImg from '../assets/images/hero_component.png';

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-[calc(100vh-88px)] flex items-center bg-[#050505] text-[#FFFFFF] grid-bg-pattern overflow-hidden py-12 lg:py-20"
    >
      
      {/* Background Subtle Radial Lighting Accent */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E51B23]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container-custom relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Copywriting & CTAs (Cols 1-7) */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8 animate-fade-up">
            
            {/* Eyebrow Technical Label */}
            <div className="flex items-center gap-3">
              <TechnicalBadge text="RISE POINT CONSULTANCY SERVICES" />
              <span className="hidden sm:inline-block text-[11px] font-mono text-[#A1A1A1] border-l border-white/12 pl-3">
                EST. CHENNAI • INDIA
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white font-heading tracking-tight leading-[1.08]">
              Engineering Excellence <br className="hidden sm:inline" />
              from <span className="text-[#E51B23]">Design</span> to Manufacturing
            </h1>

            {/* Primary & Secondary Description */}
            <div className="space-y-3 max-w-2xl">
              <p className="text-slate-200 text-base md:text-lg leading-relaxed font-normal">
                Rise Point Consultancy Services provides end-to-end product development solutions, helping businesses transform ideas into production-ready products through advanced CAD, CAE, and CAM technologies.
              </p>
              <p className="text-[#A1A1A1] text-sm md:text-base leading-relaxed">
                With specialized expertise in Computer Aided Design (CAD), Finite Element Analysis (FEA) and Computational Fluid Dynamics (CFD), we enable organizations to validate, optimize, and accelerate product development before manufacturing.
              </p>
            </div>

            {/* Tagline Supporting Statement */}
            <div className="pt-2">
              <div className="inline-flex flex-wrap items-center gap-2 text-xs md:text-sm font-heading font-bold uppercase tracking-widest text-white bg-[#0D0D0D] border border-white/12 px-4 py-2.5 rounded-sm">
                <span>Design</span>
                <span className="text-[#E51B23]">•</span>
                <span>Simulate</span>
                <span className="text-[#E51B23]">•</span>
                <span>Optimize</span>
                <span className="text-[#E51B23]">•</span>
                <span>Manufacture</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a href="#contact" className="inline-block">
                <Button variant="primary" className="w-full sm:w-auto text-sm px-7 py-3.5 shadow-red-glow">
                  <span>GET A CONSULTATION</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>

              <a href="#contact" className="inline-block">
                <Button variant="secondary" className="w-full sm:w-auto text-sm px-7 py-3.5">
                  <span>REQUEST A QUOTE</span>
                  <ChevronRight className="w-4 h-4 text-[#E51B23]" />
                </Button>
              </a>
            </div>



          </div>

          {/* RIGHT COLUMN: Engineering Component Visual Area (Cols 8-12) */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            <EngineeringImage 
              src={heroComponentImg}
              alt="Precision Engineered Titanium Component CAD Model - Rise Point Consultancy Services"
              category="CAD / CAE / CAM"
              label="PRECISION ENGINEERING"
              variant="minimal"
              aspectRatio="aspect-[4/3]"
              className="w-full max-w-lg lg:max-w-none"
            />
          </div>

        </div>
      </div>

    </section>
  );
}
