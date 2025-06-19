import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Clock } from "lucide-react"

export function AssessmentSection() {
  return (
    <section className="py-16 bg-orange-500 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Book Your FREE Property Assessment</h2>
          <p className="text-lg mb-2">($1,000 Value)</p>

          <div className="grid md:grid-cols-3 gap-6 my-12">
            <Card className="bg-white/10 border-white/20">
              <CardContent className="p-6 text-center">
                <CheckCircle className="w-8 h-8 mx-auto mb-4" />
                <p>Find out if your lot qualifies</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20">
              <CardContent className="p-6 text-center">
                <CheckCircle className="w-8 h-8 mx-auto mb-4" />
                <p>Get a step-by-step plan & cost breakdown</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20">
              <CardContent className="p-6 text-center">
                <CheckCircle className="w-8 h-8 mx-auto mb-4" />
                <p>No obligation, no hidden fees</p>
              </CardContent>
            </Card>
          </div>

          <div className="flex items-center justify-center mb-8">
            <Clock className="w-5 h-5 mr-2" />
            <span className="text-lg font-semibold">Only 5 Free Assessments Left This Month!</span>
          </div>

          <Button size="lg" className="bg-white text-orange-500 hover:bg-gray-100 text-lg px-8 py-4 h-auto">
            Book My Free Consultation
          </Button>
        </div>
      </div>
    </section>
  )
}
