import { motion } from 'framer-motion'
import Head from 'next/head'
import Link from 'next/link'

const processSteps = [
  {
    number: "01",
    title: "Requirement Discussion",
    icon: "💬",
    description: "We start by understanding your vision, goals, and requirements",
    details: [
      "Initial consultation call to discuss your project",
      "Understanding your business objectives and target audience",
      "Identifying key features and functionality needed",
      "Discussing timeline, budget, and expectations",
      "Answering all your questions and concerns"
    ],
    duration: "1-2 days"
  },
  {
    number: "02",
    title: "Planning & UI/UX",
    icon: "🎨",
    description: "Creating a detailed plan and designing the user experience",
    details: [
      "Project scope documentation and technical specifications",
      "Wireframes and mockups for visual approval",
      "User flow and navigation structure",
      "Design system and style guide creation",
      "Technology stack selection and architecture planning"
    ],
    duration: "3-7 days"
  },
  {
    number: "03",
    title: "Development",
    icon: "⚙️",
    description: "Building your solution with clean, efficient code",
    details: [
      "Frontend development with modern frameworks",
      "Backend API and database implementation",
      "Integration of third-party services",
      "Regular progress updates and demos",
      "Code reviews and quality assurance"
    ],
    duration: "2-6 weeks"
  },
  {
    number: "04",
    title: "Testing",
    icon: "🧪",
    description: "Rigorous testing to ensure everything works perfectly",
    details: [
      "Functionality testing across all features",
      "Cross-browser and device compatibility testing",
      "Performance and load testing",
      "Security vulnerability assessment",
      "User acceptance testing with your feedback"
    ],
    duration: "3-5 days"
  },
  {
    number: "05",
    title: "Delivery",
    icon: "🚀",
    description: "Launching your project and making it live",
    details: [
      "Final review and approval from you",
      "Deployment to production environment",
      "Domain and hosting setup",
      "SSL certificate installation for security",
      "Training on how to use and manage your site"
    ],
    duration: "1-2 days"
  },
  {
    number: "06",
    title: "Support",
    icon: "🛡️",
    description: "Ongoing maintenance and support after launch",
    details: [
      "30-day post-launch support included",
      "Bug fixes and issue resolution",
      "Performance monitoring and optimization",
      "Content updates and minor changes",
      "Available for ongoing maintenance packages"
    ],
    duration: "Ongoing"
  }
]

export default function Process() {
  return (
    <>
      <Head>
        <title>Our Process - How We Work</title>
        <meta name="description" content="Learn about MultiMian's proven development process from requirement discussion to delivery and support. Transparent, efficient, and results-driven." />
        <meta name="keywords" content="web development process, project workflow, development methodology, agile development" />
      </Head>

      <div className="py-12">
        {/* Header Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20">
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-sm font-medium text-primary">Transparent & Efficient</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
            From Vision to Reality: Our Proven Process
          </h1>
          <p className="text-xl text-muted leading-relaxed mb-8">
            We don&apos;t just build websites—we create digital solutions that drive real business results. Our transparent, efficient 6-step process ensures you&apos;re involved, informed, and excited every step of the way.
          </p>
          <div className="inline-flex items-center gap-3 text-sm text-primary bg-primary/5 px-6 py-3 rounded-xl">
            <span>⏱️</span>
            <span>Average project timeline: 3-8 weeks depending on complexity</span>
          </div>
        </motion.section>

        {/* Process Steps */}
        <div className="max-w-5xl mx-auto">
          {processSteps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="mb-12 last:mb-0"
            >
              <div className="glass-card p-8 md:p-12 rounded-3xl relative overflow-hidden">
                {/* Background Number */}
                <div className="absolute top-0 right-0 text-[150px] font-bold text-primary/5 leading-none">
                  {step.number}
                </div>

                <div className="relative z-10">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center text-4xl shadow-lg">
                        {step.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-2">
                        <h2 className="text-3xl font-bold">{step.title}</h2>
                        <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                          {step.duration}
                        </span>
                      </div>
                      <p className="text-lg text-muted mb-6">{step.description}</p>
                    </div>
                  </div>

                  <div className="ml-0 md:ml-26">
                    <h3 className="font-semibold text-primary mb-4">What happens in this phase:</h3>
                    <ul className="space-y-3">
                      {step.details.map((detail, dIdx) => (
                        <motion.li
                          key={dIdx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: dIdx * 0.05 }}
                          className="flex items-start gap-3"
                        >
                          <span className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary text-sm mt-0.5">
                            ✓
                          </span>
                          <span className="text-muted">{detail}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Connector Line */}
                {idx < processSteps.length - 1 && (
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-0.5 h-12 bg-gradient-to-b from-primary/50 to-transparent"></div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Our Process Works */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 max-w-5xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
            Why Our Process Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card p-6 rounded-2xl text-center"
            >
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-3">Clear Communication</h3>
              <p className="text-muted">
                Regular updates and transparent communication throughout the entire project lifecycle.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card p-6 rounded-2xl text-center"
            >
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-3">Efficient Delivery</h3>
              <p className="text-muted">
                Streamlined workflow that delivers quality results without unnecessary delays.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="glass-card p-6 rounded-2xl text-center"
            >
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold mb-3">Quality Assurance</h3>
              <p className="text-muted">
                Rigorous testing and quality checks ensure your project works flawlessly.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 text-center glass-card p-12 rounded-3xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-muted mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss your project and create a custom plan that fits your needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 glass-button px-8 py-4 rounded-xl font-medium"
            >
              Start Your Project
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
