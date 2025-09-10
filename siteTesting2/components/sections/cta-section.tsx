import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles } from 'lucide-react'

export function CtaSection() {
  return (
    <section className="relative section-spacing bg-gradient-to-r from-surfe-primary to-surfe-700 overflow-hidden">
      {/* 3D Background - Subtle Effect */}
      <div className="nugget-hero-bg">
        <div className="nugget-wireframe-grid"></div>
        <div className="nugget-particles">
          <div className="nugget-particle"></div>
          <div className="nugget-particle"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto text-spacing">
          <div className="inline-flex items-center px-4 py-2 bg-surfe-white/20 text-surfe-white rounded-full text-sm font-semibold mb-6">
            <Sparkles className="h-4 w-4 mr-2" />
            Ready to Transform Your Data?
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-surfe-white element-spacing-sm leading-tight">
            Start Your Data
            <span className="block text-orange-custom">Transformation Today</span>
          </h2>
          
          <p className="text-xl text-surfe-white/90 element-spacing-lg max-w-3xl mx-auto">
            Join hundreds of businesses that have already unlocked the full potential of their data. 
            Get started with a free consultation and see the difference we can make.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center element-spacing-md">
            <Button 
              className="btn-secondary btn-lg text-lg bg-white text-surfe-primary hover:bg-gray-100"
              asChild
            >
              <Link href="/contact">
                Get Started Free
                <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
            </Button>
            <Button 
              className="btn-secondary btn-lg text-lg border-white text-white hover:bg-white hover:text-surfe-primary"
              asChild
            >
              <Link href="/services">
                View Services
              </Link>
            </Button>
          </div>
          
          <p className="text-sm text-surfe-white/70 element-spacing-xs">
            No credit card required • 30-day free trial • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  )
}