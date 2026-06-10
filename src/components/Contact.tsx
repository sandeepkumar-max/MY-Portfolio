import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, Github, Linkedin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { sandeepAbout } from '../data';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const newErrors = { name: '', email: '', message: '' };
    let isValid = true;

    if (!formState.name.trim()) {
      newErrors.name = 'Your name is required';
      isValid = false;
    }
    if (!formState.email.trim()) {
      newErrors.email = 'An email address is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      newErrors.email = 'Please provide a valid email format';
      isValid = false;
    }
    if (!formState.message.trim()) {
      newErrors.message = 'Please input a short message';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    // Mimic real-network delay first
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
    }, 1200);
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden border-t border-white/5">
      {/* Background neon dots */}
      <div className="ambient-bg ambient-blue top-1/4 right-5 animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        
        {/* Section Heading Setup */}
        <div className="flex flex-col items-start text-left mb-16">
          <p className="font-mono text-xs tracking-widest text-sky-400 uppercase mb-2">07 // Connections</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Get In Touch<span className="text-sky-400">.</span>
          </h2>
          <div className="w-12 h-[2px] bg-sky-500 mt-4 rounded" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left items-start">
          
          {/* Left Column: Contact details lists */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <h3 className="font-display text-xl text-white font-semibold leading-relaxed">
              Let's craft something remarkable together!
            </h3>
            
            <p className="font-sans text-slate-400 text-sm leading-relaxed mb-4">
              Whether you want to discuss a new web project, inquire about app integration, or simply talk tech with a student developer, my inbox is always open. Let us link!
            </p>

            {/* Structured channel widgets */}
            <div className="flex flex-col gap-3.5">
              {[
                { 
                  icon: <Mail className="w-5 h-5 text-sky-400" />, 
                  label: 'Email', 
                  value: sandeepAbout.email, 
                  href: `mailto:${sandeepAbout.email}` 
                },
                { 
                  icon: <Phone className="w-5 h-5 text-emerald-450" />, 
                  label: 'WhatsApp', 
                  value: '+91 62991 05432', 
                  href: `https://wa.me/${sandeepAbout.whatsapp}` 
                },
                { 
                  icon: <Github className="w-5 h-5 text-slate-300" />, 
                  label: 'GitHub', 
                  value: 'SandeepKumarSamastipur', 
                  href: sandeepAbout.github 
                },
                { 
                  icon: <Linkedin className="w-5 h-5 text-indigo-400" />, 
                  label: 'LinkedIn', 
                  value: 'sandeep-samastipur', 
                  href: sandeepAbout.linkedin 
                }
              ].map((chan, idx) => (
                <a
                  key={idx}
                  href={chan.href}
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-2xl glass-panel flex items-center justify-between hover:border-slate-800 transition-colors group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/5 flex items-center justify-center shrink-0">
                      {chan.icon}
                    </div>
                    <div className="flex flex-col">
                      <span className="font-mono text-[9px] uppercase tracking-wider text-slate-500 font-bold">{chan.label}</span>
                      <span className="font-sans text-xs text-slate-200 mt-0.5">{chan.value}</span>
                    </div>
                  </div>

                  <span className="font-sans text-slate-600 group-hover:text-sky-400 text-xs transition-colors pr-2">➔</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Contact form visual desk */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl glass-panel relative overflow-hidden flex flex-col justify-center">
              
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-12 flex flex-col items-center text-center gap-4"
                  >
                    <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-2">
                      <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-white">Message Transmitted!</h3>
                    <p className="font-sans text-slate-400 text-xs max-w-sm leading-relaxed">
                      Thank you, your dispatch has been received. Sandeep will reach back to your provided email address shortly!
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-6 px-6 py-2.5 rounded-xl bg-slate-900 border border-white/5 text-slate-300 text-xs font-semibold hover:bg-slate-800 hover:text-white transition-colors cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col gap-5"
                  >
                    {/* Name input */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="font-mono text-[9px] uppercase tracking-wider text-slate-400 font-bold">
                        Full Name
                      </label>
                      <div className="relative">
                        <input
                          id="name"
                          name="name"
                          type="text"
                          value={formState.name}
                          onChange={handleInputChange}
                          placeholder="Your Name"
                          className={`w-full px-4 py-3.5 rounded-xl bg-slate-950/70 border ${
                            errors.name ? 'border-red-500/50' : 'border-white/5 focus:border-sky-500/50'
                          } text-white font-sans text-xs placeholder:text-slate-600 focus:outline-none transition-colors duration-300`}
                        />
                      </div>
                      {errors.name && (
                        <span className="flex items-center gap-1 font-sans text-[10px] text-red-400 mt-1">
                          <AlertCircle className="w-3 h-3" /> {errors.name}
                        </span>
                      )}
                    </div>

                    {/* Email input */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="font-mono text-[9px] uppercase tracking-wider text-slate-400 font-bold">
                        Email Address
                      </label>
                      <div className="relative">
                        <input
                          id="email"
                          name="email"
                          type="text"
                          value={formState.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          className={`w-full px-4 py-3.5 rounded-xl bg-slate-950/70 border ${
                            errors.email ? 'border-red-500/50' : 'border-white/5 focus:border-sky-500/50'
                          } text-white font-sans text-xs placeholder:text-slate-600 focus:outline-none transition-colors duration-300`}
                        />
                      </div>
                      {errors.email && (
                        <span className="flex items-center gap-1 font-sans text-[10px] text-red-400 mt-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </span>
                      )}
                    </div>

                    {/* Message textbox */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="message" className="font-mono text-[9px] uppercase tracking-wider text-slate-400 font-bold">
                        Message Dispatch
                      </label>
                      <div className="relative">
                        <textarea
                          id="message"
                          name="message"
                          value={formState.message}
                          onChange={handleInputChange}
                          rows={4}
                          placeholder="Sandeep, I would love to build a..."
                          className={`w-full px-4 py-3.5 rounded-xl bg-slate-950/70 border ${
                            errors.message ? 'border-red-500/50' : 'border-white/5 focus:border-sky-500/50'
                          } text-white font-sans text-xs placeholder:text-slate-600 focus:outline-none resize-none transition-colors duration-300`}
                        />
                      </div>
                      {errors.message && (
                        <span className="flex items-center gap-1 font-sans text-[10px] text-red-400 mt-1">
                          <AlertCircle className="w-3 h-3" /> {errors.message}
                        </span>
                      )}
                    </div>

                    {/* Dispatch trigger trigger */}
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full mt-2 py-4 rounded-2xl bg-sky-500 hover:bg-sky-600 disabled:bg-slate-800 text-white font-sans text-xs font-bold tracking-wider uppercase transition-all shadow-[0_8px_20px_rgba(14,165,233,0.25)] hover:shadow-[0_8px_25px_rgba(14,165,233,0.45)] cursor-pointer flex items-center justify-center gap-2"
                    >
                      {submitting ? (
                        <>
                          <div className="w-4 h-4 rounded-full border-2 border-white/20 border-t-white animate-spin" />
                          <span>Processing...</span>
                        </>
                      ) : (
                        <>
                          <span>Transmit Message</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
