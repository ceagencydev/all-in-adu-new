"use client"

import { useState } from "react"
import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { LeadFormModal } from "./lead-form-modal"

export function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <header className="bg-white shadow-sm border-b lg:sticky lg:top-0 z-20">
        <div className="container mx-auto px-4 py-3 lg:py-2">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <Image
                src="/images/logo.svg"
                alt="All-In ADU Logo"
                width={80}
                height={80}
                className="w-16 h-16 lg:w-20 lg:h-20"
              />
            </div>

            {/* Mobile: Phone Number */}
            <div className="flex lg:hidden items-center space-x-2">
              <Phone className="w-5 h-5 text-blue-600" />
              <a
                href="tel:9496494751"
                className="text-lg font-bold text-gray-900 hover:text-blue-600 transition-colors"
              >
                (949) 649-4751
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-lg text-gray-900 font-bold">
                <Phone className="w-5 h-5" />
                <a href="tel:9496494751" className="hover:text-blue-600 transition-colors">
                  (949) 649-4751
                </a>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700 rounded-full px-6" onClick={() => setIsModalOpen(true)}>
                <Phone className="w-4 h-4 mr-2" />
                Get Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </header>

      <LeadFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Schedule Your Free Consultation"
        description="Let's discuss your ADU project and how we can help bring your vision to life."
      />
    </>
  )
}
