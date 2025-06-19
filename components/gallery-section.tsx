import Image from "next/image"

const galleryImages = [
  {
    src: "/images/gallery/adu-kitchen.avif",
    alt: "Modern ADU kitchen with white cabinets, dark countertops, and stainless steel appliances",
  },
  {
    src: "/images/gallery/adu-living-room.avif",
    alt: "ADU living room and dining area with modern furniture and open floor plan",
  },
  {
    src: "/images/gallery/adu-bathroom.avif",
    alt: "Contemporary ADU bathroom with white tiles and modern vanity",
  },
  {
    src: "/images/gallery/adu-bedroom.avif",
    alt: "ADU bedroom with built-in storage and minimalist design",
  },
  {
    src: "/images/gallery/adu-exterior-1.avif",
    alt: "Modern ADU exterior with large windows and professional landscaping",
  },
  {
    src: "/images/gallery/adu-exterior-2.avif",
    alt: "Contemporary ADU exterior showcasing modern architecture and outdoor living space",
  },
  {
    src: "/images/gallery/adu-dining.avif",
    alt: "ADU dining area with modern lighting fixtures and stylish furniture",
  },
  {
    src: "/images/gallery/adu-office.avif",
    alt: "ADU home office workspace with built-in desk and storage solutions",
  },
]

export function GallerySection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">Photo Gallery</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          {galleryImages.map((image, index) => (
            <div key={index} className="aspect-square overflow-hidden rounded-lg">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={300}
                height={300}
                className="w-full h-full object-cover hover:scale-105 transition-transform cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
