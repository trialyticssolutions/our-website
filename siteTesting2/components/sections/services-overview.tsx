import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Database, 
  TrendingUp, 
  Bot, 
  BarChart3, 
  Globe, 
  Megaphone, 
  Workflow, 
  BarChart,
  ArrowRight,
  Sparkles
} from 'lucide-react'
import { SERVICES } from '@/data/constants'

const iconMap = {
  database: Database,
  'trending-up': TrendingUp,
  bot: Bot,
  'bar-chart': BarChart3,
  globe: Globe,
  megaphone: Megaphone,
  workflow: Workflow,
  analytics: BarChart,
}

export function ServicesOverview() {
  // Show only first 4 services for overview
  const featuredServices = SERVICES.slice(0, 4)

  return (
    <section className="section-padding bg-gradient-to-br from-surfe-50 via-white to-teal-50">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-surfe-100 text-surfe-700 rounded-full text-sm font-semibold mb-6">
            <Sparkles className="h-4 w-4 mr-2" />
            Our Expertise
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
            Our Core
            <span className="block text-gradient-surfe">Services</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
            From database setup to AI automation, we provide comprehensive data solutions 
            that drive growth and efficiency for businesses of all sizes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {featuredServices.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Database
            
            return (
              <Card key={service.id} className="card-surfe group hover:shadow-surfe-lg hover:-translate-y-2 transition-all duration-500" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader className="text-center pb-6">
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 bg-surfe-gradient rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-surfe-soft">
                      <IconComponent className="h-10 w-10 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-3 text-neutral-900 group-hover:text-surfe-600 transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="mb-6 text-neutral-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <Button variant="outline" size="sm" className="btn-ghost" asChild>
                    <Link href={service.href}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <Button size="lg" className="btn-primary text-lg px-10 py-5" asChild>
            <Link href="/services">
              View All Services
              <ArrowRight className="ml-3 h-6 w-6" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
} 