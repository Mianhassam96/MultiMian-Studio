import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

interface Stat {
  value: number
  suffix: string
  label: string
  icon: string
  color: string
}

const STATS: Stat[] = [
  { value: 15,  suffix: '+',  label: 'Components',        icon: '🧩', color: 'from-blue-500/20 to-cyan-400/15'    },
  { value: 100, suffix: '%',  label: 'Responsive',         icon: '📱', color: 'from-emerald-500/20 to-teal-400/15' },
  { value: 95,  suffix: '+',  label: 'Lighthouse Score',   icon: '⚡', color: 'from-amber-500/20 to-yellow-400/15' },
  { value: 13,  suffix: '+',  label: 'Pages Built',        icon: '📄', color: 'from-purple-500/20 to-pink-400/15'  },
  { value: 50,  suffix: '+',  label: 'Projects Delivered', icon: '🚀', color: 'from-primary/20 to-primary-dark/15' },
  { value: 5,   suffix: '+',  label: 'Years Experience',   icon: '🏆', color: 'from-rose-500/20 to-orange-400/15'  },
]

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const end = target
    const duration = 1400
    const step = Math.ceil(end / (duration / 16))
    const timer = setInterval(() => {
      start += step
      if (start >= end) { setCount(end); clearInterval(timer) }
      else setCount(start)
    }, 16)
    return () => clearInterval(timer)
  }, [inView, target])

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  )
}

export default function ProjectStats() {
  return (
    <section id="stats" className="py-20 md:py-28" aria-label="Project statistics">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-14"
      >
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
          📊 By the Numbers
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient">
          Project Statistics
        </h2>
        <p className="text-muted max-w-xl mx-auto text-base">
          Real numbers that reflect the quality and scope of work.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
      >
        {STATS.map((s) => (
          <motion.div
            key={s.label}
            variants={{
              hidden: { opacity: 0, y: 20, scale: 0.9 },
              show:   { opacity: 1, y: 0,  scale: 1   },
            }}
            whileHover={{ y: -6, scale: 1.04 }}
            transition={{ type: 'spring', stiffness: 280, damping: 22 }}
            className={`stat-card bg-gradient-to-br ${s.color} hover:shadow-glow transition-all duration-300`}
          >
            <div className="text-3xl mb-2" aria-hidden>{s.icon}</div>
            <div className="text-2xl md:text-3xl font-extrabold heading-gradient">
              <Counter target={s.value} suffix={s.suffix} />
            </div>
            <div className="text-xs text-muted mt-1 font-medium">{s.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
