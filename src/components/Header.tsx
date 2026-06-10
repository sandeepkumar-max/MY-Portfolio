import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Code } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
}

export default function Header({ activeSection }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Timeline', href: '#timeline', id: 'timeline' },
    { label: 'Certifications', href: '#certs', id: 'certs' },
    { label: 'Goals', href: '#goals', id: 'goals' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offsetTop = (targetElement as HTMLElement).offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'glass-nav py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleClick(e, '#home')}
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-400/30 flex items-center justify-center group-hover:border-sky-400 transition-colors">
              <Code className="w-5 h-5 text-sky-400" />
            </div>
            <span className="font-display font-bold text-xl tracking-wide text-white">
              Sandeep<span className="text-sky-400">.</span>
            </span>
          </a>

          {/* Nav Items (Desktop) */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/50 border border-white/5 px-2 py-1.5 rounded-full backdrop-blur-md">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className={`relative px-4 py-2 rounded-full font-sans text-xs font-medium tracking-wide transition-colors ${
                  activeSection === item.id
                    ? 'text-sky-400 font-semibold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {activeSection === item.id && (
                  <motion.span
                    layoutId="activeBubble"
                    className="absolute inset-0 bg-sky-500/10 border border-sky-500/20 rounded-full -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {item.label}
              </a>
            ))}
          </nav>

          {/* Socials & Hire (Desktop) */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#contact"
              onClick={(e) => handleClick(e, '#contact')}
              className="px-5 py-2 rounded-xl bg-sky-500 hover:bg-sky-600 border border-sky-400/20 text-white font-sans text-xs font-semibold tracking-wide transition-all shadow-[0_4px_20px_rgba(14,165,233,0.25)] hover:shadow-[0_4px_25px_rgba(14,165,233,0.45)] cursor-pointer"
            >
              Hire Me
            </a>
          </div>

          {/* Hamburger (Mobile) */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl bg-slate-900/60 border border-white/5 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[72px] z-40 bg-slate-950/95 border-b border-white/5 backdrop-blur-2xl py-6 px-6 shadow-2xl lg:hidden max-h-[calc(100vh-80px)] overflow-y-auto"
          >
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => handleClick(e, item.href)}
                    className={`flex items-center justify-between px-4 py-3.5 rounded-2xl font-display text-sm font-medium tracking-wide border transition-all ${
                      activeSection === item.id
                        ? 'bg-sky-500/10 border-sky-500/20 text-sky-400'
                        : 'bg-slate-950/40 border-transparent text-slate-400 hover:text-white hover:bg-slate-900/30'
                    }`}
                  >
                    <span>{item.label}</span>
                    {activeSection === item.id && (
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                    )}
                  </a>
                ))}
              </div>
              <div className="h-[1px] bg-white/5 my-1" />
              <div className="flex flex-col gap-3">
                <a
                  href="#contact"
                  onClick={(e) => handleClick(e, '#contact')}
                  className="w-full text-center py-3.5 rounded-2xl bg-sky-500 text-white font-sans text-sm font-semibold tracking-wide transition-all shadow-md active:scale-95"
                >
                  Hire Me
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
