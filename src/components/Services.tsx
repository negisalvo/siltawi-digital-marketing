import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Megaphone, Globe, Paintbrush, Video, Search, CheckCircle, ArrowRight,
  Calculator, Clock, Calendar, CheckSquare, Sparkles, HelpCircle, 
  Users, DollarSign, MousePointerClick, BarChart, HeartHandshake
} from 'lucide-react';
import { SERVICES, WHY_CHOOSE_US } from '../data';

const iconMap: Record<string, React.ComponentType<any>> = {
  Megaphone, Globe, Paintbrush, Video, Search,
  Users, DollarSign, MousePointerClick, BarChart, HeartHandshake, Sparkles
};

interface ServicesProps {
  onSelectServices: (selected: string[]) => void;
}

export default function Services({ onSelectServices }: ServicesProps) {
  const [activeCategory, setActiveCategory] = useState<string>(SERVICES[0].id);
  const [selectedQuoteItems, setSelectedQuoteItems] = useState<string[]>([]);
  const [showPlanSuccess, setShowPlanSuccess] = useState(false);

  // Manage selection of items in the Custom Blueprint Calculator
  const handleToggleItem = (itemTitle: string) => {
    if (selectedQuoteItems.includes(itemTitle)) {
      setSelectedQuoteItems(selectedQuoteItems.filter(i => i !== itemTitle));
    } else {
      setSelectedQuoteItems([...selectedQuoteItems, itemTitle]);
    }
    setShowPlanSuccess(false);
  };

  const handleInjectToContact = () => {
    if (selectedQuoteItems.length === 0) return;
    
    // Send selected items to parent component (App.tsx)
    onSelectServices(selectedQuoteItems);
    setShowPlanSuccess(true);

    // Scroll down to contact section
    setTimeout(() => {
      const contactSec = document.querySelector('#contact');
      if (contactSec) {
        const offsetHeader = 84;
        const elementPosition = contactSec.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offsetHeader;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 450);
  };

  // Compute stats for custom blueprint
  const totalServicesCount = selectedQuoteItems.length;
  const estimatedWeeks = Math.max(2, totalServicesCount * 1.5);
  const selectedPillars = SERVICES.filter(cat => 
    cat.items.some(item => selectedQuoteItems.includes(item))
  ).map(cat => cat.title);

  return (
    <section id="services" className="relative min-h-screen bg-transparent py-24 border-t border-white/10 overflow-hidden">
      
      {/* Glow lights */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-mono font-bold tracking-widest text-sky-400 uppercase mb-3">
            What We Do
          </h2>
          <h3 className="text-3xl sm:text-4xl font-sans font-extrabold text-white tracking-tight">
            High-Performance Digital Channels
          </h3>
          <p className="font-sans text-slate-450 mt-4 leading-relaxed">
            We operate five specialized corporate hubs to address the entire lifecycle of consumer engagement — from brand design to technical search metrics.
          </p>
        </div>

        {/* Tab Header for Pillar Service Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {SERVICES.map((pillar) => {
            const PillarIcon = iconMap[pillar.iconName] || Globe;
            const isActive = activeCategory === pillar.id;
            return (
              <button
                key={pillar.id}
                id={`btn-pillar-${pillar.id}`}
                onClick={() => setActiveCategory(pillar.id)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-sky-500 to-teal-550 text-white shadow-lg shadow-sky-500/10 scale-105'
                    : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/15 hover:border-white/20'
                }`}
              >
                <PillarIcon className="h-4.5 w-4.5" />
                {pillar.title}
              </button>
            );
          })}
        </div>

        {/* Dynamic Pillar Tab Content Panel */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 mb-24">
          <AnimatePresence mode="wait">
            {SERVICES.map((pillar) => {
              if (pillar.id !== activeCategory) return null;
              const PillarIcon = iconMap[pillar.iconName] || Globe;
              return (
                <motion.div
                  key={pillar.id}
                  id={`pillar-content-${pillar.id}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                >
                  <div className="lg:col-span-5">
                    <div className="h-12 w-12 rounded-2xl bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center mb-6">
                      <PillarIcon className="h-6 w-6" />
                    </div>
                    <h4 className="text-xl sm:text-2xl font-sans font-bold text-white mb-4">
                      {pillar.title}
                    </h4>
                    <p className="font-sans text-sm text-slate-350 leading-relaxed mb-6">
                      {pillar.description}
                    </p>
                    <div className="p-5 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md">
                      <h5 className="font-sans font-bold text-xs text-sky-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                        <Sparkles className="h-3.5 w-3.5" /> Specialization Benefit
                      </h5>
                      <p className="font-sans text-xxs sm:text-xs text-slate-450 leading-relaxed">
                        Every implementation module integrates unified dashboards so you monitor lead conversion pipelines in real time.
                      </p>
                    </div>
                  </div>

                  <div className="lg:col-span-1 hidden lg:block" />

                  <div className="lg:col-span-6 space-y-3">
                    <span className="block text-slate-500 text-xxs font-mono uppercase font-bold tracking-widest pl-1 mb-2">
                      Interactive Sub-Services
                    </span>
                    {pillar.items.map((subItem, idx) => {
                      const isChecked = selectedQuoteItems.includes(subItem);
                      return (
                        <div
                          key={idx}
                          id={`item-${pillar.id}-${idx}`}
                          onClick={() => handleToggleItem(subItem)}
                          className={`flex items-center justify-between p-4 rounded-xl border transition-all cursor-pointer group ${
                            isChecked
                              ? 'bg-sky-500/20 border-sky-500 text-white'
                              : 'bg-white/5 border-white/10 hover:border-white/20 text-slate-300 hover:text-white'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`h-5 w-5 rounded-md flex items-center justify-center border transition-all ${
                              isChecked 
                                ? 'bg-sky-500 border-sky-500 text-slate-950' 
                                : 'border-slate-800 bg-slate-900 group-hover:border-slate-600'
                            }`}>
                              {isChecked && <CheckCircle className="h-3.5 w-3.5 shrink-0" />}
                            </div>
                            <span className="text-sm font-semibold font-sans">{subItem}</span>
                          </div>
                          <span className={`text-[10px] font-mono px-2.5 py-1 rounded-full uppercase font-bold tracking-wide transition-all ${
                            isChecked 
                              ? 'bg-sky-500/20 text-sky-400 border border-sky-500/35' 
                              : 'bg-slate-900 text-slate-500 group-hover:bg-slate-850'
                          }`}>
                            {isChecked ? "Plan Active" : "Add to Blueprint"}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Dynamic Blueprint Calculator Drawer */}
        {totalServicesCount > 0 && (
          <div className="glass-card rounded-3xl border-sky-500/30 p-6 sm:p-8 mb-24 relative overflow-hidden animate-slideUp">
            <div className="absolute top-0 right-0 w-48 h-48 bg-sky-500/5 rounded-full blur-2xl pointer-events-none" />
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              
              <div className="space-y-2">
                <span className="inline-flex items-center gap-1 bg-sky-500/10 border border-sky-550/20 text-sky-400 font-mono text-xxs font-bold px-2 py-1 rounded-full uppercase tracking-wider">
                  <Calculator className="h-3 w-3" /> Interactive Blueprint Builder
                </span>
                <h4 className="text-xl font-bold font-sans text-white">
                  You selected <span className="text-sky-400">{totalServicesCount}</span> tactical services
                </h4>
                <p className="font-sans text-xs text-slate-400">
                  Target pillars: <span className="text-slate-300 font-semibold">{selectedPillars.join(", ")}</span>
                </p>
                <div className="flex items-center gap-4 text-xs font-mono text-slate-500 mt-2">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5 text-sky-400" />
                    Est. Timeline: <strong className="text-white">{estimatedWeeks} weeks</strong>
                  </span>
                  <span className="h-3 w-px bg-slate-800" />
                  <span className="flex items-center gap-1">
                    <CheckSquare className="h-3.5 w-3.5 text-sky-400" />
                    Sprint Cycles: <strong className="text-white">{Math.ceil(totalServicesCount / 2)} Cycles</strong>
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
                <button
                  id="btn-clear-calculator"
                  onClick={() => setSelectedQuoteItems([])}
                  className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-slate-350 hover:text-white text-xs font-semibold uppercase tracking-wider transition-all bg-transparent"
                >
                  Reset List
                </button>
                <button
                  id="btn-send-calculator-config"
                  onClick={handleInjectToContact}
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-teal-500 text-white text-xs font-bold uppercase tracking-wider shadow-lg hover:from-sky-450 hover:to-teal-450 transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
                >
                  Inject Selection & Contact Form
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

            </div>

            {showPlanSuccess && (
              <div className="mt-4 p-3 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs rounded-xl font-sans text-center animate-fadeIn">
                Success! Services have been configured. Scroll down to Contact Form to submit!
              </div>
            )}
          </div>
        )}

        {/* Why Choose Siltawi Subgrid */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h4 className="text-2xl font-sans font-extrabold text-white">
              Why Strategic Businesses Choose Us
            </h4>
            <p className="font-sans text-sm text-slate-400 mt-2">
              Ditching general, unguided marketing methods. Here are our unique brand multipliers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE_US.map((why, idx) => {
              const WhyIcon = iconMap[why.iconName] || HelpCircle;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl glass-card glass-card-hover group"
                >
                  <div className="h-10 w-10 rounded-xl bg-slate-950 border border-slate-850 text-sky-400 group-hover:text-teal-400 flex items-center justify-center mb-4 transition-colors">
                    <WhyIcon className="h-5 w-5" />
                  </div>
                  <h5 className="font-sans font-bold text-sm text-white mb-2">{why.title}</h5>
                  <p className="font-sans text-xs text-slate-400 leading-relaxed">{why.description}</p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
