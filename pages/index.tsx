import Link from 'next/link'
import Hero from '../components/Hero'
import ServiceCard from '../components/ServiceCard'
import Features from '../components/Features'
import Stats from '../components/Stats'
import CTABanner from '../components/CTABanner'
import WaveDivider from '../components/WaveDivider'
import TechStack from '../components/TechStack'
import Gallery from '../components/Gallery'
import ProjectStats from '../components/ProjectStats'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div>
      <Hero />

      <WaveDivider />

      {/* Services */}
      <motion.section
        className="mt-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            🛠️ Core Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold heading-gradient mb-3">How We Help</h2>
          <p className="text-muted max-w-xl mx-auto text-base">
            From web apps to cloud infrastructure — covering the full development lifecycle.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            title="Web Applications"
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            }
          >
            High-performance React and Next.js apps with server-side rendering and hybrid architectures.
          </ServiceCard>
          <ServiceCard
            title="API & Backend"
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M12 2v20M6 8l-4 4 4 4M18 8l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            }
          >
            REST/GraphQL APIs, authentication, database design, and cloud deployment on AWS or Vercel.
          </ServiceCard>
          <ServiceCard
            title="DevOps & Scale"
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M4 4l8 8 8-8M4 12l8 8 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            }
          >
            CI/CD pipelines, observability, auto-scaling strategies and cost optimisation for production.
          </ServiceCard>
        </div>
      </motion.section>

      <WaveDivider flip />
      <Features />
      <div className="section-divider my-4" />
      <ProjectStats />
      <WaveDivider />
      <Gallery />
      <WaveDivider flip />
      <TechStack />
      <div className="section-divider my-4" />
      <Stats />

      {/* Quick CTA */}
      <motion.section
        className="mt-12 glass-card rounded-2xl p-8 md:p-10 text-center"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl md:text-3xl font-bold mb-3 heading-gradient">Ready to Start?</h3>
        <p className="text-muted mb-7 max-w-xl mx-auto">
          Tell us about your project and we&apos;ll reply within 48 hours.
        </p>
        <Link href="/contact" className="glass-button inline-flex rounded-xl text-sm">
          Contact Us
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </motion.section>

      <div className="mt-12">
        <CTABanner />
      </div>
    </div>
  )
}
