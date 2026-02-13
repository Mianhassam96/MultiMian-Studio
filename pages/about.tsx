import { motion } from 'framer-motion'
import Head from 'next/head'
import Link from 'next/link'

export default function About() {
  return (
    <>
      <Head>
        <title>About MultiMian - Your Partner in Digital Success</title>
        <meta name="description" content="Meet the team behind MultiMian. Learn about our mission to help businesses succeed online through professional web development." />
      </Head>

      <div className="py-12">
        {/* Hero */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-5xl mx-auto mb-20 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
            Building Digital Solutions That Drive Real Results
          </h1>
          <p className="text-xl text-muted">We&apos;re not just developers—we&apos;re your strategic partner in digital growth.</p>
        </motion.div>

        {/* Story */}
        <section className="mb-20 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">How MultiMian Started</h2>
          <div className="glass-card p-8 rounded-3xl">
            <p className="text-lg text-muted mb-6">MultiMian was founded with a simple belief: every business deserves a powerful online presence that drives growth.</p>
            <p className="text-lg text-muted mb-6">I&apos;ve seen too many businesses struggle with websites that don&apos;t deliver results. That&apos;s why I created MultiMian—to build digital solutions that actually work.</p>
            <p className="text-lg text-muted">We focus on what matters: your goals, your customers, and your bottom line.</p>
          </div>
        </section>

        {/* Founder */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-2 rounded-3xl overflow-hidden"
            >
              <div className="aspect-square rounded-2xl overflow-hidden relative">
                <img 
                  src="/images/mian-hassam-founder.jpg" 
                  alt="Mian Hassam - Founder of MultiMian"
                  className="w-full h-full object-cover"
                  loading="eager"
                  style={{ display: 'block' }}
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-6">Meet Mian Hassam</h2>
              <p className="text-lg text-muted mb-6">Founder of MultiMian and full-stack developer specializing in modern web technologies.</p>
              <p className="text-lg text-muted mb-6">With expertise in JavaScript, TypeScript, React, Node.js, and AI tools, I help businesses transform ideas into powerful digital solutions.</p>
              <p className="text-lg text-muted mb-8">My mission is simple: build websites and applications that don&apos;t just look good—they drive real business results.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 glass-button px-6 py-3 rounded-xl">
                Let&apos;s Work Together →
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Values */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Trust MultiMian?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: '🎯', title: 'Results-Driven', text: 'We measure success by your success. Every solution is designed for ROI.' },
              { icon: '🔍', title: 'Transparency', text: 'Clear communication, honest timelines, no surprises.' },
              { icon: '⭐', title: 'Quality', text: 'We don&apos;t cut corners. Every line of code is written with care.' },
              { icon: '🤝', title: 'Partnership', text: 'Your success is our success. We&apos;re your long-term partner.' }
            ].map((v, i) => (
              <div key={i} className="glass-card p-8 rounded-2xl">
                <div className="text-5xl mb-4">{v.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{v.title}</h3>
                <p className="text-muted">{v.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center glass-card p-12 rounded-3xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Build Something Amazing?</h2>
          <p className="text-xl text-muted mb-8">Let&apos;s collaborate to turn your vision into reality.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 glass-button px-8 py-4 rounded-xl">
            Start a Conversation →
          </Link>
        </section>
      </div>
    </>
  )
}
