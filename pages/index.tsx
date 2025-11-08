import Link from 'next/link'
import Hero from '../components/Hero'
import ServiceCard from '../components/ServiceCard'
import Features from '../components/Features'
import Stats from '../components/Stats'
import CTABanner from '../components/CTABanner'
import WaveDivider from '../components/WaveDivider'

export default function Home() {
  return (
    <div>
      <Hero />

      <WaveDivider />
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-6">How we help</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard title="Web Applications" icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M3 12h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}>High-performance React and Next.js apps with server-side rendering and hybrid architectures.</ServiceCard>
          <ServiceCard title="API & Backend" icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 2v20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}>REST/GraphQL APIs, authentication, database design, and cloud deployment.</ServiceCard>
          <ServiceCard title="DevOps & Scale" icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}>CI/CD, observability, scaling strategies and cost optimization for production systems.</ServiceCard>
        </div>
      </section>
      <section className="mt-12 bg-white/50 rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-2">Ready to start?</h3>
        <p className="text-muted mb-4">Tell us about your project and we&apos;ll reply within 48 hours.</p>
        <Link href="/contact" className="inline-block px-5 py-2 bg-primary text-white rounded">Contact us</Link>
      </section>

      <Features />
      <Stats />
      <CTABanner />
    </div>
  )
}
