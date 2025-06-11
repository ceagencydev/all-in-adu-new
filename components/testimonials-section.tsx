import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah T.",
    location: "Orange County",
    text: "From start to finish, Staci and her crew were outstanding. They built my ADU in just 60 days, kept everything on budget, and left my yard cleaner than before. I'd choose them again without question.",
    rating: 5,
  },
  {
    name: "Mike R.",
    location: "Riverside County",
    text: "I was really anxious about permits and unexpected costs, but the team handled every detail like absolute professionals and kept me informed throughout the process!",
    rating: 5,
  },
  {
    name: "Jennifer L.",
    location: "Los Angeles County",
    text: "The rental income from our ADU has been amazing. Best investment we've made in our property!",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Hear It From Southern California Homeowners
          </h2>
          <p className="text-2xl text-gray-600">Just Like You</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-lg text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <div className="text-sm">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-500">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
