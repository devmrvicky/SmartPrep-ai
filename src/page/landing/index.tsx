import {
  Header,
  Hero,
  // TrustedBy,
  Features,
  Pricing,
  Comparison,
  Testimonials,
  CTA,
  Footer,
} from "@/components/landing-page-components";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      {/* <TrustedBy /> */}
      <Features />
      <Pricing />
      <Comparison />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
