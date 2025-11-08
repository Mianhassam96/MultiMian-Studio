import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CTABanner(){
  return (
    <motion.section initial={{opacity:0, y:8}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="mt-16 bg-gradient-to-r from-primary to-brand-500 text-white rounded-lg p-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-2xl font-bold">Start building something great</h3>
          <p className="text-sm">Book a free consultation and technical review.</p>
        </div>
        <div>
          <Link href="/contact" className="inline-block px-5 py-3 bg-white text-primary rounded font-semibold">Get in touch</Link>
        </div>
      </div>
    </motion.section>
  )
}
