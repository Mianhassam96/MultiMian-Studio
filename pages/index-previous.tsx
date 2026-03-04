import Head from 'next/head'
import Hero from '../components/Hero'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>MultiMian - Full Stack Development Agency | Professional Web Development</title>
        <meta name="description" content="Professional full-stack development by Mian Hassam" />
      </Head>
      
      <Hero />

      {/* Services Section */}
      <section className="py-32 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
        </div>
        <div className="container px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 rounded-full text-sm font-bold mb-6 backdrop-blur-sm"
            >
              ✨ Our Expertise
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-black mb-8 text-gray-900 dark:text-white leading-tight">
              Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">Digital Solutions</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
              From concept to deployment, we deliver cutting-edge web solutions that drive business growth and user engagement
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto">
            {[
              { 
                icon: '🌐', 
                title: 'Business Websites', 
                desc: 'Professional websites that establish your online presence and convert visitors into customers', 
                features: ['Custom Design', 'SEO Ready', 'Fast Loading', 'Mobile Responsive'],
                color: 'from-blue-500 to-cyan-500',
                bgGradient: 'from-blue-500/5 to-cyan-500/5'
              },
              { 
                icon: '⚡', 
                title: 'SaaS Platforms', 
                desc: 'Scalable subscription-based applications with advanced features and integrations', 
                features: ['Multi-tenant', 'Subscription Billing', 'Admin Dashboard', 'API Integration'],
                color: 'from-purple-500 to-pink-500',
                bgGradient: 'from-purple-500/5 to-pink-500/5'
              },
              { 
                icon: '🛒', 
                title: 'E-Commerce Solutions', 
                desc: 'Complete online stores with secure payment processing and inventory management', 
                features: ['Payment Gateway', 'Product Management', 'Order Tracking', 'Analytics'],
                color: 'from-green-500 to-emerald-500',
                bgGradient: 'from-green-500/5 to-emerald-500/5'
              },
              { 
                icon: '📱', 
                title: 'Web Applications', 
                desc: 'Custom web applications tailored to your specific business requirements', 
                features: ['Custom Features', 'Database Design', 'User Authentication', 'Cloud Hosting'],
                color: 'from-orange-500 to-red-500',
                bgGradient: 'from-orange-500/5 to-red-500/5'
              }
            ].map((s, i) => (
              <motion.div 
                key={s.title} 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: i * 0.1, duration: 0.8 }} 
                whileHover={{ y: -12, scale: 1.02 }}
                className="group relative p-10 bg-white dark:bg-gray-800/50 rounded-3xl border-2 border-gray-100 dark:border-gray-700/50 hover:border-transparent shadow-xl hover:shadow-2xl transition-all duration-500 backdrop-blur-sm"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${s.bgGradient} opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500`}></div>
                <div className={`absolute inset-0 bg-gradient-to-br ${s.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}></div>
                <div className="relative z-10">
                  <motion.div 
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="text-7xl mb-8"
                  >
                    {s.icon}
                  </motion.div>
                  <h3 className="text-3xl font-black mb-5 text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:${s.color} transition-all">
                    {s.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed text-lg">{s.desc}</p>
                  <div className="flex flex-wrap gap-3">
                    {s.features.map(f => (
                      <motion.span 
                        key={f} 
                        whileHover={{ scale: 1.08, y: -2 }}
                        className={`px-4 py-2 bg-gradient-to-r ${s.color} bg-opacity-10 text-gray-700 dark:text-gray-300 rounded-xl text-sm font-bold border border-gray-200 dark:border-gray-700 hover:border-transparent hover:text-white hover:shadow-lg transition-all`}
                      >
                        {f}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-950 dark:to-blue-950 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        <div className="container px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-semibold mb-4"
            >
              Why Choose Us
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Excellence</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              We combine cutting-edge technology with proven expertise to deliver exceptional results
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              { icon: '⚡', title: 'Lightning Fast', desc: 'Optimized for speed and performance with advanced caching and CDN integration', gradient: 'from-yellow-400 to-orange-500' },
              { icon: '🎨', title: 'Beautiful Design', desc: 'Stunning, modern designs that captivate users and enhance brand identity', gradient: 'from-pink-400 to-purple-500' },
              { icon: '📱', title: 'Fully Responsive', desc: 'Perfect experience across all devices with mobile-first design approach', gradient: 'from-green-400 to-blue-500' },
              { icon: '🔒', title: 'Secure & Reliable', desc: 'Enterprise-grade security with SSL, data encryption, and regular backups', gradient: 'from-red-400 to-pink-500' },
              { icon: '🚀', title: 'SEO Optimized', desc: 'Built-in SEO best practices to help you rank higher on search engines', gradient: 'from-blue-400 to-cyan-500' },
              { icon: '💼', title: 'Business Growth', desc: 'Strategic solutions designed to drive conversions and business success', gradient: 'from-purple-400 to-indigo-500' }
            ].map((f, i) => (
              <motion.div 
                key={f.title} 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: i * 0.1, duration: 0.8 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative p-8 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-transparent shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${f.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
                <div className="relative z-10">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="text-5xl mb-6"
                  >
                    {f.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {f.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Technologies Section */}
      <section className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 via-purple-50/30 to-pink-50/30 dark:from-blue-900/10 dark:via-purple-900/10 dark:to-pink-900/10"></div>
        <div className="container px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full text-sm font-semibold mb-4"
            >
              Technology Stack
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              Modern <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">Tech Stack</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              We use the latest and most reliable technologies to build scalable, maintainable solutions
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { name: 'React', icon: '⚛️', desc: 'Modern UI Library', color: 'from-cyan-400 to-blue-500' },
              { name: 'Next.js', icon: '▲', desc: 'Full-Stack Framework', color: 'from-gray-700 to-gray-900' },
              { name: 'Node.js', icon: '🟢', desc: 'Server Runtime', color: 'from-green-400 to-green-600' },
              { name: 'TypeScript', icon: '📘', desc: 'Type Safety', color: 'from-blue-500 to-blue-700' },
              { name: 'MongoDB', icon: '🍃', desc: 'NoSQL Database', color: 'from-green-500 to-green-700' },
              { name: 'PostgreSQL', icon: '🐘', desc: 'SQL Database', color: 'from-blue-600 to-indigo-600' },
              { name: 'AWS', icon: '☁️', desc: 'Cloud Platform', color: 'from-orange-400 to-orange-600' },
              { name: 'Docker', icon: '🐳', desc: 'Containerization', color: 'from-blue-400 to-cyan-500' }
            ].map((t, i) => (
              <motion.div 
                key={t.name} 
                initial={{ opacity: 0, scale: 0.8 }} 
                whileInView={{ opacity: 1, scale: 1 }} 
                viewport={{ once: true }} 
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="group relative p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-transparent shadow-lg hover:shadow-2xl transition-all duration-500 text-center"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${t.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
                <div className="relative z-10">
                  <motion.div 
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="text-5xl mb-4"
                  >
                    {t.icon}
                  </motion.div>
                  <div className="font-bold text-lg text-gray-900 dark:text-white mb-2">{t.name}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{t.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950 dark:to-indigo-950 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="container px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-sm font-semibold mb-4"
            >
              Our Methodology
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              Proven <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Development Process</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Our streamlined approach ensures quality delivery and client satisfaction at every step
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[
              { step: '01', title: 'Discovery & Planning', desc: 'We analyze your requirements and create a comprehensive project roadmap', icon: '🎯', color: 'from-blue-500 to-cyan-500' },
              { step: '02', title: 'Design & Prototype', desc: 'Beautiful, user-centered designs with interactive prototypes for validation', icon: '🎨', color: 'from-purple-500 to-pink-500' },
              { step: '03', title: 'Development & Testing', desc: 'Clean, scalable code with rigorous testing and quality assurance', icon: '⚙️', color: 'from-green-500 to-emerald-500' },
              { step: '04', title: 'Launch & Support', desc: 'Smooth deployment with ongoing maintenance and optimization support', icon: '🚀', color: 'from-orange-500 to-red-500' }
            ].map((p, i) => (
              <motion.div 
                key={p.step} 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: i * 0.2, duration: 0.8 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative text-center p-8 bg-white dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-700 hover:border-transparent shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}></div>
                <div className="relative z-10">
                  <motion.div 
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="text-6xl mb-6"
                  >
                    {p.icon}
                  </motion.div>
                  <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-4">{p.step}</div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{p.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-blue-50/50 dark:from-gray-950/50 dark:to-blue-950/50"></div>
        <div className="container px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-2 bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 rounded-full text-sm font-semibold mb-4"
            >
              Our Work
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">Stories</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Discover how we&apos;ve helped businesses transform their digital presence and achieve remarkable growth
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {[
              { number: '50+', label: 'Projects Completed', icon: '🚀', color: 'from-blue-500 to-cyan-500' },
              { number: '30+', label: 'Happy Clients', icon: '😊', color: 'from-green-500 to-emerald-500' },
              { number: '5+', label: 'Years Experience', icon: '⭐', color: 'from-purple-500 to-pink-500' }
            ].map((stat, i) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }} 
                whileInView={{ opacity: 1, scale: 1 }} 
                viewport={{ once: true }} 
                transition={{ delay: i * 0.2, duration: 0.8 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="group relative text-center p-8 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-transparent shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
                <div className="relative z-10">
                  <motion.div 
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="text-5xl mb-4"
                  >
                    {stat.icon}
                  </motion.div>
                  <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">{stat.number}</div>
                  <div className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
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
            <Link 
              href="/portfolio" 
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span>📁</span>
              <span>View Full Portfolio</span>
            </Link>
          </motion.div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-pink-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        </div>
        <div className="container px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-semibold mb-4"
            >
              Client Testimonials
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Don&apos;t just take our word for it - hear from the businesses we&apos;ve helped transform
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { 
                name: 'Sarah Johnson', 
                role: 'CEO, TechStart', 
                image: 'SJ', 
                quote: 'MultiMian transformed our vision into reality with exceptional expertise. The team delivered beyond our expectations and helped us achieve 300% growth in online conversions.', 
                rating: 5,
                color: 'from-blue-500 to-purple-500'
              },
              { 
                name: 'Ahmed Khan', 
                role: 'Founder, E-Commerce Plus', 
                image: 'AK', 
                quote: 'Working with MultiMian was a game-changer. Our sales increased by 200% after the new platform launch. Their attention to detail and technical expertise is unmatched.', 
                rating: 5,
                color: 'from-green-500 to-blue-500'
              },
              { 
                name: 'Lisa Martinez', 
                role: 'CTO, GrowthCo', 
                image: 'LM', 
                quote: 'The quality of code and modern design approach impressed our entire team. MultiMian delivered a scalable solution that continues to serve us perfectly as we grow.', 
                rating: 5,
                color: 'from-purple-500 to-pink-500'
              }
            ].map((t, i) => (
              <motion.div 
                key={t.name} 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: i * 0.2, duration: 0.8 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative p-8 bg-white dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-700 hover:border-transparent shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${t.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>
                <div className="relative z-10">
                  <div className="flex gap-1 mb-6">
                    {[...Array(t.rating)].map((_, j) => (
                      <motion.span 
                        key={j}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.2 + j * 0.1, duration: 0.3 }}
                        className="text-yellow-500 text-2xl"
                      >
                        ★
                      </motion.span>
                    ))}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-8 text-lg leading-relaxed italic">
                    &quot;{t.quote}&quot;
                  </p>
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-full bg-gradient-to-r ${t.color} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                      {t.image}
                    </div>
                    <div>
                      <div className="font-bold text-lg text-gray-900 dark:text-white">{t.name}</div>
                      <div className="text-gray-600 dark:text-gray-400">{t.role}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-20 right-20 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-purple-400/20 rounded-full blur-3xl"
          />
        </div>
        <div className="container px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block px-6 py-3 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-full text-white text-sm font-bold mb-8 shadow-lg"
            >
              🎯 Ready to Transform Your Business?
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-black mb-8 text-white leading-tight">
              Let&apos;s Build Something{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-300 to-purple-300">
                Extraordinary
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-14 leading-relaxed max-w-3xl mx-auto">
              Transform your digital presence with our expert development team. From concept to launch, we bring your vision to life with cutting-edge technology and exceptional design.
            </p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.08, boxShadow: "0 25px 70px rgba(255, 255, 255, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="group w-full sm:w-auto px-12 py-6 bg-white hover:bg-gray-50 text-blue-900 rounded-2xl font-bold text-xl shadow-2xl transition-all flex items-center justify-center gap-3"
                >
                  <motion.span
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="text-2xl"
                  >
                    🚀
                  </motion.span>
                  <span>Start Your Project</span>
                  <motion.svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    whileHover={{ x: 5 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </motion.svg>
                </motion.button>
              </Link>
              <Link href="/portfolio">
                <motion.button
                  whileHover={{ scale: 1.08, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                  whileTap={{ scale: 0.95 }}
                  className="group w-full sm:w-auto px-12 py-6 bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/30 hover:border-white/50 text-white rounded-2xl font-bold text-xl transition-all flex items-center justify-center gap-3"
                >
                  <motion.span
                    whileHover={{ scale: 1.2, rotate: -10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="text-2xl"
                  >
                    📁
                  </motion.span>
                  <span>View Our Work</span>
                </motion.button>
              </Link>
            </motion.div>
            
            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-16 flex flex-wrap items-center justify-center gap-8 text-white/80"
            >
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-semibold">Free Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-semibold">Fast Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-semibold">100% Satisfaction</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}