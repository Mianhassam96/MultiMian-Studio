import { motion } from 'framer-motion'
import Head from 'next/head'
import Link from 'next/link'

const packages = [
  {
    name: "Starter Website",
    price: "$499",
    duration: "1-2 weeks",
    description: "Perfect for small businesses getting started online",
    features: [
      "Up to 5 pages",
      "Mobile-responsive design",
      "Contact form integration",
      "Basic SEO optimization",
      "Social media links",
      "Free SSL certificate",
      "Google Analytics setup",
      "1 round of revisions",
      "30-day post-launch support"
    ],
    idealFor: "Small businesses, service providers, personal brands",
    popular: false
  },
  {
    name: "Business Website",
    price: "$1,499",
    duration: "2-4 weeks",
    description: "Comprehensive solution for growing businesses",
    features: [
      "Up to 15 pages",
      "Custom design tailored to your brand",
      "Advanced SEO optimization",
      "Blog/CMS integration",
      "Contact forms with email notifications",
      "Image gallery or portfolio section",
      "Social media integration",
      "Google Maps integration",
      "2 rounds of revisions",
      "60-day post-launch support",
      "Performance optimization",
      "Google Analytics & Search Console"
    ],
    idealFor: "Established businesses, professional firms, growing brands",
    popular: true
  },
  {
    name: "Custom Web App",
    price: "Custom",
    duration: "4-8 weeks",
    description: "Fully customized solutions for unique needs",
    features: [
      "Unlimited pages and features",
      "Custom functionality",
      "User authentication system",
      "Database design",
      "Admin dashboard",
      "API development",
      "Third-party integrations",
      "Payment gateway integration",
      "Advanced security",
      "Unlimited revisions",
      "90-day post-launch support",
      "Scalable architecture",
      "Documentation and training"
    ],
    idealFor: "SaaS startups, complex business needs, scalable platforms",
    popular: false
  }
]

export default function Pricing() {
  return (
    <>
      <Head>
        <title>Pricing - Transparent Web Development Packages | MultiMian</title>
        <meta name="description" content="Clear, honest pricing for web development services. Choose from Starter, Business, or Custom packages. No hidden fees." />
      </Head>

      <div className="py-12">
        {/* Header */}
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-muted mb-4">No hidden fees. No surprises. Just honest pricing for quality work.</p>
          <p className="text-sm text-primary">Flexible payment plans available • 50% upfront, 50% on delivery</p>
        </motion.section>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {packages.map((pkg, idx) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`glass-card rounded-3xl p-8 relative ${pkg.popular ? 'ring-2 ring-primary shadow-2xl scale-105' : ''}`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-primary to-primary-dark text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <div className="text-4xl font-extrabold text-primary mb-2">{pkg.price}</div>
                <div className="text-sm text-muted mb-4">Timeline: {pkg.duration}</div>
                <p className="text-muted">{pkg.description}</p>
              </div>

              <div className="mb-6 p-4 bg-primary/5 rounded-lg">
                <p className="text-sm font-semibold text-primary mb-1">Ideal for:</p>
                <p className="text-sm text-muted">{pkg.idealFor}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center text-primary text-xs mt-0.5">✓</span>
                    <span className="text-sm text-muted">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link href="/contact" className={`block w-full text-center py-4 rounded-xl font-medium transition-all ${pkg.popular ? 'glass-button' : 'border border-primary/20 text-primary hover:bg-primary/5'}`}>
                {pkg.popular ? 'Get Started' : 'Learn More'}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* FAQ */}
        <section className="max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Common Questions</h2>
          <div className="space-y-6">
            {[
              { q: "What's included in the price?", a: "All packages include design, development, testing, deployment, and post-launch support. You own all code and assets. No hidden fees." },
              { q: "Do you offer payment plans?", a: "Yes! We typically split payments: 50% upfront and 50% upon completion. Custom payment plans available for larger projects." },
              { q: "What if I need changes after launch?", a: "All packages include post-launch support (30-90 days). After that, we offer affordable maintenance packages or hourly rates." }
            ].map((faq, i) => (
              <div key={i} className="glass-card p-6 rounded-2xl">
                <h3 className="text-lg font-bold mb-2">{faq.q}</h3>
                <p className="text-muted">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center glass-card p-12 rounded-3xl">
          <h2 className="text-3xl font-bold mb-4">Not Sure Which Package to Choose?</h2>
          <p className="text-xl text-muted mb-8">Let&apos;s have a conversation about your project.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 glass-button px-8 py-4 rounded-xl">
            Schedule Free Consultation →
          </Link>
        </section>
      </div>
    </>
  )
}
