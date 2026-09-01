import React, { useState } from 'react';
import { 
  Box, 
  Activity, 
  Wind, 
  Cog, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Maximize2,
  Sliders,
  Cpu
} from 'lucide-react';

export default function ServicesSection({ onOpenQuote }) {
  const [activeTab, setActiveTab] = useState('cad');

  const servicesData = {
    cad: {
      id: 'cad',
      title: 'Design Engineering (CAD)',
      tagline: 'Transforming Ideas into Intelligent Designs.',
      icon: Box,
      color: 'cyan',
      description: 'We turn conceptual ideas into fully parametric, manufacturing-ready 3D CAD models and production drawings adhering to international drafting standards.',
      items: [
        'Product Design & Development',
        '3D CAD Modeling',
        'Mechanical Design',
        'Sheet Metal Design',
        'Plastic Component Design',
        'Reverse Engineering',
        'GD&T (Geometric Dimensioning & Tolerancing)',
        'Detailed Manufacturing Drawings',
        'Design for Manufacturing (DFM)'
      ],
      highlights: [
        { label: 'Standard Compliance', val: 'ISO, ASME Y14.5' },
        { label: 'Tooling Compatibility', val: 'Native Parametric' },
        { label: 'DFM/DFA Audits', val: '100% Guaranteed' }
      ]
    },
    fea: {
      id: 'fea',
      title: 'Finite Element Analysis (FEA)',
      tagline: 'Optimize Product Reliability Before Manufacturing.',
      icon: Activity,
      color: 'amber',
      description: 'Advanced structural simulation to evaluate stress distribution, deformation, vibration modes, and fatigue life under operational loads.',
      capabilities: [
        'Static Structural Analysis',
        'Dynamic Analysis',
        'Modal Analysis',
        'Thermal Analysis',
        'Fatigue Analysis',
        'Buckling Analysis',
        'Non-Linear Analysis',
        'Drop Test Simulation',
        'Durability Assessment'
      ],
      benefits: [
        'Reduced Prototype Costs',
        'Improved Product Reliability',
        'Design Optimization',
        'Faster Product Validation',
        'Reduced Development Time'
      ]
    },
    cfd: {
      id: 'cfd',
      title: 'Computational Fluid Dynamics (CFD)',
      tagline: 'Engineering Better Flow Performance.',
      icon: Wind,
      color: 'blue',
      description: 'Accurate fluid flow and heat transfer simulations to maximize aerodynamic efficiency, optimize cooling, and minimize pressure drops.',
      capabilities: [
        'Internal Flow Analysis',
        'External Aerodynamics',
        'Pressure Drop Analysis',
        'Heat Transfer Analysis',
        'Electronic Cooling',
        'HVAC Simulation',
        'Mixing Studies',
        'Multiphase Flow Analysis',
        'Thermal Management'
      ],
      applications: [
        'Automotive Components',
        'Heat Exchangers',
        'Pumps & Valves',
        'Industrial Equipment',
        'Electronics Cooling',
        'Energy Systems'
      ],
      benefits: [
        'Enhanced Efficiency',
        'Better Thermal Performance',
        'Reduced Energy Consumption',
        'Optimized Fluid Flow',
        'Improved Product Performance'
      ]
    },
    cam: {
      id: 'cam',
      title: 'Manufacturing Engineering (CAM)',
      tagline: 'Bridging Design with Manufacturing.',
      icon: Cog,
      color: 'indigo',
      description: 'Precision Computer-Aided Manufacturing solutions to transform validated 3D models into efficient CNC toolpaths and error-free shop floor operations.',
      items: [
        'CNC Programming',
        'Toolpath Generation',
        'Process Planning',
        'Machining Simulation',
        'Manufacturing Feasibility Studies',
        'Production Engineering Support',
        'Fixture Design Support'
      ],
      highlights: [
        { label: 'Machining Efficiency', val: '3-5 Axis CNC' },
        { label: 'Cycle Time Reduction', val: 'Up to 30%' },
        { label: 'Collision Verification', val: 'Zero Collision' }
      ]
    }
  };

  return (
    <section id="services" className="py-24 relative bg-slate-900/40">
      <div className="container">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="section-tag justify-center mx-auto">
            <span>Our Technical Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
            Comprehensive End-to-End <span className="gradient-text">Engineering Services</span>
          </h2>
          <p className="text-slate-300 text-lg">
            From initial CAD modeling to high-fidelity FEA/CFD virtual validation and precision CAM manufacturing support.
          </p>
        </div>

        {/* Services Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[
            { id: 'cad', label: 'Design Engineering (CAD)', icon: Box, badge: 'CAD' },
            { id: 'fea', label: 'Structural Simulation (FEA)', icon: Activity, badge: 'FEA' },
            { id: 'cfd', label: 'Fluid Dynamics (CFD)', icon: Wind, badge: 'CFD' },
            { id: 'cam', label: 'Manufacturing (CAM)', icon: Cog, badge: 'CAM' },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 px-6 py-3.5 rounded-xl font-bold text-sm transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-lg shadow-cyan-500/25 scale-105'
                    : 'bg-slate-900/80 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-slate-950' : 'text-cyan-400'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Display */}
        <div className="glass-card p-8 lg:p-12 border-slate-800 bg-slate-950/80">
          
          {/* Active Tab Header */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-8 mb-8 border-b border-slate-800 gap-6">
            <div>
              <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2 font-semibold">
                RPCS Engineering Service Core
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                {servicesData[activeTab].title}
              </h3>
              <p className="text-lg text-cyan-400 font-medium italic">
                "{servicesData[activeTab].tagline}"
              </p>
            </div>

            <button
              onClick={onOpenQuote}
              className="btn-primary shrink-0 text-sm px-5 py-3 shadow-cyan-500/20"
            >
              <span>Consult on {servicesData[activeTab].title.split(' ')[0]}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <p className="text-slate-300 text-base leading-relaxed mb-8 max-w-4xl">
            {servicesData[activeTab].description}
          </p>

          {/* Service Details Layout based on Active Tab */}
          {activeTab === 'cad' && (
            <div>
              <h4 className="text-sm font-mono uppercase tracking-wider text-slate-400 mb-6 flex items-center gap-2">
                <Box className="w-4 h-4 text-cyan-400" />
                <span>Core CAD Services</span>
              </h4>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
                {servicesData.cad.items.map((item, idx) => (
                  <div key={idx} className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 hover:border-cyan-500/40 transition-colors flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                    <span className="text-sm font-semibold text-slate-200">{item}</span>
                  </div>
                ))}
              </div>

              {/* Highlights */}
              <div className="grid sm:grid-cols-3 gap-4 p-5 rounded-xl bg-slate-900/40 border border-slate-800 text-center">
                {servicesData.cad.highlights.map((h, idx) => (
                  <div key={idx}>
                    <div className="text-xs text-slate-400 font-mono mb-1">{h.label}</div>
                    <div className="text-base font-bold text-cyan-400">{h.val}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'fea' && (
            <div className="grid lg:grid-cols-12 gap-8">
              {/* Capabilities */}
              <div className="lg:col-span-7">
                <h4 className="text-sm font-mono uppercase tracking-wider text-amber-400 mb-6 flex items-center gap-2">
                  <Activity className="w-4 h-4 text-amber-400" />
                  <span>Analysis Capabilities</span>
                </h4>
                <div className="grid sm:grid-cols-2 gap-3 mb-6">
                  {servicesData.fea.capabilities.map((item, idx) => (
                    <div key={idx} className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800 flex items-center gap-3">
                      <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                      <span className="text-sm font-semibold text-slate-200">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="lg:col-span-5 bg-gradient-to-br from-amber-950/20 to-slate-900/80 p-6 rounded-2xl border border-amber-500/20">
                <h4 className="text-sm font-mono uppercase tracking-wider text-white mb-6 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  <span>Key FEA Benefits</span>
                </h4>
                <div className="space-y-3">
                  {servicesData.fea.benefits.map((b, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm text-slate-300">
                      <div className="w-2 h-2 rounded-full bg-amber-400" />
                      <span className="font-medium">{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'cfd' && (
            <div className="grid lg:grid-cols-12 gap-8">
              {/* Capabilities */}
              <div className="lg:col-span-6">
                <h4 className="text-sm font-mono uppercase tracking-wider text-blue-400 mb-6 flex items-center gap-2">
                  <Wind className="w-4 h-4 text-blue-400" />
                  <span>Simulation Capabilities</span>
                </h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {servicesData.cfd.capabilities.map((item, idx) => (
                    <div key={idx} className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800 flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                      <span className="text-sm font-semibold text-slate-200">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Applications & Benefits */}
              <div className="lg:col-span-6 space-y-6">
                <div className="bg-slate-900/60 p-5 rounded-xl border border-slate-800">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-3">
                    Target Applications
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {servicesData.cfd.applications.map((app, idx) => (
                      <span key={idx} className="tech-badge bg-cyan-950/40 text-cyan-300 border-cyan-800/40">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-950/20 to-slate-900/80 p-5 rounded-xl border border-blue-500/20">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-white mb-3">
                    CFD Performance Benefits
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-2 text-sm text-slate-300">
                    {servicesData.cfd.benefits.map((b, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="text-cyan-400">✓</span>
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'cam' && (
            <div>
              <h4 className="text-sm font-mono uppercase tracking-wider text-indigo-400 mb-6 flex items-center gap-2">
                <Cog className="w-4 h-4 text-indigo-400" />
                <span>Manufacturing Services & Fixture Design</span>
              </h4>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {servicesData.cam.items.map((item, idx) => (
                  <div key={idx} className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0" />
                    <span className="text-sm font-semibold text-slate-200">{item}</span>
                  </div>
                ))}
              </div>

              {/* Highlights */}
              <div className="grid sm:grid-cols-3 gap-4 p-5 rounded-xl bg-slate-900/40 border border-slate-800 text-center">
                {servicesData.cam.highlights.map((h, idx) => (
                  <div key={idx}>
                    <div className="text-xs text-slate-400 font-mono mb-1">{h.label}</div>
                    <div className="text-base font-bold text-indigo-400">{h.val}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
