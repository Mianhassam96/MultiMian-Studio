import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function ThemeToggle(){
  const [dark, setDark] = useState(false)
  useEffect(()=>{
    try{
      const stored = localStorage.getItem('theme')
      const initial = stored ? (stored === 'dark') : document.documentElement.classList.contains('dark')
      if(initial !== dark) setDark(initial)
    }catch(e){}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  useEffect(()=>{
    try{
      if(dark) document.documentElement.classList.add('dark')
      else document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', dark? 'dark':'light')
    }catch(e){}
  },[dark])

  return (
    <motion.button
      aria-pressed={dark}
      onClick={()=>setDark(!dark)}
      title={`Switch to ${dark ? 'light' : 'dark'} mode`}
      className="ml-3 p-3 rounded-xl glass-card hover:shadow-lg transition-all duration-300 hover:scale-105 border border-white/10"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        initial={false}
        animate={{ rotate: dark ? 180 : 0 }}
        transition={{ duration: 0.3 }}
        className="text-2xl"
      >
        {dark ? '🌙' : '☀️'}
      </motion.div>
    </motion.button>
  )
}
