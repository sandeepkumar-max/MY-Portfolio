import { motion } from 'motion/react';
import { MapPin, BookOpen, GraduationCap, Code2, Globe, Heart } from 'lucide-react';
import { sandeepAbout } from '../data';

export default function About() {
  const profileDetails = [
    { icon: <MapPin className="w-5 h-5 text-sky-400" />, label: 'Location', value: sandeepAbout.location },
    { icon: <GraduationCap className="w-5 h-5 text-indigo-400" />, label: 'Education', value: 'Student / Aspiring Developer' },
    { icon: <Code2 className="w-5 h-5 text-emerald-400" />, label: 'Tech Focus', value: 'Web & App Architecture' },
    { icon: <Globe className="w-5 h-5 text-purple-400" />, label: 'Languages', value: 'Hindi, English (Learning)' },
  ];

  return (
    <section id="about" className="relative py-24 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start text-left mb-16">
          <p className="font-mono text-xs tracking-widest text-sky-400 uppercase mb-2">01 // Story</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            About Me<span className="text-sky-400">.</span>
          </h2>
          <div className="w-12 h-[2px] bg-sky-500 mt-4 rounded" />
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Quick facts and Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Embedded Quote Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="sm:col-span-2 glass-panel p-6 rounded-3xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 text-8xl font-serif text-slate-800 pointer-events-none select-none select-none opacity-25">
                “
              </div>
              <p className="font-display italic text-slate-300 text-sm leading-relaxed relative z-10 mb-4">
                "Code is the modern paper. Creating programs is my writing, and AI is my supercharged quill. I am dedicated to constructing applications that solve tangible problems and open up new learning pathways."
              </p>
              <h5 className="font-mono text-[10px] uppercase tracking-widest text-sky-400 font-bold">
                — Sandeep Kumar
              </h5>
            </motion.div>

            {/* Quick Metrics Details */}
            {profileDetails.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-panel p-5 rounded-2xl flex flex-col items-start text-left duration-300 hover:border-slate-700 hover:bg-slate-900/40"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-900/80 border border-white/5 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h4 className="font-mono text-[10px] uppercase tracking-wider text-slate-500 mb-1">{item.label}</h4>
                <p className="font-display text-sm font-semibold text-slate-200">{item.value}</p>
              </motion.div>
            ))}
          </div>

          {/* Right: Narrative Story Block */}
          <div className="lg:col-span-7 flex flex-col text-left gap-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-display text-xl sm:text-2xl text-white font-semibold mb-4 leading-snug">
                Aspiring software craftsperson building visual digital avenues.
              </h3>
              <p className="font-sans text-slate-400 text-base leading-relaxed mb-6">
                {sandeepAbout.longBio}
              </p>
            </motion.div>

            {/* Highlighting Strengths */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-start gap-3.5"
              >
                <div className="w-8 h-8 rounded-full bg-sky-500/10 border border-sky-400/20 flex items-center justify-center shrink-0 mt-0.5">
                  <BookOpen className="w-4 h-4 text-sky-400" />
                </div>
                <div>
                  <h4 className="font-display font-medium text-slate-200 text-sm mb-1">Passionate about Learning</h4>
                  <p className="font-sans text-xs text-slate-400 line-clamp-2">Continuously absorbing web languages, responsive styling, and systems design.</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-start gap-3.5"
              >
                <div className="w-8 h-8 rounded-full bg-purple-500/10 border border-purple-400/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Heart className="w-4 h-4 text-purple-400" />
                </div>
                <div>
                  <h4 className="font-display font-medium text-slate-200 text-sm mb-1">AI-Workflow Pioneer</h4>
                  <p className="font-sans text-xs text-slate-400 line-clamp-2">Accelerating developer cycles by combining high level prompts with clean JavaScript scripts.</p>
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
