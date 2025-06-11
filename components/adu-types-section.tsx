import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const aduTypes = [
  {
    title: "Detached ADU",
    description: "Perfect for rental income or multigenerational living",
    image: "/images/detached-adu.webp",
    alt: "Modern two-story detached ADU with wood and gray siding, balcony, and professional landscaping",
  },
  {
    title: "Garage Conversion",
    description: "Transform existing space efficiently",
    image: "/images/garage-conversion-1.webp",
    alt: "Two-story garage conversion ADU with living space above garage",
  },
  {
    title: "Bump-out ADU",
    description: "Expand your existing home footprint",
    image: "/images/garage-conversion-2.webp",
    alt: "Garage conversion ADU with integrated design featuring wood and light siding",
  },
  {
    title: "Junior ADU (JADU)",
    description: "Compact solution within existing home",
    image: "/images/junior-adu.avif",
    alt: "Junior ADU with compact design and efficient use of space",
  },
]

export function ADUTypesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            We Build Every Type of ADU To Match Your Needs
          </h1>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {aduTypes.map((type, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <div className="aspect-square overflow-hidden rounded-t-lg">
                <Image
                  src={type.image || "/placeholder.svg"}
                  alt={type.alt}
                  width={250}
                  height={250}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{type.title}</h3>
                <p className="text-base text-gray-600">{type.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
