import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Check,
  X,
  Target,
  AlertCircle,
  BookOpen,
  Users,
  TrendingUp,
  Dumbbell,
  Brain,
  BarChart3,
  Star,
} from "lucide-react";

export default function App() {
  const features = [
    {
      icon: <Target className="w-6 h-6 text-emerald-600" />,
      title: "AI Weakness Analyzer",
      description:
        "Pinpoint tracks strengths and scans down automatically with detailed heatmaps.",
    },
    {
      icon: <AlertCircle className="w-6 h-6 text-emerald-600" />,
      title: "Mistake Bank",
      description:
        "Automatically curated list of every wrong answer you've made for quick revision.",
    },
    {
      icon: <Dumbbell className="w-6 h-6 text-emerald-600" />,
      title: "PET Tracker",
      description:
        "Physical Efficiency Test guide and fitness logging to ensure you are physically ready.",
    },
    {
      icon: <Brain className="w-6 h-6 text-emerald-600" />,
      title: "Smart Mock Tests",
      description:
        "Tests that adapt difficulty based on your performance to simulate real exam pressure.",
    },
    {
      icon: <Users className="w-6 h-6 text-emerald-600" />,
      title: "Live Doubt Solving",
      description:
        "Get instant help from expert mentors when you are stuck on a complex problem.",
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-emerald-600" />,
      title: "Performance Analytics",
      description:
        "Deep dive into your study patterns and growth with comprehensive visual data.",
    },
  ];

  const testimonials = [
    {
      name: "Rahul Kumar",
      role: "Railway Engineer",
      rating: 5,
      text: "The AI Weakness Analyzer saved me! I didn't realize I was consistently failing in logical reasoning until the AI pointed it out. Improved my score by 20 marks.",
      avatar: "👨",
    },
    {
      name: "Priya Sharma",
      role: "Group D - SSE",
      rating: 5,
      text: "RailSmart AI is smarter than any coaching center I've tried. The adaptive tests felt like real exams. Highly recommended for serious students.",
      avatar: "👩",
    },
    {
      name: "Amit Singh",
      role: "Group D Aspirant",
      rating: 4,
      text: "The PET Tracker helped me balance my physical training with studies. Great for all-around preparation and serious focus.",
      avatar: "👨",
    },
  ];

  const comparisonRows = [
    {
      feature: "Personalized Roadmap",
      railsmart: "included",
      traditional: "not-included",
    },
    {
      feature: "Weakness Detection",
      railsmart: "ai-powered",
      traditional: "manual",
    },
    {
      feature: "Live Doubt Solving",
      railsmart: "instant",
      traditional: "email-support",
    },
    {
      feature: "Mock Test Quality",
      railsmart: "adaptive",
      traditional: "static",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">R</span>
            </div>
            <span className="font-bold text-xl">RailSmart AI</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-gray-600 hover:text-gray-900">
              Features
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900">
              Pricing
            </a>
            <a
              href="#testimonials"
              className="text-gray-600 hover:text-gray-900"
            >
              Testimonials
            </a>
            <a href="#login" className="text-gray-600 hover:text-gray-900">
              Login
            </a>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Get Started
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Crack RRB Group D with Smart Preparation,{" "}
              <span className="text-blue-600">Not Harder.</span>
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              Personalized AI analysis finds your weak spots and fixes them
              before the exam. Join thousands of students getting smarter every
              day.
            </p>
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
            <div className="flex gap-6 mt-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-emerald-600" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-emerald-600" />
                <span>Free 7-day trial</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-linear-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-1 bg-gray-700/50 rounded-lg p-4">
                    <div className="w-16 h-16 rounded-full border-4 border-yellow-500 border-t-transparent mx-auto mb-2"></div>
                    <div className="h-2 bg-gray-600 rounded mt-4"></div>
                  </div>
                  <div className="flex-1 bg-gray-700/50 rounded-lg p-4">
                    <div className="w-16 h-16 rounded-full border-4 border-yellow-500 border-t-transparent mx-auto mb-2"></div>
                    <div className="h-2 bg-gray-600 rounded mt-4"></div>
                  </div>
                  <div className="flex-1 bg-gray-700/50 rounded-lg p-4">
                    <div className="w-16 h-16 rounded-full border-4 border-yellow-500 border-t-transparent mx-auto mb-2"></div>
                    <div className="h-2 bg-gray-600 rounded mt-4"></div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-gray-700/50 rounded-lg p-3">
                      <div className="h-12 bg-emerald-500/30 rounded"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h3 className="text-center text-gray-600 font-semibold mb-8">
            Trusted by 50,000+ Aspirants
          </h3>
          <div className="flex justify-center items-center gap-12 flex-wrap opacity-60">
            <div className="text-gray-500 font-semibold">EduTech</div>
            <div className="text-gray-500 font-semibold">ExamPrep</div>
            <div className="text-gray-500 font-semibold">SarkariJobs</div>
            <div className="text-gray-500 font-semibold">TopRanker</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
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
            <Card
              key={index}
              className="border-2 hover:border-blue-600 transition-colors"
            >
              <CardContent className="p-6">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Why Choose RailSmart AI?
            </h2>
            <p className="text-gray-600">
              See how we stack up against traditional learning methods.
            </p>
          </div>
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="text-left p-4 font-semibold text-gray-600">
                    FEATURE
                  </th>
                  <th className="text-center p-4 font-semibold text-blue-600">
                    RailSmart AI
                  </th>
                  <th className="text-center p-4 font-semibold text-gray-600">
                    Traditional Apps
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, index) => (
                  <tr key={index} className="border-t">
                    <td className="p-4 text-gray-700">{row.feature}</td>
                    <td className="p-4 text-center">
                      {row.railsmart === "included" && (
                        <span className="inline-flex items-center gap-1 text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full text-sm font-medium">
                          <Check className="w-4 h-4" /> Included
                        </span>
                      )}
                      {row.railsmart === "ai-powered" && (
                        <span className="inline-flex items-center gap-1 text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full text-sm font-medium">
                          <Brain className="w-4 h-4" /> AI Powered
                        </span>
                      )}
                      {row.railsmart === "instant" && (
                        <span className="inline-flex items-center gap-1 text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full text-sm font-medium">
                          <Check className="w-4 h-4" /> Instant
                        </span>
                      )}
                      {row.railsmart === "adaptive" && (
                        <span className="inline-flex items-center gap-1 text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full text-sm font-medium">
                          <BarChart3 className="w-4 h-4" /> Adaptive
                        </span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {row.traditional === "not-included" && (
                        <span className="inline-flex items-center gap-1 text-red-600 bg-red-50 px-3 py-1 rounded-full text-sm font-medium">
                          <X className="w-4 h-4" /> Not Included
                        </span>
                      )}
                      {row.traditional === "manual" && (
                        <span className="text-gray-500">Manual</span>
                      )}
                      {row.traditional === "email-support" && (
                        <span className="text-gray-500">Email Support</span>
                      )}
                      {row.traditional === "static" && (
                        <span className="text-gray-500">Static</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">Student Success Stories</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
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

      {/* Footer */}
      <footer className="border-t bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">R</span>
                </div>
                <span className="font-bold text-xl">RailSmart AI</span>
              </div>
              <p className="text-gray-600 text-sm">
                Your AI-powered companion for railway exam success.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Success Stories
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Download App
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Exam Syllabus
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Previous Year Papers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Help
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Job Center
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-gray-600">
            © 2024 RailSmart AI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
