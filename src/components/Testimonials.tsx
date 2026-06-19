import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Quote, Star, ChevronLeft, ChevronRight, MessageSquare, 
  UserPlus, CheckCircle, Sparkles, UserCheck, MessageSquarePlus
} from 'lucide-react';
import { TESTIMONIALS } from '../data';
import { Testimonial } from '../types';

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [testimonialsList, setTestimonialsList] = useState<Testimonial[]>(TESTIMONIALS);
  
  // Custom Reviews State
  const [showForm, setShowForm] = useState(false);
  const [newReview, setNewReview] = useState({
    quote: "",
    author: "",
    role: "",
    company: "",
    rating: 5
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % testimonialsList.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + testimonialsList.length) % testimonialsList.length);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.quote || !newReview.author || !newReview.role || !newReview.company) {
      alert("Please fill in all testimonial fields.");
      return;
    }

    const createdReview: Testimonial = {
      id: `custom-${Date.now()}`,
      quote: newReview.quote,
      author: newReview.author,
      role: newReview.role,
      company: newReview.company,
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150", // generic avatar
      rating: newReview.rating
    };

    const updatedList = [createdReview, ...testimonialsList];
    setTestimonialsList(updatedList);
    setActiveIdx(0); // Focus on the new review
    setFormSubmitted(true);
    setNewReview({
      quote: "",
      author: "",
      role: "",
      company: "",
      rating: 5
    });

    setTimeout(() => {
      setFormSubmitted(false);
      setShowForm(false);
    }, 3000);
  };

  const activeTestimony = testimonialsList[activeIdx];

  return (
    <section id="testimonials" className="relative min-h-screen bg-transparent py-24 border-t border-white/10 overflow-hidden">
      
      {/* Absolute graphic lighting bubble */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-indigo-505/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-sky-505/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-mono font-bold tracking-widest text-sky-400 uppercase mb-3">
            Client Reviews
          </h2>
          <h3 className="text-3xl sm:text-4xl font-sans font-extrabold text-white tracking-tight">
            What Our Partners Say
          </h3>
          <p className="font-sans text-slate-400 mt-4 leading-relaxed">
            See how our strategic, data-driven methodology helps startups and major companies across East Africa hit their core growth goals.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative mb-20">
          <div className="p-8 sm:p-14 glass-card rounded-3xl relative overflow-hidden min-h-[350px] flex items-center justify-center">
            
            {/* Quote watermark background */}
            <Quote className="absolute -top-6 -left-6 h-40 w-40 text-slate-900/40 pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimony.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="relative z-10 w-full text-center flex flex-col items-center"
              >
                {/* Five star rating icons */}
                <div className="flex gap-1 mb-6 text-yellow-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < activeTestimony.rating ? 'fill-yellow-500 text-yellow-500' : 'text-slate-800'
                      }`}
                    />
                  ))}
                </div>

                {/* Main Quote Quote */}
                <p id={`testimony-quote-${activeTestimony.id}`} className="font-sans text-base sm:text-lg lg:text-xl text-slate-200 italic leading-relaxed mb-8 max-w-3xl">
                  "{activeTestimony.quote}"
                </p>

                {/* Portrait bio block split */}
                <div className="flex items-center gap-4 mt-2">
                  <div className="h-14 w-14 rounded-full overflow-hidden border-2 border-sky-505/60 shrink-0">
                    <img
                      src={activeTestimony.avatar}
                      alt={activeTestimony.author}
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <h5 className="font-sans font-bold text-white text-base">
                      {activeTestimony.author}
                    </h5>
                    <p className="font-mono text-xs text-sky-450 uppercase tracking-wider font-semibold">
                      {activeTestimony.role}, <span className="text-slate-450">{activeTestimony.company}</span>
                    </p>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>

          </div>

          {/* Left Right Chevron Control Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-2 sm:-px-16 pointer-events-none">
            <button
               id="btn-prev-testimony"
               onClick={handlePrev}
               className="p-3 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 pointer-events-auto transition-all focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-lg"
               title="Previous Review"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
               id="btn-next-testimony"
               onClick={handleNext}
               className="p-3 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 pointer-events-auto transition-all focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-lg"
               title="Next Review"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Bullet Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonialsList.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIdx(i)}
                className={`h-2 rounded-full transition-all ${
                  activeIdx === i ? 'w-6 bg-sky-500' : 'w-2 bg-slate-800 hover:bg-slate-700'
                }`}
                title={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

        </div>

        {/* Leave a review interactive modal panel */}
        <div className="text-center max-w-xl mx-auto">
          {!showForm ? (
            <button
              id="btn-trigger-review-form"
              onClick={() => setShowForm(true)}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 text-sky-400 hover:text-white font-sans text-xs font-bold uppercase tracking-wider transition-all"
            >
              <MessageSquarePlus className="h-4.5 w-4.5 text-sky-400" />
              Submit Your Own Agency Review
            </button>
          ) : (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-card p-6 sm:p-8 rounded-3xl text-left relative"
            >
              <div className="absolute top-4 right-4">
                <button
                  onClick={() => setShowForm(false)}
                  className="p-1.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/12 text-slate-300"
                >
                  Close
                </button>
              </div>

              <span className="text-xxs font-mono font-bold tracking-widest uppercase text-sky-400 block mb-2">
                Draft Review Panel
              </span>
              <h4 className="text-lg font-sans font-bold text-white mb-6">
                Tell us about your experience
              </h4>

              {formSubmitted ? (
                <div className="py-8 text-center space-y-3 animate-fadeIn">
                  <div className="h-12 w-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <h5 className="font-sans font-bold text-base text-white">Review Saved Live!</h5>
                  <p className="font-sans text-xs text-slate-400">
                    Your testimonial is now loaded. We prepended it directly to the interactive carousel.
                  </p>
                </div>
              ) : (
                <form id="review-feedback-form" onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xxs font-mono uppercase tracking-wider text-slate-400 mb-1.5 font-bold">
                      Your Corporate Testimony / Feedback
                    </label>
                    <textarea
                      required
                      placeholder="e.g. Siltawi transformed our local maps rankings and boosted our student enrollment volumes by 150%."
                      value={newReview.quote}
                      onChange={(e) => setNewReview({ ...newReview, quote: e.target.value })}
                      className="w-full h-24 p-3 bg-white/5 border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:ring-2 focus:ring-sky-500 placeholder-slate-600 resize-none font-sans"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xxs font-mono uppercase tracking-wider text-slate-400 mb-1.5 font-bold">
                        Full Name
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Ermias Girma"
                        value={newReview.author}
                        onChange={(e) => setNewReview({ ...newReview, author: e.target.value })}
                        className="w-full p-3 bg-white/5 border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:ring-2 focus:ring-sky-500 placeholder-slate-600 font-sans"
                      />
                    </div>
                    <div>
                      <label className="block text-xxs font-mono uppercase tracking-wider text-slate-400 mb-1.5 font-bold">
                        Professional Position
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Operations Director"
                        value={newReview.role}
                        onChange={(e) => setNewReview({ ...newReview, role: e.target.value })}
                        className="w-full p-3 bg-white/5 border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:ring-2 focus:ring-sky-500 placeholder-slate-600 font-sans"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xxs font-mono uppercase tracking-wider text-slate-400 mb-1.5 font-bold">
                        Company Name
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Addis Logistics"
                        value={newReview.company}
                        onChange={(e) => setNewReview({ ...newReview, company: e.target.value })}
                        className="w-full p-3 bg-white/5 border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:ring-2 focus:ring-sky-500 placeholder-slate-600 font-sans"
                      />
                    </div>
                    <div>
                      <label className="block text-xxs font-mono uppercase tracking-wider text-slate-400 mb-1.5 font-bold">
                        Rating (1 - 5 Stars)
                      </label>
                      <select
                        value={newReview.rating}
                        onChange={(e) => setNewReview({ ...newReview, rating: Number(e.target.value) })}
                        className="w-full p-3 bg-white/5 border border-white/10 rounded-xl text-xs text-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 font-sans"
                      >
                        <option value={5} className="bg-slate-900">⭐⭐⭐⭐⭐ (Excellent)</option>
                        <option value={4} className="bg-slate-900">⭐⭐⭐⭐ (Strong)</option>
                        <option value={3} className="bg-slate-900">⭐⭐⭐ (Average)</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-2 flex justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => setShowForm(false)}
                      className="px-4 py-2.5 rounded-xl border border-white/10 text-slate-350 hover:text-white text-xs font-semibold hover:bg-white/5 transition-all bg-transparent"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-teal-550 text-white text-xs font-bold uppercase tracking-wider shadow-md hover:scale-[1.02] transition-transform"
                    >
                      Add Live Recommendation
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          )}
        </div>

      </div>
    </section>
  );
}
