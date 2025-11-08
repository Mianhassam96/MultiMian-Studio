import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaCode, FaDatabase, FaServer, FaMobile, FaDesktop, FaTools } from 'react-icons/fa'

const skills = [
  {
    category: "Frontend Development",
    techs: ["React", "TypeScript", "Next.js", "HTML5/CSS3", "Tailwind CSS"]
  },
  {
    category: "Backend Development",
    techs: ["Node.js", "Express", "MongoDB", "MySQL", "RESTful APIs", "GraphQL"]
  },
  {
    category: "Full Stack Tools",
    techs: ["Git", "VS Code", "Webpack", "Firebase", "Vercel", "AWS"]
  },
  {
    category: "Best Practices",
    techs: ["Clean Code", "Performance Optimization", "Responsive Design", "Security"]
  }
]

const services = [
  {
    icon: <FaDesktop className="text-primary" />,
    title: "Web Development",
    description: "Custom, responsive, and performance-driven websites built using the latest technologies."
  },
  {
    icon: <FaCode className="text-primary" />,
    title: "Full Stack Development",
    description: "End-to-end web solutions using modern frameworks like React, Node.js, and cloud platforms."
  },
  {
    icon: <FaServer className="text-primary" />,
    title: "Backend Development",
    description: "Robust server-side solutions with Node.js, Express, and various databases."
  },
  {
    icon: <FaDatabase className="text-primary" />,
    title: "Database Design",
    description: "Efficient database architecture and optimization for both SQL and NoSQL databases."
  },
  {
    icon: <FaDesktop className="text-primary" />,
    title: "Frontend Development",
    description: "Responsive and interactive user interfaces with React, Next.js, and modern CSS."
  },
  {
    icon: <FaMobile className="text-primary" />,
    title: "Mobile Development",
    description: "Cross-platform mobile applications using React Native and modern frameworks."
  },
  {
    icon: <FaTools className="text-primary" />,
    title: "DevOps & Cloud",
    description: "Infrastructure setup, deployment automation, and cloud service integration."
  },
  {
    icon: "🖥️",
    title: "Frontend Development",
    description: "Modern, interactive UIs built with React and TypeScript for intuitive user experiences."
  },
  {
    icon: "⚡",
    title: "Backend Development",
    description: "Robust server-side solutions powered by Node.js, Express, and modern databases."
  },
  {
    icon: "🔗",
    title: "API Integration",
    description: "Custom RESTful or GraphQL APIs designed for smooth system communication."
  },
  {
    icon: "☁️",
    title: "Deployment & Maintenance",
    description: "Expert deployment and maintenance on platforms like Firebase, Vercel, or AWS."
  }
]

export default function About() {
  return (
    <div className="container py-16 md:py-24">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
          >
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-sm font-medium text-primary">Full Stack Developer</span>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                Hi, I&apos;m Mian Hassam
              </h1>
              <p className="text-xl text-muted leading-relaxed mb-6">
                A passionate Full Stack Developer dedicated to building interactive, scalable, and user-centric web solutions. I specialize in crafting clean, efficient, and responsive applications using modern technologies.
              </p>
              <p className="text-lg text-muted mb-6">
                With a deep understanding of both frontend and backend development, I bring ideas to life — from concept and design to full deployment. My focus is always on performance, usability, and seamless user experience.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-xl">✨</span>
                  <p className="text-muted"><strong>Vision:</strong> Empowering ideas through technology and turning digital concepts into powerful realities.</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xl">☕</span>
                  <p className="text-muted"><strong>Fun Fact:</strong> Debugging is my favorite puzzle, and coffee is my trusted sidekick.</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3">
              <motion.div 
                className="relative aspect-square rounded-2xl overflow-hidden glass-card p-1"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-full h-full rounded-xl bg-gradient-to-br from-primary/20 to-primary-dark/20 flex items-center justify-center">
                  <span className="text-6xl">👨‍💻</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Services I Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx }}
                whileHover={{ y: -5 }}
                className="glass-card p-6 rounded-xl"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{service.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-muted">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Our Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, idx) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 * idx }}
                className="glass-card p-6 rounded-xl"
              >
                <h3 className="text-xl font-bold mb-4 text-primary">{skill.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.techs.map(tech => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 rounded-full text-sm text-primary"
                    >
                      {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-center glass-card p-12 rounded-2xl"
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Build Something Amazing?</h2>
            <p className="text-muted mb-8 max-w-2xl mx-auto">
            Let&apos;s collaborate to turn your vision into reality. I&apos;m ready to help you create exceptional web experiences.
          </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 glass-button px-8 py-4 rounded-xl font-medium"
            >
              Start a Conversation
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
              </svg>
            </Link>
          </motion.div>
        </div>
    )
  }
 