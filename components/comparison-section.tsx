import { Check, X } from "lucide-react"

const comparisons = [
  {
    us: "Custom Design Planning",
    them: "Cookie Cutter Designs",
  },
  {
    us: "Expert Permitting Support",
    them: "Figure out permits yourself",
  },
  {
    us: "Bank-approved financing options",
    them: "Zero Financing Options",
  },
  {
    us: "Never charge you hidden fees",
    them: "Unexpected hidden fees",
  },
  {
    us: "Dedicated project manager",
    them: "No dedicated support",
  },
  {
    us: "365-day warranty included",
    them: "Limited or no warranty",
  },
]

export function ComparisonSection() {
  return (
    <section className="py-8 md:py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Why Choose All-In ADU Over Other Contractors?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            See the difference between working with true ADU experts versus typical contractors
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Us Column */}
            <div className="space-y-4 md:space-y-6">
              <h3 className="text-xl md:text-2xl font-bold text-blue-600 text-center mb-6">All-In ADU</h3>
              {comparisons.map((item, index) => (
                <div key={index} className="flex items-start space-x-3 md:space-x-4">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </div>
                  <span className="text-base md:text-lg font-semibold text-blue-600">{item.us}</span>
                </div>
              ))}
            </div>

            {/* Them Column */}
            <div className="space-y-4 md:space-y-6">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 text-center mb-6">Other Contractors</h3>
              {comparisons.map((item, index) => (
                <div key={index} className="flex items-start space-x-3 md:space-x-4">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <X className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </div>
                  <span className="text-base md:text-lg text-gray-800">{item.them}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
