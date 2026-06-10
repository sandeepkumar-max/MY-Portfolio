import React from 'react';
import { motion } from 'motion/react';
import { Server, Smartphone, Briefcase, Sparkles, Target, Compass } from 'lucide-react';
import { goalsData } from '../data';
import { Goal } from '../types';

export default function Goals() {
  const iconMap: { [key: string]: React.ReactNode } = {
    Server: <Server className="w-5 h-5 text-sky-450" />,
    Smartphone: <Smartphone className="w-5 h-5 text-emerald-450" />,
    Briefcase: <Briefcase className="w-5 h-5 text-indigo-450" />,
    Sparkles: <Sparkles className="w-5 h-5 text-purple-450" />,
  };

  return (
    <section id="goals" className="relative py-24 overflow-hidden border-t border-white/5">
      {/* Background ambient glowing gradient */}
      <div className="ambient-bg ambient-purple top-10 right-10 animate-pulse-glow" style={{ animationDelay: '4s' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        
        {/* Section Heading Setup */}
        <div className="flex flex-col items-start text-left mb-16">
          <p className="font-mono text-xs tracking-widest text-sky-400 uppercase mb-2">06 // Horizon</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Future Milestones & Goals<span className="text-sky-400">.</span>
          </h2>
          <div className="w-12 h-[2px] bg-sky-500 mt-4 rounded" />
        </div>

        {/* Goals Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
          {goalsData.map((goal: Goal, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel p-6 sm:p-8 rounded-3xl relative overflow-hidden group hover:border-slate-800 transition-colors flex flex-col justify-between"
            >
              {/* Backglow element */}
              <div className="absolute -inset-10 bg-sky-500/5 rounded-full filter blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Header info */}
                <div className="flex items-center justify-between gap-4 mb-6 relative z-10">
                  <div className="w-11 h-11 rounded-xl bg-slate-900 border border-white/5 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    {iconMap[goal.iconName] || <Target className="w-5 h-5 text-sky-450" />}
                  </div>
                  
                  {/* Timeframe Pill Indicator */}
                  <span className="px-3.5 py-1 bg-slate-950/80 border border-white/5 rounded-full font-mono text-[9px] uppercase tracking-wider text-slate-400 font-bold">
                    {goal.timeframe}
                  </span>
                </div>

                {/* Index marker */}
                <span className="font-mono text-[9px] uppercase tracking-widest text-sky-400 font-extrabold mb-1 block">Goal 0{idx + 1}</span>
                
                <h3 className="font-display font-bold text-lg text-white mb-3 group-hover:text-sky-400 transition-colors">
                  {goal.title}
                </h3>

                <p className="font-sans text-slate-400 text-xs leading-relaxed">
                  {goal.description}
                </p>
              </div>

              {/* Progress Bullet Line */}
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-2 text-slate-500 font-mono text-[9px] uppercase tracking-wider font-semibold">
                <Compass className="w-3.5 h-3.5 text-sky-400" />
                <span>On-Track Action Plan</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
