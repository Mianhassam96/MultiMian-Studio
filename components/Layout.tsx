import React from 'react'
import { useRouter } from 'next/router'
import Header from './Header'
import PremiumHeader from './PremiumHeader'
import Footer from './Footer'
import WhatsAppPopup from './WhatsAppPopup'
import WhatsAppButton from './WhatsAppButton'

const Layout: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const router = useRouter()
  
  // Use premium header for homepage, regular header for other pages
  const usePremiumHeader = router.pathname === '/'

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#0B1120] via-[#111827] to-[#0B1120]">
      {usePremiumHeader ? <PremiumHeader /> : <Header />}
      <main className={`flex-1 w-full ${usePremiumHeader ? '' : 'container py-12'}`}>
        {children}
      </main>
      <Footer />
      <WhatsAppPopup />
      <WhatsAppButton />
    </div>
  )
}

export default Layout
