import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  const { scrollYProgress } = useScroll()
  const [counts, setCounts] = useState({ projects: 0, clients: 0, years: 0, satisfaction: 0 })
  const statsRef = useRef(null)
  const statsInView = useInView(statsRef, { once: true })

  // Animated counter effect
  useEffect(() => {
    if (statsInView) {
      const duration = 2000
      const steps = 60
      const interval = duration / steps

      let step = 0
      const timer = setInterval(() => {
        step++
        const progress = step / steps
        setCounts({
          projects: Math.floor(50 * progress),
          clients: Math.floor(30 * progress),
          years: Math.floor(2 * progress),
          satisfaction: Math.floor(100 * progress)
        })
        if (step >= steps) clearInterval(timer)
      }, interval)

      return () => clearInterval(timer)
    }
  }, [statsInView])

  const words = ['Scalable', 'Digital', 'Experiences']
  
  return (
    <>
      <Head>
        <title>MultiMian - Full Stack Development Agency | Modern Web Solutions</title>
        <meta name="description" content="Professional full-stack development agency specializing in React, Next.js, Node.js, and modern web technologies. We build scalable digital experiences that drive growth." />
      </Head>

      {/* Scroll Progress Bar */}
      <motion.div
        className="scroll-progress"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Hero Section - Full Screen */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 mesh-gradient">
          <div className="floating-shape w-96 h-96 bg-indigo-600 top-20 left-10" style={{ animationDelay: '0s' }}></div>
          <div className="floating-shape w-80 h-80 bg-purple-600 bottom-20 right-10" style={{ animationDelay: '2s' }}></div>
          <div className="floating-shape w-72 h-72 bg-indigo-500 top-1/2 left-1/2" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="container relative z-10 px-4">
          <div className="max-w-5xl mx-auto text-center">
            {/* Headline with word-by-word animation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="block mb-2"
                >
                  Full Stack Development Agency
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="block"
                >
                  Building{' '}
                  {words.map((word, idx) => (
                    <motion.span
                      key={word}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + idx * 0.2, duration: 0.6 }}
                      className="gradient-text animated-gradient inline-block"
                    >
                      {word}{idx < words.length - 1 ? ' ' : ''}
                    </motion.span>
                  ))}
                </motion.span>
              </h1>
            </motion.div>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              We design and develop modern websites, SaaS platforms, and WordPress solutions that drive growth and performance.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <Link
                href="/contact"
                className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl font-semibold text-lg hover-scale glow-pulse ripple overflow-hidden"
              >
                <span className="relative z-10">Start Your Project</span>
              </Link>
              <Link
                href="/portfolio"
                className="group px-8 py-4 glass-effect text-white rounded-2xl font-semibold text-lg hover-lift border border-white/10"
              >
                View Portfolio
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 0.6 }}
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
              >
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="w-1.5 h-1.5 bg-white rounded-full"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Section - Animated Counters */}
      <section ref={statsRef} className="py-20 relative">
        <div className="container px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { label: 'Projects', value: counts.projects, suffix: '+' },
              { label: 'Clients', value: counts.clients, suffix: '+' },
              { label: 'Years Experience', value: counts.years, suffix: '+' },
              { label: 'Satisfaction', value: counts.satisfaction, suffix: '%' }
            ].map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="glass-effect rounded-3xl p-8 text-center hover-lift glow-border card-tilt"
              >
                <div className="text-5xl md:text-6xl font-bold gradient-text mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 relative">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              What We <span className="gradient-text">Build</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              From concept to launch, we create digital experiences that make an impact
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: '🌐',
                title: 'Web Development',
                description: 'Custom websites built with React, Next.js, and modern technologies',
                delay: 0
              },
              {
                icon: '⚡',
                title: 'SaaS Applications',
                description: 'Scalable platforms with subscription management and multi-tenant architecture',
                delay: 0.1
              },
              {
                icon: '🛒',
                title: 'E-Commerce',
                description: 'Complete online stores with secure payment integration',
                delay: 0.2
              },
              {
                icon: '📱',
                title: 'Web Applications',
                description: 'Custom solutions tailored to your business needs',
                delay: 0.3
              },
              {
                icon: '🎨',
                title: 'UI/UX Design',
                description: 'Beautiful, intuitive interfaces that users love',
                delay: 0.4
              },
              {
                icon: '🔧',
                title: 'Maintenance & Support',
                description: 'Ongoing optimization, updates, and technical support',
                delay: 0.5
              }
            ].map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: service.delay, duration: 0.6 }}
                className="group glass-effect rounded-3xl p-8 hover-lift glow-border card-tilt cursor-pointer"
              >
                <div className="text-6xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-indigo-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Link
                  href="/services"
                  className="inline-flex items-center text-indigo-400 font-semibold group-hover:gap-2 transition-all"
                >
                  Learn More
                  <span className="inline-block ml-1 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/20 to-transparent"></div>
        <div className="container px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            {/* Left - Image/Visual */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="glass-effect rounded-3xl p-12 glow-border">
                <div className="space-y-6">
                  <div className="h-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full w-3/4"></div>
                  <div className="h-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full w-full"></div>
                  <div className="h-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full w-5/6"></div>
                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="h-32 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-2xl"></div>
                    <div className="h-32 bg-gradient-to-br from-purple-600/20 to-indigo-600/20 rounded-2xl"></div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl blur-3xl opacity-50"></div>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Why Choose <span className="gradient-text">MultiMian</span>
              </h2>
              <div className="space-y-6">
                {[
                  { title: 'Modern Tech Stack', desc: 'React, Next.js, Node.js, TypeScript - built for performance' },
                  { title: 'SEO Optimized', desc: 'Rank higher on Google with our SEO-first approach' },
                  { title: 'Lightning Fast', desc: 'Sub-2-second load times guaranteed' },
                  { title: 'Scalable Architecture', desc: 'Built to grow with your business' },
                  { title: 'Ongoing Support', desc: 'We\'re here for the long haul' }
                ].map((item, idx) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.6 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-400 transition-colors">{item.title}</h3>
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-indigo-600/20 animated-gradient"></div>
        <div className="container px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              Let&apos;s Build Something <span className="gradient-text">Powerful</span> Together
            </h2>
            <p className="text-xl text-gray-400 mb-12">
              Ready to transform your digital presence? Let&apos;s talk about your project.
            </p>
            <Link
              href="/contact"
              className="inline-block px-12 py-5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl font-bold text-xl hover-scale glow-pulse ripple"
            >
              Start Your Project Today
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
