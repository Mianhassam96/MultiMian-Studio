import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import ThemeToggle from './ThemeToggle'

export default function FuturisticNav() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false) }, [router.pathname])

  const navLinks = [
    { name: 'Home',      href: '/'           },
    { name: 'Services',  href: '/services',  hasDropdown: true },
    { name: 'Portfolio', href: '/portfolio'  },
    { name: 'Process',   href: '/process'    },
    { name: 'Pricing',   href: '/pricing'    },
    { name: 'About',     href: '/about'      },
    { name: 'Contact',   href: '/contact'    },
  ]

  const serviceCategories = [
    {
      title: 'Business Websites',
      items: [
        { name: 'Company Website',   desc: 'Professional sites for businesses',  href: '/services#company-website' },
        { name: 'Landing Page',      desc: 'High-converting campaign sites',      href: '/services#landing-page'    },
        { name: 'Portfolio Website', desc: 'Showcase your work beautifully',      href: '/services#portfolio'       },
      ],
    },
    {
      title: 'Web Applications',
      items: [
        { name: 'Custom Web App',  desc: 'Tailored solutions for your needs', href: '/services#custom-app' },
        { name: 'Admin Dashboard', desc: 'Manage your business efficiently',  href: '/services#dashboard'  },
        { name: 'SaaS Platform',   desc: 'Scalable subscription software',    href: '/services#saas'       },
      ],
    },
    {
      title: 'E-Commerce',
      items: [
        { name: 'Online Store',        desc: 'Sell products online 24/7',   href: '/services#online-store' },
        { name: 'Payment Integration', desc: 'Secure payment processing',   href: '/services#payment'      },
        { name: 'Product Management',  desc: 'Inventory & order systems',   href: '/services#product-mgmt' },
      ],
    },
    {
      title: 'Optimization & Support',
      items: [
        { name: 'Website Redesign',   desc: 'Modernize your existing site', href: '/services#redesign' },
        { name: 'Speed Optimization', desc: 'Lightning-fast performance',   href: '/services#speed'    },
        { name: 'SEO Improvements',   desc: 'Rank higher on Google',        href: '/services#seo'      },
      ],
    },
  ]

  const isActive = (href: string) => router.pathname === href

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        style={{
          backgroundColor: isScrolled
            ? 'var(--nav-bg-scrolled)'
            : 'var(--nav-bg)',
          borderBottomColor: 'var(--nav-border)',
        }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b backdrop-blur-xl ${
          isScrolled ? 'shadow-sm' : ''
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between" style={{ height: '72px' }}>

            {/* ── Logo — pure text wordmark, no icon ── */}
            <Link href="/" className="relative z-50 flex-shrink-0 group">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className="flex items-baseline gap-0"
              >
                {/* Multi — gradient accent */}
                <span
                  className="font-black text-2xl leading-none tracking-tight bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent"
                  style={{ fontFamily: '"Space Grotesk", sans-serif', letterSpacing: '-0.03em' }}
                >
                  Multi
                </span>
                {/* Mian — theme text color */}
                <span
                  className="font-black text-2xl leading-none tracking-tight text-[var(--text)]"
                  style={{ fontFamily: '"Space Grotesk", sans-serif', letterSpacing: '-0.03em' }}
                >
                  Mian
                </span>
                {/* Studio — small label */}
                <span
                  className="ml-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-primary self-end mb-0.5"
                  style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                >
                  Studio
                </span>
              </motion.div>
            </Link>

            {/* ── Desktop Nav Links ── */}
            <div className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => link.hasDropdown && setServicesOpen(true)}
                  onMouseLeave={() => link.hasDropdown && setServicesOpen(false)}
                >
                  <Link
                    href={link.href}
                    className={`relative px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 flex items-center gap-1 ${
                      isActive(link.href)
                        ? 'text-primary bg-primary/8'
                        : 'text-[var(--muted)] hover:text-[var(--text)] hover:bg-[var(--glass)]'
                    }`}
                  >
                    {link.name}
                    {link.hasDropdown && (
                      <motion.svg
                        animate={{ rotate: servicesOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="w-3 h-3 opacity-60"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </motion.svg>
                    )}
                    {isActive(link.href) && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-lg bg-primary/8 -z-10"
                      />
                    )}
                  </Link>

                  {/* Mega Menu */}
                  {link.hasDropdown && (
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.98 }}
                          transition={{ duration: 0.18 }}
                          className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[860px]"
                        >
                          <div
                            className="rounded-2xl shadow-2xl border p-6"
                            style={{
                              backgroundColor: 'var(--bg)',
                              borderColor: 'var(--glass-stroke)',
                              boxShadow: 'var(--card-shadow)',
                            }}
                          >
                            {/* Dropdown header */}
                            <div className="flex items-center justify-between mb-4 pb-3" style={{ borderBottom: '1px solid var(--glass-stroke)' }}>
                              <p className="text-xs font-bold uppercase tracking-widest text-[var(--muted)]">Our Services</p>
                              <Link
                                href="/services"
                                className="text-xs font-semibold text-primary hover:underline flex items-center gap-1"
                              >
                                View all services →
                              </Link>
                            </div>
                            <div className="grid grid-cols-4 gap-5">
                              {serviceCategories.map((category) => (
                                <div key={category.title}>
                                  <h3 className="text-[10px] font-bold uppercase tracking-widest text-[var(--muted)] mb-3">
                                    {category.title}
                                  </h3>
                                  <div className="space-y-1">
                                    {category.items.map((item) => (
                                      <Link
                                        key={item.name}
                                        href={item.href}
                                        className="block px-3 py-2 rounded-xl transition-colors group"
                                        style={{ /* hover handled via Tailwind */ }}
                                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--glass)')}
                                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                                      >
                                        <div className="text-sm font-semibold text-[var(--text)] group-hover:text-primary transition-colors mb-0.5">
                                          {item.name}
                                        </div>
                                        <div className="text-xs text-[var(--muted)] leading-tight">
                                          {item.desc}
                                        </div>
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>

            {/* ── Right Actions ── */}
            <div className="hidden lg:flex items-center gap-3">
              <ThemeToggle />
              <div className="w-px h-5" style={{ backgroundColor: 'var(--glass-stroke)' }} />
              <Link
                href="/contact"
                className="px-5 py-2.5 bg-primary hover:bg-primary-dark text-white rounded-xl font-semibold text-sm transition-all duration-200 shadow-sm hover:-translate-y-0.5"
              >
                Get Started
              </Link>
            </div>

            {/* ── Mobile Menu Button ── */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg transition-colors"
              style={{ backgroundColor: mobileOpen ? 'var(--glass)' : 'transparent' }}
              aria-label="Toggle menu"
            >
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="w-5 h-0.5 rounded-full bg-[var(--text)]"
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                className="w-5 h-0.5 rounded-full bg-[var(--text)]"
              />
              <motion.span
                animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="w-5 h-0.5 rounded-full bg-[var(--text)]"
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />

            {/* Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-sm overflow-y-auto"
              style={{ backgroundColor: 'var(--bg)', borderLeft: '1px solid var(--glass-stroke)' }}
            >
              {/* Mobile header */}
              <div className="flex items-center justify-between px-6 py-5" style={{ borderBottom: '1px solid var(--glass-stroke)' }}>
                {/* Same logo as nav */}
                <div className="flex items-baseline gap-0">
                  <span
                    className="font-black text-xl leading-none bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent"
                    style={{ fontFamily: '"Space Grotesk", sans-serif', letterSpacing: '-0.03em' }}
                  >
                    Multi
                  </span>
                  <span
                    className="font-black text-xl leading-none text-[var(--text)]"
                    style={{ fontFamily: '"Space Grotesk", sans-serif', letterSpacing: '-0.03em' }}
                  >
                    Mian
                  </span>
                  <span
                    className="ml-1 text-[9px] font-bold uppercase tracking-[0.2em] text-primary self-end mb-0.5"
                    style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                  >
                    Studio
                  </span>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-lg transition-colors text-[var(--muted)] hover:text-[var(--text)]"
                  style={{ backgroundColor: 'var(--glass)' }}
                  aria-label="Close menu"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="px-4 py-6">
                <div className="space-y-1 mb-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-sm transition-all ${
                        isActive(link.href)
                          ? 'text-primary bg-primary/8'
                          : 'text-[var(--text)] hover:bg-[var(--glass)]'
                      }`}
                    >
                      {isActive(link.href) && (
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      )}
                      {link.name}
                    </Link>
                  ))}
                </div>

                <div className="pt-4 space-y-3" style={{ borderTop: '1px solid var(--glass-stroke)' }}>
                  <Link
                    href="/contact"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-center w-full px-6 py-3.5 bg-primary hover:bg-primary-dark text-white rounded-xl font-semibold text-sm transition-all shadow-sm"
                  >
                    Get Started — Free Consultation
                  </Link>
                </div>

                <div className="mt-6 flex justify-center">
                  <ThemeToggle />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
