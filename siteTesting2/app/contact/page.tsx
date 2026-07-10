import { Metadata } from 'next'
import { MainLayout } from '@/components/layout/main-layout'
import { ContactContent } from '@/components/sections/contact-content'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    "Ready to transform your data into actionable insights? Contact our expert team for a free consultation. We're here to help you unlock your data's full potential.",
  openGraph: {
    title: 'Contact Us - AcubeInsights',
    description:
      'Ready to transform your data into actionable insights? Contact our expert team for a free consultation.',
  },
  alternates: {
    canonical: '/contact',
  },
}

export default function ContactPage() {
  return (
    <MainLayout>
      <ContactContent />
    </MainLayout>
  )
}
