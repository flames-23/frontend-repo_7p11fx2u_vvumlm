import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Demand Forecasting with LSTMs',
    description:
      'Built a sequence model to forecast weekly demand with exogenous features, improving MAPE by 18%.',
    tags: ['Python', 'TensorFlow', 'Pandas', 'Timeseries'],
    href: '#',
    repo: '#',
  },
  {
    title: 'Customer Segmentation',
    description:
      'Unsupervised pipeline for customer clustering; informed marketing strategy and uplift tests.',
    tags: ['Python', 'Scikit-learn', 'EDA', 'Clustering'],
    href: '#',
    repo: '#',
  },
  {
    title: 'Real-time A/B Dashboard',
    description:
      'Streaming analytics with experiment metrics, CIs, and sequential testing guards.',
    tags: ['FastAPI', 'React', 'Websockets', 'Stats'],
    href: '#',
    repo: '#',
  },
];

function Chip({ children }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/70">
      {children}
    </span>
  );
}

// Lightweight SVG charts (Line + Bar)
function LineChart() {
  const points = [
    [0, 80],
    [20, 60],
    [40, 70],
    [60, 45],
    [80, 55],
    [100, 30],
  ];
  const d = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p[0]} ${p[1]}`).join(' ');
  return (
    <svg viewBox="0 0 100 100" className="h-28 w-full">
      <defs>
        <linearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#a78bfa" />
        </linearGradient>
      </defs>
      <path d={d} fill="none" stroke="url(#grad)" strokeWidth="2" />
    </svg>
  );
}

function BarChart() {
  const bars = [35, 55, 45, 70, 52];
  const width = 100 / bars.length;
  return (
    <svg viewBox="0 0 100 100" className="h-28 w-full">
      <defs>
        <linearGradient id="grad2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#a78bfa" />
        </linearGradient>
      </defs>
      {bars.map((b, i) => (
        <rect
          key={i}
          x={i * width + 6}
          y={100 - b}
          width={width - 12}
          height={b}
          rx="2"
          fill="url(#grad2)"
          opacity="0.85"
        />
      ))}
    </svg>
  );
}

function ProjectCard({ p }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition-shadow hover:shadow-lg hover:shadow-cyan-500/10"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-white">{p.title}</h3>
          <p className="mt-1 text-sm text-white/70">{p.description}</p>
        </div>
        <div className="flex items-center gap-2">
          <a href={p.href} className="rounded-lg border border-white/10 p-2 text-white/80 hover:bg-white/10" aria-label="Live">
            <ExternalLink className="h-4 w-4" />
          </a>
          <a href={p.repo} className="rounded-lg border border-white/10 p-2 text-white/80 hover:bg-white/10" aria-label="Repo">
            <Github className="h-4 w-4" />
          </a>
        </div>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {p.tags.map((t) => (
          <Chip key={t}>{t}</Chip>
        ))}
      </div>
    </motion.div>
  );
}

export default function Showcase() {
  return (
    <section id="showcase" className="relative w-full bg-[#0b0b12] py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-fuchsia-500/5 to-transparent" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold sm:text-4xl"
        >
          Showcase
        </motion.h2>
        <p className="mt-3 max-w-3xl text-white/70">
          Selected work across forecasting, experimentation, and analytics engineering.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="grid gap-6">
            {projects.slice(0, 2).map((p) => (
              <ProjectCard key={p.title} p={p} />
            ))}
          </div>
          <div className="grid gap-6">
            <ProjectCard p={projects[2]} />
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
              <h3 className="text-lg font-semibold">Mini Charts</h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-white/10 bg-[#0b0b12] p-3">
                  <LineChart />
                </div>
                <div className="rounded-xl border border-white/10 bg-[#0b0b12] p-3">
                  <BarChart />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
