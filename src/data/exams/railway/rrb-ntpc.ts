import type { ExamSyllabus } from "@/types/exam";

export const rrbNtpcSyllabus: ExamSyllabus = {
  examId: "rrb-ntpc",
  title: "RRB NTPC",
  description: "CBT syllabus for Non-Technical Popular Categories.",
  sections: [
    {
      id: "math",
      label: "Mathematics",
      topics: [
        {
          id: "simplification",
          title: "Simplification",
          description: "BODMAS, approximation, and basic arithmetic.",
          highPriority: true,
          icon: "SI",
        },
        {
          id: "percentage",
          title: "Percentage",
          description: "Profit, loss, and discount.",
          icon: "PC",
        },
        {
          id: "ratio-proportion",
          title: "Ratio and Proportion",
          description: "Proportions, mixtures, and partnerships.",
          icon: "RP",
        },
        {
          id: "interest",
          title: "Simple and Compound Interest",
          description: "Interest calculations.",
          icon: "IN",
        },
        {
          id: "time-work",
          title: "Time and Work",
          description: "Work efficiency and pipes.",
          icon: "TW",
        },
        {
          id: "data-interpretation",
          title: "Data Interpretation",
          description: "Tables, bar charts, and pie charts.",
          icon: "DI",
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
          description: "Word, number, and figure analogies.",
          icon: "AN",
        },
        {
          id: "series",
          title: "Series",
          description: "Missing number and alphabet series.",
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
          id: "puzzles",
          title: "Puzzles",
          description: "Seating arrangement and ordering.",
          icon: "PU",
        },
        {
          id: "statement-conclusion",
          title: "Statement and Conclusion",
          description: "Logical statements and inferences.",
          icon: "SC",
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
        {
          id: "history",
          title: "History",
          description: "Indian history highlights.",
          icon: "HI",
        },
        {
          id: "geography",
          title: "Geography",
          description: "Rivers, mountains, and climate.",
          icon: "GE",
        },
        {
          id: "economy",
          title: "Economy",
          description: "Basic economic terms and policies.",
          icon: "EC",
        },
      ],
    },
  ],
};