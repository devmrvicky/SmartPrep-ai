import type { ExamSyllabus } from "@/types/exam";

export const rrbAlpSyllabus: ExamSyllabus = {
  examId: "rrb-alp",
  title: "RRB ALP",
  description: "Assistant Loco Pilot CBT 1 and CBT 2 syllabus.",
  sections: [
    {
      id: "cbt-1",
      label: "CBT 1",
      topics: [
        {
          id: "cbt1-math",
          title: "Mathematics",
          description: "Basic arithmetic, ratio, and percentage.",
          icon: "MA",
        },
        {
          id: "cbt1-reasoning",
          title: "General Intelligence and Reasoning",
          description: "Analogies, coding, and puzzles.",
          icon: "RE",
        },
        {
          id: "cbt1-science",
          title: "General Science",
          description: "Physics, chemistry, and biology basics.",
          icon: "GS",
        },
        {
          id: "cbt1-awareness",
          title: "General Awareness",
          description: "Current affairs and static GK.",
          icon: "GA",
        },
      ],
    },
    {
      id: "cbt-2a",
      label: "CBT 2 Part A",
      topics: [
        {
          id: "cbt2a-math",
          title: "Mathematics",
          description: "Advanced arithmetic and algebra.",
          highPriority: true,
          icon: "MA",
        },
        {
          id: "cbt2a-reasoning",
          title: "Reasoning",
          description: "Analytical and logical reasoning.",
          icon: "RE",
        },
        {
          id: "cbt2a-science",
          title: "General Science",
          description: "Physics and applied science.",
          icon: "GS",
        },
        {
          id: "cbt2a-awareness",
          title: "General Awareness",
          description: "GK, current affairs, and railway knowledge.",
          icon: "GA",
        },
      ],
    },
    {
      id: "cbt-2b",
      label: "CBT 2 Part B",
      topics: [
        {
          id: "basic-engineering",
          title: "Basic Science and Engineering",
          description: "Workshop, tools, and safety.",
          highPriority: true,
          icon: "BE",
        },
        {
          id: "trade-theory",
          title: "Trade Theory",
          description: "Trade specific concepts.",
          icon: "TT",
        },
        {
          id: "trade-practice",
          title: "Trade Practice",
          description: "Practical applications and maintenance.",
          icon: "TP",
        },
      ],
    },
  ],
};