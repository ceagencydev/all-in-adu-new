"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import { LeadFormModal } from "./lead-form-modal"

export function MobileStickyCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling past the first section (approximately 100vh)
      const scrollPosition = window.scrollY
      const viewportHeight = window.innerHeight
      setShowButton(scrollPosition > viewportHeight * 0.8)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Mobile Sticky CTA - Only visible on mobile */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-30 lg:hidden transition-transform duration-300 ${showButton ? "translate-y-0" : "translate-y-full"}`}
      >
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
