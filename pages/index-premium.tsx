import Head from 'next/head'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function PremiumHome() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95])

  // Animated counter hook
  const useCounter = (end: number, duration: number = 2000) => {
    const [count, setCount] = useState(0)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
      if (!isVisible) return
      let startTime: number
      let animationFrame: number

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime
        const progress = (currentTime - startTime) / duration

        if (progress < 1) {
          setCount(Math.floor(end * progress))
          animationFrame = requestAnimationFrame(animate)
        } else {
          setCount(end)
        }
      }

      animationFrame = requestAnimationFrame(animate)
      return () => cancelAnimationFrame(animationFrame)
    }, [isVisible, end, duration])

    return { count, setIsVisible }
  }

  return (
    <>
      <Head>
        <title>MultiMian - Strategic Web Engineering for Business Growth</title>
        <meta name="description" content="Transform your online presence into a high-performance growth system. Modern web engineering with strategic thinking and measurable results." />
      </Head>

      {/* SECTION 1 - STRATEGIC HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-950 via-blue-950 to-gray-900">
        {/* Animated Background */}
        <div className="absolute inset-0">
          {/* Moving light waves */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20 animate-wave"></div>
          </div>
          
          {/* Animated grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:100px_100px] [perspective:1000px] [transform:rotateX(60deg)]"></div>
          
          {/* Floating blurred elements */}
          <motion.div
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              y: [0, 30, 0],
              x: [0, -20, 0],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          />
        </div>

        <motion.div
          style={{ opacity, scale }}
          className="container relative z-10 px-4 text-center"
        >
          {/* Authority Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-3 px-6 py-3 mb-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-full"
          >
            <span className="text-sm font-semibold text-blue-400 tracking-wide">Modern Web Engineering Studio</span>
            <span className="text-xs text-gray-400">React • Next.js • Node.js • TypeScript</span>
          </motion.div>
          
          <div className="h-px w-32 mx-auto mb-12 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          >
            <span className="block text-white">Your Website Should Be</span>
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 bg-clip-text text-transparent">
              Your Most Powerful Sales Asset.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-3xl font-light text-gray-400 mb-12"
          >
            Not Just Another Digital Expense.
          </motion.p>

          {/* Subtext */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-4xl mx-auto mb-12"
          >
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
              MultiMian helps businesses transform their online presence into high-performance growth systems — built with modern technologies, strategic thinking, and measurable results.
            </p>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
              We combine engineering precision with business strategy to deliver websites and web applications that convert, scale, and outperform competitors.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
          >
            <Link
              href="/contact"
              className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white rounded-xl font-bold text-lg shadow-lg shadow-blue-600/50 hover:shadow-xl hover:shadow-blue-600/70 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                <span>🚀</span>
                <span>Book a Strategy Call</span>
                <motion.span
                  className="inline-block"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </Link>

            <Link
              href="/portfolio"
              className="group px-10 py-5 bg-white/5 hover:bg-white/10 backdrop-blur-md border-2 border-white/20 hover:border-blue-500/50 text-white rounded-xl font-bold text-lg transition-all duration-300"
            >
              <span className="flex items-center gap-3">
                <span>📂</span>
                <span>View Case Studies</span>
              </span>
            </Link>
          </motion.div>

          {/* Social Proof Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-wrap items-center justify-center gap-8 text-sm"
          >
            {[
              { icon: '⭐', label: '5.0 Client Rating' },
              { icon: '🚀', label: '50+ Projects Delivered' },
              { icon: '🏢', label: '30+ Businesses Served' },
              { icon: '⚡', label: 'Under 2s Load Speed' },
              { icon: '📈', label: 'SEO & Performance Optimized' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 + idx * 0.1 }}
                className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg"
              >
                <span className="text-xl">{item.icon}</span>
                <span className="text-gray-300 font-medium">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-blue-400 rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* SECTION 2 - THE REAL PROBLEM */}
      <section className="relative py-32 bg-gradient-to-b from-gray-900 to-gray-950 overflow-hidden">
        <div className="container px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Why Most Business Websites <span className="text-red-500">Fail</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The problem isn&apos;t design. The problem is <span className="text-blue-400 font-semibold">strategy</span>.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                number: '1️⃣',
                title: 'They Look Good But Don\'t Convert',
                problems: ['No clear messaging', 'No psychological triggers', 'No optimized user journey'],
                result: 'Traffic without revenue.'
              },
              {
                number: '2️⃣',
                title: 'They\'re Built Without Scalability',
                problems: ['Outdated tech', 'Slow load speed', 'Hard to update'],
                result: 'Growth becomes painful.'
              },
              {
                number: '3️⃣',
                title: 'They Lack Business Integration',
                problems: ['No automation', 'No lead systems', 'No analytics insights'],
                result: 'You\'re guessing instead of measuring.'
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                className="group relative p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-red-500/50 rounded-2xl transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                
                <div className="relative z-10">
                  <div className="text-5xl mb-6">{item.number}</div>
                  <h3 className="text-2xl font-bold mb-6 text-white">{item.title}</h3>
                  
                  <ul className="space-y-3 mb-6">
                    {item.problems.map((problem, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-3 text-gray-400">
                        <span className="text-red-500 mt-1">✗</span>
                        <span>{problem}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="pt-6 border-t border-gray-700">
                    <p className="text-red-400 font-semibold">Result? {item.result}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <p className="text-2xl md:text-3xl font-light text-gray-300">
              A website without strategy is just <span className="text-red-400 font-semibold">decoration</span>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 - THE TRANSFORMATION */}
      <section className="relative py-32 bg-gray-950 overflow-hidden">
        <div className="container px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              What Happens When <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Strategy Meets Engineering</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* LEFT - Typical Website */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative p-8 bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl"
            >
              <div className="absolute top-4 right-4 px-3 py-1 bg-red-500/20 border border-red-500/50 rounded-full text-red-400 text-sm font-semibold">
                Typical Website
              </div>
              
              <ul className="space-y-4 mt-8">
                {[
                  'Basic design',
                  'Slow performance',
                  'No growth strategy',
                  'Minimal engagement',
                  'Static structure'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-400">
                    <span className="text-red-500">✗</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Center Arrow */}
            <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <motion.div
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-6xl"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/50">
                  <span className="text-white text-3xl">→</span>
                </div>
              </motion.div>
            </div>

            {/* RIGHT - MultiMian Engineered System */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative p-8 bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-500/50 rounded-2xl shadow-lg shadow-blue-500/20"
            >
              <div className="absolute top-4 right-4 px-3 py-1 bg-blue-500/20 border border-blue-500/50 rounded-full text-blue-400 text-sm font-semibold">
                MultiMian Engineered System
              </div>
              
              <ul className="space-y-4 mt-8">
                {[
                  'Conversion-driven UX',
                  'High-performance architecture',
                  'Integrated automation',
                  'SEO-first structure',
                  'Scalable backend'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-200">
                    <span className="text-green-400">✓</span>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes wave {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(100px); }
        }
        .animate-wave {
          animation: wave 20s linear infinite;
        }
      `}</style>
    </>
  )
}
