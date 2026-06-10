import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Github, Linkedin, Mail, Phone, Download } from 'lucide-react';
import { sandeepAbout } from '../data';

export default function Hero() {
  const titles = ['Web Developer', 'App Creator', 'Student', 'Lifelong Learner'];
  const [currentIdx, setCurrentIdx] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Image cascade: tries local photo first, then Unsplash fallback
  const fallbackList = [
    '/assets/profile_photo.jpg',
    '/assets/profile_photo.png',
    sandeepAbout.avatar || 'https://images.unsplash.com/photo-1624561172888-ac93c696e10c?auto=format&fit=crop&q=80&w=600&h=750'
  ];
  const [avatarSrc, setAvatarSrc] = useState<string>(fallbackList[0]);
  const [fallbackIndex, setFallbackIndex] = useState<number>(0);

  const handleImageError = () => {
    if (fallbackIndex < fallbackList.length - 1) {
      const nextIdx = fallbackIndex + 1;
      setFallbackIndex(nextIdx);
      setAvatarSrc(fallbackList[nextIdx]);
    }
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentFullText = titles[currentIdx];
    
    const tick = () => {
      if (!isDeleting) {
        // Typing
        setDisplayedText(prev => currentFullText.substring(0, prev.length + 1));
        if (displayedText === currentFullText) {
          // Finished typing, pause
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        // Deleting
        setDisplayedText(prev => currentFullText.substring(0, prev.length - 1));
        if (displayedText === '') {
          setIsDeleting(false);
          setCurrentIdx(prev => (prev + 1) % titles.length);
          return;
        }
      }
      
      const speed = isDeleting ? 30 : 80;
      timer = setTimeout(tick, speed);
    };

    timer = setTimeout(tick, 100);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentIdx]);

  const handleScrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      window.scrollTo({
        top: (contactSection as HTMLElement).offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  const handleDownloadStub = () => {
    // Generate simple custom resumes or trigger printable alert/print dialog
    window.print();
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Background glowing elements */}
      <div className="ambient-bg ambient-blue top-1/4 left-10 animate-pulse-glow" />
      <div className="ambient-bg ambient-purple bottom-10 right-10 animate-pulse-glow" style={{ animationDelay: '3s' }} />

      <div className="max-w-7xl mx-auto px-6 w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Columns - Text copy */}
        <div className="lg:col-span-7 flex flex-col items-start text-left order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/20 text-sky-400 font-mono text-xs mb-6 uppercase tracking-wider"
          >
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
            Available for Projects
          </motion.div>

          {/* Name & Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-5xl sm:text-6xl xl:text-7xl tracking-tight text-white mb-4"
          >
            Hey, I'm <br />
            <span className="text-gradient font-extrabold">{sandeepAbout.name}</span>
          </motion.h1>

          {/* Animating subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-10 sm:h-12 flex items-center mb-6"
          >
            <p className="font-display text-xl sm:text-2xl text-slate-300 font-medium">
              A passionate{' '}
              <span className="text-sky-400 font-bold font-mono typewriter-cursor">
                {displayedText}
              </span>
            </p>
          </motion.div>

          {/* Bio introduction summary */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-sans text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed mb-10"
          >
            {sandeepAbout.bio}
          </motion.p>

          {/* Hero CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 mb-12"
          >
            <button
              onClick={handleScrollToContact}
              className="px-8 py-4 rounded-2xl bg-sky-500 hover:bg-sky-600 border border-sky-400/20 font-sans text-sm font-bold tracking-wide text-white flex items-center gap-2 shadow-[0_8px_30px_rgb(14,165,233,0.3)] hover:shadow-[0_8px_35px_rgb(14,165,233,0.5)] transform hover:-translate-y-0.5 transition-all cursor-pointer"
            >
              Contact Me
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <button
              onClick={handleDownloadStub}
              className="px-8 py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-white/10 hover:border-sky-500/30 font-sans text-sm font-bold tracking-brand text-slate-300 hover:text-white flex items-center gap-2 transition-all cursor-pointer"
            >
              Print / Save Resume
              <Download className="w-4 h-4" />
            </button>
          </motion.div>

          {/* Social Icons Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center gap-4"
          >
            <span className="font-mono text-xs text-slate-500 uppercase tracking-widest mr-2">
              Connect:
            </span>
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
                  className="w-10 h-10 rounded-xl glass-panel flex items-center justify-center text-slate-400 hover:text-sky-400 border border-white/5 hover:border-sky-500/30 transition-all transform hover:scale-110 shadow-sm"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Columns - Profile image */}
        <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
            className="relative w-[280px] h-[360px] sm:w-[320px] sm:h-[420px] xl:w-[360px] xl:h-[470px] mt-8 mb-8"
          >
            {/* Background glowing frame */}
            <div className="absolute -inset-4 rounded-[40px] bg-gradient-to-tr from-sky-400 via-indigo-500 to-purple-600 opacity-20 blur-xl animate-pulse" />

            {/* Main photo card - overflow hidden only for the image */}
            <div className="absolute inset-0 rounded-[32px] bg-slate-900 border-2 border-white/10 glow-card glow-card-active shadow-[0_20px_50px_rgba(15,23,42,0.8)] overflow-hidden">
              <img
                src={avatarSrc}
                alt="Sandeep Portrait"
                onError={handleImageError}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top grayscale-[10%] brightness-[98%] hover:scale-105 duration-700 ease-out"
              />
            </div>

            {/* Name badge — bottom inside card, pinned to card bottom edge */}
            <div className="absolute bottom-0 left-3 right-3 px-4 py-3 rounded-2xl bg-slate-950/85 backdrop-blur-md border border-white/10 flex items-center gap-3">
              <div className="relative flex items-center justify-center w-4 h-4 shrink-0">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping absolute" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              </div>
              <div className="text-left">
                <h4 className="font-display font-bold text-xs text-white">Sandeep Kumar</h4>
                <p className="font-mono text-[10px] text-slate-400">Bihar, India 🇮🇳</p>
              </div>
            </div>

            {/* Top-right floating badge — positioned outside card */}
            <div className="absolute -top-5 -right-6 bg-slate-900/95 backdrop-blur-md border border-sky-400/30 rounded-2xl px-4 py-2.5 shadow-xl select-none flex items-center gap-2 z-10">
              <span className="text-xl">🚀</span>
              <div className="text-left">
                <p className="font-mono text-[9px] uppercase tracking-wider text-sky-400 font-bold">Role</p>
                <p className="font-display text-xs text-white font-medium">App Creator</p>
              </div>
            </div>

            {/* Bottom-left floating badge — positioned outside card */}
            <div className="absolute -bottom-5 -left-6 bg-slate-900/95 backdrop-blur-md border border-sky-400/30 rounded-2xl px-4 py-2.5 shadow-xl select-none flex items-center gap-2 z-10">
              <span className="text-xl">🎓</span>
              <div className="text-left">
                <p className="font-mono text-[9px] uppercase tracking-wider text-sky-400 font-bold">Status</p>
                <p className="font-display text-xs text-white font-medium">Tech Student</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
