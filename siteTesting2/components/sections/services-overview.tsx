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
    <section className="section-spacing bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-spacing">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold element-spacing-sm">
            <Sparkles className="h-4 w-4 mr-2" />
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-surfe-primary element-spacing-sm">
            Comprehensive Data
            <span className="block text-surfe-primary">Solutions</span>
          </h2>
          <p className="text-xl text-surfe-text-secondary max-w-3xl mx-auto leading-relaxed element-spacing-md">
            From database architecture to AI automation, we provide end-to-end data solutions 
            that drive measurable business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto element-spacing-lg" style={{marginTop: '4rem'}}>
          {SERVICES.slice(0, 6).map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Database
            const colors = [
              'from-blue-500 to-cyan-500',
              'from-purple-500 to-pink-500',
              'from-orange-500 to-red-500',
              'from-green-500 to-emerald-500',
              'from-indigo-500 to-blue-500',
              'from-pink-500 to-rose-500'
            ]

            return (
              <div key={service.id} className="group card-surfe p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${colors[index % colors.length]} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-blue-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed flex-grow">
                  {service.description}
                </p>
                <div className="mt-auto">
                  <Button 
                    className="w-full btn-primary"
                    asChild
                  >
                    <Link href={`/services#${service.id}`}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center element-spacing-md">
          <Button 
            className="btn-primary btn-lg"
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