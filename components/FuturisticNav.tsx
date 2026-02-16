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
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { 
      name: 'Services', 
      href: '/services',
      dropdown: [
        { 
          name: 'Web Development', 
          href: '/services#web-development',
          icon: '🌐',
          subItems: [
            { name: 'Frontend Development', href: '/services#frontend' },
            { name: 'Backend Development', href: '/services#backend' },
            { name: 'Full-Stack Solutions', href: '/services#fullstack' },
          ]
        },
        { name: 'SaaS Development', href: '/services#saas', icon: '⚡' },
        { name: 'E-Commerce', href: '/services#ecommerce', icon: '🛒' },
        { name: 'Mobile Apps', href: '/services#mobile', icon: '📱' },
      ]
    },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Community', href: '/profiles' },
    { name: 'Contact', href: '/contact' },
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
            ? 'bg-black/80 backdrop-blur-xl shadow-lg shadow-blue-500/10 border-b border-blue-500/20'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="group relative z-50">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2"
              >
                <div className="relative">
                  <span
                    className="text-3xl md:text-4xl font-bold tracking-wider"
                    style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                  >
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                      MULTI
                    </span>
                    <span className="text-white">MIAN</span>
                  </span>
                  {/* Glow effect */}
                  <motion.div
                    className="absolute inset-0 blur-xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-50 transition-opacity"
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  />
                </div>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {/* Nav Links */}
              <div className="flex items-center gap-1">
                {navLinks.map((link, idx) => (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => link.dropdown && setServicesOpen(true)}
                    onMouseLeave={() => link.dropdown && setServicesOpen(false)}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        className={`relative px-4 py-2 text-sm font-medium transition-colors group ${
                          isActive(link.href)
                            ? 'text-blue-400'
                            : 'text-gray-300 hover:text-white'
                        }`}
                      >
                        <span className="relative z-10 flex items-center gap-1">
                          {link.name}
                          {link.dropdown && (
                            <motion.svg
                              className="w-4 h-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              animate={{ rotate: servicesOpen ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </motion.svg>
                          )}
                        </span>
                        {/* Animated underline */}
                        <motion.span
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
                          initial={{ scaleX: 0 }}
                          whileHover={{ scaleX: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                        {/* Active indicator */}
                        {isActive(link.href) && (
                          <motion.span
                            layoutId="activeNav"
                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
                            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                          />
                        )}
                        {/* Hover glow */}
                        <span className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 rounded-lg transition-colors" />
                      </Link>
                    </motion.div>

                    {/* Dropdown Menu */}
                    {link.dropdown && (
                      <AnimatePresence>
                        {servicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 mt-2 w-64 bg-black/95 backdrop-blur-xl rounded-2xl border border-blue-500/20 shadow-2xl shadow-blue-500/20 overflow-hidden"
                          >
                            <div className="p-2">
                              {link.dropdown.map((item, itemIdx) => (
                                <motion.div
                                  key={item.name}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: itemIdx * 0.05 }}
                                >
                                  <Link
                                    href={item.href}
                                    className="group flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-blue-500/10 transition-all"
                                  >
                                    {item.icon && (
                                      <span className="text-2xl group-hover:scale-110 transition-transform">
                                        {item.icon}
                                      </span>
                                    )}
                                    <div className="flex-1">
                                      <div className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">
                                        {item.name}
                                      </div>
                                      {item.subItems && (
                                        <div className="mt-1 space-y-1">
                                          {item.subItems.map((subItem) => (
                                            <Link
                                              key={subItem.name}
                                              href={subItem.href}
                                              className="block text-xs text-gray-400 hover:text-blue-400 transition-colors"
                                            >
                                              → {subItem.name}
                                            </Link>
                                          ))}
                                        </div>
                                      )}
                                    </div>
                                    <svg
                                      className="w-4 h-4 text-gray-400 group-hover:text-blue-400 group-hover:translate-x-1 transition-all"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                  </Link>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                ))}
              </div>

              {/* Theme Toggle */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
              >
                <ThemeToggle />
              </motion.div>

              {/* Auth Buttons */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 }}
                className="flex items-center gap-3"
              >
                <Link
                  href="/login"
                  className="px-5 py-2.5 text-sm font-semibold text-gray-300 hover:text-white border border-blue-500/30 rounded-xl hover:border-blue-500/60 hover:bg-blue-500/10 transition-all"
                >
                  Login
                </Link>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/signup"
                    className="relative px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold text-sm overflow-hidden group"
                  >
                    <span className="relative z-10">Sign Up</span>
                    {/* Glow effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 blur-xl"
                      transition={{ duration: 0.3 }}
                    />
                    {/* Shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{ x: ['-100%', '200%'] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                    />
                  </Link>
                </motion.div>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5 group"
            >
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 bg-white group-hover:bg-blue-400 transition-colors"
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-6 h-0.5 bg-white group-hover:bg-blue-400 transition-colors"
              />
              <motion.span
                animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 bg-white group-hover:bg-blue-400 transition-colors"
              />
            </button>
          </div>
        </div>

        {/* Neon bottom border */}
        {isScrolled && (
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"
          />
        )}
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
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/90 backdrop-blur-xl"
              onClick={() => setMobileOpen(false)}
            />

            {/* Menu Content */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-gradient-to-br from-gray-900 via-black to-gray-900 border-l border-blue-500/20 overflow-y-auto"
            >
              <div className="p-8 pt-24">
                {/* Mobile Nav Links */}
                <div className="space-y-2 mb-8">
                  {navLinks.map((link, idx) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className={`block px-6 py-4 rounded-xl font-semibold transition-all ${
                          isActive(link.href)
                            ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                            : 'text-gray-300 hover:bg-white/5 hover:text-white'
                        }`}
                      >
                        {link.name}
                      </Link>
                      {/* Dropdown items for mobile */}
                      {link.dropdown && (
                        <div className="ml-4 mt-2 space-y-1">
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              onClick={() => setMobileOpen(false)}
                              className="block px-4 py-2 text-sm text-gray-400 hover:text-blue-400 transition-colors"
                            >
                              {item.icon} {item.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Mobile Auth Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="space-y-3 pt-6 border-t border-blue-500/20"
                >
                  <Link
                    href="/login"
                    onClick={() => setMobileOpen(false)}
                    className="block px-6 py-4 text-center border-2 border-blue-500/30 text-white rounded-xl font-semibold hover:bg-blue-500/10 transition-all"
                  >
                    Login
                  </Link>
                  <Link
                    href="/signup"
                    onClick={() => setMobileOpen(false)}
                    className="block px-6 py-4 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg shadow-blue-500/30"
                  >
                    Sign Up
                  </Link>
                </motion.div>

                {/* Mobile Theme Toggle */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="mt-6 flex justify-center"
                >
                  <ThemeToggle />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
