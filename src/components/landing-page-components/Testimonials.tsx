import { testimonials } from "@/data/testimonials-data";
import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
  return (
    <section id="testimonials" className="container mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold">Student Success Stories</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </section>
  );
}
