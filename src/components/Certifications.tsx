import { motion } from 'motion/react';
import { Award, ShieldCheck, TicketCheck, FileCheck } from 'lucide-react';
import { certificationsData } from '../data';
import { Certification } from '../types';

export default function Certifications() {
  const icons = [
    <Award className="w-6 h-6 text-blue-400" />,
    <ShieldCheck className="w-6 h-6 text-teal-400" />,
    <TicketCheck className="w-6 h-6 text-purple-400" />
  ];

  return (
    <section id="certs" className="relative py-24 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        
        {/* Section Heading Setup */}
        <div className="flex flex-col items-start text-left mb-16">
          <p className="font-mono text-xs tracking-widest text-sky-400 uppercase mb-2">05 // Credentials</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Certifications & Training<span className="text-sky-400">.</span>
          </h2>
          <div className="w-12 h-[2px] bg-sky-500 mt-4 rounded" />
        </div>

        {/* Certifications Cards Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {certificationsData.map((cert: Certification, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel p-6 rounded-3xl relative overflow-hidden group flex flex-col justify-between hover:border-slate-800 transition-colors"
            >
              <div>
                {/* Decorative glowing gradient backdrop */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/5 rounded-full filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Header Icon & Issuer */}
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-white/5 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    {icons[idx] || <FileCheck className="w-6 h-6 text-slate-400" />}
                  </div>
                  <span className={`px-3 py-1 rounded-full font-mono text-[9px] uppercase tracking-wider border font-bold ${cert.badgeColor}`}>
                    Official Appr.
                  </span>
                </div>

                <h3 className="font-display font-bold text-base text-white group-hover:text-sky-400 transition-colors leading-snug">
                  {cert.title}
                </h3>
                
                <p className="font-mono text-[10px] text-slate-500 mt-1.5 font-semibold">
                  Issued by {cert.issuer}
                </p>

                <p className="font-sans text-slate-300 text-xs mt-4 leading-relaxed">
                  {cert.description}
                </p>
              </div>

              {/* Footer Date badge */}
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="font-mono text-[9px] text-slate-500 uppercase tracking-widest font-bold">Credential Date</span>
                <span className="font-sans text-xs text-slate-300 font-semibold">{cert.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
