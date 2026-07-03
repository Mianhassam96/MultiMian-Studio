import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CTABanner() {
  return (
<<<<<<< HEAD
    <motion.section initial={{opacity:0, y:8}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="mt-16 bg-gradient-to-r from-primary to-brand-500 text-white rounded-lg p-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-2xl font-bold">Start building something great</h3>
          <p className="text-sm">Book a free consultation and technical review.</p>
        </div>
        <div>
          <Link href="/contact" className="inline-block px-5 py-3 bg-white text-primary rounded font-semibold">Get in touch</Link>
=======
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="animated-bg rounded-2xl p-8 md:p-12 overflow-hidden relative"
      aria-label="Call to action"
    >
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-white">
        <div className="text-center md:text-left">
          <h3 className="text-2xl md:text-3xl font-extrabold mb-2">
            Start Building Something Great
          </h3>
          <p className="text-white/80 text-base max-w-lg">
            Book a free consultation and technical review. Let&apos;s turn your idea into a high-performing digital product.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-primary rounded-xl font-semibold text-sm hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-white/60"
          >
            Get in Touch
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </Link>
          <a
            href="https://github.com/Mianhassam96/MultiMian-Studio"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/15 border border-white/30 text-white rounded-xl font-semibold text-sm hover:bg-white/25 transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-white/40"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden>
              <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.8-1.4-3.8-1.4-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 1.7 2.6 1.2 3.2.9.1-.7.4-1.2.7-1.5-2.6-.3-5.4-1.3-5.4-5.7 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.3 1.2.9-.2 1.8-.3 2.7-.3s1.9.1 2.7.3c2.3-1.6 3.3-1.2 3.3-1.2.6 1.7.2 3 .1 3.3.7.9 1.2 2 1.2 3.3 0 4.4-2.8 5.4-5.4 5.7.6.5 1 1.3 1 2.6v3.8c0 .4.2.8.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z"/>
            </svg>
            View Source
          </a>
>>>>>>> 4384903 (feat: v2.0 complete redesign - design system, gallery, tech stack, animated counters, 6 color themes, sticky nav with scroll progress, enriched footer, accessible components)
        </div>
      </div>
    </motion.section>
  )
}
