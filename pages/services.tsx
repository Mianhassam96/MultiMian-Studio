import { motion } from 'framer-motion'
import ServiceCard from '../components/ServiceCard'
import WaveDivider from '../components/WaveDivider'
import CTABanner from '../components/CTABanner'

export default function Services() {
  return (
    <div className="py-12">
      {/* ===== HEADER SECTION ===== */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
          Services I Offer
        </h1>
        <p className="text-lg text-muted">
          Empowering businesses and individuals with full-stack development, performance optimization, and scalable web solutions — from idea to launch and beyond.
        </p>
      </motion.section>

      {/* ===== SERVICES GRID ===== */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-0"
      >
        <ServiceCard title="Product Discovery">
          Transform ideas into actionable roadmaps through research, prototyping, and strategic planning.
        </ServiceCard>

        <ServiceCard title="Frontend & Web Apps">
          Build fast, responsive, and interactive interfaces using React, Next.js, and modern web standards.
        </ServiceCard>

        <ServiceCard title="APIs & Integrations">
          Develop secure and scalable APIs, integrate third-party tools, and automate workflows effortlessly.
        </ServiceCard>

        <ServiceCard title="Cloud & DevOps">
          Streamline deployment pipelines with CI/CD, infrastructure-as-code, and cloud monitoring solutions.
        </ServiceCard>

        <ServiceCard title="Performance & Security">
          Optimize for speed, scalability, and security with caching strategies, audits, and best practices.
        </ServiceCard>

        <ServiceCard title="Consulting & Team Augmentation">
          Bring in on-demand expertise or extend your development team with reliable engineering support.
        </ServiceCard>
      </motion.section>

      {/* ===== WAVE DIVIDER ===== */}
      <WaveDivider />

      {/* ===== HOW WE WORK ===== */}
      <section className="mt-20 px-4 md:px-0 text-center">
        <h2 className="text-3xl font-semibold mb-6 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
          How I Work
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-8 bg-white/70 rounded-2xl shadow-sm backdrop-blur-md max-w-2xl mx-auto"
        >
          <ol className="list-decimal ml-6 text-muted space-y-2 text-left md:text-center">
            <li>Kickoff & Discovery — aligning on goals, scope, and outcomes.</li>
            <li>Iterative Development — shipping valuable, incremental updates.</li>
            <li>Operate & Evolve — continuous improvement and scaling with insights.</li>
          </ol>
        </motion.div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="mt-20">
        <CTABanner />
      </section>
    </div>
  )
}
