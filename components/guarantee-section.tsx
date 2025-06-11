import { Shield, Clock, DollarSign, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const guarantees = [
  {
    icon: Shield,
    title: "Best Value Guarantee",
    description: "Transparent, fixed pricing with no surprise add-ons, ever.",
  },
  {
    icon: Clock,
    title: "Best Time Guarantee",
    description: "On-time completion or we pay you $2,500 for the delay.",
  },
  {
    icon: DollarSign,
    title: "Best Quality Guarantee",
    description: "Premium materials and craftsmanship with 365-day warranty.",
  },
  {
    icon: Award,
    title: "365-Day Warranty",
    description: "If anything goes wrong, we will fix it fast - guaranteed for a full year.",
  },
]

export function GuaranteeSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            You're Protected by Our Quadruple Guarantee
          </h1>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {guarantees.map((guarantee, index) => (
            <Card key={index} className="text-center border-2 hover:border-blue-200 transition-colors">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <guarantee.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{guarantee.title}</h3>
                <p className="text-base text-gray-600">{guarantee.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
