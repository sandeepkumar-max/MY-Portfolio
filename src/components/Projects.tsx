import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, FolderCode, X, Sparkles } from 'lucide-react';
import { projectsData } from '../data';
import { Project } from '../types';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<'all' | 'games' | 'utilities' | 'mobile'>('all');

  // Custom filter helper
  const filteredProjects = projectsData.filter((project) => {
    if (filter === 'all') return true;
    if (filter === 'games') {
      return ['lexiquest', 'orbit-pop'].includes(project.id);
    }
    if (filter === 'utilities') {
      return ['bingo-chat', 'age-calculator', 'calculator-app'].includes(project.id);
    }
    if (filter === 'mobile') {
      return ['to-do-list', 'status-saver'].includes(project.id);
    }
    return true;
  });

  const categories = [
    { label: 'All Projects', id: 'all' as const },
    { label: 'Web Games', id: 'games' as const },
    { label: 'Utilities', id: 'utilities' as const },
    { label: 'Mobile (React N.)', id: 'mobile' as const },
  ];

  return (
    <section id="projects" className="relative py-24 overflow-hidden border-t border-white/5">
      {/* Background neon dots */}
      <div className="ambient-bg ambient-purple top-20 left-1/3 animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        
        {/* Section Heading Setup */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="flex flex-col items-start text-left">
            <p className="font-mono text-xs tracking-widest text-sky-400 uppercase mb-2">03 // Creations</p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
              Featured Projects<span className="text-sky-400">.</span>
            </h2>
            <div className="w-12 h-[2px] bg-sky-500 mt-4 rounded" />
          </div>

          {/* Filter Categories Pill Tags */}
          <div className="flex flex-wrap items-center gap-1.5 bg-slate-900/60 p-1 rounded-2xl border border-white/5">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-4 py-2.5 rounded-xl font-sans text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                  filter === cat.id
                    ? 'bg-sky-500 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Card Grids */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project: Project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -6 }}
                className="glass-panel rounded-3xl overflow-hidden flex flex-col h-full cursor-pointer hover:border-sky-500/30 group shadow-lg"
                onClick={() => setSelectedProject(project)}
              >
                {/* Custom Gradient Visual Mock Image Box */}
                <div className={`relative h-48 bg-gradient-to-tr ${project.imagePlaceholderColor} flex items-center justify-center p-6 overflow-hidden`}>
                  {/* Hexagon pattern overlay */}
                  <div className="absolute inset-0 bg-slate-950/20 mix-blend-overlay" />
                  
                  {/* Float project name floating */}
                  <div className="relative z-10 flex flex-col items-center gap-2">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-300">
                      <FolderCode className="w-6 h-6 text-white" />
                    </div>
                    <span className="font-display font-extrabold text-xl tracking-tight text-white drop-shadow-md">
                      {project.title}
                    </span>
                  </div>

                  {/* Hot tags */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-sky-500/95 backdrop-blur-md rounded-full border border-sky-400/20 flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-white" />
                      <span className="font-mono text-[9px] uppercase tracking-wider text-white font-semibold">Featured</span>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-xs">
                    <span className="px-5 py-2.5 rounded-xl bg-white text-slate-950 font-sans text-xs font-bold tracking-wider uppercase transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      View Details
                    </span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-display font-bold text-lg text-white mb-2 group-hover:text-sky-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="font-sans text-slate-400 text-xs leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-1.5 mb-6">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 bg-slate-950/45 border border-white/5 rounded-lg font-mono text-[9px] text-slate-400 font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-0.5 font-mono text-[9px] text-slate-500">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Action Direct buttons */}
                  <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        // Handle live template route/placeholder alerts
                      }}
                      className="flex-1 py-2.5 rounded-xl bg-slate-900 hover:bg-sky-500 text-slate-300 hover:text-white font-sans text-xs font-bold tracking-wide border border-white/5 hover:border-sky-400/20 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        // Github mock link
                      }}
                      className="px-3 py-2.5 rounded-xl bg-slate-950 border border-white/5 hover:border-slate-800 text-slate-400 hover:text-slate-200 transition-colors flex items-center justify-center cursor-pointer"
                      title="Source Code"
                    >
                      <Github className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Detailed Modal Backdrop Overlay */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
              {/* Blur backdrop mask shadow */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
                onClick={() => setSelectedProject(null)}
              />

              {/* Modal Card content wrapper */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ type: 'spring', duration: 0.5 }}
                className="relative w-full max-w-2xl bg-slate-950 border border-white/10 rounded-3xl shadow-2xl overflow-hidden z-10 text-left flex flex-col"
              >
                {/* Top header strip visual */}
                <div className={`h-40 bg-gradient-to-tr ${selectedProject.imagePlaceholderColor} flex items-end p-6 relative`}>
                  <div className="absolute inset-0 bg-slate-950/20 mix-blend-overlay" />
                  
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 p-2.5 rounded-full bg-slate-950/80 hover:bg-slate-900 text-slate-400 hover:text-white border border-white/5 transition-colors focus:outline-none cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>

                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white drop-shadow-md relative z-10">
                    {selectedProject.title}
                  </h3>
                </div>

                {/* Main scrollable grid of info */}
                <div className="p-6 overflow-y-auto max-h-[60vh] flex flex-col">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-sky-400 font-bold mb-2">Project Mission & Design</span>
                  
                  <p className="font-sans text-slate-300 text-sm leading-relaxed mb-6">
                    {selectedProject.detailedDescription || selectedProject.description}
                  </p>

                  <span className="font-mono text-[9px] uppercase tracking-widest text-indigo-400 font-bold mb-3">Technologies Configured</span>
                  
                  <div className="flex flex-wrap items-center gap-1.5 mb-8">
                    {selectedProject.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 bg-slate-900 border border-white/5 rounded-xl font-mono text-xs text-indigo-300 font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <span className="font-mono text-[9px] uppercase tracking-widest text-emerald-400 font-bold mb-3 font-semibold">Ready to Test</span>
                  <div className="flex flex-col sm:flex-row items-center gap-3">
                    <a
                      href={selectedProject.liveUrl}
                      className="w-full sm:flex-1 py-3.5 rounded-2xl bg-sky-500 hover:bg-sky-600 font-sans text-xs font-bold tracking-wide text-white text-center flex items-center justify-center gap-2 shadow-[0_8px_20px_rgba(14,165,233,0.3)] transition-all cursor-pointer"
                    >
                      Launch Live Web Demo
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={selectedProject.sourceUrl}
                      className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-white/5 font-sans text-xs font-bold tracking-brand text-slate-300 hover:text-white text-center flex items-center justify-center gap-2 transition-all cursor-pointer"
                    >
                      <Github className="w-4 h-4" />
                      Repository Code
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
