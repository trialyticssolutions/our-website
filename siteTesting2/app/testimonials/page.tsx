import { MainLayout } from '@/components/layout/main-layout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Star, Quote, Building, Calendar } from 'lucide-react'
import { TESTIMONIALS } from '@/data/constants'
import { CtaSection } from '@/components/sections/cta-section'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Client Testimonials - Data Consulting Agency',
  description: 'Read what our clients say about our data consulting services. Discover how we\'ve helped businesses transform their data and achieve remarkable results.',
  openGraph: {
    title: 'Client Testimonials - Data Consulting Agency',
    description: 'Read what our clients say about our data consulting services.',
  },
}

export default function TestimonialsPage() {
  const featuredTestimonials = TESTIMONIALS.filter(testimonial => testimonial.featured)
  const allTestimonials = TESTIMONIALS

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ))
  }

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long'
    }).format(date)
  }

  return (
    <MainLayout>
      <div className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about 
              the transformative impact of our data solutions on their businesses.
            </p>
          </div>

          {/* Stats Section */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
                <div className="text-sm text-gray-600">Average Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-gray-600">Satisfied Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-gray-600">Success Stories</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">150%</div>
                <div className="text-sm text-gray-600">Avg ROI Improvement</div>
              </div>
            </div>
          </div>

          {/* Featured Testimonials */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Featured Success Stories
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredTestimonials.map((testimonial) => (
                <Card key={testimonial.id} className="border-2 border-primary/20 shadow-lg">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <Badge className="bg-primary/10 text-primary">Featured</Badge>
                      <div className="flex items-center">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                    <Quote className="h-8 w-8 text-primary mb-4" />
                  </CardHeader>
                  <CardContent>
                    <blockquote className="text-lg text-gray-700 mb-6 leading-relaxed">
                      "{testimonial.content}"
                    </blockquote>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-primary font-semibold text-lg">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-gray-600">
                          {testimonial.position}
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Building className="h-3 w-3 mr-1" />
                          {testimonial.company}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center text-xs text-gray-500">
                          <Calendar className="h-3 w-3 mr-1" />
                          {formatDate(testimonial.date)}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* All Testimonials */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              All Client Reviews
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allTestimonials.map((testimonial) => (
                <Card key={testimonial.id} className="h-full flex flex-col">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        {renderStars(testimonial.rating)}
                      </div>
                      <div className="flex items-center text-xs text-gray-500">
                        <Calendar className="h-3 w-3 mr-1" />
                        {formatDate(testimonial.date)}
                      </div>
                    </div>
                    <Quote className="h-6 w-6 text-primary" />
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <blockquote className="text-gray-700 mb-4 flex-1 line-clamp-4">
                      "{testimonial.content}"
                    </blockquote>
                    
                    <div className="border-t pt-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <span className="text-primary font-semibold text-sm">
                            {testimonial.name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 text-sm">
                            {testimonial.name}
                          </div>
                          <div className="text-xs text-gray-600">
                            {testimonial.position}
                          </div>
                          <div className="flex items-center text-xs text-gray-500">
                            <Building className="h-3 w-3 mr-1" />
                            {testimonial.company}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Industry Breakdown */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Trusted Across Industries
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { industry: 'E-commerce', count: '15+', color: 'bg-blue-100 text-blue-700' },
                { industry: 'Healthcare', count: '8+', color: 'bg-green-100 text-green-700' },
                { industry: 'Finance', count: '12+', color: 'bg-purple-100 text-purple-700' },
                { industry: 'Manufacturing', count: '10+', color: 'bg-orange-100 text-orange-700' },
                { industry: 'Technology', count: '20+', color: 'bg-indigo-100 text-indigo-700' },
                { industry: 'Retail', count: '7+', color: 'bg-pink-100 text-pink-700' },
                { industry: 'Education', count: '5+', color: 'bg-teal-100 text-teal-700' },
                { industry: 'Other', count: '8+', color: 'bg-gray-100 text-gray-700' }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 ${item.color} font-bold`}>
                    {item.count}
                  </div>
                  <div className="text-sm font-medium text-gray-900">
                    {item.industry}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Review Summary */}
          <div className="bg-gray-50 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our clients consistently report significant improvements in efficiency, 
              ROI, and decision-making capabilities. Let us help you achieve similar results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="/contact">Get Your Free Consultation</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/portfolio">View Case Studies</a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <CtaSection />
    </MainLayout>
  )
} 