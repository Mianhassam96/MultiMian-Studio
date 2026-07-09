import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'

const THEMES = {
  blue: {
    gradientFrom:   'from-blue-500',
    gradientTo:     'to-cyan-400',
    hoverFrom:      'hover:from-blue-600',
    hoverTo:        'hover:to-cyan-500',
    accent:         'text-cyan-300',
    badge:          'from-blue-500/20 to-cyan-500/20 border-cyan-400/30',
    bg:             'from-slate-900 via-blue-950/90 to-indigo-950/80',
    particleColors: ['from-cyan-400 to-blue-500', 'from-purple-400 to-pink-400', 'from-indigo-400 to-cyan-400', 'from-emerald-400 to-teal-400', 'from-violet-400 to-purple-400', 'from-blue-300 to-cyan-300'],
    glow:           'shadow-blue-500/40',
    ring:           'focus:ring-blue-500/50',
  },
  cyan: {
    gradientFrom:   'from-cyan-500',
    gradientTo:     'to-blue-400',
    hoverFrom:      'hover:from-cyan-600',
    hoverTo:        'hover:to-blue-500',
    accent:         'text-blue-300',
    badge:          'from-cyan-500/20 to-blue-500/20 border-blue-400/30',
    bg:             'from-slate-900 via-cyan-950/90 to-blue-950/80',
    particleColors: ['from-blue-400 to-cyan-500', 'from-pink-400 to-purple-400', 'from-cyan-400 to-indigo-400', 'from-teal-400 to-emerald-400', 'from-purple-400 to-violet-400', 'from-cyan-300 to-blue-300'],
    glow:           'shadow-cyan-500/40',
    ring:           'focus:ring-cyan-500/50',
  },
} as const

const VALUE_BULLETS = [
  { label: 'SEO Optimized',     sub: 'Built to rank on Google from day one'  },
  { label: 'Mobile Friendly',   sub: 'Perfect on every screen and device'     },
  { label: 'Fast Loading',      sub: 'Sub-2-second load times guaranteed'     },
  { label: 'Secure & Reliable', sub: 'SSL, backups, and ongoing care'         },
]

