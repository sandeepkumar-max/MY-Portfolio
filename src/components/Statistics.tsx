import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { FolderCode, Compass, FileCheck, Clock } from 'lucide-react';
import { statisticsData } from '../data';
import { Statistic } from '../types';

interface CounterProps {
  value: number;
  suffix: string;
}

function Counter({ value, suffix }: CounterProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const isInView = useInView(elementRef, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!isInView) return;
    
    let start = 0;
    const duration = 1500; // ms
    const increment = Math.ceil(value / (duration / 16)); // ~60fps
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={elementRef} className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
      {count}
      <span className="text-sky-400">{suffix}</span>
    </span>
  );
}

export default function Statistics() {
  const iconMap: { [key: string]: React.ReactNode } = {
    FolderCode: <FolderCode className="w-5 h-5 text-sky-400 animate-pulse" />,
    Compass: <Compass className="w-5 h-5 text-indigo-400 animate-pulse" />,
    FileCheck: <FileCheck className="w-5 h-5 text-emerald-400 animate-pulse" />,
    Clock: <Clock className="w-5 h-5 text-purple-400 animate-pulse" />,
  };

  return (
    <section className="relative py-16 overflow-hidden border-t border-b border-white/5 bg-slate-950/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 items-center">
          {statisticsData.map((stat: Statistic, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="flex items-center gap-4 p-5 rounded-2xl glass-panel text-left shadow-sm hover:border-slate-800 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/5 flex items-center justify-center shrink-0">
                {iconMap[stat.iconName] || <FolderCode className="w-5 h-5 text-sky-400" />}
              </div>
              
              <div className="flex flex-col">
                <Counter value={stat.value} suffix={stat.suffix} />
                <span className="font-mono text-[9px] uppercase tracking-wide text-slate-500 font-bold mt-1">
                  {stat.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
