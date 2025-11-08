import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Aisha Johnson',
    role: 'CEO, TechStart Inc.',
    quote: 'MultiMian turned our idea into a polished product in record time. Their attention to detail and technical expertise exceeded our expectations.',
    image: '/testimonials/aisha.jpg',
    rating: 5
  },
  {
    name: 'Tom Anderson',
    role: 'CTO, Innovation Labs',
    quote: 'Reliable, communicative, and pragmatic — they are not just developers, they are strategic partners in our success story.',
    image: '/testimonials/tom.jpg',
    rating: 5
  },
  {
    name: 'Sarah Chen',
    role: 'Founder, Digital Solutions',
    quote: 'The quality of work and professionalism shown by MultiMian is outstanding. They delivered exactly what we needed and more.',
    image: '/testimonials/sarah.jpg',
    rating: 5
  },
  {
    name: 'Michael Rodriguez',
    role: 'Product Manager, StartupXYZ',
    quote: 'Working with MultiMian was a game-changer for our project. Their innovative approach and technical skills are top-notch.',
    image: '/testimonials/michael.jpg',
    rating: 5
  },
  {
    name: 'Emma Wilson',
    role: 'Marketing Director, GrowthCo',
    quote: 'From concept to launch, MultiMian provided exceptional service. Their attention to user experience is remarkable.',
    image: '/testimonials/emma.jpg',
    rating: 5
  },
  {
    name: 'David Kim',
    role: 'Entrepreneur, TechVentures',
    quote: 'MultiMian&apos;s expertise in modern web technologies helped us scale our platform efficiently. Highly recommended!',
    image: '/testimonials/david.jpg',
    rating: 5
  }
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

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <div className="container py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
          Client Testimonials
        </h1>
        <p className="text-xl text-muted mb-8">
          Don&apos;t just take our word for it — hear from our satisfied clients who have experienced
          the quality and dedication we bring to every project.
        </p>
        <div className="inline-flex items-center gap-3 text-sm text-primary bg-primary/10 px-6 py-3 rounded-xl">
          <span>⭐</span>
          <span>Trusted by businesses worldwide</span>
        </div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {testimonials.map((testimonial, idx) => (
          <motion.div
            key={testimonial.name}
            variants={itemVariants}
            whileHover={{ y: -8 }}
            className="glass-card rounded-2xl p-6 group"
          >
            <StarRating rating={testimonial.rating} />

            <blockquote className="text-muted mb-6 leading-relaxed">
              "{testimonial.quote}"
            </blockquote>

            <div className="flex items-center gap-4">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary-dark/20 flex items-center justify-center text-primary font-bold text-lg"
              >
                {testimonial.name.charAt(0)}
              </motion.div>
              <div>
                <div className="font-bold text-foreground group-hover:text-primary transition-colors">
                  {testimonial.name}
                </div>
                <div className="text-sm text-muted">
                  {testimonial.role}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-16 text-center"
      >
        <div className="glass-card rounded-2xl p-8 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Ready to Join Our Success Stories?</h3>
          <p className="text-muted mb-6">
            Let&apos;s discuss how we can help bring your vision to life with the same quality and dedication
            our clients have experienced.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 glass-button px-8 py-4 rounded-xl font-medium"
          >
            Start Your Project
            <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </motion.div>
    </div>
  )
}
