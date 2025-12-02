import type { Metadata } from 'next'
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'INFINI PRO X | AI-Driven Excellence for Every Industry',
  description: 'Industrial Intelligence Meets Business Automation - AI Solutions Built for Pakistan\'s Growth Economy. 24/7 WhatsApp AI Agents, Custom AI Platforms, Process Automation, and Industrial AI Solutions.',
  keywords: [
    'AI Solutions Pakistan',
    'WhatsApp AI Agent',
    'Business Automation',
    'Process Automation',
    'Custom AI Platforms',
    'Industrial AI',
    'n8n Workflows',
    'Pakistan AI Company',
  ],
  authors: [{ name: 'INFINI PRO X' }],
  creator: 'INFINI PRO X',
  publisher: 'INFINI PRO X',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.infiniprox.com',
    siteName: 'INFINI PRO X',
    title: 'INFINI PRO X | AI-Driven Excellence for Every Industry',
    description: 'Industrial Intelligence Meets Business Automation - AI Solutions Built for Pakistan\'s Growth Economy.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'INFINI PRO X - AI Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'INFINI PRO X | AI-Driven Excellence',
    description: 'Industrial Intelligence Meets Business Automation - AI Solutions Built for Pakistan\'s Growth Economy.',
    images: ['/og-image.jpg'],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: '#0A0F1F',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-primary bg-primary text-text-primary antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
