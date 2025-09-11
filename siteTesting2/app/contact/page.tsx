import { ContactForm } from '@/components/forms/contact-form'
import { MainLayout } from '@/components/layout/main-layout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { SITE_CONFIG } from '@/data/constants'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - Data Consulting Agency',
  description: 'Ready to transform your data into actionable insights? Contact our expert team for a free consultation. We\'re here to help you unlock your data\'s full potential.',
  openGraph: {
    title: 'Contact Us - Data Consulting Agency',
    description: 'Ready to transform your data into actionable insights? Contact our expert team for a free consultation.',
  },
}

export default function ContactPage() {
  return (
    <MainLayout>
      <div className="section-spacing bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center element-spacing-lg">
            <h1 className="text-4xl md:text-5xl font-bold text-surfe-primary element-spacing-sm leading-tight">
              Let's Transform Your
              <span className="block text-orange-custom">Data Together</span>
            </h1>
            <p className="text-xl text-surfe-text-secondary max-w-3xl mx-auto leading-relaxed">
              Ready to unlock your data's potential? We'd love to hear about your project and discuss how we can help you achieve your goals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 xl:gap-8 items-start">
            {/* Contact Form */}
            <div className="lg:col-span-8 lg:pr-3 xl:pr-4">
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-4 lg:pl-0 space-y-5 relative w-[calc(100%-15px)] -left-[15px]">
              <Card className="card-surfe rounded-xl">
                <CardHeader className="p-4 pb-3">
                  <CardTitle className="flex items-center text-white text-base">
                    <span className="w-8 h-8 bg-brand-purple rounded-full flex items-center justify-center mr-2">
                      <Mail className="h-4 w-4 text-white" />
                    </span>
                    Email Us
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="text-surfe-text-secondary mb-2 text-sm">
                    Get in touch via email
                  </p>
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="text-orange-custom font-semibold text-sm"
                  >
                    {SITE_CONFIG.email}
                  </a>
                </CardContent>
              </Card>

              <Card className="card-surfe rounded-xl">
                <CardHeader className="p-4 pb-3">
                  <CardTitle className="flex items-center text-white text-base">
                    <span className="w-8 h-8 bg-brand-purple rounded-full flex items-center justify-center mr-2">
                      <Phone className="h-4 w-4 text-white" />
                    </span>
                    Call Us
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="text-surfe-text-secondary mb-2 text-sm">
                    Speak directly with our team
                  </p>
                  <a
                    href={`tel:${SITE_CONFIG.phone}`}
                    className="text-orange-custom font-semibold text-sm"
                  >
                    {SITE_CONFIG.phone}
                  </a>
                </CardContent>
              </Card>

              <Card className="card-surfe rounded-xl">
                <CardHeader className="p-4 pb-3">
                  <CardTitle className="flex items-center text-white text-base">
                    <span className="w-8 h-8 bg-brand-purple rounded-full flex items-center justify-center mr-2">
                      <MapPin className="h-4 w-4 text-white" />
                    </span>
                    Visit Us
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="text-surfe-text-secondary mb-2 text-sm">
                    Our office location
                  </p>
                  <address className="text-surfe-text-secondary not-italic text-sm leading-relaxed">
                    {SITE_CONFIG.address}
                  </address>
                </CardContent>
              </Card>

              <Card className="card-surfe rounded-xl">
                <CardHeader className="p-4 pb-3">
                  <CardTitle className="flex items-center text-white text-base">
                    <span className="w-8 h-8 bg-brand-purple rounded-full flex items-center justify-center mr-2">
                      <Clock className="h-4 w-4 text-white" />
                    </span>
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="space-y-2 text-surfe-text-secondary text-sm">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="card-surfe rounded-xl">
                <CardHeader className="p-4 pb-3">
                  <CardTitle className="text-white text-base">Need Immediate Help?</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0 space-y-3">
                  <p className="text-surfe-text-secondary text-sm">
                    For urgent inquiries, use our floating chat widget or schedule a call directly.
                  </p>
                  <div className="text-xs text-surfe-text-secondary">
                    ⚡ Average response time: 2 hours
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16 pt-16 border-t border-gray-800">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-surfe-primary mb-4">
                Frequently Asked
                <span className="block text-orange-custom">Questions</span>
              </h2>
              <p className="text-surfe-text-secondary max-w-2xl mx-auto">
                Have questions? Here are some common inquiries we receive.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  How long does a typical project take?
                </h3>
                <p className="text-surfe-text-secondary">
                  Project timelines vary based on scope and complexity. Most projects range from 2-12 weeks. We'll provide a detailed timeline during our initial consultation.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Do you offer ongoing support?
                </h3>
                <p className="text-surfe-text-secondary">
                  Yes! We provide various support packages including maintenance, monitoring, and optimization services to ensure your solutions continue to deliver value.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  What's included in a free consultation?
                </h3>
                <p className="text-surfe-text-secondary">
                  We'll assess your current data infrastructure, understand your goals, and provide recommendations. No obligations - just valuable insights for your business.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Do you work with small businesses?
                </h3>
                <p className="text-surfe-text-secondary">
                  Absolutely! We work with businesses of all sizes, from startups to enterprises. Our solutions are scalable and tailored to your specific needs and budget.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
} 