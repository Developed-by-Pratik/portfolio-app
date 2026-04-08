import React from 'react';

export default function Footer({ isDark }) {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={`py-20 border-t ${isDark ? 'bg-zinc-950 border-white/5' : 'bg-zinc-50 border-zinc-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
        <a href="#" className="text-xl font-bold tracking-tighter mb-8 flex items-center">
          <span className={isDark ? "text-white" : "text-zinc-950"}>PRATIK</span>
          <span className="text-emerald-500 ml-0.5">.</span>
        </a>
        <p className={`mb-8 max-w-sm ${isDark ? 'text-zinc-400' : 'text-zinc-600'} font-medium`}>
          High-performance systems engineering. From backend API ecosystems to refined frontend experiences.
        </p>
        <div className={`text-[10px] uppercase tracking-[0.2em] font-bold ${isDark ? 'text-zinc-600' : 'text-zinc-400'}`}>
          &copy; {currentYear} PRATIK PRAKASH KAKADE
        </div>
      </div>
    </footer>
  );
}
