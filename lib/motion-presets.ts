import { motion, easeInOut } from 'framer-motion'

export const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeInOut } },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.7, ease: easeInOut } },
}

export const stagger = {
  show: { transition: { staggerChildren: 0.15 } },
}

export { motion }
