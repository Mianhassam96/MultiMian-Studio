import React from 'react'
import Header from './Header'
import Footer from './Footer'
import WhatsAppPopup from './WhatsAppPopup'
import WhatsAppButton from './WhatsAppButton'

const Layout: React.FC<{children: React.ReactNode}> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 w-full container py-12">{children}</main>
      <Footer />
      <WhatsAppPopup />
      <WhatsAppButton />
    </div>
  )
}

export default Layout
