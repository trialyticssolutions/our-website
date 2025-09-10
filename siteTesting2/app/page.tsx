import { HeroSection } from '@/components/sections/hero-section'
import { ServicesOverview } from '@/components/sections/services-overview'
import { TrustIndicators } from '@/components/sections/trust-indicators'
import { TestimonialsSection } from '@/components/sections/testimonials-section'
import { CtaSection } from '@/components/sections/cta-section'
import { MainLayout } from '@/components/layout/main-layout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Data Consulting Agency - Unlock Your Data\'s Full Potential',
  description: 'Transforming raw data into actionable insights and automated solutions for scalable growth. From database setup to AI automation, we help businesses unlock their data potential.',
  keywords: ['data consulting', 'business intelligence', 'data analytics', 'AI automation', 'database consulting'],
  openGraph: {
    title: 'Data Consulting Agency - Unlock Your Data\'s Full Potential',
    description: 'Transforming raw data into actionable insights and automated solutions for scalable growth.',
    type: 'website',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Data Consulting Agency - Unlock Your Data\'s Full Potential',
    description: 'Transforming raw data into actionable insights and automated solutions for scalable growth.',
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com',
  },
}

export default function HomePage() {
  return (
    <MainLayout>
      <HeroSection />
      <ServicesOverview />
      <TrustIndicators />
      <TestimonialsSection />
      <CtaSection />
    </MainLayout>
  )
}