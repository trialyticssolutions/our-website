"use client"

import { Users, TrendingUp, Award, Star, CheckCircle, Sparkles, Shield, Clock } from 'lucide-react'
import { useState, useEffect } from 'react'

const CLIENTS = [
  { name: 'Microsoft', logo: 'MS', color: 'from-blue-500 to-blue-600' },
  { name: 'Google', logo: 'GO', color: 'from-red-500 to-yellow-500' },
  { name: 'Amazon', logo: 'AM', color: 'from-orange-500 to-yellow-600' },
  { name: 'Meta', logo: 'ME', color: 'from-blue-600 to-purple-600' },
  { name: 'Apple', logo: 'AP', color: 'from-gray-600 to-gray-800' },
  { name: 'Netflix', logo: 'NF', color: 'from-red-600 to-red-700' },
  { name: 'Tesla', logo: 'TE', color: 'from-red-500 to-red-600' },
  { name: 'Spotify', logo: 'SP', color: 'from-green-500 to-green-600' },
]

const ACHIEVEMENTS = [
  { value: '50+', label: 'Projects Completed', icon: CheckCircle },
  { value: '98%', label: 'Client Satisfaction', icon: Star },
  { value: '50+', label: 'Team Members', icon: Users },
  { value: '24/7', label: 'Support Available', icon: Award },
]

// function ClientLogosStatic() {
//   const logos = [
//     { name: 'L&T', src: '/L&T.png' },
//     { name: 'OYO', src: '/oyo.png' },
//     { name: 'Mamaearth', src: '/mamaearth.png' },
//   ]

//   return (
//     <div className="mt-16">
//       <h3 className="text-2xl font-semibold text-white mb-12 text-center">Trusted by Industry Leaders</h3>
//       <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 px-4">
//         {logos.map((logo) => (
//           <div key={logo.name} className="card-surfe flex flex-col items-center justify-center p-6 text-center">
//             <div className="w-40 h-40 rounded-2xl shadow-lg flex items-center justify-center bg-white/10 p-6">
//               <img src={logo.src} alt={logo.name} className="w-full h-full object-contain" />
//             </div>
//             <span className="mt-6 text-gray-300 text-base font-medium">{logo.name}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

export function TrustIndicators() {
  return (
    <section className="section-spacing bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-spacing">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold element-spacing-sm">
            <Shield className="h-4 w-4 mr-2" />
            Why Choose Us
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-surfe-primary element-spacing-sm">
            Trusted by
            <span className="block text-orange-custom">Leading Companies</span>
          </h2>
          <p className="text-xl text-surfe-text-secondary max-w-3xl mx-auto leading-relaxed">
            Our track record speaks for itself - we've helped hundreds of businesses transform their data operations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 element-spacing-lg" style={{marginTop: '4rem'}}>
          {[
            {
              icon: Users,
              title: '50+',
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
                <div className="text-3xl font-bold text-white mb-2">{stat.title}</div>
                <div className="text-lg font-semibold text-blue-400 mb-3">{stat.subtitle}</div>
                <p className="text-gray-300 leading-relaxed">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Client logos - static cards */}
        {/* <ClientLogosStatic /> */}
      </div>
    </section>
  )
}