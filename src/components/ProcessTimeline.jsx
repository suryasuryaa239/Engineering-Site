import React from 'react';
import { 
  Lightbulb, 
  Box, 
  Activity, 
  Sliders, 
  Cog, 
  Wrench,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

export default function ProcessTimeline({ onOpenQuote }) {
  const steps = [
    {
      number: '01',
      title: 'Concept & Requirements',
      description: 'Understanding product objectives, technical constraints, materials, and engineering challenges.',
      icon: Lightbulb,
      badge: 'Step 1'
    },
    {
      number: '02',
      title: 'Design Development',
      description: 'Parametric 3D CAD modeling, component assembly, GD&T detailing, and DFM guidelines.',
      icon: Box,
      badge: 'Step 2'
    },
    {
      number: '03',
      title: 'Virtual Validation',
      description: 'High-fidelity FEA structural stress analysis and CFD fluid/thermal flow simulation.',
      icon: Activity,
      badge: 'Step 3'
    },
    {
      number: '04',
      title: 'Design Optimization',
      description: 'Iterative engineering modifications based on simulation stress contours and flow performance.',
      icon: Sliders,
      badge: 'Step 4'
    },
    {
      number: '05',
      title: 'Manufacturing Planning',
      description: 'CAM CNC toolpath generation, machining simulation, process planning, and fixture design.',
      icon: Cog,
      badge: 'Step 5'
    },
    {
      number: '06',
      title: 'Production Support',
      description: 'On-site/virtual manufacturing assistance, prototyping validation, and engineering consultation.',
      icon: Wrench,
      badge: 'Step 6'
    }
  ];

  return (
    <section id="process" className="py-24 relative bg-slate-900/40 border-t border-slate-800">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="section-tag justify-center mx-auto">
            <span>Our Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
            The 6-Step <span className="gradient-text">Product Development Process</span>
          </h2>
          <p className="text-slate-300 text-lg">
            A structured engineering workflow ensuring precision, simulation-driven reliability, and seamless shop floor execution.
          </p>
        </div>

        {/* Timeline Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div 
                key={idx}
                className="glass-card p-8 border-slate-800 relative hover:border-cyan-500/40 group flex flex-col justify-between"
              >
                <div>
                  {/* Step Header Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-extrabold font-mono text-cyan-400/80">
                      {s.number}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-cyan-400" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {s.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {s.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-500">
                  <span>Phase {s.number}</span>
                  <span className="text-cyan-400 font-semibold">RPCS Standard</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Bar */}
        <div className="text-center">
          <button
            onClick={onOpenQuote}
            className="btn-primary text-base px-8 py-4 shadow-xl shadow-cyan-500/25"
          >
            <span>Initiate Your Engineering Project</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}
