import { Users, TrendingUp, Award, Star, CheckCircle, Sparkles } from 'lucide-react'

const CLIENTS = [
  { name: 'TechCorp', logo: 'TC' },
  { name: 'DataFlow', logo: 'DF' },
  { name: 'InnovateLab', logo: 'IL' },
  { name: 'CloudSync', logo: 'CS' },
  { name: 'SmartBiz', logo: 'SB' },
  { name: 'FutureTech', logo: 'FT' },
]

const ACHIEVEMENTS = [
  { value: '500+', label: 'Projects Completed', icon: CheckCircle },
  { value: '98%', label: 'Client Satisfaction', icon: Star },
  { value: '50+', label: 'Team Members', icon: Users },
  { value: '24/7', label: 'Support Available', icon: Award },
]

export function TrustIndicators() {
  return (
    <section className="py-20 bg-surfe-background relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-surfe-button-light text-surfe-primary rounded-full text-sm font-semibold mb-6">
            <Sparkles className="h-4 w-4 mr-2" />
            Trusted by Industry Leaders
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-surfe-primary mb-6">
            Why Companies
            <span className="block text-surfe-primary">Choose Us</span>
          </h2>
          <p className="text-xl text-surfe-text-secondary max-w-3xl mx-auto leading-relaxed">
            Join hundreds of businesses that trust us to transform their data infrastructure and drive growth
          </p>
        </div>

        {/* Client Logos */}
        <div className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {CLIENTS.map((client, index) => (
              <div key={index} className="bg-surfe-white rounded-2xl shadow-sm p-6 flex items-center justify-center hover:shadow-md transition-shadow duration-300">
                <div className="text-2xl font-bold text-surfe-primary">{client.logo}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {ACHIEVEMENTS.map((achievement, index) => {
            const IconComponent = achievement.icon
            return (
              <div key={index} className="text-center group">
                <div className="bg-surfe-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="w-16 h-16 bg-surfe-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-surfe-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-surfe-primary mb-3">
                    {achievement.value}
                  </div>
                  <div className="text-surfe-text-secondary font-medium">
                    {achievement.label}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
} 