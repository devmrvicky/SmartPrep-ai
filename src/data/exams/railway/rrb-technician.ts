import type { ExamSyllabus } from "@/types/exam";

export const rrbTechnicianSyllabus: ExamSyllabus = {
  examId: "rrb-technician",
  title: "RRB Technician",
  description: "CBT syllabus for Technician posts.",
  sections: [
    {
      id: "math",
      label: "Mathematics",
      topics: [
        {
          id: "number-system",
          title: "Number System",
          description: "HCF, LCM, and simplification.",
          icon: "NS",
        },
        {
          id: "percentage",
          title: "Percentage",
          description: "Profit, loss, and discount.",
          highPriority: true,
          icon: "PC",
        },
        {
          id: "ratio-proportion",
          title: "Ratio and Proportion",
          description: "Partnership and mixtures.",
          icon: "RP",
        },
        {
          id: "time-work",
          title: "Time and Work",
          description: "Work efficiency and pipes.",
          icon: "TW",
        },
      ],
    },
    {
      id: "reasoning",
      label: "General Intelligence and Reasoning",
      topics: [
        {
          id: "analogies",
          title: "Analogies",
          description: "Word and number analogies.",
          icon: "AN",
        },
        {
          id: "series",
          title: "Series",
          description: "Number and letter series.",
          icon: "SR",
        },
        {
          id: "coding-decoding",
          title: "Coding and Decoding",
          description: "Patterns and substitution.",
          highPriority: true,
          icon: "CD",
        },
        {
          id: "blood-relation",
          title: "Blood Relations",
          description: "Family and relational logic.",
          icon: "BR",
        },
      ],
    },
    {
      id: "science",
      label: "General Science",
      topics: [
        {
          id: "physics",
          title: "Physics",
          description: "Units, motion, and heat.",
          icon: "PH",
        },
        {
          id: "chemistry",
          title: "Chemistry",
          description: "Elements and reactions.",
          icon: "CH",
        },
        {
          id: "biology",
          title: "Biology",
          description: "Human body and health.",
          icon: "BI",
        },
      ],
    },
    {
      id: "awareness",
      label: "General Awareness",
      topics: [
        {
          id: "current-affairs",
          title: "Current Affairs",
          description: "National and international updates.",
          highPriority: true,
          icon: "CA",
        },
        {
          id: "static-gk",
          title: "Static GK",
          description: "Important facts and records.",
          icon: "GK",
        },
      ],
    },
    {
      id: "technical",
      label: "Technical and Trade",
      topics: [
        {
          id: "trade-basics",
          title: "Trade Basics",
          description: "Core trade concepts and terminology.",
          highPriority: true,
          icon: "TB",
        },
        {
          id: "tools-safety",
          title: "Tools and Safety",
          description: "Workshop tools and safety rules.",
          icon: "TS",
        },
        {
          id: "measurement",
          title: "Measurement",
          description: "Units, gauges, and instruments.",
          icon: "ME",
        },
      ],
    },
  ],
};