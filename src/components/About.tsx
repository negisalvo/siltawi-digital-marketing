import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Lightbulb, Palette, ShieldCheck, Award, TrendingUp, GraduationCap,
  Store, Zap, Utensils, BookOpen, Building2, Heart, Activity, ShoppingCart,
  CheckCircle2, Smile, Users, Calendar, Target, Eye, Compass
} from 'lucide-react';
import { COMP_INFO, CORE_VALUES, TARGET_CLIENTS, COMPANY_STATS } from '../data';

// Helper Map to map key icon strings to Lucide icon components
const iconMap: Record<string, React.ComponentType<any>> = {
  Lightbulb, Palette, ShieldCheck, Award, TrendingUp, GraduationCap,
  Store, Zap, Utensils, BookOpen, Building2, Heart, Activity, ShoppingCart,
  CheckCircle2, Smile, Users, Calendar
};

export default function About() {
  const [selectedStat, setSelectedStat] = useState<string | null>(null);

  // Stagger wrapper options
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="relative min-h-screen bg-transparent py-24 border-t border-white/10 overflow-hidden">
      
      {/* Visual background details */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-mono font-bold tracking-widest text-sky-400 uppercase mb-3">
            About Siltawi
          </h2>
          <h3 className="text-3xl sm:text-4xl font-display font-black text-white tracking-tight">
            Strategic Growth Partners Built on Innovation
          </h3>
          <p className="font-sans text-slate-400 mt-4 leading-relaxed">
            Since our founding in 2023, we've designed tactical branding blueprints and executed targeted promotional channels to turn regional traffic into continuous business clients.
          </p>
        </div>

        {/* Brand Overview & Mission/Vision Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          
          <div className="space-y-6">
            <h4 className="font-display font-bold text-2xl text-white">
              Who We Are
            </h4>
            <div id="overview-content" className="font-sans text-slate-300 leading-relaxed space-y-4">
              <p>
                <strong className="text-white">Siltawi Digital Marketing</strong> is an industry-leading digital marketing & creative agency based in the heart of Addis Ababa, Ethiopia. We believe the word <em className="text-sky-400 italic font-medium">"Siltawi"</em> (ስልታዊ) — which stands for <strong className="text-white">Strategic</strong> — commands our absolute framework guidelines.
              </p>
              <p>
                We do not believe in broad, guessing-style, unguided promotions. We engineer fully measurable advertising models that bridge product features with actual buyers, utilizing search engine optimizations, speed-optimized React profiles, and programmatic visual advertisements.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md">
                <span className="block text-3xl font-mono font-bold text-sky-400">2023</span>
                <span className="text-xs text-slate-450 uppercase tracking-wider block mt-1 font-semibold">Founded In</span>
              </div>
              <div className="p-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md">
                <span className="block text-3xl font-mono font-bold text-teal-400">Addis Ababa</span>
                <span className="text-xs text-slate-450 uppercase tracking-wider block mt-1 font-semibold">HQ Location</span>
              </div>
            </div>
          </div>

          {/* Mission and Vision cards */}
          <div className="grid grid-cols-1 gap-6">
            
            {/* Mission Box */}
            <motion.div
              whileHover={{ y: -4 }}
              className="p-8 rounded-3xl glass-card relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 h-32 w-32 bg-sky-500/5 rounded-full blur-2xl group-hover:bg-sky-500/10 transition-colors" />
              <div className="flex items-start gap-5">
                <div className="h-12 w-12 rounded-2xl bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
                  <Target className="h-6 w-6" />
                </div>
                <div>
                  <h5 className="font-sans font-bold text-lg text-white mb-2">Our Mission</h5>
                  <p className="font-sans text-sm text-slate-350 leading-relaxed">
                    {COMP_INFO.mission}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Vision Box */}
            <motion.div
              whileHover={{ y: -4 }}
              className="p-8 rounded-3xl glass-card relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 h-32 w-32 bg-teal-500/5 rounded-full blur-2xl group-hover:bg-teal-500/10 transition-colors" />
              <div className="flex items-start gap-5">
                <div className="h-12 w-12 rounded-2xl bg-teal-500/10 border border-teal-500/20 text-teal-400 flex items-center justify-center shrink-0">
                  <Eye className="h-6 w-6" />
                </div>
                <div>
                  <h5 className="font-sans font-bold text-lg text-white mb-2">Our Vision</h5>
                  <p className="font-sans text-sm text-slate-350 leading-relaxed">
                    {COMP_INFO.vision}
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Animated Statistics Banner (Bonus Feature) */}
        <div id="stats-banner" className="mb-24">
          <div className="p-8 sm:p-12 glass-card rounded-3xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-sky-500/5 to-teal-500/5" />
            
            <div className="relative z-10 text-center mb-10">
              <span className="text-xs font-mono font-bold tracking-widest text-sky-400 uppercase">
                Agency Traction & Statistics
              </span>
              <h4 className="text-xl sm:text-2xl font-sans font-bold text-white mt-2">
                Proven Performance in Numbers 
              </h4>
            </div>

            <div className="relative z-10 grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
              {COMPANY_STATS.map((stat) => {
                const StatIcon = iconMap[stat.iconName] || CheckCircle2;
                const isSelected = selectedStat === stat.id;
                
                return (
                  <motion.div
                    key={stat.id}
                    layout
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setSelectedStat(isSelected ? null : stat.id)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-white/20 border-sky-400/50 shadow-md shadow-sky-400/5'
                        : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                    }`}
                  >
                    <div className="flex justify-center mb-3">
                      <div className="h-8 w-8 rounded-lg bg-slate-950 text-sky-400 flex items-center justify-center">
                        <StatIcon className="h-4.5 w-4.5" />
                      </div>
                    </div>
                    <span className="block text-2xl sm:text-3xl font-mono font-black text-white tracking-tight">
                      {stat.value}
                    </span>
                    <span className="block text-xxs sm:text-xs font-sans text-slate-400 mt-1 uppercase font-medium tracking-wide">
                      {stat.label}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            <div className="text-center mt-6">
              <p className="text-xs font-mono text-slate-500">
                Click on any card to toggle interactive highlight tracker.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h4 className="text-2xl font-sans font-extrabold text-white">
              Our Core Values
            </h4>
            <p className="font-sans text-sm text-slate-400 mt-2">
              The fundamental standards that govern how our team works together and services our clients.
            </p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {CORE_VALUES.map((val, idx) => {
              const ValueIcon = iconMap[val.iconName] || Compass;
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                  className="p-6 rounded-2xl glass-card glass-card-hover group"
                >
                  <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-sky-500/5 border border-sky-500/10 text-sky-400 group-hover:bg-sky-400 group-hover:text-slate-950 transition-all mb-4">
                    <ValueIcon className="h-5 w-5" />
                  </div>
                  <h5 className="font-sans font-bold text-base text-white mb-2 group-hover:text-sky-450">
                    {val.name}
                  </h5>
                  <p className="font-sans text-xs text-slate-400 leading-relaxed">
                    {val.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Who We Serve - Target Clients Section */}
        <div id="target-clients-container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h4 className="text-2xl font-sans font-extrabold text-white">
              Target Clients We Elevate
            </h4>
            <p className="font-sans text-sm text-slate-400 mt-2">
              Our growth systems are custom-calibrated for major sectors across Ethiopia.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {TARGET_CLIENTS.map((client, idx) => {
              const ClientIcon = iconMap[client.iconName] || Store;
              return (
                <div
                  key={idx}
                  id={`client-type-${idx}`}
                  className="p-5 rounded-2xl glass-card glass-card-hover"
                >
                  <div className="h-9 w-9 rounded-xl bg-teal-500/5 text-teal-400 flex items-center justify-center mb-3">
                    <ClientIcon className="h-4.5 w-4.5" />
                  </div>
                  <h5 className="font-sans font-bold text-sm text-white">{client.name}</h5>
                  <p className="font-sans text-[11px] text-slate-500 leading-relaxed mt-1">{client.description}</p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
