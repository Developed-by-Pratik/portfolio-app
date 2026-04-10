import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Coffee, Database, Lock, Layout, Cloud, Smartphone } from 'lucide-react';

export default function Projects({ isDark }) {
  const projects = [
    {
      title: "Cafe Management System",
      type: "SaaS Product",
      description: "A full-stack enterprise platform for cafe operations. Features multi-role authentication, real-time order tracking, and inventory management.",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1200",
      tags: ["React 18", "Spring Boot", "PostgreSQL", "JWT"],
      githubUrl: "https://github.com/Developed-by-Pratik",
      liveUrl: "#",
      colSpan: "col-span-1 md:col-span-2 lg:col-span-2" // Large card
    },
    {
      title: "Fintech Dashboard API",
      type: "Backend Service",
      description: "High-performance REST API handling thousands of concurrent transactions with Spring Security.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
      tags: ["Spring Boot", "Redis", "OAuth2"],
      githubUrl: "https://github.com/Developed-by-Pratik",
      liveUrl: "#",
      colSpan: "col-span-1" // Standard card
    },
    {
      title: "Real-time Order Sync",
      type: "Microservice",
      description: "Kafka-driven event architecture syncing order data across 5 distinct services globally.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200",
      tags: ["Java", "Kafka", "Docker"],
      githubUrl: "https://github.com/Developed-by-Pratik",
      liveUrl: "#",
      colSpan: "col-span-1" // Standard card
    },
    {
      title: "Auth Gateway X",
      type: "Security",
      description: "A centralized JWT authentication provider enforcing role-based access for multi-tenant apps.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=1200",
      tags: ["Spring Security", "PostgreSQL"],
      githubUrl: "https://github.com/Developed-by-Pratik",
      liveUrl: "#",
      colSpan: "col-span-1 md:col-span-2 lg:col-span-2" // Large card
    }
  ];

  return (
    <section id="projects" className={`py-32 px-4 transition-colors duration-300 relative ${isDark ? 'bg-[#050510]' : 'bg-zinc-50'}`}>
      
      {/* Abstract Background element for glassmorphism */}
      {isDark && (
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00A8E8] rounded-full mix-blend-screen filter blur-[128px] opacity-20 pointer-events-none"></div>
      )}

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20 text-center"
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <span className="h-px w-8 bg-[#00A8E8]"></span>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#00A8E8]">Selected Work</span>
            <span className="h-px w-8 bg-[#00A8E8]"></span>
          </div>
          <h2 className={`text-4xl md:text-6xl font-bold tracking-tight ${isDark ? 'text-zinc-100' : 'text-zinc-950'}`}>Projects Showcase</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative overflow-hidden rounded-[2rem] border transition-all duration-500 ${isDark ? 'bg-white/5 border-white/10 hover:border-[#00A8E8]/50 hover:bg-white/10 hover:shadow-[0_0_40px_rgba(0,168,232,0.15)]' : 'bg-white border-zinc-200 hover:shadow-2xl'} backdrop-blur-xl ${project.colSpan}`}
            >
              <div className="absolute inset-0 z-0">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-700 blend-luminosity scale-105 group-hover:scale-100" />
                <div className={`absolute inset-0 bg-gradient-to-t ${isDark ? 'from-[#050510] via-[#050510]/80' : 'from-white via-white/80'} to-transparent z-10`}></div>
              </div>

              <div className="relative z-20 flex flex-col h-full p-8 md:p-10">
                <div className="flex items-center justify-between mb-auto">
                  <div className="flex items-center space-x-2 text-[#00A8E8] mb-4 font-bold text-[10px] tracking-widest uppercase bg-[#00A8E8]/10 px-3 py-1 rounded-full w-fit backdrop-blur-md">
                    <Database size={12} />
                    <span>{project.type}</span>
                  </div>
                  
                  <div className="flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                     <a href={project.githubUrl} className={`p-2 rounded-full backdrop-blur-md transition-colors ${isDark ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-zinc-900/10 hover:bg-zinc-900/20 text-zinc-900'}`}>
                        <Github size={18} />
                     </a>
                     <a href={project.liveUrl} className={`p-2 rounded-full backdrop-blur-md transition-colors cursor-not-allowed ${isDark ? 'bg-white/10 text-white/50' : 'bg-zinc-900/10 text-zinc-900/50'}`}>
                        <ExternalLink size={18} />
                     </a>
                  </div>
                </div>

                <div className="mt-20">
                  <h3 className={`text-2xl md:text-3xl font-bold mb-4 tracking-tight ${isDark ? 'text-zinc-100' : 'text-zinc-950'}`}>
                    {project.title}
                  </h3>
                  <p className={`text-sm md:text-base leading-relaxed mb-6 font-medium ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className={`px-3 py-1 text-[10px] uppercase tracking-widest font-bold border rounded-full backdrop-blur-md ${isDark ? 'bg-white/5 border-white/10 text-zinc-300' : 'bg-zinc-100 border-zinc-200 text-zinc-600'}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
