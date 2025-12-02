'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Zap, Target, ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button'

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-surface to-primary" />

        {/* Mesh Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,194,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,194,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/30 text-secondary mb-8"
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold">21+ Years Industrial Expertise + AI Innovation</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold font-display mb-6 leading-tight"
          >
            <span className="gradient-text">Industrial Intelligence</span>
            <br />
            <span className="gradient-glow">Meets Business Automation</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-text-secondary mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            AI Solutions Built for Pakistan's Growth Economy. Transform your business with 24/7 WhatsApp AI Agents, Custom Platforms, and Industrial Intelligence.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Button
              variant="primary"
              size="lg"
              onClick={() => {
                document.getElementById('whatsapp-demo')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Try Live Demo
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => {
                document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Explore Solutions
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <div className="p-6 rounded-xl glass">
              <div className="flex items-center justify-center mb-3">
                <Zap className="w-8 h-8 text-secondary" />
              </div>
              <div className="text-4xl font-bold gradient-glow mb-2">24/7</div>
              <div className="text-text-secondary">AI-Powered Support</div>
            </div>

            <div className="p-6 rounded-xl glass">
              <div className="flex items-center justify-center mb-3">
                <Target className="w-8 h-8 text-secondary" />
              </div>
              <div className="text-4xl font-bold gradient-glow mb-2">60%</div>
              <div className="text-text-secondary">Time Savings</div>
            </div>

            <div className="p-6 rounded-xl glass">
              <div className="flex items-center justify-center mb-3">
                <Sparkles className="w-8 h-8 text-secondary" />
              </div>
              <div className="text-4xl font-bold gradient-glow mb-2">5+</div>
              <div className="text-text-secondary">Industries Served</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-secondary/50 flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-secondary"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
