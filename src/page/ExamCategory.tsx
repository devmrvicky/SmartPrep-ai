import { Header, Navigation } from "@/components/landing-page-components";
import Logo from "@/components/utils/Logo";
// import {
//   type SyllabusTopic,
//   type SyllabusSection,
//   type ExamSyllabus,
// } from "@/data/syllabus-data";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router";
// import { railwaySyllabus } from "@/data/syllabus-data";
import { loadSyllabusById } from "@/lib/syllabusLoader";
import type { ExamSyllabus } from "@/types/exam";

export default function IndividualExamSyllabus() {
  const [examSyllabus, setExamSyllabus] = useState<ExamSyllabus>();
  // const [title, setTitle] = useState<string>("")
  // const [description, setDescription] = useState<string>("")
  // const [syllabusSections, setSyllabusSections] = useState<SyllabusSection[]>([])
  // const [syllabusTopics, setSyllabusTopics] = useState<SyllabusTopic[]>([]);

  const [searchParams] = useSearchParams();
  const examId = searchParams.get("exam");
  console.log(examId);
  const title = useMemo(() => examSyllabus?.title, [examSyllabus]);
  const description = useMemo(() => examSyllabus?.description, [examSyllabus]);
  const syllabusSections = useMemo(
    () => examSyllabus?.sections,
    [examSyllabus],
  );

  const [activeSectionId, setActiveSectionId] = useState(
    syllabusSections?.[0]?.id ?? "math",
  );

  const activeSection = useMemo(
    () =>
      syllabusSections?.find((section) => section.id === activeSectionId) ??
      syllabusSections?.[0],
    [activeSectionId, syllabusSections],
  );

  useEffect(() => {
    (async () => {

      if(!examId) return;
      const examSyllabus = await loadSyllabusById(examId)
      if(!examSyllabus) return
      setExamSyllabus(examSyllabus);
    })()
  }, [examId]);

  return (
    <div className="bg-slate-50">
      <Header />
      <div className="mx-auto w-full max-w-5xl px-6 pb-16 pt-12">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-blue-600">
          <span className="h-2 w-2 rounded-full bg-blue-600" />
          Exam Preparation
        </div>

        <div className="mt-3 flex flex-wrap items-end gap-3">
          <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">
            {title}
          </h1>
        </div>

        <p className="mt-2 max-w-2xl text-sm text-slate-600 md:text-base">
          {description}
        </p>

        <div className="mt-8 flex flex-wrap gap-6 border-b border-slate-200 text-sm font-semibold text-slate-500">
          {syllabusSections?.map((section) => (
            <button
              key={section.id}
              type="button"
              onClick={() => setActiveSectionId(section.id)}
              className={`pb-3 transition-colors ${
                section.id === activeSectionId
                  ? "border-b-2 border-blue-600 text-blue-700"
                  : "border-b-2 border-transparent hover:text-slate-800"
              }`}
            >
              {section.label}
            </button>
          ))}
        </div>

        <div className="mt-6 space-y-4">
          {activeSection?.topics.map((topic) => (
            <div
              key={topic.id}
              className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-sm"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-lg font-semibold text-blue-700">
                  {topic.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-semibold text-slate-900 md:text-base">
                      {topic.title}
                    </h3>
                    {topic.highPriority ? (
                      <span className="flex items-center gap-1 rounded-full bg-amber-100 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-amber-700">
                        🔥 High Priority
                      </span>
                    ) : null}
                  </div>
                  <p className="text-xs text-slate-500 md:text-sm">
                    {topic.description}
                  </p>
                </div>
              </div>

              <input
                type="checkbox"
                className="h-4 w-4 rounded border-slate-300 text-blue-600"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
