'use client'

import { MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SITE_CONFIG } from '@/data/constants'

export function FloatingWidgets() {
  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(SITE_CONFIG.whatsappMessage)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <>
      {/* Floating Widgets */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* WhatsApp Widget */}
        <Button
          onClick={handleWhatsAppClick}
          className="w-14 h-14 bg-surfe-primary hover:bg-surfe-700 text-surfe-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          aria-label="Contact us on WhatsApp"
          title="Contact us on WhatsApp"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>
    </>
  )
} 