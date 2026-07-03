import { motion } from 'framer-motion'

interface Tech {
  name: string
  emoji: string
  color: string   // Tailwind background class
  text?: string   // Tailwind text class
}

const TECHS: Tech[] = [
  { name: 'HTML5',      emoji: '🌐', color: 'from-orange-500/15 to-orange-400/10', text: 'text-orange-600 dark:text-orange-400' },
  { name: 'CSS3',       emoji: '🎨', color: 'from-blue-500/15 to-blue-400/10',     text: 'text-blue-600 dark:text-blue-400'   },
  { name: 'JavaScript', emoji: '⚡', color: 'from-yellow-500/15 to-yellow-400/10', text: 'text-yellow-600 dark:text-yellow-400'},
  { name: 'TypeScript', emoji: '🔷', color: 'from-blue-600/15 to-blue-500/10',     text: 'text-blue-700 dark:text-blue-300'   },
  { name: 'React',      emoji: '⚛️', color: 'from-cyan-500/15 to-cyan-400/10',     text: 'text-cyan-600 dark:text-cyan-400'   },
  { name: 'Next.js',    emoji: '▲',  color: 'from-gray-700/15 to-gray-600/10',     text: 'text-gray-700 dark:text-gray-300'   },
  { name: 'Tailwind',   emoji: '💨', color: 'from-teal-500/15 to-teal-400/10',     text: 'text-teal-600 dark:text-teal-400'   },
  { name: 'Node.js',    emoji: '🟢', color: 'from-green-500/15 to-green-400/10',   text: 'text-green-600 dark:text-green-400' },
  { name: 'MongoDB',    emoji: '🍃', color: 'from-emerald-500/15 to-emerald-400/10',text: 'text-emerald-600 dark:text-emerald-400'},
  { name: 'PostgreSQL', emoji: '🐘', color: 'from-indigo-500/15 to-indigo-400/10', text: 'text-indigo-600 dark:text-indigo-400'},
  { name: 'Git',        emoji: '🔀', color: 'from-red-500/15 to-red-400/10',        text: 'text-red-600 dark:text-red-400'     },
  { name: 'GitHub',     emoji: '🐙', color: 'from-purple-500/15 to-purple-400/10', text: 'text-purple-600 dark:text-purple-400'},
  { name: 'AWS',        emoji: '☁️', color: 'from-orange-600/15 to-yellow-500/10', text: 'text-orange-600 dark:text-orange-300'},
  { name: 'Vercel',     emoji: '▲',  color: 'from-gray-500/15 to-gray-400/10',     text: 'text-gray-600 dark:text-gray-400'   },
  { name: 'Firebase',   emoji: '🔥', color: 'from-amber-500/15 to-orange-400/10',  text: 'text-amber-600 dark:text-amber-400' },
  { name: 'Framer',     emoji: '🎬', color: 'from-pink-500/15 to-pink-400/10',     text: 'text-pink-600 dark:text-pink-400'   },
]

export default function TechStack() {
  return (
    <section id="technologies" className="py-20 md:py-28" aria-label="Technologies">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-14"
      >
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
          ⚙️ Tech Stack
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient">
          Technologies I Use
        </h2>
        <p className="text-muted max-w-xl mx-auto text-base">
          A curated set of modern tools and frameworks powering every project.
        </p>
      </motion.div>

      <motion.div
        className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.05 } },
        }}
      >
        {TECHS.map((tech) => (
          <motion.div
            key={tech.name}
            variants={{
              hidden: { opacity: 0, scale: 0.85, y: 12 },
              show:   { opacity: 1, scale: 1,    y: 0  },
            }}
            whileHover={{ y: -4, scale: 1.08 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className={`tech-badge bg-gradient-to-r ${tech.color} ${tech.text ?? 'text-primary'} border border-primary/15 cursor-default select-none`}
          >
            <span aria-hidden>{tech.emoji}</span>
            {tech.name}
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
