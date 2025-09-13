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
  { value: '500+', label: 'Projects Completed', icon: CheckCircle },
  { value: '98%', label: 'Client Satisfaction', icon: Star },
  { value: '50+', label: 'Team Members', icon: Users },
  { value: '24/7', label: 'Support Available', icon: Award },
]

function ClientCarousel() {
  const [currentIndex, setCurrentIndex] = useState(1) // Start at 1 for infinite scroll
  const [itemsPerView, setItemsPerView] = useState(4) // Default fallback for SSR
  const [isTransitioning, setIsTransitioning] = useState(false)
  const totalSlides = Math.ceil(CLIENTS.length / itemsPerView)
  
  // Responsive items per view based on screen size
  const getItemsPerView = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1536) return 8 // 2xl screens
      if (window.innerWidth >= 1280) return 6 // xl screens  
      if (window.innerWidth >= 1024) return 5 // lg screens
      if (window.innerWidth >= 768) return 4  // md screens
      if (window.innerWidth >= 640) return 3  // sm screens
    }
    return 2 // xs screens
  }

  useEffect(() => {
    // Set initial items per view after component mounts
    setItemsPerView(getItemsPerView())
    
    const handleResize = () => {
      setItemsPerView(getItemsPerView())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Handle infinite scroll transitions
  const handleTransitionEnd = () => {
    setIsTransitioning(false)
    if (currentIndex === 0) {
      setCurrentIndex(totalSlides)
    } else if (currentIndex === totalSlides + 1) {
      setCurrentIndex(1)
    }
  }

  const goToSlide = (index: number) => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex(index)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        goToSlide(currentIndex + 1)
      }
    }, 6000) // Slower auto-scroll: 6 seconds instead of 4

    return () => clearInterval(interval)
  }, [currentIndex, isTransitioning, totalSlides])

  return (
    <div className="mt-16">
      <h3 className="text-2xl font-semibold text-white mb-12 text-center">Trusted by Industry Leaders</h3>
      
      <div className="relative py-8">
        {/* Client logos */}
        <div className="overflow-hidden">
          <div 
            className={`flex transition-transform duration-1000 ease-in-out ${
              !isTransitioning ? 'transition-none' : ''
            }`}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            onTransitionEnd={handleTransitionEnd}
          >
            {/* Create slides with duplicates for infinite scroll */}
            {[
              // Last slide (for seamless transition from first to last)
              ...Array.from({ length: 1 }).map((_, slideIndex) => {
                const actualSlideIndex = totalSlides - 1
                const startIdx = actualSlideIndex * itemsPerView
                const endIdx = Math.min(startIdx + itemsPerView, CLIENTS.length)
                const slideClients = CLIENTS.slice(startIdx, endIdx)
                
                return (
                  <div key={`duplicate-last-${slideIndex}`} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-6 px-4 py-4 justify-items-center">
                      {slideClients.map((client) => (
                        <div 
                          key={`${client.name}-duplicate-last`}
                          className="group flex flex-col items-center space-y-3 opacity-70 hover:opacity-100 transition-all duration-300"
                        >
                          <div className={`w-16 h-16 bg-gradient-to-r ${client.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                            <span className="text-white font-bold text-lg">{client.logo}</span>
                          </div>
                          <span className="text-gray-400 text-sm font-medium group-hover:text-white transition-colors duration-300">{client.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              }),
              // Original slides
              ...Array.from({ length: totalSlides }).map((_, slideIndex) => {
                const startIdx = slideIndex * itemsPerView
                const endIdx = Math.min(startIdx + itemsPerView, CLIENTS.length)
                const slideClients = CLIENTS.slice(startIdx, endIdx)
                
                return (
                  <div key={`original-${slideIndex}`} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-6 px-4 py-4 justify-items-center">
                      {slideClients.map((client) => (
                        <div 
                          key={`${client.name}-original`}
                          className="group flex flex-col items-center space-y-3 opacity-70 hover:opacity-100 transition-all duration-300"
                        >
                          <div className={`w-16 h-16 bg-gradient-to-r ${client.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                            <span className="text-white font-bold text-lg">{client.logo}</span>
                          </div>
                          <span className="text-gray-400 text-sm font-medium group-hover:text-white transition-colors duration-300">{client.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              }),
              // First slide (for seamless transition from last to first)
              ...Array.from({ length: 1 }).map((_, slideIndex) => {
                const actualSlideIndex = 0
                const startIdx = actualSlideIndex * itemsPerView
                const endIdx = Math.min(startIdx + itemsPerView, CLIENTS.length)
                const slideClients = CLIENTS.slice(startIdx, endIdx)
                
                return (
                  <div key={`duplicate-first-${slideIndex}`} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-6 px-4 py-4 justify-items-center">
                      {slideClients.map((client) => (
                        <div 
                          key={`${client.name}-duplicate-first`}
                          className="group flex flex-col items-center space-y-3 opacity-70 hover:opacity-100 transition-all duration-300"
                        >
                          <div className={`w-16 h-16 bg-gradient-to-r ${client.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                            <span className="text-white font-bold text-lg">{client.logo}</span>
                          </div>
                          <span className="text-gray-400 text-sm font-medium group-hover:text-white transition-colors duration-300">{client.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })
            ]}
          </div>
        </div>
        
        {/* Carousel indicators - only show if we have multiple slides */}
        {totalSlides > 1 && (
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => {
              const actualIndex = index + 1 // Adjust for infinite scroll offset
              return (
                <button
                  key={index}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === actualIndex 
                      ? 'bg-blue-500 w-8' 
                      : 'bg-gray-600 w-2 hover:bg-gray-500'
                  }`}
                  onClick={() => goToSlide(actualIndex)}
                />
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

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
                <div className="text-3xl font-bold text-white mb-2">{stat.title}</div>
                <div className="text-lg font-semibold text-blue-400 mb-3">{stat.subtitle}</div>
                <p className="text-gray-300 leading-relaxed">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Client logos carousel */}
        <ClientCarousel />
      </div>
    </section>
  )
}