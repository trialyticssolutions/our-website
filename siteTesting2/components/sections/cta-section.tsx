import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Calendar, MessageCircle, Sparkles, Star, Zap } from 'lucide-react'

export function CtaSection() {
  return (
    <section className="relative section-padding bg-surfe-gradient overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="relative z-10 container mx-auto container-padding text-center">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-2xl text-white text-sm font-semibold mb-8 border border-white/20">
            <Sparkles className="h-4 w-4 mr-2" />
            Ready to Get Started?
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Ready to Transform Your
            <span className="block">Data Into Growth?</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
            Join 50+ businesses that have already unlocked their data's potential. 
            Let's discuss how we can accelerate your growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-white text-surfe-600 hover:bg-gray-50 text-lg px-10 py-5 h-auto shadow-surfe-xl hover:shadow-surfe-xl transition-all duration-300 transform hover:scale-105"
              asChild
            >
              <Link href="/contact">
                <MessageCircle className="mr-3 h-6 w-6" />
                Get Free Consultation
                <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-surfe-600 text-lg px-10 py-5 h-auto backdrop-blur-sm"
              asChild
            >
              <Link href="/portfolio">
                <Calendar className="mr-3 h-6 w-6" />
                View Case Studies
              </Link>
            </Button>
          </div>

          <div className="pt-12 border-t border-white/20">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-white/90">
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-yellow-300 fill-current" />
                <span className="font-medium">4.9/5 rating from 50+ clients</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="h-5 w-5 text-yellow-300" />
                <span className="font-medium">Average 150% ROI improvement</span>
              </div>
              <div className="flex items-center space-x-2">
                <MessageCircle className="h-5 w-5 text-yellow-300" />
                <span className="font-medium">24h response time</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 