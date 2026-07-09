import { HeroSection } from '@/components/sections/hero-section'
import { ServicesOverview } from '@/components/sections/services-overview'
import { TestimonialsSection } from '@/components/sections/testimonials-section'
import { CtaSection } from '@/components/sections/cta-section'
import { MainLayout } from '@/components/layout/main-layout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AcubeInsights - Unlock Your Data\'s Full Potential',
  description: 'Transforming raw data into actionable insights and automated solutions for scalable growth. From database setup to AI automation, we help businesses unlock their data potential.',
  keywords: ['data consulting', 'business intelligence', 'data analytics', 'AI automation', 'database consulting'],
  openGraph: {
    title: 'AcubeInsights - Unlock Your Data\'s Full Potential',
    description: 'Transforming raw data into actionable insights and automated solutions for scalable growth.',
    type: 'website',
    url: '/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AcubeInsights - Unlock Your Data\'s Full Potential',
    description: 'Transforming raw data into actionable insights and automated solutions for scalable growth.',
  },
  alternates: {
    canonical: '/',
  },
}

export default function HomePage() {
  return (
    <MainLayout>
      <HeroSection />
      <ServicesOverview />
      <TestimonialsSection />
      <CtaSection />
    </MainLayout>
  )
}