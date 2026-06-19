import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, PhoneCall } from 'lucide-react';
import { COMP_INFO } from '../data';

interface HeaderProps {
  activeSection: string;
}

export default function Header({ activeSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Dynamically watch scroll height to add premium glassmorphism effects
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About Us', href: '#about', id: 'about' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Portfolio', href: '#portfolio', id: 'portfolio' },
    { label: 'Our Team', href: '#team', id: 'team' },
    { label: 'Testimonials', href: '#testimonials', id: 'testimonials' },
    { label: 'Contact Us', href: '#contact', id: 'contact' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offsetHeader = 84; // height of sticky header
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offsetHeader;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      id="main-app-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Brand container */}
          <a
            id="brand-logo-link"
            href="#home"
            onClick={(e) => handleScrollTo(e, '#home')}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="relative h-11 w-11 bg-white rounded-xl p-1.5 flex items-center justify-center shadow-md transition-transform group-hover:scale-105">
              <img
                src={COMP_INFO.logoUrl}
                alt="Siltawi Logo"
                className="h-full w-full object-contain"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  // Fallback fallback if url ever times out or has cors blocking
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const p = target.parentElement;
                  if (p) {
                    const fallback = document.createElement('div');
                    fallback.className = "text-slate-900 font-extrabold text-lg font-sans flex items-center justify-center";
                    fallback.innerText = "S";
                    p.appendChild(fallback);
                  }
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-extrabold text-lg text-white leading-tight uppercase tracking-wider group-hover:text-sky-400 transition-colors">
                Siltawi
              </span>
              <span className="font-mono text-[9px] text-sky-400 font-bold uppercase tracking-widest leading-none">
                Digital Marketing
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav id="desktop-navbar" className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                id={`nav-link-${link.id}`}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeSection === link.id
                    ? 'text-sky-400 bg-sky-500/10'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Call to Action CTA Button */}
          <div className="hidden lg:block">
            <a
              id="cta-header-button"
              href="#contact"
              onClick={(e) => handleScrollTo(e, '#contact')}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-teal-500 text-white font-sans font-medium text-sm px-5 py-2.5 rounded-xl shadow-lg hover:shadow-sky-500/10 transition-all hover:scale-[1.02] focus:ring-2 focus:ring-sky-500/50"
            >
              Get Free Consultation
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          {/* Mobile hamburger menu trigger */}
          <div className="flex lg:hidden items-center gap-3">
            <a
              id="mobile-phone-quick-call"
              href={`tel:${COMP_INFO.phone}`}
              className="p-2 rounded-xl bg-slate-800 border border-slate-700/60 text-sky-400 hover:text-white"
              title="Call Siltawi"
            >
              <PhoneCall className="h-4 w-4" />
            </a>
            <button
              id="mobile-menu-hamburger-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-800 border border-slate-700/60 text-slate-300 hover:text-white focus:ring-2 focus:ring-sky-500"
              aria-label="Toggle Mobile Menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Glassmorphism Overlay Menu */}
      {isMobileMenuOpen && (
        <div
          id="mobile-nav-panel"
          className="lg:hidden absolute top-full left-0 w-full bg-slate-950/98 backdrop-blur-xl border-b border-slate-800 shadow-2xl py-6 px-4 flex flex-col gap-4 animate-fadeIn"
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              id={`mob-nav-link-${link.id}`}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className={`px-4 py-3 rounded-xl text-base font-medium transition-all ${
                activeSection === link.id
                  ? 'text-sky-400 bg-sky-500/10 font-semibold'
                  : 'text-slate-300 hover:text-white hover:bg-slate-900'
              }`}
            >
              {link.label}
            </a>
          ))}
          <div className="border-t border-slate-800/80 pt-4 mt-2">
            <a
              id="mob-cta-header-button"
              href="#contact"
              onClick={(e) => handleScrollTo(e, '#contact')}
              className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-sky-500 to-teal-500 text-white font-sans font-medium py-3 rounded-xl shadow-lg"
            >
              Get Free Consultation
              <ArrowUpRight className="h-4.5 w-4.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
