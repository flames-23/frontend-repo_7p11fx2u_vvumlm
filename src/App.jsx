import { useEffect, useState } from 'react'
import { Home, User, FolderGit2, BarChart3, Mail } from 'lucide-react'
import Hero from './components/Hero'
import About from './components/About'
import Showcase from './components/Showcase'
import Contact from './components/Contact'

function useScrollTop() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return scrolled
}

export default function App() {
  const scrolled = useScrollTop()

  const handleNav = (e, id) => {
    e.preventDefault()
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen bg-[#0b0b12] text-white antialiased">
      {/* Top navigation with glassmorphism */}
      <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? 'backdrop-blur-xl bg-white/5 border-b border-white/10' : 'bg-transparent'}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 sm:px-10">
          <a href="#home" onClick={(e) => handleNav(e, '#home')} className="inline-flex items-center gap-2 font-semibold">
            <span className="inline-grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-cyan-500/70 to-violet-600/70 shadow-lg shadow-cyan-500/20"><Home className="h-4 w-4" /></span>
            <span className="hidden sm:block">DS Portfolio</span>
          </a>
          <nav className="hidden gap-2 sm:flex">
            <a href="#about" onClick={(e) => handleNav(e, '#about')} className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-white/80 transition hover:bg-white/10"><User className="h-4 w-4" /> About</a>
            <a href="#projects" onClick={(e) => handleNav(e, '#projects')} className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-white/80 transition hover:bg-white/10"><FolderGit2 className="h-4 w-4" /> Projects</a>
            <a href="#dataviz" onClick={(e) => handleNav(e, '#dataviz')} className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-white/80 transition hover:bg-white/10"><BarChart3 className="h-4 w-4" /> Data Viz</a>
            <a href="#contact" onClick={(e) => handleNav(e, '#contact')} className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-white/80 transition hover:bg-white/10"><Mail className="h-4 w-4" /> Contact</a>
          </nav>
        </div>
      </header>

      <main className="scroll-smooth">
        <Hero />
        <About />
        <Showcase />
        <Contact />
      </main>

      <footer className="border-t border-white/10 bg-[#0b0b12] py-8 text-center text-sm text-white/60">
        © {new Date().getFullYear()}—Data Science Portfolio. Dibangun dengan cinta data.
      </footer>
    </div>
  )
}
