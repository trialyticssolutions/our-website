import { NextApiRequest, NextApiResponse } from 'next'
import { ContactFormData, ApiResponse } from '@/types'
import { validateEmail, validatePhone, sanitizeInput } from '@/lib/utils'

// Rate limiting (simple in-memory store, consider Redis for production)
const rateLimit = new Map<string, { count: number; resetTime: number }>()
const RATE_LIMIT_WINDOW = 15 * 60 * 1000 // 15 minutes
const RATE_LIMIT_MAX_REQUESTS = 5

function getRateLimitKey(req: NextApiRequest): string {
  // Use IP address or user identifier
  const forwarded = req.headers['x-forwarded-for']
  const ip = forwarded ? (forwarded as string).split(',')[0] : req.connection.remoteAddress
  return ip || 'unknown'
}

function checkRateLimit(key: string): boolean {
  const now = Date.now()
  const record = rateLimit.get(key)
  
  if (!record || now > record.resetTime) {
    rateLimit.set(key, { count: 1, resetTime: now + RATE_LIMIT_WINDOW })
    return true
  }
  
  if (record.count >= RATE_LIMIT_MAX_REQUESTS) {
    return false
  }
  
  record.count++
  return true
}

async function verifyRecaptcha(token: string): Promise<boolean> {
  if (!process.env.RECAPTCHA_SECRET_KEY) {
    console.warn('reCAPTCHA secret key not configured')
    return true // Skip verification in development
  }

  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    })

    const data = await response.json()
    return data.success && data.score >= 0.5
  } catch (error) {
    console.error('reCAPTCHA verification failed:', error)
    return false
  }
}

// EmailJS handles email sending from the frontend
// This API endpoint is now used for validation and rate limiting only

function validateContactForm(data: ContactFormData): { isValid: boolean; errors: Record<string, string> } {
  const errors: Record<string, string> = {}

  // Required fields
  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = 'Full name is required and must be at least 2 characters'
  }

  if (!data.email || !validateEmail(data.email)) {
    errors.email = 'Please enter a valid email address'
  }

  if (!data.subject || data.subject.trim().length < 1) {
    errors.subject = 'Subject is required'
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.message = 'Message is required and must be at least 10 characters'
  }

  // Optional fields validation
  if (data.phoneNumber && !validatePhone(data.phoneNumber)) {
    errors.phoneNumber = 'Please enter a valid phone number'
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Method not allowed'
    })
  }

  try {
    // Rate limiting
    const rateLimitKey = getRateLimitKey(req)
    if (!checkRateLimit(rateLimitKey)) {
      return res.status(429).json({
        success: false,
        message: 'Too many requests. Please try again later.'
      })
    }

    const {
      fullName,
      email,
      phoneNumber,
      companyName,
      subject,
      message,
      recaptchaToken
    }: ContactFormData = req.body

    // Validate input
    const { isValid, errors } = validateContactForm(req.body)
    if (!isValid) {
      return res.status(400).json({
        success: false,
        message: 'Validation error',
        errors
      })
    }

    // Verify reCAPTCHA
    if (recaptchaToken) {
      const isValidRecaptcha = await verifyRecaptcha(recaptchaToken)
      if (!isValidRecaptcha) {
        return res.status(400).json({
          success: false,
          message: 'reCAPTCHA verification failed'
        })
      }
    }

    // Sanitize input data (for logging/security)
    const sanitizedData = {
      fullName: sanitizeInput(fullName),
      email: sanitizeInput(email),
      phoneNumber: phoneNumber ? sanitizeInput(phoneNumber) : undefined,
      companyName: companyName ? sanitizeInput(companyName) : undefined,
      subject: sanitizeInput(subject),
      message: sanitizeInput(message),
    }

    // Log the submission (EmailJS will handle email sending)
    console.log('Contact form validated successfully:', {
      name: sanitizedData.fullName,
      email: sanitizedData.email,
      subject: sanitizedData.subject,
      timestamp: new Date().toISOString()
    })

    return res.status(201).json({
      success: true,
      message: 'Form submitted successfully!'
    })

  } catch (error) {
    console.error('Contact form error:', error)
    
    return res.status(500).json({
      success: false,
      message: 'An internal server error occurred. Please try again later.'
    })
  }
} 