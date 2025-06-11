import Image from "next/image"

export function ProblemSection() {
  return (
    <section className="py-8 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
              Feeling overwhelmed by ADU regulations?
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-4 md:mb-6">
              We get it - building an ADU can feel like navigating a maze. You're probably asking yourself:
            </p>

            <div className="space-y-3 md:space-y-4 text-base md:text-lg text-gray-600 mb-4 md:mb-6">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>"How do I even start with all these complex building codes?"</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>"Will I need multiple contractors for different parts of the project?"</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>"What if I miss something important in the permitting process?"</span>
              </div>
            </div>

            <p className="text-lg md:text-xl font-semibold text-gray-900">
              What if you could skip all the headaches and have experts handle everything for you?
            </p>
          </div>

          <div className="flex justify-center order-1 lg:order-2">
            <div className="w-full max-w-sm md:max-w-md lg:w-96 lg:h-96 bg-gray-50 rounded-2xl flex items-center justify-center">
              <Image
                src="/images/confused-homeowner.png"
                alt="Confused homeowner with ADU paperwork and regulations"
                width={350}
                height={350}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
