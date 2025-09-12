import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, BarChart3, Users, TrendingUp, CheckCircle, Sparkles, Shield } from 'lucide-react'
import { HERO_STATS } from '@/data/constants'

export function HeroSection() {
  return (
    <section className="relative flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden section-spacing">
      {/* 3D Background - Full Effect */}
      <div className="nugget-hero-bg">
        <div className="nugget-wireframe-grid"></div>
        <div className="nugget-wireframe-sphere"></div>
        <div className="nugget-wireframe-sphere-small"></div>
        <div className="nugget-geometric-shapes"></div>
        <div className="nugget-geometric-triangle"></div>
        <div className="nugget-glow-orb"></div>
        <div className="nugget-particles">
          <div className="nugget-particle"></div>
          <div className="nugget-particle"></div>
          <div className="nugget-particle"></div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-300/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-300/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8 text-spacing">
          {/* Main headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-surfe-primary element-spacing-sm leading-tight opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            Unlock Your Data's
            <span className="block text-orange-custom">
              Full Potential
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-surfe-text-secondary max-w-3xl mx-auto element-spacing-md opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            Transforming raw data into actionable insights and automated solutions for scalable growth. 
            From database setup to AI automation, we've got you covered.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center element-spacing-md opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            <Button 
              className="btn-primary btn-lg text-lg"
              asChild
            >
              <Link href="/services">
                Explore Services
                <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
            </Button>
            <Button 
              className="btn-light btn-lg text-lg"
              asChild
            >
              <Link href="/contact">
                Get Free Consultation
              </Link>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 element-spacing-md opacity-0 animate-fade-in-up" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
            <div className="flex items-center space-x-2 text-orange-custom">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span className="text-sm font-medium">ISO 27001 Certified</span>
            </div>
            <div className="flex items-center space-x-2 text-orange-custom">
              <Shield className="h-5 w-5 text-blue-500" />
              <span className="text-sm font-medium">GDPR Compliant</span>
            </div>
            <div className="flex items-center space-x-2 text-orange-custom">
              <Users className="h-5 w-5 text-purple-500" />
              <span className="text-sm font-medium">50+ Projects Delivered</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-surfe-primary rounded-full flex justify-center bg-surfe-white/50 backdrop-blur-sm">
          <div className="w-1 h-3 bg-surfe-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}