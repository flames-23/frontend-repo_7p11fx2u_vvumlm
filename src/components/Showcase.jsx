import { motion } from 'framer-motion'
import { ExternalLink, Tag } from 'lucide-react'

const projects = [
  {
    title: 'Demand Forecasting',
    desc: 'Peramalan permintaan menggunakan LSTM untuk multi-outlet retail.',
    img: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=1600&auto=format&fit=crop',
    tags: ['Python', 'LSTM', 'TensorFlow'],
    url: '#'
  },
  {
    title: 'Fraud Detection',
    desc: 'Klasifikasi transaksi penipuan berbasis gradient boosting.',
    img: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1600&auto=format&fit=crop',
    tags: ['XGBoost', 'ML'],
    url: '#'
  },
  {
    title: 'Customer Segmentation',
    desc: 'Segmentasi pelanggan RFM dan clustering untuk kampanye efektif.',
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

// Simple interactive charts using SVG (no external deps)
function LineChart({ data }) {
  const padding = 24
  const w = 520
  const h = 220
  const xStep = (w - padding * 2) / (data.length - 1)
  const maxY = Math.max(...data.map(d => d.y))
  const minY = Math.min(...data.map(d => d.y))
  const yScale = (val) => {
    const pct = (val - minY) / (maxY - minY || 1)
    return h - padding - pct * (h - padding * 2)
  }
  const points = data.map((d, i) => `${padding + i * xStep},${yScale(d.y)}`).join(' ')

  return (
    <svg width={w} height={h} className="w-full">
      <defs>
        <linearGradient id="gradLine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
        <linearGradient id="gradFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(34,211,238,0.35)" />
          <stop offset="100%" stopColor="rgba(139,92,246,0.0)" />
        </linearGradient>
      </defs>
      {/* Axes */}
      <g opacity="0.25" stroke="white">
        <line x1={padding} y1={h - padding} x2={w - padding} y2={h - padding} />
        <line x1={padding} y1={padding} x2={padding} y2={h - padding} />
      </g>
      {/* Area */}
      <polyline points={`${padding},${h - padding} ${points} ${w - padding},${h - padding}`} fill="url(#gradFill)" />
      {/* Line */}
      <polyline points={points} fill="none" stroke="url(#gradLine)" strokeWidth="3" />
      {/* Dots */}
      {data.map((d, i) => (
        <g key={i}>
          <circle cx={padding + i * xStep} cy={yScale(d.y)} r="4" fill="#22d3ee" />
        </g>
      ))}
    </svg>
  )
}

function BarChart({ data }) {
  const padding = 24
  const w = 520
  const h = 220
  const bw = (w - padding * 2) / data.length - 12
  const maxY = Math.max(...data.map(d => d.y))
  const yScale = (val) => {
    const pct = val / (maxY || 1)
    return pct * (h - padding * 2)
  }

  return (
    <svg width={w} height={h} className="w-full">
      <defs>
        <linearGradient id="gradBar" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
      {/* Axis */}
      <g opacity="0.25" stroke="white">
        <line x1={padding} y1={h - padding} x2={w - padding} y2={h - padding} />
      </g>
      {data.map((d, i) => {
        const x = padding + i * (bw + 12)
        const barH = yScale(d.y)
        return (
          <g key={i}>
            <rect x={x} y={h - padding - barH} width={bw} height={barH} rx="8" fill="url(#gradBar)" className="transition-all duration-300 hover:opacity-90" />
          </g>
        )
      })}
    </svg>
  )
}

export default function Showcase() {
  const lineData = [
    { x: 'Jan', y: 12 }, { x: 'Feb', y: 18 }, { x: 'Mar', y: 11 }, { x: 'Apr', y: 22 }, { x: 'Mei', y: 28 }, { x: 'Jun', y: 24 }
  ]
  const barData = [
    { x: 'Seg A', y: 320 }, { x: 'Seg B', y: 220 }, { x: 'Seg C', y: 420 }, { x: 'Seg D', y: 260 }
  ]

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
          Proyek & Visualisasi
        </motion.h2>

        {/* Projects grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>

        {/* Data viz */}
        <div id="dataviz" className="mt-16 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <div className="mb-3 text-sm font-medium text-white/70">Tren Penjualan</div>
            <LineChart data={lineData} />
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <div className="mb-3 text-sm font-medium text-white/70">Distribusi Segmen</div>
            <BarChart data={barData} />
          </div>
        </div>
      </div>
    </section>
  )
}
