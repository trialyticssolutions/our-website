import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, BarChart3, Users, TrendingUp, CheckCircle, Sparkles } from 'lucide-react'
import { HERO_STATS } from '@/data/constants'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-surfe-50 via-white to-teal-50">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-surfe-500/5 via-transparent to-teal-500/5" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-surfe-300/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-teal-300/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-surfe-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-2xl text-surfe-700 text-sm font-semibold mb-8 shadow-surfe-soft border border-surfe-100">
            <Sparkles className="h-4 w-4 mr-2 text-surfe-500" />
            Trusted by 50+ Growing Businesses
          </div>

          {/* Main headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-neutral-900 mb-8 leading-tight">
            Unlock Your Data's
            <span className="block text-gradient-surfe">
              Full Potential
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-neutral-600 mb-10 max-w-4xl mx-auto leading-relaxed font-medium">
            Transforming raw data into actionable insights and automated solutions for scalable growth. 
            From database setup to AI automation, we've got you covered.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="btn-primary text-lg px-10 py-5 h-auto shadow-surfe-lg"
              asChild
            >
              <Link href="/services">
                Explore Services
                <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="btn-secondary text-lg px-10 py-5 h-auto"
              asChild
            >
              <Link href="/contact">
                Get Free Consultation
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-neutral-200">
            {HERO_STATS.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl sm:text-5xl font-bold text-gradient-surfe mb-3 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-base sm:text-lg text-neutral-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-surfe-300 rounded-full flex justify-center bg-white/50 backdrop-blur-sm">
          <div className="w-1 h-3 bg-surfe-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
} 