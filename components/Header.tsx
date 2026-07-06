import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect, useRef } from 'react'
import ThemeToggle from './ThemeToggle'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_LINKS = [
  { href: '/',             label: 'Home'         },
  { href: '/about',        label: 'About'        },
  { href: '/services',     label: 'Services'     },
  { href: '/portfolio',    label: 'Portfolio'    },
  { href: '/testimonials', label: 'Testimonials' },
]

export default function Header() {
  const { pathname } = useRouter()
  const [open, setOpen]           = useState(false)
  const [scrolled, setScrolled]   = useState(false)
  const [scrollPct, setScrollPct] = useState(0)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      const doc = document.documentElement
      const pct = (window.scrollY / (doc.scrollHeight - doc.clientHeight)) * 100
      setScrollPct(Math.min(pct, 100))
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setOpen(false)
    }
    if (open) document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [open])

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <>
      {/* Skip to content */}
      <a href="#main-content" className="skip-link">Skip to content</a>

      {/* Scroll progress bar */}
      <div
        className="scroll-progress"
        style={{ width: `${scrollPct}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollPct)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Page scroll progress"
      />

      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'backdrop-blur-xl bg-white/85 dark:bg-gray-950/85 border-b border-primary/10 shadow-md shadow-primary/5'
            : 'backdrop-blur-lg bg-white/70 dark:bg-gray-950/70 border-b border-transparent'
        }`}
      >
        <div className="container flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group shrink-0" aria-label="MultiMian Studio home">
            <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center font-extrabold text-white text-xl group-hover:scale-110 transition-transform duration-300">
              M
            </span>
            <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent leading-none">
              MultiMian<span className="text-sm font-semibold text-muted ml-1">Studio</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 group
                  ${isActive(href)
                    ? 'text-primary'
                    : 'text-muted hover:text-primary hover:bg-primary/5'
                  }`}
                aria-current={isActive(href) ? 'page' : undefined}
              >
                {label}
                <span
                  className={`absolute bottom-0.5 left-3 right-3 h-0.5 rounded-full bg-gradient-to-r from-primary to-accent-cyan transition-all duration-300
                    ${isActive(href) ? 'opacity-100' : 'opacity-0 group-hover:opacity-60'}`}
                />
              </Link>
            ))}
          </nav>

          {/* Desktop actions */}
          <div className="hidden md:flex items-center gap-2">
            <Link
              href="/login"
              className="px-4 py-2 text-sm font-medium text-primary border border-primary/25 rounded-lg hover:bg-primary/8 transition-all duration-200"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary-dark transition-all duration-200"
            >
              Register
            </Link>
            <Link
              href="/contact"
              className="ml-1 glass-button text-sm px-5 py-2 rounded-lg"
            >
              Get in touch
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <ThemeToggle />
          </div>

          {/* Mobile: theme + burger */}
          <div className="md:hidden flex items-center gap-2" ref={menuRef}>
            <ThemeToggle />
            <button
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label="Toggle mobile menu"
              onClick={() => setOpen(!open)}
              className="p-2 rounded-lg border border-primary/15 bg-white/60 dark:bg-gray-900/60 hover:bg-primary/8 transition-all duration-200"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                {open ? (
                  <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile slide-down menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="md:hidden overflow-hidden border-t border-primary/10 bg-white/95 dark:bg-gray-950/95 backdrop-blur-xl"
            >
              <nav className="container py-4 flex flex-col gap-1" aria-label="Mobile navigation">
                {NAV_LINKS.map(({ href, label }, i) => (
                  <motion.div
                    key={href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={href}
                      className={`flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200
                        ${isActive(href)
                          ? 'text-primary bg-primary/10'
                          : 'text-muted hover:text-primary hover:bg-primary/5'
                        }`}
                      aria-current={isActive(href) ? 'page' : undefined}
                    >
                      {isActive(href) && <span className="w-1.5 h-1.5 rounded-full bg-primary" />}
                      {label}
                    </Link>
                  </motion.div>
                ))}
                <hr className="my-2 border-primary/10" />
                <div className="flex gap-2 px-2">
                  <Link href="/login" className="flex-1 py-2.5 text-center text-sm font-medium text-primary border border-primary/25 rounded-xl hover:bg-primary/8 transition-all">
                    Login
                  </Link>
                  <Link href="/register" className="flex-1 py-2.5 text-center text-sm font-medium text-white bg-primary rounded-xl hover:bg-primary-dark transition-all">
                    Register
                  </Link>
                </div>
                <Link href="/contact" className="mx-2 mt-1 glass-button justify-center text-sm py-3 rounded-xl">
                  Get in touch
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}
