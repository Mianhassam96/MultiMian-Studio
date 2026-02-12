import { motion } from 'framer-motion'
import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

const projects = [
  {
    title: "MultiMian SkyScope Weather",
    tagline: "Real-Time Weather Intelligence",
    description: "Transformed weather data into an intuitive experience with live forecasts, interactive maps, and location-based alerts. Increased user engagement by 200%.",
    impact: "200% more engagement",
    tech: [
      { name: "Next.js", type: "frontend" },
      { name: "React", type: "frontend" },
      { name: "OpenWeather API", type: "api" },
      { name: "Leaflet", type: "library" }
    ],
    image: "/portfolio/skyscope.jpg",
    demo: "https://v0-weather-app-sauqh5veloe.vercel.app/",
    repo: "https://github.com/Mianhassam96/MultiMian-SkyScope",
    category: "Web Application"
  },
  {
    title: "E-Commerce Platform",
    tagline: "Complete Online Store Solution",
    description: "Built a scalable e-commerce platform with secure payments, real-time inventory tracking, and powerful admin tools. Processed $100K+ in first quarter.",
    impact: "$100K+ revenue",
    tech: [
      { name: "Next.js", type: "frontend" },
      { name: "TypeScript", type: "frontend" },
      { name: "Stripe", type: "api" },
      { name: "Prisma", type: "backend" }
    ],
    image: "/portfolio/ecommerce.jpg",
    demo: "#",
    repo: "#",
    category: "E-Commerce"
  },
  {
    title: "SaaS Analytics Dashboard",
    tagline: "Data-Driven Business Intelligence",
    description: "Created a modern analytics platform with real-time data visualization, user management, and automated reporting. Reduced decision-making time by 60%.",
    impact: "60% faster decisions",
    tech: [
      { name: "React", type: "frontend" },
      { name: "Node.js", type: "backend" },
      { name: "D3.js", type: "library" },
      { name: "PostgreSQL", type: "backend" }
    ],
    image: "/portfolio/dashboard.jpg",
    demo: "#",
    repo: "#",
    category: "Web Application"
  }
]

const categories = ["All Projects", "Web Application", "E-Commerce", "Business Website"]

const techColors = {
  frontend: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-800",
  backend: "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 border-purple-200 dark:border-purple-800",
  api: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800",
  library: "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 border-orange-200 dark:border-orange-800",
  design: "bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-400 border-pink-200 dark:border-pink-800"
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All Projects")

  const filteredProjects = activeCategory === "All Projects" 
    ? projects 
    : projects.filter(p => p.category === activeCategory)

  return (
    <>
      <Head>
        <title>Portfolio - Real Projects, Real Results | MultiMian</title>
        <meta name="description" content="Explore our portfolio of successful web development projects. See how we've helped businesses increase revenue, improve efficiency, and grow online with custom websites and web applications." />
        <meta name="keywords" content="web development portfolio, successful projects, client results, web design examples, case studies" />
      </Head>

      <div className="py-16 md:py-24">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container text-center max-w-4xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 mb-6">
            <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
            <span className="text-sm font-semibold text-blue-700 dark:text-blue-400">
              50+ Successful Projects Delivered
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="block text-gray-900 dark:text-white">
              Projects That Drive
            </span>
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Real Business Results
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            Every project we build is designed to solve real business challenges and deliver measurable results. 
            From increasing revenue to improving efficiency, see how we turn ideas into powerful digital solutions.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            {[
              { icon: '📈', text: 'Increased Revenue' },
              { icon: '⚡', text: 'Improved Efficiency' },
              { icon: '🎯', text: 'Better User Experience' },
              { icon: '🚀', text: 'Faster Growth' }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <span className="text-xl">{item.icon}</span>
                <span className="font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="container mb-12"
        >
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-2 border-gray-200 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-500'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className="group relative"
              >
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-600/20">
                  {/* Project Image */}
                  <div className="aspect-video bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 group-hover:from-blue-600/30 group-hover:to-purple-600/30 transition-all duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl opacity-20 group-hover:opacity-30 transition-opacity">
                        {project.category === "E-Commerce" ? "🛒" : project.category === "Web Application" ? "⚡" : "🌐"}
                      </div>
                    </div>
                    
                    {/* Impact Badge */}
                    <div className="absolute top-4 right-4 px-3 py-1.5 bg-green-500 text-white text-xs font-bold rounded-full shadow-lg">
                      {project.impact}
                    </div>
                  </div>
                  
                  {/* Project Content */}
                  <div className="p-6">
                    <div className="mb-3">
                      <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                        {project.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3">
                      {project.tagline}
                    </p>
                    
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map(tech => (
                        <span 
                          key={tech.name}
                          className={`px-2.5 py-1 rounded-lg text-xs font-semibold border transition-all duration-200 hover:scale-105 ${techColors[tech.type as keyof typeof techColors]}`}
                        >
                          {tech.name}
                        </span>
                      ))}
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex items-center gap-3">
                      {project.demo && project.demo !== '#' && (
                        <a 
                          href={project.demo} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/30"
                        >
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          View Live
                        </a>
                      )}
                      {project.repo && project.repo !== '#' && (
                        <a 
                          href={project.repo} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 border-2 border-gray-300 dark:border-gray-600 hover:border-blue-600 dark:hover:border-blue-500 text-gray-700 dark:text-gray-300 text-sm font-semibold rounded-lg transition-all duration-300"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                          </svg>
                          Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>


        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="container mt-20"
        >
          <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl"></div>
            
            <div className="relative px-8 py-16 md:py-20 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="max-w-3xl mx-auto"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
                  <span className="flex h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
                  <span className="text-sm font-semibold text-white">
                    Ready to Start Your Project?
                  </span>
                </div>

                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  Let&apos;s Build Something Amazing Together
                </h2>
                
                <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                  Join 50+ businesses that trust us to deliver results. Get a free consultation and discover how we can help you achieve your goals.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                  <Link
                    href="/contact"
                    className="group px-8 py-4 bg-white hover:bg-gray-50 text-blue-600 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center gap-2"
                  >
                    <span>Get Your Free Consultation</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                  
                  <a
                    href="https://wa.me/923258831437"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-transparent hover:bg-white/10 text-white border-2 border-white/50 hover:border-white rounded-xl font-bold text-lg transition-all duration-300 inline-flex items-center gap-2"
                  >
                    <span className="text-2xl">💬</span>
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/80">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Free Consultation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>No Obligation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Response in 24 Hours</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  )
}
