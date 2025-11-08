import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CTABanner(){
  return (
    <motion.section initial={{opacity:0, y:8}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="mt-16 animated-bg text-white rounded-lg p-8 hover-lift">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-2xl font-bold">Start building something great</h3>
          <p className="text-sm opacity-90">Book a free consultation and technical review.</p>
        </div>
        <div>
          <Link href="/contact" className="inline-block px-6 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl">
            Get in touch
            <svg className="w-4 h-4 inline ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </motion.section>
  )
}
