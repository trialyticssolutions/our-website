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
  const allCases = PORTFOLIO_CASES

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long'
    }).format(date)
  }

  return (
    <MainLayout>
      <div className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Success Stories
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how we've helped businesses across various industries transform 
              their data into competitive advantages and measurable growth.
            </p>
          </div>

          {/* Featured Cases */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Case Studies</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredCases.map((project) => (
                <Card key={project.id} className="card-hover group overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-blue-50 to-purple-50 p-8 flex items-center justify-center">
                    <div className="text-center">
                      <Badge className="mb-4">{project.category}</Badge>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {project.client}
                      </h3>
                      <p className="text-gray-600">{project.title}</p>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-gray-700 mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    
                    {/* Results Preview */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm">Key Results:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {project.results.slice(0, 2).map((result, idx) => (
                          <div key={idx} className="text-xs text-gray-600 flex items-center">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 flex-shrink-0" />
                            {result}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-1" />
                        {formatDate(project.completionDate)}
                      </div>
                      
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button size="sm">
                            View Case Study
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle className="text-2xl">{project.title}</DialogTitle>
                            <DialogDescription className="text-lg">
                              {project.client} • {project.category}
                            </DialogDescription>
                          </DialogHeader>
                          <div className="space-y-6 mt-6">
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                              <p className="text-gray-700">{project.challenge}</p>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                              <p className="text-gray-700">{project.solution}</p>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-2">Results</h4>
                              <ul className="space-y-2">
                                {project.results.map((result, idx) => (
                                  <li key={idx} className="flex items-center text-gray-700">
                                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0" />
                                    {result}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-2">Technologies Used</h4>
                              <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, idx) => (
                                  <Badge key={idx} variant="outline" className="text-xs">
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
            <h2 className="text-2xl font-bold text-gray-900 mb-8">All Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allCases.map((project) => (
                <Card key={project.id} className="card-hover group">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="text-xs">
                        {project.category}
                      </Badge>
                      <div className="flex items-center text-xs text-gray-500">
                        <Calendar className="h-3 w-3 mr-1" />
                        {formatDate(project.completionDate)}
                      </div>
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-2">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center text-sm text-gray-600">
                        <Building className="h-4 w-4 mr-2" />
                        {project.client}
                      </div>
                      
                      <div>
                        <div className="text-sm font-medium text-gray-900 mb-1">Top Result:</div>
                        <div className="text-sm text-gray-600 flex items-center">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-2 flex-shrink-0" />
                          {project.results[0]}
                        </div>
                      </div>

                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm" className="w-full">
                            View Details
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle className="text-2xl">{project.title}</DialogTitle>
                            <DialogDescription className="text-lg">
                              {project.client} • {project.category}
                            </DialogDescription>
                          </DialogHeader>
                          <div className="space-y-6 mt-6">
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                              <p className="text-gray-700">{project.challenge}</p>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                              <p className="text-gray-700">{project.solution}</p>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-2">Results</h4>
                              <ul className="space-y-2">
                                {project.results.map((result, idx) => (
                                  <li key={idx} className="flex items-center text-gray-700">
                                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0" />
                                    {result}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-2">Technologies Used</h4>
                              <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, idx) => (
                                  <Badge key={idx} variant="outline" className="text-xs">
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

          {/* Stats Section */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Project Impact
              </h2>
              <p className="text-gray-600">
                The measurable results across all our projects
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">150%</div>
                <div className="text-sm text-gray-600">Average ROI Increase</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">60%</div>
                <div className="text-sm text-gray-600">Efficiency Improvement</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-gray-600">Project Success Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">24h</div>
                <div className="text-sm text-gray-600">Average Response Time</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CtaSection />
    </MainLayout>
  )
} 