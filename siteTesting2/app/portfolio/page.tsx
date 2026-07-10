import { Metadata } from 'next'
import { MainLayout } from '@/components/layout/main-layout'
import { PageHero } from '@/components/sections/page-hero'
import { PortfolioRegistry } from '@/components/sections/portfolio-registry'
import { CtaSection } from '@/components/sections/cta-section'

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    "Explore our successful data consulting projects and case studies. See how we've helped businesses transform their data into actionable insights and achieve measurable results.",
  openGraph: {
    title: 'Portfolio - AcubeInsights',
    description: 'Explore our successful data consulting projects and case studies.',
  },
  alternates: {
    canonical: '/portfolio',
  },
}

const HERO_STATS = [
  { value: '30%', label: 'Avg ROI Improvement' },
  { value: '60%', label: 'Efficiency Gain' },
  { value: '50+', label: 'Projects Delivered' },
  { value: '95%', label: 'On-time Delivery' },
]

export default function PortfolioPage() {
  return (
    <MainLayout>
      <PageHero
        eyebrow="Case Studies & Portfolio"
        title={
          <>
            Our <span className="text-brass">Success Stories</span>
          </>
        }
        sub="Real, measurable impact from data engineering, analytics, and automation projects across industries."
        stats={HERO_STATS}
        scene="cloud"
      />
      <PortfolioRegistry />
      <CtaSection />
    </MainLayout>
  )
}
