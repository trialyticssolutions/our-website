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
      <div className="floating-widget">
        {/* WhatsApp Widget */}
        <Button
          onClick={handleWhatsAppClick}
          className="floating-widget-button bg-green-500 hover:bg-green-600"
          aria-label="Contact us on WhatsApp"
          title="Contact us on WhatsApp"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>
    </>
  )
} 