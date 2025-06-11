"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Star, Shield, Award, Phone } from "lucide-react"
import Image from "next/image"
import { LeadFormModal } from "./lead-form-modal"

export function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
                Transform Your Space with a Dream ADU in Southern California
              </h1>

              <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8 leading-relaxed">
                Unlock new income, add living space, and increase your property value—stress-free. We handle everything
                from permits to construction so you don't have to.
              </p>

              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 md:px-12 py-4 md:py-6 text-lg font-medium h-auto w-full md:w-full md:max-w-md md:mx-auto"
                onClick={() => setIsModalOpen(true)}
              >
                <Phone className="w-5 h-5 mr-2" />
                Get Free Consultation
              </Button>

              <div className="flex items-center space-x-2 mt-4 mb-6 md:mb-8 text-orange-600">
                <span className="text-lg">⚡</span>
                <span className="text-sm font-semibold">Only 4 consultation slots remaining this month</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-2 sm:space-y-0 text-sm text-gray-600 mt-2">
                <div className="flex items-center space-x-1">
                  <Shield className="w-4 h-4 text-blue-600" />
                  <span>Licensed & Insured</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span>100+ Happy Clients</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Award className="w-4 h-4 text-blue-600" />
                  <span>365-Day Warranty</span>
                </div>
              </div>
            </div>

            <div className="relative order-1 lg:order-2">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/hero-adu.webp"
                  alt="Modern ADU in Orange County - Beautiful contemporary design with large windows and outdoor patio"
                  width={600}
                  height={500}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <LeadFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Get Your Free ADU Assessment"
        description="Fill out the form below and we'll contact you within 24 hours to schedule your consultation."
      />
    </>
  )
}
