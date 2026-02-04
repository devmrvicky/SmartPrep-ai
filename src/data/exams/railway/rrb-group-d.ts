import type { ExamSyllabus } from "@/types/exam";

export const rrbGroupDExamSyllabus: ExamSyllabus = {
  examId: "rrb-group-d",
  title: "RRB Group D",
  description: "Common CBT syllabus for Group D recruitment.",
  sections: [
    {
      id: "math",
      label: "Mathematics",
      topics: [
        {
          id: "number-system",
          title: "Number System",
          description: "Basic arithmetic operations and properties.",
          highPriority: true,
          icon: "NS",
        },
        {
          id: "bodmas",
          title: "BODMAS",
          description: "Order of operations in equations.",
          icon: "BD",
        },
        {
          id: "decimals-fractions",
          title: "Decimals and Fractions",
          description: "Conversions and arithmetic.",
          icon: "DF",
        },
        {
          id: "percentage",
          title: "Percentage",
          description: "Profit, loss, and discount calculations.",
          highPriority: true,
          icon: "PC",
        },
        {
          id: "mensuration",
          title: "Mensuration",
          description: "Area, perimeter, and volume.",
          icon: "MN",
        },
        {
          id: "time-work",
          title: "Time and Work",
          description: "Efficiency and man-days.",
          highPriority: true,
          icon: "TW",
        },
        {
          id: "ratio-proportions",
          title: "Ratio and Proportions",
          description: "Efficiency and man-days.",
          highPriority: true,
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
          id: "coding-decoding",
          title: "Coding and Decoding",
          description: "Pattern based code conversion.",
          highPriority: true,
          icon: "CD",
        },
        {
          id: "series",
          title: "Series",
          description: "Number and alphabet series.",
          icon: "SR",
        },
        {
          id: "syllogism",
          title: "Syllogism",
          description: "Logical deductions and conclusions.",
          icon: "SY",
        },
        {
          id: "direction-distance",
          title: "Direction and Distance",
          description: "Movement based problems.",
          icon: "DD",
        },
        {
          id: "venn",
          title: "Venn Diagrams",
          description: "Sets and classification.",
          icon: "VD",
        },
      ],
    },
    {
      id: "science",
      label: "General Science",
      topics: [
        {
          id: "physics",
          title: "Physics Basics",
          description: "Motion, force, and simple machines.",
          highPriority: true,
          icon: "PH",
        },
        {
          id: "chemistry",
          title: "Chemistry Basics",
          description: "Elements, compounds, and reactions.",
          icon: "CH",
        },
        {
          id: "biology",
          title: "Biology Basics",
          description: "Human body and plant life.",
          icon: "BI",
        },
        {
          id: "everyday-science",
          title: "Everyday Science",
          description: "Science in daily life.",
          icon: "ES",
        },
        {
          id: "environment",
          title: "Environment and Health",
          description: "Common environmental topics.",
          icon: "EN",
        },
      ],
    },
    {
      id: "awareness",
      label: "General Awareness and Current Affairs",
      topics: [
        {
          id: "current-affairs",
          title: "Current Affairs",
          description: "National and international events.",
          highPriority: true,
          icon: "CA",
        },
        {
          id: "history",
          title: "History",
          description: "Ancient, medieval, and modern India.",
          icon: "HI",
        },
        {
          id: "geography",
          title: "Geography",
          description: "Physical and political geography.",
          icon: "GE",
        },
        {
          id: "polity",
          title: "Polity",
          description: "Constitution and governance.",
          icon: "PO",
        },
        {
          id: "sports-awards",
          title: "Sports and Awards",
          description: "Major tournaments and honors.",
          icon: "SP",
        },
      ],
    },
  ],
};