import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'

// ─── Animation variants ────────────────────────────────────────────────────
const fadeUp = (delay = 0) => ({
  initial:   { opacity: 0, y: 24 },
  animate:   { opacity: 1, y: 0  },
  transition:{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] },
})

const fadeIn = (delay = 0) => ({
  initial:   { opacity: 0 },
  animate:   { opacity: 1 },
  transition:{ duration: 0.7, delay },
})

// ─── Stats ─────────────────────────────────────────────────────────────────
const STATS = [
  { value: '50+',  label: 'Projects'      },
  { value: '5+',   label: 'Years'         },
  { value: '98%',  label: 'Satisfaction'  },
  { value: '24/7', label: 'Support'       },
]

// ─── Trust bullets ─────────────────────────────────────────────────────────
const TRUST = [
  '✓ SEO Optimized',
  '✓ Mobile Friendly',
  '✓ Fast Loading',
  '✓ Secure & Reliable',
]

export default function Hero() {
  const reduced = useReducedMotion()

  return (
    <section className="relative overflow-hidden pt-8 pb-0 md:pt-12">

      {/* ── Background: soft radial glow + subtle grid ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        {/* Radial blue glow — top left */}
        <div
          className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)',
          }}
        />
        {/* Radial glow — bottom right */}
        <div
          className="absolute -bottom-20 -right-20 w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)',
          }}
        />
        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.035] dark:opacity-[0.06]"
          style={{
            backgroundImage: 'radial-gradient(circle, #2563eb 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      {/* ── Announcement Bar ── */}
      <motion.div {...fadeIn(0)} className="flex justify-center mb-8">
        <div
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-sm font-medium border"
          style={{
            backgroundColor: 'rgba(37,99,235,0.07)',
            borderColor: 'rgba(37,99,235,0.2)',
            color: 'var(--primary)',
          }}
        >
          <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
          Now accepting new projects for 2026
          <svg className="w-4 h-4 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </motion.div>

      {/* ── Main 2-col layout ── */}
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── LEFT: Copy ── */}
          <div className="text-center lg:text-left">

            {/* Trust badge */}
            <motion.div {...fadeUp(0.05)} className="flex justify-center lg:justify-start mb-6">
              <div
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold border"
                style={{
                  backgroundColor: 'rgba(37,99,235,0.06)',
                  borderColor: 'rgba(37,99,235,0.18)',
                  color: 'var(--primary)',
                }}
              >
                <span className="text-yellow-500 text-sm">★★★★★</span>
                Trusted by 50+ Businesses Worldwide
              </div>
            </motion.div>

            {/* H1 */}
            <motion.h1
              {...fadeUp(0.1)}
              className="text-[2.6rem] md:text-[3.2rem] lg:text-[3.6rem] font-black leading-[1.08] tracking-tight mb-6 text-[var(--text)]"
              style={{ fontFamily: '"Space Grotesk", sans-serif' }}
            >
              Professional Websites{' '}
              <span
                className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent"
              >
                That Turn Visitors
              </span>
              <br />
              Into Customers
            </motion.h1>

            {/* Description */}
            <motion.p
              {...fadeUp(0.18)}
              className="text-lg md:text-xl leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0"
              style={{ color: 'var(--muted)' }}
            >
              We create fast, SEO-optimized websites that help businesses build trust,
              generate leads, and grow online — delivered on time and built to last.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              {...fadeUp(0.25)}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-primary hover:bg-primary-dark text-white rounded-2xl font-bold text-base transition-all duration-200 shadow-lg shadow-primary/25 hover:shadow-primary/35 hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-primary/30"
              >
                Book Free Consultation
                <svg
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>

              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl font-bold text-base transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-primary/20 border-2"
                style={{
                  borderColor: 'var(--glass-stroke)',
                  color: 'var(--text)',
                  backgroundColor: 'transparent',
                }}
              >
                View Our Work
                <svg className="w-4 h-4 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Link>
            </motion.div>

            {/* Trust bullets */}
            <motion.div
              {...fadeUp(0.32)}
              className="flex flex-wrap gap-x-6 gap-y-2 justify-center lg:justify-start"
            >
              {TRUST.map((t) => (
                <span
                  key={t}
                  className="text-sm font-semibold"
                  style={{ color: 'var(--muted)' }}
                >
                  {t}
                </span>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: Premium Business Mockup ── */}
          <motion.div
            initial={reduced ? false : { opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative flex items-center justify-center lg:justify-end"
          >
            {/* Glow behind mockup */}
            <div
              className="absolute inset-0 rounded-3xl blur-3xl opacity-20"
              style={{ background: 'radial-gradient(ellipse, #2563eb 0%, transparent 70%)' }}
              aria-hidden
            />

            {/* Mockup card */}
            <motion.div
              animate={reduced ? {} : { y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-full max-w-lg"
            >
              {/* Browser chrome */}
              <div
                className="rounded-2xl overflow-hidden shadow-2xl border"
                style={{
                  backgroundColor: 'var(--bg)',
                  borderColor: 'var(--glass-stroke)',
                  boxShadow: '0 32px 64px -12px rgba(37,99,235,0.18), 0 0 0 1px rgba(37,99,235,0.08)',
                }}
              >
                {/* Browser top bar */}
                <div
                  className="flex items-center gap-2 px-4 py-3 border-b"
                  style={{
                    backgroundColor: 'var(--glass)',
                    borderColor: 'var(--glass-stroke)',
                  }}
                >
                  <span className="w-3 h-3 rounded-full bg-red-400/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
                  <span className="w-3 h-3 rounded-full bg-green-400/80" />
                  <div
                    className="ml-3 flex-1 h-6 rounded-full flex items-center px-3 text-xs"
                    style={{
                      backgroundColor: 'rgba(37,99,235,0.06)',
                      color: 'var(--muted)',
                    }}
                  >
                    multimian.studio
                  </div>
                </div>

                {/* Mockup body */}
                <div className="p-5 space-y-3">

                  {/* Nav bar mockup */}
                  <div
                    className="flex items-center justify-between px-4 py-2.5 rounded-xl"
                    style={{ backgroundColor: 'var(--glass)', border: '1px solid var(--glass-stroke)' }}
                  >
                    <div className="flex items-baseline gap-0">
                      <span className="font-black text-sm bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>Multi</span>
                      <span className="font-black text-sm" style={{ color: 'var(--text)', fontFamily: '"Space Grotesk", sans-serif' }}>Mian</span>
                      <span className="ml-1 text-[8px] font-bold uppercase tracking-widest text-primary">Studio</span>
                    </div>
                    <div className="hidden sm:flex items-center gap-3">
                      {['Services', 'Portfolio', 'Pricing'].map((n) => (
                        <span key={n} className="text-xs" style={{ color: 'var(--muted)' }}>{n}</span>
                      ))}
                    </div>
                    <div className="px-3 py-1 rounded-lg bg-primary text-white text-xs font-semibold">Get Started</div>
                  </div>

                  {/* Hero text mockup */}
                  <div className="px-2 py-3 space-y-2">
                    <div className="h-5 rounded-lg w-4/5" style={{ backgroundColor: 'var(--text)', opacity: 0.15 }} />
                    <div className="h-5 rounded-lg w-3/5" style={{ backgroundColor: 'var(--text)', opacity: 0.12 }} />
                    <div className="h-3.5 rounded-md w-full mt-3" style={{ backgroundColor: 'var(--text)', opacity: 0.07 }} />
                    <div className="h-3.5 rounded-md w-4/5" style={{ backgroundColor: 'var(--text)', opacity: 0.07 }} />
                    <div className="flex gap-2 mt-4">
                      <div className="h-8 w-28 rounded-xl bg-primary opacity-80" />
                      <div className="h-8 w-24 rounded-xl" style={{ border: '1.5px solid var(--glass-stroke)', opacity: 0.6 }} />
                    </div>
                  </div>

                  {/* Analytics cards row */}
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { label: 'SEO Score',    value: '98',  color: '#22c55e' },
                      { label: 'Performance',  value: '95',  color: '#2563eb' },
                      { label: 'Mobile Ready', value: '100', color: '#a855f7' },
                    ].map((card) => (
                      <motion.div
                        key={card.label}
                        initial={reduced ? false : { opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 + Math.random() * 0.3 }}
                        className="rounded-xl p-3 text-center"
                        style={{
                          backgroundColor: 'var(--glass)',
                          border: '1px solid var(--glass-stroke)',
                        }}
                      >
                        <div className="text-xl font-black" style={{ color: card.color }}>{card.value}</div>
                        <div className="text-[10px] font-medium mt-0.5" style={{ color: 'var(--muted)' }}>{card.label}</div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Services grid mockup */}
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { icon: '🌐', name: 'Business Website' },
                      { icon: '🛒', name: 'E-Commerce Store' },
                      { icon: '📱', name: 'Mobile Optimized' },
                      { icon: '🎯', name: 'Lead Generation'  },
                    ].map((s) => (
                      <div
                        key={s.name}
                        className="flex items-center gap-2 px-3 py-2.5 rounded-xl"
                        style={{
                          backgroundColor: 'var(--glass)',
                          border: '1px solid var(--glass-stroke)',
                        }}
                      >
                        <span className="text-sm">{s.icon}</span>
                        <span className="text-xs font-semibold" style={{ color: 'var(--text)' }}>{s.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating analytics badge — top right */}
              <motion.div
                initial={reduced ? false : { opacity: 0, scale: 0.8, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                animate-2={reduced ? {} : { y: [0, -6, 0] }}
                className="absolute -top-5 -right-4 rounded-2xl px-4 py-3 shadow-xl"
                style={{
                  backgroundColor: 'var(--bg)',
                  border: '1px solid var(--glass-stroke)',
                  boxShadow: 'var(--card-shadow)',
                }}
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-green-500/15 flex items-center justify-center text-green-500 text-lg">📈</div>
                  <div>
                    <div className="text-xs font-bold" style={{ color: 'var(--text)' }}>+127% Leads</div>
                    <div className="text-[10px]" style={{ color: 'var(--muted)' }}>This month</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating satisfaction badge — bottom left */}
              <motion.div
                initial={reduced ? false : { opacity: 0, scale: 0.8, x: -20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.75 }}
                className="absolute -bottom-4 -left-4 rounded-2xl px-4 py-3 shadow-xl"
                style={{
                  backgroundColor: 'var(--bg)',
                  border: '1px solid var(--glass-stroke)',
                  boxShadow: 'var(--card-shadow)',
                }}
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-blue-500/15 flex items-center justify-center text-blue-500 text-lg">⚡</div>
                  <div>
                    <div className="text-xs font-bold" style={{ color: 'var(--text)' }}>1.2s Load Time</div>
                    <div className="text-[10px]" style={{ color: 'var(--muted)' }}>Avg. delivery</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* ── Stats Bar ── */}
        <motion.div
          {...fadeUp(0.45)}
          className="mt-16 mb-2"
        >
          <div
            className="rounded-2xl px-6 py-5 border grid grid-cols-2 md:grid-cols-4"
            style={{
              backgroundColor: 'var(--glass)',
              borderColor: 'var(--glass-stroke)',
            }}
          >
            {STATS.map((s, i) => (
              <div
                key={s.label}
                className={`flex flex-col items-center justify-center py-4 ${i > 0 ? 'border-t md:border-t-0 md:border-l' : ''}`}
                style={{ borderColor: 'var(--glass-stroke)' }}
              >
                <span
                  className="text-3xl font-black leading-none mb-1"
                  style={{ color: 'var(--primary)' }}
                >
                  {s.value}
                </span>
                <span className="text-sm font-medium" style={{ color: 'var(--muted)' }}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
