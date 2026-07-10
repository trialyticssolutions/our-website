import { Metadata } from 'next'
import { MainLayout } from '@/components/layout/main-layout'
import { PageHero } from '@/components/sections/page-hero'
import { TestimonialsWall } from '@/components/sections/testimonials-wall'
import { CtaSection } from '@/components/sections/cta-section'

export const metadata: Metadata = {
  title: 'Client Testimonials',
  description:
    "Read what our clients say about our data consulting services. Discover how we've helped businesses transform their data and achieve remarkable results.",
  openGraph: {
    title: 'Client Testimonials - AcubeInsights',
    description: 'Read what our clients say about our data consulting services.',
  },
  alternates: {
    canonical: '/testimonials',
  },
}

const HERO_STATS = [
  { value: '4.7/5', label: 'Average Rating' },
  { value: '100%', label: 'Satisfied Clients' },
  { value: '50+', label: 'Success Stories' },
  { value: '30%', label: 'Avg ROI Improvement' },
]

export default function TestimonialsPage() {
  return (
    <MainLayout>
      <PageHero
        eyebrow="Client Success Stories"
        title={
          <>
            What Our <span className="text-brass">Clients Say</span>
          </>
        }
        sub="Real results from Indian and global startups using our data engineering, analytics, and automation solutions."
        stats={HERO_STATS}
        scene="wave"
      />
      <TestimonialsWall />
      <CtaSection />
    </MainLayout>
  )
}
