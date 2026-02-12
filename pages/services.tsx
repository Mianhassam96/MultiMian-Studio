import { motion } from 'framer-motion'
import Head from 'next/head'
import Link from 'next/link'

const services = [
  {
    category: "Web Development",
    icon: "🌐",
    description: "Professional websites that establish credibility and attract customers",
    services: [
      {
        title: "Business Websites",
        description: "A professional website designed to showcase your business, build trust, and convert visitors into customers.",
        whoItsFor: "Small businesses, service providers, local businesses, professionals",
        benefits: [
          "Custom design tailored to your brand",
          "Mobile-responsive (works on all devices)",
          "Fast loading speeds",
          "SEO-optimized structure",
          "Contact forms and lead capture",
          "Easy content management",
          "Security and SSL certificate",
          "Google Analytics integration"
        ],
        results: "Increased credibility, more qualified leads, better search visibility, professional brand image",
        investment: "Starting at $499",
        timeline: "1-2 weeks"
      },
      {
        title: "Portfolio Websites",
        description: "Showcase your work with a stunning portfolio that highlights your skills and attracts ideal clients.",
        whoItsFor: "Freelancers, creatives, photographers, designers, consultants",
        benefits: [
          "Eye-catching design",
          "Project galleries",
          "Case study sections",
          "Testimonial displays",
          "Contact integration",
          "Blog functionality",
          "Social media links",
          "Fast performance"
        ],
        results: "Professional presentation, attract better clients, showcase expertise",
        investment: "Starting at $399",
        timeline: "1-2 weeks"
      },
      {
        title: "Landing Pages",
        description: "High-converting landing pages designed for specific campaigns, products, or services.",
        whoItsFor: "Marketers, product launches, lead generation, event promotions",
        benefits: [
          "Conversion-focused design",
          "A/B testing ready",
          "Form integration",
          "Analytics tracking",
          "Fast deployment",
          "Mobile-optimized"
        ],
        results: "Higher conversion rates, better campaign ROI, more leads",
        investment: "Starting at $299",
        timeline: "3-5 days"
      }
    ]
  },
  {
    category: "Web Applications",
    icon: "⚡",
    description: "Custom solutions that automate processes and scale your business",
    services: [
      {
        title: "Custom Web Apps",
        description: "Tailored web applications built specifically for your business needs and workflows.",
        whoItsFor: "Businesses with unique processes, companies needing automation, startups building MVPs",
        benefits: [
          "Custom functionality",
          "User authentication",
          "Database design",
          "Admin dashboards",
          "API integrations",
          "Scalable architecture",
          "Security features",
          "Documentation and training"
        ],
        results: "Automated workflows, time savings, reduced errors, better data management, competitive advantage",
        investment: "Starting at $2,500",
        timeline: "4-8 weeks"
      },
      {
        title: "SaaS Products",
        description: "Software-as-a-Service platforms with subscription management and multi-tenant architecture.",
        whoItsFor: "Entrepreneurs building SaaS, businesses offering software services",
        benefits: [
          "Multi-tenant architecture",
          "Subscription management",
          "Payment gateway integration",
          "User management",
          "API access",
          "Analytics dashboard",
          "Scalable infrastructure"
        ],
        results: "Recurring revenue, scalable business model, automated billing",
        investment: "Starting at $5,000",
        timeline: "8-12 weeks"
      },
      {
        title: "Dashboards & Admin Panels",
        description: "Powerful dashboards to visualize data, manage operations, and make informed decisions.",
        whoItsFor: "Businesses needing data visualization, operations management, team collaboration",
        benefits: [
          "Real-time data visualization",
          "Custom reports",
          "User role management",
          "Export functionality",
          "Responsive design",
          "Secure access"
        ],
        results: "Better decision making, improved efficiency, data-driven insights",
        investment: "Starting at $1,500",
        timeline: "3-6 weeks"
      }
    ]
  },
  {
    category: "E-Commerce Solutions",
    icon: "🛒",
    description: "Complete online stores that make selling easy and boost revenue",
    services: [
      {
        title: "Online Stores",
        description: "Full-featured e-commerce websites with everything you need to sell products online.",
        whoItsFor: "Retailers, product-based businesses, dropshipping businesses",
        benefits: [
          "Product catalog management",
          "Shopping cart",
          "Secure checkout",
          "Payment gateway integration",
          "Inventory management",
          "Order tracking",
          "Customer accounts",
          "Email notifications",
          "Mobile-responsive",
          "SEO-optimized"
        ],
        results: "Increased sales, 24/7 revenue, expanded market reach",
        investment: "Starting at $1,299",
        timeline: "3-4 weeks"
      },
      {
        title: "Payment Integration",
        description: "Secure payment processing with multiple payment methods and gateways.",
        whoItsFor: "Any business accepting online payments, subscription services",
        benefits: [
          "Multiple payment gateways",
          "Secure PCI compliance",
          "Recurring payments",
          "Refund management",
          "Transaction reporting"
        ],
        results: "Secure transactions, customer trust, flexible payment options",
        investment: "Starting at $500",
        timeline: "1-2 weeks"
      }
    ]
  },
  {
    category: "Maintenance & Optimization",
    icon: "🔧",
    description: "Keep your website fast, secure, and performing at its best",
    services: [
      {
        title: "Speed Optimization",
        description: "Make your website lightning fast for better user experience and SEO.",
        whoItsFor: "Websites with slow loading times affecting conversions",
        benefits: [
          "Improved page load speeds",
          "Better search engine rankings",
          "Reduced bounce rates",
          "Enhanced user experience"
        ],
        results: "Higher conversions, better SEO, improved user satisfaction",
        investment: "Starting at $250",
        timeline: "1 week"
      },
      {
        title: "Website Maintenance",
        description: "Regular updates, backups, security monitoring, and technical support.",
        whoItsFor: "Existing website owners who want peace of mind",
        benefits: [
          "Regular updates",
          "Security monitoring",
          "Backup management",
          "Bug fixes",
          "Performance monitoring",
          "Priority support"
        ],
        results: "Peace of mind, reduced downtime, secure website",
        investment: "$150/month",
        timeline: "Ongoing"
      },
      {
        title: "Website Redesign",
        description: "Modernize your website with fresh design and improved functionality.",
        whoItsFor: "Businesses with outdated websites needing a refresh",
        benefits: [
          "Modern, contemporary design",
          "Improved user experience",
          "Mobile responsiveness",
          "Better conversion rates",
          "Updated technology"
        ],
        results: "Increased credibility, better conversions, competitive advantage",
        investment: "Starting at $799",
        timeline: "2-3 weeks"
      }
    ]
  }
]

