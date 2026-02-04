// src/data/syllabus/loader.ts
export const loadSyllabusById = async (examId: string) => {
  switch (examId) {
    case "rrb-group-d":
      return (await import("../data/exams/railway/rrb-group-d"))
        .rrbGroupDExamSyllabus;
    case "rrb-ntpc":
      return (await import("../data/exams/railway/rrb-ntpc")).rrbNtpcSyllabus;
    case "rrb-alp":
      return (await import("../data/exams/railway/rrb-alp")).rrbAlpSyllabus;
    case "rrb-je":
      return (await import("../data/exams/railway/rrb-je")).rrbJeSyllabus;
    case "rrb-ministerial":
      return (await import("../data/exams/railway/rrb-ministerial"))
        .rrbMinisterialSyllabus;
    case "rrb-paramedical":
      return (await import("../data/exams/railway/rrb-paramedical"))
        .rrbParamedicalSyllabus;
    case "rrb-technician":
      return (await import("../data/exams/railway/rrb-technician"))
        .rrbTechnicianSyllabus;
    default:
      return undefined;
  }
};
