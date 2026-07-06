import { motion, useReducedMotion } from 'framer-motion'

export default function ServiceCard({title, children, icon}:{title:string; children:React.ReactNode; icon?: React.ReactNode}){
  const reduce = useReducedMotion()
  
  return (
    <motion.div 
      initial={reduce ? {} : {opacity: 0, y: 20}} 
      whileInView={reduce ? {} : {opacity: 1, y: 0}} 
      viewport={{once: true, margin: "-50px"}}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="p-8 bg-gradient-to-b from-white/80 to-white/60 backdrop-blur-lg rounded-xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300"
    >
      <div className="flex flex-col items-start gap-4">
        {icon && (
          <motion.div 
            whileHover={{ rotate: 5, scale: 1.1 }}
            className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary-dark/20 flex items-center justify-center text-primary shadow-inner"
          >
            {icon}
          </motion.div>
        )}
        <div>
          <motion.h3 
            className="font-bold text-xl mb-3 text-gray-800"
            initial={reduce ? {} : {opacity: 0}}
            whileInView={reduce ? {} : {opacity: 1}}
            transition={{ delay: 0.2 }}
          >
            {title}
          </motion.h3>
          <motion.div 
            className="text-base text-gray-600 leading-relaxed"
            initial={reduce ? {} : {opacity: 0}}
            whileInView={reduce ? {} : {opacity: 1}}
            transition={{ delay: 0.3 }}
          >
            {children}
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
