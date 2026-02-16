import Head from 'next/head'
import Hero from '../components/Hero'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>MultiMian - Full Stack Development Agency</title>
        <meta name="description" content="Professional full-stack development by Mian Hassam" />
      </Head>
      
      <Hero />

      {/* Services Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">Our Services</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Comprehensive solutions for your digital transformation</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              { icon: '🌐', title: 'Business Websites', desc: 'Professional websites that establish your online presence', features: ['Custom Design', 'SEO Ready', 'Fast Loading', 'Mobile Responsive'] },
              { icon: '⚡', title: 'SaaS Platforms', desc: 'Scalable subscription-based applications', features: ['Multi-tenant', 'Subscription Billing', 'Admin Dashboard', 'API Integration'] },
              { icon: '�', title: 'E-Commerce', desc: 'Complete online stores with payment processing', features: ['Payment Gateway', 'Product Management', 'Order Tracking', 'Analytics'] },
              { icon: '📱', title: 'Web Applications', desc: 'Custom web apps for your business', features: ['Custom Features', 'Database Design', 'User Authentication', 'Cloud Hosting'] }
            ].map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group p-8 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 shadow-lg hover:shadow-2xl transition-all">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{s.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">{s.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{s.desc}</p>
                <div className="flex flex-wrap gap-2">{s.features.map(f => <span key={f} className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full text-sm font-semibold">{f}</span>)}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-950 dark:to-gray-900">
        <div className="container px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">Why Choose MultiMian?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Cutting-edge technology with proven expertise</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: '⚡', title: 'Lightning Fast', desc: 'Optimized for speed and performance' },
              { icon: '🎨', title: 'Beautiful Design', desc: 'Stunning, modern designs' },
              { icon: '📱', title: 'Fully Responsive', desc: 'Perfect on all devices' },
              { icon: '🔒', title: 'Secure & Reliable', desc: 'Enterprise-grade security' },
              { icon: '🚀', title: 'SEO Optimized', desc: 'Rank higher on search engines' },
              { icon: '💼', title: 'Business Growth', desc: 'Drive conversions' }
            ].map((f, i) => (
              <motion.div key={f.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-8 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:border-blue-500 transition-all">
                <div className="text-5xl mb-4">{f.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{f.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Technologies Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">Technologies We Use</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Modern tech stack</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { name: 'React', icon: '⚛️' }, { name: 'Next.js', icon: '▲' }, { name: 'Node.js', icon: '🟢' }, { name: 'TypeScript', icon: '📘' },
              { name: 'MongoDB', icon: '🍃' }, { name: 'PostgreSQL', icon: '🐘' }, { name: 'AWS', icon: '☁️' }, { name: 'Docker', icon: '🐳' }
            ].map((t, i) => (
              <motion.div key={t.name} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 hover:shadow-lg transition-all text-center">
                <div className="text-4xl mb-3">{t.icon}</div>
                <div className="font-bold text-gray-900 dark:text-white">{t.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-950 dark:to-gray-900">
        <div className="container px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">Our Process</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Proven methodology</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { step: '01', title: 'Discovery & Planning', desc: 'Strategic roadmap', icon: '🎯' },
              { step: '02', title: 'Design & Prototype', desc: 'Beautiful interfaces', icon: '🎨' },
              { step: '03', title: 'Development', desc: 'Cutting-edge tech', icon: '⚙️' },
              { step: '04', title: 'Launch & Support', desc: 'Ongoing support', icon: '🚀' }
            ].map((p, i) => (
              <motion.div key={p.step} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center p-8 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700">
                <div className="text-5xl mb-4">{p.icon}</div>
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-3">{p.step}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{p.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">Transparent Pricing</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Choose the perfect plan</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { name: 'Starter', price: '$999', desc: 'Small businesses', features: ['5 Pages', 'Responsive', 'Basic SEO', 'Contact Form', '1 Month Support'], popular: false },
              { name: 'Professional', price: '$2,499', desc: 'Growing businesses', features: ['10 Pages', 'Custom Design', 'Advanced SEO', 'CMS', '3 Months Support', 'Analytics'], popular: true },
              { name: 'Enterprise', price: 'Custom', desc: 'Large projects', features: ['Unlimited Pages', 'Custom Features', 'E-Commerce', 'API', '12 Months Support', 'Priority'], popular: false }
            ].map((p, i) => (
              <motion.div key={p.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className={`p-8 rounded-2xl border-2 ${p.popular ? 'border-blue-500 bg-gradient-to-br from-blue-50 to-white dark:from-blue-900/20 dark:to-gray-900 shadow-2xl scale-105' : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900'} transition-all hover:shadow-xl`}>
                {p.popular && <div className="inline-block px-4 py-1 bg-blue-600 text-white rounded-full text-sm font-bold mb-4">Most Popular</div>}
                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{p.name}</h3>
                <div className="text-4xl font-bold mb-2 text-blue-600 dark:text-blue-400">{p.price}</div>
                <p className="text-gray-600 dark:text-gray-400 mb-6">{p.desc}</p>
                <ul className="space-y-3 mb-8">{p.features.map(f => <li key={f} className="flex items-center gap-3 text-gray-700 dark:text-gray-300"><svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg><span>{f}</span></li>)}</ul>
                <Link href="/contact" className={`block w-full py-4 rounded-xl font-bold text-center transition-all ${p.popular ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg' : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 text-gray-900 dark:text-white'}`}>Get Started</Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-950 dark:to-gray-900">
        <div className="container px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">Client Success Stories</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">See what our clients say</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { name: 'Sarah Johnson', role: 'CEO, TechStart', image: 'SJ', quote: 'MultiMian transformed our vision into reality. Expertise is unmatched!', rating: 5 },
              { name: 'Ahmed Khan', role: 'Founder, E-Commerce Plus', image: 'AK', quote: 'Sales increased by 200% after launch. Best investment!', rating: 5 },
              { name: 'Lisa Martinez', role: 'CTO, GrowthCo', image: 'LM', quote: 'Clean code, modern design, excellent support!', rating: 5 }
            ].map((t, i) => (
              <motion.div key={t.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-8 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg">
                <div className="flex gap-1 mb-4">{[...Array(t.rating)].map((_, j) => <span key={j} className="text-yellow-500 text-xl">★</span>)}</div>
                <p className="text-gray-700 dark:text-gray-300 mb-6">&quot;{t.quote}&quot;</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold">{t.image}</div>
                  <div><div className="font-bold text-gray-900 dark:text-white">{t.name}</div><div className="text-sm text-gray-600 dark:text-gray-400">{t.role}</div></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        <div className="container px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Build Something Amazing?</h2>
            <p className="text-xl text-blue-100 mb-10">Let&apos;s discuss your project and turn your vision into reality!</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="w-full sm:w-auto px-10 py-5 bg-white text-blue-900 rounded-xl font-bold text-lg shadow-2xl hover:bg-gray-100 transition-all">Get Free Consultation</Link>
              <Link href="/portfolio" className="w-full sm:w-auto px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-xl font-bold text-lg hover:bg-white/20 transition-all">View Our Work</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}