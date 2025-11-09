import { motion } from 'framer-motion'
import { ExternalLink, Tag } from 'lucide-react'

const projects = [
  {
    title: 'Demand Forecasting',
    desc: 'Model peramalan permintaan menggunakan LSTM dengan data penjualan multi-outlet.',
    img: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=1600&auto=format&fit=crop',
    tags: ['Python', 'LSTM', 'TensorFlow'],
    url: '#'
  },
  {
    title: 'Fraud Detection',
    desc: 'Klasifikasi transaksi penipuan berbasis gradient boosting dan feature engineering.',
    img: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1600&auto=format&fit=crop',
    tags: ['XGBoost', 'ML'],
    url: '#'
  },
  {
    title: 'Customer Segmentation',
    desc: 'Segmentasi pelanggan RFM dan clustering untuk kampanye pemasaran yang tepat sasaran.',
    img: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1600&auto=format&fit=crop',
    tags: ['Python', 'KMeans', 'Analytics'],
    url: '#'
  },
]

function ProjectCard({ p }) {
  return (
    <motion.a
      href={p.url}
      target="_blank"
      rel="noreferrer"
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img src={p.img} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b0b12] via-transparent to-transparent" />
      </div>
      <div className="p-5">
        <h4 className="text-lg font-semibold text-white">{p.title}</h4>
        <p className="mt-2 text-sm text-white/70">{p.desc}</p>
        <div className="mt-3 flex flex-wrap items-center gap-2">
          {p.tags.map((t) => (
            <span key={t} className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-white/70">
              <Tag className="h-3 w-3 text-cyan-300" /> {t}
            </span>
          ))}
        </div>
        <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-cyan-300">
          Lihat Detail <ExternalLink className="h-4 w-4" />
        </div>
      </div>
    </motion.a>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="w-full bg-[#0b0b12] py-24 text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-extrabold sm:text-4xl"
        >
          Proyek Terbaru
        </motion.h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
