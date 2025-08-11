'use client'
import { motion } from 'framer-motion'

export default function Background() {
  return (
    <motion.div
      aria-hidden
      className="fixed inset-0 -z-10 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 rounded-full filter blur-3xl opacity-40"
        animate={{
          x: [0, 60, 0, -60, 0],
          y: [0, 40, 80, 40, 0],
          scale: [1, 1.1, 1.2, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-[-15%] right-[-10%] w-[35vw] h-[35vw] bg-gradient-to-tr from-fuchsia-400 via-cyan-400 to-indigo-400 rounded-full filter blur-2xl opacity-30"
        animate={{
          x: [0, -40, 0, 40, 0],
          y: [0, -30, -60, -30, 0],
          scale: [1, 1.15, 1.05, 1.15, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </motion.div>
  )
}
