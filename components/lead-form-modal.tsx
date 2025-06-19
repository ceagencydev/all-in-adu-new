"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { X, Lock, Phone, ArrowRight } from "lucide-react"

interface LeadFormModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  description?: string
}

export function LeadFormModal({
  isOpen,
  onClose,
  title = "Get Your Free Consultation",
  description = "Connect with our ADU experts today",
}: LeadFormModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmitStep1 = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Send data to Go High Level webhook
      const response = await fetch(
        "https://services.leadconnectorhq.com/hooks/zepCtDS7hkgRA64NdrfX/webhook-trigger/2aa8a613-867d-4f48-861c-462d4e8dc3c3",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullName: formData.fullName,
            phone: formData.phone,
            email: formData.email,
            source: "ADU Landing Page Lead Form",
            timestamp: new Date().toISOString(),
          }),
        },
      )

      if (response.ok) {
        console.log("Lead data sent successfully to Go High Level")

        // Track Google Ads conversion
        if (typeof window !== "undefined" && window.gtag) {
          window.gtag("event", "conversion", {
            send_to: "AW-16893802236/7o7yCO-f_6YaEPzty_c-",
          })
          console.log("Google Ads conversion tracked successfully")
        }

        // Track Facebook Pixel lead event
        if (typeof window !== "undefined" && window.fbq) {
          window.fbq("track", "Lead", {
            content_name: "ADU Consultation Request",
            content_category: "Form Submission",
            value: 150.0,
            currency: "USD",
          })
          console.log("Facebook Pixel lead event tracked successfully")
        }
      } else {
        console.error("Failed to send lead data:", response.statusText)
      }
    } catch (error) {
      console.error("Error sending lead data:", error)
    }

    setIsSubmitting(false)
    setCurrentStep(2)
  }

  const handleContactMeInstead = async () => {
    setIsSubmitting(true)

    // Track Facebook Pixel contact preference event
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Contact", {
        content_name: "Contact Me Request",
        content_category: "Contact Preference",
      })
    }

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 800))

    setIsSubmitting(false)
    setCurrentStep(3)
  }

  const trackPhoneCall = () => {
    // Track Facebook Pixel phone call event
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Contact", {
        content_name: "Phone Call",
        content_category: "Direct Call",
        preferred_contact_method: "phone",
      })
    }
  }

  const resetForm = () => {
    setCurrentStep(1)
    setFormData({ fullName: "", email: "", phone: "" })
  }

  const handleClose = () => {
    resetForm()
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="w-[95vw] max-w-lg mx-auto p-0 gap-0 bg-white max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute right-3 top-3 z-10 text-gray-400 hover:text-gray-600 transition-colors p-2"
        >
          <X className="w-5 h-5" />
        </button>

        {currentStep === 1 && (
          // Step 1: Collect information
          <div className="pt-12 pb-4 px-4 md:p-12">
            <div className="text-center mb-6 md:mb-10">
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">{title}</h2>
              <p className="text-base md:text-xl text-gray-600">{description}</p>
            </div>

            <form onSubmit={handleSubmitStep1} className="space-y-4 md:space-y-8">
              <div>
                <Label htmlFor="fullName" className="text-sm md:text-lg font-semibold text-gray-900 mb-2 md:mb-3 block">
                  Full Name
                </Label>
                <Input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Your full name"
                  className="h-12 md:h-14 text-base md:text-lg border-2 border-gray-200 rounded-xl px-4 placeholder:text-gray-400 focus:border-blue-500 focus:ring-0"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-sm md:text-lg font-semibold text-gray-900 mb-2 md:mb-3 block">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="(XXX) XXX-XXXX"
                  className="h-12 md:h-14 text-base md:text-lg border-2 border-gray-200 rounded-xl px-4 placeholder:text-gray-400 focus:border-blue-500 focus:ring-0"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-sm md:text-lg font-semibold text-gray-900 mb-2 md:mb-3 block">
                  Email Address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                  className="h-12 md:h-14 text-base md:text-lg border-2 border-gray-200 rounded-xl px-4 placeholder:text-gray-400 focus:border-blue-500 focus:ring-0"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 md:h-16 bg-blue-600 hover:bg-blue-700 text-white text-base md:text-xl font-semibold rounded-xl mt-4 md:mt-8"
              >
                {isSubmitting ? "Submitting..." : "Continue"}
                {!isSubmitting && <ArrowRight className="ml-2 w-5 h-5" />}
              </Button>

              <div className="flex items-center justify-center space-x-2 text-gray-500 text-xs md:text-sm mt-3 md:mt-6">
                <Lock className="w-4 h-4" />
                <span>Your information is secure and will never be shared.</span>
              </div>
            </form>
          </div>
        )}

        {currentStep === 2 && (
          // Step 2: Call now or contact me
          <div className="pt-12 pb-4 px-4 md:p-12">
            <div className="text-center mb-6 md:mb-10">
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">Ready to Talk?</h2>
              <p className="text-base md:text-xl text-gray-600">
                Speak with an ADU specialist immediately or request a callback at your convenience
              </p>
            </div>

            <div className="space-y-6 md:space-y-8">
              <div className="text-center">
                <p className="text-gray-600 mb-2">Available during business hours (9AM-5PM PST)</p>
                <a
                  href="tel:9496494751"
                  onClick={trackPhoneCall}
                  className="inline-flex items-center justify-center w-full h-14 md:h-16 bg-blue-600 hover:bg-blue-700 text-white text-lg md:text-xl font-semibold rounded-xl transition-colors"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Call Now: (949) 649-4751
                </a>
              </div>

              <div className="relative flex items-center">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-4 text-gray-500">or</span>
                <div className="flex-grow border-t border-gray-300"></div>
              </div>

              <div className="text-center">
                <button
                  onClick={handleContactMeInstead}
                  disabled={isSubmitting}
                  className="text-blue-600 hover:text-blue-800 hover:underline font-medium text-lg transition-colors"
                >
                  {isSubmitting ? "Processing..." : "Contact me instead"}
                </button>
              </div>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          // Step 3: Thank you confirmation
          <div className="pt-12 pb-6 px-6 md:p-12 text-center">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8">
              <svg
                className="w-8 h-8 md:w-10 md:h-10 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">Thank You!</h2>

            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-2">
              Your consultation request has been received.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6 md:mb-8">
              Our ADU specialist will contact you within 24 hours to schedule your free consultation.
            </p>

            <p className="text-gray-400 text-sm">This window will close automatically...</p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
