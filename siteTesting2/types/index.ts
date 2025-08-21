export interface ContactFormData {
  fullName: string
  email: string
  phoneNumber?: string
  companyName?: string
  subject: string
  message: string
  recaptchaToken?: string
}

export interface ContactFormSubmission extends ContactFormData {
  id: string
  timestamp: Date
  ipAddress?: string
  status: 'pending' | 'responded' | 'archived'
}

export interface Service {
  id: string
  title: string
  description: string
  fullDescription: string
  icon: string
  features: string[]
  targetAudience: string
  benefits: string[]
  technologies?: string[]
  href: string
}

export interface ProjectCase {
  id: string
  title: string
  description: string
  client: string
  challenge: string
  solution: string
  results: string[]
  technologies: string[]
  image: string
  category: string
  featured: boolean
  completionDate: Date
}

export interface Testimonial {
  id: string
  name: string
  company: string
  position: string
  content: string
  rating: number
  image?: string
  featured: boolean
  date: Date
}

export interface TeamMember {
  id: string
  name: string
  position: string
  bio: string
  image: string
  linkedIn?: string
  twitter?: string
  expertise: string[]
}

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  publishedAt: Date
  updatedAt: Date
  tags: string[]
  image: string
  slug: string
  featured: boolean
}

export interface FAQ {
  id: string
  question: string
  answer: string
  category: string
  order: number
}

export interface SiteConfig {
  name: string
  description: string
  url: string
  email: string
  phone: string
  address: string
  social: {
    linkedin?: string
    twitter?: string
    facebook?: string
    instagram?: string
  }
  whatsappNumber: string
  whatsappMessage: string
}

export interface SEOData {
  title: string
  description: string
  keywords: string[]
  ogImage?: string
  canonical?: string
  noindex?: boolean
}

export interface NavigationItem {
  label: string
  href: string
  active?: boolean
  external?: boolean
}

export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  message?: string
  errors?: Record<string, string>
}

export interface PaginatedResponse<T = any> {
  data: T[]
  total: number
  page: number
  limit: number
  totalPages: number
}

export interface FilterOptions {
  category?: string
  featured?: boolean
  limit?: number
  offset?: number
  sortBy?: string
  sortOrder?: 'asc' | 'desc'
}

export type LoadingState = 'idle' | 'loading' | 'success' | 'error'

export interface FormState {
  isSubmitting: boolean
  isSubmitted: boolean
  error: string | null
  success: boolean
}

export interface MetaData {
  title: string
  description: string
  keywords?: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  twitterCard?: 'summary' | 'summary_large_image'
  canonical?: string
  noindex?: boolean
  nofollow?: boolean
} 