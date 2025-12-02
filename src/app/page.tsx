import Hero from '@/components/sections/Hero'
import Products from '@/components/sections/Products'
import WhatsAppDemo from '@/components/sections/WhatsAppDemo'
import Features from '@/components/sections/Features'
import Industries from '@/components/sections/Industries'
import CTA from '@/components/sections/CTA'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-primary">
      <Hero />
      <Products />
      <WhatsAppDemo />
      <Features />
      <Industries />
      <CTA />
      <Footer />
    </main>
  )
}
