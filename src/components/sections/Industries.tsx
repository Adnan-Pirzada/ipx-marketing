'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Building2, ShoppingCart, Heart, GraduationCap, Factory } from 'lucide-react'
import Card from '@/components/ui/Card'

const industries = [
  {
    icon: Building2,
    title: 'Real Estate',
    description: 'Handle global inquiries 24/7, qualify leads automatically, and never miss an overseas buyer.',
    stats: '40% more leads captured',
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce',
    description: 'Automate order tracking, returns, and FAQs. Free your team to focus on growth.',
    stats: '60% time saved on support',
  },
  {
    icon: Heart,
    title: 'Healthcare',
    description: 'Appointment scheduling, FAQ automation, and patient support without overwhelming staff.',
    stats: '80% queries automated',
  },
  {
    icon: GraduationCap,
    title: 'Education',
    description: 'Admissions inquiries, course information, and student support at scale.',
    stats: '90% faster responses',
  },
  {
    icon: Factory,
    title: 'Manufacturing',
    description: 'B2B communication, order status, quality monitoring, and process optimization.',
    stats: '50% efficiency gain',
  },
]

const Industries: React.FC = () => {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute bottom-0 left-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display gradient-text mb-4">
            Trusted Across Industries
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            From real estate to manufacturing, our AI solutions drive results in Pakistan's most dynamic sectors.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon
            return (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card variant="glass" className="h-full">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary/20 to-blue-500/20 border border-secondary/30 flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{industry.title}</h3>
                  <p className="text-text-secondary mb-4">{industry.description}</p>
                  <div className="inline-flex px-3 py-1 rounded-full bg-secondary/10 border border-secondary/30">
                    <span className="text-sm font-semibold text-secondary">{industry.stats}</span>
                  </div>
                </Card>
              </motion.div>
            )
          })}

          {/* Custom Solutions Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Card variant="feature" className="h-full flex flex-col items-center justify-center text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold mb-3">Your Industry</h3>
              <p className="text-text-secondary mb-4">
                Don't see your sector? We build custom solutions for any industry.
              </p>
              <button className="text-secondary hover:text-white transition-colors font-semibold">
                Let's Talk →
              </button>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Industries
