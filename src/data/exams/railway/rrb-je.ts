import type { ExamSyllabus } from "@/types/exam";

export const rrbJeSyllabus: ExamSyllabus = {
  examId: "rrb-je",
  title: "RRB Junior Engineer",
  description: "CBT syllabus for JE posts with technical ability section.",
  sections: [
    {
      id: "math",
      label: "Mathematics",
      topics: [
        {
          id: "algebra",
          title: "Algebra",
          description: "Equations, identities, and functions.",
          icon: "AL",
        },
        {
          id: "trigonometry",
          title: "Trigonometry",
          description: "Ratios, identities, and heights.",
          highPriority: true,
          icon: "TR",
        },
        {
          id: "statistics",
          title: "Statistics",
          description: "Mean, median, and mode.",
          icon: "ST",
        },
        {
          id: "mensuration",
          title: "Mensuration",
          description: "Area and volume calculations.",
          icon: "MN",
        },
      ],
    },
    {
      id: "reasoning",
      label: "General Intelligence and Reasoning",
      topics: [
        {
          id: "puzzles",
          title: "Puzzles",
          description: "Seating and ordering.",
          icon: "PU",
        },
        {
          id: "syllogism",
          title: "Syllogism",
          description: "Logical deductions.",
          icon: "SY",
        },
        {
          id: "coding-decoding",
          title: "Coding and Decoding",
          description: "Symbol and number coding.",
          icon: "CD",
        },
        {
          id: "direction-distance",
          title: "Direction and Distance",
          description: "Movement based problems.",
          icon: "DD",
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
          description: "Recent events and updates.",
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
      ],
    },
    {
      id: "science",
      label: "General Science",
      topics: [
        {
          id: "physics",
          title: "Physics",
          description: "Mechanics and electricity basics.",
          icon: "PH",
        },
        {
          id: "chemistry",
          title: "Chemistry",
          description: "Atoms, molecules, and reactions.",
          icon: "CH",
        },
        {
          id: "biology",
          title: "Biology",
          description: "Human physiology and health.",
          icon: "BI",
        },
      ],
    },
    {
      id: "technical",
      label: "Technical Abilities",
      topics: [
        {
          id: "engineering-mechanics",
          title: "Engineering Mechanics",
          description: "Force systems and equilibrium.",
          highPriority: true,
          icon: "EM",
        },
        {
          id: "strength-materials",
          title: "Strength of Materials",
          description: "Stress, strain, and bending.",
          icon: "SM",
        },
        {
          id: "thermodynamics",
          title: "Thermodynamics",
          description: "Heat, work, and energy.",
          icon: "TH",
        },
        {
          id: "electrical-basics",
          title: "Electrical Basics",
          description: "Circuits and measurements.",
          icon: "EL",
        },
        {
          id: "surveying",
          title: "Surveying",
          description: "Measurements and instruments.",
          icon: "SV",
        },
      ],
    },
  ],
};