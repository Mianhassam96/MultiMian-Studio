import React from 'react'
import Header from './Header'
import Footer from './Footer'
import WhatsAppPopup from './WhatsAppPopup'
import WhatsAppButton from './WhatsAppButton'
import ConsultationPopup from './ConsultationPopup'

const Layout: React.FC<{children: React.ReactNode}> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 w-full">{children}</main>
      <Footer />
      <WhatsAppPopup />
      <WhatsAppButton />
      <ConsultationPopup />
    </div>
  )
}

export default Layout
