"use client"

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, Quote, Sparkles } from 'lucide-react'
import { Star, CheckCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'

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
  return (
    <section className="section-spacing bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-spacing">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold element-spacing-sm">
            <Star className="h-4 w-4 mr-2" />
            Client Success Stories
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-surfe-primary element-spacing-sm">
            What Our
            <span className="block text-surfe-primary">Clients Say</span>
          </h2>
          <p className="text-xl text-surfe-text-secondary max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it - hear from the businesses we've helped transform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto element-spacing-lg">
          {[
            {
              name: 'Sarah Johnson',
              role: 'CTO',
              company: 'TechFlow Inc.',
              content: 'The team transformed our data infrastructure completely. We went from manual processes to automated insights in just 8 weeks.',
              rating: 5,
              avatar: 'SJ',
              color: 'from-blue-500 to-cyan-500'
            },
            {
              name: 'Michael Chen',
              role: 'Data Director',
              company: 'GrowthCorp',
              content: 'Outstanding expertise in AI implementation. Our predictive analytics now drive 40% of our business decisions.',
              rating: 5,
              avatar: 'MC',
              color: 'from-purple-500 to-pink-500'
            },
            {
              name: 'Emily Rodriguez',
              role: 'Operations Manager',
              company: 'ScaleUp Solutions',
              content: 'Professional, reliable, and results-driven. They delivered everything promised and more.',
              rating: 5,
              avatar: 'ER',
              color: 'from-orange-500 to-red-500'
            }
          ].map((testimonial, index) => (
            <div key={index} className="group bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${testimonial.color} rounded-xl flex items-center justify-center text-white font-semibold text-lg mr-4`}>
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role} at {testimonial.company}</div>
                </div>
              </div>
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">
                  Verified Client
                </div>
                <CheckCircle className="h-5 w-5 text-green-500" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center element-spacing-lg">
          <Button 
            className="btn-secondary btn-lg"
            asChild
          >
            <Link href="/testimonials">
              View All Testimonials
              <ArrowRight className="ml-3 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}