import { motion } from 'framer-motion'

const stats = [
  {label: 'Projects Delivered', value: '50+'},
  {label: 'Years Experience',   value: '5+' },
  {label: 'Happy Clients',      value: '50+'},
]

export default function Stats(){
  return (
    <section className="mt-16 bg-white/40 dark:bg-gray-800/40 rounded-lg p-4 md:p-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
        {stats.map((s, i)=> (
          <motion.div key={s.label} initial={{opacity:0, scale:0.95}} whileInView={{opacity:1, scale:1}} viewport={{once:true}} transition={{delay:i*0.08}} className="text-center">
            <div className="text-2xl md:text-3xl font-extrabold text-primary">{s.value}</div>
            <div className="text-sm md:text-base text-muted mt-1">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
