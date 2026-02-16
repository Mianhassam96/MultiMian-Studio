import { motion } from 'framer-motion'
import Head from 'next/head'
import Link from 'next/link'

const services = [
  {
    category: "Web Development",
    icon: "🌐",
    description: "Professional websites that establish credibility and attract customers",
    slug: "web-development",
    services: [
      {
        title: "Business Websites",
        slug: "business-websites",
        description: "A professional website designed to showcase your business, build trust, and convert visitors into customers. Built with modern technologies like React and Next.js for optimal performance and SEO.",
        whoItsFor: "Small businesses, service providers, local businesses, professionals, consultants, agencies",
        benefits: [
          "Custom design tailored to your brand identity",
          "Mobile-responsive (works perfectly on all devices)",
          "Lightning-fast loading speeds (<2 seconds)",
          "SEO-optimized structure for Google rankings",
          "Contact forms and lead capture systems",
          "Easy content management system (CMS)",
          "Security and SSL certificate included",
          "Google Analytics and tracking integration",
          "Social media integration",
          "Professional email setup"
        ],
        features: [
          "Homepage with hero section and CTAs",
          "About page with team/founder info",
          "Services/Products showcase",
          "Contact page with form and map",
          "Blog section (optional)",
          "Testimonials and reviews section",
          "Portfolio/Gallery (if applicable)"
        ],
        results: "Increased credibility, more qualified leads, better search visibility, professional brand image, 24/7 online presence",
        caseStudy: "Helped a local consulting firm increase leads by 150% within 3 months of launch",
        investment: "Starting at $499",
        timeline: "1-2 weeks",
        techStack: "Next.js, React, Tailwind CSS, Node.js"
      },
      {
        title: "Portfolio Websites",
        slug: "portfolio-websites",
        description: "Showcase your work with a stunning portfolio that highlights your skills and attracts ideal clients. Perfect for personal branding and establishing authority in your field.",
        whoItsFor: "Freelancers, creatives, photographers, designers, consultants, developers, artists, content creators",
        benefits: [
          "Eye-catching, modern design that stands out",
          "Interactive project galleries with filters",
          "Detailed case study sections",
          "Client testimonial displays",
          "Contact form integration",
          "Blog functionality for thought leadership",
          "Social media integration",
          "Fast performance and smooth animations",
          "Resume/CV download option",
          "Skills and expertise showcase"
        ],
        features: [
          "Hero section with professional photo",
          "About me/bio section",
          "Portfolio grid with categories",
          "Individual project pages",
          "Client testimonials slider",
          "Contact form",
          "Blog (optional)",
          "Downloadable resume"
        ],
        results: "Professional presentation, attract better clients, showcase expertise, establish authority, increase rates",
        caseStudy: "Helped a freelance designer land 3 high-value clients within the first month",
        investment: "Starting at $399",
        timeline: "1-2 weeks",
        techStack: "Next.js, React, Framer Motion, Tailwind CSS"
      },
      {
        title: "Landing Pages",
        slug: "landing-pages",
        description: "High-converting landing pages designed for specific campaigns, products, or services. Optimized for paid ads (Google Ads, Facebook Ads) and organic traffic.",
        whoItsFor: "Marketers, product launches, lead generation, event promotions, SaaS companies, course creators",
        benefits: [
          "Conversion-focused design with clear CTAs",
          "A/B testing ready for optimization",
          "Form integration with email marketing tools",
          "Analytics and conversion tracking",
          "Fast deployment (3-5 days)",
          "Mobile-optimized for all devices",
          "Social proof and testimonials",
          "Trust badges and security indicators",
          "Exit-intent popups (optional)",
          "Live chat integration (optional)"
        ],
        features: [
          "Compelling hero section with value proposition",
          "Benefits and features section",
          "Social proof (testimonials, reviews, stats)",
          "Pricing or offer section",
          "FAQ section",
          "Strong call-to-action",
          "Lead capture form",
          "Thank you page"
        ],
        results: "Higher conversion rates (avg 25-40%), better campaign ROI, more qualified leads, lower cost per acquisition",
        caseStudy: "Increased conversion rate from 12% to 38% for a SaaS product launch",
        investment: "Starting at $299",
        timeline: "3-5 days",
        techStack: "Next.js, React, Tailwind CSS, Analytics"
      }
    ]
  },
  {
    category: "Web Applications",
    icon: "⚡",
    description: "Custom solutions that automate processes and scale your business",
    slug: "web-applications",
    services: [
      {
        title: "Custom Web Apps",
        slug: "custom-web-apps",
        description: "Tailored web applications built specifically for your business needs and workflows. From CRM systems to project management tools, we build scalable solutions that grow with you.",
        whoItsFor: "Businesses with unique processes, companies needing automation, startups building MVPs, enterprises needing custom tools",
        benefits: [
          "Custom functionality designed for your workflow",
          "User authentication and role-based access",
          "Database design and optimization",
          "Admin dashboards for management",
          "Third-party API integrations",
          "Scalable cloud architecture",
          "Advanced security features",
          "Documentation and training included",
          "Real-time data synchronization",
          "Mobile-responsive interface"
        ],
        features: [
          "User authentication system",
          "Admin dashboard",
          "Database management",
          "API integrations",
          "Reporting and analytics",
          "Email notifications",
          "File upload/management",
          "Search and filtering"
        ],
        results: "Automated workflows, time savings (20+ hours/week), reduced errors, better data management, competitive advantage, improved team productivity",
        caseStudy: "Built a custom CRM that saved a sales team 25 hours per week in manual data entry",
        investment: "Starting at $2,500",
        timeline: "4-8 weeks",
        techStack: "Next.js, Node.js, MongoDB/PostgreSQL, AWS"
      },
      {
        title: "SaaS Products",
        slug: "saas-products",
        description: "Software-as-a-Service platforms with subscription management, multi-tenant architecture, and scalable infrastructure. Turn your idea into a recurring revenue business.",
        whoItsFor: "Entrepreneurs building SaaS, businesses offering software services, startups, tech companies",
        benefits: [
          "Multi-tenant architecture for scalability",
          "Subscription and billing management",
          "Payment gateway integration (Stripe, PayPal)",
          "User management and permissions",
          "RESTful API access for integrations",
          "Analytics dashboard with key metrics",
          "Scalable cloud infrastructure",
          "Email automation and notifications",
          "Onboarding flow for new users",
          "Admin panel for management"
        ],
        features: [
          "User registration and authentication",
          "Subscription plans and billing",
          "Payment processing",
          "User dashboard",
          "Admin panel",
          "API documentation",
          "Email notifications",
          "Analytics and reporting",
          "Team/workspace management",
          "Integrations marketplace"
        ],
        results: "Recurring revenue model, scalable business, automated billing, reduced support costs, global reach",
        caseStudy: "Launched a SaaS platform that reached $10k MRR within 6 months",
        investment: "Starting at $5,000",
        timeline: "8-12 weeks",
        techStack: "Next.js, Node.js, PostgreSQL, Stripe, AWS/Vercel"
      },
      {
        title: "Dashboards & Admin Panels",
        slug: "dashboards-admin-panels",
        description: "Powerful dashboards to visualize data, manage operations, and make informed decisions. Real-time analytics and reporting for your business.",
        whoItsFor: "Businesses needing data visualization, operations management, team collaboration, executives needing insights",
        benefits: [
          "Real-time data visualization with charts",
          "Custom reports and exports",
          "User role management and permissions",
          "Export functionality (PDF, Excel, CSV)",
          "Responsive design for all devices",
          "Secure access with authentication",
          "API integration with existing systems",
          "Automated report generation",
          "Customizable widgets and layouts",
          "Dark mode support"
        ],
        features: [
          "Interactive charts and graphs",
          "Data tables with sorting/filtering",
          "User management",
          "Report generation",
          "Export capabilities",
          "Real-time updates",
          "Notifications and alerts",
          "Custom widgets"
        ],
        results: "Better decision making, improved efficiency, data-driven insights, time savings, reduced manual reporting",
        caseStudy: "Created an analytics dashboard that reduced reporting time from 8 hours to 15 minutes per week",
        investment: "Starting at $1,500",
        timeline: "3-6 weeks",
        techStack: "Next.js, React, Chart.js, Node.js, MongoDB"
      }
    ]
  },
  {
    category: "E-Commerce Solutions",
    icon: "🛒",
    description: "Complete online stores that make selling easy and boost revenue",
    slug: "ecommerce-solutions",
    services: [
      {
        title: "Online Stores",
        slug: "online-stores",
        description: "Full-featured e-commerce websites with everything you need to sell products online. From product catalogs to secure checkout, we build stores that convert browsers into buyers.",
        whoItsFor: "Retailers, product-based businesses, dropshipping businesses, wholesalers, brands launching online",
        benefits: [
          "Product catalog management with categories",
          "Shopping cart with real-time updates",
          "Secure checkout process",
          "Payment gateway integration (Stripe, PayPal, etc.)",
          "Inventory management system",
          "Order tracking and management",
          "Customer accounts and wishlists",
          "Email notifications (order confirmations, shipping)",
          "Mobile-responsive design",
          "SEO-optimized product pages",
          "Discount codes and promotions",
          "Shipping calculator integration"
        ],
        features: [
          "Product catalog with search",
          "Shopping cart",
          "Secure checkout",
          "Payment processing",
          "Order management",
          "Customer accounts",
          "Inventory tracking",
          "Shipping integration",
          "Tax calculation",
          "Analytics dashboard"
        ],
        results: "Increased sales, 24/7 revenue generation, expanded market reach, reduced overhead costs, automated order processing",
        caseStudy: "Helped an online retailer increase sales by 200% and reduce order processing time by 80%",
        investment: "Starting at $1,299",
        timeline: "3-4 weeks",
        techStack: "Next.js, Stripe, Node.js, MongoDB, Tailwind CSS"
      },
      {
        title: "Payment Integration",
        slug: "payment-integration",
        description: "Secure payment processing with multiple payment methods and gateways. Accept credit cards, digital wallets, and international payments with confidence.",
        whoItsFor: "Any business accepting online payments, subscription services, e-commerce stores, service providers",
        benefits: [
          "Multiple payment gateways (Stripe, PayPal, Square)",
          "Secure PCI compliance",
          "Recurring payments and subscriptions",
          "Refund and dispute management",
          "Transaction reporting and analytics",
          "International payment support",
          "Digital wallet integration (Apple Pay, Google Pay)",
          "Fraud detection and prevention",
          "Automated invoicing",
          "Payment webhooks for automation"
        ],
        features: [
          "Payment gateway setup",
          "Checkout flow",
          "Subscription billing",
          "Invoice generation",
          "Payment history",
          "Refund processing",
          "Security compliance",
          "Multi-currency support"
        ],
        results: "Secure transactions, customer trust, flexible payment options, reduced cart abandonment, global sales capability",
        caseStudy: "Integrated Stripe payments reducing checkout abandonment by 35%",
        investment: "Starting at $500",
        timeline: "1-2 weeks",
        techStack: "Stripe API, PayPal SDK, Node.js, Webhooks"
      }
    ]
  },
  {
    category: "Maintenance & Optimization",
    icon: "🔧",
    description: "Keep your website fast, secure, and performing at its best",
    slug: "maintenance-optimization",
    services: [
      {
        title: "Speed Optimization",
        slug: "speed-optimization",
        description: "Make your website lightning fast for better user experience and SEO. We optimize images, code, and server configuration to achieve sub-2-second load times.",
        whoItsFor: "Websites with slow loading times affecting conversions, businesses losing traffic to slow sites, anyone wanting better SEO rankings",
        benefits: [
          "Improved page load speeds (target: <2 seconds)",
          "Better search engine rankings (Core Web Vitals)",
          "Reduced bounce rates (up to 50% improvement)",
          "Enhanced user experience",
          "Image optimization and lazy loading",
          "Code minification and compression",
          "CDN implementation",
          "Database query optimization",
          "Caching strategies",
          "Performance monitoring setup"
        ],
        features: [
          "Performance audit",
          "Image optimization",
          "Code optimization",
          "Caching setup",
          "CDN configuration",
          "Database optimization",
          "Before/after metrics",
          "Ongoing monitoring"
        ],
        results: "Higher conversions (avg 20% increase), better SEO rankings, improved user satisfaction, reduced server costs",
        caseStudy: "Reduced page load time from 8 seconds to 1.2 seconds, increasing conversions by 45%",
        investment: "Starting at $250",
        timeline: "1 week",
        techStack: "Next.js optimization, CDN, Image optimization, Caching"
      },
      {
        title: "Website Maintenance",
        slug: "website-maintenance",
        description: "Regular updates, backups, security monitoring, and technical support. Focus on your business while we keep your website running smoothly.",
        whoItsFor: "Existing website owners who want peace of mind, businesses without technical staff, growing companies",
        benefits: [
          "Regular software updates and patches",
          "Security monitoring and threat detection",
          "Automated backup management (daily/weekly)",
          "Bug fixes and troubleshooting",
          "Performance monitoring and optimization",
          "Priority support (response within 24 hours)",
          "Content updates (text, images)",
          "Uptime monitoring (99.9% guarantee)",
          "Monthly reports",
          "Emergency support included"
        ],
        features: [
          "Software updates",
          "Security scans",
          "Backups",
          "Bug fixes",
          "Performance monitoring",
          "Support tickets",
          "Content updates",
          "Monthly reports"
        ],
        results: "Peace of mind, reduced downtime (99.9% uptime), secure website, always up-to-date, professional support",
        caseStudy: "Prevented 3 security breaches and maintained 99.98% uptime for a client over 12 months",
        investment: "$150/month",
        timeline: "Ongoing",
        techStack: "Monitoring tools, Backup systems, Security tools"
      },
      {
        title: "Website Redesign",
        slug: "website-redesign",
        description: "Modernize your website with fresh design and improved functionality. Transform your outdated site into a modern, high-performing digital asset.",
        whoItsFor: "Businesses with outdated websites needing a refresh, companies rebranding, sites with poor conversion rates",
        benefits: [
          "Modern, contemporary design",
          "Improved user experience (UX)",
          "Mobile responsiveness",
          "Better conversion rates",
          "Updated technology stack",
          "SEO improvements",
          "Faster loading speeds",
          "Enhanced security",
          "Content migration included",
          "Training on new system"
        ],
        features: [
          "Design mockups",
          "Content migration",
          "New features",
          "Mobile optimization",
          "SEO optimization",
          "Testing and QA",
          "Training",
          "Launch support"
        ],
        results: "Increased credibility, better conversions (avg 30% increase), competitive advantage, improved brand perception",
        caseStudy: "Redesigned a 5-year-old website, increasing leads by 180% and reducing bounce rate by 60%",
        investment: "Starting at $799",
        timeline: "2-3 weeks",
        techStack: "Next.js, React, Tailwind CSS, Modern frameworks"
      }
    ]
  }
]

