import { Button } from "@/components/ui/button";
import LoginBtn from "../Login-btn";
import { Link } from "react-router";

export default function Navigation() {
  const navItems = [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Testimonials", href: "#testimonials" },
  ];

  return (
    <nav className="hidden md:flex items-center gap-6">
      {navItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="text-gray-600 hover:text-gray-900 transition-colors"
        >
          {item.label}
        </a>
      ))}
      <Link
        to="/exams"
        className="mr-4 text-gray-600 hover:text-gray-900 transition-colors"
      >
        Exams
      </Link>
      <LoginBtn />
      <Button className="bg-blue-600 hover:bg-blue-700">Get Started</Button>
    </nav>
  );
}
