import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Database, BarChart3, Users, TrendingUp, CheckCircle, Sparkles, Zap, Shield } from 'lucide-react'
import { SERVICES } from '@/data/constants'

const iconMap = {
  database: Database,
  analytics: BarChart3,
  automation: Zap,
  consulting: Users,
  integration: TrendingUp,
  support: CheckCircle,
  security: Shield,
  optimization: Sparkles,
}

export function ServicesOverview() {
  return (
    <section className="py-20 bg-surfe-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-surfe-button-light text-surfe-primary rounded-full text-sm font-semibold mb-6">
            <Sparkles className="h-4 w-4 mr-2" />
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-surfe-primary mb-6">
            Comprehensive
            <span className="block text-surfe-primary">Solutions</span>
          </h2>
          <p className="text-xl text-surfe-text-secondary max-w-3xl mx-auto leading-relaxed">
            From data infrastructure to AI automation, we provide end-to-end solutions that drive your business forward
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {SERVICES.slice(0, 6).map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Database
            return (
              <div key={service.id} className="group bg-surfe-white rounded-2xl border border-surfe-200 p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-surfe-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <IconComponent className="h-6 w-6 text-surfe-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-surfe-primary group-hover:text-surfe-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-surfe-text-secondary mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Button 
                  variant="outline" 
                  className="border-surfe-200 text-surfe-primary hover:bg-surfe-button-light hover:text-surfe-primary rounded-lg transition-all duration-300"
                  asChild
                >
                  <Link href={`/services#${service.id}`}>
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="bg-surfe-primary hover:bg-surfe-700 text-surfe-white text-lg px-8 py-4 h-auto shadow-lg hover:shadow-xl transition-all duration-300"
            asChild
          >
            <Link href="/services">
              View All Services
              <ArrowRight className="ml-3 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
} 