import { Metadata } from 'next'
import { MainLayout } from '@/components/layout/main-layout'
import { AboutContent } from '@/components/sections/about-content'
import { CtaSection } from '@/components/sections/cta-section'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    "Learn about our mission to help businesses unlock their data's potential. Meet our expert team and discover the values that drive our data consulting services.",
  openGraph: {
    title: 'About Us - AcubeInsights',
    description: "Learn about our mission to help businesses unlock their data's potential.",
  },
  alternates: {
    canonical: '/about',
  },
}

export default function AboutPage() {
  return (
    <MainLayout>
      <AboutContent />
      <CtaSection />
    </MainLayout>
  )
}
