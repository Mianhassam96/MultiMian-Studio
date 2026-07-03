import Link from 'next/link'
import { motion } from 'framer-motion'

// Floating particle definitions
const PARTICLES = [
  { size: 'w-5 h-5', pos: 'top-16 left-16',    delay: 0,  dur: 8  },
  { size: 'w-8 h-8', pos: 'top-28 right-20',   delay: 1,  dur: 10 },
  { size: 'w-4 h-4', pos: 'bottom-40 left-28', delay: 2,  dur: 9  },
  { size: 'w-6 h-6', pos: 'top-1/2 left-10',   delay: 3,  dur: 7  },
  { size: 'w-7 h-7', pos: 'bottom-24 right-14',delay: 4,  dur: 11 },
  { size: 'w-3 h-3', pos: 'top-1/3 right-1/3', delay: 1.5,dur: 6  },
]

const THEMES = {
  blue: {
    gradientFrom:  'from-blue-500',
    gradientTo:    'to-cyan-400',
    hoverFrom:     'hover:from-blue-600',
    hoverTo:       'hover:to-cyan-500',
    accent:        'text-cyan-300',
    badge:         'from-blue-500/20 to-cyan-500/20 border-cyan-400/30',
    bg:            'from-slate-900 via-blue-950/90 to-indigo-950/80',
    particleColors:['from-cyan-400 to-blue-500', 'from-purple-400 to-pink-400', 'from-indigo-400 to-cyan-400', 'from-emerald-400 to-teal-400', 'from-violet-400 to-purple-400','from-blue-300 to-cyan-300'],
    glow:          'shadow-blue-500/40',
    ring:          'focus:ring-blue-500/50',
  },
  cyan: {
    gradientFrom:  'from-cyan-500',
    gradientTo:    'to-blue-400',
    hoverFrom:     'hover:from-cyan-600',
    hoverTo:       'hover:to-blue-500',
    accent:        'text-blue-300',
    badge:         'from-cyan-500/20 to-blue-500/20 border-blue-400/30',
    bg:            'from-slate-900 via-cyan-950/90 to-blue-950/80',
    particleColors:['from-blue-400 to-cyan-500', 'from-pink-400 to-purple-400', 'from-cyan-400 to-indigo-400', 'from-teal-400 to-emerald-400', 'from-purple-400 to-violet-400','from-cyan-300 to-blue-300'],
    glow:          'shadow-cyan-500/40',
    ring:          'focus:ring-cyan-500/50',
  },
} as const

type ThemeKey = keyof typeof THEMES

const FEATURE_BULLETS = [
  { icon: '✅', title: 'Full Stack Expertise',          sub: 'Frontend · Backend · APIs · Databases' },
  { icon: '✅', title: 'Clean & Scalable Code',          sub: 'Maintainable architecture & best practices' },
  { icon: '✅', title: 'Responsive & SEO-Optimized',     sub: 'Fast, accessible, and search-friendly' },
  { icon: '✅', title: 'On-Time Delivery',               sub: 'Reliable timelines and ongoing support' },
]

const STATS = [
  { value: '40+', label: 'Projects Delivered' },
  { value: '5★',  label: 'Client Rating'      },
  { value: '24/7',label: 'Support'             },
]

