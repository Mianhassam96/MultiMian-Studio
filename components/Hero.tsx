import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="rounded-2xl p-8 md:p-16 text-center relative overflow-hidden min-h-[80vh] flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-green-600/15 to-cyan-500/20 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-green-500/10 via-transparent to-blue-500/10"></div>
      {/* Floating elements for attraction */}
      <motion.div
        className="absolute top-20 left-20 w-4 h-4 bg-purple-400 rounded-full opacity-60"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 360],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-40 right-32 w-6 h-6 bg-green-400 rounded-full opacity-50"
        animate={{
          y: [0, 30, 0],
          x: [0, -10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      <motion.div
        className="absolute bottom-32 left-40 w-3 h-3 bg-cyan-400 rounded-full opacity-70"
        animate={{
          y: [0, -15, 0],
          rotate: [0, -360],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto relative z-10"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-cyan-500/20 backdrop-blur-sm border border-green-400/30"
        >
          <span className="flex h-2 w-2 rounded-full bg-gradient-to-r from-green-400 to-cyan-500 animate-pulse"></span>
          <span className="text-sm font-medium text-white">Full-Stack Development Studio</span>
        </motion.div>


        <motion.h1
          className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-cyan-500 to-blue-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          🚀 Transforming Ideas into
          <span className="relative"> Powerful Digital Experiences</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-6 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
        >
          I’m Mian Hassam, a Full Stack Developer specializing in building modern, scalable, and user-focused web applications that drive results.
        </motion.p>

        <motion.div
          className="max-w-3xl mx-auto text-base text-gray-300 mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="mb-3">Hi there! I help businesses and individuals turn their ideas into high-performing web solutions. From sleek frontends to robust backends, I create websites and apps that don’t just look great — they perform flawlessly and deliver real impact.</p>
          <p className="">💡 Whether you need a portfolio site, business platform, or custom web app, I’ve got the tools, experience, and passion to make it happen.</p>
        </motion.div>

        <motion.div 
          className="max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            <div className="flex items-start gap-3">
              <div className="text-cyan-400 text-xl">✅</div>
              <div>
                <div className="font-semibold text-white">Full Stack Expertise</div>
                <div className="text-sm text-gray-300">Frontend, Backend, APIs, and Databases</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-cyan-400 text-xl">✅</div>
              <div>
                <div className="font-semibold text-white">Clean & Scalable Code</div>
                <div className="text-sm text-gray-300">Maintainable architecture and best practices</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-cyan-400 text-xl">✅</div>
              <div>
                <div className="font-semibold text-white">Responsive & SEO-Optimized</div>
                <div className="text-sm text-gray-300">Fast, accessible, and search-friendly designs</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-cyan-400 text-xl">✅</div>
              <div>
                <div className="font-semibold text-white">On-Time Delivery</div>
                <div className="text-sm text-gray-300">Reliable timelines and ongoing support</div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-6 flex-wrap">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-white px-8 py-4 rounded-xl font-medium inline-flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              👉 Let’s Build Your Project
            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
            </svg>
          </Link>
          <Link
            href="/portfolio"
            className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white px-6 py-4 rounded-xl font-medium inline-flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            View My Work
            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
              <path fillRule="evenodd" d="M.664 10.59a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
            </svg>
          </Link>
          </div>
        </motion.div>

        <motion.div
          className="mt-16 flex items-center justify-center gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="text-center">
            <div className="text-2xl font-bold text-cyan-400 mb-1">100+</div>
            <div className="text-sm text-gray-300">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-cyan-400 mb-1">5★</div>
            <div className="text-sm text-gray-300">Client Rating</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-cyan-400 mb-1">24/7</div>
            <div className="text-sm text-gray-300">Support</div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
