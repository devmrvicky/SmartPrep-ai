import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="container mx-auto px-4 py-12 mb-20">
      <div className="bg-blue-600 rounded-3xl p-12 text-center text-white">
        <h2 className="text-4xl font-bold mb-4">
          Ready to Secure Your Government Job?
        </h2>
        <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
          Join the smartest community of aspirants today. Get unlimited access
          to AI analysis and mock tests for free.
        </p>
        <Button className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6">
          Start Free Preparation Now
        </Button>
      </div>
    </section>
  );
}
