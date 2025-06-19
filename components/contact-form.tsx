import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function ContactForm() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready for Your No-Obligation ADU Plan?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Fill out the form below to secure your free property assessment and unlock your home's true potential.
            </p>
          </div>

          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-center text-2xl">Get Your Free Assessment</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your full name" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" placeholder="(555) 123-4567" />
                </div>
                <div>
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" placeholder="Your property address" />
                </div>
              </div>

              <div>
                <Label htmlFor="reason">What's your #1 reason for building an ADU?</Label>
                <Textarea id="reason" placeholder="Tell us about your goals..." className="min-h-[100px]" />
              </div>

              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-lg py-6">Book My Free Assessment</Button>

              <p className="text-center text-sm text-gray-500">Limited spots available—book now before they're gone.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
