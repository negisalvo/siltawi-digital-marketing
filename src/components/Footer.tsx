import React from 'react';
import { 
  Facebook, Twitter, Linkedin, Instagram, ArrowUpRight, 
  MapPin, Phone, Mail, Globe, Sparkles, Building
} from 'lucide-react';
import { COMP_INFO, SERVICES } from '../data';

export default function Footer() {
  
  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offsetHeader = 84; 
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offsetHeader;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/siltawi", label: "Facebook" },
    { icon: Twitter, href: "https://twitter.com/siltawi", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com/company/siltawi", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com/siltawi", label: "Instagram" }
  ];

  return (
    <footer id="main-app-footer" className="relative bg-transparent border-t border-white/10 pt-16 pb-8 overflow-hidden">
      
      {/* Absolute noise grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#090d16_1px,transparent_1px),linear-gradient(to_bottom,#090d16_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_100%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Pitch & Social Block */}
          <div className="lg:col-span-4 space-y-6 text-left">
            <a
              href="#home"
              onClick={(e) => handleScrollToSection(e, '#home')}
              className="flex items-center gap-3 group focus:outline-none"
            >
              <div className="relative h-10 w-10 bg-white rounded-lg p-1.5 flex items-center justify-center shadow-md">
                <img
                  src={COMP_INFO.logoUrl}
                  alt="Siltawi Logo v2"
                  className="h-full w-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-bold text-base text-white tracking-wider uppercase group-hover:text-sky-400 transition-colors">
                  Siltawi
                </span>
                <span className="font-mono text-[8px] text-sky-400 font-bold uppercase tracking-widest leading-none">
                  Digital Marketing
                </span>
              </div>
            </a>

            <p className="font-sans text-xs text-slate-400 leading-relaxed max-w-sm">
              An elite premium branding and programmatic advertising agency based in Addis Ababa, Ethiopia. We bridge product features with raw consumer mindshare through metrics that deliver concrete leads.
            </p>

            {/* Social icons */}
            <div className="flex gap-2.5">
              {socialLinks.map((social, i) => {
                const Icon = social.icon;
                return (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="h-9 w-9 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-sky-400 hover:border-sky-450/50 flex items-center justify-center transition-all"
                    title={`Follow Siltawi on ${social.label}`}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick links block */}
          <div className="lg:col-span-2 text-left space-y-4">
            <h5 className="font-sans font-extrabold text-xs text-white uppercase tracking-widest">
              Site Links
            </h5>
            <div className="flex flex-col gap-2.5">
              {[
                { label: 'Home Page', href: '#home' },
                { label: 'About Us', href: '#about' },
                { label: 'Services Portal', href: '#services' },
                { label: 'Case Studies', href: '#portfolio' },
                { label: 'Our Specialists', href: '#team' },
                { label: 'Testimonials', href: '#testimonials' }
              ].map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  onClick={(e) => handleScrollToSection(e, link.href)}
                  className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-white transition-all hover:translate-x-1"
                >
                  <ArrowUpRight className="h-3 w-3 text-slate-600 group-hover:text-sky-450 shrink-0" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Specialization menu block */}
          <div className="lg:col-span-3 text-left space-y-4">
            <h5 className="font-sans font-extrabold text-xs text-white uppercase tracking-widest">
              Growth Pillars
            </h5>
            <div className="flex flex-col gap-2.5">
              {SERVICES.map((serv) => (
                <a
                  key={serv.id}
                  href="#services"
                  onClick={(e) => handleScrollToSection(e, '#services')}
                  className="font-sans text-xs text-slate-400 hover:text-sky-400 transition-colors"
                >
                  {serv.title}
                </a>
              ))}
            </div>
          </div>

          {/* Physical Location block */}
          <div className="lg:col-span-3 text-left space-y-4">
            <h5 className="font-sans font-extrabold text-xs text-white uppercase tracking-widest">
              Headquarters
            </h5>
            <div className="space-y-3.5">
              <div className="flex gap-2.5 text-xs text-slate-400 leading-relaxed">
                <MapPin className="h-4 w-4 text-sky-400 shrink-0 mt-0.5" />
                <span>
                  {COMP_INFO.fullAddress}
                </span>
              </div>
              <div className="flex gap-2.5 text-xs text-slate-400">
                <Phone className="h-4 w-4 text-teal-400 shrink-0" />
                <span className="font-mono">{COMP_INFO.phone}</span>
              </div>
              <div className="flex gap-2.5 text-xs text-slate-400">
                <Mail className="h-4 w-4 text-indigo-400 shrink-0" />
                <span className="font-mono">{COMP_INFO.email}</span>
              </div>
            </div>
          </div>

        </div>

        {/* SEO Booster Text Details (Humble, human keywords) */}
        <div id="seo-search-booster" className="py-8 text-left border-b border-white/10">
          <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-slate-500 block mb-2">
            Local Search Engine Optimization & Registry
          </span>
          <p className="font-sans text-[10px] text-slate-550 leading-relaxed max-w-7xl">
            Siltawi Digital Marketing represents Addis Ababa, Ethiopia's Premier Strategic Creative Agency. Registered locally in Addis Ababa, we operate structured programmatic marketing networks, on-page search engine optimization (SEO), local map directory indexing, graphic style branding, and React software profile assembly. Calibrated to elevate startups, e-commerce networks, educational colleges, cafeterias, and NGOs across Bole Road, Olympia, Kazanchis, and wider East Africa.
          </p>
        </div>

        {/* Copyright block */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 font-sans text-xs">
          <span>
            © {new Date().getFullYear()} Siltawi Digital Marketing. All rights reserved.
          </span>
          <div className="flex gap-6">
            <span className="text-xxs font-mono uppercase">Addis Ababa, Ethiopia</span>
            <span className="text-xxs font-mono uppercase">Strategic Growth Blueprint v2.0</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
