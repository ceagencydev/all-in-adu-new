import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Star, Zap, Shield, Truck, Award } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function LABLandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <header className="bg-slate-950/95 backdrop-blur-sm border-b border-slate-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Image src="/lab-logo.png" alt="Legendary Auto Builders" width={300} height={60} className="h-8 w-auto" />
            <nav className="hidden md:flex space-x-8">
              <Link href="#collections" className="text-slate-300 hover:text-purple-300 transition-colors font-medium">
                Collections
              </Link>
              <Link href="#about" className="text-slate-300 hover:text-purple-300 transition-colors font-medium">
                About
              </Link>
              <Link href="#testimonials" className="text-slate-300 hover:text-purple-300 transition-colors font-medium">
                Reviews
              </Link>
            </nav>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold shadow-lg hover:shadow-purple-500/25 transition-all">
              Shop Now
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-purple-950/30">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-slate-900/50" />
        <Image
          src="/placeholder-krc2n.png"
          alt="BMW with LAB Carbon Fiber Parts"
          fill
          className="object-cover opacity-40"
          priority
        />

        <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
          <Badge className="mb-8 bg-purple-600/90 hover:bg-purple-600 text-white px-6 py-3 text-sm font-bold tracking-wide shadow-lg">
            ENGINEERED IN CALIFORNIA
          </Badge>

          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tight">
            <span className="block text-white drop-shadow-2xl">GARAGE-BORN.</span>
            <span className="block text-white drop-shadow-2xl">TRACK-PROVEN.</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-300 to-violet-400 drop-shadow-lg">
              STREET-LEGENDARY.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-200 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Precision-engineered carbon fiber performance parts for BMW enthusiasts who demand nothing less than
            perfection.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white px-10 py-5 text-lg font-bold shadow-xl hover:shadow-purple-500/30 transition-all transform hover:scale-105"
            >
              Shop BMW Collections
              <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-slate-300 text-slate-100 hover:bg-slate-100 hover:text-slate-900 px-10 py-5 text-lg font-semibold backdrop-blur-sm transition-all"
            >
              View Gallery
            </Button>
          </div>
        </div>
      </section>

      {/* About LAB / USP Section */}
      <section className="py-24 bg-slate-900" id="about">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-6 bg-purple-500/20 text-purple-300 border border-purple-500/30 px-4 py-2 font-semibold">
                LEGENDARY AUTO BUILDERS
              </Badge>
              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                <span className="text-white">Born in the Garage.</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-400">
                  Built for Legends.
                </span>
              </h2>
              <p className="text-slate-300 text-lg mb-10 leading-relaxed font-light">
                What started as a passion project in a California garage has evolved into the premier destination for
                BMW carbon fiber and performance parts. Every piece we craft carries the DNA of enthusiasts who demand
                perfection.
              </p>

              <div className="grid sm:grid-cols-2 gap-8">
                <div className="flex items-start space-x-4 p-4 rounded-lg bg-slate-800/50 border border-slate-700/50">
                  <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-white mb-2">Pre-Preg Dry Carbon</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Aerospace-grade materials for maximum strength-to-weight ratio
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 rounded-lg bg-slate-800/50 border border-slate-700/50">
                  <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-white mb-2">OEM Fitment</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Perfect fit guaranteed, no modifications required
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 rounded-lg bg-slate-800/50 border border-slate-700/50">
                  <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-white mb-2">CFD-Tested Aero</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Computational fluid dynamics ensure functional performance
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 rounded-lg bg-slate-800/50 border border-slate-700/50">
                  <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-white mb-2">Bolt-On Install</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Weekend warrior friendly, professional results
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-slate-800 rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
                <video autoPlay muted loop playsInline className="w-full h-auto rounded-2xl">
                  <source src="/g82-m4-taillights.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent rounded-2xl" />
              <div className="absolute bottom-6 left-6 text-white">
                <Badge className="bg-purple-600 mb-3 shadow-lg">FEATURED BUILD</Badge>
                <h3 className="text-xl font-bold mb-1">G82 M4 CSL Style Taillights</h3>
                <p className="text-slate-300 text-sm">Yellow DRL Integration</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collection Grid */}
      <section className="py-24 bg-slate-50" id="collections">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
              <span className="text-slate-900">Choose Your</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800">
                BMW Collection
              </span>
            </h2>
            <p className="text-slate-600 text-xl max-w-3xl mx-auto leading-relaxed">
              Model-specific carbon fiber and performance parts engineered for your exact BMW. No compromises, just
              perfection.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* G8X Collection */}
            <Card className="bg-white border-slate-200 hover:border-purple-400 transition-all duration-300 group shadow-lg hover:shadow-xl hover:shadow-purple-500/20">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=250&width=400"
                    alt="G8X Collection"
                    width={400}
                    height={250}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-red-600 text-white font-bold shadow-lg">MOST POPULAR</Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-100/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-black text-slate-900 mb-2">G8X Collection</h3>
                  <p className="text-purple-600 font-bold mb-4 text-lg">G80 M3 / G82 M4</p>
                  <p className="text-slate-600 mb-8 leading-relaxed">
                    Track-bred aggression meets street sophistication. Complete aero packages designed for the ultimate
                    driving machine.
                  </p>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 shadow-lg hover:shadow-purple-500/25 transition-all">
                    View Collection
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* G80 M3 */}
            <Card className="bg-white border-slate-200 hover:border-purple-400 transition-all duration-300 group shadow-lg hover:shadow-xl hover:shadow-purple-500/20">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=250&width=400"
                    alt="G80 M3 Collection"
                    width={400}
                    height={250}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-100/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-black text-slate-900 mb-2">G80 BMW M3</h3>
                  <p className="text-purple-600 font-bold mb-4 text-lg">Sedan Perfection</p>
                  <p className="text-slate-600 mb-8 leading-relaxed">
                    Four-door fury with functional aerodynamics. Carbon fiber components that enhance both performance
                    and presence.
                  </p>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 shadow-lg hover:shadow-purple-500/25 transition-all">
                    View Collection
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* G82 M4 */}
            <Card className="bg-white border-slate-200 hover:border-purple-400 transition-all duration-300 group shadow-lg hover:shadow-xl hover:shadow-purple-500/20">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=250&width=400"
                    alt="G82 M4 Collection"
                    width={400}
                    height={250}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-100/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-black text-slate-900 mb-2">G82 BMW M4</h3>
                  <p className="text-purple-600 font-bold mb-4 text-lg">Coupe Excellence</p>
                  <p className="text-slate-600 mb-8 leading-relaxed">
                    Pure coupe DNA with race-inspired aerodynamics. Every curve optimized for maximum downforce and
                    visual impact.
                  </p>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 shadow-lg hover:shadow-purple-500/25 transition-all">
                    View Collection
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* G87 M2 */}
            <Card className="bg-white border-slate-200 hover:border-purple-400 transition-all duration-300 group shadow-lg hover:shadow-xl hover:shadow-purple-500/20">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=250&width=400"
                    alt="G87 M2 Collection"
                    width={400}
                    height={250}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-orange-500 text-white font-bold shadow-lg">NEW</Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-100/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-black text-slate-900 mb-2">G87 BMW M2</h3>
                  <p className="text-purple-600 font-bold mb-4 text-lg">Compact Weapon</p>
                  <p className="text-slate-600 mb-8 leading-relaxed">
                    Raw, unfiltered performance in a compact package. Carbon components that amplify the M2's aggressive
                    character.
                  </p>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 shadow-lg hover:shadow-purple-500/25 transition-all">
                    View Collection
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* F97 X3M */}
            <Card className="bg-white border-slate-200 hover:border-purple-400 transition-all duration-300 group shadow-lg hover:shadow-xl hover:shadow-purple-500/20">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=250&width=400"
                    alt="F97 X3M Collection"
                    width={400}
                    height={250}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-100/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-black text-slate-900 mb-2">F97 BMW X3M</h3>
                  <p className="text-purple-600 font-bold mb-4 text-lg">Performance SUV</p>
                  <p className="text-slate-600 mb-8 leading-relaxed">
                    High-performance SUV meets carbon fiber sophistication. Functional aero that enhances capability
                    without compromise.
                  </p>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 shadow-lg hover:shadow-purple-500/25 transition-all">
                    View Collection
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* F98 X4M */}
            <Card className="bg-white border-slate-200 hover:border-purple-400 transition-all duration-300 group shadow-lg hover:shadow-xl hover:shadow-purple-500/20">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=250&width=400"
                    alt="F98 X4M Collection"
                    width={400}
                    height={250}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-100/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-black text-slate-900 mb-2">F98 BMW X4M</h3>
                  <p className="text-purple-600 font-bold mb-4 text-lg">Coupe SUV</p>
                  <p className="text-slate-600 mb-8 leading-relaxed">
                    Athletic coupe silhouette with SUV versatility. Carbon accents that emphasize the X4M's dynamic
                    character.
                  </p>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 shadow-lg hover:shadow-purple-500/25 transition-all">
                    View Collection
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why LAB Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
              <span className="text-white">Why Choose</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-400 to-purple-500">
                Legendary Auto Builders?
              </span>
            </h2>
            <p className="text-slate-400 text-xl max-w-3xl mx-auto leading-relaxed">
              When you demand perfection, accept nothing less than legendary quality and performance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center group p-8 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-purple-500/30 transition-all duration-300">
              <div className="bg-gradient-to-br from-purple-500/20 to-violet-500/20 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-purple-500/30 group-hover:to-violet-500/30 transition-all duration-300">
                <Zap className="h-10 w-10 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Lightweight Performance</h3>
              <p className="text-slate-400 leading-relaxed">
                Pre-preg dry carbon construction delivers maximum strength with minimal weight. Feel the difference in
                every corner.
              </p>
            </div>

            <div className="text-center group p-8 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-purple-500/30 transition-all duration-300">
              <div className="bg-gradient-to-br from-purple-500/20 to-violet-500/20 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-purple-500/30 group-hover:to-violet-500/30 transition-all duration-300">
                <Shield className="h-10 w-10 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Functional Aerodynamics</h3>
              <p className="text-slate-400 leading-relaxed">
                CFD-optimized designs aren't just for show. Every component enhances downforce, reduces drag, and
                improves stability.
              </p>
            </div>

            <div className="text-center group p-8 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-purple-500/30 transition-all duration-300">
              <div className="bg-gradient-to-br from-purple-500/20 to-violet-500/20 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-purple-500/30 group-hover:to-violet-500/30 transition-all duration-300">
                <Award className="h-10 w-10 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">OEM Fitment Guarantee</h3>
              <p className="text-slate-400 leading-relaxed">
                Perfect fit, every time. No modifications, no compromises. Install with confidence knowing it's
                engineered to BMW standards.
              </p>
            </div>

            <div className="text-center group p-8 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-purple-500/30 transition-all duration-300">
              <div className="bg-gradient-to-br from-purple-500/20 to-violet-500/20 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-purple-500/30 group-hover:to-violet-500/30 transition-all duration-300">
                <Truck className="h-10 w-10 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Fast Delivery</h3>
              <p className="text-slate-400 leading-relaxed">
                In-stock parts ship fast. No waiting months for your build. Get back on the road and track where you
                belong.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-500/10 via-violet-500/10 to-purple-500/10 rounded-3xl p-12 border border-purple-500/20 shadow-2xl">
            <div className="text-center">
              <h3 className="text-3xl font-black text-white mb-6">Join the Elite Community</h3>
              <p className="text-slate-300 text-xl mb-10 max-w-4xl mx-auto leading-relaxed">
                When you choose LAB, you're not just buying parts—you're joining a community of BMW enthusiasts who
                refuse to settle for ordinary. Experience the pride of owning something truly legendary.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Badge className="bg-purple-500/20 text-purple-300 border border-purple-500/30 px-6 py-3 text-base font-semibold">
                  10,000+ Satisfied Customers
                </Badge>
                <Badge className="bg-purple-500/20 text-purple-300 border border-purple-500/30 px-6 py-3 text-base font-semibold">
                  Track-Tested Performance
                </Badge>
                <Badge className="bg-purple-500/20 text-purple-300 border border-purple-500/30 px-6 py-3 text-base font-semibold">
                  Lifetime Craftsmanship
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-950" id="testimonials">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
              <span className="text-white">What Legends</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-400 to-purple-500">
                Are Saying
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-slate-900 border-slate-700 shadow-xl">
              <CardContent className="p-8">
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-300 mb-8 text-lg leading-relaxed">
                  "The G82 M4 aero package completely transformed my car. The fitment is perfect, and the performance
                  gains on track are noticeable. LAB delivers on every promise."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">MR</span>
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg">Mike Rodriguez</p>
                    <p className="text-slate-400">G82 M4 Owner</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-900 border-slate-700 shadow-xl">
              <CardContent className="p-8">
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-300 mb-8 text-lg leading-relaxed">
                  "Installation was straightforward, and the quality is exceptional. My G87 M2 looks and performs like a
                  factory race car. Worth every penny."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">SC</span>
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg">Sarah Chen</p>
                    <p className="text-slate-400">G87 M2 Owner</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-900 border-slate-700 shadow-xl">
              <CardContent className="p-8">
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-300 mb-8 text-lg leading-relaxed">
                  "Fast shipping, perfect fitment, and the carbon fiber quality is unmatched. LAB has earned a customer
                  for life. My G80 M3 has never looked better."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">DJ</span>
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg">David Johnson</p>
                    <p className="text-slate-400">G80 M3 Owner</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-wrap justify-center gap-12">
            <div className="flex items-center space-x-3">
              <Shield className="h-8 w-8 text-purple-400" />
              <span className="text-white font-bold text-lg">Fitment Guarantee</span>
            </div>
            <div className="flex items-center space-x-3">
              <Truck className="h-8 w-8 text-purple-400" />
              <span className="text-white font-bold text-lg">Fast Shipping</span>
            </div>
            <div className="flex items-center space-x-3">
              <Award className="h-8 w-8 text-purple-400" />
              <span className="text-white font-bold text-lg">Engineered in California</span>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-purple-600 via-purple-700 to-violet-800">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-7xl font-black mb-8 leading-tight">
            <span className="text-white drop-shadow-lg">START BUILDING</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-100 to-white drop-shadow-lg">
              YOUR BMW
            </span>
          </h2>

          <p className="text-xl text-purple-100 mb-16 max-w-3xl mx-auto leading-relaxed">
            Explore the model-specific collections built for performance and presence. Your BMW deserves legendary
            parts.
          </p>

          <div className="mb-8">
            <Link href="#collections">
              <Button
                size="lg"
                className="bg-white text-purple-900 hover:bg-purple-50 font-black py-6 px-16 text-2xl shadow-2xl hover:shadow-white/20 transition-all transform hover:scale-105"
              >
                Shop BMW Collections
                <ArrowRight className="ml-4 h-7 w-7" />
              </Button>
            </Link>
          </div>

          <p className="text-purple-200 text-lg">
            Questions? Contact our BMW specialists at{" "}
            <Link href="tel:+1-555-LAB-PARTS" className="text-white underline hover:no-underline font-semibold">
              (555) LAB-PARTS
            </Link>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-slate-400 text-lg">© 2024 Legendary Auto Builders. All rights reserved.</p>
            </div>
            <div className="flex space-x-8">
              <Link href="#" className="text-slate-400 hover:text-purple-300 transition-colors font-medium">
                Privacy Policy
              </Link>
              <Link href="#" className="text-slate-400 hover:text-purple-300 transition-colors font-medium">
                Terms of Service
              </Link>
              <Link href="#" className="text-slate-400 hover:text-purple-300 transition-colors font-medium">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
