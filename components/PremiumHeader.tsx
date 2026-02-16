import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ThemeToggle from './ThemeToggle'

export default function PremiumHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Work', href: '/portfolio' },
    { name: 'About', href: '/about' },
    { name: 'Community', href: '/profiles' },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'glass-effect shadow-lg py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group relative z-50">
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="text-3xl md:text-4xl font-bold tracking-wider"
              style={{ fontFamily: '"Space Grotesk", sans-serif' }}
            >
              <span className="gradient-text">MULTI</span>
              <span className="text-white">MIAN</span>
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, idx) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx, duration: 0.4 }}
              >
                <Link
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors underline-animate"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Right Side - CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <ThemeToggle />
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.4 }}
            >
              <Link
                href="/login"
                className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                Login
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.4 }}
            >
              <Link
                href="/signup"
                className="px-4 py-2 text-sm font-medium glass-effect text-white rounded-lg hover-scale border border-white/10"
              >
                Sign Up
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.4 }}
            >
              <Link
                href="/contact"
                className="px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover-scale glow-pulse text-sm"
              >
                Start Project
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-white transition-all"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-0.5 bg-white transition-all"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-white transition-all"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden"
          >
            <motion.nav
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              exit={{ y: -20 }}
              className="glass-effect mt-4 rounded-2xl p-6 space-y-4"
            >
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * idx }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all font-medium"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <Link
                  href="/login"
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-center text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all font-medium"
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-center glass-effect text-white rounded-lg font-medium border border-white/10"
                >
                  Sign Up
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold"
                >
                  Start Project
                </Link>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
