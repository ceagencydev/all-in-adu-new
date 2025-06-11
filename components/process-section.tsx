import { Calendar, FileText, Ruler, CheckCircle } from "lucide-react"

const steps = [
  {
    icon: Calendar,
    number: "1",
    title: "Getting Started",
    description: "Book your free property assessment and get a personalized plan",
  },
  {
    icon: FileText,
    number: "2",
    title: "Free Consultation",
    description:
      "Our expert team will visit your property, analyze your space, and listen to your ideas. Aligning your goals and making your dream ADU come true.",
  },
  {
    icon: Ruler,
    number: "3",
    title: "Design & Plans",
    description:
      "Our in-house crew handles permits, plan checks, construction, and interior design—all in one seamless process. We're on time, every time.",
  },
  {
    icon: CheckCircle,
    number: "4",
    title: "Enjoy Your ADU",
    description:
      "Over 100 happy Orange County homeowners love their ADUs. We ensure you're 100% satisfied before we leave, and we're always here for questions.",
  },
]

export function ProcessSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Building an ADU Can Be Stress-Free—We've Got Your Back!
          </h1>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <step.icon className="w-10 h-10 text-blue-600" />
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {step.number}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-base text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
