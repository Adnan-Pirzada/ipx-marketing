import React from 'react'
import { motion } from 'framer-motion'

interface CardProps {
  children: React.ReactNode
  variant?: 'default' | 'glass' | 'feature'
  className?: string
  hover?: boolean
}

const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  className = '',
  hover = true,
}) => {
  const variants = {
    default: 'p-6 rounded-xl bg-elevated border border-white/10',
    glass: 'p-6 rounded-xl bg-elevated/70 backdrop-blur-xl border border-white/10',
    feature: 'p-8 rounded-2xl bg-gradient-to-br from-elevated to-surface border border-secondary/20 shadow-xl shadow-secondary/10',
  }

  const hoverClasses = hover
    ? 'hover:border-secondary/50 hover:shadow-lg hover:shadow-secondary/20 transition-all duration-300'
    : ''

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`${variants[variant]} ${hoverClasses} ${className}`}
    >
      {children}
    </motion.div>
  )
}

export default Card
