import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'

export default function Landing() {
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <Head>
        <title>MultiMian - Revenue Engineering for Your Business</title>
        <meta name="description" content="High-performance, conversion-driven websites that turn traffic into revenue" />
      </Head>

      <div className="bg-[#0a0a0f] text-white min-h-screen">
        {/* Sticky CTA Button */}
        <motion.button
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: isSticky ? 0 : 100, opacity: isSticky ? 1 : 0 }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-full font-bold text-lg shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
          style={{ backgroundSize: '200% auto', animation: 'gradient 3s ease infinite' }}
          onClick={scrollToTop}
        >
          🚀 Book Your Free Strategy Call
        </motion.button>

        {/* SECTION 1 - HERO */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-20">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-black"></div>
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-600/30 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/30 rounded-full blur-[120px]"></div>
          
          <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-6">
                Your Website Is Either <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">Making You Money</span> Or Costing You Customers.
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto">
                If your site isn't generating consistent leads, sales, or growth — it's time to fix it.
              </p>
              <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
                MultiMian builds high-performance, conversion-driven websites and web applications that turn traffic into revenue.<br/>
                <span className="text-white font-semibold">We don't build "pretty websites." We build digital growth systems.</span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-6"
            >
              <a href="tel:+923258831437" className="inline-block">
                <button className="px-12 py-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-full font-bold text-2xl shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105" style={{ backgroundSize: '200% auto', animation: 'gradient 3s ease infinite' }}>
                  🚀 Book Your Free Strategy Call
                </button>
              </a>
              <p className="text-sm text-gray-400">No obligation. No pressure. Just clarity.</p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6">
                <button className="px-8 py-3 border-2 border-blue-500 rounded-full font-semibold hover:bg-blue-500/10 transition-all">
                  📂 View Case Studies
                </button>
                <span className="px-6 py-2 bg-red-600/20 border border-red-500 rounded-full text-sm font-semibold animate-pulse">
                  ⚠️ Limited project slots available each month
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 2 - PAIN AMPLIFICATION */}
        <section className="py-24 px-4 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-6xl font-black mb-8">Let's Be Honest…</h2>
              <p className="text-2xl text-gray-300 mb-12">Your Website Probably Has One of These Problems:</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                "It looks decent… but doesn't convert.",
                "It loads slowly and kills trust instantly.",
                "It has no clear call-to-action.",
                "It's not SEO optimized.",
                "It doesn't reflect your real brand value.",
                "It isn't built for scale."
              ].map((problem, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4 p-6 bg-red-900/10 border border-red-500/30 rounded-xl"
                >
                  <span className="text-3xl">❌</span>
                  <p className="text-lg text-gray-200">{problem}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="text-2xl font-bold text-red-400 mb-8">
                And every day you wait — you lose potential customers to competitors.
              </p>
              <a href="tel:+923258831437">
                <button className="px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-bold text-xl shadow-xl hover:shadow-blue-500/50 transition-all hover:scale-105">
                  Fix This Now →
                </button>
              </a>
            </motion.div>
          </div>
        </section>

        {/* SECTION 3 - VALUE SHIFT */}
        <section className="py-24 px-4 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]"></div>
          
          <div className="max-w-5xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-6xl font-black mb-8">
                This Is Not Web Design.<br/>
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  This Is Revenue Engineering.
                </span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-2xl p-8 md:p-12 mb-12"
            >
              <p className="text-xl text-gray-300 mb-8">At MultiMian, we combine:</p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Strategic messaging",
                  "Conversion psychology",
                  "Performance engineering",
                  "Modern tech stack",
                  "SEO-first architecture",
                  "Automation integration"
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <span className="text-2xl">•</span>
                    <span className="text-lg font-semibold">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="text-2xl md:text-3xl font-bold mb-4">
                So your website doesn't just sit online.
              </p>
              <p className="text-3xl md:text-4xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-8">
                It works. 24/7.
              </p>
              <a href="tel:+923258831437">
                <button className="px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-bold text-xl shadow-xl hover:shadow-purple-500/50 transition-all hover:scale-105">
                  Let's Build Your Growth System
                </button>
              </a>
            </motion.div>
          </div>
        </section>

        {/* SECTION 4 - WHAT YOU GET */}
        <section className="py-24 px-4 bg-black">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-6xl font-black mb-4">
                What Happens When You Work With Us
              </h2>
              <p className="text-xl text-gray-400">You get:</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                "A clear business-focused strategy",
                "A high-performance tech foundation",
                "A conversion-optimized UI",
                "Lightning-fast load speed",
                "Mobile-first experience",
                "SEO structured architecture",
                "Analytics & tracking integration",
                "Scalable backend systems"
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-xl hover:border-blue-400 transition-all hover:scale-105"
                >
                  <span className="text-2xl mb-3 block">✔</span>
                  <p className="text-lg font-semibold">{feature}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="text-2xl font-bold text-gray-300 mb-8">
                Not templates. Not guesswork. Not shortcuts.
              </p>
            </motion.div>
          </div>
        </section>

        {/* SECTION 5 - PROOF & AUTHORITY */}
        <section className="py-24 px-4 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12"
            >
              {[
                { number: "50+", label: "Projects Delivered" },
                { number: "5.0", label: "Client Rating" },
                { number: "30+", label: "Businesses Served" },
                { number: "<2s", label: "Load Speed Standard" }
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-5xl md:text-6xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm md:text-base text-gray-400 font-semibold">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="text-3xl md:text-4xl font-black mb-8">
                Results aren't accidental. <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">They're engineered.</span>
              </p>
            </motion.div>
          </div>
        </section>

        {/* SECTION 6 - WHO THIS IS FOR */}
        <section className="py-24 px-4 bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-6xl font-black mb-12">This Is For You If:</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h3 className="text-2xl font-bold text-green-400 mb-6">✓ Perfect Fit:</h3>
                {[
                  "You're serious about scaling your business",
                  "You're tired of low-quality freelancers",
                  "You want a strategic partner — not just a coder",
                  "You care about performance & ROI",
                  "You want a website that feels premium"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-green-900/10 border border-green-500/30 rounded-lg">
                    <span className="text-xl">•</span>
                    <p className="text-lg">{item}</p>
                  </div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h3 className="text-2xl font-bold text-red-400 mb-6">✗ Not For:</h3>
                {[
                  "People looking for the cheapest option",
                  "One-page quick fixes",
                  "Hobby projects"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-red-900/10 border border-red-500/30 rounded-lg">
                    <span className="text-xl">✗</span>
                    <p className="text-lg">{item}</p>
                  </div>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-block px-6 py-3 bg-yellow-600/20 border border-yellow-500 rounded-full mb-8">
                <p className="text-lg font-semibold text-yellow-400">⚠️ We only take on projects we know we can deliver exceptional results for</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 7 - THE PROCESS */}
        <section className="py-24 px-4 bg-black relative overflow-hidden">
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]"></div>
          
          <div className="max-w-5xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-6xl font-black mb-4">The Process</h2>
              <p className="text-xl text-gray-400">Simple. Strategic. Effective.</p>
            </motion.div>

            <div className="space-y-8 mb-12">
              {[
                { num: "1️⃣", title: "Strategy Call", desc: "We understand your business model & growth goals." },
                { num: "2️⃣", title: "Custom Plan", desc: "You receive a tailored roadmap." },
                { num: "3️⃣", title: "Build & Optimize", desc: "We design, develop, and performance-optimize." },
                { num: "4️⃣", title: "Launch & Scale", desc: "Your growth system goes live." }
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="flex items-start gap-6 p-6 bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-xl hover:border-blue-400 transition-all"
                >
                  <span className="text-4xl">{step.num}</span>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                    <p className="text-lg text-gray-300">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <a href="tel:+923258831437">
                <button className="px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-bold text-xl shadow-xl hover:shadow-blue-500/50 transition-all hover:scale-105">
                  Start Your Project Today
                </button>
              </a>
            </motion.div>
          </div>
        </section>

        {/* SECTION 8 - OBJECTION HANDLING */}
        <section className="py-24 px-4 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-6xl font-black mb-4">"But What If…"</h2>
              <p className="text-xl text-gray-400">Let's address your concerns:</p>
            </motion.div>

            <div className="space-y-6 mb-12">
              {[
                { q: "How long does it take?", a: "Depends on scope, typically 2–6 weeks." },
                { q: "Will it be SEO optimized?", a: "Yes, structured from day one." },
                { q: "Do you offer support?", a: "Yes, ongoing optimization available." },
                { q: "Can you redesign my current site?", a: "Absolutely." }
              ].map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 bg-gradient-to-r from-blue-900/10 to-purple-900/10 border border-blue-500/20 rounded-xl hover:border-blue-400/50 transition-all"
                >
                  <h3 className="text-xl font-bold mb-3 text-blue-400">{faq.q}</h3>
                  <p className="text-lg text-gray-300">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 9 - FINAL PUSH */}
        <section className="py-32 px-4 bg-gradient-to-br from-blue-900 via-purple-900 to-black relative overflow-hidden">
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 10 0 L 0 0 0 10' fill='none' stroke='rgba(255,255,255,0.03)' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`
          }}></div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-5xl md:text-7xl font-black leading-tight">
                Every Month You Wait Is <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Revenue You Lose.</span>
              </h2>
              
              <p className="text-3xl md:text-4xl font-bold text-gray-200">
                Let's fix it.
              </p>

              <div className="space-y-6 pt-8">
                <a href="tel:+923258831437">
                  <button className="px-16 py-7 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-full font-black text-2xl shadow-2xl hover:shadow-blue-500/70 transition-all duration-300 hover:scale-110 border-2 border-white/20" style={{ backgroundSize: '200% auto', animation: 'gradient 3s ease infinite' }}>
                    🚀 Book Your Free Strategy Call Now
                  </button>
                </a>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a href="tel:+923258831437" className="text-xl font-semibold hover:text-blue-400 transition-colors">
                    📞 Call +92 325 883 1437
                  </a>
                </div>

                <p className="text-sm text-gray-400 pt-4">
                  ⚠️ Spots are limited to maintain quality.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="py-16 px-4 bg-black border-t border-gray-800">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-400 mb-4">© 2024 MultiMian. All rights reserved.</p>
            <p className="text-sm text-gray-500">Building digital growth systems that work 24/7.</p>
          </div>
        </section>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </>
  )
}
