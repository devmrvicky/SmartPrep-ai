import { Button } from "@/components/ui/button";
// import { Check } from "lucide-react";
import DashboardMockup from "./DashboardMockup";

export default function Hero() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Crack <span className="text-blue-600">any exam</span> with Smart
            Preparation, <span className="text-blue-600">Not Harder.</span>
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Personalized AI analysis finds your weak spots and fixes them before
            the exam. Join thousands of students getting smarter every day.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6">
              Start Free Preparation
            </Button>
            <Button variant="outline" className="text-lg px-8 py-6">
              <div className="w-6 h-6 mr-2 border-2 border-gray-700 rounded-full flex items-center justify-center">
                <div className="w-0 h-0 border-l-4 border-l-gray-700 border-t-2 border-t-transparent border-b-2 border-b-transparent ml-0.5"></div>
              </div>
              Watch Demo
            </Button>
          </div>

          {/* Trust Indicators */}
          {/* <div className="flex gap-6 mt-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-emerald-600" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-emerald-600" />
              <span>Free 7-day trial</span>
            </div>
          </div> */}
        </div>

        {/* Right Content - Dashboard Mockup */}
        <DashboardMockup />
      </div>
    </section>
  );
}
