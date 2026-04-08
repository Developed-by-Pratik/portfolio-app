import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Coffee, Database, Lock, Layout } from 'lucide-react';

export default function Projects({ isDark }) {
  const projects = [
    {
      title: "Cafe Management System",
      type: "SaaS Product",
      description: "A full-stack enterprise platform for cafe operations. Features multi-role authentication, real-time order tracking, and inventory management. Engineered the entire backend API ecosystem and secure auth flow.",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1200",
      tags: ["React 18", "Spring Boot", "Spring Security", "PostgreSQL", "JWT"],
      features: [
        { icon: <Lock size={14} />, text: "JWT & Spring Security Auth" },
        { icon: <Database size={14} />, text: "JPA & PostgreSQL Logic" },
        { icon: <Layout size={14} />, text: "Responsive React Hooks UI" }
      ],
      githubUrl: "https://github.com/Developed-by-Pratik",
      liveUrl: "#"
    }
  ];

  return (
    <section id="projects" className={`py-32 px-4 transition-colors duration-300 ${isDark ? 'bg-zinc-950' : 'bg-zinc-50/50'}`}>
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
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-emerald-500">Selected Work</span>
          </div>
          <h2 className={`text-4xl md:text-6xl font-bold tracking-tight ${isDark ? 'text-zinc-100' : 'text-zinc-950'}`}>Projects</h2>
        </motion.div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}
            >
              {/* Image Side - Asymmetric */}
              <div className="w-full lg:w-3/5 group">
                <div className={`relative overflow-hidden rounded-[2.5rem] border shadow-2xl skew-y-1 group-hover:skew-y-0 transition-transform duration-700 ${isDark ? 'border-white/5' : 'border-zinc-200'}`}>
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700" />
                  <div className={`absolute inset-0 transition-colors duration-500 ${isDark ? 'bg-zinc-950/20 group-hover:bg-transparent' : 'bg-transparent'}`}></div>
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-2/5">
                <div className="flex items-center space-x-2 text-emerald-500 mb-4 font-bold text-xs tracking-widest uppercase">
                  <Coffee size={14} />
                  <span>{project.type}</span>
                </div>
                <h3 className={`text-3xl md:text-5xl font-bold mb-6 tracking-tight leading-tight ${isDark ? 'text-zinc-100' : 'text-zinc-950'}`}>
                  {project.title}
                </h3>
                <p className={`text-lg leading-relaxed mb-8 font-medium ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                  {project.description}
                </p>

                <div className="space-y-4 mb-10">
                  {project.features.map((feature, i) => (
                    <div key={i} className={`flex items-center space-x-3 ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>
                      <div className="text-emerald-500 bg-emerald-500/10 p-1.5 rounded-md">
                        {feature.icon}
                      </div>
                      <span className="text-sm font-semibold">{feature.text}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-10">
                  {project.tags.map((tag, i) => (
                    <span key={i} className={`px-3 py-1 text-[10px] uppercase tracking-widest font-extrabold border rounded-md ${isDark ? 'bg-zinc-900 border-white/5 text-zinc-500' : 'bg-zinc-100 border-zinc-200 text-zinc-500'}`}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-8">
                  <a href={project.githubUrl} className={`flex items-center space-x-2 font-bold transition-colors ${isDark ? 'text-zinc-100 hover:text-emerald-500' : 'text-zinc-950 hover:text-emerald-600'}`}>
                    <Github size={20} />
                    <span className="text-sm uppercase tracking-widest">Source</span>
                  </a>
                  <a href={project.liveUrl} className={`flex items-center space-x-2 font-bold transition-colors opacity-50 cursor-not-allowed ${isDark ? 'text-zinc-100' : 'text-zinc-950'}`}>
                    <ExternalLink size={20} />
                    <span className="text-sm uppercase tracking-widest">Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
