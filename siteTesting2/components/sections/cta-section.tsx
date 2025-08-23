import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles } from 'lucide-react'

export function CtaSection() {
  return (
    <section className="py-20 bg-surfe-primary relative">
      {/* 3D Background - Subtle Effect */}
      <div className="nugget-hero-bg">
        <div className="nugget-wireframe-grid"></div>
        <div className="nugget-particles">
          <div className="nugget-particle"></div>
          <div className="nugget-particle"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 bg-surfe-white/20 text-surfe-white rounded-full text-sm font-semibold mb-6">
            <Sparkles className="h-4 w-4 mr-2" />
            Ready to Transform Your Data?
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-surfe-white mb-6">
            Start Your Data
            <span className="block text-surfe-white">Transformation Today</span>
          </h2>
          
          <p className="text-xl text-surfe-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            Join hundreds of businesses that have already unlocked the full potential of their data. 
            Get started with a free consultation and see the difference we can make.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white text-lg px-10 py-5 h-auto shadow-lg hover:shadow-xl transition-all duration-300"
              asChild
            >
              <Link href="/contact">
                Get Started Free
                <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-surfe-white text-surfe-white hover:bg-surfe-white hover:text-surfe-primary text-lg px-10 py-5 h-auto transition-all duration-300"
              asChild
            >
              <Link href="/services">
                View Services
              </Link>
            </Button>
          </div>
          
          <p className="text-sm text-surfe-white/70 mt-8">
            No credit card required • 30-day free trial • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  )
} 