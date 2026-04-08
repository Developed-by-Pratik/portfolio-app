import React from 'react';
import { motion } from 'framer-motion';

export default function Skills({ isDark }) {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: 'Java', level: 95 },
        { name: 'JavaScript', level: 85 }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: 'Spring Boot', level: 90 },
        { name: 'Spring Security', level: 85 },
        { name: 'REST APIs', level: 95 },
        { name: 'Hibernate/JPA', level: 88 }
      ]
    },
    {
      title: "Frontend & UI",
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'HTML5/CSS3', level: 95 }
      ]
    },
    {
      title: "Databases & Tools",
      skills: [
        { name: 'PostgreSQL/MySQL', level: 88 },
        { name: 'Git/GitHub', level: 95 },
        { name: 'Docker/AWS', level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className={`py-32 px-4 relative overflow-hidden transition-colors duration-300 ${isDark ? 'bg-zinc-950' : 'bg-white'}`}>
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
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-emerald-500">Technical Capability</span>
          </div>
          <h2 className={`text-4xl md:text-6xl font-bold tracking-tight ${isDark ? 'text-zinc-100' : 'text-zinc-950'}`}>Core Stack</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: catIndex * 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <h3 className={`text-xl font-bold mb-8 border-b pb-2 inline-block ${isDark ? 'text-zinc-100 border-white/5' : 'text-zinc-900 border-zinc-100'}`}>
                {category.title}
              </h3>
              
              <div className="space-y-8">
                {category.skills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-end mb-3">
                      <span className={`text-sm font-bold uppercase tracking-widest ${isDark ? 'text-zinc-300' : 'text-zinc-600'}`}>{skill.name}</span>
                      <span className="text-xs font-bold text-emerald-500">{skill.level}%</span>
                    </div>
                    <div className={`w-full h-1 rounded-full overflow-hidden ${isDark ? 'bg-zinc-900' : 'bg-zinc-100'}`}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                        className="h-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.3)]"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
