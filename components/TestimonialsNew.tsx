import { motion } from 'framer-motion'

const items = [
  {
    name: 'Aisha Johnson',
    role: 'CEO, TechStart Inc.',
    quote: 'MultiMian turned our idea into a polished product in record time. Their attention to detail and technical expertise exceeded our expectations.',
    image: '/testimonials/aisha.jpg'
  },
  {
    name: 'Tom Anderson',
    role: 'CTO, Innovation Labs',
    quote: 'Reliable, communicative, and pragmatic — they are not just developers, they are strategic partners in our success story.',
    image: '/testimonials/tom.jpg'
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.3 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export default function Testimonials() {
  return (
    <section className="mt-24 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
          What Our Clients Say
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Don&apos;t just take our word for it — hear from some of our satisfied clients
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-8"
      >
        {items.map((item, idx) => (
          <motion.div
            key={item.name}
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="relative p-8 bg-gradient-to-b from-white/80 to-white/60 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20"
          >
            <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-full -translate-y-1/4 translate-x-1/4" />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <svg className="w-12 h-12 text-primary/20 absolute -top-6 -left-2" fill="currentColor" viewBox="0 0 32 32">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
        <p className="text-lg text-gray-700 leading-relaxed mb-6 pl-4">
          “{item.quote}”
              </p>
            </motion.div>
            
            <div className="mt-6 flex items-center gap-4">
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary-dark/20 flex items-center justify-center text-primary font-bold text-lg"
              >
                {item.name.charAt(0)}
              </motion.div>
              <div>
                <div className="font-bold text-gray-800">{item.name}</div>
                <div className="text-sm text-gray-600">{item.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}