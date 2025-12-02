'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageSquare, Send, X, Sparkles } from 'lucide-react'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import { useAIChat } from '@/hooks/useAIChat'

const WhatsAppDemo: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const { messages, isLoading, sendMessage } = useAIChat()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputValue.trim() || isLoading) return

    await sendMessage(inputValue)
    setInputValue('')
  }

  const suggestedQuestions = [
    "How does WhatsApp AI Agent work?",
    "What industries do you serve?",
    "Tell me about pricing",
    "How long is implementation?",
  ]

  return (
    <section id="whatsapp-demo" className="py-24 bg-primary relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/30 text-secondary mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-semibold">Live AI Demo</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold font-display gradient-text mb-6">
              Experience AI-Powered Customer Engagement
            </h2>

            <p className="text-lg text-text-secondary mb-8">
              Try our WhatsApp AI Agent right now. Ask about our solutions, pricing, implementation - anything! See how instant, intelligent responses can transform your customer experience.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-secondary mt-2" />
                <div>
                  <div className="font-semibold mb-1">24/7 Availability</div>
                  <div className="text-text-secondary text-sm">Never miss a customer inquiry, day or night</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-secondary mt-2" />
                <div>
                  <div className="font-semibold mb-1">Instant Responses</div>
                  <div className="text-text-secondary text-sm">Lightning-fast answers powered by Google Gemini AI</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-secondary mt-2" />
                <div>
                  <div className="font-semibold mb-1">Smart Lead Qualification</div>
                  <div className="text-text-secondary text-sm">Automatically identify and prioritize hot leads</div>
                </div>
              </div>
            </div>

            <Button variant="primary" onClick={() => setIsOpen(true)}>
              Start Chatting
              <MessageSquare className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>

          {/* Right Side - Chat Interface */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="glass-strong rounded-2xl overflow-hidden shadow-2xl shadow-secondary/20">
              {/* Chat Header */}
              <div className="bg-secondary/10 border-b border-white/10 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">INFINI PRO X AI</div>
                    <div className="text-xs text-text-tertiary flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                      Always Online
                    </div>
                  </div>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="h-96 overflow-y-auto p-6 space-y-4 bg-surface/50">
                {messages.length === 0 ? (
                  <div className="text-center py-12">
                    <MessageSquare className="w-16 h-16 text-secondary/30 mx-auto mb-4" />
                    <p className="text-text-secondary mb-6">
                      Start a conversation! Try asking one of these:
                    </p>
                    <div className="space-y-2">
                      {suggestedQuestions.map((question) => (
                        <button
                          key={question}
                          onClick={() => setInputValue(question)}
                          className="block w-full text-left px-4 py-3 rounded-lg bg-elevated border border-white/10 hover:border-secondary/50 text-text-secondary hover:text-secondary transition-all text-sm"
                        >
                          {question}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  messages.map((msg, i) => (
                    <div
                      key={i}
                      className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] px-4 py-3 rounded-lg ${
                          msg.role === 'user'
                            ? 'bg-secondary text-white'
                            : 'bg-elevated border border-white/10 text-text-primary'
                        }`}
                      >
                        {msg.content}
                      </div>
                    </div>
                  ))
                )}

                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-elevated border border-white/10 px-4 py-3 rounded-lg flex items-center gap-2">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 rounded-full bg-secondary animate-bounce" style={{ animationDelay: '0ms' }} />
                        <div className="w-2 h-2 rounded-full bg-secondary animate-bounce" style={{ animationDelay: '150ms' }} />
                        <div className="w-2 h-2 rounded-full bg-secondary animate-bounce" style={{ animationDelay: '300ms' }} />
                      </div>
                      <span className="text-text-tertiary text-sm">AI is thinking...</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Chat Input */}
              <form onSubmit={handleSubmit} className="border-t border-white/10 p-4 bg-elevated/50">
                <div className="flex gap-2">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Ask anything about our AI solutions..."
                    disabled={isLoading}
                    className="flex-1"
                  />
                  <Button
                    type="submit"
                    variant="primary"
                    disabled={isLoading || !inputValue.trim()}
                  >
                    <Send className="w-5 h-5" />
                  </Button>
                </div>
              </form>
            </div>

            {/* Floating Stats */}
            <motion.div
              className="absolute -bottom-6 -left-6 glass p-4 rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="text-2xl font-bold text-secondary">{"<2s"}</div>
              <div className="text-xs text-text-secondary">Avg Response Time</div>
            </motion.div>

            <motion.div
              className="absolute -top-6 -right-6 glass p-4 rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="text-2xl font-bold text-secondary">100%</div>
              <div className="text-xs text-text-secondary">Uptime</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default WhatsAppDemo
