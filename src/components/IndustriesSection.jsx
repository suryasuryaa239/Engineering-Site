import React from 'react';
import { 
  Car, 
  Plane, 
  Zap, 
  Factory, 
  Smartphone, 
  Flame, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

export default function IndustriesSection({ onOpenQuote }) {
  const industries = [
    {
      id: 'automotive',
      name: 'Automotive',
      icon: Car,
      color: 'cyan',
      description: 'Vehicle components, chassis systems, thermal management and lightweight structures.',
      tags: ['Chassis Systems', 'Thermal Management', 'Lightweighting', 'Crash & Impact'],
      metric: 'NVH & FEA Optimization'
    },
    {
      id: 'aerospace',
      name: 'Aerospace',
      icon: Plane,
      color: 'blue',
      description: 'Structural analysis, fluid flow simulations and component optimization.',
      tags: ['Aerodynamics', 'Structural Integrity', 'Turbine Blades', 'Weight Reduction'],
      metric: 'High-Altitude Simulation'
    },
    {
      id: 'energy',
      name: 'Energy',
      icon: Zap,
      color: 'amber',
      description: 'Renewable energy systems, turbines, heat exchangers and power equipment.',
      tags: ['Wind Turbines', 'Heat Exchangers', 'Solar Arrays', 'Power Equipment'],
      metric: 'Thermal CFD Flow'
    },
    {
      id: 'machinery',
      name: 'Industrial Machinery',
      icon: Factory,
      color: 'emerald',
      description: 'Heavy engineering equipment, pumps, valves and manufacturing systems.',
      tags: ['Heavy Equipment', 'Pumps & Valves', 'Tooling & Fixtures', 'Kinematic Motion'],
      metric: 'Durability & CAM'
    },
    {
      id: 'consumer',
      name: 'Consumer Products',
      icon: Smartphone,
      color: 'indigo',
      description: 'Product performance enhancement and design validation.',
      tags: ['Enclosures', 'Drop Test Simulation', 'DFM Optimization', 'Ergonomics'],
      metric: 'Rapid Prototyping'
    },
    {
      id: 'oilgas',
      name: 'Oil & Gas',
      icon: Flame,
      color: 'red',
      description: 'Pressure equipment, piping systems and flow analysis.',
      tags: ['Pressure Vessels', 'Piping Stress Analysis', 'Subsea Valves', 'Multiphase Flow'],
      metric: 'ASME Section VIII'
    }
  ];

  return (
    <section id="industries" className="py-24 relative bg-slate-900/60 border-t border-slate-800">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="section-tag justify-center mx-auto">
            <span>Domain Specialization</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
            Industries We <span className="gradient-text">Serve</span>
          </h2>
          <p className="text-slate-300 text-lg">
            Delivering specialized engineering, virtual simulation, and manufacturing solutions across critical sectors worldwide.
          </p>
        </div>

        {/* 6 Industry Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {industries.map((ind) => {
            const Icon = ind.icon;
            return (
              <div 
                key={ind.id}
                className="glass-card p-8 border-slate-800 flex flex-col justify-between group hover:border-cyan-500/40"
              >
                <div>
                  {/* Top Bar Icon & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-cyan-400" />
                    </div>
                    <span className="tech-badge bg-slate-900 text-cyan-400 border-slate-700">
                      {ind.metric}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {ind.name}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {ind.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {ind.tags.map((tag, idx) => (
                      <span key={idx} className="text-[11px] font-mono px-2.5 py-1 rounded bg-slate-900 text-slate-400 border border-slate-800">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA */}
                <button
                  onClick={onOpenQuote}
                  className="flex items-center gap-2 text-xs font-bold text-cyan-400 hover:text-white uppercase tracking-wider transition-colors pt-4 border-t border-slate-800/80"
                >
                  <span>Explore {ind.name} Solutions</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
