import type { ExamSyllabus } from "@/types/exam";

export const rrbParamedicalSyllabus: ExamSyllabus = {
  examId: "rrb-paramedical",
  title: "RRB Paramedical",
  description: "CBT syllabus for paramedical categories.",
  sections: [
    {
      id: "professional",
      label: "Professional Ability",
      topics: [
        {
          id: "anatomy",
          title: "Anatomy",
          description: "Human body structure.",
          highPriority: true,
          icon: "AN",
        },
        {
          id: "physiology",
          title: "Physiology",
          description: "Body functions and systems.",
          icon: "PH",
        },
        {
          id: "pharmacology",
          title: "Pharmacology",
          description: "Drugs and interactions.",
          icon: "PA",
        },
        {
          id: "medical-terminology",
          title: "Medical Terminology",
          description: "Common medical terms and abbreviations.",
          icon: "MT",
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
      ],
    },
    {
      id: "science",
      label: "General Science",
      topics: [
        {
          id: "physics",
          title: "Physics",
          description: "Light, sound, and electricity.",
          icon: "PH",
        },
        {
          id: "chemistry",
          title: "Chemistry",
          description: "Acids, bases, and reactions.",
          icon: "CH",
        },
        {
          id: "biology",
          title: "Biology",
          description: "Human health and diseases.",
          icon: "BI",
        },
      ],
    },
    {
      id: "arithmetic",
      label: "Arithmetic",
      topics: [
        {
          id: "percentage",
          title: "Percentage",
          description: "Ratio and percentage basics.",
          icon: "PC",
        },
        {
          id: "time-work",
          title: "Time and Work",
          description: "Work efficiency problems.",
          icon: "TW",
        },
        {
          id: "data-interpretation",
          title: "Data Interpretation",
          description: "Tables and charts.",
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
          icon: "CD",
        },
      ],
    },
  ],
};