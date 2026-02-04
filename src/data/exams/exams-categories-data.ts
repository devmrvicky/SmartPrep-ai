import type { ExamCategory } from "@/types/exam";
import { railway } from "./railway/railway-exams-data";

interface IExamCategorie {
  id: ExamCategory;
  label: string;
}

export const examCategories: IExamCategorie[] = [
  { id: "railway", label: "Railway" },
  { id: "ssc", label: "SSC" },
  { id: "banking", label: "Banking" },
  { id: "defence", label: "Defence" },
  { id: "teaching", label: "Teaching" },
  { id: "upsc", label: "UPSC / Civil Services" },
  { id: "state", label: "State Government" },
  { id: "police", label: "Police" },
  { id: "engineering", label: "Engineering & Technical" },
  { id: "regulatory", label: "Regulatory Bodies" },
];

export const exams = {
  railway,
};
