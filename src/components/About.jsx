import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Database, Code2, BarChart3 } from 'lucide-react';

const skills = [
  { name: 'Machine Learning', icon: Brain, items: ['Classification', 'Regression', 'Time Series', 'Model Serving'] },
  { name: 'Data Engineering', icon: Database, items: ['ETL Pipelines', 'SQL', 'Airflow Basics', 'Data Modeling'] },
  { name: 'Programming', icon: Code2, items: ['Python', 'Pandas', 'NumPy', 'FastAPI', 'React'] },
  { name: 'Visualization', icon: BarChart3, items: ['Matplotlib', 'Plotly', 'D3 Concepts', 'SVG Charts'] },
];

export default function About() {
  return (
    <section id="about" className="relative w-full bg-[#0b0b12] py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold sm:text-4xl"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-3 max-w-3xl text-white/70"
        >
          I’m a data scientist who blends statistical rigor with product thinking. My work spans end-to-end, from data collection and feature engineering to model deployment and interactive storytelling.
        </motion.p>

        {/* Skills grid without progress bars */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map(({ name, icon: Icon, items }) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-lg"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-cyan-500/10 p-2 text-cyan-400">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">{name}</h3>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                {items.map((it) => (
                  <li key={it} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-400" />
                    {it}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
