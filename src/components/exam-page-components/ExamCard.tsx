// src/components/ExamCard.tsx

import type { Exam } from "@/types/exam";

interface ExamCardProps {
  exam: Exam;
  onClick?: (slug: string) => void;
}

export function ExamCard({ exam, onClick }: ExamCardProps) {
  return (
    <div
      className="rounded-xl border bg-white p-4 shadow-sm hover:shadow-md transition cursor-pointer"
      onClick={() => onClick?.(exam.slug)}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-2">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{exam.name}</h3>
          <p className="text-sm text-gray-500">
            Conducted by {exam.conductedBy}
          </p>
        </div>

        {exam.active && (
          <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
            Active
          </span>
        )}
      </div>

      {/* Info */}
      <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
        <Info label="Level" value={exam.level} />
        <Info label="Post Type" value={exam.postType} />
        <Info label="Exam Type" value={exam.examType} />
        <Info label="Frequency" value={exam.frequency} />
      </div>

      {/* Eligibility */}
      <div className="mt-4 rounded-lg bg-gray-50 p-3 text-sm">
        <p className="font-medium text-gray-700">Eligibility</p>
        <p className="text-gray-600">🎓 {exam.eligibility.education}</p>
        <p className="text-gray-600">🎂 {exam.eligibility.age}</p>
      </div>

      {/* CTA */}
      <div className="mt-4">
        <button className="w-full rounded-lg bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800">
          View Details
        </button>
      </div>
    </div>
  );
}

/* Small helper component */
function Info({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs text-gray-500">{label}</p>
      <p className="font-medium text-gray-800">{value}</p>
    </div>
  );
}
