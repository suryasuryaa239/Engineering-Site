import React from 'react';
import { Target, Eye, ShieldCheck, Cpu, Award, Users, CheckCircle } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative bg-slate-950/60 border-t border-slate-800/80">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="section-tag justify-center mx-auto">
            <span>About Rise Point Consultancy Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
            Pioneering Product Development Through <span className="gradient-text">Engineering Excellence</span>
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed">
            Seamlessly guiding engineering projects from concept and design through virtual simulation, validation, and production-ready manufacturing.
          </p>
        </div>

        {/* Narrative & Capabilities Grid */}
        <div className="grid lg:grid-cols-12 gap-10 items-center mb-16">
          
          {/* Main Story Paragraphs */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-card p-8 border-slate-800 bg-slate-900/50">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-cyan-400" />
                <span>Complete Engineering Solutions</span>
              </h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                At <strong className="text-cyan-400 font-semibold">Rise Point Consultancy Services</strong>, we provide complete solutions for product development activities, seamlessly guiding projects from concept and design through engineering validation and manufacturing. Our expertise in CAD, CAE, and CAM enables us to deliver innovative, efficient, and production-ready solutions that accelerate product development and ensure manufacturing success.
              </p>
              <p className="text-slate-400 leading-relaxed">
                From idea to production, we help businesses transform concepts into high-quality products through advanced engineering, simulation, and manufacturing support. Our commitment to technical excellence, innovation, and customer satisfaction ensures reliable solutions tailored to the unique needs of every project.
              </p>
            </div>
          </div>

          {/* Pillars List */}
          <div className="lg:col-span-5 space-y-4">
            <div className="glass-card p-5 flex items-start gap-4 border-cyan-500/20">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shrink-0">
                <Award className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h4 className="font-bold text-white text-base mb-1">Technical Leadership</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Specialized domain experts in CAD, FEA stress analysis, CFD fluid dynamics, and CAM tooling.
                </p>
              </div>
            </div>

            <div className="glass-card p-5 flex items-start gap-4 border-blue-500/20">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h4 className="font-bold text-white text-base mb-1">Simulation-Driven Accuracy</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Minimizing physical prototype iterations by pre-validating structural integrity and fluid dynamics.
                </p>
              </div>
            </div>

            <div className="glass-card p-5 flex items-start gap-4 border-amber-500/20">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0">
                <Users className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <h4 className="font-bold text-white text-base mb-1">Customer-Centric Approach</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Customized engineering workflows aligned with your industry standards and project timelines.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Mission Card */}
          <div className="glass-card p-8 border-cyan-500/30 bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-cyan-950/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <Target className="w-32 h-32 text-cyan-400" />
            </div>
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/40 flex items-center justify-center mb-6">
              <Target className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
              OUR MISSION
            </h3>
            <p className="text-slate-300 leading-relaxed text-base">
              To deliver innovative engineering solutions that combine design excellence, advanced simulation, and manufacturing expertise, enabling our clients to develop reliable, optimized, and high-performance products.
            </p>
          </div>

          {/* Vision Card */}
          <div className="glass-card p-8 border-blue-500/30 bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-blue-950/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <Eye className="w-32 h-32 text-blue-400" />
            </div>
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/40 flex items-center justify-center mb-6">
              <Eye className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
              OUR VISION
            </h3>
            <p className="text-slate-300 leading-relaxed text-base">
              To become a globally recognized engineering consultancy known for leadership in simulation-driven product development, innovation, and manufacturing excellence.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
