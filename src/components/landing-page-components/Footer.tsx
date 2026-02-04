import { APP_NAME } from "@/constants/constants";
import { Badge } from "../ui/badge";
import Logo from "../utils/Logo";
import { Link } from "react-router";

const inProgressFeatures = [
  "download app",
  "exam syllabus",
  "previous year papers",
  "help",
  "job center",
  "privacy policy",
  "terms of service",
];

export default function Footer() {
  const footerSections = [
    {
      title: "Platform",
      links: ["Features", "Pricing", "Download App"],
    },
    {
      title: "Resources",
      links: ["Exam Syllabus", "Previous Year Papers", "Help", "Job Center"],
    },
    {
      title: "Legal",
      links: ["Privacy Policy", "Terms of Service"],
    },
  ];

  return (
    <footer className="border-t bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div>
            <Logo className="mb-4" />
            <p className="text-gray-600 text-sm">
              Your AI-powered companion for all government exams success.
            </p>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                {section.links.map((link) => (
                  <li key={link}>
                    <Link
                      to={`/${link.split(" ").join("-").toLocaleLowerCase()}`}
                      className="hover:text-blue-600 transition-colors"
                    >
                      {link}
                    </Link>
                    {inProgressFeatures.includes(link.toLocaleLowerCase()) && (
                      <Badge variant={"outline"}>in progress</Badge>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="border-t mt-8 pt-8 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} {APP_NAME}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
