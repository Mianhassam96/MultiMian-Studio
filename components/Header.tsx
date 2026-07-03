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
  const [open, setOpen]         = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [scrollPct, setScrollPct] = useState(0)
  const menuRef = useRef<HTMLDivElement>(null)

  // Scroll effects
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

  // Close mobile menu on route change
  useEffect(() => { setOpen(false) }, [pathname])

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
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

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/about" className="text-sm font-medium text-muted hover:text-primary transition-all duration-300 hover:scale-105 relative group">
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary-dark group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="/services" className="text-sm font-medium text-muted hover:text-primary transition-all duration-300 hover:scale-105 relative group">
            Services
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary-dark group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="/portfolio" className="text-sm font-medium text-muted hover:text-primary transition-all duration-300 hover:scale-105 relative group">
            Portfolio
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary-dark group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="/testimonials" className="text-sm font-medium text-muted hover:text-primary transition-all duration-300 hover:scale-105 relative group">
            Testimonials
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary-dark group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="/login" className="inline-flex items-center px-3 py-2 border border-primary/20 rounded-lg text-sm font-medium text-primary hover:bg-primary/10 transition-all duration-300 hover-lift">
            Login
          </Link>
          <Link href="/register" className="inline-flex items-center px-3 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-dark transition-all duration-300 hover-lift">
            Register
          </Link>
          <Link href="/contact" className="ml-4 inline-flex items-center px-6 py-2.5 glass-button rounded-lg text-sm font-medium hover-lift">
            Get in touch
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
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
                <Link href="/login" className="block px-4 py-2 text-sm text-primary">Login</Link>
                <Link href="/register" className="block px-4 py-2 text-sm text-primary">Register</Link>
                <Link href="/contact" className="block px-4 py-2 text-sm text-primary">Get in touch</Link>
              </div>
            </div>
          )}
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
                      {isActive(href) && (
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      )}
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
                <Link
                  href="/contact"
                  className="mx-2 mt-1 glass-button justify-center text-sm py-3 rounded-xl"
                >
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
