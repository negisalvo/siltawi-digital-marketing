import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Mail, Phone, MapPin, Send, HelpCircle, CheckCircle2, 
  Map, Navigation, Compass, Globe, Clock, ShieldCheck
} from 'lucide-react';
import { COMP_INFO } from '../data';

interface ContactProps {
  selectedServices: string[];
  onClearServices: () => void;
}

export default function Contact({ selectedServices, onClearServices }: ContactProps) {
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'General Inquiry',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Interactive Vector Map States
  const [mapZoom, setMapZoom] = useState(15);
  const [mapLayer, setMapLayer] = useState<'streets' | 'satellite'>('streets');
  const [activeOfficeLabel, setActiveOfficeLabel] = useState(true);

  // Sync selected blueprint items to message or state
  useEffect(() => {
    if (selectedServices.length > 0) {
      setFormData(prev => ({
        ...prev,
        service: 'Custom Strategic Blueprint Campaign',
        message: `Plan configured via Service Blueprint. Selected modules:\n- ${selectedServices.join('\n- ')}\n\nPlease provide a tactical proposal and campaign duration details.`
      }));
    }
  }, [selectedServices]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please enter Name, Email, and Phone number.");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API speed
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      onClearServices(); // reset parent blueprint list
      
      // Keep nice success screen
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: 'General Inquiry',
        message: ''
      });
    }, 1500);
  };

  return (
    <section id="contact" className="relative min-h-screen bg-transparent py-24 border-t border-white/10 overflow-hidden">
      
      {/* Background neon lights */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-mono font-bold tracking-widest text-sky-400 uppercase mb-3">
            Contact Us
          </h2>
          <h3 className="text-3xl sm:text-4xl font-sans font-extrabold text-white tracking-tight">
            Schedule a Strategic Consultation
          </h3>
          <p className="font-sans text-slate-450 mt-4 leading-relaxed">
            Ready to increase your brand presence and acquire leads? Put in your project scope below or call our Addis Ababa headquarters.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Column 1: Contact Form Panel */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 glass-card rounded-3xl relative">
              
              {/* Notice if blueprint is configured */}
              {selectedServices.length > 0 && (
                <div className="mb-6 p-4 bg-sky-500/15 border border-sky-505/30 text-sky-400 text-xs rounded-2xl flex items-start gap-3 animate-slideUp">
                  <ShieldCheck className="h-5 w-5 shrink-0 mt-0.5 text-sky-400" />
                  <div>
                    <h5 className="font-bold">Active Blueprint Active!</h5>
                    <p className="mt-1 leading-relaxed">
                      We loaded your <strong className="text-white">{selectedServices.length} planned items</strong> into the form below. Modify the details before submitting.
                    </p>
                    <button
                      type="button"
                      onClick={onClearServices}
                      className="text-[10px] font-mono text-slate-450 hover:text-white underline mt-1.5 uppercase font-bold"
                    >
                      Clear custom list
                    </button>
                  </div>
                </div>
              )}

              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-16 text-center space-y-4"
                  >
                    <div className="h-16 w-16 bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <h4 className="text-2xl font-sans font-extrabold text-white">Consultation Scope Received!</h4>
                    <p className="font-sans text-sm text-slate-400 max-w-md mx-auto leading-relaxed">
                      Thank you for contacting Siltawi. Kirubel and our senior lead strategists will analyze your online presence and call you back within 24 business hours.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-2.5 rounded-xl bg-slate-850 hover:bg-slate-800 text-xs font-bold uppercase tracking-wider text-white"
                    >
                      Draft another brief
                    </button>
                  </motion.div>
                ) : (
                  <form key="form" onSubmit={handleSubmit} className="space-y-6">
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xxs font-mono uppercase tracking-widest text-slate-400 mb-2 font-bold select-none">
                          Contact Name
                        </label>
                        <input
                          required
                          type="text"
                          name="name"
                          placeholder="e.g. Ermias Girma"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full p-3.5 bg-white/5 border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:ring-2 focus:ring-sky-500 placeholder-slate-500 font-sans focus:border-white/20 animate-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xxs font-mono uppercase tracking-widest text-slate-400 mb-2 font-bold select-none">
                          Email Address
                        </label>
                        <input
                          required
                          type="email"
                          name="email"
                          placeholder="e.g. ermias@company.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full p-3.5 bg-white/5 border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:ring-2 focus:ring-sky-500 placeholder-slate-500 font-sans focus:border-white/20 animate-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xxs font-mono uppercase tracking-widest text-slate-400 mb-2 font-bold select-none">
                          Phone Number
                        </label>
                        <input
                          required
                          type="text"
                          name="phone"
                          placeholder="e.g. +251 911 000 000"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full p-3.5 bg-white/5 border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:ring-2 focus:ring-sky-500 placeholder-slate-500 font-sans focus:border-white/20 animate-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xxs font-mono uppercase tracking-widest text-slate-400 mb-2 font-bold select-none">
                          Company Name (optional)
                        </label>
                        <input
                          type="text"
                          name="company"
                          placeholder="e.g. Girma Trade PLC"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full p-3.5 bg-white/5 border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:ring-2 focus:ring-sky-500 placeholder-slate-500 font-sans focus:border-white/20 animate-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xxs font-mono uppercase tracking-widest text-slate-400 mb-2 font-bold select-none">
                        Primary Service Area Needed
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full p-3.5 bg-white/5 border border-white/10 rounded-xl text-xs text-slate-350 focus:outline-none focus:ring-2 focus:ring-sky-500 font-sans focus:border-white/25 animate-none"
                      >
                        <option value="General Inquiry" className="bg-slate-900 text-slate-300">General Company Inquiry</option>
                        <option value="Digital Marketing Ads" className="bg-slate-900 text-slate-300">Digital Marketing Ads (Facebook / Google)</option>
                        <option value="Website Development" className="bg-slate-900 text-slate-300">Website Development (SPA / E-Commerce)</option>
                        <option value="Branding & Design" className="bg-slate-900 text-slate-300">Branding & Systematics Design</option>
                        <option value="SEO Campaign" className="bg-slate-900 text-slate-300">SEO Services / Google Map Indexing</option>
                        <option value="Custom Strategic Blueprint Campaign font-bold" className="bg-slate-900 text-slate-300">Custom Strategic Blueprint Campaign</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xxs font-mono uppercase tracking-widest text-slate-400 mb-2 font-bold select-none">
                        Project Scope Description & Details
                      </label>
                      <textarea
                        required
                        name="message"
                        placeholder="Tell us about your brand challenges, current monthly traffic, and expected conversion outcomes..."
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full h-36 p-3 bg-white/5 border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:ring-2 focus:ring-sky-500 placeholder-slate-500 font-sans leading-relaxed resize-none focus:border-white/20 animate-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      id="btn-submit-contact-form"
                      className="w-full flex items-center justify-center gap-2.5 bg-gradient-to-r from-sky-500 to-teal-550 text-white font-sans font-bold text-xs uppercase tracking-wider py-4 rounded-xl shadow-xl hover:shadow-sky-500/10 hover:scale-[1.01] transition-all disabled:opacity-50 cursor-pointer animate-none"
                    >
                      {isSubmitting ? (
                        <span>Analyzing Core Coordinates-</span>
                      ) : (
                        <>
                          <span>Submit Request Blueprint Brief</span>
                          <Send className="h-4 w-4 text-white" />
                        </>
                      )}
                    </button>

                  </form>
                )}
              </AnimatePresence>

            </div>
          </div>

          {/* Column 2: Maps and Coordinates Panel */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            
            {/* Interactive Vector Map Card */}
            <div className="p-6 glass-card rounded-3xl flex flex-col h-full relative overflow-hidden">
              
              <div className="flex items-center justify-between mb-4">
                <span className="text-xxs font-mono font-bold uppercase tracking-widest text-sky-400">
                  Office Locator GPS Portal
                </span>
                <div className="flex gap-1">
                  <button
                    onClick={() => setMapLayer('streets')}
                    className={`px-2 py-1 rounded text-[9px] font-mono uppercase tracking-wide transition-all ${
                      mapLayer === 'streets'
                        ? 'bg-sky-500 text-slate-1050 font-bold'
                        : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    Streets
                  </button>
                  <button
                    onClick={() => setMapLayer('satellite')}
                    className={`px-2 py-1 rounded text-[9px] font-mono uppercase tracking-wide transition-all ${
                      mapLayer === 'satellite'
                        ? 'bg-sky-500 text-slate-1050 font-bold'
                        : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    Satel.
                  </button>
                </div>
              </div>

              {/* Styled Interactive Vector Map Section */}
              <div className="relative h-60 w-full rounded-2xl bg-white/5 border border-white/10 overflow-hidden flex items-center justify-center select-none">
                
                {/* Simulated Street or Satellite background matrix */}
                {mapLayer === 'streets' ? (
                  <div className="absolute inset-0 bg-slate-950 opacity-90 p-4 transition-all overflow-hidden">
                    {/* Simulated vector roads */}
                    <div className="absolute top-24 left-0 w-full h-8 bg-slate-900/60 border-t border-b border-white/10 rotate-2 flex items-center justify-center font-mono text-[9px] text-slate-500 uppercase tracking-widest">
                      Bole Road (Addis Ababa, ET)
                    </div>
                    <div className="absolute top-0 left-1/3 w-6 h-full bg-slate-900/40 border-l border-r border-white/5 -rotate-12" />
                    <div className="absolute top-1/2 left-2/3 w-5 h-full bg-slate-900/40 border-l border-r border-white/5 rotate-45" />
                    
                    {/* Nearby hot spots */}
                    <div className="absolute top-8 right-6 text-xxs font-sans text-slate-600 font-medium">Bole Medhane Alem Cathedral</div>
                    <div className="absolute bottom-6 left-6 text-xxs font-sans text-slate-600 font-medium">Bole International Airport Area</div>
                    <div className="absolute bottom-16 right-10 text-xxs font-sans text-slate-600 font-medium">Olympia Crossing</div>
                  </div>
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-teal-950/15 to-slate-950 opacity-95 transition-all p-4">
                    {/* Satellite elements */}
                    <div className="absolute top-24 left-0 w-full h-8 bg-black/60 border-t border-b border-white/5 rotate-2 flex items-center justify-center font-mono text-[9px] text-sky-400/50 tracking-widest">
                      Bole Road Grid Lines
                    </div>
                    <div className="absolute inset-4 rounded-xl border border-sky-450/15 border-dashed animate-pulse" />
                    <div className="absolute top-6 left-1/4 text-[8px] font-mono text-sky-450/60 uppercase">E 38° 47' | N 9° 01'</div>
                  </div>
                )}

                {/* Scale Pinpoints based on zoom */}
                <div 
                  style={{ transform: `scale(${mapZoom / 15})` }}
                  className="relative z-10 transition-transform duration-300"
                >
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    onClick={() => setActiveOfficeLabel(!activeOfficeLabel)}
                    className="h-12 w-12 rounded-full bg-sky-500/25 border border-sky-450/70 flex items-center justify-center cursor-pointer hover:bg-sky-500/40"
                  >
                    <MapPin className="h-6 w-6 text-sky-355" />
                  </motion.div>
                </div>

                {/* Office tag overlay */}
                {activeOfficeLabel && (
                  <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-[#0f172a]/90 border border-sky-500/45 p-2 rounded-lg pointer-events-auto text-center shadow-lg z-20 backdrop-blur-sm">
                    <span className="block font-sans text-xxs text-white font-bold uppercase tracking-wide">
                      Wegagen Bank Building
                    </span>
                    <span className="block font-mono text-[9px] text-sky-400 uppercase mt-0.5 font-bold">
                      Siltawi HQ - 4th Floor
                    </span>
                  </div>
                )}

                {/* Bottom coordinates badge */}
                <span className="absolute bottom-3 left-4 font-mono text-[8px] text-slate-500 uppercase tracking-widest">
                  Addis Ababa, Ethiopia | Zoom: {mapZoom}x
                </span>
                
              </div>

              {/* Map controls panel */}
              <div className="flex justify-between items-center mt-3 pt-2 border-t border-white/10">
                <span className="text-xxs font-mono text-slate-450">
                  Dynamic Zoom Level
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setMapZoom(Math.max(10, mapZoom - 1))}
                    className="h-6 w-6 rounded bg-white/5 border border-white/10 text-slate-400 hover:text-white flex items-center justify-center font-bold text-xs"
                    title="Zoom Out"
                  >
                    -
                  </button>
                  <button
                    onClick={() => setMapZoom(15)}
                    className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-slate-400 hover:text-white uppercase"
                    title="Reset Map"
                  >
                    Reset
                  </button>
                  <button
                    onClick={() => setMapZoom(Math.min(20, mapZoom + 1))}
                    className="h-6 w-6 rounded bg-white/5 border border-white/10 text-slate-400 hover:text-white flex items-center justify-center font-bold text-xs"
                    title="Zoom In"
                  >
                    +
                  </button>
                </div>
              </div>

              <div id="office-physical-address" className="mt-5 space-y-4 text-left">
                <div className="flex items-start gap-3 text-xs">
                  <MapPin className="h-4.5 w-4.5 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-sans">Physical Headquarters</strong>
                    <span className="text-slate-400 block font-sans mt-0.5 leading-relaxed">
                      {COMP_INFO.fullAddress}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs">
                  <Navigation className="h-4.5 w-4.5 text-teal-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-sans">Navigation Guide</strong>
                    <span className="text-slate-400 block font-sans mt-0.5 leading-relaxed">
                      Located right on Bole Road. Just a 5-minute drive from Bole International Airport.
                    </span>
                  </div>
                </div>
              </div>

              {/* Static anchor to real Google Maps index */}
              <div className="mt-auto pt-6 text-center">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=Wegagen+Bank+Bole+Addis+Ababa`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono font-bold text-sky-400 hover:text-white uppercase tracking-wider"
                >
                  <Compass className="h-4 w-4 text-sky-400 animate-spin" />
                  Launch External Google Maps Navigation
                </a>
              </div>

            </div>

            {/* Structured Contact info parameters card */}
            <div className="p-6 glass-card rounded-3xl text-left space-y-4">
              <span className="text-xxs font-mono font-bold uppercase tracking-widest text-slate-400 block mb-2">
                Rapid Channels
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href={`mailto:${COMP_INFO.email}`}
                  className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all flex flex-col gap-1 text-left"
                >
                  <Mail className="h-4 w-4 text-sky-400" />
                  <span className="text-xxs font-sans text-slate-400 font-bold block mt-1">Send Email</span>
                  <span className="text-xs font-sans text-white font-semibold font-mono block">
                    {COMP_INFO.email}
                  </span>
                </a>

                <a
                  href={`tel:${COMP_INFO.phone}`}
                  className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all flex flex-col gap-1 text-left"
                >
                  <Phone className="h-4 w-4 text-teal-400" />
                  <span className="text-xxs font-sans text-slate-400 font-bold block mt-1">Direct Calling</span>
                  <span className="text-xs font-sans text-white font-semibold font-mono block">
                    {COMP_INFO.phone}
                  </span>
                </a>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
                <Clock className="h-5 w-5 text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-sans font-bold text-xs text-white">Addis Ababa Local Corporate Hours</h5>
                  <p className="font-sans text-xxs text-slate-400 mt-1 leading-relaxed">
                    Monday - Friday: 8:30 AM - 5:30 PM <br />
                    Saturday: 9:00 AM - 1:00 PM (EAT)
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
