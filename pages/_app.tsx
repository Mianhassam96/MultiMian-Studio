import type { AppProps } from 'next/app'
import '../styles/globals.css'
import Layout from '../components/Layout'
import { MotionConfig } from 'framer-motion'
import { ReducedMotionContext } from '../lib/ReducedMotionContext'
import { SessionProvider } from 'next-auth/react'
import { useState, useEffect } from 'react'

export default function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const [reduced, setReduced] = useState(false)
  useEffect(()=>{
    try{
      const stored = localStorage.getItem('reducedMotion')
      const parsed = stored === '1'
      if(parsed !== reduced) setReduced(parsed)
    }catch(e){}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  useEffect(()=>{
    try{ localStorage.setItem('reducedMotion', reduced? '1':'0') }catch(e){}
  },[reduced])

  return (
    <SessionProvider session={session}>
      <ReducedMotionContext.Provider value={{reduced, setReduced}}>
        <MotionConfig reducedMotion={reduced ? 'always' : 'never'}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </MotionConfig>
      </ReducedMotionContext.Provider>
    </SessionProvider>
  )
}
