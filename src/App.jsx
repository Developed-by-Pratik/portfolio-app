import React, { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SpotlightCursor from './components/SpotlightCursor';

function App() {
  const [isDark, setIsDark] = useState(true);
  const lenisRef = useRef(null);

  useEffect(() => {
    // Check local storage or system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }

    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.5,
      lerp: 0.1,
      smoothWheel: true,
      wheelMultiplier: 1.0,
      infinite: false,
      anchors: true,
    });

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const scrollToSection = (id) => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(id, { duration: 1.5 });
      // Update URL hash without jumping
      window.history.pushState(null, null, id);
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 relative ${isDark ? 'bg-zinc-950 text-zinc-100' : 'bg-zinc-50 text-zinc-950'}`}>
      <SpotlightCursor isDark={isDark} />
      <Navbar isDark={isDark} toggleTheme={toggleTheme} scrollToSection={scrollToSection} />
      <Hero isDark={isDark} />
      <Experience isDark={isDark} />
      <Skills isDark={isDark} />
      <Projects isDark={isDark} />
      <Education isDark={isDark} />
      <Contact isDark={isDark} />
      <Footer isDark={isDark} />
    </div>
  );
}

export default App;
