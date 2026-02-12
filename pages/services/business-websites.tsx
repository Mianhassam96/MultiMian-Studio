import { motion } from 'framer-motion'
import Head from 'next/head'
import Link from 'next/link'

export default function BusinessWebsites() {
  return (
    <>
      <Head>
        <title>Professional Business Websites - Get More Customers Online | MultiMian</title>
        <meta name="description" content="Get a professional business website that attracts customers and drives sales. Custom design, mobile-responsive, SEO-optimized. Starting at $499. Free consultation." />
        <meta name="keywords" content="business website design, professional website, small business website, custom website development" />
      </Head>

      <div className="py-12">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20">
            <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-sm font-medium text-primary">Most Popular Service</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
            Professional Business Websites That Bring You Customers
          </h1>
          <p className="text-xl md:text-2xl text-muted leading-relaxed mb-8">
            Stop losing business to competitors. Get a modern, high-converting website that establishes credibility and turns visitors into paying customers—guaranteed.
          </p>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
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
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">30 Days</div>
              <div className="text-sm text-muted">Free Support</div>
            </div>
          </div>

          {/* Primary CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 glass-button px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all"
            >
              Get Your Free Quote
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

          <p className="text-sm text-muted mt-6">
            ✓ Free consultation • ✓ No obligation • ✓ Custom quote in 24 hours
          </p>
        </motion.section>

        {/* Who This Is For Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Is This Service Right for You?
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              This service is perfect if you&apos;re in any of these situations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: '🏢',
                title: 'Small Business Owners',
                description: 'You need a professional online presence to compete with larger companies and attract local customers.'
              },
              {
                icon: '🚀',
                title: 'Startups & Entrepreneurs',
                description: 'You\'re launching a new business and need a credible website to establish trust and generate leads.'
              },
              {
                icon: '👔',
                title: 'Service Providers',
                description: 'Consultants, coaches, agencies, or professionals who need to showcase expertise and book clients online.'
              },
              {
                icon: '🏪',
                title: 'Local Businesses',
                description: 'Restaurants, salons, clinics, or shops that want to be found online and attract more foot traffic.'
              },
              {
                icon: '📈',
                title: 'Growing Companies',
                description: 'Your business is expanding and your outdated website is holding you back from reaching new customers.'
              },
              {
                icon: '💼',
                title: 'Freelancers & Creatives',
                description: 'You need a professional portfolio site to showcase your work and attract better-paying clients.'
              }
            ].map((audience, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-6 rounded-2xl hover:shadow-xl transition-all"
              >
                <div className="text-5xl mb-4">{audience.icon}</div>
                <h3 className="text-xl font-bold mb-3">{audience.title}</h3>
                <p className="text-muted leading-relaxed">{audience.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12 p-6 glass-card rounded-2xl bg-primary/5 max-w-3xl mx-auto">
            <p className="text-lg font-semibold mb-4">
              Not sure if this is right for you?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              Schedule a Free Consultation
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </motion.section>

        {/* Problems It Solves Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Problems We Solve
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              These are the exact challenges our business websites eliminate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                problem: 'No Online Presence',
                impact: 'Customers can\'t find you online, so they choose competitors instead',
                solution: 'We create a professional website that ranks on Google and showcases your business 24/7',
                icon: '🔍'
              },
              {
                problem: 'Outdated, Unprofessional Design',
                impact: 'Visitors leave within seconds because your site looks untrustworthy',
                solution: 'Modern, clean design that builds instant credibility and keeps visitors engaged',
                icon: '🎨'
              },
              {
                problem: 'Not Mobile-Friendly',
                impact: 'You\'re losing 60%+ of potential customers who browse on phones',
                solution: 'Fully responsive design that works perfectly on all devices and screen sizes',
                icon: '📱'
              },
              {
                problem: 'Slow Loading Speed',
                impact: 'Every second of delay costs you customers and hurts your Google ranking',
                solution: 'Optimized for lightning-fast performance that keeps visitors and pleases Google',
                icon: '⚡'
              },
              {
                problem: 'No Clear Call-to-Action',
                impact: 'Visitors don\'t know what to do next, so they leave without contacting you',
                solution: 'Strategic CTAs that guide visitors to contact you, book appointments, or make purchases',
                icon: '🎯'
              },
              {
                problem: 'Difficult to Update',
                impact: 'You can\'t make simple changes without paying a developer every time',
                solution: 'Easy-to-use content management system so you can update content anytime',
                icon: '✏️'
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-8 rounded-2xl"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-4xl">{item.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-red-600 dark:text-red-400 mb-2">
                      ❌ {item.problem}
                    </h3>
                    <p className="text-muted mb-4 italic">{item.impact}</p>
                  </div>
                </div>
                <div className="pl-16">
                  <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2">
                    ✅ Our Solution:
                  </h4>
                  <p className="text-muted">{item.solution}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 glass-button px-8 py-4 rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all"
            >
              Solve These Problems Now
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </motion.section>

        {/* Benefits Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="glass-card p-10 rounded-3xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What You Get: Complete Business Website Package
              </h2>
              <p className="text-lg text-muted max-w-2xl mx-auto">
                Everything you need to establish a powerful online presence and start attracting customers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {[
                {
                  category: 'Design & Branding',
                  benefits: [
                    'Custom design tailored to your brand identity',
                    'Professional color scheme and typography',
                    'High-quality images and graphics',
                    'Logo integration and brand consistency',
                    'Modern, clean layout that builds trust'
                  ]
                },
                {
                  category: 'Core Features',
                  benefits: [
                    'Up to 7 pages (Home, About, Services, Contact, etc.)',
                    'Mobile-responsive design (works on all devices)',
                    'Contact forms with email notifications',
                    'Google Maps integration',
                    'Social media links and integration'
                  ]
                },
                {
                  category: 'Performance & SEO',
                  benefits: [
                    'Lightning-fast loading speeds',
                    'SEO-optimized structure and content',
                    'Google Analytics integration',
                    'Search engine submission',
                    'Meta tags and descriptions for all pages'
                  ]
                },
                {
                  category: 'Security & Reliability',
                  benefits: [
                    'SSL certificate (secure HTTPS)',
                    'Regular security updates',
                    'Spam protection on forms',
                    'Backup and recovery setup',
                    '99.9% uptime guarantee'
                  ]
                },
                {
                  category: 'Content Management',
                  benefits: [
                    'Easy-to-use content management system',
                    'Training on how to update your site',
                    'Documentation and video tutorials',
                    'Ability to add/edit pages yourself',
                    'Blog functionality (optional)'
                  ]
                },
                {
                  category: 'Support & Maintenance',
                  benefits: [
                    '30 days of free post-launch support',
                    'Bug fixes and technical assistance',
                    'Content updates during support period',
                    'Email and WhatsApp support',
                    'Optional ongoing maintenance plans'
                  ]
                }
              ].map((section, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-2xl"
                >
                  <h3 className="text-xl font-bold mb-4 text-primary">{section.category}</h3>
                  <ul className="space-y-3">
                    {section.benefits.map((benefit, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-3">
                        <span className="text-green-500 mt-1 flex-shrink-0">✓</span>
                        <span className="text-muted">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl">
              <p className="text-lg font-semibold mb-4">
                Plus: Source code, documentation, and full ownership of your website
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 glass-button px-8 py-4 rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all"
              >
                Get Started Today
                <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </motion.section>

        {/* Deliverables Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What You&apos;ll Receive
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Here&apos;s exactly what we deliver at the end of your project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '🌐',
                title: 'Live Website',
                description: 'Fully functional website deployed and live on your domain'
              },
              {
                icon: '📱',
                title: 'Mobile Version',
                description: 'Responsive design tested on all devices and browsers'
              },
              {
                icon: '📄',
                title: 'All Pages',
                description: 'Up to 7 custom pages with your content and branding'
              },
              {
                icon: '🎨',
                title: 'Design Files',
                description: 'Source files and design assets for future use'
              },
              {
                icon: '📊',
                title: 'Analytics Setup',
                description: 'Google Analytics configured and tracking visitors'
              },
              {
                icon: '🔒',
                title: 'SSL Certificate',
                description: 'Secure HTTPS connection for visitor trust and SEO'
              },
              {
                icon: '📚',
                title: 'Documentation',
                description: 'Complete guide on how to manage and update your site'
              },
              {
                icon: '🎓',
                title: 'Training Session',
                description: 'Live walkthrough showing you how to use your website'
              }
            ].map((deliverable, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="glass-card p-6 rounded-2xl text-center hover:shadow-xl transition-all"
              >
                <div className="text-5xl mb-4">{deliverable.icon}</div>
                <h3 className="text-lg font-bold mb-2">{deliverable.title}</h3>
                <p className="text-sm text-muted">{deliverable.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Process Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Proven 6-Step Process
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              From first call to final launch, here&apos;s exactly how we bring your website to life.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                step: '01',
                title: 'Discovery Call',
                duration: '30-60 minutes',
                description: 'We start with a free consultation to understand your business, goals, target audience, and vision for your website.',
                whatHappens: [
                  'Discuss your business and what makes you unique',
                  'Identify your target customers and their needs',
                  'Review competitor websites for inspiration',
                  'Define key features and functionality you need',
                  'Answer all your questions about the process'
                ],
                outcome: 'Clear understanding of your requirements and a custom proposal'
              },
              {
                step: '02',
                title: 'Planning & Strategy',
                duration: '2-3 days',
                description: 'We create a detailed plan including sitemap, wireframes, and content strategy tailored to your business goals.',
                whatHappens: [
                  'Create sitemap showing all pages and navigation',
                  'Design wireframes (basic layout sketches)',
                  'Plan content structure for each page',
                  'Define color scheme and design direction',
                  'Get your approval before moving forward'
                ],
                outcome: 'Approved plan and wireframes ready for design'
              },
              {
                step: '03',
                title: 'Design',
                duration: '3-5 days',
                description: 'Our designers create a beautiful, modern design that reflects your brand and appeals to your target customers.',
                whatHappens: [
                  'Design homepage mockup for your review',
                  'Incorporate your feedback and revisions',
                  'Design remaining pages once homepage approved',
                  'Ensure mobile-responsive design',
                  'Finalize all design elements'
                ],
                outcome: 'Complete design mockups approved and ready for development'
              },
              {
                step: '04',
                title: 'Development',
                duration: '5-7 days',
                description: 'We build your website using modern, reliable technology, ensuring it\'s fast, secure, and easy to manage.',
                whatHappens: [
                  'Convert designs into functional website',
                  'Add all content and images',
                  'Implement contact forms and features',
                  'Optimize for speed and performance',
                  'Set up content management system'
                ],
                outcome: 'Fully functional website ready for testing'
              },
              {
                step: '05',
                title: 'Testing & Refinement',
                duration: '2-3 days',
                description: 'Rigorous testing across all devices and browsers to ensure everything works perfectly before launch.',
                whatHappens: [
                  'Test on desktop, tablet, and mobile devices',
                  'Check all links, forms, and functionality',
                  'Verify loading speed and performance',
                  'Test on different browsers (Chrome, Safari, etc.)',
                  'Make final adjustments based on testing'
                ],
                outcome: 'Bug-free website ready for launch'
              },
              {
                step: '06',
                title: 'Launch & Training',
                duration: '1-2 days',
                description: 'We launch your website, train you on how to use it, and provide ongoing support to ensure your success.',
                whatHappens: [
                  'Deploy website to your live domain',
                  'Set up SSL certificate and security',
                  'Configure Google Analytics',
                  'Provide training session on managing your site',
                  'Hand over documentation and login details'
                ],
                outcome: 'Live website with you fully trained and supported'
              }
            ].map((phase, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-8 rounded-2xl"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-dark rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {phase.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-2xl font-bold">{phase.title}</h3>
                      <span className="text-sm text-muted bg-primary/10 px-3 py-1 rounded-full">
                        {phase.duration}
                      </span>
                    </div>
                    <p className="text-muted mb-4">{phase.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-primary mb-2">What happens:</h4>
                      <ul className="space-y-2">
                        {phase.whatHappens.map((item, iIdx) => (
                          <li key={iIdx} className="flex items-start gap-2 text-sm text-muted">
                            <span className="text-primary mt-0.5">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <h4 className="font-semibold text-green-700 dark:text-green-400 mb-1">
                        ✓ Outcome:
                      </h4>
                      <p className="text-sm text-green-600 dark:text-green-300">{phase.outcome}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12 p-6 glass-card rounded-2xl bg-primary/5">
            <p className="text-lg font-semibold mb-4">
              Total Timeline: 1-2 weeks from start to launch
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 glass-button px-8 py-4 rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all"
            >
              Start Your Project Today
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Everything you need to know about our Business Website service.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {[
              {
                question: 'What\'s included in the $499 starting price?',
                answer: 'The $499 package includes a professional 5-page website (Home, About, Services, Contact, and one additional page), mobile-responsive design, contact form, SEO optimization, SSL certificate, Google Analytics setup, and 30 days of free support. Additional pages and features can be added for an additional cost.'
              },
              {
                question: 'How long does it take to build my website?',
                answer: 'Most business websites are completed within 1-2 weeks from the day we start. The timeline depends on how quickly you provide content, feedback, and approvals. We\'ll give you a specific timeline during our discovery call based on your requirements.'
              },
              {
                question: 'Do I need to provide content and images?',
                answer: 'Yes, you\'ll need to provide your business content (text about your services, company info, etc.) and any specific images you want to use. However, we can help with content editing and provide stock images if needed. Professional copywriting and photography services are available as add-ons.'
              },
              {
                question: 'Will I be able to update the website myself?',
                answer: 'Absolutely! We build your website on an easy-to-use content management system (usually WordPress). We\'ll provide training, documentation, and video tutorials so you can make updates yourself. We\'re also available for support if you need help.'
              },
              {
                question: 'Is the website mobile-friendly?',
                answer: 'Yes, 100%! Every website we build is fully responsive, meaning it automatically adjusts to look perfect on desktops, tablets, and smartphones. We test on multiple devices before launch to ensure a great experience for all visitors.'
              },
              {
                question: 'Will my website be optimized for Google?',
                answer: 'Yes! We implement SEO best practices including proper page structure, meta tags, fast loading speeds, mobile optimization, and search engine submission. However, ranking on Google also depends on your content quality, ongoing SEO efforts, and competition in your industry.'
              },
              {
                question: 'Do you provide hosting and domain registration?',
                answer: 'We can help you set up hosting and register your domain, or work with your existing providers. We\'ll recommend reliable hosting options that fit your budget and needs. Hosting typically costs $10-30/month depending on your requirements.'
              },
              {
                question: 'What if I need changes after the website is launched?',
                answer: 'You get 30 days of free support after launch for any bug fixes or minor adjustments. After that, you can make changes yourself using the CMS, or we offer ongoing maintenance packages starting at $150/month for regular updates and support.'
              },
              {
                question: 'Can you add e-commerce functionality?',
                answer: 'Yes! If you need to sell products online, we can add e-commerce functionality. This would be a separate service (E-Commerce Solutions) starting at $1,299. We\'ll discuss your specific needs during the consultation.'
              },
              {
                question: 'What happens if I\'m not satisfied with the design?',
                answer: 'We include revision rounds at each stage to ensure you\'re happy with the direction. We won\'t move forward until you approve each phase. Our goal is 100% satisfaction, and we\'ll work with you until we get it right.'
              },
              {
                question: 'Do you offer payment plans?',
                answer: 'Yes! We typically require 50% upfront to start the project and 50% upon completion. For larger projects, we can discuss custom payment schedules. We accept bank transfers, credit cards, and online payments.'
              },
              {
                question: 'Will I own the website and all the code?',
                answer: 'Yes, absolutely! Once the project is complete and paid for, you own everything—the website, source code, design files, and all content. We\'ll transfer everything to you with full ownership rights.'
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

          <div className="text-center mt-12">
            <p className="text-muted mb-4">Have a different question?</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              Ask Us Anything
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </motion.section>

        {/* Pricing Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="glass-card p-10 rounded-3xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Investment & Packages
              </h2>
              <p className="text-lg text-muted max-w-2xl mx-auto">
                Choose the package that fits your needs and budget.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Starter',
                  price: '$499',
                  description: 'Perfect for new businesses',
                  features: [
                    '5 pages',
                    'Mobile responsive',
                    'Contact form',
                    'SEO basics',
                    'SSL certificate',
                    '30 days support'
                  ],
                  popular: false
                },
                {
                  name: 'Professional',
                  price: '$899',
                  description: 'Most popular choice',
                  features: [
                    '7 pages',
                    'Everything in Starter',
                    'Blog functionality',
                    'Advanced SEO',
                    'Social media integration',
                    'Email marketing setup',
                    '60 days support'
                  ],
                  popular: true
                },
                {
                  name: 'Premium',
                  price: '$1,499',
                  description: 'For growing businesses',
                  features: [
                    '10+ pages',
                    'Everything in Professional',
                    'Custom features',
                    'Advanced animations',
                    'Priority support',
                    'Performance optimization',
                    '90 days support'
                  ],
                  popular: false
                }
              ].map((pkg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`bg-white dark:bg-gray-800 p-8 rounded-2xl ${
                    pkg.popular ? 'ring-2 ring-primary shadow-2xl scale-105' : ''
                  }`}
                >
                  {pkg.popular && (
                    <div className="text-center mb-4">
                      <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-primary mb-2">{pkg.price}</div>
                  <p className="text-muted mb-6">{pkg.description}</p>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span className="text-muted">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`block w-full text-center px-6 py-3 rounded-xl font-semibold transition-all ${
                      pkg.popular
                        ? 'bg-gradient-to-r from-primary to-primary-dark text-white hover:shadow-lg'
                        : 'border-2 border-primary/30 text-primary hover:bg-primary/5'
                    }`}
                  >
                    Get Started
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-8 p-6 bg-white dark:bg-gray-800 rounded-2xl">
              <p className="text-muted mb-2">
                All packages include: Free consultation, custom design, training, and documentation
              </p>
              <p className="text-sm text-muted">
                Need something custom? <Link href="/contact" className="text-primary font-semibold hover:underline">Contact us</Link> for a personalized quote.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Testimonials Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              See how our business websites have helped companies like yours succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Owner, Johnson Consulting',
                text: 'MultiMian built us a beautiful website that perfectly represents our brand. We\'ve seen a 150% increase in inquiries since launch. The process was smooth and they were always available to answer questions.',
                rating: 5,
                result: '+150% Inquiries',
                industry: 'Consulting'
              },
              {
                name: 'Ahmed Khan',
                role: 'Founder, TechStart Solutions',
                text: 'As a startup, we needed a professional website quickly and affordably. MultiMian delivered exactly what we needed in just 10 days. The site looks amazing and works perfectly on mobile.',
                rating: 5,
                result: 'Launched in 10 Days',
                industry: 'Technology'
              },
              {
                name: 'Lisa Martinez',
                role: 'Director, GrowthCo Marketing',
                text: 'We\'ve worked with several web developers, but MultiMian stands out. Professional, responsive, and they actually understand business needs. Our new site has significantly improved our credibility.',
                rating: 5,
                result: 'Improved Credibility',
                industry: 'Marketing'
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
                <div className="flex items-center justify-between">
                  <div className="text-center py-2 px-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-lg font-bold text-sm">
                    {testimonial.result}
                  </div>
                  <div className="text-xs text-muted">{testimonial.industry}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/testimonials" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
              Read More Success Stories
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </motion.section>

        {/* Final CTA Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="glass-card p-12 rounded-3xl bg-gradient-to-r from-primary/10 to-primary-dark/10 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Ready to Get Your Professional Business Website?
              </h2>
              <p className="text-xl md:text-2xl text-muted mb-4">
                Stop losing customers to competitors. Get a website that works as hard as you do—bringing you leads and sales 24/7.
              </p>
              
              <div className="flex items-center justify-center gap-3 text-sm text-muted mb-8">
                <div className="flex items-center gap-2">
                  <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                  <span>Free consultation</span>
                </div>
                <span>•</span>
                <span>Custom quote in 24 hours</span>
                <span>•</span>
                <span>No obligation</span>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 glass-button px-10 py-5 rounded-xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all"
                >
                  Get Your Free Quote Now
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
                  <div className="font-semibold mb-1">View Examples</div>
                  <Link href="/portfolio" className="text-primary hover:underline">
                    See Our Portfolio
                  </Link>
                </div>
              </div>

              <div className="mt-8 p-6 bg-white dark:bg-gray-800 rounded-2xl">
                <h3 className="font-bold mb-4">Why Choose MultiMian?</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <div className="font-semibold text-primary">✓ Fixed Pricing</div>
                    <div className="text-muted">No hidden fees</div>
                  </div>
                  <div>
                    <div className="font-semibold text-primary">✓ Fast Delivery</div>
                    <div className="text-muted">1-2 weeks</div>
                  </div>
                  <div>
                    <div className="font-semibold text-primary">✓ Full Ownership</div>
                    <div className="text-muted">You own everything</div>
                  </div>
                  <div>
                    <div className="font-semibold text-primary">✓ Free Support</div>
                    <div className="text-muted">30 days included</div>
                  </div>
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
