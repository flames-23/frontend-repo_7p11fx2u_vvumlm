import React from 'react';
import { motion } from 'framer-motion';
import { Home, User, FolderGit2, Mail } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Showcase from './components/Showcase';
import Contact from './components/Contact';

function useSmoothScroll() {
  React.useEffect(() => {
    const handler = (e) => {
      const target = e.target;
      if (target instanceof HTMLAnchorElement) {
        const href = target.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const el = document.querySelector(href);
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);
}

export default function App() {
  useSmoothScroll();

  return (
    <div className="min-h-screen bg-[#0b0b12] text-white">
      {/* Header */}
      <header className="sticky top-0 z-30 w-full border-b border-white/10 bg-black/30 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#home" className="font-semibold tracking-tight">DS Portfolio</a>
          <nav className="hidden items-center gap-1 sm:flex">
            <a href="#home" className="nav-btn"><Home className="h-4 w-4" />Home</a>
            <a href="#about" className="nav-btn"><User className="h-4 w-4" />About</a>
            <a href="#showcase" className="nav-btn"><FolderGit2 className="h-4 w-4" />Showcase</a>
            <a href="#contact" className="nav-btn"><Mail className="h-4 w-4" />Contact</a>
          </nav>
        </div>
      </header>

      {/* Sections */}
      <Hero />
      <About />
      <Showcase />
      <Contact />

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/30">
        <div className="mx-auto max-w-6xl px-6 py-6 text-sm text-white/60">
          © {new Date().getFullYear()} — Built with React, Tailwind, Framer Motion, and Spline.
        </div>
      </footer>

      {/* Styles for nav buttons */}
      <style>{`
        .nav-btn{display:inline-flex;align-items:center;gap:.5rem;padding:.5rem .75rem;border-radius:.75rem;border:1px solid hsl(0 0% 100% / .08);background:hsla(0,0%,100%,.04)}
        .nav-btn:hover{background:hsla(0,0%,100%,.08)}
      `}</style>
    </div>
  );
}
