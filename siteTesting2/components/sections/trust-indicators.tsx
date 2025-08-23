import { Users, TrendingUp, Award, Star, CheckCircle, Sparkles, Shield, Clock } from 'lucide-react'

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
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
            <Shield className="h-4 w-4 mr-2" />
            Why Choose Us
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-surfe-primary mb-6">
            Trusted by
            <span className="block text-orange-custom">Leading Companies</span>
          </h2>
          <p className="text-xl text-surfe-text-secondary max-w-3xl mx-auto leading-relaxed">
            Our track record speaks for itself - we've helped hundreds of businesses transform their data operations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Users,
              title: '500+',
              subtitle: 'Projects Delivered',
              description: 'Successfully completed projects across various industries',
              color: 'from-blue-500 to-cyan-500'
            },
            {
              icon: TrendingUp,
              title: '98%',
              subtitle: 'Client Satisfaction',
              description: 'Consistently high ratings from our clients',
              color: 'from-purple-500 to-pink-500'
            },
            {
              icon: Clock,
              title: '24/7',
              subtitle: 'Support Available',
              description: 'Round-the-clock technical support and monitoring',
              color: 'from-orange-500 to-red-500'
            },
            {
              icon: Award,
              title: 'ISO 27001',
              subtitle: 'Certified',
              description: 'Highest standards of data security and compliance',
              color: 'from-green-500 to-emerald-500'
            }
          ].map((stat, index) => (
            <div key={index} className="card-surfe text-center group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500" style={{ animationDelay: `${index * 150}ms` }}>
              <div className="p-8">
                <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.title}</div>
                <div className="text-lg font-semibold text-blue-600 mb-3">{stat.subtitle}</div>
                <p className="text-gray-600 leading-relaxed">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Client logos */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-semibold text-gray-600 mb-12">Trusted by Industry Leaders</h3>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            <div className="w-32 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 font-semibold">Company A</span>
            </div>
            <div className="w-32 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 font-semibold">Company B</span>
            </div>
            <div className="w-32 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 font-semibold">Company C</span>
            </div>
            <div className="w-32 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 font-semibold">Company D</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 