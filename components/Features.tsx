import { motion } from 'framer-motion'
import Link from 'next/link'

interface Feature {
  icon: string
  title: string
  desc: string
  stat: string
  statLabel: string
  color: string
  href: string
}

const FEATURES: Feature[] = [
  {
    icon: '⚡',
    title: 'Fast Delivery',
    desc: 'Ship production-ready features rapidly with an optimized workflow and streamlined CI/CD pipeline.',
    stat: '48h',
    statLabel: 'avg turnaround',
    color: 'from-amber-500/15 to-yellow-400/10',
    href: '/services',
  },
  {
    icon: '🏗️',
    title: 'Scalable Architecture',
    desc: 'Design systems that handle growth gracefully — low latency, clean separation, and minimal tech debt.',
    stat: '99.9%',
    statLabel: 'uptime ready',
    color: 'from-blue-500/15 to-indigo-400/10',
    href: '/services',
  },
  {
    icon: '👨‍💻',
    title: 'Developer Friendly',
    desc: 'Readable, typed code with clear documentation, strong DX patterns, and reusable component libraries.',
    stat: '100%',
    statLabel: 'TypeScript',
    color: 'from-cyan-500/15 to-teal-400/10',
    href: '/about',
  },
  {
    icon: '📱',
    title: 'Fully Responsive',
    desc: 'Mobile-first design with fluid layouts, adaptive typography, and perfect rendering on every device.',
    stat: '3+',
    statLabel: 'breakpoints',
    color: 'from-emerald-500/15 to-green-400/10',
    href: '/services',
  },
  {
    icon: '🎨',
    title: 'Polished UI/UX',
    desc: 'Thoughtful animations, consistent design tokens, and pixel-perfect interfaces your users will love.',
    stat: '95+',
    statLabel: 'Lighthouse',
    color: 'from-pink-500/15 to-rose-400/10',
    href: '/portfolio',
  },
  {
    icon: '🔒',
    title: 'Secure by Default',
    desc: 'Security best practices baked in from day one — input validation, auth patterns, and safe deployments.',
    stat: 'A+',
    statLabel: 'security grade',
    color: 'from-purple-500/15 to-violet-400/10',
    href: '/services',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-28" aria-label="Key features">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-14"
      >
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
          ✨ Key Features
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient">
          What Makes This Stand Out
        </h2>
        <p className="text-muted max-w-2xl mx-auto text-base">
          Built with modern standards — every detail reflects a commitment to quality, performance, and user experience.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
      >
        {FEATURES.map((f) => (
          <motion.div
            key={f.title}
            variants={{
              hidden: { opacity: 0, y: 20 },
              show:   { opacity: 1, y: 0  },
            }}
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 280, damping: 22 }}
            className={`glass-card rounded-2xl p-7 bg-gradient-to-br ${f.color} group flex flex-col`}
          >
            {/* Icon */}
            <motion.div
              whileHover={{ rotate: [0, -8, 8, 0], scale: 1.15 }}
              transition={{ duration: 0.4 }}
              className="text-4xl mb-4 select-none"
              aria-hidden
            >
              {f.icon}
            </motion.div>

            {/* Title */}
            <h3 className="text-lg font-bold mb-2 text-[var(--text)] group-hover:text-primary transition-colors duration-200">
              {f.title}
            </h3>

            {/* Description */}
            <p className="text-muted text-sm leading-relaxed mb-5 flex-1">{f.desc}</p>

            {/* Mini stat */}
            <div className="flex items-center justify-between pt-4 border-t border-primary/10">
              <div className="text-left">
                <div className="text-xl font-extrabold heading-gradient">{f.stat}</div>
                <div className="text-xs text-muted">{f.statLabel}</div>
              </div>
              <Link
                href={f.href}
                className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1 group/link"
                aria-label={`Learn more about ${f.title}`}
              >
                Learn More
                <span className="inline-block transition-transform duration-200 group-hover/link:translate-x-0.5">→</span>
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
