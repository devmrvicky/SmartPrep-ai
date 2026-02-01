import PricingCard from "./PricingCard";

export default function Pricing() {
  const pricingPlans = [
    {
      title: "Free Plan",
      price: "0",
      period: "forever",
      description: "Perfect to get started with RailSmart AI",
      ctaText: "Start Free Preparation",
      ctaVariant: "primary",
      isPopular: true,
      features: [
        "AI Weakness Analyzer (Limited)",
        "5 Smart Mock Tests per month",
        "Basic Performance Analytics",
        "Mistake Bank (Up to 50 questions)",
        "Access to study materials",
        "Community forum access",
        "Email support",
        "Mobile app access",
      ],
    },
    // {
    //   title: "Pro Plan",
    //   price: "499",
    //   period: "month",
    //   description: "For serious aspirants who want full access",
    //   ctaText: "Coming Soon",
    //   ctaVariant: "default",
    //   isPopular: false,
    //   features: [
    //     "Everything in Free Plan",
    //     "Unlimited AI Weakness Analyzer",
    //     "Unlimited Smart Mock Tests",
    //     "Advanced Performance Analytics",
    //     "Unlimited Mistake Bank",
    //     "Live Doubt Solving with experts",
    //     "PET Tracker & Fitness Guide",
    //     "Previous year papers (10 years)",
    //     "Priority email & chat support",
    //     "Personalized study roadmap",
    //   ],
    // },
    // {
    //   title: "Premium Plan",
    //   price: "999",
    //   period: "month",
    //   description: "Complete preparation package with 1-on-1 mentorship",
    //   ctaText: "Coming Soon",
    //   ctaVariant: "default",
    //   isPopular: false,
    //   features: [
    //     "Everything in Pro Plan",
    //     "1-on-1 mentorship sessions",
    //     "Interview preparation",
    //     "Resume building assistance",
    //     "Daily personalized study plan",
    //     "Group study sessions",
    //     "Exam strategy workshops",
    //     "Post-selection career guidance",
    //     "24/7 priority support",
    //     "Lifetime access to materials",
    //   ],
    // },
  ];

  return (
    <section
      id="pricing"
      className="container mx-auto px-4 py-20 bg-linear-to-b from-white to-gray-50"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">
          Start Your Preparation for <span className="text-blue-600">Free</span>
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Begin your journey to crack RRB Group D with our free plan. No credit
          card required, no hidden charges. Upgrade anytime when you're ready.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div></div>
        {pricingPlans.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
        <div></div>
      </div>

      {/* Additional Info */}
      <div className="mt-16 text-center">
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 max-w-3xl mx-auto">
          <h3 className="font-semibold text-lg mb-2">🎉 Limited Time Offer</h3>
          <p className="text-gray-700">
            Start with our Free Plan today and get{" "}
            <span className="font-bold text-blue-600">
              7 days of Pro Plan features
            </span>{" "}
            absolutely free. No credit card required. Experience the full power
            of AI-driven preparation!
          </p>
        </div>
      </div>

      {/* FAQ Style Note */}
      <div className="mt-12 max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6 text-sm">
          <div className="bg-white p-6 rounded-lg border">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <span className="text-emerald-600">✓</span> Why start free?
            </h4>
            <p className="text-gray-600">
              We believe in our product and want you to experience the power of
              AI-driven preparation before making any commitment. Try it
              risk-free and see the results yourself.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <span className="text-blue-600">?</span> When to upgrade?
            </h4>
            <p className="text-gray-600">
              Upgrade when you need unlimited mock tests, live doubt solving, or
              personalized mentorship. Many students crack exams with just the
              free plan!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
