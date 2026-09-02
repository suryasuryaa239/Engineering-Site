import React from 'react';
import TechnicalBadge from './TechnicalBadge';
import EngineeringImage from './EngineeringImage';
import { ArrowUpRight } from 'lucide-react';
import aboutAssemblyImg from '../assets/images/about_assembly.png';

export default function About() {
  return (
    <section 
      id="about" 
      className="relative bg-[#050505] text-[#FFFFFF] section-padding grid-bg-pattern overflow-hidden"
    >
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Section Copywriting & Explanations (Cols 1-7) */}
          <div className="lg:col-span-7 space-y-6 animate-fade-up">
            
            {/* Technical Red Section Label */}
            <TechnicalBadge text="ABOUT US" />

            {/* Main Section Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight leading-tight">
              Engineering Solutions <br className="hidden sm:inline" />
              <span className="text-[#E51B23]">Built for Performance.</span>
            </h2>

            {/* Four Copy Paragraphs */}
            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
              <p>
                At Rise Point Consultancy Services, we provide complete solutions for product development activities, seamlessly guiding projects from concept and design through engineering validation and manufacturing.
              </p>
              
              <p>
                Our expertise in CAD, CAE, and CAM enables us to deliver innovative, efficient, and production-ready solutions that accelerate product development and ensure manufacturing success.
              </p>
              
              <p className="text-[#A1A1A1]">
                From idea to production, we help businesses transform concepts into high-quality products through advanced engineering, simulation, and manufacturing support.
              </p>
              
              <p className="text-[#A1A1A1]">
                Our commitment to technical excellence, innovation, and customer satisfaction ensures reliable solutions tailored to the unique needs of every project.
              </p>
            </div>

            {/* Explore Link/Button */}
            <div className="pt-2">
              <a 
                href="#services" 
                className="inline-flex items-center gap-2 text-xs md:text-sm font-heading font-bold uppercase tracking-wider text-white hover:text-[#E51B23] transition-colors group underline-hover py-1"
              >
                <span>EXPLORE OUR EXPERTISE</span>
                <ArrowUpRight className="w-4 h-4 text-[#E51B23] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

          </div>

          {/* RIGHT COLUMN: Engineering CAD Visual Area (Cols 8-12) */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            <EngineeringImage 
              src={aboutAssemblyImg}
              alt="Rise Point Consultancy Services - Precision 3D CAD Mechanical Assembly"
              number="02"
              category="PRODUCT DESIGN"
              label="ENGINEERING DEVELOPMENT"
              variant="top-left"
              aspectRatio="aspect-[4/3]"
              className="w-full max-w-lg lg:max-w-none"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
