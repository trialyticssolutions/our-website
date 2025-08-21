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
      <div className="section-padding bg-gray-50">
        <div className="container mx-auto container-padding">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Let's Transform Your Data Together
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to unlock your data's potential? We'd love to hear about your project 
              and discuss how we can help you achieve your goals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Mail className="h-5 w-5 mr-2 text-primary" />
                    Email Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-2">
                    Get in touch via email
                  </p>
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="text-primary hover:text-primary/80 font-medium"
                  >
                    {SITE_CONFIG.email}
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Phone className="h-5 w-5 mr-2 text-primary" />
                    Call Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-2">
                    Speak directly with our team
                  </p>
                  <a
                    href={`tel:${SITE_CONFIG.phone}`}
                    className="text-primary hover:text-primary/80 font-medium"
                  >
                    {SITE_CONFIG.phone}
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-primary" />
                    Visit Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-2">
                    Our office location
                  </p>
                  <address className="text-gray-700 not-italic">
                    {SITE_CONFIG.address}
                  </address>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-primary" />
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-gray-700">
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
              <Card className="bg-primary text-white">
                <CardHeader>
                  <CardTitle>Need Immediate Help?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-blue-100">
                    For urgent inquiries, use our floating chat widget or schedule a call directly.
                  </p>
                  <div className="text-sm text-blue-200">
                    ⚡ Average response time: 2 hours
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16 pt-16 border-t border-gray-200">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Have questions? Here are some common inquiries we receive.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  How long does a typical project take?
                </h3>
                <p className="text-gray-600">
                  Project timelines vary based on scope and complexity. Most projects range from 2-12 weeks. We'll provide a detailed timeline during our initial consultation.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Do you offer ongoing support?
                </h3>
                <p className="text-gray-600">
                  Yes! We provide various support packages including maintenance, monitoring, and optimization services to ensure your solutions continue to deliver value.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  What's included in a free consultation?
                </h3>
                <p className="text-gray-600">
                  We'll assess your current data infrastructure, understand your goals, and provide recommendations. No obligations - just valuable insights for your business.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Do you work with small businesses?
                </h3>
                <p className="text-gray-600">
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