export default function Services() {
  return (
    <>
      <Head>
        <title>Web Development Services - Custom Websites & Web Applications | MultiMian</title>
        <meta name="description" content="Professional web development services for businesses. Custom websites, web applications, e-commerce solutions, and ongoing maintenance. Get a free quote today." />
        <meta name="keywords" content="web development services, custom web development, web application development, e-commerce development" />
      </Head>

      <div className="py-12">
        {/* Hero Section - Stronger Headline */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20">
            <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-sm font-medium text-primary">Available for New Projects</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
            Get a Website That Actually Brings You Customers
          </h1>
          <p className="text-xl md:text-2xl text-muted leading-relaxed mb-8">
            Stop losing business to competitors with better websites. We build high-performance web solutions that turn visitors into paying customers.
          </p>

          {/* Primary CTA */}
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
            <a
              href="https://wa.me/923258831437"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary/30 rounded-xl text-primary hover:bg-primary/5 transition-all font-semibold text-lg"
            >
              <span className="text-xl">💬</span>
              Quick Chat on WhatsApp
            </a>
          </div>

          <p className="text-sm text-muted">
            ✓ Free consultation • ✓ No obligation • ✓ Response within 24 hours
          </p>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">50+</div>
              <div className="text-sm text-muted">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">100%</div>
              <div className="text-sm text-muted">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">5+ Years</div>
              <div className="text-sm text-muted">Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">24/7</div>
              <div className="text-sm text-muted">Support Available</div>
            </div>
          </div>
        </motion.section>

        {/* Pain Points Section - NEW */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Is Your Website Costing You Money?
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              These common problems are driving potential customers away from your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: '😰',
                problem: 'Outdated Design',
                impact: 'Visitors leave within seconds because your site looks unprofessional',
                stat: '94% judge credibility by design'
              },
              {
                icon: '🐌',
                problem: 'Slow Loading',
                impact: 'Every second of delay costs you customers and sales',
                stat: '40% abandon slow sites'
              },
              {
                icon: '📱',
                problem: 'Not Mobile-Friendly',
                impact: 'You\'re losing 60%+ of potential customers who browse on phones',
                stat: '60% of traffic is mobile'
              }
            ].map((pain, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-6 rounded-2xl border-2 border-red-200 dark:border-red-900/30"
              >
                <div className="text-5xl mb-4">{pain.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-red-600 dark:text-red-400">{pain.problem}</h3>
                <p className="text-muted mb-4">{pain.impact}</p>
                <div className="text-sm font-semibold text-primary bg-primary/10 px-3 py-2 rounded-lg inline-block">
                  {pain.stat}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-xl font-semibold mb-6">
              Don&apos;t let a poor website hold your business back.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 glass-button px-8 py-4 rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all"
            >
              Fix Your Website Now
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </motion.section>

        {/* Trust Badges Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="glass-card p-8 rounded-2xl">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold mb-2">Why Businesses Choose MultiMian</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
              {[
                { icon: '🔒', label: 'Secure & Compliant' },
                { icon: '⚡', label: 'Fast Delivery' },
                { icon: '📱', label: 'Mobile Responsive' },
                { icon: '🎯', label: 'SEO Optimized' },
                { icon: '💰', label: 'Fixed Pricing' },
                { icon: '🛡️', label: 'Quality Guaranteed' }
              ].map((badge, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex flex-col items-center gap-2"
                >
                  <div className="text-3xl">{badge.icon}</div>
                  <div className="text-xs font-medium text-muted">{badge.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Testimonials - Moved Up for Social Proof */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Real Results from Real Clients</h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              See how we&apos;ve helped businesses like yours succeed online.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {[
              {
                name: "Sarah Johnson",
                role: "CEO, TechStart Solutions",
                text: "MultiMian transformed our outdated website into a modern, high-converting platform. Our leads increased by 150% in just 3 months.",
                rating: 5,
                result: "+150% Leads"
              },
              {
                name: "Ahmed Khan",
                role: "Founder, E-Commerce Plus",
                text: "The custom web app they built automated our entire workflow. We're saving 20+ hours per week and our team couldn't be happier.",
                rating: 5,
                result: "20+ Hours Saved"
              },
              {
                name: "Lisa Martinez",
                role: "Marketing Director, GrowthCo",
                text: "Professional, reliable, and results-driven. MultiMian delivered exactly what we needed, on time and within budget. Highly recommend!",
                rating: 5,
                result: "On Time & Budget"
              }
            ].map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-6 rounded-2xl border-2 border-green-200 dark:border-green-900/30"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-500 text-xl">★</span>
                  ))}
                </div>
                <p className="text-muted mb-6 italic">&quot;{testimonial.text}&quot;</p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-primary-dark flex items-center justify-center text-white font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
                <div className="text-center py-2 px-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-lg font-bold">
                  {testimonial.result}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 glass-button px-8 py-4 rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all"
            >
              Get Results Like These
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </motion.section>

        {/* Services Categories */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Choose the Perfect Solution for Your Business
            </h2>
            <p className="text-lg text-muted max-w-3xl mx-auto">
              From simple websites to complex web applications, we have the expertise to bring your vision to life. All packages include our quality guarantee and ongoing support.
            </p>
          </div>
        </motion.section>

        {services.map((category, catIdx) => (
          <motion.section
            key={category.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: catIdx * 0.1 }}
            className="mb-24"
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="text-5xl">{category.icon}</span>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                  {category.category}
                </h2>
                <p className="text-muted">{category.description}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {category.services.map((service, idx) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass-card p-8 rounded-2xl hover:shadow-xl transition-all"
                >
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted mb-6">{service.description}</p>
                  
                  <div className="mb-4 flex items-center gap-2 text-sm">
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full font-medium">
                      ✓ Proven Solution
                    </span>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full font-medium">
                      Fixed Price
                    </span>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-primary mb-2">Perfect for:</h4>
                    <p className="text-sm text-muted">{service.whoItsFor}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-primary mb-3">What you get:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2 text-sm text-muted">
                          <span className="text-primary mt-0.5">✓</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6 p-4 bg-primary/5 rounded-lg">
                    <h4 className="font-semibold text-primary mb-2">Results you can expect:</h4>
                    <p className="text-sm text-muted">{service.results}</p>
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="text-sm text-muted">Investment</div>
                      <div className="text-xl font-bold text-primary">{service.investment}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-muted">Timeline</div>
                      <div className="text-lg font-semibold">{service.timeline}</div>
                    </div>
                  </div>

                  <Link 
                    href="/contact" 
                    className="block w-full text-center px-6 py-3 bg-gradient-to-r from-primary to-primary-dark text-white rounded-xl font-semibold hover:shadow-lg transition-all"
                  >
                    Start Your Project →
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Category CTA */}
            <div className="text-center mt-12 p-6 glass-card rounded-2xl bg-primary/5">
              <p className="text-lg font-semibold mb-4">
                Not sure which service is right for you?
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
              >
                Get Free Expert Advice
                <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </motion.section>
        ))}

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 text-center glass-card p-12 rounded-3xl bg-gradient-to-r from-primary/10 to-primary-dark/10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-muted mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss your project and create a solution that drives real results.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 glass-button px-8 py-4 rounded-xl font-medium"
            >
              Schedule Free Consultation
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 px-8 py-4 border border-primary/20 rounded-xl text-primary hover:bg-primary/5 transition-all font-medium"
            >
              View Pricing
            </Link>
          </div>
        </motion.section>

        {/* Our Process Reference */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="glass-card p-10 rounded-3xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Work: Simple & Transparent</h2>
              <p className="text-lg text-muted max-w-2xl mx-auto">
                A proven 5-step process that ensures your project succeeds—from first call to final launch.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
              {[
                { number: '01', title: 'Discovery', icon: '🎯', desc: 'We listen to your goals' },
                { number: '02', title: 'Strategy', icon: '📋', desc: 'We create your plan' },
                { number: '03', title: 'Development', icon: '⚙️', desc: 'We build your solution' },
                { number: '04', title: 'Testing', icon: '✅', desc: 'We ensure quality' },
                { number: '05', title: 'Launch', icon: '🚀', desc: 'We go live together' }
              ].map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-dark rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">
                    {step.number}
                  </div>
                  <div className="text-2xl mb-2">{step.icon}</div>
                  <div className="font-semibold mb-1">{step.title}</div>
                  <div className="text-xs text-muted">{step.desc}</div>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <Link href="/process" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                See Our Complete Process
                <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </motion.section>

        {/* Guarantees & Assurances */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="glass-card p-10 rounded-3xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Promise to You</h2>
              <p className="text-lg text-muted max-w-2xl mx-auto">
                Your success is our success. We back every project with guarantees that protect your investment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {[
                {
                  icon: '💯',
                  title: 'Quality Guarantee',
                  text: 'Every project undergoes rigorous testing. If something doesn\'t work as promised, we fix it—no questions asked.'
                },
                {
                  icon: '⏰',
                  title: 'On-Time Delivery',
                  text: 'We respect deadlines. Your project will be delivered on schedule, or we\'ll make it right.'
                },
                {
                  icon: '💬',
                  title: 'Clear Communication',
                  text: 'Regular updates, transparent pricing, and honest timelines. No surprises, no tech jargon.'
                },
                {
                  icon: '🔐',
                  title: 'Secure & Confidential',
                  text: 'Your data and ideas are protected. We sign NDAs and follow industry-standard security practices.'
                }
              ].map((guarantee, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="text-center"
                >
                  <div className="text-5xl mb-4">{guarantee.icon}</div>
                  <h3 className="font-bold text-lg mb-3">{guarantee.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{guarantee.text}</p>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 glass-button px-8 py-4 rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all"
              >
                Start Your Risk-Free Project
                <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </motion.section>

        {/* FAQ Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Questions? We Have Answers</h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Everything you need to know about working with MultiMian.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "How long does a typical project take?",
                answer: "Project timelines vary based on complexity. A simple business website takes 1-2 weeks, while custom web applications can take 4-12 weeks. We provide detailed timelines during our discovery call and always deliver on schedule."
              },
              {
                question: "What's included in the pricing?",
                answer: "Our pricing includes design, development, testing, deployment, and training. You'll also get documentation, source code, and 30 days of post-launch support. No hidden fees—ever."
              },
              {
                question: "Do you offer ongoing support after launch?",
                answer: "Yes! We offer maintenance packages starting at $150/month that include updates, security monitoring, backups, and priority support. You can also contact us for one-time fixes or updates anytime."
              },
              {
                question: "Can you work with my existing website?",
                answer: "Absolutely. We can redesign, optimize, or add new features to your existing website. We work with all major platforms and technologies—no matter who built your current site."
              },
              {
                question: "What if I need changes during development?",
                answer: "We include revision rounds in all projects. Minor adjustments are part of the process. For major scope changes, we'll discuss timeline and budget adjustments transparently—no surprises."
              },
              {
                question: "How do I get started?",
                answer: "Simple! Click any 'Get Started' button to schedule a free consultation. We'll discuss your needs, answer your questions, and create a custom proposal. No pressure, no obligation."
              }
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="glass-card p-6 rounded-xl hover:shadow-lg transition-all"
              >
                <h3 className="font-bold text-lg mb-3 text-primary">{faq.question}</h3>
                <p className="text-muted leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-muted mb-4">Still have questions?</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 glass-button px-8 py-4 rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all"
            >
              Ask Us Anything
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </motion.section>

        {/* Final CTA with Risk Reversal */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="glass-card p-12 rounded-3xl bg-gradient-to-r from-primary/10 to-primary-dark/10 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Ready to Grow Your Business Online?
              </h2>
              <p className="text-xl md:text-2xl text-muted mb-4">
                Let&apos;s turn your vision into a high-performing website that brings you customers 24/7.
              </p>
              
              <div className="flex items-center justify-center gap-3 text-sm text-muted mb-8">
                <div className="flex items-center gap-2">
                  <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                  <span>Free consultation</span>
                </div>
                <span>•</span>
                <span>No obligation</span>
                <span>•</span>
                <span>Response in 24 hours</span>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 glass-button px-10 py-5 rounded-xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all"
                >
                  Schedule Your Free Consultation
                  <svg className="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
                <a
                  href="https://wa.me/923258831437"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-10 py-5 border-2 border-primary/30 rounded-xl text-primary hover:bg-primary/5 transition-all font-bold text-lg"
                >
                  <span className="text-2xl">💬</span>
                  Chat on WhatsApp
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-primary/20">
                <div className="text-center">
                  <div className="text-4xl mb-2">📞</div>
                  <div className="font-semibold mb-1">Call Us</div>
                  <a href="tel:+923258831437" className="text-primary hover:underline">
                    +92 325 883 1437
                  </a>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-2">📧</div>
                  <div className="font-semibold mb-1">Email Us</div>
                  <a href="mailto:mianhassam96@gmail.com" className="text-primary hover:underline">
                    mianhassam96@gmail.com
                  </a>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-2">💼</div>
                  <div className="font-semibold mb-1">View Our Work</div>
                  <Link href="/portfolio" className="text-primary hover:underline">
                    See Portfolio
                  </Link>
                </div>
              </div>

              <p className="text-sm text-muted mt-8 italic">
                &quot;Join 50+ businesses that trust MultiMian for their web development needs.&quot;
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </>
  )
}
