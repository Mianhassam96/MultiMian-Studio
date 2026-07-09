import Link from 'next/link'
import { motion } from 'framer-motion'

// ── Data ──────────────────────────────────────────────────────────────────

const QUICK_LINKS = [
  { href: '/',             label: 'Home'         },
  { href: '/about',        label: 'About'        },
  { href: '/services',     label: 'Services'     },
  { href: '/portfolio',    label: 'Portfolio'    },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/contact',      label: 'Contact'      },
]

const SERVICE_LINKS = [
  { href: '/services#business-websites',        label: 'Business Website'   },
  { href: '/services#ecommerce-solutions',      label: 'E-Commerce Store'   },
  { href: '/services#web-applications',         label: 'Web Applications'   },
  { href: '/services#maintenance-optimization', label: 'Maintenance'        },
  { href: '/pricing',                           label: 'Pricing Plans'      },
  { href: '/process',                           label: 'Our Process'        },
]

const RESOURCE_LINKS = [
  { href: 'https://github.com/Mianhassam96/MultiMian-Studio', label: 'GitHub Repo', external: true  },
  { href: '/faq',      label: 'FAQ',      external: false },
  { href: '/login',    label: 'Login',    external: false },
  { href: '/register', label: 'Register', external: false },
]

const SOCIALS = [
  {
    name: 'GitHub', href: 'https://github.com/Mianhassam96',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden><path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.8-1.4-3.8-1.4-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 1.7 2.6 1.2 3.2.9.1-.7.4-1.2.7-1.5-2.6-.3-5.4-1.3-5.4-5.7 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.3 1.2.9-.2 1.8-.3 2.7-.3s1.9.1 2.7.3c2.3-1.6 3.3-1.2 3.3-1.2.6 1.7.2 3 .1 3.3.7.9 1.2 2 1.2 3.3 0 4.4-2.8 5.4-5.4 5.7.6.5 1 1.3 1 2.6v3.8c0 .4.2.8.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z"/></svg>,
  },
  {
    name: 'LinkedIn', href: 'https://www.linkedin.com/in/mianhassam96/',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden><path d="M4.98 3.5C4.98 4.88 3.9 6 2.5 6S0 4.88 0 3.5 1.07 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4zM8.5 8h3.8v2.18h.06c.53-1 1.82-2.06 3.75-2.06 4 0 4.74 2.64 4.74 6.07V24h-4V15.5c0-2.04-.04-4.66-2.84-4.66-2.84 0-3.28 2.22-3.28 4.5V24h-4z"/></svg>,
  },
  {
    name: 'Facebook', href: 'https://www.facebook.com/mian.hassam.kz',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden><path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.99H7.898v-2.888h2.54V9.797c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.888h-2.33v6.99C18.343 21.128 22 16.991 22 12z"/></svg>,
  },
  {
    name: 'Twitter / X', href: 'https://twitter.com/mianhassam96',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>,
  },
]

const TRUST_BADGES = [
  { icon: '🔒', label: 'Secure & Reliable'  },
  { icon: '⚡', label: 'Fast Delivery'       },
  { icon: '📱', label: 'Mobile Responsive'   },
  { icon: '🎯', label: 'SEO Optimized'       },
  { icon: '💰', label: 'Fixed Pricing'       },
  { icon: '🛡️', label: 'Quality Guaranteed' },
]

// ── Shared style helpers using CSS variables ──────────────────────────────

const f = {
  bg:           { backgroundColor: 'var(--footer-bg)' },
  text:         { color: 'var(--footer-text)' },
  heading:      { color: 'var(--footer-heading)' },
  border:       { borderColor: 'var(--footer-border)' },
  surface:      { backgroundColor: 'var(--footer-surface)', border: '1px solid var(--footer-border)' },
}

// ── Reusable column link ──────────────────────────────────────────────────

function FooterLink({ href, label, external = false }: { href: string; label: string; external?: boolean }) {
  const cls = 'text-sm flex items-center gap-2 group transition-colors duration-200'
  const inner = (
    <>
      <span
        className="w-1 h-1 rounded-full flex-shrink-0 transition-colors duration-200"
        style={{ backgroundColor: 'var(--footer-border)' }}
      />
      <span
        className="group-hover:text-primary transition-colors duration-200"
        style={{ color: 'var(--footer-text)' }}
      >
        {label}
      </span>
      {external && (
        <svg className="w-3 h-3 opacity-40 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      )}
    </>
  )

  if (external) {
    return (
      <li>
        <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>{inner}</a>
      </li>
    )
  }
  return (
    <li>
      <Link href={href} className={cls}>{inner}</Link>
    </li>
  )
}

// ── Column heading ────────────────────────────────────────────────────────

function ColHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3
      className="text-[11px] font-bold uppercase tracking-[0.18em] mb-5"
      style={{ color: 'var(--footer-text)', opacity: 0.5 }}
    >
      {children}
    </h3>
  )
}

