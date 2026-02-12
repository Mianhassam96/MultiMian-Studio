import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Head from 'next/head'
import Link from 'next/link'

const faqCategories = [
  {
    category: "General Questions",
    questions: [
      {
        q: "What services do you offer?",
        a: "We specialize in business websites, custom web applications, e-commerce solutions, and ongoing maintenance. Whether you need a simple website or a complex web app, we can help."
      },
      {
        q: "How much does a website cost?",
        a: "Our starter websites begin at $499. Business websites start at $1,499. Custom web applications start at $2,500. Final cost depends on your specific requirements. Schedule a free consultation for an accurate quote."
      },
      {
        q: "How long does it take to build a website?",
        a: "Most business websites take 2-4 weeks. Custom web applications typically take 4-8 weeks depending on complexity. We'll give you an accurate timeline during our discovery call."
      },
      {
        q: "Do I need to provide content and images?",
        a: "You can provide your own content, or we can help. We offer content writing services starting at $100/page. For images, we can use stock photos or work with your provided materials."
      },
      {
        q: "Will my website work on mobile devices?",
        a: "Absolutely. All our websites are fully responsive and optimized for mobile, tablet, and desktop devices."
      }
    ]
  },
  {
    category: "Process Questions",
    questions: [
      {
        q: "What's your development process?",
        a: "We follow a proven 6-step process: Discovery Call → Strategy & Planning → Design & Development → Testing & Launch → Training & Support. You'll be involved and updated throughout."
      },
      {
        q: "How involved do I need to be?",
        a: "As much or as little as you want. We need your input during discovery and design approval, but we handle all the technical work. Most clients spend 2-4 hours total on their project."
      },
      {
        q: "Can I see progress during development?",
        a: "Yes! We provide regular updates and a staging site where you can see your project as it develops."
      },
      {
        q: "What if I don't like the design?",
        a: "All packages include revision rounds. We work with you until you're completely satisfied with the design."
      }
    ]
  },
  {
    category: "Technical Questions",
    questions: [
      {
        q: "What technologies do you use?",
        a: "We use modern, proven technologies including React, Next.js, Node.js, and more. We choose the best tools for your specific needs."
      },
      {
        q: "Will I own the website?",
        a: "Yes. You own all the code, design, and content. We provide full ownership and can transfer everything to you."
      },
      {
        q: "Do you provide hosting?",
        a: "We can recommend reliable hosting providers and help with setup. Hosting costs are separate (typically $5-50/month depending on your needs)."
      },
      {
        q: "Is my website secure?",
        a: "Yes. We implement security best practices, include SSL certificates, and follow industry standards to keep your site secure."
      },
      {
        q: "Can you help with SEO?",
        a: "Yes. All our websites include basic SEO optimization. We also offer advanced SEO packages for comprehensive optimization."
      }
    ]
  },
  {
    category: "Support Questions",
    questions: [
      {
        q: "What's included in post-launch support?",
        a: "All packages include 30-90 days of support (depending on package). This covers bug fixes, minor adjustments, and technical assistance."
      },
      {
        q: "What happens after the support period ends?",
        a: "We offer affordable monthly maintenance packages starting at $150/month, or hourly rates for occasional updates."
      },
      {
        q: "Can you maintain my existing website?",
        a: "Yes! We can take over maintenance, updates, and optimization for websites built by others."
      },
      {
        q: "Do you offer training?",
        a: "Yes. We provide training on how to update content, add pages, and manage your website."
      }
    ]
  },
  {
    category: "Payment Questions",
    questions: [
      {
        q: "What are your payment terms?",
        a: "We typically require 50% upfront to start the project and 50% upon completion. Custom payment plans available for larger projects."
      },
      {
        q: "Do you offer refunds?",
        a: "We offer a satisfaction guarantee. If you're not happy with our work during the development phase, we'll make it right or refund your deposit."
      },
      {
        q: "Are there any hidden fees?",
        a: "No. Our quotes include everything needed to complete your project. Any additional costs (like hosting or premium plugins) are discussed upfront."
      }
    ]
  },
  {
    category: "Existing Website Questions",
    questions: [
      {
        q: "Can you redesign my existing website?",
        a: "Absolutely. We can redesign, rebuild, or optimize your current website."
      },
      {
        q: "Can you add features to my current site?",
        a: "Yes. We can add new functionality, integrate tools, or enhance your existing website."
      },
      {
        q: "My website is slow. Can you fix it?",
        a: "Yes. We offer speed optimization services starting at $250. We'll analyze your site and implement improvements."
      },
      {
        q: "My website was hacked. Can you help?",
        a: "Yes. We can clean up hacked sites, implement security measures, and prevent future attacks."
      }
    ]
  }
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-card rounded-xl overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 text-left flex items-center justify-between hover:bg-primary/5 transition-colors"
      >
        <span className="font-semibold text-lg pr-4">{question}</span>
        <motion.svg
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="w-6 h-6 text-primary flex-shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </motion.svg>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 text-muted leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  return (
    <>
      <Head>
        <title>FAQ - Frequently Asked Questions</title>
        <meta name="description" content="Find answers to common questions about our web development services, pricing, process, and support. Get the information you need to make an informed decision." />
        <meta name="keywords" content="web development FAQ, website cost, development process, web design questions" />
      </Head>

      <div className="py-12">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-20 container"
        >
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20">
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-sm font-medium text-primary">Got Questions? We Have Answers</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-muted leading-relaxed mb-8">
            Everything you need to know about working with MultiMian. Can&apos;t find what you&apos;re looking for? Reach out to us directly.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 border border-primary/20 rounded-xl text-primary hover:bg-primary/5 transition-all font-medium"
          >
            Contact Us
            <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
            </svg>
          </Link>
        </motion.section>

        {/* FAQ Categories */}
        <div className="container max-w-4xl mx-auto">
          {faqCategories.map((category, idx) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="mb-16 last:mb-0"
            >
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <span className="w-10 h-10 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center text-white text-lg">
                  {idx + 1}
                </span>
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.questions.map((item) => (
                  <FAQItem key={item.q} question={item.q} answer={item.a} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 container"
        >
          <div className="glass-card p-12 rounded-3xl text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-xl text-muted mb-8 max-w-2xl mx-auto">
              We&apos;re here to help. Get in touch and we&apos;ll answer any questions you have about your project.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 glass-button px-8 py-4 rounded-xl font-medium"
              >
                Get Your Free Consultation
                <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                </svg>
              </Link>
              <a
                href="https://wa.me/923258831437"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-all font-medium"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </>
  )
}
