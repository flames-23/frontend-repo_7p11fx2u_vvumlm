import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'loading') return;
    setStatus('loading');
    // simulate request
    await new Promise((r) => setTimeout(r, 1200));
    setStatus('success');
    setTimeout(() => setStatus('idle'), 2500);
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="relative w-full bg-[#0b0b12] py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />
      <div className="relative mx-auto max-w-3xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold sm:text-4xl"
        >
          Contact
        </motion.h2>
        <p className="mt-3 text-white/70">Have a project in mind or want to collaborate? Let’s talk.</p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              name="name"
              required
              placeholder="Your name"
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 outline-none backdrop-blur focus:border-cyan-400/60"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Email address"
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 outline-none backdrop-blur focus:border-cyan-400/60"
            />
          </div>
          <input
            name="subject"
            placeholder="Subject"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 outline-none backdrop-blur focus:border-cyan-400/60"
          />
          <textarea
            name="message"
            required
            rows={5}
            placeholder="Tell me about your idea..."
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 outline-none backdrop-blur focus:border-cyan-400/60"
          />
          <div className="flex items-center justify-between gap-4">
            <div className="text-sm text-white/60">I usually respond within 24–48 hours.</div>
            <button
              type="submit"
              disabled={status === 'loading'}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-6 py-3 font-semibold text-white shadow-lg shadow-cyan-500/10 transition-opacity disabled:opacity-60"
            >
              {status === 'loading' ? (
                <span className="inline-flex items-center gap-2">
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                  Sending...
                </span>
              ) : status === 'success' ? (
                'Sent!'
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Send Message
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
