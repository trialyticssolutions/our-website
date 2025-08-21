import { Card, CardContent } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Star, Quote, Sparkles, Heart } from 'lucide-react'
import { TESTIMONIALS } from '@/data/constants'

export function TestimonialsSection() {
  const featuredTestimonials = TESTIMONIALS.filter(testimonial => testimonial.featured)

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`h-5 w-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-neutral-300'
        }`}
      />
    ))
  }

  return (
    <section className="section-padding bg-gradient-to-br from-white via-surfe-50 to-teal-50">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-surfe-100 text-surfe-700 rounded-full text-sm font-semibold mb-6">
            <Heart className="h-4 w-4 mr-2" />
            Client Success
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
            What Our Clients
            <span className="block text-gradient-surfe">Say</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our clients have to say about 
            the transformative impact of our data solutions.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {featuredTestimonials.map((testimonial, index) => (
                <CarouselItem 
                  key={testimonial.id} 
                  className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <Card className="card-surfe h-full group hover:shadow-surfe-lg hover:-translate-y-2 transition-all duration-500" style={{ animationDelay: `${index * 100}ms` }}>
                    <CardContent className="p-8 flex flex-col h-full">
                      {/* Quote icon */}
                      <div className="flex justify-center mb-6">
                        <div className="w-12 h-12 bg-surfe-gradient rounded-2xl flex items-center justify-center shadow-surfe-soft">
                          <Quote className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      
                      {/* Rating */}
                      <div className="flex items-center justify-center mb-6">
                        {renderStars(testimonial.rating)}
                      </div>

                      {/* Testimonial content */}
                      <blockquote className="text-neutral-700 mb-8 flex-1 text-lg leading-relaxed text-center">
                        "{testimonial.content}"
                      </blockquote>

                      {/* Author info */}
                      <div className="flex items-center space-x-4 pt-6 border-t border-neutral-100">
                        <div className="w-14 h-14 bg-surfe-gradient rounded-2xl flex items-center justify-center shadow-surfe-soft">
                          <span className="text-white font-bold text-lg">
                            {testimonial.name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <div className="font-semibold text-neutral-900 text-lg">
                            {testimonial.name}
                          </div>
                          <div className="text-sm text-neutral-600">
                            {testimonial.position} at {testimonial.company}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex bg-white border-surfe-200 text-surfe-600 hover:bg-surfe-50 hover:text-surfe-700" />
            <CarouselNext className="hidden md:flex bg-white border-surfe-200 text-surfe-600 hover:bg-surfe-50 hover:text-surfe-700" />
          </Carousel>
        </div>

        {/* Overall stats */}
        <div className="mt-20 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4 group">
              <div className="text-5xl font-bold text-gradient-surfe group-hover:scale-110 transition-transform duration-300">4.9/5</div>
              <div className="text-neutral-600 font-medium">Average Client Rating</div>
            </div>
            <div className="space-y-4 group">
              <div className="text-5xl font-bold text-gradient-surfe group-hover:scale-110 transition-transform duration-300">100%</div>
              <div className="text-neutral-600 font-medium">Client Retention Rate</div>
            </div>
            <div className="space-y-4 group">
              <div className="text-5xl font-bold text-gradient-surfe group-hover:scale-110 transition-transform duration-300">50+</div>
              <div className="text-neutral-600 font-medium">Success Stories</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 