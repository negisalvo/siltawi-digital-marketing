import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  // Implement unified page scroll Intersection Observer 
  useEffect(() => {
    const sections = ['home', 'about', 'services', 'portfolio', 'team', 'testimonials', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-84px 0px -40% 0px', // adjustment for sticky header
      threshold: 0.15
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    sections.forEach(secId => {
      const element = document.getElementById(secId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach(secId => {
        const element = document.getElementById(secId);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  // Update selected services passed into Contact Form pre-fill
  const handleSelectServices = (services: string[]) => {
    setSelectedServices(services);
  };

  const handleClearServices = () => {
    setSelectedServices([]);
  };

  return (
    <div id="siltawi-app-root" className="bg-[#0f172a] text-slate-100 min-h-screen selection:bg-sky-500 selection:text-slate-950 scroll-smooth relative overflow-hidden">
      {/* Mesh Background Elements representing the Frosted Glass design theme */}
      <div className="pointer-events-none fixed top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/15 blur-[120px] z-0"></div>
      <div className="pointer-events-none fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-500/15 blur-[120px] z-0"></div>
      <div className="pointer-events-none fixed top-[25%] right-[10%] w-[40%] h-[40%] rounded-full bg-indigo-500/10 blur-[110px] z-0"></div>
      <div className="pointer-events-none fixed bottom-[30%] left-[-5%] w-[45%] h-[45%] rounded-full bg-teal-500/10 blur-[130px] z-0"></div>

      {/* Sticky Top Header Navigation */}
      <Header activeSection={activeSection} />

      {/* Hero Presentation Main Canvas */}
      <main id="main-content-flow" className="relative z-10">
        <Hero />
        <About />
        <Services onSelectServices={handleSelectServices} />
        <Portfolio />
        <Team />
        <Testimonials />
        <Contact 
          selectedServices={selectedServices} 
          onClearServices={handleClearServices} 
        />
      </main>

      {/* Global Interactive Footer */}
      <Footer />
    </div>
  );
}
