import { motion } from 'framer-motion'
import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

const packages = [
  {
    name: "Starter",
    tagline: "Launch Your Presence",
    price: "$499",
    duration: "1-2 weeks",
    description: "Perfect for small businesses and startups getting online",
    features: [
      "Up to 5 responsive pages",
      "Modern, mobile-first design",
      "Contact form integration",
      "SEO optimization",
      "Social media integration",
      "SSL certificate included",
      "Google Analytics setup",
      "1 round of revisions",
      "30-day support"
    ],
    icon: "🚀",
    color: "from-blue-500 to-cyan-500",
    popular: false
  },
  {
    name: "Professional",
    tagline: "Grow Your Business",
    price: "$1,499",
    duration: "2-4 weeks",
    description: "Complete solution for established businesses",
    features: [
      "Up to 15 custom pages",
      "Premium custom design",
      "Advanced SEO & performance",
      "Blog/CMS integration",
      "Email notifications",
      "Portfolio/gallery section",
      "Google Maps integration",
      "Social media feeds",
      "2 rounds of revisions",
      "60-day priority support",
      "Speed optimization",
      "Analytics dashboard"
    ],
    icon: "💼",
    color: "from-purple-500 to-pink-500",
    popular: true
  },
  {
    name: "Enterprise",
    tagline: "Scale Without Limits",
    price: "Custom",
    duration: "4-12 weeks",
    description: "Fully customized solutions for complex needs",
    features: [
      "Unlimited pages & features",
      "Custom functionality",
      "User authentication",
      "Database architecture",
      "Admin dashboard",
      "API development",
      "Third-party integrations",
      "Payment processing",
      "Advanced security",
      "Unlimited revisions",
      "90-day dedicated support",
      "Scalable infrastructure",
      "Training & documentation"
    ],
    icon: "⚡",
    color: "from-orange-500 to-red-500",
    popular: false
  }
]

const addons = [
  { name: "E-Commerce Integration", price: "$500+", icon: "🛒" },
  { name: "Custom CMS", price: "$300+", icon: "📝" },
  { name: "Multi-language Support", price: "$400+", icon: "🌍" },
  { name: "Advanced Analytics", price: "$200+", icon: "📊" },
  { name: "Email Marketing Setup", price: "$250+", icon: "📧" },
  { name: "Chatbot Integration", price: "$350+", icon: "💬" }
]

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'project' | 'monthly'>('project')

  return (
    <>
      <Head>
        <title>Pricing - Professional Web Development Packages | MultiMian</title>
        <meta name="description" content="Transparent pricing for professional web development. Choose from Starter, Professional, or Enterprise packages. No hidden fees." />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 right-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 rounded-full text-sm font-bold mb-6"
              >
                💎 Transparent Pricing
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl font-black mb-6 text-gray-900 dark:text-white leading-tight">
                Simple, Honest <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">Pricing</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                No hidden fees. No surprises. Just quality work at fair prices.
              </p>
              
              <div className="flex items-center justify-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Flexible Payment Plans
                </span>
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Money-Back Guarantee
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20 relative">
          <div className="container px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {packages.map((pkg, idx) => (
                <motion.div
                  key={pkg.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.8 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className={`relative group ${pkg.popular ? 'md:-mt-8' : ''}`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-10">
                      <motion.span
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg"
                      >
                        ⭐ Most Popular
                      </motion.span>
                    </div>
                  )}

                  <div className={`relative h-full p-10 bg-white dark:bg-gray-800 rounded-3xl border-2 ${pkg.popular ? 'border-purple-500 shadow-2xl' : 'border-gray-200 dark:border-gray-700'} hover:border-transparent hover:shadow-2xl transition-all duration-500`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${pkg.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>
                    
                    <div className="relative z-10">
                      {/* Icon */}
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="text-6xl mb-6"
                      >
                        {pkg.icon}
                      </motion.div>

                      {/* Header */}
                      <div className="mb-8">
                        <h3 className="text-3xl font-black mb-2 text-gray-900 dark:text-white">{pkg.name}</h3>
                        <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-4">{pkg.tagline}</p>
                        <div className="flex items-baseline gap-2 mb-2">
                          <span className={`text-5xl font-black bg-gradient-to-r ${pkg.color} bg-clip-text text-transparent`}>
                            {pkg.price}
                          </span>
                          {pkg.price !== "Custom" && <span className="text-gray-500 dark:text-gray-400">/project</span>}
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">⏱️ {pkg.duration}</p>
                      </div>

                      <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">{pkg.description}</p>

                      {/* Features */}
                      <ul className="space-y-4 mb-10">
                        {pkg.features.map((feature, fIdx) => (
                          <motion.li
                            key={fIdx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: fIdx * 0.05 }}
                            className="flex items-start gap-3"
                          >
                            <span className={`flex-shrink-0 w-6 h-6 bg-gradient-to-r ${pkg.color} rounded-full flex items-center justify-center text-white text-xs font-bold mt-0.5`}>
                              ✓
                            </span>
                            <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>

                      {/* CTA Button */}
                      <Link href="/contact">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${
                            pkg.popular
                              ? `bg-gradient-to-r ${pkg.color} text-white shadow-lg hover:shadow-xl`
                              : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
                          }`}
                        >
                          {pkg.popular ? '🚀 Get Started' : 'Learn More'}
                        </motion.button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Add-ons Section */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
          <div className="container px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-900 dark:text-white">
                Powerful <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Add-ons</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">Enhance your package with additional features</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {addons.map((addon, idx) => (
                <motion.div
                  key={addon.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="p-6 bg-white dark:bg-gray-800 rounded-2xl border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all cursor-pointer"
                >
                  <div className="text-4xl mb-4">{addon.icon}</div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">{addon.name}</h3>
                  <p className="text-2xl font-black text-blue-600 dark:text-blue-400">{addon.price}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-900 dark:text-white">
                Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Questions</span>
              </h2>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  q: "What's included in the price?",
                  a: "All packages include design, development, testing, deployment, and post-launch support. You own all code and assets. No hidden fees or recurring charges."
                },
                {
                  q: "Do you offer payment plans?",
                  a: "Yes! We typically split payments: 50% upfront to start, 50% upon completion. For larger projects, we can arrange custom payment schedules."
                },
                {
                  q: "What if I need changes after launch?",
                  a: "All packages include post-launch support (30-90 days depending on package). After that, we offer affordable maintenance packages starting at $99/month or hourly rates."
                },
                {
                  q: "How long does it take?",
                  a: "Timeline depends on the package and complexity. Starter projects take 1-2 weeks, Professional 2-4 weeks, and Enterprise 4-12 weeks. We'll provide a detailed timeline during consultation."
                },
                {
                  q: "Can I upgrade my package later?",
                  a: "Absolutely! You can start with a smaller package and upgrade anytime. We'll credit your initial investment toward the upgraded package."
                }
              ].map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 bg-white dark:bg-gray-800 rounded-2xl border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all"
                >
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{faq.q}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
          
          <div className="container px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
                Not Sure Which Package Fits?
              </h2>
              <p className="text-xl text-white/90 mb-10 leading-relaxed">
                Let's discuss your project and find the perfect solution for your needs and budget.
              </p>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-5 bg-white text-purple-600 rounded-xl font-bold text-lg shadow-2xl hover:bg-gray-50 transition-all"
                >
                  📞 Schedule Free Consultation
                </motion.button>
              </Link>
              <p className="mt-6 text-white/80 text-sm">
                ✨ Free 30-minute consultation • No obligation • Get expert advice
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}
