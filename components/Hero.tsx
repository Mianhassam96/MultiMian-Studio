import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Hero() {
  const techStack = [
    { name: 'React', icon: '⚛️', color: 'from-cyan-500 to-blue-500' },
    { name: 'Next.js', icon: '▲', color: 'from-gray-700 to-gray-900' },
    { name: 'Node.js', icon: '🟢', color: 'from-green-600 to-green-700' },
    { name: 'TypeScript', icon: 'TS', color: 'from-blue-600 to-blue-700' },
  ]

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-blue-900/10 dark:to-purple-900/10">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container relative z-10 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto text-center"
        >
          {/* Floating Tech Badges */}
          <motion.div 
            className="flex flex-wrap items-center justify-center gap-3 mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {techStack.map((tech, idx) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className={`px-4 py-2 bg-gradient-to-r ${tech.color} text-white rounded-full text-sm font-semibold shadow-lg flex items-center gap-2`}
              >
                <span>{tech.icon}</span>
                <span>{tech.name}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Main Animated Gradient Heading */}
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="block text-gray-900 dark:text-white mb-2">
              Build High-Performance Websites
            </span>
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
              That Grow Your Business
            </span>
          </motion.h1>

          {/* Highlight Line */}
          <motion.div
            className="inline-flex flex-wrap items-center justify-center gap-2 mb-6 text-sm md:text-base font-semibold text-gray-700 dark:text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full">
              Custom Web Development
            </span>
            <span className="text-gray-400">|</span>
            <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full">
              SaaS Applications
            </span>
            <span className="text-gray-400">|</span>
            <span className="px-3 py-1 bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 rounded-full">
              Modern Business Websites
            </span>
          </motion.div>

          {/* Subtext with SEO Keywords */}
          <motion.p
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <strong className="text-gray-900 dark:text-white">MultiMian</strong> is a professional web development studio founded by <strong className="text-gray-900 dark:text-white">Mian Hassam</strong>, specializing in modern, scalable, and SEO-optimized websites built with <span className="text-blue-600 dark:text-blue-400 font-semibold">React</span>, <span className="text-gray-900 dark:text-white font-semibold">Next.js</span>, and <span className="text-green-600 dark:text-green-400 font-semibold">Node.js</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Link 
              href="/contact" 
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-bold shadow-2xl shadow-blue-600/30 hover:shadow-blue-600/50 transition-all duration-300 inline-flex items-center gap-2 hover:scale-105"
            >
              <span className="text-2xl">🚀</span>
              <span>Start Your Project</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
            
            <Link 
              href="/portfolio" 
              className="group px-8 py-4 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-xl font-bold border-2 border-gray-200 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-500 transition-all duration-300 inline-flex items-center gap-2 shadow-lg hover:scale-105"
            >
              <span className="text-2xl">📂</span>
              <span>View Portfolio</span>
            </Link>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            className="flex flex-col items-center gap-4 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="flex items-center gap-6 text-sm font-semibold text-gray-700 dark:text-gray-300">
              <div className="flex items-center gap-2">
                <span className="text-yellow-500 text-xl">⭐⭐⭐⭐⭐</span>
                <span>5.0 Rating</span>
              </div>
              <span className="text-gray-300 dark:text-gray-600">|</span>
              <div className="flex items-center gap-2">
                <span className="text-green-500 text-xl">✓</span>
                <span>50+ Projects Delivered</span>
              </div>
              <span className="text-gray-300 dark:text-gray-600">|</span>
              <div className="flex items-center gap-2">
                <span className="text-blue-500 text-xl">👥</span>
                <span>30+ Happy Clients</span>
              </div>
            </div>
          </motion.div>

          {/* Trust Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            {[
              { icon: '⚡', number: '< 2s', label: 'Page Load Time' },
              { icon: '📱', number: '100%', label: 'Mobile Responsive' },
              { icon: '🔒', number: 'SSL', label: 'Secure & Safe' },
              { icon: '🎯', number: 'SEO', label: 'Optimized' },
            ].map((stat, idx) => (
              <motion.div 
                key={idx} 
                className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all"
                whileHover={{ y: -5 }}
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1, repeat: Infinity, repeatType: 'reverse' }}
      >
        <div className="flex flex-col items-center gap-2 text-gray-400 dark:text-gray-600">
          <span className="text-xs font-medium">Scroll to explore</span>
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </section>
  )
}
