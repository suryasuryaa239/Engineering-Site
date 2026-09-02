import React from 'react';
import TechnicalBadge from './TechnicalBadge';
import EngineeringImage from './EngineeringImage';
import { ArrowUpRight, Check, ShieldCheck, Activity, Wind, Cpu, Settings } from 'lucide-react';

import serviceCadImg from '../assets/images/service_cad.png';
import serviceFeaImg from '../assets/images/service_fea.png';
import serviceCfdImg from '../assets/images/service_cfd.png';
import serviceCamImg from '../assets/images/service_cam.png';

const cadServices = [
  'Product Design & Development',
  '3D CAD Modeling',
  'Mechanical Design',
  'Sheet Metal Design',
  'Plastic Component Design',
  'Reverse Engineering',
  'GD&T',
  'Detailed Manufacturing Drawings',
  'Design for Manufacturing (DFM)'
];

const feaCapabilities = [
  'Static Structural Analysis',
  'Dynamic Analysis',
  'Modal Analysis',
  'Thermal Analysis',
  'Fatigue Analysis',
  'Buckling Analysis',
  'Non-Linear Analysis',
  'Drop Test Simulation',
  'Durability Assessment'
];

const feaBenefits = [
  'Reduced Prototype Costs',
  'Improved Product Reliability',
  'Design Optimization',
  'Faster Product Validation',
  'Reduced Development Time'
];

const cfdCapabilities = [
  'Internal Flow Analysis',
  'External Aerodynamics',
  'Pressure Drop Analysis',
  'Heat Transfer Analysis',
  'Electronic Cooling',
  'HVAC Simulation',
  'Mixing Studies',
  'Multiphase Flow Analysis',
  'Thermal Management'
];

const cfdApplications = [
  'Automotive Components',
  'Heat Exchangers',
  'Pumps & Valves',
  'Industrial Equipment',
  'Electronics Cooling',
  'Energy Systems'
];

const cfdBenefits = [
  'Enhanced Efficiency',
  'Better Thermal Performance',
  'Reduced Energy Consumption',
  'Optimized Fluid Flow',
  'Improved Product Performance'
];

const camServices = [
  'CNC Programming',
  'Toolpath Generation',
  'Process Planning',
  'Machining Simulation',
  'Manufacturing Feasibility Studies',
  'Production Engineering Support',
  'Fixture Design Support'
];

