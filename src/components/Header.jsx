import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  Menu, 
  X, 
  ChevronRight, 
  Cpu, 
  Layers, 
  Activity, 
  Cog, 
  FileText 
} from 'lucide-react';

export default function Header({ onOpenQuote, onOpenConsultation }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const sections = ['home', 'about', 'services', 'simulation', 'industries', 'why-us', 'process', 'contact'];
      const scrollPos = window.scrollY + 100;
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'simulation', label: 'Virtual Validation' },
    { id: 'industries', label: 'Industries' },
    { id: 'why-us', label: 'Why Choose Us' },
    { id: 'process', label: 'Our Process' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Info Bar */}
      <div className="bg-[#050811] border-b border-slate-800/60 text-xs py-2 px-4 text-slate-400 hidden lg:block">
        <div className="container flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              <span>Chennai, India</span>
            </span>
            <a href="mailto:info@rpcs.co.in" className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors">
              <Mail className="w-3.5 h-3.5 text-cyan-400" />
              <span>info@rpcs.co.in</span>
            </a>
            <a href="tel:+919790990345" className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors">
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <span>+91 9790990345</span>
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <span className="flex items-center gap-1 text-slate-400">
              <Globe className="w-3.5 h-3.5 text-cyan-400" />
              <span>www.r-pcs.co.in</span>
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-cyan-400 font-semibold tracking-wide">CAD • FEA • CFD • CAM Solutions</span>
          </div>
        </div>
      </div>

      {/* Main Glass Navigation Bar */}
      <nav className={`transition-all duration-300 ${isScrolled ? 'glass-header py-3 shadow-xl' : 'bg-slate-950/80 backdrop-blur-md py-4 border-b border-white/5'}`}>
        <div className="container flex items-center justify-between">
          
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 p-0.5 shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Cpu className="w-5 h-5 text-cyan-400" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-white font-[Outfit] flex items-center gap-1">
                RISE POINT <span className="text-cyan-400">SERVICES</span>
              </span>
              <span className="text-[10px] text-slate-400 font-mono tracking-widest uppercase -mt-1">
                Consultancy • Design • Manufacturing
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden xl:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeSection === link.id
                    ? 'text-cyan-400 bg-cyan-500/10 border border-cyan-500/20'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={onOpenConsultation}
              className="btn-secondary text-sm px-4 py-2"
            >
              Consultation
            </button>
            <button
              onClick={onOpenQuote}
              className="btn-primary text-sm px-4 py-2 shadow-cyan-500/20"
            >
              <span>Request Quote</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg text-slate-300 hover:text-white bg-slate-800/50 border border-slate-700"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 p-6 animate-fadeIn">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-lg text-base font-medium flex items-center justify-between ${
                  activeSection === link.id
                    ? 'text-cyan-400 bg-cyan-500/10 border border-cyan-500/30'
                    : 'text-slate-300 hover:bg-slate-800/60'
                }`}
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </a>
            ))}
            <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="btn-secondary w-full py-3 justify-center"
              >
                Get a Consultation
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="btn-primary w-full py-3 justify-center"
              >
                Request a Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
