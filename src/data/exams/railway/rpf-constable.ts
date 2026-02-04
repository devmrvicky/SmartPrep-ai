import type { ExamSyllabus } from "@/types/exam";

export const rpfConstableSyllabus: ExamSyllabus = {
  examId: "rpf-constable",
  title: "RPF Constable",
  description: "CBT syllabus for RPF Constable recruitment.",
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
          id: "history",
          title: "History",
          description: "Indian history highlights.",
          icon: "HI",
        },
        {
          id: "polity",
          title: "Polity",
          description: "Constitution and governance.",
          icon: "PO",
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
          id: "number-system",
          title: "Number System",
          description: "Simplification and approximation.",
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
          id: "syllogism",
          title: "Syllogism",
          description: "Logical deductions.",
          icon: "SY",
        },
      ],
    },
  ],
};