import Link from 'next/link'
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [currentSkill, setCurrentSkill] = useState(0)
  const [typedText, setTypedText] = useState('')
  const heroRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll()
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -400])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -600])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const smoothMouseX = useSpring(mouseX, { damping: 50, stiffness: 400 })
  const smoothMouseY = useSpring(mouseY, { damping: 50, stiffness: 400 })

  const skills = [
    'React & Next.js',
    'Node.js & Express',
    'AI Integration',
    'Serverless Architecture',
    'TypeScript',
    'MongoDB & PostgreSQL'
  ]

  // Mouse movement effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height
        setMousePosition({ x, y })
        mouseX.set(x * 50)
        mouseY.set(y * 50)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  // Rotating skills
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [skills.length])

  // Typewriter effect for main heading
  useEffect(() => {
    const text = 'Empowering Ideas. Building the Future.'
    let index = 0
    const timer = setInterval(() => {
      if (index <= text.length) {
        setTypedText(text.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 50)
    return () => clearInterval(timer)
  }, [])

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Animated Background Layers */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-black to-purple-950 opacity-80" />
        
        {/* Animated gradient overlay */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-transparent to-purple-600/20"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          style={{ backgroundSize: '200% 200%' }}
        />

        {/* Parallax Layer 1 - Slow moving shapes */}
        <motion.div style={{ y: y1 }} className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </motion.div>

        {/* Parallax Layer 2 - Medium speed */}
        <motion.div style={{ y: y2 }} className="absolute inset-0">
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-2xl" />
          <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-indigo-500/10 rounded-full blur-2xl" />
        </motion.div>

        {/* Parallax Layer 3 - Fast moving particles */}
        <motion.div style={{ y: y3 }} className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 1, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </motion.div>

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:100px_100px]" />

        {/* Light rays */}
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${50 + mousePosition.x * 20}% ${50 + mousePosition.y * 20}%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)`,
          }}
        />
      </div>

      {/* Main Content */}
      <motion.div 
        style={{ opacity }}
        className="container relative z-10 px-4 py-20"
      >
        <div className="max-w-6xl mx-auto text-center">
          {/* Main Heading with Typewriter Effect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight mb-6 relative">
              <span className="relative inline-block">
                <span className="text-white">{typedText}</span>
                <motion.span
                  className="inline-block w-1 h-16 md:h-24 bg-blue-500 ml-2"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                />
                {/* Neon glow effect */}
                <motion.span
                  className="absolute inset-0 blur-2xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-30"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                />
              </span>
            </h1>
          </motion.div>

          {/* Subheading with Rotating Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-12"
          >
            <div className="flex flex-wrap items-center justify-center gap-3 text-lg md:text-2xl text-gray-300 font-semibold">
              <span>Full-Stack Development</span>
              <span className="text-blue-400">|</span>
              <motion.span
                key={currentSkill}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 min-w-[200px]"
              >
                {skills[currentSkill]}
              </motion.span>
              <span className="text-blue-400">|</span>
              <span>Web & Mobile Solutions</span>
            </div>
            
            {/* Animated underline */}
            <motion.div
              className="h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mt-4"
              initial={{ width: 0 }}
              animate={{ width: '300px' }}
              transition={{ duration: 1, delay: 0.8 }}
            />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-bold text-lg overflow-hidden shadow-2xl"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span>Start Your Project</span>
                  <motion.svg
                    className="w-5 h-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </motion.svg>
                </span>
                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 blur-xl"
                  transition={{ duration: 0.3 }}
                />
                {/* Ripple effect */}
                <span className="absolute inset-0 overflow-hidden rounded-2xl">
                  <motion.span
                    className="absolute inset-0 bg-white/20"
                    initial={{ scale: 0, opacity: 1 }}
                    whileTap={{ scale: 2, opacity: 0 }}
                    transition={{ duration: 0.6 }}
                  />
                </span>
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/portfolio"
                className="group px-10 py-5 bg-white/5 backdrop-blur-sm border-2 border-blue-500/50 text-white rounded-2xl font-bold text-lg hover:bg-white/10 transition-all shadow-xl"
              >
                <span className="flex items-center gap-2">
                  <span>See Portfolio</span>
                  <motion.span
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    ⚡
                  </motion.span>
                </span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Interactive 3D Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="relative"
            style={{
              rotateX: useTransform(smoothMouseY, [-50, 50], [5, -5]),
              rotateY: useTransform(smoothMouseX, [-50, 50], [-5, 5]),
            }}
          >
            <div className="relative max-w-4xl mx-auto">
              {/* Laptop mockup */}
              <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl p-4 shadow-2xl border border-blue-500/20">
                <div className="aspect-video bg-gradient-to-br from-blue-950 via-purple-950 to-black rounded-2xl overflow-hidden relative">
                  {/* Screen content */}
                  <div className="absolute inset-0 p-8">
                    <div className="grid grid-cols-3 gap-4 h-full">
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="bg-blue-500/10 rounded-lg backdrop-blur-sm border border-blue-500/20"
                          animate={{
                            opacity: [0.3, 0.6, 0.3],
                          }}
                          transition={{
                            duration: 2,
                            delay: i * 0.2,
                            repeat: Infinity,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                  {/* Scan line effect */}
                  <motion.div
                    className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent"
                    animate={{
                      top: ['0%', '100%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />
                </div>
                {/* Keyboard */}
                <div className="h-4 bg-gradient-to-b from-gray-800 to-gray-900 rounded-b-3xl" />
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              />
              <motion.div
                className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  delay: 1,
                }}
              />
            </div>
          </motion.div>

          {/* Stats Counter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto"
          >
            {[
              { number: '50+', label: 'Projects Completed' },
              { number: '30+', label: 'Happy Clients' },
              { number: '5+', label: 'Years Experience' },
              { number: '100%', label: 'Satisfaction' },
            ].map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4 + idx * 0.1 }}
                className="text-center"
              >
                <motion.div
                  className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-2"
                  whileHover={{ scale: 1.1 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-gray-400 cursor-pointer"
        >
          <span className="text-xs font-medium">Scroll to explore</span>
          <motion.svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </motion.svg>
        </motion.div>
      </motion.div>

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />
    </section>
  )
}
