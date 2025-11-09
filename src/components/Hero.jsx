import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { ArrowDown, Rocket } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] w-full overflow-hidden bg-[#0b0b12]">
      {/* 3D Spline Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlays that don't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#0b0b12]/60 via-[#0b0b12]/30 to-transparent" />
      <div className="pointer-events-none absolute inset-0" style={{ backgroundImage: 'radial-gradient(1200px 600px at 10% 10%, rgba(33, 150, 243, 0.12), transparent), radial-gradient(1000px 500px at 90% 80%, rgba(168, 85, 247, 0.12), transparent)'}} />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md">
              <Rocket className="h-4 w-4 text-cyan-300" />
              <span className="text-xs font-medium tracking-wide text-white/80">Data Science • Machine Learning • AI</span>
            </div>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-6xl">
              Membangun Insight dari Data dengan Sentuhan AI
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/70">
              Saya adalah seorang Data Scientist yang fokus pada analitik prediktif, pemodelan machine learning, dan visualisasi data interaktif untuk mengubah data menjadi keputusan bisnis.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition-transform hover:scale-[1.02] focus:outline-none"
              >
                <span className="relative z-10">Lihat Proyek</span>
                <span className="absolute inset-0 -translate-y-full bg-white/20 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur-md transition hover:bg-white/10"
              >
                Hubungi Saya
              </a>
            </div>

            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="mt-12 flex items-center gap-3 text-white/70"
            >
              <ArrowDown className="h-5 w-5 animate-bounce" />
              <span className="text-sm">Scroll untuk eksplor</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
