import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Zap, Palette, BookOpen } from "lucide-react"

const bonuses = [
  {
    icon: Zap,
    title: "VIP Fast-Start",
    description: "First 5 clients get priority scheduling",
  },
  {
    icon: Palette,
    title: "Free Interior Design Consult",
    description: "Bring your vision to life",
  },
  {
    icon: BookOpen,
    title: "Rental Income Guide",
    description: "Maximize your return from day one",
  },
]

export function BonusesSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-orange-500 to-amber-500 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Exclusive Bonuses</h2>
          <p className="text-lg">(Limited Time)</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {bonuses.map((bonus, index) => (
            <Card key={index} className="bg-white/10 border-white/20">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <bonus.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{bonus.title}</h3>
                <p>{bonus.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-white text-orange-500 hover:bg-gray-100 text-lg px-8 py-4 h-auto">
            Claim My Bonuses
          </Button>
        </div>
      </div>
    </section>
  )
}
