import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Code2, Globe } from 'lucide-react';

export default function Hero({ isDark }) {
  const heroImage = "/hero-visual.png"; // Updated path to public image
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -50]);

  return (
    <section className={`relative min-h-[90dvh] flex items-center pt-32 pb-20 overflow-hidden transition-colors duration-300 ${isDark ? 'bg-zinc-950' : 'bg-zinc-50'}`}>
      {/* Structural Background Pattern */}
      <motion.div 
           style={{ y: y1 }}
           className={`absolute inset-0 pointer-events-none ${isDark ? 'opacity-[0.03]' : 'opacity-[0.05]'}`} 
           style={{ backgroundImage: `radial-gradient(circle at 2px 2px, ${isDark ? 'white' : 'black'} 1px, transparent 0)`, backgroundSize: '48px 48px' }}>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content Column - Asymmetric Focus */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* ... Content remains the same ... */}
            <div className="flex items-center space-x-3 mb-8">
              <span className={`h-px w-8 ${isDark ? 'bg-emerald-500/50' : 'bg-emerald-500'}`}></span>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-emerald-500">
                Software Development Engineer — SDE-1
              </span>
            </div>

            <h1 className={`text-6xl md:text-8xl font-bold tracking-tight leading-[0.9] mb-8 text-balance ${isDark ? 'text-zinc-100' : 'text-zinc-950'}`}>
              PRATIK 
              <span className={`inline-block align-middle mx-4 w-16 md:w-24 h-12 md:h-16 rounded-full overflow-hidden border ${isDark ? 'border-emerald-500/30' : 'border-emerald-500/50'}`}>
                <img src={heroImage} alt="tech context" className="w-full h-full object-cover scale-150 rotate-12" />
              </span>
              KAKADE
            </h1>

            <p className={`text-lg md:text-xl max-w-xl mb-12 leading-relaxed font-medium ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
              Building scalable <span className={isDark ? 'text-zinc-100' : 'text-zinc-950'}>fintech solutions</span> and high-performance <span className="text-emerald-500 font-bold">Java/Spring Boot</span> ecosystems with 2+ years of production experience.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-6 sm:space-y-0 sm:space-x-8">
              <a
                href="#projects"
                className="group flex items-center justify-center px-8 py-4 text-sm font-bold text-zinc-950 bg-emerald-500 rounded-full hover:bg-emerald-400 transition-all shadow-[0_0_20px_rgba(16,185,129,0.15)] hover:shadow-[0_0_30px_rgba(16,185,129,0.25)]"
              >
                VIEW PROJECTS
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
              </a>
              
              <div className="flex items-center space-x-6">
                <a href="https://linkedin.com/in/pratikkakade" target="_blank" rel="noreferrer" className={`${isDark ? 'text-zinc-500 hover:text-emerald-500' : 'text-zinc-400 hover:text-emerald-600'} transition-colors`}>
                  <Linkedin size={20} />
                </a>
                <a href="https://github.com/Developed-by-Pratik" target="_blank" rel="noreferrer" className={`${isDark ? 'text-zinc-500 hover:text-emerald-500' : 'text-zinc-400 hover:text-emerald-600'} transition-colors`}>
                  <Github size={20} />
                </a>
                <a href="mailto:Pratikkakade4618@gmail.com" className={`${isDark ? 'text-zinc-500 hover:text-emerald-500' : 'text-zinc-400 hover:text-emerald-600'} transition-colors`}>
                  <Mail size={20} />
                </a>
              </div>
            </div>

            <div className={`mt-20 grid grid-cols-2 gap-8 border-t pt-10 ${isDark ? 'border-white/5' : 'border-zinc-200'}`}>
              <div>
                <div className={`text-2xl font-bold ${isDark ? 'text-zinc-100' : 'text-zinc-950'}`}>2+ Yrs</div>
                <div className="text-xs uppercase tracking-widest text-zinc-500 mt-1">Experience</div>
              </div>
              <div>
                <div className={`text-2xl font-bold ${isDark ? 'text-zinc-100' : 'text-zinc-950'}`}>SaaS/Fintech</div>
                <div className="text-xs uppercase tracking-widest text-zinc-500 mt-1">Specialization</div>
              </div>
            </div>
          </motion.div>

          {/* Right Visual Column - Technical Density with Parallax */}
          <motion.div
            style={{ y: y2 }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-square w-full max-w-[500px] ml-auto">
              <div className={`relative inset-0 rounded-[3rem] overflow-hidden border shadow-2xl ${isDark ? 'border-white/10' : 'border-zinc-200'}`}>
                <img src={heroImage} alt="Pratik's Technical Universe" className={`w-full h-full object-cover ${isDark ? 'opacity-80' : 'opacity-100'}`} />
                <div className={`absolute inset-0 bg-gradient-to-tr from-zinc-950 via-zinc-950/20 to-transparent ${isDark ? 'opacity-100' : 'opacity-0'}`}></div>
              </div>

              {/* Floating Performance Tag */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className={`absolute -bottom-6 -left-6 border p-6 rounded-2xl shadow-2xl backdrop-blur-xl ${isDark ? 'bg-zinc-900 border-white/10' : 'bg-white border-zinc-100'}`}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                    <Code2 size={20} />
                  </div>
                  <div>
                    <div className={`text-sm font-bold ${isDark ? 'text-zinc-100' : 'text-zinc-950'}`}>System Architect</div>
                    <div className="text-[10px] uppercase tracking-wider text-zinc-500">High-Availability Rest APIs</div>
                  </div>
                </div>
              </motion.div>

              {/* Orbital Glow */}
              <div className={`absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] rounded-full blur-[120px] ${isDark ? 'bg-emerald-500/5' : 'bg-emerald-500/10'}`}></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
