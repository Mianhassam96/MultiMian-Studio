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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services', hasDropdown: true },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Process', href: '/process' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  const serviceCategories = [
    {
      title: 'Business Websites',
      items: [
        { name: 'Company Website', desc: 'Professional sites for businesses', href: '/services#company-website' },
        { name: 'Landing Page', desc: 'High-converting campaign sites', href: '/services#landing-page' },
        { name: 'Portfolio Website', desc: 'Showcase your work beautifully', href: '/services#portfolio' },
      ]
    },
    {
      title: 'Web Applications',
      items: [
        { name: 'Custom Web App', desc: 'Tailored solutions for your needs', href: '/services#custom-app' },
        { name: 'Admin Dashboard', desc: 'Manage your business efficiently', href: '/services#dashboard' },
        { name: 'SaaS Platform', desc: 'Scalable subscription software', href: '/services#saas' },
      ]
    },
    {
      title: 'E-Commerce',
      items: [
        { name: 'Online Store', desc: 'Sell products online 24/7', href: '/services#online-store' },
        { name: 'Payment Integration', desc: 'Secure payment processing', href: '/services#payment' },
        { name: 'Product Management', desc: 'Inventory & order systems', href: '/services#product-mgmt' },
      ]
    },
    {
      title: 'Optimization & Support',
      items: [
        { name: 'Website Redesign', desc: 'Modernize your existing site', href: '/services#redesign' },
        { name: 'Speed Optimization', desc: 'Lightning-fast performance', href: '/services#speed' },
        { name: 'SEO Improvements', desc: 'Rank higher on Google', href: '/services#seo' },
      ]
    }
  ]

  const isActive = (href: string) => router.pathname === href

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/98 dark:bg-gray-900/98 backdrop-blur-lg shadow-md'
            : 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="relative z-50">
              <motion.div 
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.span
                  className="text-2xl md:text-3xl font-bold tracking-wider"
                  style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                  animate={{ 
                    textShadow: [
                      "0 0 0px rgba(59, 130, 246, 0)",
                      "0 0 10px rgba(59, 130, 246, 0.3)",
                      "0 0 0px rgba(59, 130, 246, 0)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <motion.span 
                    className="text-blue-600"
                    animate={{ 
                      color: ["#2563eb", "#3b82f6", "#2563eb"]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    MULTI
                  </motion.span>
                  <span className="text-gray-900 dark:text-white">MIAN</span>
                </motion.span>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => link.hasDropdown && setServicesOpen(true)}
                  onMouseLeave={() => link.hasDropdown && setServicesOpen(false)}
                >
                  <Link
                    href={link.href}
                    className={`px-4 py-2 text-sm font-medium transition-colors rounded-md ${
                      isActive(link.href)
                        ? 'text-blue-600 dark:text-blue-500'
                        : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                    }`}
                  >
                    <span className="flex items-center gap-1">
                      {link.name}
                      {link.hasDropdown && (
                        <svg
                          className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </span>
                  </Link>

                  {/* Mega Menu Dropdown */}
                  {link.hasDropdown && (
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 w-screen max-w-4xl"
                        >
                          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 p-6">
                            <div className="grid grid-cols-4 gap-6">
                              {serviceCategories.map((category) => (
                                <div key={category.title}>
                                  <h3 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                                    {category.title}
                                  </h3>
                                  <div className="space-y-2">
                                    {category.items.map((item) => (
                                      <Link
                                        key={item.name}
                                        href={item.href}
                                        className="block p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group"
                                      >
                                        <div className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 mb-0.5">
                                          {item.name}
                                        </div>
                                        <div className="text-xs text-gray-500 dark:text-gray-400">
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

            {/* Right Side Actions */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                href="/contact"
                className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-semibold text-sm transition-all hover:shadow-lg"
              >
                Get Started
              </Link>

              <div className="ml-2">
                <ThemeToggle />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5 text-gray-900 dark:text-white"
            >
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 bg-current transition-colors"
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-6 h-0.5 bg-current transition-colors"
              />
              <motion.span
                animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 bg-current transition-colors"
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
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
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-white dark:bg-gray-900 shadow-2xl overflow-y-auto"
            >
              <div className="p-8 pt-24">
                <div className="space-y-2 mb-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`block px-6 py-4 rounded-xl font-semibold transition-all ${
                        isActive(link.href)
                          ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>

                <div className="space-y-3 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <Link
                    href="/contact"
                    onClick={() => setMobileOpen(false)}
                    className="block px-6 py-4 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold"
                  >
                    Get Started
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
