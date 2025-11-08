import { motion } from 'framer-motion'

const stats = [
  {label: 'Projects', value: '40+'},
  {label: 'Years', value: '4'},
  {label: 'Happy clients', value: '60+'},
]

export default function Stats(){
  return (
    <section className="mt-16 bg-gradient-to-r from-primary/10 via-accentBlue/5 to-primary-dark/10 rounded-lg p-4 md:p-6 backdrop-blur-sm border border-white/20">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
        {stats.map((s, i)=> (
          <motion.div key={s.label} initial={{opacity:0, scale:0.95}} whileInView={{opacity:1, scale:1}} viewport={{once:true}} transition={{delay:i*0.08}} className="text-center hover-lift p-4 rounded-lg">
            <div className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">{s.value}</div>
            <div className="text-sm md:text-base text-muted mt-1">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
