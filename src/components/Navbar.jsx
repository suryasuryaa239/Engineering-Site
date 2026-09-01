import React, { useState, useEffect } from 'react';
import Button from './Button';
import rpcsLogo from '../assets/images/rpcs_logo.png';

const navLinks = [
  { name: 'HOME', href: '#home' },
  { name: 'ABOUT', href: '#about' },
  { name: 'SERVICES', href: '#services' },
  { name: 'INDUSTRIES', href: '#industries' },
  { name: 'WHY US', href: '#why-us' },
  { name: 'PROCESS', href: '#process' },
  { name: 'CAREERS', href: '#careers' },
  { name: 'CONTACT', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Listen for scroll and hash events to update background opacity and active nav link
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (window.location.hash === '#careers') {
        setActiveSection('careers');
        return;
      }

      // Detect active section based on scroll position
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl && sectionEl.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('hashchange', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleScroll);
    };
  }, []);

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    setActiveSection(targetId);
    
    window.location.hash = href;
    
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#050505]/95 backdrop-blur-md border-b border-white/12 shadow-2xl shadow-black/50' 
          : 'bg-[#050505]/80 backdrop-blur-sm border-b border-white/5'
      }`}
    >
      <nav 
        className="container-custom h-20 md:h-[88px] flex items-center justify-between"
        aria-label="Main Navigation"
      >
        
        {/* LEFT: Brand Logo */}
        <a 
          href="#home" 
          onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
          className="group flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E51B23] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
        >
          <img 
            src={rpcsLogo} 
            alt="Rise Point Consultancy Services Official Logo" 
            className="h-8 sm:h-9 md:h-10 w-auto object-contain"
          />
        </a>

        {/* CENTER / RIGHT: Desktop Navigation Links (>= 1024px) */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className={`relative py-2 text-xs font-heading font-semibold tracking-wider uppercase transition-colors duration-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#E51B23] ${
                      isActive ? 'text-white' : 'text-[#A1A1A1] hover:text-white'
                    }`}
                  >
                    {link.name}
                    
                    {/* Animated Thin Red Underline Accent */}
                    <span 
                      className={`absolute bottom-0 left-0 h-[2px] bg-[#E51B23] transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 hover:w-full'
                      }`}
                      style={{
                        width: isActive ? '100%' : undefined
                      }}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          {/* RIGHTMOST: Desktop CTA Button */}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#contact');
            }}
            className="ml-2"
          >
            <Button variant="primary" className="text-xs px-5 py-2.5">
              GET A CONSULTATION
            </Button>
          </a>
        </div>

        {/* MOBILE / TABLET: Hamburger Menu Toggle Button (< 1024px) */}
        <div className="lg:hidden flex items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#contact');
            }}
            className="hidden sm:inline-flex"
          >
            <Button variant="primary" className="text-[11px] px-3.5 py-2">
              CONSULTATION
            </Button>
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 text-white hover:text-[#E51B23] border border-white/12 rounded-sm bg-[#0D0D0D] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E51B23] transition-colors"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          >
            <div className="w-5 h-4 relative flex flex-col justify-between items-center">
              <span 
                className={`w-5 h-[2px] bg-current transform transition-all duration-300 ${
                  mobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''
                }`} 
              />
              <span 
                className={`w-5 h-[2px] bg-current transition-opacity duration-300 ${
                  mobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`} 
              />
              <span 
                className={`w-5 h-[2px] bg-current transform transition-all duration-300 ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''
                }`} 
              />
            </div>
          </button>
        </div>

      </nav>

      {/* MOBILE / TABLET: Slide-down Navigation Panel Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[80px] bg-[#050505]/98 border-b border-white/12 backdrop-blur-xl shadow-2xl z-50 animate-fade-in">
          <div className="container-custom py-8 px-6 space-y-6">
            
            <ul className="flex flex-col space-y-4">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link.href);
                      }}
                      className={`flex items-center justify-between py-2 text-base font-heading font-bold tracking-wider uppercase transition-colors ${
                        isActive ? 'text-[#E51B23]' : 'text-white hover:text-[#E51B23]'
                      }`}
                    >
                      <span>{link.name}</span>
                      {isActive && <span className="w-1.5 h-1.5 bg-[#E51B23] rounded-full" />}
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="pt-4 border-t border-white/12">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#contact');
                }}
                className="w-full block"
              >
                <Button variant="primary" className="w-full text-sm py-3 justify-center">
                  GET A CONSULTATION
                </Button>
              </a>
            </div>

            <div className="text-[11px] font-mono text-[#A1A1A1] text-center pt-2">
              Rise Point Consultancy Services • Chennai, India
            </div>

          </div>
        </div>
      )}

    </header>
  );
}