export default function Hero() {
<<<<<<< HEAD

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-950 dark:via-blue-950 dark:to-indigo-950">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-20 w-[700px] h-[700px] bg-gradient-to-br from-blue-500/20 to-purple-500/20 dark:from-blue-500/10 dark:to-purple-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 left-20 w-[700px] h-[700px] bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 dark:from-indigo-500/10 dark:to-pink-500/10 rounded-full blur-3xl"
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(59,130,246,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.08)_1px,transparent_1px)] bg-[size:80px_80px]" />
        
        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-blue-500/40 dark:bg-blue-400/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="container relative z-10 px-4 py-32">
        <div className="max-w-7xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-12"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-3 px-7 py-3.5 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border-2 border-blue-200 dark:border-blue-800 rounded-full shadow-xl"
            >
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="relative"
              >
                <div className="w-3 h-3 bg-emerald-500 rounded-full" />
                <div className="absolute inset-0 w-3 h-3 bg-emerald-500 rounded-full animate-ping" />
              </motion.div>
              <span className="text-gray-900 dark:text-white font-bold text-sm">Available for Projects</span>
              <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full text-xs font-bold shadow-md">2026</span>
            </motion.div>
          </motion.div>

          {/* Main Heading */}
          <div className="text-center mb-12">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-[1.1]"
            >
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="block text-gray-900 dark:text-white mb-4"
              >
                Transform Ideas Into
              </motion.span>
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent"
              >
                Digital Reality
              </motion.span>
            </motion.h1>

            {/* Animated Line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 200 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="h-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 mx-auto rounded-full shadow-lg"
            />
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-lg md:text-2xl text-gray-700 dark:text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed text-center font-medium"
          >
            We don't just build websites — we create <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">digital experiences</span> that{' '}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">captivate audiences</span> and{' '}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">skyrocket your growth</span>.
          </motion.p>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
          >
            {[
              { icon: '⚛️', text: 'React', color: 'from-cyan-500 to-blue-600' },
              { icon: '▲', text: 'Next.js', color: 'from-gray-700 to-gray-900' },
              { icon: '🎨', text: 'Tailwind', color: 'from-sky-500 to-cyan-600' },
              { icon: '⚡', text: 'TypeScript', color: 'from-blue-600 to-indigo-700' },
            ].map((tech, i) => (
              <motion.div
                key={tech.text}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.3 + i * 0.1, type: "spring" }}
                whileHover={{ scale: 1.1, y: -5 }}
                className={`px-5 py-3 bg-gradient-to-r ${tech.color} text-white rounded-xl font-bold shadow-lg cursor-pointer hover:shadow-xl transition-shadow`}
              >
                <span className="flex items-center gap-2">
                  <span className="text-2xl">{tech.icon}</span>
                  <span className="text-base">{tech.text}</span>
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-16"
          >
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 60px rgba(59, 130, 246, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-10 py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white rounded-xl font-bold text-lg shadow-xl overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.4 }}
                />
                <span className="relative z-10 flex items-center gap-2">
                  <motion.span
                    animate={{ rotate: [0, 15, -15, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                    className="text-xl"
                  >
                    🚀
                  </motion.span>
                  <span>Start Your Project</span>
                  <motion.svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    whileHover={{ x: 5 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </motion.svg>
                </span>
              </motion.button>
            </Link>

            <Link href="/portfolio">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 15px 40px rgba(0, 0, 0, 0.15)" }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-xl font-bold text-lg shadow-lg transition-all"
              >
                <span className="flex items-center gap-2">
                  <span>View Portfolio</span>
                  <motion.span
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-xl"
                  >
                    📁
                  </motion.span>
                </span>
              </motion.button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-5xl mx-auto"
          >
            {[
              { icon: '⭐', number: '50+', label: 'Projects Completed', gradient: 'from-yellow-400 to-orange-500' },
              { icon: '👥', number: '30+', label: 'Happy Clients', gradient: 'from-blue-400 to-cyan-500' },
              { icon: '🏆', number: '5+', label: 'Years Experience', gradient: 'from-purple-400 to-pink-500' },
              { icon: '💯', number: '100%', label: 'Satisfaction', gradient: 'from-green-400 to-emerald-500' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.9 + i * 0.1, type: "spring" }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative text-center p-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border-2 border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg cursor-pointer hover:shadow-xl transition-all"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
                  className="text-5xl mb-3 relative z-10"
                >
                  {stat.icon}
                </motion.div>
                <div className={`text-3xl font-black bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2 relative z-10`}>
                  {stat.number}
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400 font-semibold relative z-10">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors cursor-pointer">
          <span className="text-xs font-semibold tracking-wider">SCROLL</span>
          <motion.svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </motion.svg>
        </div>
=======
  const [theme, setTheme] = useState<ThemeKey>('blue')
  const t = THEMES[theme]

  return (
    <section
      id="home"
      aria-label="Hero"
      className="rounded-2xl relative overflow-hidden min-h-[90vh] flex items-center justify-center"
    >
      {/* ── Layered background ── */}
      <div className={`absolute inset-0 bg-gradient-to-br ${t.bg}`} />
      <div className="absolute inset-0 bg-gradient-to-tl from-pink-500/8 via-transparent to-cyan-500/8" />
      <div className="absolute inset-0"
        style={{ backgroundImage: 'radial-gradient(ellipse at 60% 20%, rgba(37,99,235,0.18) 0%, transparent 55%), radial-gradient(ellipse at 30% 80%, rgba(139,92,246,0.12) 0%, transparent 55%)' }}
      />

      {/* ── Floating blobs ── */}
      {PARTICLES.map((p, i) => (
        <motion.div
          key={i}
          className={`absolute ${p.size} ${p.pos} bg-gradient-to-r ${t.particleColors[i]} rounded-full opacity-60 shadow-lg ${t.glow} pointer-events-none`}
          animate={{ y: [0, -28, 0], rotate: [0, 360, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: p.dur, repeat: Infinity, ease: 'easeInOut', delay: p.delay }}
        />
      ))}

      {/* ── Content ── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto relative z-10 px-6 py-16 md:py-20 text-center"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`mb-8 inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-gradient-to-r ${t.badge} backdrop-blur-sm border`}
        >
          <span className="flex h-2 w-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 animate-pulse" />
          <span className={`text-sm font-semibold tracking-wide ${t.accent}`}>
            Full-Stack Development Studio
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 text-white"
          style={{ textShadow: '0 4px 12px rgba(0,0,0,0.6)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <motion.span
            className="block"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            🚀 Modern Web Experiences.
          </motion.span>
          <motion.span
            className={`block ${t.accent}`}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4, type: 'spring', stiffness: 180 }}
          >
            Creative UI. Clean Code.
          </motion.span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-lg md:text-xl text-slate-200 max-w-3xl mx-auto mb-5 leading-relaxed"
          style={{ textShadow: '0 2px 6px rgba(0,0,0,0.5)' }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          A showcase project by{' '}
          <span className={`font-bold ${t.accent}`}>Mian Hassam</span>,
          demonstrating responsive design, smooth animations, reusable components,
          and modern full-stack development — from concept to deployment.
        </motion.p>

        <motion.p
          className="text-base text-slate-300 max-w-2xl mx-auto mb-10"
          style={{ textShadow: '0 2px 6px rgba(0,0,0,0.5)' }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.38 }}
        >
          💡 React · Next.js · TypeScript · Node.js · Tailwind CSS · Framer Motion · MongoDB · PostgreSQL · AWS
        </motion.p>

        {/* Feature bullets */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto mb-10 text-left"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
        >
          {FEATURE_BULLETS.map((f, i) => (
            <motion.div
              key={f.title}
              className="flex items-start gap-3"
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.08 }}
            >
              <span className="text-cyan-400 text-lg mt-0.5">{f.icon}</span>
              <div>
                <div className="font-semibold text-white text-sm">{f.title}</div>
                <div className={`text-xs ${t.accent} opacity-90`}>{f.sub}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
        >
          <motion.div whileHover={{ scale: 1.04, y: -3 }} whileTap={{ scale: 0.97 }} transition={{ type: 'spring', stiffness: 300 }}>
            <Link
              href="/portfolio"
              className={`bg-gradient-to-r ${t.gradientFrom} ${t.gradientTo} ${t.hoverFrom} ${t.hoverTo} text-white px-9 py-4 rounded-2xl font-semibold text-base inline-flex items-center gap-2.5 shadow-2xl ${t.glow} focus:outline-none focus:ring-4 ${t.ring} transition-all duration-300`}
            >
              <span>👁️</span> View Live Demo
              <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd"/>
              </svg>
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.04, y: -3 }} whileTap={{ scale: 0.97 }} transition={{ type: 'spring', stiffness: 300 }}>
            <a
              href="https://github.com/Mianhassam96/MultiMian-Studio"
              target="_blank"
              rel="noreferrer"
              className="px-9 py-4 rounded-2xl font-semibold text-base inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-sm border border-white/25 text-white hover:bg-white/20 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/30"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.8-1.4-3.8-1.4-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 1.7 2.6 1.2 3.2.9.1-.7.4-1.2.7-1.5-2.6-.3-5.4-1.3-5.4-5.7 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.3 1.2.9-.2 1.8-.3 2.7-.3s1.9.1 2.7.3c2.3-1.6 3.3-1.2 3.3-1.2.6 1.7.2 3 .1 3.3.7.9 1.2 2 1.2 3.3 0 4.4-2.8 5.4-5.4 5.7.6.5 1 1.3 1 2.6v3.8c0 .4.2.8.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z"/>
              </svg>
              View Source Code
            </a>
          </motion.div>

          <motion.div whileHover={{ scale: 1.04, y: -3 }} whileTap={{ scale: 0.97 }} transition={{ type: 'spring', stiffness: 300 }}>
            <Link
              href="/contact"
              className={`bg-gradient-to-r ${t.gradientFrom} ${t.gradientTo} ${t.hoverFrom} ${t.hoverTo} text-white px-9 py-4 rounded-2xl font-semibold text-base inline-flex items-center gap-2.5 shadow-2xl ${t.glow} focus:outline-none focus:ring-4 ${t.ring} transition-all duration-300`}
            >
              <span>👉</span> Let's Build Together
            </Link>
          </motion.div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          className="flex items-center justify-center gap-10 flex-wrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.65 }}
        >
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              className="text-center"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + i * 0.1 }}
            >
              <div className={`text-2xl font-extrabold ${t.accent}`}>{s.value}</div>
              <div className="text-xs text-slate-300 mt-0.5 tracking-wide">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Theme toggle */}
        <motion.div
          className="mt-10 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85 }}
        >
          <button
            onClick={() => setTheme(theme === 'blue' ? 'cyan' : 'blue')}
            aria-label="Toggle hero color theme"
            className="flex items-center gap-2.5 px-5 py-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-medium hover:bg-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/40"
          >
            <span className={`w-3.5 h-3.5 rounded-full ${theme === 'blue' ? 'bg-blue-400' : 'bg-cyan-400'} shadow-lg`} />
            {theme === 'blue' ? 'Switch to Cyan Theme' : 'Switch to Blue Theme'}
          </button>
        </motion.div>
>>>>>>> 4384903 (feat: v2.0 complete redesign - design system, gallery, tech stack, animated counters, 6 color themes, sticky nav with scroll progress, enriched footer, accessible components)
      </motion.div>

      {/* Bottom fade into page */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[var(--bg)] to-transparent pointer-events-none" />
    </section>
  )
}
