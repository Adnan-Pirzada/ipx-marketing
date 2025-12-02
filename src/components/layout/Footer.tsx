'use client'

import React from 'react'
import Link from 'next/link'
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-surface border-t border-white/10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-display font-bold gradient-glow mb-4">
              INFINI PRO X
            </h3>
            <p className="text-text-secondary mb-4">
              AI-Driven Excellence. Solutions for Every Industry.
            </p>
            <p className="text-text-tertiary text-sm">
              21+ years of industrial expertise combined with cutting-edge AI automation for Pakistan's growth economy.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#whatsapp-ai" className="text-text-secondary hover:text-secondary transition-colors">
                  WhatsApp AI Agents
                </Link>
              </li>
              <li>
                <Link href="#custom-platforms" className="text-text-secondary hover:text-secondary transition-colors">
                  Custom AI Platforms
                </Link>
              </li>
              <li>
                <Link href="#automation" className="text-text-secondary hover:text-secondary transition-colors">
                  Process Automation
                </Link>
              </li>
              <li>
                <Link href="#industrial-ai" className="text-text-secondary hover:text-secondary transition-colors">
                  Industrial AI
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Industries</h4>
            <ul className="space-y-2">
              <li className="text-text-secondary">Real Estate</li>
              <li className="text-text-secondary">E-Commerce</li>
              <li className="text-text-secondary">Healthcare</li>
              <li className="text-text-secondary">Education</li>
              <li className="text-text-secondary">Manufacturing</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-text-secondary">
                <Mail className="w-5 h-5 text-secondary mt-0.5" />
                <a href="mailto:info@infiniprox.com" className="hover:text-secondary transition-colors">
                  info@infiniprox.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-text-secondary">
                <Phone className="w-5 h-5 text-secondary mt-0.5" />
                <a href="tel:+92-XXX-XXXXXXX" className="hover:text-secondary transition-colors">
                  +92-XXX-XXXXXXX
                </a>
              </li>
              <li className="flex items-start gap-3 text-text-secondary">
                <MapPin className="w-5 h-5 text-secondary mt-0.5" />
                <span>Pakistan</span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://linkedin.com/company/infiniprox"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-elevated border border-white/10 flex items-center justify-center text-text-secondary hover:text-secondary hover:border-secondary transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/infiniprox"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-elevated border border-white/10 flex items-center justify-center text-text-secondary hover:text-secondary hover:border-secondary transition-all"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/infiniprox"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-elevated border border-white/10 flex items-center justify-center text-text-secondary hover:text-secondary hover:border-secondary transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-tertiary text-sm">
            © {currentYear} INFINI PRO X. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-text-tertiary hover:text-secondary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-text-tertiary hover:text-secondary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
