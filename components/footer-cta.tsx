"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Phone, Calendar } from "lucide-react"
import { LeadFormModal } from "./lead-form-modal"

export function FooterCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section className="py-12 md:py-24 text-white" style={{ backgroundColor: "#1e2b34" }}>
        <div className="container mx-auto px-4 text-center max-w-5xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-medium mb-6 md:mb-8 leading-tight">
            Transform dead space into a wealth-generating asset that pays for itself while solving multiple life
            challenges at once.
          </h1>

          <p className="text-lg md:text-xl text-slate-300 mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed">
            Join hundreds of satisfied homeowners who've already unlocked the potential of their property with our
            expert ADU solutions.
          </p>

          <div className="space-y-4">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 md:px-12 py-4 md:py-6 text-lg font-medium h-auto w-full md:w-full md:max-w-md md:mx-auto"
              onClick={() => setIsModalOpen(true)}
            >
              <Phone className="w-5 h-5 mr-3" />
              Schedule Your Free Consultation
            </Button>

            <div className="flex items-center justify-center space-x-2 text-slate-400 text-sm">
              <Calendar className="w-4 h-4" />
              <span>Limited spots available this month</span>
            </div>
          </div>
        </div>
      </section>

      <LeadFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Schedule Your Free Assessment"
        description="Take the first step towards your dream ADU. We'll assess your property and provide a custom plan."
      />
    </>
  )
}
