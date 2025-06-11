import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Clock, DollarSign, Shield, User, Star } from "lucide-react"

const benefits = [
  {
    icon: Building2,
    title: "One-Stop Shop",
    description: "Permits, design, construction, and project management—all under one roof.",
  },
  {
    icon: Clock,
    title: "On-Time, Or We Pay You $2,500",
    description: "We guarantee project completion deadlines, or we put money back in your pocket.",
  },
  {
    icon: DollarSign,
    title: "Best Value Guarantee",
    description: "Transparent, fixed pricing. No surprise add-ons, ever.",
  },
  {
    icon: Shield,
    title: "365-Day Warranty",
    description: "Enjoy peace of mind long after your ADU is finished.",
  },
  {
    icon: User,
    title: "Dedicated Project Manager",
    description: "Your personal guide from start to finish—questions answered, timeline tracked, problems solved.",
  },
  {
    icon: Star,
    title: "100+ Happy Homeowners",
    description: "Real reviews, real results, real peace of mind.",
  },
]

export function BenefitsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Orange County Homeowners Choose All-In ADU
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-2 hover:border-orange-200 transition-colors">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-orange-500" />
                </div>
                <CardTitle className="text-xl">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
