import { useState } from 'react'
import { motion } from 'framer-motion'
import Head from 'next/head'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  function submit(e: React.FormEvent) {
    e.preventDefault()
    // Create mailto link with form data
    const subject = encodeURIComponent(`Contact from ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)
    window.location.href = `mailto:mianhassam96@gmail.com?subject=${subject}&body=${body}`
    
    // Show success message
    setStatus('sent')
    setTimeout(() => {
      setName('')
      setEmail('')
      setMessage('')
      setStatus('idle')
    }, 3000)
  }

  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'mianhassam96@gmail.com',
      href: 'mailto:mianhassam96@gmail.com'
    },
    {
      icon: '📱',
      label: 'Phone',
      value: '+92 325 883 1437',
      href: 'tel:+923258831437'
    },
    {
      icon: '💬',
      label: 'WhatsApp',
      value: '+92 325 883 1437',
      href: 'https://wa.me/923258831437'
    },
    {
      icon: '📍',
      label: 'Location',
      value: 'Pakistan',
      href: '#'
    }
  ]

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Mianhassam96',
      icon: '🐙'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/mianhassam96/',
      icon: '💼'
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/mian.hassam.kz',
      icon: '📘'
    }
  ]

  return (
    <>
      <Head>
        <title>Contact - Get in Touch</title>
        <meta name="description" content="Get in touch with us for your web development project. Contact via email, phone, or WhatsApp. Fast response within 24 hours." />
        <meta name="keywords" content="contact web developer, hire developer, web development inquiry, project consultation" />
      </Head>

      <div className="min-h-screen">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center py-16 md:py-24 bg-gradient-to-br from-primary/5 to-primary-dark/5"
      >
        <div className="container">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
            Let&apos;s Build Something Great Together
          </h1>
          <p className="text-xl md:text-2xl text-muted max-w-3xl mx-auto mb-8">
            Have a project in mind? Need a website that actually converts? Looking for a custom web solution? We&apos;re here to help. Get in touch and let&apos;s discuss how we can bring your vision to life.
          </p>
          <div className="inline-flex items-center gap-3 text-sm text-primary bg-primary/10 px-6 py-3 rounded-xl">
            <span>⚡</span>
            <span>We respond within 24 hours • Free consultation • No obligation</span>
          </div>
        </div>
      </motion.div>

      {/* Contact Info Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="py-16 bg-white dark:bg-gray-900"
      >
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, idx) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + idx * 0.1 }}
                className="text-center glass-card p-6 rounded-2xl hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{info.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{info.label}</h3>
                {info.href !== '#' ? (
                  <a
                    href={info.href}
                    className="text-primary hover:text-primary-dark transition-colors"
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-muted">{info.value}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Contact Form Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="py-16 bg-gray-50 dark:bg-gray-800"
      >
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="glass-card p-8 rounded-2xl"
              >
                <h2 className="text-3xl font-bold mb-6">Send a Message</h2>
                <form onSubmit={submit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name *
                    </label>
                    <input
                      id="name"
                      className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition"
                      placeholder="Your full name"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition"
                      placeholder="your.email@example.com"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition resize-none"
                      placeholder="Tell me about your project or idea..."
                      value={message}
                      onChange={e => setMessage(e.target.value)}
                      rows={6}
                      required
                    />
                  </div>
                  <div>
                    <button
                      className="w-full px-8 py-4 bg-primary text-white rounded-xl font-medium hover:bg-primary-dark transition"
                      type="submit"
                    >
                      Send Message via Email
                    </button>
                  </div>
                  {status === 'sent' && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-green-600 text-center"
                    >
                      Thanks! Your message has been sent successfully.
                    </motion.p>
                  )}
                  {status === 'error' && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-red-600 text-center"
                    >
                      There was an error sending your message. Please try again.
                    </motion.p>
                  )}
                </form>
              </motion.div>

              {/* Additional Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-2xl font-bold mb-4">Why Choose MultiMian?</h3>
                  <ul className="space-y-3 text-muted">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">✓</span>
                      <span>Results-driven solutions that grow your business</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">✓</span>
                      <span>Clear communication in plain English, no tech jargon</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">✓</span>
                      <span>Fast delivery without compromising quality</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">✓</span>
                      <span>Ongoing support and partnership after launch</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4">Follow Me</h3>
                  <div className="flex gap-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-primary/10 hover:bg-primary/20 rounded-xl flex items-center justify-center text-2xl transition"
                        title={social.name}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="glass-card p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-primary-dark/5">
                  <h3 className="text-xl font-bold mb-4">🎁 Free Consultation</h3>
                  <p className="text-muted mb-4">
                    Not sure where to start? Book a free 30-minute consultation. We&apos;ll discuss your goals, answer your questions, and provide honest advice—no sales pressure.
                  </p>
                  <p className="text-sm text-primary font-medium">
                    ⚡ Response time: Within 24 hours
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
    </>
  )
}
