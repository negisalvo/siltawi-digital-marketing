import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Filter, ExternalLink, X, PlusCircle, CheckCircle, 
  Sparkles, Calendar, User, Eye, ArrowRight, Lightbulb
} from 'lucide-react';
import { PROJECTS } from '../data';
import { Project } from '../types';

export default function Portfolio() {
  const [filter, setFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Categories list
  const categories = [
    { label: 'All Projects', id: 'all' },
    { label: 'Digital Ads', id: 'digital-marketing' },
    { label: 'Web Dev', id: 'web-dev' },
    { label: 'Branding', id: 'branding' },
    { label: 'Content', id: 'content-creation' },
    { label: 'SEO Campaign', id: 'seo' }
  ];

  // Filter projects accordingly
  const filteredProjects = filter === 'all' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="relative min-h-screen bg-transparent py-24 border-t border-white/10 overflow-hidden">
      
      {/* Background glow details */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-indigo-505/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-sky-505/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-mono font-bold tracking-widest text-sky-400 uppercase mb-3">
            Our Work
          </h2>
          <h3 className="text-3xl sm:text-4xl font-display font-black text-white tracking-tight">
            Case Studies that Deliver Results
          </h3>
          <p className="font-sans text-slate-400 mt-4 leading-relaxed">
            We partner with ambitious organizations to co-author brand restarts and technical ad metrics. Read our latest deployment summaries.
          </p>
        </div>

        {/* Filter categories tabs header */}
        <div className="flex flex-wrap justify-center items-center gap-1.5 mb-12">
          <span className="text-slate-500 font-mono text-xs uppercase tracking-wider mr-2 hidden md:inline flex items-center gap-1">
            <Filter className="h-3 w-3 text-sky-400" /> Filter:
          </span>
          {categories.map((cat) => (
            <button
              key={cat.id}
              id={`cat-${cat.id}`}
              onClick={() => setFilter(cat.id)}
              className={`px-4.5 py-2 rounded-xl text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                filter === cat.id
                  ? 'bg-sky-500 text-slate-950 shadow-md scale-105'
                  : 'bg-white/5 border border-white/10 hover:border-white/20 text-slate-400 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Dynamic Project Grid (Animate with Framer Motion) */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                id={`project-card-${project.id}`}
                onClick={() => setSelectedProject(project)}
                className="group relative h-[380px] rounded-3xl glass-card overflow-hidden cursor-pointer hover:translate-y-[-4px] hover:border-white/30 transition-all"
              >
                {/* Product/Client image */}
                <div className="h-full w-full relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover grayscale-5 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                  {/* Absolute subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-95" />
                </div>

                {/* Content over image */}
                <div className="absolute bottom-0 left-0 w-full p-6 text-left">
                  <span className="font-mono text-[10px] text-sky-400 tracking-widest font-black uppercase block mb-1">
                    {project.category.replace('-', ' ')}
                  </span>
                  <h4 className="font-sans font-bold text-lg text-white group-hover:text-sky-350 transition-colors">
                    {project.title}
                  </h4>
                  <p className="font-sans text-xs text-slate-400 leading-relaxed mt-2 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {project.tags.slice(0, 2).map((tag, i) => (
                      <span key={i} className="text-[10px] font-sans px-2.5 py-0.5 bg-slate-900 border border-slate-800 text-slate-400 rounded-full">
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 2 && (
                      <span className="text-[10px] font-sans px-2 bg-slate-900/50 text-slate-500 rounded-full flex items-center">
                        +{project.tags.length - 2}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-sky-400 font-mono mt-5 uppercase tracking-wider font-bold group-hover:text-teal-400 transition-colors">
                    <span>Inspect Blueprint</span>
                    <ArrowRight className="h-3 w-3 translate-x-0 group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </div>

                {/* Hover trigger icon (Plus circle absolute) */}
                <div className="absolute top-5 right-5 h-10 w-10 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <PlusCircle className="h-5 w-5 text-sky-400" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Floating Interactive Case Study Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Back backdrop dark mask */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-slate-950/40 backdrop-blur-md"
              />

              {/* Modal Card content wrapper */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 30 }}
                transition={{ type: "spring", damping: 25 }}
                className="relative glass-card rounded-3xl p-6 sm:p-8 max-w-2xl w-full text-left shadow-2xl z-10 overflow-y-auto max-h-[90vh]"
              >
                {/* Close Button right corner */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/15 text-slate-300 hover:text-white"
                  title="Close Modal"
                >
                  <X className="h-5 w-5" />
                </button>

                {/* Subtitle Category and Title */}
                <span className="font-mono text-xs font-black text-sky-400 tracking-widest uppercase block mb-1">
                  {selectedProject.category.replace('-', ' ')}
                </span>
                <h3 className="text-2xl sm:text-3xl font-sans font-extrabold text-white leading-tight mb-4 pr-12">
                  {selectedProject.title}
                </h3>

                {/* Image Banner */}
                <div className="h-56 w-full rounded-2xl overflow-hidden mb-6 relative border border-slate-800">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-950/90 text-xs font-semibold text-slate-300">
                    <User className="h-3.5 w-3.5 text-sky-400" />
                    Client: {selectedProject.client}
                  </div>
                </div>

                {/* Multi-Column Descriptive Content */}
                <div className="space-y-6">
                  <div>
                    <h5 className="text-xs font-mono font-bold tracking-widest text-slate-400 uppercase mb-2">
                      Project Background
                    </h5>
                    <p className="font-sans text-sm text-slate-300 leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                      <h5 className="font-sans font-bold text-xs text-teal-400 flex items-center gap-1.5 uppercase tracking-wide mb-1.5">
                        <Sparkles className="h-3.5 w-3.5" /> Core Metrics Goal
                      </h5>
                      <span className="font-mono text-lg font-black text-white">
                        {selectedProject.category === 'digital-marketing' || selectedProject.category === 'web-dev' ? '3x Conversion' : 'Page 1 rankings'}
                      </span>
                      <p className="text-xxs text-slate-500 mt-1">
                        Driven by analytical tracking dashboards.
                      </p>
                    </div>

                    <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                      <h5 className="font-sans font-bold text-xs text-sky-400 flex items-center gap-1.5 uppercase tracking-wide mb-1.5">
                        <Lightbulb className="h-3.5 w-3.5" /> Project Status
                      </h5>
                      <span className="font-sans text-sm font-semibold text-white">
                        Deployed & Optimizing
                      </span>
                      <p className="text-xxs text-slate-500 mt-1">
                        Transformed within the 12-week blueprint.
                      </p>
                    </div>
                  </div>

                  {/* Tags list */}
                  <div>
                    <span className="block text-xxs font-mono uppercase tracking-widest text-slate-500 mb-2">
                      Involved Deliverables
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag, i) => (
                        <span key={i} className="text-xs font-mono px-3 py-1 rounded-lg bg-slate-950 border border-slate-850 text-slate-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Closing CTAs */}
                  <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between">
                    <span className="text-[10px] font-mono text-slate-500 italic">
                      Copyright © Siltawi Case Studies
                    </span>
                    <button
                      onClick={() => {
                        setSelectedProject(null);
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
                      }}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-sky-400 hover:text-white uppercase transition-colors"
                    >
                      Request Similar Solution <ExternalLink className="h-3.5 w-3.5" />
                    </button>
                  </div>

                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
