"use client"

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, Quote, Sparkles } from 'lucide-react'
import { Star, CheckCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { TESTIMONIALS } from '@/data/constants'

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
          {TESTIMONIALS.filter(testimonial => testimonial.featured).slice(0, 3).map((testimonial, index) => {
            const colors = [
              'from-blue-500 to-cyan-500',
              'from-purple-500 to-pink-500', 
              'from-orange-500 to-red-500'
            ];
            const avatar = testimonial.name.split(' ').map(n => n[0]).join('');
            return (
            <div key={testimonial.id} className="group card-surfe p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${colors[index]} rounded-xl flex items-center justify-center text-white font-semibold text-lg mr-4`}>
                  {avatar}
                </div>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.position} at {testimonial.company}</div>
                </div>
              </div>
              
              <div className="flex items-center mb-4">
                {Array.from({ length: Math.floor(testimonial.rating) }).map((_, i) => (
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
            )
          })}
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