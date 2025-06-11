"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import Image from "next/image"
import { LeadFormModal } from "./lead-form-modal"

export function SolutionSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section className="py-8 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative order-1 lg:order-1">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/before-after-adu.webp"
                  alt="Before and after ADU transformation - from old shed to modern living space"
                  width={500}
                  height={400}
                  className="w-full h-64 md:h-80 object-cover"
                />
              </div>
            </div>

            <div className="order-2 lg:order-2">
              <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
                We make ADU construction simple
              </h1>

              <p className="text-lg md:text-xl text-gray-600 mb-4 md:mb-6">
                Imagine having a trusted partner who handles everything from start to finish. With All-In ADU, you get:
              </p>

              <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                <div className="flex items-start space-x-3">
                  <span className="text-lg text-blue-600 mt-0.5 flex-shrink-0">✓</span>
                  <span className="text-base md:text-lg text-gray-700">
                    A dedicated project manager who guides you through every step
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-lg text-blue-600 mt-0.5 flex-shrink-0">✓</span>
                  <span className="text-base md:text-lg text-gray-700">
                    Expert handling of permits, design, and construction - all under one roof
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-lg text-blue-600 mt-0.5 flex-shrink-0">✓</span>
                  <span className="text-base md:text-lg text-gray-700">
                    Clear communication and timeline updates throughout your project
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-lg text-blue-600 mt-0.5 flex-shrink-0">✓</span>
                  <span className="text-base md:text-lg text-gray-700">
                    Transparent, fixed pricing with no surprise costs
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-lg text-blue-600 mt-0.5 flex-shrink-0">✓</span>
                  <span className="text-base md:text-lg text-gray-700">
                    On-time completion guarantee or we pay you $2,500
                  </span>
                </div>
              </div>

              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 md:px-12 py-4 md:py-6 text-lg font-medium h-auto w-full md:w-full md:max-w-md md:mx-auto"
                onClick={() => setIsModalOpen(true)}
              >
                <Phone className="w-5 h-5 mr-2" />
                Get Free Consultation
              </Button>
              <div className="flex items-center space-x-2 mt-4 text-orange-600">
                <span className="text-lg">⚡</span>
                <span className="text-sm font-semibold">Only 4 consultation slots remaining this month</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LeadFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Start Your ADU Journey"
        description="Ready to transform your space? Let's get started with your free consultation."
      />
    </>
  )
}
