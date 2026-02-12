import Link from 'next/link'
import Head from 'next/head'
import Hero from '../components/Hero'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <>
      <Head>
        <title>MultiMian - Professional Web Development & Custom Web Applications</title>
        <meta name="description" content="Transform your business with custom web solutions. From modern websites to powerful web applications, we deliver results that drive growth. Get your free consultation today." />
        <meta name="keywords" content="web development agency, custom web applications, business website development, web app development services" />
      </Head>
      
      <div>
        <Hero />

        {/* Client Pain Points */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Is Your Business Facing These Challenges?
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: '📉',
                  title: 'Losing Customers to Competitors',
                  text: 'Your outdated website is costing you sales. Visitors leave within seconds because your site doesn\'t inspire trust or make it easy to take action.'
                },
                {
                  icon: '⏰',
                  title: 'Wasting Time on Manual Processes',
                  text: 'Still managing everything manually? A custom web application can automate your workflows, save hours every week, and reduce costly errors.'
                },
                {
                  icon: '💸',
                  title: 'Not Getting ROI from Your Website',
                  text: 'You invested in a website, but it\'s not generating leads or sales. Without the right strategy and execution, your site is just an expensive digital brochure.'
                }
              ].map((pain, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass-card p-8 rounded-2xl text-center hover:shadow-xl transition-all"
                >
                  <div className="text-5xl mb-4">{pain.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{pain.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{pain.text}</p>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/contact" className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:gap-3 transition-all">
                Let&apos;s Fix This Together
                <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                How We Help Your Business Grow
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                We don&apos;t just build websites. We create digital solutions that solve real business problems and deliver measurable results.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: '🌐',
                  title: 'Business Websites',
                  description: 'Professional websites that establish credibility, attract customers, and convert visitors into leads. Mobile-responsive, fast, and SEO-optimized.',
                  idealFor: 'Small businesses, startups, personal brands',
                  link: '/services#web-development'
                },
                {
                  icon: '⚡',
                  title: 'Custom Web Applications',
                  description: 'Tailored web apps built for your unique business needs. Automate processes, manage data, and scale your operations with powerful custom solutions.',
                  idealFor: 'Growing businesses, SaaS startups',
                  link: '/services#web-apps'
                },
                {
                  icon: '🛒',
                  title: 'E-Commerce Solutions',
                  description: 'Complete online stores that make selling easy. Secure payments, inventory management, and seamless shopping experiences that boost sales.',
                  idealFor: 'Retailers, product businesses',
                  link: '/services#ecommerce'
                },
                {
                  icon: '🔧',
                  title: 'Maintenance & Optimization',
                  description: 'Keep your website fast, secure, and up-to-date. We handle the technical stuff so you can focus on running your business.',
                  idealFor: 'Existing website owners',
                  link: '/services#maintenance'
                }
              ].map((service, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass-card p-6 rounded-2xl hover:shadow-xl transition-all group"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">{service.description}</p>
                  <div className="text-xs text-blue-600 dark:text-blue-400 font-medium mb-4">
                    Ideal for: {service.idealFor}
                  </div>
                  <Link href={service.link} className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold text-sm group-hover:gap-3 transition-all">
                    Learn More
                    <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose MultiMian */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Businesses Choose MultiMian
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                We&apos;re not just developers—we&apos;re your strategic partner in digital success.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: '🎯',
                  title: 'Results-Driven Approach',
                  text: 'Every project starts with understanding your business goals. We build solutions that deliver measurable results, not just pretty designs.'
                },
                {
                  icon: '💬',
                  title: 'Clear Communication',
                  text: 'No confusing tech jargon. We explain everything in plain English and keep you updated every step of the way.'
                },
                {
                  icon: '⚡',
                  title: 'Fast & Reliable Delivery',
                  text: 'We respect your time and deadlines. Get your project delivered on schedule without compromising on quality.'
                },
                {
                  icon: '🛡️',
                  title: 'Built to Last',
                  text: 'We use modern, proven technologies and best practices to ensure your solution is secure, scalable, and future-proof.'
                },
                {
                  icon: '🤝',
                  title: 'Ongoing Partnership',
                  text: 'Launch is just the beginning. We provide continued support, maintenance, and optimization to ensure long-term success.'
                },
                {
                  icon: '💡',
                  title: 'Strategic Thinking',
                  text: 'We don&apos;t just code—we solve problems. Every solution is designed with your business objectives in mind.'
                }
              ].map((reason, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="text-4xl flex-shrink-0">{reason.icon}</div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">{reason.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{reason.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/contact" className="inline-flex items-center gap-2 glass-button px-8 py-4 rounded-xl font-semibold">
                Start Your Project Today
                <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Process Preview */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Our Proven Process
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                From idea to launch, we make the journey smooth and stress-free.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {[
                { number: '01', title: 'Discovery Call', description: 'We listen to your goals, challenges, and vision. No pressure, just a conversation about what you need.' },
                { number: '02', title: 'Strategy & Planning', description: 'We create a detailed plan and proposal tailored to your business objectives and budget.' },
                { number: '03', title: 'Design & Development', description: 'Our team brings your vision to life with regular updates and opportunities for feedback.' },
                { number: '04', title: 'Testing & Launch', description: 'Rigorous testing ensures everything works perfectly before we launch your solution.' },
                { number: '05', title: 'Training & Support', description: 'We train your team and provide ongoing support to ensure your success.' }
              ].map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/process" className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:gap-3 transition-all">
                See Our Full Process
                <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                Let&apos;s discuss your project and create a solution that drives real results.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition-all shadow-xl">
                  Schedule Free Consultation
                </Link>
                <a href="tel:+923258831437" className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-semibold hover:bg-white/10 transition-all">
                  Call Us: +92 325 883 1437
                </a>
              </div>
              <p className="text-sm mt-6 opacity-75">No obligation. No pressure. Just honest advice.</p>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}
