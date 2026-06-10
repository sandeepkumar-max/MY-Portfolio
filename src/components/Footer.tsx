import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronUp, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { sandeepAbout } from '../data';

export default function Footer() {
  const [showToTop, setShowToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative py-12 border-t border-white/5 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: copyright name brand */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
          <span className="font-display font-medium text-sm text-slate-300">
            Sandeep<span className="text-sky-400">.</span> Portfolio
          </span>
          <p className="font-mono text-[10px] text-slate-500 tracking-wider">
            © {new Date().getFullYear()} — Designed & Developed by Sandeep. All Rights Reserved.
          </p>
        </div>

        {/* Center: simple social anchors */}
        <div className="flex items-center gap-3">
          {[
            { icon: <Mail className="w-4 h-4" />, href: `mailto:${sandeepAbout.email}`, label: 'Email' },
            { icon: <Github className="w-4 h-4" />, href: sandeepAbout.github, label: 'GitHub' },
            { icon: <Linkedin className="w-4 h-4" />, href: sandeepAbout.linkedin, label: 'LinkedIn' },
            { icon: <Phone className="w-4 h-4" />, href: `https://wa.me/${sandeepAbout.whatsapp}`, label: 'WhatsApp' },
          ].map((social, idx) => (
            <a
              key={idx}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              className="w-8 h-8 rounded-lg bg-slate-900 border border-white/5 flex items-center justify-center text-slate-500 hover:text-sky-400 hover:border-sky-500/20 transition-all"
            >
              {social.icon}
            </a>
          ))}
        </div>

      </div>

      {/* Floating: Back to top buttons */}
      <AnimatePresence>
        {showToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            onClick={handleScrollToTop}
            className="fixed bottom-6 right-6 z-40 p-3 rounded-xl bg-sky-500/90 hover:bg-sky-500 border border-sky-400/25 text-white shadow-[0_8px_20px_rgba(14,165,233,0.3)] hover:shadow-[0_8px_25px_rgba(14,165,233,0.5)] transition-all transform hover:-translate-y-1 hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-md"
            aria-label="Back to top"
          >
            <ChevronUp className="w-4.5 h-4.5" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
