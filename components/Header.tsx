import Link from 'next/link'
import { useState } from 'react'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  const servicesMenu = {
    'Business Websites': [
      { name: 'Company Website', href: '/services#business-websites', desc: 'Professional sites for businesses' },
      { name: 'Landing Page', href: '/services#landing-pages', desc: 'High-converting campaign pages' },
      { name: 'Portfolio Website', href: '/services#portfolio-websites', desc: 'Showcase your work beautifully' },
    ],
    'Web Applications': [
      { name: 'Custom Web App', href: '/services#custom-web-apps', desc: 'Tailored solutions for your needs' },
      { name: 'Admin Dashboard', href: '/services#admin-dashboards', desc: 'Manage your business efficiently' },
      { name: 'SaaS Platform', href: '/services#saas-applications', desc: 'Scalable subscription software' },
    ],
    'E-Commerce': [
      { name: 'Online Store', href: '/services#online-stores', desc: 'Sell products online 24/7' },
      { name: 'Payment Integration', href: '/services#payment-integration', desc: 'Secure payment processing' },
      { name: 'Product Management', href: '/services#product-management', desc: 'Inventory & order systems' },
    ],
    'Optimization & Support': [
      { name: 'Website Redesign', href: '/services#website-redesign', desc: 'Modernize your existing site' },
      { name: 'Speed Optimization', href: '/services#speed-optimization', desc: 'Lightning-fast performance' },
      { name: 'SEO Improvements', href: '/services#seo-improvements', desc: 'Rank higher on Google' },
    ],
  }

  return (
    <header className="backdrop-blur-lg bg-white/95 dark:bg-gray-900/95 border-b border-gray-200/50 dark:border-gray-700/50 sticky top-0 z-50 shadow-sm">
      <div className="container flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="group relative">
          <span className="text-3xl md:text-4xl font-bold tracking-wider relative inline-block transition-all duration-300 hover:scale-105" style={{ fontFamily: '"Space Grotesk", sans-serif', animation: 'float 3s ease-in-out infinite' }}>
            <span className="text-blue-600 dark:text-blue-400">MULTI</span>
            <span className="text-gray-900 dark:text-white">MIAN</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          <Link 
            href="/" 
            className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-all"
          >
            Home
          </Link>

          {/* Services Mega Menu */}
          <div 
            className="relative group"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-all flex items-center gap-1">
              Services
              <svg 
                className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {/* Mega Menu Dropdown */}
            <div 
              className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[920px] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700 overflow-hidden transition-all duration-300 ${
                servicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
              }`}
            >
              <div className="p-8">
                <div className="grid grid-cols-4 gap-8">
                  {Object.entries(servicesMenu).map(([category, items], idx) => (
                    <div key={category}>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">
                        {category}
                      </h3>
                      <ul className="space-y-3">
                        {items.map((item) => (
                          <li key={item.name}>
                            <Link
                              href={item.href}
                              className="group block"
                            >
                              <div className="font-semibold text-sm text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-1">
                                {item.name}
                              </div>
                              <div className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                                {item.desc}
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                      Not sure which service you need?
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Let&apos;s discuss your project and find the perfect solution.
                    </p>
                  </div>
                  <Link
                    href="/contact"
                    className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors whitespace-nowrap"
                  >
                    Get Free Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Link 
            href="/portfolio" 
            className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-all"
          >
            Portfolio
          </Link>

          <Link 
            href="/process" 
            className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-all"
          >
            Process
          </Link>

          <Link 
            href="/pricing" 
            className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-all"
          >
            Pricing
          </Link>

          <Link 
            href="/about" 
            className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-all"
          >
            About
          </Link>

          <Link 
            href="/contact" 
            className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-all"
          >
            Contact
          </Link>

          <Link 
            href="/contact" 
            className="ml-2 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg text-sm font-semibold shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105"
          >
            Get Free Consultation
          </Link>

          <ThemeToggle />
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-3">
          <ThemeToggle />
          <button 
            aria-expanded={mobileOpen} 
            aria-label="Toggle menu" 
            onClick={() => setMobileOpen(!mobileOpen)} 
            className="inline-flex items-center justify-center p-2 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-700 dark:text-gray-300">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 max-h-[80vh] overflow-y-auto">
          <div className="container py-4 space-y-2">
            <Link href="/" className="block px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg transition-colors">
              Home
            </Link>
            
            <Link href="/services" className="block px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg transition-colors">
              Services
            </Link>

            <Link href="/portfolio" className="block px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg transition-colors">
              Portfolio
            </Link>

            <Link href="/process" className="block px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg transition-colors">
              Process
            </Link>

            <Link href="/pricing" className="block px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg transition-colors">
              Pricing
            </Link>
            
            <Link href="/about" className="block px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg transition-colors">
              About
            </Link>

            <Link href="/contact" className="block px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg transition-colors">
              Contact
            </Link>
            
            <Link href="/contact" className="block px-4 py-3 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors">
              Get Free Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
