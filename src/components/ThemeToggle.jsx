import React from 'react';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle({ isDark, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-full transition-all duration-300 flex items-center justify-center
        ${isDark 
          ? 'bg-white/10 text-yellow-300 hover:bg-white/20 hover:shadow-[0_0_15px_rgba(253,224,71,0.5)]' 
          : 'bg-zinc-800/10 text-emerald-500 hover:bg-zinc-800/20 hover:shadow-[0_0_15px_rgba(16,185,129,0.3)]'
        }`}
      aria-label="Toggle theme"
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}
