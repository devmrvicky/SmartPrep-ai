// src/types/exam.ts

export type ExamCategory =
  | "railway"
  | "ssc"
  | "banking"
  | "defence"
  | "teaching"
  | "upsc"
  | "state"
  | "police"
  | "engineering"
  | "regulatory";

export type ExamFrequency = "Regular" | "Occasional" | "Rare";

export type ExamPostType =
  | "Non-Technical"
  | "Technical"
  | "Police"
  | "Medical"
  | "Ministerial";

export type ExamLevel =
  | "10th pass"
  | "12th pass"
  | "Graduate"
  | "10th / 12th"
  | "12th / Graduate"
  | "10th + ITI"
  | "10th + ITI / Diploma"
  | "Diploma / Engineering"
  | "Diploma / Degree";

export interface Eligibility {
  education: string;
  age: string;
}

export interface ExamDetails {
  id: string;
  name: string;
  shortName: string;
  category: ExamCategory;
  level: ExamLevel;
  postType: ExamPostType;
  conductedBy: string;
  eligibility: Eligibility;
  examType: string;
  frequency: ExamFrequency;
  slug: string;
  active: boolean;
}

export type SyllabusTopic = {
  id: string;
  title: string;
  description: string;
  highPriority?: boolean;
  icon?: string;
};

export type SyllabusSection = {
  id: string;
  label: string;
  topics: SyllabusTopic[];
};

export type ExamSyllabus = {
  examId: string;
  title: string;
  description: string;
  sections: SyllabusSection[];
};
