import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Navbar({ isDark, toggleTheme, scrollToSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const resumeLink = "https://drive.google.com/file/d/18xjv_A-WLUpabjH1Cq7yxsMy7J-T-q9X/view?usp=sharing";

  const handleLinkClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      scrollToSection(href);
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? (isDark ? 'bg-zinc-950/80 backdrop-blur-md border-b border-white/5' : 'bg-white/80 backdrop-blur-md border-b border-zinc-200/50 shadow-sm') : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <a 
              href="#" 
              onClick={(e) => handleLinkClick(e, '#')}
              className="text-xl font-bold tracking-tighter flex items-center"
            >
              <span className={isDark ? "text-white" : "text-zinc-950"}>PRATIK</span>
              <span className="text-emerald-500 ml-0.5">.</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-sm font-medium transition-colors hover:text-emerald-500 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}
              >
                {link.name}
              </a>
            ))}
            <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
            <a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-full bg-emerald-500 text-zinc-950 font-bold hover:bg-emerald-400 transition-all shadow-[0_0_20px_rgba(16,185,129,0.15)] hover:shadow-[0_0_30px_rgba(16,185,129,0.25)] hover:-translate-y-0.5"
            >
              Resume
            </a>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-md ${isDark ? 'text-zinc-300 hover:text-white' : 'text-zinc-600 hover:text-zinc-950'}`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden border-b ${isDark ? 'bg-zinc-900 border-white/5' : 'bg-white border-zinc-200'}`}
          >
            <div className="px-4 pt-2 pb-8 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`block px-3 py-4 rounded-md text-base font-medium ${isDark ? 'text-zinc-300 hover:text-white hover:bg-white/5' : 'text-zinc-700 hover:text-zinc-950 hover:bg-zinc-50'}`}
                >
                  {link.name}
                </a>
              ))}
              <div className="px-3 pt-4">
                <a
                  href={resumeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex justify-center py-4 rounded-full bg-emerald-500 text-zinc-950 font-bold hover:bg-emerald-400 transition-all"
                >
                  Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
