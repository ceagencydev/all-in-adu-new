"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import { LeadFormModal } from "./lead-form-modal"

export function MobileStickyCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      {/* Mobile Sticky CTA - Only visible on mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-30 lg:hidden">
        <div className="bg-white border-t border-gray-200 shadow-lg px-4 py-3">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-4 text-lg font-semibold h-auto w-full"
            onClick={() => setIsModalOpen(true)}
          >
            <Phone className="w-5 h-5 mr-2" />
            Get Free Consultation
          </Button>
        </div>
      </div>

      <LeadFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Get Your Free ADU Assessment"
        description="Fill out the form below and we'll contact you within 24 hours to schedule your consultation."
      />
    </>
  )
}
