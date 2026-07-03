import { motion } from 'framer-motion'
import Link from 'next/link'

interface GalleryItem {
  label: string
  icon: string
  desc: string
  tags: string[]
  gradient: string
  accentColor: string
  href: string
}

const ITEMS: GalleryItem[] = [
  {
    label: 'Desktop — Full Layout',
    icon: '🖥️',
    desc: 'Widescreen responsive layout with smooth animations, glass morphism cards, and gradient-driven design.',
    tags: ['Responsive', 'Dark Mode', 'Animations'],
    gradient: 'from-blue-600 via-indigo-600 to-purple-700',
    accentColor: 'text-blue-300',
    href: '/',
  },
  {
    label: 'Tablet — Services Grid',
    icon: '📱',
    desc: 'Adaptive service card grid that reflows beautifully from 3 columns to 2 on tablet-sized screens.',
    tags: ['CSS Grid', 'Fluid Typography', 'Breakpoints'],
    gradient: 'from-emerald-500 via-teal-600 to-cyan-700',
    accentColor: 'text-emerald-300',
    href: '/services',
  },
  {
    label: 'Mobile — Hero Section',
    icon: '📲',
    desc: 'Mobile-first hero with staggered entrance animations, floating blobs, and touch-friendly CTAs.',
    tags: ['Mobile First', 'Touch UX', 'Framer Motion'],
    gradient: 'from-pink-600 via-rose-600 to-red-700',
    accentColor: 'text-pink-300',
    href: '/',
  },
  {
    label: 'Dark Mode — Portfolio',
    icon: '🌙',
    desc: 'Seamless dark theme toggle with refined color tokens and optimized contrast ratios.',
    tags: ['Dark Mode', 'WCAG AA', 'CSS Variables'],
    gradient: 'from-violet-700 via-purple-700 to-indigo-800',
    accentColor: 'text-violet-300',
    href: '/portfolio',
  },
  {
    label: 'Animations — Feature Cards',
    icon: '✨',
    desc: 'Scroll-triggered stagger animations, hover lifts, scale effects, and icon rotations.',
    tags: ['Framer Motion', 'InView', 'Stagger'],
    gradient: 'from-amber-500 via-orange-600 to-red-600',
    accentColor: 'text-amber-300',
    href: '/about',
  },
  {
    label: 'Contact — Interactive Form',
    icon: '📬',
    desc: 'Accessible, validated contact form with real-time feedback and smooth state transitions.',
    tags: ['Accessibility', 'Form UX', 'Validation'],
    gradient: 'from-cyan-600 via-sky-600 to-blue-700',
    accentColor: 'text-cyan-300',
    href: '/contact',
  },
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 md:py-28" aria-label="Project gallery">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-14"
      >
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
          🖼️ Gallery
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient">
          Showcase Gallery
        </h2>
        <p className="text-muted max-w-2xl mx-auto text-base">
          See responsive layouts, dark mode, animations, and component designs across all screen sizes.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
      >
        {ITEMS.map((item) => (
          <motion.div
            key={item.label}
            variants={{
              hidden: { opacity: 0, y: 24 },
              show:   { opacity: 1, y: 0  },
            }}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 280, damping: 22 }}
            className="glass-card rounded-2xl overflow-hidden group"
          >
            {/* Preview area */}
            <div className={`aspect-video bg-gradient-to-br ${item.gradient} relative overflow-hidden flex items-center justify-center`}>
              {/* Decorative grid lines */}
              <div className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                }}
              />
              {/* Floating icon */}
              <motion.span
                className="text-7xl drop-shadow-2xl select-none"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                aria-hidden
              >
                {item.icon}
              </motion.span>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Link
                  href={item.href}
                  className="px-5 py-2.5 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white font-semibold text-sm hover:bg-white/30 transition-all duration-200"
                >
                  View Page →
                </Link>
              </div>
            </div>

            <div className="p-5">
              <h3 className={`font-bold text-base mb-2 group-hover:${item.accentColor} transition-colors duration-200`}>
                {item.label}
              </h3>
              <p className="text-muted text-sm leading-relaxed mb-3">{item.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-full text-xs font-medium bg-primary/8 text-primary border border-primary/15"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
