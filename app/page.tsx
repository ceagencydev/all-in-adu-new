import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { ComparisonSection } from "@/components/comparison-section"
import { ProcessSection } from "@/components/process-section"
import { ConstructionSection } from "@/components/construction-section"
import { GuaranteeSection } from "@/components/guarantee-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ADUTypesSection } from "@/components/adu-types-section"
import { GallerySection } from "@/components/gallery-section"
import { FooterCTA } from "@/components/footer-cta"
import { Footer } from "@/components/footer"
import { MobileStickyCTA } from "@/components/mobile-sticky-cta"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pb-20 lg:pb-0">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <ComparisonSection />
        <ProcessSection />
        <ConstructionSection />
        <GuaranteeSection />
        <TestimonialsSection />
        <ADUTypesSection />
        <GallerySection />
        <FooterCTA />
      </main>
      <Footer />
      <MobileStickyCTA />
    </div>
  )
}
