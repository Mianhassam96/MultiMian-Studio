import { motion } from 'framer-motion'
import Head from 'next/head'
import Link from 'next/link'

const skills = [
  {
    category: "Frontend Development",
    icon: "🎨",
    techs: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5/CSS3", "JavaScript"]
  },
  {
    category: "Backend Development",
    icon: "⚙️",
    techs: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs", "GraphQL"]
  },
  {
    category: "Tools & Platforms",
    icon: "🛠️",
    techs: ["Git", "VS Code", "Firebase", "Vercel", "AWS", "Docker"]
  },
  {
    category: "AI & Modern Tech",
    icon: "🤖",
    techs: ["AI Integration", "ChatGPT API", "Machine Learning", "Automation Tools"]
  }
]

const values = [
  {
    icon: "🎯",
    title: "Results-Driven",
    description: "Every project is built with your business goals in mind. We focus on delivering measurable results, not just pretty designs."
  },
  {
    icon: "💡",
    title: "Innovation First",
    description: "We stay ahead of the curve with the latest technologies and best practices to give you a competitive edge."
  },
  {
    icon: "🤝",
    title: "Partnership Approach",
    description: "Your success is our success. We work as an extension of your team, not just a vendor."
  },
  {
    icon: "⚡",
    title: "Speed & Quality",
    description: "Fast delivery without compromising on quality. We value your time and deliver on our promises."
  }
]

export default function About() {
  return (
    <>
      <Head>
        <title>About - Full Stack Developer Mian Hassam</title>
        <meta name="description" content="Learn about MultiMian and founder Mian Hassam. Full-stack developer specializing in React, Node.js, and modern web technologies. Building digital solutions that drive results." />
        <meta name="keywords" content="Mian Hassam, full stack developer, web developer, React developer, Node.js developer" />
      </Head>

      <div className="py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto mb-20"
        >
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20">
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-sm font-medium text-primary">Full Stack Developer</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                Hi, I&apos;m Mian Hassam
              </h1>
              <p className="text-xl text-muted leading-relaxed mb-6">
                Founder of MultiMian, a full-stack development studio dedicated to transforming ideas into powerful digital experiences.
              </p>
              <p className="text-lg text-muted mb-6">
                With expertise in JavaScript, TypeScript, React, Node.js, and modern AI tools, I help businesses and individuals build web solutions that don&apos;t just look great—they deliver real results.
              </p>
              <div className="flex flex-col gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">✨</span>
                  <p className="text-muted"><span className="font-semibold text-primary">Mission:</span> Empowering businesses through technology and innovation</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🚀</span>
                  <p className="text-muted"><span className="font-semibold text-primary">Vision:</span> Making professional web development accessible to everyone</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">☕</span>
                  <p className="text-muted"><span className="font-semibold text-primary">Fun Fact:</span> Powered by coffee and a passion for clean code</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 glass-button px-6 py-3 rounded-xl font-medium"
                >
                  Let&apos;s Work Together
                  <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                  </svg>
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-primary/20 rounded-xl text-primary hover:bg-primary/5 transition-all font-medium"
                >
                  View My Work
                </Link>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden glass-card p-2">
                <div className="w-full h-full rounded-2xl bg-gradient-to-br from-primary/20 via-primary-dark/10 to-primary/20 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
                  <span className="text-9xl relative z-10">👨‍💻</span>
                </div>
              </div>
              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute -left-4 top-1/4 glass-card px-6 py-4 rounded-2xl shadow-xl"
              >
                <div className="text-3xl font-bold text-primary">100+</div>
                <div className="text-sm text-muted">Projects</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="absolute -right-4 bottom-1/4 glass-card px-6 py-4 rounded-2xl shadow-xl"
              >
                <div className="text-3xl font-bold text-primary">5★</div>
                <div className="text-sm text-muted">Rating</div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Story Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
            The MultiMian Story
          </h2>
          <div className="glass-card p-8 md:p-12 rounded-3xl">
            <p className="text-lg text-muted leading-relaxed mb-6">
              MultiMian started with a simple belief: <span className="text-primary font-semibold">great technology should be accessible to everyone</span>. As a full-stack developer, I&apos;ve seen firsthand how the right digital solution can transform a business.
            </p>
            <p className="text-lg text-muted leading-relaxed mb-6">
              Whether you&apos;re a startup founder with a groundbreaking idea, a small business owner looking to establish your online presence, or an entrepreneur ready to scale—I&apos;m here to turn your vision into reality.
            </p>
            <p className="text-lg text-muted leading-relaxed">
              What sets MultiMian apart? <span className="text-primary font-semibold">I don&apos;t just write code—I build solutions</span>. Every project is crafted with attention to detail, modern best practices, and a focus on what matters most: your success.
            </p>
          </div>
        </motion.section>

        {/* Why Trust MultiMian */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
            Why Trust MultiMian?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, idx) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-8 rounded-2xl"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
            Technical Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, idx) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-6 rounded-2xl"
              >
                <div className="text-4xl mb-4">{skill.icon}</div>
                <h3 className="text-lg font-bold mb-4 text-primary">{skill.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.techs.map(tech => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 rounded-full text-xs text-primary font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center glass-card p-12 rounded-3xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build Something Amazing?</h2>
          <p className="text-xl text-muted mb-8 max-w-2xl mx-auto">
            Let&apos;s collaborate to turn your vision into reality. Whether it&apos;s a simple website or a complex web application, I&apos;m here to help.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 glass-button px-8 py-4 rounded-xl font-medium"
            >
              Start a Conversation
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
              </svg>
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 px-8 py-4 border border-primary/20 rounded-xl text-primary hover:bg-primary/5 transition-all font-medium"
            >
              View Pricing
            </Link>
          </div>
        </motion.section>
      </div>
    </>
  )
}
