import { features } from "@/data/features";
import FeatureCard from "./FeatureCard";

export default function Features() {
  return (
    <section id="features" className="container mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">
          Smart Features for Serious Aspirants
        </h2>
        <p className="text-gray-600 text-lg">
          Everything you need to improve your rank efficiently, powered by
          advanced AI.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
}
