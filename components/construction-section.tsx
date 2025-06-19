import Image from "next/image"

export function ConstructionSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="rounded-2xl overflow-hidden shadow-xl">
          <Image
            src="/images/adu-construction.png"
            alt="Professional ADU construction team building wooden frame structure in Southern California"
            width={1200}
            height={400}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>
    </section>
  )
}
