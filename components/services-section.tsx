import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, BarcodeIcon as Garage, Plus } from "lucide-react"

const services = [
  {
    icon: Home,
    title: "Detached ADUs",
    description: "Perfect for rental income or multigenerational living",
  },
  {
    icon: Garage,
    title: "Garage Conversions",
    description: "Maximize existing space efficiently",
  },
  {
    icon: Plus,
    title: "Bump-Out & Junior ADUs",
    description: "Flexible living or home office solutions",
  },
]

export function ServicesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">See the Possibilities</h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-8 h-8 text-orange-500" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Button className="bg-orange-500 hover:bg-orange-600">View Project Gallery</Button>
        </div>
      </div>
    </section>
  )
}
