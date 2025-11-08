import Link from 'next/link'
import { useState, useEffect } from 'react'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="backdrop-blur-lg bg-white/80 dark:bg-gray-900/80 border-b border-white/20 dark:border-gray-700/20 sticky top-0 z-40 shadow-sm">
      <div className="container flex items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-3 group">
          <span className="inline-block w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-dark shadow-lg group-hover:shadow-xl transition-all duration-300 relative overflow-hidden" aria-hidden>
            <span className="absolute inset-0 bg-gradient-to-br from-primary/80 to-primary-dark/80 backdrop-blur-sm transform group-hover:scale-110 transition-transform duration-300"></span>
            <span className="absolute inset-0 flex items-center justify-center font-bold text-white text-xl">M</span>
          </span>
          <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
            MultiMian
            <span className="text-sm font-semibold text-muted ml-1">Studio</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/about" className="text-sm font-medium text-muted hover:text-primary transition-colors">About</Link>
          <Link href="/services" className="text-sm font-medium text-muted hover:text-primary transition-colors">Services</Link>
          <Link href="/portfolio" className="text-sm font-medium text-muted hover:text-primary transition-colors">Portfolio</Link>
          <Link href="/testimonials" className="text-sm font-medium text-muted hover:text-primary transition-colors">Testimonials</Link>
          <Link href="/contact" className="ml-4 inline-flex items-center px-6 py-2.5 glass-button rounded-lg text-sm font-medium">
            Get in touch
          </Link>
          {/* single theme toggle button (dark green) */}
          <ThemeToggle />
        </nav>

        {/* mobile menu */}
        <div className="md:hidden relative">
          <button aria-expanded={open} aria-label="Toggle menu" onClick={()=>setOpen(!open)} className="inline-flex items-center justify-center p-2 rounded-md border">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-muted"><path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          {open && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black/5">
              <div className="py-2">
                <Link href="/about" className="block px-4 py-2 text-sm text-muted">About</Link>
                <Link href="/services" className="block px-4 py-2 text-sm text-muted">Services</Link>
                <Link href="/contact" className="block px-4 py-2 text-sm text-muted">Contact</Link>

                <Link href="/contact" className="block px-4 py-2 text-sm text-primary">Get in touch</Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
