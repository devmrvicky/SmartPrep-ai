import type { ExamSyllabus } from "@/types/exam";

export const rrbMinisterialSyllabus: ExamSyllabus = {
  examId: "rrb-ministerial",
  title: "RRB Ministerial and Isolated Categories",
  description: "CBT and skill test focused syllabus.",
  sections: [
    {
      id: "professional",
      label: "Professional Ability",
      topics: [
        {
          id: "office-procedures",
          title: "Office Procedures",
          description: "File handling and official correspondence.",
          highPriority: true,
          icon: "OP",
        },
        {
          id: "computer-basics",
          title: "Computer Basics",
          description: "MS Office, typing, and shortcuts.",
          icon: "CB",
        },
        {
          id: "steno-typing",
          title: "Stenography and Typing",
          description: "Speed and accuracy practice.",
          icon: "ST",
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
      id: "quant",
      label: "Quantitative Aptitude",
      topics: [
        {
          id: "percentage",
          title: "Percentage",
          description: "Profit, loss, and discount.",
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
      id: "english",
      label: "English Language",
      topics: [
        {
          id: "grammar",
          title: "Grammar",
          description: "Tenses, articles, and subject verb agreement.",
          icon: "GR",
        },
        {
          id: "vocabulary",
          title: "Vocabulary",
          description: "Synonyms, antonyms, and one word substitution.",
          icon: "VO",
        },
        {
          id: "comprehension",
          title: "Reading Comprehension",
          description: "Short passages and inference.",
          icon: "RC",
        },
      ],
    },
  ],
};