import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export default function Experience({ isDark }) {
  const experiences = [
    {
      role: "Software Development Engineer (SDE-1)",
      company: "Aloha Technology Pvt. Ltd.",
      location: "Pune, Maharashtra",
      period: "July 2025 - Present",
      description: "Driving full-stack feature development for enterprise applications. Specializing in high-performance dashboards and complex workflow modules using React and Spring Boot. Optimized PostgreSQL queries reducing API latency by 30%.",
      skills: ["Spring Boot", "React", "PostgreSQL", "API Optimization"]
    },
    {
      role: "Junior Java Developer",
      company: "Tata Consultancy Services Pvt. Ltd.",
      location: "Hyderabad, Telangana",
      period: "June 2024 - June 2025",
      description: "Engineered backend services for global order management systems. Maintained critical REST APIs and utilized Spring Data JPA for complex database operations. Focused on data integrity and SQL performance tuning.",
      skills: ["Java", "Spring Data JPA", "Hibernate", "REST APIs"]
    },
    {
      role: "Full Stack Developer Intern",
      company: "ThunderCube Pvt. Ltd.",
      location: "Pune, Maharashtra",
      period: "Sept 2023 - March 2024",
      description: "Contributed to building exam and result management modules. Integrated Spring Boot backends with React frontends for real-time data dashboards in an Agile environment.",
      skills: ["React", "Spring Boot", "Agile", "REST Integration"]
    }
  ];

  return (
    <section id="experience" className={`py-32 px-4 transition-colors duration-300 ${isDark ? 'bg-zinc-950' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-left mb-20"
        >
          <div className="flex items-center space-x-3 mb-4">
            <span className="h-px w-8 bg-emerald-500"></span>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-emerald-500">Professional Journey</span>
          </div>
          <h2 className={`text-4xl md:text-6xl font-bold tracking-tight ${isDark ? 'text-zinc-100' : 'text-zinc-950'}`}>Experience</h2>
        </motion.div>

        <div className="max-w-4xl">
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="group relative grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-12"
              >
                {/* Timeline metadata */}
                <div className="flex flex-col pt-1">
                  <span className={`text-sm font-bold mb-1 ${isDark ? 'text-zinc-100' : 'text-zinc-900'}`}>{exp.period}</span>
                  <div className={`flex items-center text-xs font-medium ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>
                    <MapPin size={12} className="mr-1" />
                    {exp.location}
                  </div>
                </div>

                {/* Content card */}
                <div className="relative pb-8 md:pb-0">
                  {/* Subtle Node */}
                  <div className="absolute -left-6 md:-left-8 top-2 w-2 h-2 rounded-full bg-emerald-500 group-hover:scale-150 transition-transform"></div>
                  
                  <h3 className={`text-2xl font-bold mb-1 ${isDark ? 'text-zinc-100' : 'text-zinc-950'}`}>{exp.role}</h3>
                  <h4 className="text-lg font-semibold text-emerald-500 mb-4">{exp.company}</h4>
                  <p className={`leading-relaxed mb-6 font-medium text-balance ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                    {exp.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <span key={i} className={`px-3 py-1 text-[10px] uppercase tracking-widest font-bold border rounded-md ${isDark ? 'border-white/5 bg-zinc-900 text-zinc-400' : 'border-zinc-200 bg-zinc-50 text-zinc-500'}`}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
