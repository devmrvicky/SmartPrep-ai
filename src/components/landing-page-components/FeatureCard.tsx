import { Card, CardContent } from "@/components/ui/card";
import type { JSX } from "react";

interface FeatureCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <Card className="border-2 hover:border-blue-600 transition-colors">
      <CardContent className="p-6">
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
}
