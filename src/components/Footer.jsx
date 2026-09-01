import React from 'react';
import { ArrowUp, MapPin, Mail, Phone, Globe } from 'lucide-react';
import rpcsLogo from '../assets/images/rpcs_logo.png';

const navLinks = [
  { name: 'HOME', href: '#home' },
  { name: 'ABOUT', href: '#about' },
  { name: 'SERVICES', href: '#services' },
  { name: 'INDUSTRIES', href: '#industries' },
  { name: 'WHY US', href: '#why-us' },
  { name: 'PROCESS', href: '#process' },
  { name: 'CAREERS', href: '#careers' },
  { name: 'CONTACT', href: '#contact' }
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] text-[#FFFFFF] border-t border-white/12 pt-16 pb-8 relative overflow-hidden">
      <div className="container-custom space-y-12">
        
        {/* TOP ROW: Brand & Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/12">
          
          {/* COLUMN 1: Brand & Bio (Cols 1-5) */}
          <div className="lg:col-span-5 space-y-4">
            <a href="#home" className="inline-block">
              <img 
                src={rpcsLogo} 
                alt="Rise Point Consultancy Services Official Logo" 
                className="h-10 md:h-12 w-auto object-contain"
              />
            </a>

            <p className="text-[#A1A1A1] text-sm leading-relaxed max-w-md font-normal">
              Rise Point Consultancy Services provides end-to-end product development solutions, guiding projects from concept and CAD design through simulation, optimization, and manufacturing.
            </p>

            <div className="text-xs font-mono text-[#E51B23] font-bold tracking-wider pt-2">
              EXCELLENCE FROM DESIGN TO MANUFACTURING
            </div>
          </div>

          {/* COLUMN 2: Quick Navigation (Cols 6-8) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono text-[#E51B23] font-bold uppercase tracking-widest">
              NAVIGATION
            </h4>
            <ul className="space-y-2.5 text-xs font-mono">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-[#A1A1A1] hover:text-white transition-colors inline-block hover:translate-x-1 transform duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: Contact Info (Cols 9-12) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-mono text-[#E51B23] font-bold uppercase tracking-widest">
              HEADQUARTERS
            </h4>
            <ul className="space-y-3 text-xs text-slate-300">
              <li className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#E51B23] shrink-0" />
                <span>Chennai, India</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#E51B23] shrink-0" />
                <a href="mailto:info@rpcs.co.in" className="hover:text-white transition-colors">
                  info@rpcs.co.in
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#E51B23] shrink-0" />
                <a href="tel:+919790990345" className="hover:text-white transition-colors">
                  +91 9790990345
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-[#E51B23] shrink-0" />
                <a href="http://www.r-pcs.co.in" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  www.r-pcs.co.in
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM ROW: Copyright & Scroll to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#A1A1A1]">
          <div>
            © 2026 Rise Point Consultancy Services. All rights reserved.
          </div>

          <button 
            type="button" 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs text-[#A1A1A1] hover:text-[#E51B23] transition-colors bg-[#0D0D0D] border border-white/12 px-3 py-1.5 rounded-sm"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