// ── Component ─────────────────────────────────────────────────────────────

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={f.bg} role="contentinfo">

      {/* ── CTA Band ── */}
      <div className="border-b" style={f.border}>
        <div className="container py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold mb-2" style={f.heading}>
                Ready to grow your business online?
              </h2>
              <p className="text-sm" style={f.text}>
                Free consultation &middot; No obligation &middot; Response within 24 hours
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                href="/contact"
                className="px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-xl font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 text-center shadow-lg"
                style={{ boxShadow: '0 4px 14px rgba(37,99,235,0.25)' }}
              >
                Get Free Consultation
              </Link>
              <a
                href="https://wa.me/923258831437"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 text-center"
                style={{ ...f.surface, color: 'var(--footer-text)' }}
              >
                💬 WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Trust Badges ── */}
      <div className="border-b" style={f.border}>
        <div className="container py-5">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {TRUST_BADGES.map((b) => (
              <div key={b.label} className="flex items-center gap-2 text-sm" style={f.text}>
                <span>{b.icon}</span>
                <span>{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main Grid ── */}
      <div className="container py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">

          {/* Brand col — spans 2 */}
          <div className="lg:col-span-2">

            {/* Logo — identical to navbar */}
            <Link href="/" className="flex items-baseline gap-0 mb-5 w-fit">
              <span
                className="font-black text-[1.4rem] leading-none bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent"
                style={{ fontFamily: '"Space Grotesk", sans-serif', letterSpacing: '-0.03em' }}
              >
                Multi
              </span>
              <span
                className="font-black text-[1.4rem] leading-none"
                style={{ fontFamily: '"Space Grotesk", sans-serif', letterSpacing: '-0.03em', color: 'var(--footer-heading)' }}
              >
                Mian
              </span>
              <span
                className="ml-1.5 text-[9px] font-bold uppercase text-primary self-end mb-0.5"
                style={{ fontFamily: '"Space Grotesk", sans-serif', letterSpacing: '0.2em' }}
              >
                Studio
              </span>
            </Link>

            <p className="text-sm leading-relaxed mb-6 max-w-xs" style={f.text}>
              Professional website development for businesses. Modern, fast, SEO-optimized
              websites that help you establish credibility, attract customers, and grow online.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-2 mb-6">
              {SOCIALS.map((s) => (
                <motion.a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  whileHover={{ y: -3, scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:bg-primary hover:text-white"
                  style={{ ...f.surface, color: 'var(--footer-text)' }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>

            {/* Contact */}
            <div className="space-y-2.5 text-sm" style={f.text}>
              <a href="mailto:mianhassam96@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                mianhassam96@gmail.com
              </a>
              <a href="https://wa.me/923258831437" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                +92 325 883 1437
              </a>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Pakistan
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <ColHeading>Quick Links</ColHeading>
            <ul className="space-y-3">
              {QUICK_LINKS.map(({ href, label }) => (
                <FooterLink key={href} href={href} label={label} />
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <ColHeading>Services</ColHeading>
            <ul className="space-y-3">
              {SERVICE_LINKS.map(({ href, label }) => (
                <FooterLink key={href} href={href} label={label} />
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <ColHeading>Resources</ColHeading>
            <ul className="space-y-3 mb-6">
              {RESOURCE_LINKS.map(({ href, label, external }) => (
                <FooterLink key={href} href={href} label={label} external={external} />
              ))}
            </ul>

            {/* GitHub star */}
            <a
              href="https://github.com/Mianhassam96/MultiMian-Studio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 hover:border-primary hover:text-primary"
              style={{ ...f.surface, color: 'var(--footer-text)' }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden>
                <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.8-1.4-3.8-1.4-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 1.7 2.6 1.2 3.2.9.1-.7.4-1.2.7-1.5-2.6-.3-5.4-1.3-5.4-5.7 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.3 1.2.9-.2 1.8-.3 2.7-.3s1.9.1 2.7.3c2.3-1.6 3.3-1.2 3.3-1.2.6 1.7.2 3 .1 3.3.7.9 1.2 2 1.2 3.3 0 4.4-2.8 5.4-5.4 5.7.6.5 1 1.3 1 2.6v3.8c0 .4.2.8.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z" />
              </svg>
              ⭐ Star on GitHub
            </a>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div
          className="pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4 text-xs"
          style={{ borderColor: 'var(--footer-border)', color: 'var(--footer-text)' }}
        >
          <p>
            &copy; {year}{' '}
            <span className="font-semibold" style={f.heading}>MultiMian Studio</span>
            {' '}— Built by{' '}
            <a
              href="https://github.com/Mianhassam96"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium transition-colors"
            >
              Mian Hassam
            </a>
          </p>
          <p className="flex items-center gap-1.5">
            Made with{' '}
            <span className="text-red-500 animate-pulse" aria-label="love">&#10084;&#65039;</span>
            {' '}using Next.js &amp; Tailwind CSS
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <span aria-hidden>&#183;</span>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <span aria-hidden>&#183;</span>
            <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
