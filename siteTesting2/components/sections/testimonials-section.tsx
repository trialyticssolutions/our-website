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
    name: 'Amit Agrawal',
    role: 'CFO, USA India CFO',
    content: 'Their financial data automation helped us reduce month-end closing from 15 days to 3 days. Our reporting accuracy improved by 95% and we can now provide real-time insights to our US clients.',
    avatar: 'AA',
    rating: 5
  },
  {
    id: 2,
    name: 'Vipul Agrawal',
    role: 'SVP, Mamaearth',
    content: 'The customer analytics platform they built helps us understand our D2C customers better. We saw a 35% increase in repeat purchases within 6 months of implementation.',
    avatar: 'VA',
    rating: 5
  },
  {
    id: 3,
    name: 'Ashutosh Chugh',
    role: 'AVP Analytics, Wishlink',
    content: 'Their data pipeline solution processes over 2 million affiliate transactions daily without any downtime. Commission calculations that took hours now happen in minutes.',
    avatar: 'AC',
    rating: 5
  },
  {
    id: 4,
    name: 'Priya Sharma',
    role: 'Head of Operations, UrbanClap',
    content: 'The service provider matching algorithm they developed increased our booking success rate by 28%. Our customers now get matched with the right professionals 40% faster.',
    avatar: 'PS',
    rating: 5
  },
  {
    id: 5,
    name: 'Rajesh Kumar',
    role: 'CTO, Zomato',
    content: 'Their real-time delivery optimization system reduced our average delivery time by 12 minutes. The ML models adapt to traffic patterns and have improved customer satisfaction significantly.',
    avatar: 'RK',
    rating: 5
  },
  {
    id: 6,
    name: 'Sarah Mitchell',
    role: 'VP Engineering, Stripe',
    content: 'The fraud detection system they implemented catches 99.2% of suspicious transactions while reducing false positives by 60%. It\'s been crucial for our payment processing reliability.',
    avatar: 'SM',
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto element-spacing-lg" style={{marginTop: '4rem'}}>
          {[
            {
              name: 'Amit Agrawal',
              role: 'CFO',
              company: 'USA India CFO',
              content: 'Their financial data automation helped us reduce month-end closing from 15 days to 3 days. Our reporting accuracy improved by 95%.',
              rating: 5,
              avatar: 'AA',
              color: 'from-blue-500 to-cyan-500'
            },
            {
              name: 'Vipul Agrawal',
              role: 'SVP',
              company: 'Mamaearth',
              content: 'The customer analytics platform they built helps us understand our D2C customers better. We saw a 35% increase in repeat purchases.',
              rating: 5,
              avatar: 'VA',
              color: 'from-purple-500 to-pink-500'
            },
            {
              name: 'Ashutosh Chugh',
              role: 'AVP Analytics',
              company: 'Wishlink',
              content: 'Their data pipeline processes over 2 million affiliate transactions daily. Commission calculations that took hours now happen in minutes.',
              rating: 5,
              avatar: 'AC',
              color: 'from-orange-500 to-red-500'
            }
          ].map((testimonial, index) => (
            <div key={index} className="group card-surfe p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${testimonial.color} rounded-xl flex items-center justify-center text-white font-semibold text-lg mr-4`}>
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role} at {testimonial.company}</div>
                </div>
              </div>
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-400">
                  Verified Client
                </div>
                <CheckCircle className="h-5 w-5 text-green-500" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center element-spacing-md">
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