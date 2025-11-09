import { motion } from 'framer-motion'
import { Brain, Cpu, Database } from 'lucide-react'

const skills = [
  { name: 'Python', level: 90, icon: Brain },
  { name: 'SQL', level: 85, icon: Database },
  { name: 'Machine Learning', level: 88, icon: Cpu },
  { name: 'Deep Learning', level: 75, icon: Brain },
  { name: 'Data Visualization', level: 86, icon: Cpu },
]

const tools = [
  'Pandas', 'NumPy', 'Scikit-Learn', 'TensorFlow', 'PyTorch', 'Matplotlib', 'Seaborn', 'Plotly', 'Airflow', 'Docker'
]

export default function About() {
  return (
    <section id="about" className="relative w-full bg-[#0b0b12] py-24 text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-extrabold sm:text-4xl"
        >
          Tentang Saya
        </motion.h2>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {/* Skills with progress bars using glassmorphism */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <h3 className="mb-6 text-lg font-semibold text-white/90">Keahlian</h3>
            <div className="space-y-5">
              {skills.map((s) => (
                <div key={s.name}>
                  <div className="mb-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <s.icon className="h-4 w-4 text-cyan-300" />
                      <span className="text-sm text-white/80">{s.name}</span>
                    </div>
                    <span className="text-xs text-white/60">{s.level}%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-white/10">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 shadow-[0_0_20px_rgba(34,211,238,0.35)]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools cloud with micro-interactions */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <h3 className="mb-6 text-lg font-semibold text-white/90">Tools & Teknologi</h3>
            <div className="flex flex-wrap gap-3">
              {tools.map((t) => (
                <motion.span
                  key={t}
                  whileHover={{ y: -2, scale: 1.02 }}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 shadow-inner"
                >
                  {t}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
