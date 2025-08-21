import { MainLayout } from '@/components/layout/main-layout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Target, 
  Eye, 
  Heart, 
  Award, 
  Users, 
  Linkedin, 
  Twitter,
  ArrowRight
} from 'lucide-react'
import { TEAM_MEMBERS } from '@/data/constants'
import { CtaSection } from '@/components/sections/cta-section'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - Data Consulting Agency',
  description: 'Learn about our mission to help businesses unlock their data\'s potential. Meet our expert team and discover the values that drive our data consulting services.',
  openGraph: {
    title: 'About Us - Data Consulting Agency',
    description: 'Learn about our mission to help businesses unlock their data\'s potential.',
  },
}

export default function AboutPage() {
  return (
    <MainLayout>
      <div className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About Our Agency
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're passionate about helping businesses transform their data into 
              competitive advantages and sustainable growth.
            </p>
          </div>

          {/* Our Story */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Founded in 2019, our data consulting agency emerged from a simple observation: 
                    most businesses were sitting on goldmines of data but lacked the expertise 
                    to extract meaningful value from it.
                  </p>
                  <p>
                    Our founders, coming from diverse backgrounds in data science, engineering, 
                    and business strategy, recognized the gap between raw data and actionable 
                    insights. We set out to bridge that gap for businesses of all sizes.
                  </p>
                  <p>
                    Today, we've helped over 50 businesses transform their data infrastructure, 
                    implement AI-driven solutions, and achieve an average ROI improvement of 150%. 
                    Our journey continues as we expand our services and embrace new technologies.
                  </p>
                </div>
                <div className="mt-6">
                  <Button asChild>
                    <Link href="/contact">
                      Start Your Journey
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">2019</div>
                    <div className="text-sm text-gray-600">Founded</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">50+</div>
                    <div className="text-sm text-gray-600">Clients Served</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">100+</div>
                    <div className="text-sm text-gray-600">Projects Completed</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">150%</div>
                    <div className="text-sm text-gray-600">Avg ROI Improvement</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mission, Vision, Values */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Mission, Vision & Values
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                The principles that guide our work and define our commitment to our clients
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle>Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    To democratize data science and make advanced analytics accessible 
                    to businesses of all sizes, empowering them to make data-driven 
                    decisions that drive growth and innovation.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Eye className="h-8 w-8 text-purple-600" />
                  </div>
                  <CardTitle>Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    To be the leading data consulting partner that transforms how 
                    businesses understand and utilize their data, creating a future 
                    where every decision is informed by insights.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle>Our Values</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div>• Client-Centricity</div>
                    <div>• Innovation & Excellence</div>
                    <div>• Transparency & Integrity</div>
                    <div>• Continuous Learning</div>
                    <div>• Collaborative Partnership</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Meet Our Expert Team
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our diverse team of data scientists, engineers, and strategists brings 
                decades of combined experience to every project.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {TEAM_MEMBERS.map((member) => (
                <Card key={member.id} className="text-center card-hover">
                  <CardHeader>
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-gray-700">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <CardTitle className="text-lg">{member.name}</CardTitle>
                    <CardDescription>{member.position}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                      {member.bio}
                    </p>
                    
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1 justify-center">
                        {member.expertise.slice(0, 2).map((skill, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-center space-x-3">
                      {member.linkedIn && (
                        <a
                          href={member.linkedIn}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-blue-600 transition-colors"
                        >
                          <Linkedin className="h-4 w-4" />
                        </a>
                      )}
                      {member.twitter && (
                        <a
                          href={member.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-blue-400 transition-colors"
                        >
                          <Twitter className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Choose Us
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                What sets us apart in the data consulting landscape
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Award,
                  title: "Proven Expertise",
                  description: "Our team brings decades of combined experience from top-tier companies and successful projects across various industries."
                },
                {
                  icon: Users,
                  title: "Client-Focused Approach",
                  description: "We prioritize understanding your unique business needs and tailor our solutions to deliver maximum value and ROI."
                },
                {
                  icon: Target,
                  title: "End-to-End Solutions",
                  description: "From initial strategy to implementation and ongoing support, we provide comprehensive data solutions that scale with your business."
                },
                {
                  icon: Heart,
                  title: "Collaborative Partnership",
                  description: "We work as an extension of your team, ensuring knowledge transfer and empowering your internal capabilities."
                },
                {
                  icon: Eye,
                  title: "Cutting-Edge Technology",
                  description: "We stay at the forefront of data science and AI technologies to provide you with the most advanced solutions available."
                },
                {
                  icon: Award,
                  title: "Measurable Results",
                  description: "Our success is measured by your success. We focus on delivering tangible, quantifiable improvements to your business metrics."
                }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <CtaSection />
    </MainLayout>
  )
} 