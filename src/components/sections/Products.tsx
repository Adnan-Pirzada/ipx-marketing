'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { MessageSquare, Globe, Workflow, Factory, ArrowRight } from 'lucide-react'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'

const products = [
  {
    icon: MessageSquare,
    title: 'WhatsApp AI Agents',
    description: '24/7 customer support automation that never sleeps. Perfect for high-volume businesses handling global audiences.',
    features: [
      'Instant response to customer inquiries',
      'Automated lead qualification',
      'Meta Business API integration',
      'Multi-language support (English & Urdu)',
    ],
    badge: 'Most Popular',
    industries: ['Real Estate', 'E-Commerce', 'Healthcare'],
  },
  {
    icon: Globe,
    title: 'Custom AI Platforms',
    description: 'Tailored digital solutions built with cutting-edge AI. From concept to deployment, we create platforms that scale.',
    features: [
      'Modern tech stack (Next.js, React)',
      'AI-powered features integration',
      'Responsive & performant',
      'Full ownership & control',
    ],
    badge: 'Enterprise',
    industries: ['All Industries'],
  },
  {
    icon: Workflow,
    title: 'Process Automation (n8n)',
    description: 'Connect your tools, automate workflows, and eliminate repetitive tasks with powerful n8n automation.',
    features: [
      'No-code/low-code workflows',
      'Connect 400+ apps',
      'Custom integrations',
      'Real-time data synchronization',
    ],
    badge: 'Productivity',
    industries: ['Operations', 'Sales', 'Marketing'],
  },
  {
    icon: Factory,
    title: 'Industrial AI Solutions',
    description: '21+ years of industrial expertise meets modern AI. Optimize manufacturing, predict quality, monitor processes.',
    features: [
      'Fermentation monitoring (IFIS)',
      'Quality prediction models',
      'Competitive intelligence',
      'Process optimization',
    ],
    badge: 'Specialized',
    industries: ['Manufacturing', 'F&B', 'Chemical'],
  },
]

const Products: React.FC = () => {
  return (
    <section id="products" className="py-24 bg-surface relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,194,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,194,255,0.1)_1px,transparent_1px)] bg-[size:30px_30px]" />
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display gradient-text mb-4">
            Our Solutions
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
            Production-proven AI solutions that deliver real results. From customer engagement to industrial optimization.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {products.map((product, index) => {
            const Icon = product.icon
            return (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card variant="feature" className="h-full group">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 rounded-lg bg-secondary/10 border border-secondary/30 group-hover:bg-secondary/20 transition-colors">
                      <Icon className="w-8 h-8 text-secondary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-bold">{product.title}</h3>
                        <Badge>{product.badge}</Badge>
                      </div>
                      <p className="text-text-secondary">{product.description}</p>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                        <span className="text-text-secondary">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between pt-6 border-t border-white/10">
                    <div className="flex flex-wrap gap-2">
                      {product.industries.map((industry) => (
                        <span
                          key={industry}
                          className="text-xs px-2 py-1 rounded bg-elevated border border-white/10 text-text-tertiary"
                        >
                          {industry}
                        </span>
                      ))}
                    </div>
                    <Button variant="ghost" size="sm">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-text-secondary mb-6">
            Not sure which solution fits your needs?
          </p>
          <Button
            variant="primary"
            size="lg"
            onClick={() => {
              document.getElementById('whatsapp-demo')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Talk to Our AI Assistant
            <MessageSquare className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default Products
