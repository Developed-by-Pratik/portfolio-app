import React from 'react';
import { motion, useTransform } from 'framer-motion';

export default function Overlay({ scrollYProgress, isDark }) {
  // Use scroll progress to orchestrate opacities and vertical movements
  
  // Section 1: 0% to 20%
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.15], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.15], ["0%", "-100%"]);

  // Section 2: 25% to 45%
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.4, 0.5], [0, 1, 1, 0]);
  const x2 = useTransform(scrollYProgress, [0.2, 0.4], ["-20%", "0%"]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.5], ["50%", "-50%"]);

  // Section 3: 55% to 80%
  const opacity3 = useTransform(scrollYProgress, [0.55, 0.65, 0.75, 0.85], [0, 1, 1, 0]);
  const x3 = useTransform(scrollYProgress, [0.55, 0.75], ["20%", "0%"]);
  const y3 = useTransform(scrollYProgress, [0.55, 0.85], ["50%", "-50%"]);

  return (
    <div className="absolute inset-0 pointer-events-none flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* SECTION 1 - 0% Scroll */}
      <motion.div 
        style={{ opacity: opacity1, y: y1 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
      >
        <div className="flex items-center space-x-4 mb-8">
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#00A8E8]"></span>
          <span className="text-sm font-bold tracking-[0.3em] text-[#00A8E8] uppercase drop-shadow-[0_0_8px_rgba(0,168,232,0.5)]">
            Software Development Engineer
          </span>
          <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#00A8E8]"></span>
        </div>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 mb-6 drop-shadow-2xl">
          PRATIK <br className="md:hidden" />KAKADE
        </h1>
        <p className="text-xl md:text-2xl font-light mt-4 text-cyan-50/70 max-w-2xl text-balance tracking-wide">
          Java Backend Developer specialized in <strong className="font-semibold text-white/90">high-performance</strong> systems.
        </p>
      </motion.div>

      {/* SECTION 2 - 30% Scroll */}
      <motion.div 
        style={{ opacity: opacity2, y: y2, x: x2 }}
        className="absolute inset-0 flex flex-col justify-center items-start pl-4 md:pl-8 lg:pl-16 w-full"
      >
        <div className="max-w-xl bg-white/[0.03] backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-3xl shadow-[0_8px_32px_0_rgba(0,168,232,0.15)] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00A8E8] to-transparent opacity-50"></div>
          <h2 className="text-4xl md:text-5xl font-black leading-tight text-white mb-6 tracking-tight">
            I build <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A8E8] to-cyan-300">enterprise-level</span> applications.
          </h2>
          <p className="text-lg md:text-xl text-cyan-50/70 font-medium leading-relaxed">
            Architecting scalable REST APIs and secure Spring Boot microservices tailored for the real world.
          </p>
        </div>
      </motion.div>

      {/* SECTION 3 - 60% Scroll */}
      <motion.div 
        style={{ opacity: opacity3, y: y3, x: x3 }}
        className="absolute inset-0 flex flex-col justify-center items-end pr-4 md:pr-8 lg:pr-16 text-right w-full"
      >
        <div className="max-w-xl bg-white/[0.03] backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-3xl shadow-[0_8px_32px_0_rgba(0,168,232,0.15)] relative overflow-hidden text-left">
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00A8E8] to-transparent opacity-50"></div>
          <h2 className="text-4xl md:text-5xl font-black leading-tight text-white mb-6 tracking-tight">
            Solving <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A8E8] to-cyan-300">real-world</span> problems.
          </h2>
          <p className="text-lg md:text-xl text-cyan-50/70 font-medium leading-relaxed">
            Turning complex business requirements into seamless, interactive experiences.
          </p>
        </div>
      </motion.div>

    </div>
  );
}
