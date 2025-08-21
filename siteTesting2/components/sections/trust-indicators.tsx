import Image from 'next/image'
import { TRUST_INDICATORS } from '@/data/constants'

export function TrustIndicators() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We've helped businesses across various industries unlock the power of their data
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {TRUST_INDICATORS.map((client, index) => (
            <div 
              key={index}
              className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            >
              <div className="relative w-24 h-12">
                <div className="w-full h-full bg-gray-200 rounded flex items-center justify-center">
                  <span className="text-gray-500 text-sm font-medium">
                    {client.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">99%</div>
            <div className="text-gray-600">Project Success Rate</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">24h</div>
            <div className="text-gray-600">Average Response Time</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">150%</div>
            <div className="text-gray-600">Average ROI Improvement</div>
          </div>
        </div>
      </div>
    </section>
  )
} 