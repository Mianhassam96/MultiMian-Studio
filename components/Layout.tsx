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
  
  // Use futuristic nav for homepage, regular header for other pages
  const useFuturisticNav = router.pathname === '/'

  return (
    <div className="min-h-screen flex flex-col">
      {useFuturisticNav ? <FuturisticNav /> : <Header />}
      <main className="flex-1 w-full">{children}</main>
      <Footer />
      <WhatsAppPopup />
      <WhatsAppButton />
      <ConsultationPopup />
    </div>
  )
}

export default Layout
