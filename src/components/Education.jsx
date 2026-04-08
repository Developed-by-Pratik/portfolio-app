import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin } from 'lucide-react';

export default function Education({ isDark }) {
  const education = [
    {
      degree: "Master’s in Computer Science (MCS)",
      institution: "Sinhgad Institute Of Science & Technology",
      location: "Pune, Maharashtra",
      year: "2024 - 2026"
    },
    {
      degree: "Bachelor’s in Computer Science (BCS)",
      institution: "Sinhgad Institute Of Technology",
      location: "Pune, Maharashtra",
      year: "2021 - 2024",
      grade: "CGPA: 9.0"
    }
  ];

  return (
    <section id="education" className={`py-32 px-4 transition-colors duration-300 ${isDark ? 'bg-zinc-950' : 'bg-zinc-50'}`}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <div className="flex items-center space-x-3 mb-4">
            <span className="h-px w-8 bg-emerald-500"></span>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-emerald-500">Academic Background</span>
          </div>
          <h2 className={`text-4xl md:text-6xl font-bold tracking-tight ${isDark ? 'text-zinc-100' : 'text-zinc-950'}`}>Education</h2>
        </motion.div>

        <div className="max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className={`p-10 rounded-[2rem] border group transition-all ${isDark ? 'border-white/5 bg-zinc-900 hover:border-emerald-500/30' : 'border-zinc-200 bg-white hover:border-emerald-500/50 hover:shadow-xl'}`}
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 bg-emerald-500/10 text-emerald-500 group-hover:bg-emerald-500 group-hover:text-zinc-950 transition-colors duration-500">
                <GraduationCap size={28} />
              </div>
              <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-zinc-100' : 'text-zinc-950'}`}>{edu.degree}</h3>
              <h4 className={`text-lg font-semibold mb-6 ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>{edu.institution}</h4>
              
              <div className={`flex flex-wrap items-center gap-4 text-xs font-bold uppercase tracking-widest ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>
                <div className="flex items-center">
                  <MapPin size={14} className="mr-1.5 text-emerald-500" /> 
                  {edu.location}
                </div>
                <div className="flex items-center">
                  <span className="text-emerald-500 mr-2">•</span>
                  {edu.year}
                </div>
                {edu.grade && (
                   <div className="flex items-center">
                   <span className="text-emerald-500 mr-2">•</span>
                   {edu.grade}
                 </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
