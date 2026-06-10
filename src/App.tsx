import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Certifications from './components/Certifications';
import Statistics from './components/Statistics';
import Goals from './components/Goals';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

export default function App() {

  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Dynamic Intersection Observer to detect scroll sections on viewport
    const sections = ['home', 'about', 'skills', 'projects', 'timeline', 'certs', 'goals', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset for header trigger line

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break; // Active found, stop scanning
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check on load
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-sky-500/30 selection:text-white">
      <CustomCursor />
      
      {/* Visual background atmospheric mesh */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[10%] left-[15%] w-[400px] h-[400px] rounded-full bg-sky-500/5 filter blur-[100px] animate-pulse-glow" />
        <div className="absolute bottom-[30%] right-[10%] w-[500px] h-[500px] rounded-full bg-purple-500/5 filter blur-[120px] animate-pulse-glow" style={{ animationDelay: '4s' }} />
        <div className="absolute top-[60%] right-[30%] w-[350px] h-[350px] rounded-full bg-emerald-500/5 filter blur-[90px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10">
        <Header activeSection={activeSection} />
        
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Timeline />
          <Certifications />
          <Statistics />
          <Goals />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}