export default function Services() {
  return (
    <>
      <Head>
        <title>Web Development Services - Custom Websites & Web Applications | MultiMian</title>
        <meta name="description" content="Professional web development services by MultiMian. Custom business websites, SaaS applications, e-commerce stores, and web apps built with React, Next.js, and Node.js. Get a free consultation today." />
        <meta name="keywords" content="web development services, custom web development, web application development, e-commerce development, SaaS development, React development, Next.js development, Node.js development, business website design, landing page design, MultiMian, Mian Hassam" />
        <meta property="og:title" content="Web Development Services - Custom Websites & Web Applications | MultiMian" />
        <meta property="og:description" content="Transform your business with professional web development. From business websites to complex SaaS platforms, we build scalable solutions that drive results." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://mianhassam96.github.io/MultiMian-Studio/services" />
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

        {/* Why MultiMian Section - NEW */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Businesses Trust MultiMian</h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              We don&apos;t just build websites—we build digital assets that grow your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🎨',
                title: 'Modern UI/UX Design',
                description: 'Beautiful, intuitive interfaces that users love. We follow the latest design trends and best practices to create experiences that convert.'
              },
              {
                icon: '🔍',
                title: 'SEO Optimized Architecture',
                description: 'Built from the ground up for search engines. Clean code, fast loading, proper meta tags, and structured data for better rankings.'
              },
              {
                icon: '⚡',
                title: 'Lightning Fast Performance',
                description: 'Sub-2-second load times guaranteed. We optimize every aspect—images, code, and server configuration—for maximum speed.'
              },
              {
                icon: '📱',
                title: 'Mobile-First Development',
                description: 'Perfect experience on every device. With 60%+ of traffic from mobile, we ensure your site works flawlessly on all screens.'
              },
              {
                icon: '🔐',
                title: 'Secure & Scalable Code',
                description: 'Enterprise-grade security and architecture. Your website is built to handle growth and protect your data.'
              },
              {
                icon: '🤝',
                title: 'Ongoing Support & Maintenance',
                description: 'We&apos;re here for the long haul. Get priority support, regular updates, and peace of mind knowing we&apos;ve got your back.'
              }
            ].map((reason, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-6 rounded-2xl hover:shadow-xl hover:scale-105 transition-all group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{reason.icon}</div>
                <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors">{reason.title}</h3>
                <p className="text-muted leading-relaxed">{reason.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              Learn More About MultiMian
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
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
                  className="glass-card p-8 rounded-2xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 group"
                >
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-muted mb-6">{service.description}</p>
                  
                  <div className="mb-4 flex items-center gap-2 text-sm flex-wrap">
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full font-medium">
                      ✓ Proven Solution
                    </span>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full font-medium">
                      Fixed Price
                    </span>
                    {service.techStack && (
                      <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 rounded-full font-medium text-xs">
                        {service.techStack.split(',')[0]}
                      </span>
                    )}
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-primary mb-2">Perfect for:</h4>
                    <p className="text-sm text-muted">{service.whoItsFor}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-primary mb-3">What you get:</h4>
                    <ul className="space-y-2 max-h-48 overflow-y-auto custom-scrollbar">
                      {service.benefits.map((benefit, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2 text-sm text-muted">
                          <span className="text-primary mt-0.5 flex-shrink-0">✓</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {service.features && (
                    <div className="mb-6">
                      <h4 className="font-semibold text-primary mb-3">Key Features:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.features.slice(0, 6).map((feature, fIdx) => (
                          <span key={fIdx} className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-md text-muted">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="mb-6 p-4 bg-primary/5 rounded-lg border border-primary/10">
                    <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                      <span>📈</span> Results you can expect:
                    </h4>
                    <p className="text-sm text-muted">{service.results}</p>
                  </div>

                  {service.caseStudy && (
                    <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/10 rounded-lg border border-green-200 dark:border-green-900/30">
                      <h4 className="font-semibold text-green-700 dark:text-green-400 mb-2 flex items-center gap-2">
                        <span>💡</span> Real Result:
                      </h4>
                      <p className="text-sm text-green-700 dark:text-green-400">{service.caseStudy}</p>
                    </div>
                  )}

                  <div className="flex items-center justify-between mb-6 pb-6 border-b border-gray-200 dark:border-gray-700">
                    <div>
                      <div className="text-sm text-muted">Investment</div>
                      <div className="text-xl font-bold text-primary">{service.investment}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-muted">Timeline</div>
                      <div className="text-lg font-semibold">{service.timeline}</div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Link 
                      href="/contact" 
                      className="flex-1 text-center px-6 py-3 bg-gradient-to-r from-primary to-primary-dark text-white rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all"
                    >
                      Start Your Project →
                    </Link>
                    {service.slug && (
                      <Link
                        href={`/services/${service.slug}`}
                        className="px-6 py-3 border-2 border-primary/30 rounded-xl text-primary hover:bg-primary/5 transition-all font-semibold"
                      >
                        Learn More
                      </Link>
                    )}
                  </div>
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
