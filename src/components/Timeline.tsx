import React from 'react';
import { motion } from 'motion/react';
import { Code, Palette, Zap, Smartphone, Sparkles, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { timelineEvents } from '../data';
import { TimelineEvent } from '../types';

export default function Timeline() {
  const iconMap: { [key: string]: React.ReactNode } = {
    code: <Code className="w-4 h-4 text-sky-400" />,
    palette: <Palette className="w-4 h-4 text-blue-400" />,
    zap: <Zap className="w-4 h-4 text-yellow-500" />,
    smartphone: <Smartphone className="w-4 h-4 text-emerald-400" />,
    cpu: <Sparkles className="w-4 h-4 text-purple-400" />,
  };

  return (
    <section id="timeline" className="relative py-24 overflow-hidden border-t border-white/5">
      {/* Background radial soft light */}
      <div className="ambient-bg ambient-blue bottom-10 left-10 animate-pulse-glow" />

      <div className="max-w-3xl mx-auto px-6 relative z-10 w-full">
        
        {/* Section Heading Setup */}
        <div className="flex flex-col items-center text-center mb-16">
          <p className="font-mono text-xs tracking-widest text-sky-400 uppercase mb-2">04 // Chronology</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Learning Journey<span className="text-sky-400">.</span>
          </h2>
          <div className="w-12 h-[2px] bg-sky-500 mt-4 rounded" />
        </div>

        {/* Vertical Timeline Structure */}
        <div className="relative border-l border-slate-800/80 ml-4 md:ml-32 text-left">
          {timelineEvents.map((event: TimelineEvent, idx: number) => {
            const isCompleted = event.status === 'completed';

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative pl-8 md:pl-12 pb-12 last:pb-0"
              >
                {/* Year tag for large screens */}
                <div className="hidden md:block absolute right-full mr-8 top-1.5 text-right">
                  <span className="font-display font-bold text-lg text-white">
                    {event.year}
                  </span>
                  <div className="flex justify-end gap-1 mt-1">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-slate-500 font-bold">
                      {isCompleted ? 'Finished' : 'Learning'}
                    </span>
                  </div>
                </div>

                {/* Nodes Dot on the left line */}
                <div className="absolute -left-3.5 top-1.5 flex items-center justify-center">
                  <div className={`w-7 h-7 rounded-full bg-slate-950 border-2 ${
                    isCompleted ? 'border-sky-500 shadow-[0_0_10px_rgba(14,165,233,0.3)]' : 'border-slate-700'
                  } flex items-center justify-center relative z-10`}>
                    {iconMap[event.icon] || <Code className="w-3.5 h-3.5 text-slate-400" />}
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-6 rounded-2xl glass-panel relative group hover:border-slate-800 transition-colors">
                  
                  {/* Badge & Year label (mobile only) */}
                  <div className="flex items-center justify-between gap-3 mb-2 md:hidden">
                    <span className="font-display font-bold text-base text-white">
                      {event.year}
                    </span>
                    <span className={`px-2 py-0.5 rounded-md font-mono text-[8px] uppercase tracking-wider ${
                      isCompleted ? 'bg-sky-500/10 text-sky-400' : 'bg-slate-800 text-slate-400'
                    }`}>
                      {isCompleted ? 'Completed' : 'Ongoing'}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-base text-white group-hover:text-sky-400 transition-colors">
                    {event.title}
                  </h3>

                  <p className="font-sans text-slate-400 text-xs mt-3 leading-relaxed">
                    {event.description}
                  </p>

                  {/* Complete status visual checkbox */}
                  <div className="mt-5 flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-slate-500">
                    <CheckCircle2 className={`w-3.5 h-3.5 ${isCompleted ? 'text-sky-400' : 'text-slate-700'}`} />
                    <span>{isCompleted ? 'Completed Milestone' : 'In-Progress Pursuit'}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
