import React from 'react';
import { Link } from 'react-router-dom';
import { Plus, ArrowRight } from 'lucide-react';

export default function QuickAction({ label, to, icon: Icon = Plus, primary = false }) {
  return (
    <Link 
      to={to}
      className={`group flex items-center justify-between p-4 rounded-sm border transition-all duration-300 transform hover:-translate-y-0.5 ${
        primary
          ? 'bg-[#E51B23] border-[#E51B23] text-white hover:bg-[#C4151B] shadow-red-glow'
          : 'bg-[#141414] border-white/12 text-white hover:border-[#E51B23]/60 hover:bg-[#1A1A1A]'
      }`}
    >
      <div className="flex items-center gap-3">
        <div className={`w-8 h-8 rounded-sm flex items-center justify-center ${
          primary ? 'bg-white/10 text-white' : 'bg-[#0D0D0D] border border-white/10 text-[#E51B23]'
        }`}>
          <Icon className="w-4 h-4" />
        </div>
        
        <span className="text-xs font-mono font-bold uppercase tracking-wider">
          {label}
        </span>
      </div>

      <ArrowRight className={`w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 ${
        primary ? 'text-white' : 'text-gray-400 group-hover:text-[#E51B23]'
      }`} />
    </Link>
  );
}
