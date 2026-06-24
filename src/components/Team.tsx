import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Users, Mail, ArrowUpRight, Award, Plus, Minus,
  Sparkles, Code, Layout, Video, Share2, Facebook, Twitter, Linkedin
} from 'lucide-react';
import { TEAM_MEMBERS } from '../data';
import { TeamMember } from '../types';

export default function Team() {
  const [activeDepartment, setActiveDepartment] = useState<string>('all');
  const [expandedBioId, setExpandedBioId] = useState<string | null>(null);

  // Departments listing
  const departments = [
    { label: 'All Specialists', id: 'all' },
    { label: 'Leadership', id: 'Executive Leadership' },
    { label: 'Strategy & Growth', id: 'Marketing Strategy' },
    { label: 'Technical & Creative', id: 'Engineering-Creative' } // Web, Graphic, Content, SEO
  ];

  // Filter team members by department
  const filteredTeam = TEAM_MEMBERS.filter(member => {
    if (activeDepartment === 'all') return true;
    if (activeDepartment === 'Executive Leadership' || activeDepartment === 'Marketing Strategy') {
      return member.department === activeDepartment;
    }
    // Technical-Creative encompasses Web, Design, Content, and SEO
    return member.department !== 'Executive Leadership' && member.department !== 'Marketing Strategy';
  });

  const toggleBio = (id: string) => {
    if (expandedBioId === id) {
      setExpandedBioId(null);
    } else {
      setExpandedBioId(id);
    }
  };

  return (
    <section id="team" className="relative min-h-screen bg-transparent py-24 border-t border-white/10 overflow-hidden">
      
      {/* Background radial details */}
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-sky-505/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-teal-505/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-mono font-bold tracking-widest text-sky-400 uppercase mb-3">
            Our Team
          </h2>
          <h3 className="text-3xl sm:text-4xl font-display font-black text-white tracking-tight">
            Meet the Specialists Behind the Magic
          </h3>
          <p className="font-sans text-slate-450 mt-4 leading-relaxed">
            Our multi-disciplinary team is composed of passionate tech-architects and ad spend strategists, focused on pushing brands to rank #1.
          </p>
        </div>

        {/* Department Filters */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
          {departments.map((dept) => (
            <button
              key={dept.id}
              id={`dept-${dept.id}`}
              onClick={() => {
                setActiveDepartment(dept.id);
                setExpandedBioId(null);
              }}
              className={`px-4.5 py-2.5 rounded-xl text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                activeDepartment === dept.id
                  ? 'bg-gradient-to-r from-sky-500 to-teal-550 text-white shadow-md scale-102'
                  : 'bg-white/5 border border-white/10 hover:border-white/20 text-slate-400 hover:text-white'
              }`}
            >
              {dept.label}
            </button>
          ))}
        </div>

        {/* Dynamic Interactive Team Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredTeam.map((member) => {
              const isBioExpanded = expandedBioId === member.id;
              
              return (
                <motion.div
                  key={member.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  id={`team-card-${member.id}`}
                  className="glass-card glass-card-hover overflow-hidden flex flex-col group h-full"
                >
                  {/* Body textual content */}
                  <div className="p-6 text-left flex flex-col flex-grow">
                    {/* Department tag badge */}
                    <div className="mb-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 backdrop-blur-md rounded-lg text-[9px] font-mono tracking-widest text-sky-400 font-bold uppercase border border-white/10">
                        <Sparkles className="h-2.5 w-2.5 text-sky-400" />
                        {member.department.replace('Executive ', '')}
                      </span>
                    </div>
                    <div className="mb-2">
                      <h4 className="font-sans font-bold text-lg text-white group-hover:text-sky-350 transition-colors">
                        {member.name}
                      </h4>
                      <p className="font-mono text-xs text-slate-505 font-medium uppercase tracking-wide">
                        {member.role}
                      </p>
                    </div>

                    {/* Expandable bio trigger */}
                    <p className={`font-sans text-xs text-slate-400 mt-2 leading-relaxed ${isBioExpanded ? '' : 'line-clamp-2'}`}>
                      {member.bio}
                    </p>

                    {/* Toggle button */}
                    <button
                      id={`btn-bio-toggle-${member.id}`}
                      onClick={() => toggleBio(member.id)}
                      className="text-[11px] font-mono text-indigo-400 hover:text-sky-400 mt-2 self-start flex items-center gap-1 uppercase tracking-wider font-bold cursor-pointer"
                    >
                      {isBioExpanded ? (
                        <>
                          <Minus className="h-3 w-3 shrink-0" /> Close Biography
                        </>
                      ) : (
                        <>
                          <Plus className="h-3 w-3 shrink-0" /> Read Full Biography
                        </>
                      )}
                    </button>

                    {/* Department list of skills */}
                    <div className="mt-5 pt-4 border-t border-slate-850/70">
                      <span className="block text-[10px] font-mono uppercase tracking-widest text-slate-505 mb-2 font-black">
                        Expert Competencies
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {member.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="text-[10px] font-sans px-2.5 py-0.5 bg-white/5 text-slate-300 rounded-lg border border-white/10 font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Quick fake social connect (highly polished mockup) */}
                    <div className="mt-auto pt-6 flex items-center justify-between">
                      <span className="text-[10px] font-mono text-slate-500 flex items-center gap-1">
                        <Mail className="h-3.5 w-3.5 text-slate-600" />
                        Available for custom briefs
                      </span>
                      <div className="flex gap-2">
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-1 px-2 text-slate-500 hover:text-sky-400 rounded transition-colors" title="LinkedIn Profile">
                          <Linkedin className="h-3.5 w-3.5" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer" className="p-1 px-2 text-slate-500 hover:text-sky-450 rounded transition-colors" title="Twitter Profile">
                          <Twitter className="h-3.5 w-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
