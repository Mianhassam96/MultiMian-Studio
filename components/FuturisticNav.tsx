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
        { name: 'Custom Web App',  desc: 'Tailored solutions for your needs',  href: '/services#custom-app' },
        { name: 'Admin Dashboard', desc: 'Manage your business efficiently',   href: '/services#dashboard'  },
        { name: 'SaaS Platform',   desc: 'Scalable subscription software',     href: '/services#saas'       },
      ],
    },
    {
      title: 'E-Commerce',
      items: [
        { name: 'Online Store',        desc: 'Sell products online 24/7',      href: '/services#online-store' },
        { name: 'Payment Integration', desc: 'Secure payment processing',      href: '/services#payment'      },
        { name: 'Product Management',  desc: 'Inventory & order systems',      href: '/services#product-mgmt' },
      ],
    },
    {
      title: 'Optimization & Support',
      items: [
        { name: 'Website Redesign',    desc: 'Modernize your existing site',   href: '/services#redesign' },
        { name: 'Speed Optimization',  desc: 'Lightning-fast performance',     href: '/services#speed'    },
        { name: 'SEO Improvements',    desc: 'Rank higher on Google',          href: '/services#seo'      },
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/98 dark:bg-slate-950/98 backdrop-blur-xl shadow-sm border-b border-slate-200/60 dark:border-slate-800/60'
            : 'bg-white/95 dark:bg-slate-950/95 backdrop-blur-lg border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-18" style={{ height: '72px' }}>

            {/* ── Logo ── */}
            <Link href="/" className="relative z-50 flex-shrink-0">
              <motion.div
                className="flex items-center gap-3"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              >
                {/* Icon mark */}
                <div className="relative w-9 h-9 flex-shrink-0">
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 shadow-md shadow-blue-600/25" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span
                      className="text-white font-black text-base leading-none tracking-tight select-none"
                      style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                    >
                      M
                    </span>
                  </div>
                </div>
                {/* Wordmark */}
                <div className="flex flex-col leading-none">
                  <span
                    className="text-slate-900 dark:text-white font-extrabold text-lg tracking-tight"
                    style={{ fontFamily: '"Space Grotesk", sans-serif', letterSpacing: '-0.02em' }}
                  >
                    MultiMian
                  </span>
                  <span className="text-blue-600 dark:text-blue-400 font-semibold text-[11px] tracking-widest uppercase">
                    Studio
                  </span>
                </div>
              </motion.div>
            </Link>

            {/* ── Desktop Navigation ── */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => link.hasDropdown && setServicesOpen(true)}
                  onMouseLeave={() => link.hasDropdown && setServicesOpen(false)}
                >
                  <Link
                    href={link.href}
                    className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 flex items-center gap-1 ${
                      isActive(link.href)
                        ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50'
                        : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
                    }`}
                  >
                    {link.name}
                    {link.hasDropdown && (
                      <motion.svg
                        animate={{ rotate: servicesOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="w-3.5 h-3.5 opacity-60"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </motion.svg>
                    )}
                    {/* Active indicator */}
                    {isActive(link.href) && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-blue-600"
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
                          className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-screen max-w-4xl"
                        >
                          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl shadow-slate-900/10 dark:shadow-black/40 border border-slate-200 dark:border-slate-700/60 p-6">
                            {/* Dropdown header */}
                            <div className="flex items-center justify-between mb-5 pb-4 border-b border-slate-100 dark:border-slate-800">
                              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">All Services</p>
                              <Link
                                href="/services"
                                className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1"
                              >
                                View all services
                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                </svg>
                              </Link>
                            </div>
                            <div className="grid grid-cols-4 gap-6">
                              {serviceCategories.map((category) => (
                                <div key={category.title}>
                                  <h3 className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-3">
                                    {category.title}
                                  </h3>
                                  <div className="space-y-1">
                                    {category.items.map((item) => (
                                      <Link
                                        key={item.name}
                                        href={item.href}
                                        className="block px-3 py-2 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-950/40 transition-colors group"
                                      >
                                        <div className="text-sm font-semibold text-slate-800 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-0.5">
                                          {item.name}
                                        </div>
                                        <div className="text-xs text-slate-500 dark:text-slate-400 leading-tight">
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

            {/* ── Right Side Actions ── */}
            <div className="hidden lg:flex items-center gap-3">
              <ThemeToggle />
              <div className="w-px h-5 bg-slate-200 dark:bg-slate-700" />
              <Link
                href="/contact"
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-sm transition-all duration-200 shadow-sm shadow-blue-600/20 hover:shadow-md hover:shadow-blue-600/30 hover:-translate-y-0.5"
              >
                Get Started
              </Link>
            </div>

            {/* ── Mobile Menu Button ── */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="w-5 h-0.5 bg-slate-700 dark:bg-slate-200 rounded-full"
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                className="w-5 h-0.5 bg-slate-700 dark:bg-slate-200 rounded-full"
              />
              <motion.span
                animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="w-5 h-0.5 bg-slate-700 dark:bg-slate-200 rounded-full"
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
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-white dark:bg-slate-950 shadow-2xl overflow-y-auto"
            >
              {/* Mobile header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                    <span className="text-white font-black text-sm" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>M</span>
                  </div>
                  <div className="flex flex-col leading-none">
                    <span className="text-slate-900 dark:text-white font-extrabold text-base" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>MultiMian</span>
                    <span className="text-blue-600 font-semibold text-[10px] tracking-widest uppercase">Studio</span>
                  </div>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-500"
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
                          ? 'bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400'
                          : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60'
                      }`}
                    >
                      {isActive(link.href) && (
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                      )}
                      {link.name}
                    </Link>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
                  <Link
                    href="/contact"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-center w-full px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-sm transition-all shadow-sm"
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
