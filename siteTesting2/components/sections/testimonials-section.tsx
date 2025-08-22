"use client"

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, Quote, Sparkles } from 'lucide-react'

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CTO, TechCorp',
    content: 'The data infrastructure they built for us has transformed our entire operation. We\'ve seen a 300% improvement in processing speed and our team can now focus on insights rather than maintenance.',
    avatar: 'SJ',
    rating: 5
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Data Director, DataFlow',
    content: 'Outstanding expertise in database optimization. They helped us reduce costs by 40% while improving performance. The team is professional, responsive, and truly understands our business needs.',
    avatar: 'MC',
    rating: 5
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'VP Engineering, InnovateLab',
    content: 'From initial consultation to final implementation, the entire process was seamless. Their AI automation solutions have saved us countless hours and significantly improved our data accuracy.',
    avatar: 'ER',
    rating: 5
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'CEO, CloudSync',
    content: 'The best investment we\'ve made this year. Their comprehensive approach to data management has given us a competitive edge. Highly recommend for any business serious about data-driven growth.',
    avatar: 'DK',
    rating: 5
  }
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  }

  return (
    <section className="py-20 bg-surfe-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-surfe-button-light text-surfe-primary rounded-full text-sm font-semibold mb-6">
            <Sparkles className="h-4 w-4 mr-2" />
            Client Testimonials
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-surfe-primary mb-6">
            What Our Clients
            <span className="block text-surfe-primary">Say</span>
          </h2>
          <p className="text-xl text-surfe-text-secondary max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it - hear from the businesses we've helped transform
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <Card className="bg-surfe-white border-surfe-200 shadow-lg">
            <CardContent className="p-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-surfe-primary rounded-2xl flex items-center justify-center mx-auto mb-8">
                  <Quote className="h-8 w-8 text-surfe-white" />
                </div>
                
                <blockquote className="text-xl text-surfe-text-secondary leading-relaxed mb-8 italic">
                  "{TESTIMONIALS[currentIndex].content}"
                </blockquote>

                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-surfe-primary rounded-full flex items-center justify-center mr-4">
                    <span className="text-surfe-white font-semibold text-lg">
                      {TESTIMONIALS[currentIndex].avatar}
                    </span>
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-surfe-primary text-lg">
                      {TESTIMONIALS[currentIndex].name}
                    </div>
                    <div className="text-surfe-text-secondary">
                      {TESTIMONIALS[currentIndex].role}
                    </div>
                  </div>
                </div>

                <div className="flex justify-center space-x-1">
                  {[...Array(TESTIMONIALS[currentIndex].rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-center mt-8 space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonial}
              className="border-surfe-200 text-surfe-primary hover:bg-surfe-button-light hover:text-surfe-primary"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="flex space-x-2">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentIndex ? 'bg-surfe-primary' : 'bg-surfe-200'
                  }`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonial}
              className="border-surfe-200 text-surfe-primary hover:bg-surfe-button-light hover:text-surfe-primary"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
} 