export default function Services() {
  return (
    <section 
      id="services" 
      className="relative bg-[#050505] text-[#FFFFFF] section-padding grid-bg-pattern overflow-hidden"
    >
      <div className="container-custom relative z-10 space-y-16 lg:space-y-24">
        
        {/* ==================================================================
            SECTION INTRO
            ================================================================== */}
        <div className="max-w-3xl space-y-4 animate-fade-up">
          <TechnicalBadge text="OUR SERVICES" />
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight leading-tight">
            End-to-End <span className="text-[#E51B23]">Engineering Solutions</span>
          </h2>
          
          <p className="text-slate-300 text-base lg:text-lg leading-relaxed font-normal">
            From concept to production, our engineering services combine advanced design, simulation, and manufacturing expertise to deliver reliable, optimized, and production-ready products.
          </p>
        </div>

        {/* ==================================================================
            SERVICE 01 — DESIGN ENGINEERING (CAD)
            ================================================================== */}
        <div className="tech-card bg-[#0D0D0D] border border-white/12 rounded-sm p-6 sm:p-8 lg:p-10 relative group hover:border-[#E51B23]/50 transition-all duration-300">
          <div className="tech-corner-tl" />
          <div className="tech-corner-tr" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Content Left (Cols 1-7) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center justify-between text-xs font-mono text-[#A1A1A1] pb-3 border-b border-white/12">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#E51B23] rounded-full" />
                  <strong className="text-white">CATEGORY 01</strong>
                </span>
                <span className="text-[#E51B23] font-bold">CAD DESIGN</span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading tracking-tight mb-2">
                  Design Engineering (CAD)
                </h3>
                <p className="text-[#E51B23] font-heading font-medium text-sm md:text-base">
                  Transforming Ideas into Intelligent Designs.
                </p>
              </div>

              {/* 2-Column List with Red Bullet Indicators */}
              <div className="pt-2">
                <div className="text-xs font-mono uppercase tracking-wider text-[#A1A1A1] mb-3">
                  CORE CAD CAPABILITIES:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-slate-200">
                  {cadServices.map((item) => (
                    <div key={item} className="flex items-center gap-2.5 bg-[#141414] p-2.5 border border-white/5 rounded-sm">
                      <span className="w-1.5 h-1.5 bg-[#E51B23] rounded-full shrink-0" />
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Visual Right (Cols 8-12) */}
            <div className="lg:col-span-5">
              <EngineeringImage 
                src={serviceCadImg}
                alt="Rise Point Consultancy Services - 3D Design Engineering CAD Modeling"
                number="03"
                category="CAD"
                label="DESIGN ENGINEERING"
                variant="bottom-left"
                aspectRatio="aspect-[4/3]"
              />
            </div>

          </div>
        </div>

        {/* ==================================================================
            SERVICE 02 — ENGINEERING SIMULATION (CAE)
            ================================================================== */}
        <div className="space-y-8">
          
          {/* CAE Header Banner */}
          <div className="tech-card bg-[#0D0D0D] border border-white/12 rounded-sm p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="text-xs font-mono text-[#E51B23] font-bold uppercase tracking-wider">CATEGORY 02</div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading tracking-tight">
                Engineering Simulation (CAE)
              </h3>
            </div>
            <div className="text-sm font-heading text-[#A1A1A1] border-l-2 border-[#E51B23] pl-4">
              Optimize Product Reliability Before Manufacturing.
            </div>
          </div>

          {/* 02A — FINITE ELEMENT ANALYSIS (FEA) */}
          <div className="tech-card bg-[#0D0D0D] border border-white/12 rounded-sm p-6 sm:p-8 lg:p-10 relative group hover:border-[#E51B23]/50 transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Content (Cols 1-7) */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center justify-between text-xs font-mono text-[#A1A1A1] pb-2 border-b border-white/12">
                  <span className="text-white font-bold">02A // STRUCTURAL SIMULATION</span>
                  <span className="text-[#E51B23] font-bold">FEA ANALYSIS</span>
                </div>

                <div>
                  <h4 className="text-xl sm:text-2xl font-extrabold text-white font-heading">
                    Finite Element Analysis (FEA)
                  </h4>
                  <p className="text-[#A1A1A1] text-xs sm:text-sm pt-1">
                    Optimize Product Reliability Before Manufacturing.
                  </p>
                </div>

                {/* Capabilities Grid */}
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-[#A1A1A1] mb-2.5">
                    ANALYSIS CAPABILITIES:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-200">
                    {feaCapabilities.map((cap) => (
                      <div key={cap} className="flex items-center gap-2 bg-[#141414] p-2 border border-white/5 rounded-sm">
                        <Activity className="w-3.5 h-3.5 text-[#E51B23] shrink-0" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits List */}
                <div className="pt-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-[#E51B23] mb-2 font-bold">
                    KEY BENEFITS:
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs">
                    {feaBenefits.map((ben) => (
                      <span key={ben} className="inline-flex items-center gap-1.5 bg-[#E51B23]/10 border border-[#E51B23]/30 text-white px-2.5 py-1 rounded-sm">
                        <Check className="w-3 h-3 text-[#E51B23]" />
                        <span>{ben}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right FEA Heatmap Visual (Cols 8-12) */}
              <div className="lg:col-span-5">
                <EngineeringImage 
                  src={serviceFeaImg}
                  alt="Rise Point Consultancy Services - Finite Element Analysis FEA Stress Heatmap"
                  number="04"
                  category="FEA"
                  label="STRUCTURAL ANALYSIS"
                  coordinates="STRESS // VON MISES"
                  variant="coordinates"
                  aspectRatio="aspect-[4/3]"
                />
              </div>

            </div>
          </div>

          {/* 02B — COMPUTATIONAL FLUID DYNAMICS (CFD) */}
          <div className="tech-card bg-[#0D0D0D] border border-white/12 rounded-sm p-6 sm:p-8 lg:p-10 relative group hover:border-[#E51B23]/50 transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left CFD Visual (Cols 1-5 on Desktop) */}
              <div className="lg:col-span-5 order-2 lg:order-1">
                <EngineeringImage 
                  src={serviceCfdImg}
                  alt="Rise Point Consultancy Services - Computational Fluid Dynamics CFD Aerodynamic Airflow"
                  number="05"
                  category="CFD"
                  label="FLOW SIMULATION"
                  coordinates="FLOW // AERODYNAMIC"
                  variant="coordinates"
                  aspectRatio="aspect-[4/3]"
                />
              </div>

              {/* Right Content (Cols 6-12 on Desktop) */}
              <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
                <div className="flex items-center justify-between text-xs font-mono text-[#A1A1A1] pb-2 border-b border-white/12">
                  <span className="text-white font-bold">02B // FLUID DYNAMICS</span>
                  <span className="text-[#E51B23] font-bold">CFD SIMULATION</span>
                </div>

                <div>
                  <h4 className="text-xl sm:text-2xl font-extrabold text-white font-heading">
                    Computational Fluid Dynamics (CFD)
                  </h4>
                  <p className="text-[#A1A1A1] text-xs sm:text-sm pt-1">
                    Engineering Better Flow Performance.
                  </p>
                </div>

                {/* Simulation Capabilities */}
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-[#A1A1A1] mb-2.5">
                    SIMULATION CAPABILITIES:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-200">
                    {cfdCapabilities.map((cap) => (
                      <div key={cap} className="flex items-center gap-2 bg-[#141414] p-2 border border-white/5 rounded-sm">
                        <Wind className="w-3.5 h-3.5 text-[#E51B23] shrink-0" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Target Applications & Benefits */}
                <div className="grid sm:grid-cols-2 gap-4 pt-2 border-t border-white/12">
                  <div>
                    <div className="text-xs font-mono uppercase tracking-wider text-[#A1A1A1] mb-2">
                      APPLICATIONS:
                    </div>
                    <ul className="space-y-1 text-xs text-slate-300">
                      {cfdApplications.map((app) => (
                        <li key={app} className="flex items-center gap-1.5">
                          <span className="w-1 h-1 bg-[#E51B23] rounded-full" />
                          <span>{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="text-xs font-mono uppercase tracking-wider text-[#E51B23] mb-2 font-bold">
                      BENEFITS:
                    </div>
                    <ul className="space-y-1 text-xs text-slate-200">
                      {cfdBenefits.map((ben) => (
                        <li key={ben} className="flex items-center gap-1.5">
                          <Check className="w-3 h-3 text-[#E51B23]" />
                          <span>{ben}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* ==================================================================
            SERVICE 03 — MANUFACTURING ENGINEERING (CAM)
            ================================================================== */}
        <div className="tech-card bg-[#0D0D0D] border border-white/12 rounded-sm p-6 sm:p-8 lg:p-10 relative group hover:border-[#E51B23]/50 transition-all duration-300">
          <div className="tech-corner-tl" />
          <div className="tech-corner-tr" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Content Left (Cols 1-7) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center justify-between text-xs font-mono text-[#A1A1A1] pb-3 border-b border-white/12">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#E51B23] rounded-full" />
                  <strong className="text-white">CATEGORY 03</strong>
                </span>
                <span className="text-[#E51B23] font-bold">CAM TOOLING</span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading tracking-tight mb-2">
                  Manufacturing Engineering (CAM)
                </h3>
                <p className="text-[#E51B23] font-heading font-medium text-sm md:text-base">
                  Bridging Design with Manufacturing.
                </p>
              </div>

              {/* CAM Services List */}
              <div className="pt-2">
                <div className="text-xs font-mono uppercase tracking-wider text-[#A1A1A1] mb-3">
                  MANUFACTURING CAPABILITIES:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-slate-200">
                  {camServices.map((item) => (
                    <div key={item} className="flex items-center gap-2.5 bg-[#141414] p-2.5 border border-white/5 rounded-sm">
                      <Settings className="w-3.5 h-3.5 text-[#E51B23] shrink-0" />
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Visual Right (Cols 8-12) */}
            <div className="lg:col-span-5">
              <EngineeringImage 
                src={serviceCamImg}
                alt="Rise Point Consultancy Services - Precision CNC Machining CAM Toolpath Manufacturing"
                number="06"
                category="CAM"
                label="MANUFACTURING ENGINEERING"
                variant="bottom-left"
                aspectRatio="aspect-[4/3]"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
