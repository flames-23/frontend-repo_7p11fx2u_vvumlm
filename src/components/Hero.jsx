import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-[#0b0b12]">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays (do not block pointer events) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0b0b12]/60 via-[#0b0b12]/30 to-[#0b0b12]" />
      <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-fuchsia-500/20 blur-3xl" />

      {/* Content */}
      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 pt-28 text-center text-white sm:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md"
        >
          <Rocket className="h-4 w-4 text-cyan-400" />
          <span className="text-sm text-white/80">Data Science · ML · Visualization</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="text-4xl font-extrabold leading-tight sm:text-6xl"
        >
          Crafting Insightful Models and Beautiful Visualizations
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-4 max-w-2xl text-balance text-white/70"
        >
          I build machine learning solutions and interactive data stories with a focus on clarity, performance, and delightful UX.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
        >
          <a
            href="#showcase"
            className="group inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-6 py-3 font-semibold text-white shadow-lg shadow-cyan-500/10 transition-transform hover:scale-[1.02]"
          >
            Explore Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white/90 backdrop-blur transition-colors hover:bg-white/10"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}
