import type { ExamSyllabus } from "@/types/exam";

export const rpfSiSyllabus: ExamSyllabus = {
  examId: "rpf-si",
  title: "RPF Sub Inspector",
  description: "CBT syllabus for RPF SI recruitment.",
  sections: [
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
          id: "polity",
          title: "Polity",
          description: "Constitution and governance.",
          icon: "PO",
        },
        {
          id: "economy",
          title: "Economy",
          description: "Basic economic concepts.",
          icon: "EC",
        },
        {
          id: "geography",
          title: "Geography",
          description: "Physical and political geography.",
          icon: "GE",
        },
      ],
    },
    {
      id: "arithmetic",
      label: "Arithmetic",
      topics: [
        {
          id: "simplification",
          title: "Simplification",
          description: "BODMAS and approximation.",
          icon: "SI",
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
          description: "Work efficiency problems.",
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
          description: "Symbol and number coding.",
          icon: "CD",
        },
        {
          id: "puzzles",
          title: "Puzzles",
          description: "Ordering and seating.",
          icon: "PU",
        },
      ],
    },
  ],
};