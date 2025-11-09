import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Send } from 'lucide-react'

export default function Contact() {
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setSent(false)
    // Simulated async send
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setSent(true)
  }

  return (
    <section id="contact" className="w-full bg-[#0b0b12] py-24 text-white">
      <div className="mx-auto max-w-4xl px-6 sm:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-extrabold sm:text-4xl"
        >
          Kontak
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="flex flex-col">
              <label className="mb-2 text-sm text-white/70">Nama</label>
              <input required type="text" className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/50 outline-none transition focus:border-cyan-400/40" placeholder="Nama kamu" />
            </div>
            <div className="flex flex-col">
              <label className="mb-2 text-sm text-white/70">Email</label>
              <div className="relative">
                <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50" />
                <input required type="email" className="w-full rounded-xl border border-white/10 bg-white/10 px-10 py-3 text-sm text-white placeholder-white/50 outline-none transition focus:border-cyan-400/40" placeholder="email@domain.com" />
              </div>
            </div>
            <div className="sm:col-span-2 flex flex-col">
              <label className="mb-2 text-sm text-white/70">Subjek</label>
              <input required type="text" className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/50 outline-none transition focus:border-cyan-400/40" placeholder="Topik pesan" />
            </div>
            <div className="sm:col-span-2 flex flex-col">
              <label className="mb-2 text-sm text-white/70">Pesan</label>
              <textarea required rows={5} className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/50 outline-none transition focus:border-cyan-400/40" placeholder="Tulis pesanmu di sini..." />
            </div>
          </div>
          <div className="mt-6 flex items-center gap-3">
            <button
              type="submit"
              disabled={loading}
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition-transform hover:scale-[1.02] disabled:opacity-60"
            >
              {loading ? (
                <span className="inline-flex items-center gap-2">
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                  Mengirim...
                </span>
              ) : (
                <>
                  <span>Kirim</span>
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </>
              )}
            </button>
            {sent && <span className="text-sm text-emerald-300">Terkirim! Saya akan membalas segera.</span>}
          </div>
        </motion.form>
      </div>
    </section>
  )
}
