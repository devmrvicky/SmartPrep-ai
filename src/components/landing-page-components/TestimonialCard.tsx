import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface ITestimonialCard {
  name: string;
  role: string;
  rating: number;
  text: string;
  avatar: string;
}

export default function TestimonialCard({
  name,
  role,
  rating,
  text,
  avatar,
}: ITestimonialCard) {
  return (
    <Card className="border-2">
      <CardContent className="p-6">
        {/* Star Rating */}
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 ${
                i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Testimonial Text */}
        <p className="text-gray-700 mb-6 italic">"{text}"</p>

        {/* Author Info */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl">
            {avatar}
          </div>
          <div>
            <div className="font-semibold">{name}</div>
            <div className="text-sm text-gray-500">{role}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
