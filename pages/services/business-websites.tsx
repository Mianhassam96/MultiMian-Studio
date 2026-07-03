import { motion } from 'framer-motion'
import Head from 'next/head'
import Link from 'next/link'

export default function BusinessWebsites() {
  return (
    <>
      <Head>
        <title>Business Website Development - Professional Websites That Convert | MultiMian</title>
        <meta name="description" content="Get a professional business website built with React and Next.js. Custom design, mobile-responsive, SEO-optimized, and built to convert visitors into customers. Starting at $499." />
        <meta name="keywords" content="business website development, professional website design, custom business website, React website, Next.js website, small business website, MultiMian, Mian Hassam" />
      </Head>

      <div className="py-12">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20">
            <span className="text-sm font-medium text-primary">🌐 Business Website Development</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
            Professional Business Websites That Actually Bring You Customers
          </h1>
          
          <p className="text-xl md:text-2xl text-muted leading-relaxed mb-8">
            Stop losing business to competitors with better websites. Get a modern, high-performance website built with React and Next.js that turns visitors into paying customers.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 glass-button px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all"
            >
              Get Your Free Consultation
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-6 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">$499</div>
              <div className="text-sm text-muted">Starting Price</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">1-2 Weeks</div>
              <div className="text-sm text-muted">Delivery Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">100%</div>
              <div className="text-sm text-muted">Satisfaction</div>
            </div>
          </div>
        </motion.section>

        {/* What's Included */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What&apos;s Included in Your Business Website</h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Everything you need to establish a professional online presence and start attracting customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: '🎨',
                title: 'Custom Design',
                description: 'Unique design tailored to your brand identity, not a generic template'
              },
              {
                icon: '📱',
                title: 'Mobile Responsive',
                description: 'Perfect display on all devices - phones, tablets, and desktops'
              },
              {
                icon: '⚡',
                title: 'Lightning Fast',
                description: 'Sub-2-second load times for better user experience and SEO'
              },
              {
                icon: '🔍',
                title: 'SEO Optimized',
                description: 'Built-in SEO best practices to rank higher on Google'
              },
              {
                icon: '📧',
                title: 'Contact Forms',
                description: 'Lead capture forms with email notifications'
              },
              {
                icon: '🔒',
                title: 'Secure & SSL',
                description: 'HTTPS encryption and security best practices included'
              },
              {
                icon: '📊',
                title: 'Analytics Setup',
                description: 'Google Analytics integration to track your visitors'
              },
              {
                icon: '✏️',
                title: 'Easy Updates',
                description: 'Simple content management - update text and images easily'
              },
              {
                icon: '🎓',
                title: 'Training Included',
                description: 'We teach you how to manage your website'
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="glass-card p-6 rounded-xl hover:shadow-lg transition-all"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Perfect For */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="glass-card p-10 rounded-3xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Perfect For These Businesses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Small businesses establishing online presence',
                'Service providers (consultants, agencies)',
                'Local businesses (restaurants, salons, clinics)',
                'Professional services (lawyers, accountants)',
                'Startups launching their brand',
                'Freelancers building credibility'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <span className="text-primary text-xl">✓</span>
                  <span className="text-muted">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Process */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Build Your Website</h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              A simple, transparent process from start to finish.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Discovery Call',
                description: 'We discuss your business, goals, and requirements'
              },
              {
                step: '02',
                title: 'Design & Plan',
                description: 'We create mockups and get your approval'
              },
              {
                step: '03',
                title: 'Development',
                description: 'We build your website with modern technology'
              },
              {
                step: '04',
                title: 'Launch & Train',
                description: 'We launch your site and train you to manage it'
              }
            ].map((process, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-dark text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="font-bold text-lg mb-2">{process.title}</h3>
                <p className="text-sm text-muted">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center glass-card p-12 rounded-3xl bg-gradient-to-r from-primary/10 to-primary-dark/10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Your Professional Website?</h2>
          <p className="text-xl text-muted mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss your project and create a website that drives real results for your business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 glass-button px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all"
            >
              Schedule Free Consultation
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary/30 rounded-xl text-primary hover:bg-primary/5 transition-all font-semibold text-lg"
            >
              View All Services
            </Link>
          </div>
        </motion.section>
      </div>
    </>
  )
}
