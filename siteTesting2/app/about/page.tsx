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
      <div className="section-spacing bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center element-spacing-lg">
            <h1 className="text-4xl md:text-5xl font-bold text-surfe-primary element-spacing-sm leading-tight">
              About Our
              <span className="block text-orange-custom">Agency</span>
            </h1>
            <p className="text-xl text-surfe-text-secondary max-w-3xl mx-auto leading-relaxed">
              We help startups and mid-size teams turn raw data into reliable, decision-ready insights—without heavy overhead.
            </p>
          </div>

          {/* Our Story */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-surfe-primary mb-6">Our Story</h2>
                <div className="space-y-4 text-surfe-text-secondary leading-relaxed">
                  <p>
                    Founded in 2023, we started with a simple observation: most businesses were sitting on a goldmine of data but lacked the foundations and focus to turn it into daily, measurable impact.
                  </p>
                  <p>
                    Coming from data engineering, analytics, and growth backgrounds, we built a hands-on practice focused on strong data foundations, clear tracking, and pragmatic automation—so teams can trust their numbers and move faster.
                  </p>
                  <p className="text-orange-custom">
                    Since then, we've helped 50+ companies establish modern data stacks, automate reporting, and ship analytics that actually get used—driving an average 30% improvement in marketing ROI and efficiency across teams.
                  </p>
                </div>
                <div className="mt-6">
                  <Button asChild className="btn-primary rounded-full">
                    <Link href="/contact">
                      Start Your Journey
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="card-surfe rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-orange-custom mb-2">2023</div>
                    <div className="text-sm text-surfe-text-secondary">Founded</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-surfe-primary mb-2">50+</div>
                    <div className="text-sm text-surfe-text-secondary">Clients Served</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-surfe-primary mb-2">100+</div>
                    <div className="text-sm text-surfe-text-secondary">Projects Completed</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-orange-custom mb-2">30%</div>
                    <div className="text-sm text-surfe-text-secondary">Avg ROI Improvement</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mission, Vision, Values */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-surfe-primary mb-4">
                Our Mission,
                <span className="block text-orange-custom">Vision & Values</span>
              </h2>
              <p className="text-surfe-text-secondary max-w-2xl mx-auto">
                The principles that guide our work and define our commitment to our clients
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center card-surfe">
                <CardHeader>
                  <div className="w-16 h-16 bg-brand-purple rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle>Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-surfe-text-secondary">
                    Deliver reliable data foundations and pragmatic automation so teams can make confident, fast decisions that drive growth.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center card-surfe">
                <CardHeader>
                  <div className="w-16 h-16 bg-brand-purple rounded-full flex items-center justify-center mx-auto mb-4">
                    <Eye className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle>Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-surfe-text-secondary">
                    A world where every growing business trusts its numbers and can explain performance in minutes, not days.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center card-surfe">
                <CardHeader>
                  <div className="w-16 h-16 bg-brand-purple rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle>Our Values</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-surfe-text-secondary leading-relaxed">
                    <div> Client-Centricity</div>
                    <div> Innovation & Excellence</div>
                    <div> Transparency & Integrity</div>

                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Team Section - commented out as requested */}
          {/**
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-surfe-primary mb-4">Meet Our Expert Team</h2>
              <p className="text-surfe-text-secondary max-w-2xl mx-auto">Our diverse team of data scientists, engineers, and strategists brings decades of combined experience to every project.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {TEAM_MEMBERS.map((member) => (
                <Card key={member.id} className="text-center card-surfe">
                  ...
                </Card>
              ))}
            </div>
          </div>
          **/}

          {/* Why Choose Us */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-surfe-primary mb-4">
                Why
                <span className="block text-orange-custom">Choose Us</span>
              </h2>
              <p className="text-surfe-text-secondary max-w-2xl mx-auto">What sets us apart in the data consulting landscape</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Award,
                  title: "Proven Expertise",
                  description: "Our team brings hands-on experience building modern data stacks and analytics for fast-growing companies."
                },
                {
                  icon: Users,
                  title: "Client-Focused Approach",
                  description: "We start from your goals and build only what moves the needle—measured and reviewed together."
                },
                {
                  icon: Target,
                  title: "End-to-End Solutions",
                  description: "From tracking and warehousing to dashboards and automation, we cover the full data lifecycle."
                },
                {
                  icon: Heart,
                  title: "Collaborative Partnership",
                  description: "We work as an extension of your team, with clear documentation and enablement so you stay self-sufficient."
                },
                {
                  icon: Eye,
                  title: "Cutting-Edge Technology",
                  description: "We pick proven tools first, adding AI where it makes sense for reliability and speed."
                },
                {
                  icon: Award,
                  title: "Measurable Results",
                  description: "We focus on tangible lifts—think 10–30% improvements in ROAS, conversion, or operational efficiency."
                }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-brand-purple rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-surfe-text-secondary">
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