import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  ctaText?: string;
  ctaVariant?: string;
}

export default function PricingCard({
  title,
  price,
  period,
  description,
  features,
  isPopular = false,
  ctaText = "Get Started",
  ctaVariant = "default",
}: PricingCardProps) {
  return (
    <Card
      className={`relative border-2 ${isPopular ? "border-blue-600 shadow-xl scale-105" : "border-gray-200"} transition-all hover:shadow-lg`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      <CardContent className="p-8">
        {/* Title */}
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-6">{description}</p>

        {/* Price */}
        <div className="mb-6">
          <div className="flex items-baseline gap-1">
            <span className="text-5xl font-bold">₹{price}</span>
            {period && <span className="text-gray-600">/{period}</span>}
          </div>
        </div>

        {/* CTA Button */}
        <Button
          className={`w-full mb-6 ${
            ctaVariant === "primary"
              ? "bg-blue-600 hover:bg-blue-700 text-white"
              : "bg-gray-100 hover:bg-gray-200 text-gray-900"
          }`}
          size="lg"
        >
          {ctaText}
        </Button>

        {/* Features List */}
        <div className="space-y-3">
          <p className="text-sm font-semibold text-gray-900 mb-4">
            What's included:
          </p>
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <span className="text-gray-700 text-sm">{feature}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
