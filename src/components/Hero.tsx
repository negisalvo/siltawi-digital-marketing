import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Megaphone, Globe, Paintbrush, Video, Search } from 'lucide-react';
import { COMP_INFO } from '../data';

export default function Hero() {
  const highlightCards = [
    { text: "Digital Marketing", color: "from-sky-500/20 to-sky-400/5", icon: Megaphone, desc: "Lead Multi-Channel Ads" },
    { text: "Website Development", color: "from-teal-500/20 to-teal-400/5", icon: Globe, desc: "Frictionless Checkout UX" },
    { text: "Branding & Design", color: "from-indigo-500/20 to-indigo-400/5", icon: Paintbrush, desc: "Aesthetic Identity Marks" },
    { text: "Content Creation", color: "from-purple-500/20 to-purple-400/5", icon: Video, desc: "Audio-Visual Capture" },
    { text: "SEO Services", color: "from-emerald-500/20 to-emerald-400/5", icon: Search, desc: "Organic Search Supremacy" },
  ];

  const handleScrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      const offsetHeader = 84;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offsetHeader;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleScrollToServices = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const servicesSection = document.querySelector('#services');
    if (servicesSection) {
      const offsetHeader = 84;
      const elementPosition = servicesSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offsetHeader;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen bg-transparent pt-28 pb-16 md:pb-24 flex items-center justify-center overflow-hidden"
    >
      {/* Dynamic Digital Mesh Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-75" />

      {/* Radiant Glow Lights */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Copy Section */}
          <div className="lg:col-span-7 flex flex-col text-left">
            
            {/* Tagline Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex self-start items-center gap-2 px-3.5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sky-400 text-xs font-mono font-semibold tracking-wide mb-6 uppercase"
            >
              <Sparkles className="h-3.5 w-3.5 text-sky-400 animate-spin" />
              Strategic Digital Agency in Addis Ababa
            </motion.div>

            {/* Strategic Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-sans font-extrabold text-white tracking-tight leading-none mb-6"
            >
              Strategic Marketing <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-teal-400 to-indigo-400">
                To Dominate Your Market
              </span>
            </motion.h1>

            {/* Structured Pitch Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed mb-10 max-w-2xl"
            >
              Founded in 2023, <strong className="text-white">Siltawi Digital Marketing</strong> is an elite creative and performance-marketing agency. We empower startups, small businesses, and established companies to multiply conversions, boost organic authority, and capture premium leads.
            </motion.p>

            {/* CTAs Trigger Elements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <button
                id="hero-go-contact"
                onClick={handleScrollToContact}
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-sky-500 via-sky-400 to-teal-400 text-white font-sans font-semibold px-8 py-4 rounded-2xl shadow-xl hover:shadow-sky-500/25 transition-all hover:scale-[1.02] cursor-pointer"
              >
                Boost Your Online Presence
                <ArrowRight className="h-4.5 w-4.5 text-white animate-bounce-horizontal" />
              </button>
              <button
                id="hero-go-services"
                onClick={handleScrollToServices}
                className="inline-flex items-center justify-center bg-white/10 border border-white/20 text-slate-200 hover:text-white font-sans font-semibold px-8 py-4 rounded-2xl transition-all hover:bg-white/20"
              >
                View Services
              </button>
            </motion.div>

            {/* Quick trust metrics */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-slate-900 pt-8"
            >
              <div>
                <span className="block text-2xl font-mono font-bold text-sky-400">95%</span>
                <span className="text-xs font-sans text-slate-500 uppercase tracking-widest">Satisfaction Rate</span>
              </div>
              <div className="h-8 w-px bg-slate-900 hidden sm:block" />
              <div>
                <span className="block text-2xl font-mono font-bold text-teal-400">100+</span>
                <span className="text-xs font-sans text-slate-500 uppercase tracking-widest">Projects Finished</span>
              </div>
              <div className="h-8 w-px bg-slate-900 hidden sm:block" />
              <div>
                <span className="block text-2xl font-mono font-bold text-indigo-400">Active Growth</span>
                <span className="text-xs font-sans text-slate-500 uppercase tracking-widest">Since 2023</span>
              </div>
            </motion.div>

          </div>

          {/* Right Image/Feature Display Column */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative p-6 sm:p-8 glass-card rounded-3xl overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-2xl" />
              
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-widest">Our Strategic Verticals</span>
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              </div>

              <div className="space-y-4">
                {highlightCards.map((card, i) => {
                  const CardIcon = card.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                      className="flex items-center gap-4 p-3.5 bg-white/5 border border-white/10 rounded-2xl group transition-all hover:bg-white/10 hover:border-white/20 hover:translate-x-1"
                    >
                      <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-slate-950 border border-slate-850 text-sky-400 group-hover:text-teal-400 transition-colors">
                        <CardIcon className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-sans font-semibold text-sm text-white group-hover:text-sky-400 transition-colors">
                          {card.text}
                        </h4>
                        <p className="text-xs font-sans text-slate-400 mt-0.5">
                          {card.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <div id="guarantee-box" className="mt-6 pt-5 border-t border-slate-800/80 text-center">
                <p className="font-sans text-xs text-slate-450 italic">
                  "Siltawi" implies "Strategic" in Amharic — Built on results.
                </p>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
