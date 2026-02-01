export default function TrustedBy() {
  const brands = ["EduTech", "ExamPrep", "SarkariJobs", "TopRanker"];

  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-gray-600 font-semibold mb-8">
          Trusted by 50,000+ Aspirants
        </h3>
        <div className="flex justify-center items-center gap-12 flex-wrap opacity-60">
          {brands.map((brand) => (
            <div key={brand} className="text-gray-500 font-semibold">
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
