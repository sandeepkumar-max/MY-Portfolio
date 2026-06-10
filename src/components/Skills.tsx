import React from 'react';
import { motion } from 'motion/react';
import { 
  Code, Palette, Terminal, AppWindow, Smartphone, Brain, PenTool, Languages, 
  Github, Chrome, Cpu, Flame, Database, Grid, Library, Pocket 
} from 'lucide-react';
import { skillsData } from '../data';
import { Skill } from '../types';

export default function Skills() {
  // Map icons to the correct Lucide components
  const iconMap: { [key: string]: React.ReactNode } = {
    HtmlIcon: <Code className="w-5 h-5 text-sky-400" />,
    CssIcon: <Palette className="w-5 h-5 text-blue-400" />,
    JsIcon: <Terminal className="w-5 h-5 text-yellow-400" />,
    WordpressIcon: <AppWindow className="w-5 h-5 text-indigo-400" />,
    ReactNativeIcon: <Smartphone className="w-5 h-5 text-emerald-400" />,
    AiIcon: <Brain className="w-5 h-5 text-purple-400" />,
    WriterIcon: <PenTool className="w-5 h-5 text-pink-400" />,
    EnglishIcon: <Languages className="w-5 h-5 text-teal-400" />,
  };

  const techIcons = [
    { name: 'HTML5', icon: <Code className="text-orange-500 w-6 h-6" />, desc: 'Semantic tags' },
    { name: 'CSS3', icon: <Palette className="text-blue-500 w-6 h-6" />, desc: 'Flexbox, Grid' },
    { name: 'JavaScript', icon: <Terminal className="text-yellow-400 w-6 h-6" />, desc: 'Modern ES6+' },
    { name: 'Tailwind CSS', icon: <Grid className="text-sky-400 w-6 h-6" />, desc: 'Atomic design' },
    { name: 'WordPress', icon: <AppWindow className="text-blue-600 w-6 h-6" />, desc: 'Custom CMS' },
    { name: 'React Native', icon: <Smartphone className="text-emerald-400 w-6 h-6" />, desc: 'Cross platform' },
    { name: 'Git & GitHub', icon: <Github className="text-white w-6 h-6" />, desc: 'Version control' },
    { name: 'Android SDK', icon: <Cpu className="text-lime-500 w-6 h-6" />, desc: 'App structures' },
    { name: 'AI Engines', icon: <Brain className="text-purple-400 w-6 h-6" />, desc: 'Workflows' },
    { name: 'Vite', icon: <Flame className="text-amber-500 w-6 h-6" />, desc: 'Asset bundler' },
  ];

  return (
    <section id="skills" className="relative py-24 overflow-hidden border-t border-white/5">
      {/* Background neon elements */}
      <div className="ambient-bg ambient-emerald -top-10 right-20 animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start text-left mb-16">
          <p className="font-mono text-xs tracking-widest text-sky-400 uppercase mb-2">02 // Capabilities</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            My Skills & Tech Stack<span className="text-sky-400">.</span>
          </h2>
          <div className="w-12 h-[2px] bg-sky-500 mt-4 rounded" />
        </div>

        {/* Modular Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Core Skill progress indicators */}
          <div className="lg:col-span-7 flex flex-col text-left gap-6">
            <h3 className="font-display text-lg text-slate-300 font-semibold mb-2">
              Core Skills Proficiency
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skillsData.map((skill: Skill, idx: number) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="glass-panel p-5 rounded-2xl flex flex-col hover:border-slate-800 transition-colors group relative overflow-hidden"
                >
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="w-9 h-9 rounded-xl bg-slate-900 border border-white/5 flex items-center justify-center shrink-0">
                      {iconMap[skill.iconName] || <Code className="w-5 h-5 text-sky-400" />}
                    </div>
                    <span className="font-display text-sm font-semibold text-slate-200">
                      {skill.name}
                    </span>
                  </div>

                  {/* Level text & Progress track bar */}
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-slate-500 font-bold">Confidence</span>
                    <span className="font-mono text-xs text-sky-400 font-semibold">{skill.level}%</span>
                  </div>
                  
                  <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 + idx * 0.05 }}
                      className="h-full bg-gradient-to-r from-sky-400 to-blue-500 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Mini Tech Stack showcase */}
          <div className="lg:col-span-5 flex flex-col text-left gap-6">
            <h3 className="font-display text-lg text-slate-300 font-semibold mb-2">
              Modern Tech Ecosystem
            </h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {techIcons.map((tech, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20, delay: idx * 0.05 }}
                  className="p-4 rounded-2xl glass-panel flex flex-col items-center justify-center text-center cursor-pointer border border-white/5 hover:border-sky-500/20 group relative"
                >
                  {/* Neon backlight glow on hover */}
                  <div className="absolute inset-0 bg-sky-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="w-12 h-12 rounded-xl bg-slate-900/90 flex items-center justify-center mb-3 border border-white/5 group-hover:scale-110 transition-transform">
                    {tech.icon}
                  </div>
                  
                  <h4 className="font-display font-bold text-xs text-slate-200 group-hover:text-white transition-colors">
                    {tech.name}
                  </h4>
                  <p className="font-mono text-[9px] text-slate-500 mt-1">
                    {tech.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
