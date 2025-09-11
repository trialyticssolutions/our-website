import { MainLayout } from '@/components/layout/main-layout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { ArrowRight, ExternalLink, Calendar, Building } from 'lucide-react'
import { PORTFOLIO_CASES } from '@/data/constants'
import { CtaSection } from '@/components/sections/cta-section'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio - Data Consulting Agency',
  description: 'Explore our successful data consulting projects and case studies. See how we\'ve helped businesses transform their data into actionable insights and achieve measurable results.',
  openGraph: {
    title: 'Portfolio - Data Consulting Agency',
    description: 'Explore our successful data consulting projects and case studies.',
  },
}

export default function PortfolioPage() {
  const featuredCases = PORTFOLIO_CASES.filter(project => project.featured)
  const allCases = PORTFOLIO_CASES.filter(project => !project.featured)

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long'
    }).format(date)
  }

  return (
    <MainLayout>
      {/* Hero Section (match site style) */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-16 left-16 w-64 h-64 bg-blue-300/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-16 right-24 w-80 h-80 bg-cyan-300/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/3 right-1/3 w-56 h-56 bg-purple-300/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-8 opacity-0 animate-fade-in-up" style={{ animationFillMode: 'forwards' }}>
              Case Studies & Portfolio
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-surfe-primary mb-8 leading-tight opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              Our
              <span className="block text-orange-custom">Success Stories</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
              Real, measurable impact from data engineering, analytics, and automation projects across industries.
            </p>

            {/* Hero Stats */}
            <div className="mt-12 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
              <div className="rounded-3xl border border-white/10 bg-black/20 backdrop-blur-md px-6 py-8 shadow-xl">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                  <div>
                    <div className="text-3xl font-bold text-orange-custom mb-2">30%</div>
                    <div className="text-sm text-white/80">Avg ROI Improvement</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white mb-2">60%</div>
                    <div className="text-sm text-white/80">Efficiency Gain</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white mb-2">100+</div>
                    <div className="text-sm text-white/80">Projects Delivered</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-orange-custom mb-2">95%</div>
                    <div className="text-sm text-white/80">On-time Delivery</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          {/* Featured Cases */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-surfe-primary mb-6 text-center">
              Featured
              <span className="block text-orange-custom">Case Studies</span>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredCases.map((project) => (
                <Card key={project.id} className="card-surfe group overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                  <div className="aspect-video bg-gradient-to-br from-gray-900/20 to-gray-800/10 p-8 flex items-center justify-center">
                    <div className="text-center">
                      <Badge className="mb-4 bg-surfe-primary/10 text-surfe-primary">{project.category}</Badge>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {project.client}
                      </h3>
                      <p className="text-surfe-text-secondary">{project.title}</p>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-surfe-text-secondary mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    
                    {/* Results Preview */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-surfe-primary mb-2 text-sm">Key Results:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {project.results.slice(0, 2).map((result, idx) => (
                          <div key={idx} className="text-xs text-surfe-text-secondary flex items-center">
                            <div className="w-2 h-2 bg-orange-400 rounded-full mr-2 flex-shrink-0" />
                            {result}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-surfe-text-secondary">
                        <Calendar className="h-4 w-4 mr-1" />
                        {formatDate(project.completionDate)}
                      </div>
                      
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button size="sm" className="btn-secondary">
                            View Case Study
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-surfe-background border border-surfe-primary/20">
                          <DialogHeader>
                            <DialogTitle className="text-2xl text-left text-surfe-text-primary">{project.title}</DialogTitle>
                            <DialogDescription className="text-lg text-left text-surfe-text-secondary">
                              {project.client} • {project.category}
                            </DialogDescription>
                          </DialogHeader>
                          <div className="space-y-6 mt-6">
                            <div>
                              <h4 className="font-semibold text-surfe-text-primary mb-2">Challenge</h4>
                              <p className="text-surfe-text-secondary">{project.challenge}</p>
                            </div>
                            <div>
                              <h4 className="font-semibold text-surfe-text-primary mb-2">Solution</h4>
                              <p className="text-surfe-text-secondary">{project.solution}</p>
                            </div>
                            <div>
                              <h4 className="font-semibold text-surfe-text-primary mb-2">Results</h4>
                              <ul className="space-y-2">
                                {project.results.map((result, idx) => (
                                  <li key={idx} className="flex items-center text-surfe-text-secondary">
                                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-3 flex-shrink-0" />
                                    {result}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-semibold text-surfe-text-primary mb-2">Technologies Used</h4>
                              <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, idx) => (
                                  <Badge key={idx} variant="outline" className="text-xs border-surfe-primary/20 text-surfe-primary">
                                    {tech}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* All Projects */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-surfe-primary mb-6 text-center">
              All
              <span className="block text-orange-custom">Projects</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allCases.map((project) => (
                <Card key={project.id} className="card-surfe group hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="text-xs border-surfe-primary/20 text-surfe-primary">
                        {project.category}
                      </Badge>
                      <div className="flex items-center text-xs text-surfe-text-secondary">
                        <Calendar className="h-3 w-3 mr-1" />
                        {formatDate(project.completionDate)}
                      </div>
                    </div>
                    <CardTitle className="text-lg text-white group-hover:text-orange-custom transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-2 text-surfe-text-secondary">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center text-sm text-surfe-text-secondary">
                        <Building className="h-4 w-4 mr-2" />
                        {project.client}
                      </div>
                      
                      <div>
                        <div className="text-sm font-medium text-surfe-primary mb-1">Top Result:</div>
                        <div className="text-sm text-surfe-text-secondary flex items-center">
                          <div className="w-2 h-2 bg-orange-400 rounded-full mr-2 flex-shrink-0" />
                          {project.results[0]}
                        </div>
                      </div>

                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm" className="w-full border-black text-black hover:bg-gray-50 hover:text-black rounded-lg">
                            View Details
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-surfe-background border border-surfe-primary/20">
                          <DialogHeader>
                            <DialogTitle className="text-2xl text-left text-surfe-text-primary">{project.title}</DialogTitle>
                            <DialogDescription className="text-lg text-left text-surfe-text-secondary">
                              {project.client} • {project.category}
                            </DialogDescription>
                          </DialogHeader>
                          <div className="space-y-6 mt-6">
                            <div>
                              <h4 className="font-semibold text-surfe-text-primary mb-2">Challenge</h4>
                              <p className="text-surfe-text-secondary">{project.challenge}</p>
                            </div>
                            <div>
                              <h4 className="font-semibold text-surfe-text-primary mb-2">Solution</h4>
                              <p className="text-surfe-text-secondary">{project.solution}</p>
                            </div>
                            <div>
                              <h4 className="font-semibold text-surfe-text-primary mb-2">Results</h4>
                              <ul className="space-y-2">
                                {project.results.map((result, idx) => (
                                  <li key={idx} className="flex items-center text-surfe-text-secondary">
                                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-3 flex-shrink-0" />
                                    {result}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-semibold text-surfe-text-primary mb-2">Technologies Used</h4>
                              <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, idx) => (
                                  <Badge key={idx} variant="outline" className="text-xs border-surfe-primary/20 text-surfe-primary">
                                    {tech}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          {/* Stats moved to hero */}
        </div>
      </section>

      <CtaSection />
    </MainLayout>
  )
} 