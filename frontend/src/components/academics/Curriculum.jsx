import { CheckCircle2 } from "lucide-react";

const curriculumPoints = [
  "Concept-based learning",
  "Age-appropriate academic structure",
  "Regular assessments and progress evaluation",
  "Practical and activity-based learning",
  "Focus on communication and critical thinking",
  "Balanced academic and co-curricular development",
];

const Curriculum = () => {
  return (
    <section className="bg-slate-900 py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-400">
            Our Curriculum
          </p>

          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            Structured for Meaningful Learning
          </h2>

          <p className="mt-5 leading-8 text-slate-300">
            Our curriculum is designed to provide students with the knowledge
            and skills needed at every stage of their education while keeping
            learning engaging and understandable.
          </p>
        </div>

        <div className="space-y-4">
          {curriculumPoints.map((point) => (
            <div
              key={point}
              className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4"
            >
              <CheckCircle2 size={22} className="shrink-0 text-blue-400" />

              <p className="text-sm text-slate-200">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
