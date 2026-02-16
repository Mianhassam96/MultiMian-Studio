import Head from 'next/head'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Stats from '../components/Stats'
import ServiceCard from '../components/ServiceCard'
import TestimonialsNew from '../components/TestimonialsNew'
import CTABanner from '../components/CTABanner'
import { motion } from 'framer-motion'

export default function Home() {
  const services = [
    {
      icon: '🌐',
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies like React, Next.js, and Node.js.',
      link: '/services#web-development'
    },
    {
      icon: '⚡',
      title: 'SaaS Development',
      description: 'Scalable SaaS platforms with subscription management, user authentication, and cloud infrastructure.',
      link: '/services#saas-development'
    },
    {
      icon: '🛒',
      title: 'E-Commerce Solutions',
      description: 'Complete online stores with payment integration, inventory management, and order tracking.',
      link: '/services#ecommerce'
    },
    {
      icon: '📱',
      title: 'Responsive Design',
      description: 'Mobile-first designs that work perfectly on all devices, from smartphones to desktops.',
      link: '/services#responsive-design'
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive user interfaces designed to convert visitors into customers.',
      link: '/services#ui-ux'
    },
    {
      icon: '🔧',
      title: 'Maintenance & Support',
      description: 'Regular updates, security monitoring, backups, and technical support for your peace of mind.',
      link: '/services#maintenance'
    }
  ]

  return (
    <>
      <Head>
        <title>MultiMian - Professional Web Development Services | React, Next.js, Node.js</title>
        <meta name="description" content="MultiMian offers professional web development services. Custom websites, SaaS applications, e-commerce solutions built with React, Next.js, and Node.js. Founded by Mian Hassam." />
        <meta name="keywords" content="web development, React, Next.js, Node.js, SaaS development, e-commerce, MultiMian, Mian Hassam, custom websites, web applications" />
        <meta property="og:title" content="MultiMian - Professional Web Development Services" />
        <meta property="og:description" content="Custom websites and web applications built with modern technologies. React, Next.js, Node.js development services." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://mianhassam96.github.io/MultiMian-Studio/" />
      </Head>

      <Hero />
      
      <Features />
      
      <Stats />

      {/* Services Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive web development solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <ServiceCard title={service.title} icon={service.icon}>
                  <p>{service.description}</p>
                  <a href={service.link} className="inline-flex items-center gap-2 mt-4 text-blue-600 dark:text-blue-400 font-semibold hover:gap-3 transition-all">
                    Learn More
                    <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </ServiceCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsNew />
      
      <CTABanner />
    </>
  )
}
