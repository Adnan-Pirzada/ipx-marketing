'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Zap, Globe, LineChart, Users, Lock } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Sub-2 second response times ensure your customers never wait.',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade encryption and Meta Business API compliance.',
  },
  {
    icon: Globe,
    title: 'Multi-Language',
    description: 'English and Urdu support with more languages coming soon.',
  },
  {
    icon: LineChart,
    title: 'Smart Analytics',
    description: 'Real-time insights into customer behavior and lead quality.',
  },
  {
    icon: Users,
    title: 'Lead Qualification',
    description: 'AI automatically identifies and prioritizes hot leads.',
  },
  {
    icon: Lock,
    title: 'Data Privacy',
    description: 'Your data stays secure. GDPR and local compliance ready.',
  },
]

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,194,255,0.1),transparent_50%)]" />
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
            Built for Scale, Security & Speed
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Enterprise-grade features that ensure reliability, compliance, and exceptional performance.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 rounded-xl glass hover:border-secondary/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-secondary/10 border border-secondary/30 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                  <Icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-text-secondary">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Features
