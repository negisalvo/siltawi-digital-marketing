import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Megaphone, Globe, Paintbrush, Video, Search, TrendingUp, BarChart2, Settings, Play } from 'lucide-react';
import { COMP_INFO } from '../data';

export default function Hero() {
  const [selectedCampaign, setSelectedCampaign] = useState(0);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimized, setOptimized] = useState(false);

  const campaigns = [
    { name: "Zemen Retail Ads", baseline: { traffic: "1,240", leads: "42", cr: "1.4%" }, optimized: { traffic: "4,820", leads: "216", cr: "4.5%" } },
    { name: "EcoCafé Rebranding", baseline: { traffic: "850", leads: "18", cr: "1.1%" }, optimized: { traffic: "3,110", leads: "145", cr: "4.7%" } },
    { name: "Bole Luxury SEO", baseline: { traffic: "410", leads: "12", cr: "0.9%" }, optimized: { traffic: "1,950", leads: "98", cr: "5.0%" } }
  ];

  const handleRunOptimization = () => {
    setIsOptimizing(true);
    setTimeout(() => {
      setIsOptimizing(false);
      setOptimized(true);
    }, 1500);
  };

  const handleCampaignChange = (idx: number) => {
    setSelectedCampaign(idx);
    setOptimized(false);
    setIsOptimizing(false);
  };

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
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-white tracking-tight leading-none mb-6"
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

          {/* Right Image/Feature Display Column - Interactive ROI Dashboard Simulation */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative p-6 sm:p-8 glass-card rounded-3xl overflow-hidden border border-white/5 shadow-2xl"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/5 rounded-full blur-2xl" />
              
              <div className="flex items-center justify-between mb-5">
                <span className="text-[10px] font-mono font-black text-sky-400 uppercase tracking-widest flex items-center gap-1.5">
                  <BarChart2 className="h-3.5 w-3.5 text-sky-400" /> Interactive Campaign Sandbox
                </span>
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[9px] font-mono text-emerald-400 font-bold uppercase tracking-wide">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" /> Live Simulator
                </span>
              </div>

              {/* Campaign selector tabs */}
              <div className="grid grid-cols-3 gap-1.5 mb-6">
                {campaigns.map((camp, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleCampaignChange(idx)}
                    className={`px-2 py-2 rounded-xl text-[9px] font-mono font-bold uppercase tracking-wider transition-all border ${
                      selectedCampaign === idx
                        ? 'bg-sky-500/10 border-sky-500/50 text-white'
                        : 'bg-white/5 border-white/5 text-slate-400 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {camp.name.split(' ')[0]}
                  </button>
                ))}
              </div>

              {/* Dashboard display */}
              <div className="bg-[#020617]/80 rounded-2xl p-5 border border-white/5 space-y-5 text-left">
                <div className="flex justify-between items-center pb-3 border-b border-white/5">
                  <span className="text-[11px] font-sans font-bold text-slate-300">
                    {campaigns[selectedCampaign].name}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500 uppercase">
                    Status: {optimized ? 'Optimized' : 'Baseline'}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <span className="block text-[9px] font-mono text-slate-500 uppercase tracking-wider">Mo. Traffic</span>
                    <motion.span
                      key={selectedCampaign + '-' + optimized}
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="block text-base font-mono font-black text-white mt-1"
                    >
                      {optimized ? campaigns[selectedCampaign].optimized.traffic : campaigns[selectedCampaign].baseline.traffic}
                    </motion.span>
                  </div>
                  <div>
                    <span className="block text-[9px] font-mono text-slate-500 uppercase tracking-wider">Leads Gain</span>
                    <motion.span
                      key={selectedCampaign + '-' + optimized + '-leads'}
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="block text-base font-mono font-black text-teal-400 mt-1"
                    >
                      {optimized ? campaigns[selectedCampaign].optimized.leads : campaigns[selectedCampaign].baseline.leads}
                    </motion.span>
                  </div>
                  <div>
                    <span className="block text-[9px] font-mono text-slate-500 uppercase tracking-wider">Conv. Rate</span>
                    <motion.span
                      key={selectedCampaign + '-' + optimized + '-cr'}
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="block text-base font-mono font-black text-indigo-400 mt-1"
                    >
                      {optimized ? campaigns[selectedCampaign].optimized.cr : campaigns[selectedCampaign].baseline.cr}
                    </motion.span>
                  </div>
                </div>

                {/* SVG Mini Performance Vector Graph */}
                <div className="h-16 w-full bg-[#080d1e] rounded-xl border border-white/5 relative overflow-hidden flex items-end">
                  <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                    {/* Simulated curve */}
                    <motion.path
                      key={selectedCampaign + '-' + optimized + '-curve'}
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.8 }}
                      d={optimized ? "M0 35 Q 25 32, 50 12 T 100 4" : "M0 35 Q 35 34, 70 32 T 100 28"}
                      fill="none"
                      stroke={optimized ? "#38bdf8" : "#64748b"}
                      strokeWidth="2"
                    />
                    {/* Area under curve fill */}
                    <motion.path
                      key={selectedCampaign + '-' + optimized + '-area'}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.08 }}
                      d={optimized ? "M0 35 Q 25 32, 50 12 T 100 4 L 100 40 L 0 40 Z" : "M0 35 Q 35 34, 70 32 T 100 28 L 100 40 L 0 40 Z"}
                      fill={optimized ? "#38bdf8" : "#64748b"}
                    />
                  </svg>
                  <span className="absolute bottom-1.5 right-2 text-[8px] font-mono text-slate-500 uppercase tracking-wider">
                    {optimized ? "+320% ROI Trend" : "Stagnant Traffic"}
                  </span>
                </div>
              </div>

              {/* Action controller */}
              <div className="mt-5 space-y-3">
                {isOptimizing ? (
                  <div className="w-full bg-[#020617] rounded-xl p-3 border border-white/5 space-y-2">
                    <div className="flex justify-between items-center text-[9px] font-mono text-sky-400 uppercase tracking-wider">
                      <span className="flex items-center gap-1.5">
                        <Settings className="h-3 w-3 animate-spin" /> Customizing SEO Metrics...
                      </span>
                      <span>65%</span>
                    </div>
                    <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-sky-500 rounded-full animate-pulse" style={{ width: '65%' }} />
                    </div>
                  </div>
                ) : !optimized ? (
                  <button
                    onClick={handleRunOptimization}
                    className="w-full py-3.5 rounded-xl bg-sky-500 hover:bg-sky-450 text-slate-950 font-sans font-bold text-xs uppercase tracking-wider transition-all hover:scale-[1.01] flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-sky-500/10"
                  >
                    <Play className="h-3.5 w-3.5 fill-slate-950 text-slate-950" />
                    Simulate Campaign Optimization
                  </button>
                ) : (
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleCampaignChange(selectedCampaign)}
                      className="flex-1 py-3.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white text-[10px] font-mono uppercase tracking-wider transition-all"
                    >
                      Reset Baseline
                    </button>
                    <a
                      href="#contact"
                      className="flex-1 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-teal-500 text-white font-sans font-bold text-[10px] uppercase tracking-wider transition-all text-center flex items-center justify-center gap-1"
                    >
                      Lock In Strategy <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                )}
              </div>

              <div id="guarantee-box" className="mt-5 pt-4 border-t border-white/5 text-center">
                <p className="font-sans text-[10px] text-slate-500 italic">
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