export default function Hero() {
  const [heroTheme, setHeroTheme] = useState<'blue' | 'cyan'>('blue')

  const themeColors = {
    blue: {
      gradientFrom: 'from-blue-500',
      gradientTo:   'to-cyan-500',
      hoverFrom:    'hover:from-blue-600',
      hoverTo:      'hover:to-cyan-600',
      accent:       'text-cyan-300',
      floating:     ['from-cyan-400 to-blue-500', 'from-purple-400 to-pink-400', 'from-indigo-400 to-cyan-400', 'from-emerald-400 to-teal-400', 'from-violet-400 to-purple-400'],
      bgAccent:     'from-indigo-600/20 via-purple-400/15 to-blue-500/20',
      glow:         'shadow-blue-500/50',
      ring:         'focus:ring-blue-500/50',
    },
    cyan: {
      gradientFrom: 'from-cyan-500',
      gradientTo:   'to-blue-500',
      hoverFrom:    'hover:from-cyan-600',
      hoverTo:      'hover:to-blue-600',
      accent:       'text-cyan-300',
      floating:     ['from-blue-400 to-cyan-500', 'from-pink-400 to-purple-400', 'from-cyan-400 to-indigo-400', 'from-teal-400 to-emerald-400', 'from-purple-400 to-violet-400'],
      bgAccent:     'from-cyan-600/20 via-blue-400/15 to-indigo-500/20',
      glow:         'shadow-cyan-500/50',
      ring:         'focus:ring-cyan-500/50',
    },
  }

  const currentTheme = themeColors[heroTheme]
  const t = currentTheme

  return (
    <section className="rounded-2xl p-8 md:p-16 text-center relative overflow-hidden min-h-[85vh] flex items-center justify-center">
      {/* Multi-layer background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/90 to-indigo-900/80"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-pink-500/10 via-transparent to-cyan-500/10"></div>
      <div className={`absolute inset-0 bg-gradient-to-r ${currentTheme.bgAccent} backdrop-blur-sm`}></div>

      {/* Floating particles */}
      <motion.div
        className={`absolute top-16 left-16 w-6 h-6 bg-gradient-to-r ${currentTheme.floating[0]} rounded-full opacity-70 shadow-lg ${currentTheme.glow}`}
        animate={{ y: [0, -30, 0], rotate: [0, 360], scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className={`absolute top-32 right-24 w-8 h-8 bg-gradient-to-r ${currentTheme.floating[1]} rounded-full opacity-60 shadow-lg ${currentTheme.glow}`}
        animate={{ y: [0, 40, 0], x: [0, -15, 0], rotate: [0, -180, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
      <motion.div
        className={`absolute bottom-40 left-32 w-5 h-5 bg-gradient-to-r ${currentTheme.floating[2]} rounded-full opacity-75 shadow-lg ${currentTheme.glow}`}
        animate={{ y: [0, -25, 0], rotate: [0, 360, 0], scale: [1, 0.8, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />
      <motion.div
        className={`absolute top-1/2 left-12 w-4 h-4 bg-gradient-to-r ${currentTheme.floating[3]} rounded-full opacity-65 shadow-lg ${currentTheme.glow}`}
        animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
      />
      <motion.div
        className={`absolute bottom-20 right-16 w-7 h-7 bg-gradient-to-r ${currentTheme.floating[4]} rounded-full opacity-55 shadow-lg ${currentTheme.glow}`}
        animate={{ y: [0, -35, 0], rotate: [0, -270, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto relative z-10"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-400/30"
        >
          <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>
          <span className={`text-sm font-medium ${currentTheme.accent}`}>Professional Website Development for Businesses</span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-8 text-white"
          style={{ textShadow: '3px 3px 6px rgba(0,0,0,0.8)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <motion.span
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="inline-block"
          >
            Professional Websites That Help
          </motion.span>
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6, type: 'spring', stiffness: 200 }}
            className={`relative ${currentTheme.accent} block md:inline-block`}
          >
            {' '}Businesses Grow Online
          </motion.span>
        </motion.h1>

        {/* Subheadline */}
        <motion.div
          className="text-xl md:text-2xl lg:text-3xl text-white max-w-4xl mx-auto mb-4 leading-relaxed font-light"
          style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.6)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="inline-block"
          >
            I&apos;m{' '}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6, type: 'spring', stiffness: 200 }}
            className="font-semibold text-cyan-300 inline-block"
          >
            Mian Hassam, Founder &amp; CEO of MultiMian
          </motion.span>
        </motion.div>

        {/* Subheadline description */}
        <motion.p
          className="text-base text-slate-300 max-w-2xl mx-auto mb-10"
          style={{ textShadow: '0 2px 6px rgba(0,0,0,0.5)' }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.38 }}
        >
          We build modern, fast, SEO-optimized websites that help businesses establish credibility, attract customers, and grow online.
        </motion.p>

        {/* Body copy */}
        <motion.div
          className="max-w-4xl mx-auto text-lg md:text-xl text-white mb-10 leading-relaxed font-light"
          style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.6)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
        >
          <motion.p
            className="mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            I help businesses build professional websites that establish credibility, attract customers, and grow revenue. Whether you need a business website, landing page, e-commerce store, or custom web app &mdash; I deliver results that matter to your bottom line.
          </motion.p>
          <motion.p
            className="text-cyan-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Built with React, Next.js, WordPress, and modern web technologies for long-term partnerships and reliable support.
          </motion.p>
        </motion.div>

        {/* Value bullets grid */}
        <motion.div
          className="max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {VALUE_BULLETS.map((b) => (
              <div key={b.label} className="flex items-start gap-3">
                <div className="text-cyan-400 text-xl">&#10003;</div>
                <div>
                  <div className="font-semibold text-white">{b.label}</div>
                  <div className="text-sm text-cyan-200">{b.sub}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Primary CTA row */}
          <div className="flex items-center justify-center gap-6 flex-wrap">
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <Link
                href="/contact"
                className={`bg-gradient-to-r ${currentTheme.gradientFrom} ${currentTheme.gradientTo} ${currentTheme.hoverFrom} ${currentTheme.hoverTo} text-white px-10 py-5 rounded-2xl font-semibold text-lg inline-flex items-center gap-3 shadow-2xl transition-all duration-300 ${currentTheme.glow} focus:outline-none focus:ring-4 ${currentTheme.ring}`}
              >
                <span>&#128073;</span> Get a Free Consultation
                <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                </svg>
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <Link
                href="/portfolio"
                className={`bg-gradient-to-r ${currentTheme.gradientFrom} ${currentTheme.gradientTo} ${currentTheme.hoverFrom} ${currentTheme.hoverTo} text-white px-8 py-5 rounded-2xl font-semibold text-lg inline-flex items-center gap-3 shadow-2xl transition-all duration-300 ${currentTheme.glow} focus:outline-none focus:ring-4 ${currentTheme.ring}`}
              >
                <span>&#128065;&#65039;</span> View Our Work
                <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
                  <path fillRule="evenodd" d="M.664 10.59a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Secondary CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
        >
          <motion.div whileHover={{ scale: 1.04, y: -3 }} whileTap={{ scale: 0.97 }} transition={{ type: 'spring', stiffness: 300 }}>
            <Link
              href="/services"
              className={`bg-gradient-to-r ${t.gradientFrom} ${t.gradientTo} ${t.hoverFrom} ${t.hoverTo} text-white px-9 py-4 rounded-2xl font-semibold text-base inline-flex items-center gap-2.5 shadow-2xl ${t.glow} focus:outline-none focus:ring-4 ${t.ring} transition-all duration-300`}
            >
              <span>&#128187;</span> Our Services
              <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
              </svg>
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.04, y: -3 }} whileTap={{ scale: 0.97 }} transition={{ type: 'spring', stiffness: 300 }}>
            <Link
              href="/pricing"
              className="px-9 py-4 rounded-2xl font-semibold text-base inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-sm border border-white/25 text-white hover:bg-white/20 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/30"
            >
              <span>&#128176;</span> View Pricing
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.04, y: -3 }} whileTap={{ scale: 0.97 }} transition={{ type: 'spring', stiffness: 300 }}>
            <Link
              href="/contact"
              className={`bg-gradient-to-r ${t.gradientFrom} ${t.gradientTo} ${t.hoverFrom} ${t.hoverTo} text-white px-9 py-4 rounded-2xl font-semibold text-base inline-flex items-center gap-2.5 shadow-2xl ${t.glow} focus:outline-none focus:ring-4 ${t.ring} transition-all duration-300`}
            >
              <span>&#128073;</span> Start Your Project
            </Link>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="flex items-center justify-center gap-10 flex-wrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.65 }}
        >
          <div className="text-center">
            <div className="text-2xl font-bold text-cyan-300 mb-1">50+</div>
            <div className="text-sm text-slate-300">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-cyan-300 mb-1">100%</div>
            <div className="text-sm text-slate-300">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-cyan-300 mb-1">24/7</div>
            <div className="text-sm text-slate-300">Support Available</div>
          </div>
        </motion.div>

        {/* Theme toggle */}
        <motion.div
          className="mt-8 flex items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <button
            onClick={() => setHeroTheme(heroTheme === 'blue' ? 'cyan' : 'blue')}
            className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-medium hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
          >
            <span className={`w-4 h-4 rounded-full ${heroTheme === 'blue' ? 'bg-blue-500' : 'bg-cyan-500'}`}></span>
            {heroTheme === 'blue' ? 'Switch to Cyan Theme' : 'Switch to Blue Theme'}
          </button>
        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[var(--bg)] to-transparent pointer-events-none" />
    </section>
  )
}
