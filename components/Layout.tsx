import React from 'react'
import { useRouter } from 'next/router'
import Header from './Header'
import FuturisticNav from './FuturisticNav'
import Footer from './Footer'
import WhatsAppPopup from './WhatsAppPopup'
import WhatsAppButton from './WhatsAppButton'
import ConsultationPopup from './ConsultationPopup'

const Layout: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const router = useRouter()
  
  // Pages that should not show navigation
  const noNavPages = ['/login', '/signup']
  const showNav = !noNavPages.includes(router.pathname)

  return (
    <div className="min-h-screen flex flex-col">
      {showNav && <FuturisticNav />}
      <main className="flex-1 w-full">{children}</main>
      {showNav && <Footer />}
      {showNav && <WhatsAppPopup />}
      {showNav && <WhatsAppButton />}
      {showNav && <ConsultationPopup />}
    </div>
  )
}

export default Layout
