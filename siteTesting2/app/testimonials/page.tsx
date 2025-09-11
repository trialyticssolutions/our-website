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
  const allTestimonials = TESTIMONIALS.filter(testimonial => !testimonial.featured)

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

  const circleColors = [
    'bg-gradient-to-r from-blue-500 to-cyan-500 text-white',
    'bg-gradient-to-r from-purple-500 to-pink-500 text-white',
    'bg-gradient-to-r from-orange-500 to-red-500 text-white',
    'bg-gradient-to-r from-green-500 to-emerald-500 text-white',
    'bg-gradient-to-r from-indigo-500 to-blue-500 text-white',
    'bg-gradient-to-r from-pink-500 to-rose-500 text-white',
  ]

  return (
    <MainLayout>
      {/* Hero Section (match services hero) */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-16 left-16 w-64 h-64 bg-blue-300/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-16 right-24 w-80 h-80 bg-cyan-300/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/3 right-1/3 w-56 h-56 bg-purple-300/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-8 opacity-0 animate-fade-in-up" style={{ animationFillMode: 'forwards' }}>
              Client Success Stories
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-surfe-primary mb-8 leading-tight opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              What Our
              <span className="block text-orange-custom">Clients Say</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
              Real results from Indian and global startups using our data engineering, analytics, and automation solutions.
            </p>

            {/* Hero Stats */}
            <div className="mt-12 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
              <div className="rounded-3xl border border-white/10 bg-black/20 backdrop-blur-md px-6 py-8 shadow-xl">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                  <div>
                    <div className="text-3xl font-bold text-orange-custom mb-2">4.7/5</div>
                    <div className="text-sm text-white/80">Average Rating</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white mb-2">100%</div>
                    <div className="text-sm text-white/80">Satisfied Clients</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white mb-2">50+</div>
                    <div className="text-sm text-white/80">Success Stories</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-orange-custom mb-2">30%</div>
                    <div className="text-sm text-white/80">Avg ROI Improvement</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          {/* Stats moved to hero */}

          {/* Featured Testimonials */}
          <div className="element-spacing-lg">
            <h2 className="text-4xl md:text-5xl font-bold text-surfe-primary mb-6 text-center leading-tight">
              Featured
              <span className="block text-orange-custom">Success Stories</span>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredTestimonials.map((testimonial) => (
                <Card key={testimonial.id} className="card-surfe hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between mb-4">
                      <Badge className="bg-surfe-primary/10 text-surfe-primary">Featured</Badge>
                      <div className="flex items-center">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                    <Quote className="h-8 w-8 text-surfe-primary mb-4" />
                  </CardHeader>
                  <CardContent>
                    <blockquote className="text-lg text-surfe-text-secondary mb-6 leading-relaxed">
                      "{testimonial.content}"
                    </blockquote>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-surfe-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-surfe-primary font-semibold text-lg">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-surfe-primary">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-surfe-text-secondary">
                          {testimonial.position}
                        </div>
                        <div className="flex items-center text-sm text-surfe-text-secondary">
                          <Building className="h-3 w-3 mr-1" />
                          {testimonial.company}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center text-xs text-surfe-text-secondary">
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
          <div className="element-spacing-lg">
            <h2 className="text-4xl md:text-5xl font-bold text-surfe-primary mb-6 text-center leading-tight">
              All Client
              <span className="block text-orange-custom">Reviews</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allTestimonials.map((testimonial) => (
                <Card key={testimonial.id} className="h-full flex flex-col card-surfe hover:shadow-xl transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        {renderStars(testimonial.rating)}
                      </div>
                      <div className="flex items-center text-xs text-surfe-text-secondary">
                        <Calendar className="h-3 w-3 mr-1" />
                        {formatDate(testimonial.date)}
                      </div>
                    </div>
                    <Quote className="h-6 w-6 text-surfe-primary" />
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <blockquote className="text-surfe-text-secondary mb-4 flex-1 line-clamp-4 leading-relaxed">
                      "{testimonial.content}"
                    </blockquote>
                    
                    <div className="border-t pt-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-surfe-primary/10 rounded-full flex items-center justify-center">
                          <span className="text-surfe-primary font-semibold text-sm">
                            {testimonial.name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <div className="font-semibold text-surfe-primary text-sm">
                            {testimonial.name}
                          </div>
                          <div className="text-xs text-surfe-text-secondary">
                            {testimonial.position}
                          </div>
                          <div className="flex items-center text-xs text-surfe-text-secondary">
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
          <div className="element-spacing-lg">
            <h2 className="text-4xl md:text-5xl font-bold text-surfe-primary mb-6 text-center leading-tight">
              Trusted Across
              <span className="block text-orange-custom">Industries</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { industry: 'E-commerce', count: '15+' },
                { industry: 'Healthcare', count: '8+' },
                { industry: 'Finance', count: '12+' },
                { industry: 'Manufacturing', count: '10+' },
                { industry: 'Technology', count: '20+' },
                { industry: 'Retail', count: '7+' },
                { industry: 'Education', count: '5+' },
                { industry: 'Other', count: '8+' }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 font-bold shadow-lg ${circleColors[index % circleColors.length]}`}>
                    {item.count}
                  </div>
                  <div className="text-sm font-medium text-surfe-primary">
                    {item.industry}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Review Summary */}
          <div className="card-surfe rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold text-surfe-primary mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-surfe-text-secondary mb-6 max-w-2xl mx-auto leading-relaxed">
              Our clients consistently report significant improvements in efficiency, 
              ROI, and decision-making capabilities. Let us help you achieve similar results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="/contact">Get Your Free Consultation</a>
              </Button>
              <Button size="lg" className="btn-secondary" asChild>
                <a href="/portfolio">View Case Studies</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </MainLayout>
  )
} 