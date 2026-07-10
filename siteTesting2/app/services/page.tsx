import { Metadata } from 'next'
import { MainLayout } from '@/components/layout/main-layout'
import { ServicesHero } from '@/components/sections/services-hero'
import { ServicesDetail } from '@/components/sections/services-detail'
import { ProcessSection } from '@/components/sections/process-section'
import { CtaSection } from '@/components/sections/cta-section'

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    "Comprehensive data consulting services from database setup to AI automation. Transform your business with our expert data solutions and unlock your data's full potential.",
  openGraph: {
    title: 'Our Services - AcubeInsights',
    description: 'Comprehensive data consulting services from database setup to AI automation.',
  },
  alternates: {
    canonical: '/services',
  },
}

export default function ServicesPage() {
  return (
    <MainLayout>
      <ServicesHero />
      <ServicesDetail />
      <ProcessSection />
      <CtaSection />
    </MainLayout>
  )
}
