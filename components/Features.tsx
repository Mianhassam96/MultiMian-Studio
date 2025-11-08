import { motion } from 'framer-motion'

const items = [
  {
    title: 'Fast delivery',
    desc: 'Ship production-ready features rapidly with a streamlined process.',
    icon: '⚡'
  },
  {
    title: 'Scalable architecture',
    desc: 'Design systems that handle growth and maintain low latency.',
    icon: '🏗️'
  },
  {
    title: 'Developer-friendly',
    desc: 'Readable code, clear tests, and strong DX.',
    icon: '👨‍💻'
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export default function Features() {
  return (
    <section className="mt-24 py-16 bg-gradient-to-b from-white/5 to-primary/5 rounded-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
          Key Features
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Building the future of web applications with modern technologies and best practices
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-3 gap-8 px-8"
      >
        {items.map((item, idx) => (
          <motion.div
            key={item.title}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="p-8 bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 10
              }}
              className="text-4xl mb-4"
            >
              {item.icon}
            </motion.div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">{item.title}</h3>
            <p className="text-gray-600 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
