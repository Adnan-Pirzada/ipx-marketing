'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Sparkles } from 'lucide-react'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'

const CTA: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement form submission
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-blue-500/5" />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/30 text-secondary mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-semibold">Get Started Today</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display gradient-text mb-6">
              Ready to Transform Your Business?
            </h2>

            <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto">
              Join Pakistan's leading businesses that trust INFINI PRO X for AI-driven excellence. Schedule your free consultation now.
            </p>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-strong p-8 md:p-12 rounded-2xl"
          >
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-success/20 border border-success/30 flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-success"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                <p className="text-text-secondary">
                  We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Name"
                    type="text"
                    placeholder="Your full name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                  <Input
                    label="Email"
                    type="email"
                    placeholder="your@email.com"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <Input
                  label="Company"
                  type="text"
                  placeholder="Your company name"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                />

                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">
                    Message
                  </label>
                  <textarea
                    className="w-full px-4 py-3 bg-surface border border-white/10 rounded-lg text-text-primary placeholder-text-tertiary focus:border-secondary focus:ring-2 focus:ring-secondary/50 transition-all duration-300 outline-none resize-none"
                    rows={4}
                    placeholder="Tell us about your project or ask a question..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <Button type="submit" variant="primary" size="lg" className="w-full">
                  Send Message
                  <Send className="w-5 h-5 ml-2" />
                </Button>

                <p className="text-sm text-text-tertiary text-center">
                  By submitting this form, you agree to our Privacy Policy.
                </p>
              </form>
            )}
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center"
          >
            <div className="p-6 rounded-xl glass">
              <div className="text-2xl mb-2">📧</div>
              <div className="text-sm text-text-tertiary mb-1">Email Us</div>
              <a href="mailto:info@infiniprox.com" className="text-secondary hover:text-white transition-colors">
                info@infiniprox.com
              </a>
            </div>

            <div className="p-6 rounded-xl glass">
              <div className="text-2xl mb-2">📞</div>
              <div className="text-sm text-text-tertiary mb-1">Call Us</div>
              <a href="tel:+92XXXXXXXXX" className="text-secondary hover:text-white transition-colors">
                +92-XXX-XXXXXXX
              </a>
            </div>

            <div className="p-6 rounded-xl glass">
              <div className="text-2xl mb-2">🌐</div>
              <div className="text-sm text-text-tertiary mb-1">Visit Website</div>
              <a
                href="https://www.infiniprox.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-white transition-colors"
              >
                www.infiniprox.com
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CTA
