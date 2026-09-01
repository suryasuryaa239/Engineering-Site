import React from 'react';

export default function StatCard({ index, label, value, icon: Icon, accent = true }) {
  return (
    <div className="bg-[#141414] border border-white/12 p-6 rounded-sm space-y-4 relative group hover:border-[#E51B23]/60 transition-all duration-300">
      
      {/* Corner Technical Ticks */}
      <div className="tech-corner-tl" />
      
      {/* Top Row: Index number & Icon */}
      <div className="flex items-center justify-between">
        <span className="text-xs font-mono font-bold text-[#E51B23] tracking-wider">
          {index}
        </span>
        <div className="w-9 h-9 rounded-sm bg-[#0D0D0D] border border-white/12 flex items-center justify-center text-slate-300 group-hover:text-white group-hover:border-[#E51B23]/40 transition-colors">
          {Icon && <Icon className="w-4 h-4" />}
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-1">
        <div className="text-xs font-mono uppercase tracking-wider text-[#A1A1A1]">
          {label}
        </div>
        <div className="text-3xl font-extrabold text-white font-heading tracking-tight">
          {value}
        </div>
      </div>

      {/* Subtle Red Accent Line */}
      {accent && (
        <div className="w-8 h-[2px] bg-[#E51B23] group-hover:w-full transition-all duration-300" />
      )}

    </div>
  );
}
