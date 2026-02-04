import { ExamCard } from "@/components/exam-page-components/ExamCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { examCategories, exams } from "@/data/exams/exams-categories-data";
import type { ExamCategory } from "@/types/exam";
import { useNavigate } from "react-router";

// we will list all governement exam here
export default function Exams() {
  const navigate = useNavigate();
  const handleRedirectToExam = (category: ExamCategory, examSlug: string) => {
    navigate(`${category}?exam=${examSlug}`);
  };
  return (
    <section>
      <div>
        <h1>All Government exams</h1>
      </div>
      <Tabs defaultValue={examCategories[0]?.id || "account"} className="">
        <TabsList variant="line">
          {examCategories.map((category) => (
            <TabsTrigger key={category.id} value={category.id}>
              {category.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {examCategories.map((category) => (
          <TabsContent
            key={category.id}
            value={category.id}
            className="grid grid-cols-4 border gap-2 p-3"
          >
            {exams[category.id as keyof typeof exams]?.length ? (
              exams[category.id as keyof typeof exams]?.map((exam) => (
                <ExamCard
                  key={exam.id}
                  exam={exam}
                  onClick={() => handleRedirectToExam(category.id, exam.slug)}
                />
              ))
            ) : (
              <div>we will working on these categories</div>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
