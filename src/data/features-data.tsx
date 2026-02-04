import {
  Target,
  AlertCircle,
  Dumbbell,
  Brain,
  Users,
  BarChart3,
} from "lucide-react";
import type { JSX } from "react";

export interface IFeature {
  icon: JSX.Element;
  title: string;
  description: string;
}

export const features: IFeature[] = [
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
