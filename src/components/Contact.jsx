import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, Loader2, CheckCircle2, AlertCircle, Linkedin, Github } from 'lucide-react';

export default function Contact({ isDark }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    const payload = {
      access_key: 'f4f3c825-16fc-470c-a779-19ae35e994ca',
      ...formData,
      subject: 'New Portfolio Contact Message'
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        // Reset after 3 seconds
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section id="contact" className={`py-32 px-4 transition-colors duration-300 relative overflow-hidden ${isDark ? 'bg-zinc-950' : 'bg-zinc-50'}`}>
      {/* Subtle Background Elements */}
      <div className={`absolute top-0 right-0 w-[800px] h-[800px] rounded-full blur-[120px] opacity-20 pointer-events-none -translate-y-1/2 translate-x-1/3 ${isDark ? 'bg-emerald-500/10' : 'bg-emerald-500/5'}`}></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <div className="flex items-center space-x-3 mb-4">
            <span className="h-px w-8 bg-emerald-500"></span>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-emerald-500">Initiate Link</span>
          </div>
          <h2 className={`text-4xl md:text-6xl font-bold tracking-tight ${isDark ? 'text-zinc-100' : 'text-zinc-950'}`}>Connect</h2>
        </motion.div>

        <div className="asymmetric-grid">
          {/* Left Side - Typography & Context */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-between"
          >
            <div>
              <h3 className={`text-3xl md:text-5xl font-bold tracking-tight mb-8 leading-[1.1] ${isDark ? 'text-zinc-100' : 'text-zinc-950'}`}>
                Let's architect <br />
                <span className="text-emerald-500">something robust.</span>
              </h3>
              <p className={`text-lg max-w-md mb-12 font-medium ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                Currently open for new technical challenges and collaborative engineering roles. Drop a message to discuss system design, backend ecosystems, or potential opportunities.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <a href="mailto:Pratikkakade4618@gmail.com" className={`flex items-center space-x-3 group ${isDark ? 'text-zinc-400 hover:text-emerald-500' : 'text-zinc-600 hover:text-emerald-600'} transition-colors`}>
                  <div className={`p-3 rounded-xl border ${isDark ? 'border-white/5 bg-zinc-900 group-hover:border-emerald-500/50' : 'border-zinc-200 bg-white group-hover:border-emerald-500/50'} transition-colors`}>
                    <Mail size={20} />
                  </div>
                  <span className="font-medium text-sm tracking-wide">Pratikkakade4618@gmail.com</span>
                </a>
              </div>
              
              <div className="flex space-x-4 pt-4">
                <a href="https://linkedin.com/in/pratikkakade" target="_blank" rel="noreferrer" className={`p-3 rounded-xl border transition-all ${isDark ? 'border-white/5 bg-zinc-900 text-zinc-400 hover:text-emerald-500 hover:border-emerald-500/50' : 'border-zinc-200 bg-white text-zinc-600 hover:text-emerald-600 hover:border-emerald-500/50'}`}>
                  <Linkedin size={20} />
                </a>
                <a href="https://github.com/Developed-by-Pratik" target="_blank" rel="noreferrer" className={`p-3 rounded-xl border transition-all ${isDark ? 'border-white/5 bg-zinc-900 text-zinc-400 hover:text-emerald-500 hover:border-emerald-500/50' : 'border-zinc-200 bg-white text-zinc-600 hover:text-emerald-600 hover:border-emerald-500/50'}`}>
                  <Github size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Side - The Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={`p-8 md:p-10 rounded-[2rem] border shadow-2xl relative overflow-hidden ${isDark ? 'bg-zinc-900 border-white/5' : 'bg-white border-zinc-200'}`}>
              
              {/* Internal abstract pattern */}
              <div className={`absolute -top-24 -right-24 w-48 h-48 rounded-full blur-[60px] opacity-50 pointer-events-none ${isDark ? 'bg-emerald-500/20' : 'bg-emerald-500/10'}`}></div>

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="space-y-2">
                  <label htmlFor="name" className={`text-xs font-bold uppercase tracking-widest ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    disabled={status === 'loading'}
                    className={`w-full px-5 py-4 rounded-xl border font-medium outline-none transition-all focus:ring-2 focus:ring-emerald-500/50 ${isDark ? 'bg-zinc-950 border-white/10 text-zinc-100 placeholder-zinc-600 focus:border-emerald-500' : 'bg-zinc-50 border-zinc-200 text-zinc-950 placeholder-zinc-400 focus:border-emerald-500'}`}
                    placeholder="John Doe"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className={`text-xs font-bold uppercase tracking-widest ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    disabled={status === 'loading'}
                    className={`w-full px-5 py-4 rounded-xl border font-medium outline-none transition-all focus:ring-2 focus:ring-emerald-500/50 ${isDark ? 'bg-zinc-950 border-white/10 text-zinc-100 placeholder-zinc-600 focus:border-emerald-500' : 'bg-zinc-50 border-zinc-200 text-zinc-950 placeholder-zinc-400 focus:border-emerald-500'}`}
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className={`text-xs font-bold uppercase tracking-widest ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    disabled={status === 'loading'}
                    className={`w-full px-5 py-4 rounded-xl border font-medium outline-none transition-all resize-none focus:ring-2 focus:ring-emerald-500/50 ${isDark ? 'bg-zinc-950 border-white/10 text-zinc-100 placeholder-zinc-600 focus:border-emerald-500' : 'bg-zinc-50 border-zinc-200 text-zinc-950 placeholder-zinc-400 focus:border-emerald-500'}`}
                    placeholder="How can we collaborate?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading' || status === 'success'}
                  className={`w-full flex items-center justify-center space-x-2 px-8 py-4 rounded-xl font-bold bg-emerald-500 text-zinc-950 hover:bg-emerald-400 transition-all active:-translate-y-px ${status === 'loading' ? 'opacity-70 cursor-not-allowed' : 'shadow-[0_0_20px_rgba(16,185,129,0.15)] hover:shadow-[0_0_30px_rgba(16,185,129,0.25)]'}`}
                >
                  {status === 'idle' && (
                    <>
                      <span>TRANSMIT MESSAGE</span>
                      <ArrowRight size={18} className="translate-y-[1px]" />
                    </>
                  )}
                  {status === 'loading' && (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      <span>SENDING DATA...</span>
                    </>
                  )}
                  {status === 'success' && (
                    <>
                      <CheckCircle2 size={18} />
                      <span>TRANSMISSION SECURE</span>
                    </>
                  )}
                  {status === 'error' && (
                    <>
                      <AlertCircle size={18} className="text-red-900" />
                      <span className="text-red-900">TRANSMISSION FAILED</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
