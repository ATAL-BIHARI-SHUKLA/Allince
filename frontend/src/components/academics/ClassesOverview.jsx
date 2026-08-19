import { GraduationCap } from "lucide-react";
import SectionHeading from "../common/SectionHeading";

const classes = [
  {
    title: "Primary Level",
    range: "Class 1 – Class 5",
    description:
      "Building strong foundations in language, mathematics, science, social awareness, and essential learning skills.",
  },
  {
    title: "Middle Level",
    range: "Class 6 – Class 8",
    description:
      "Developing deeper subject knowledge, analytical thinking, problem-solving, and academic confidence.",
  },
];

const ClassesOverview = () => {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Classes Offered"
          title="Education From Class 1 to Class 8"
          description="Our academic structure supports students at different stages of their educational journey."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {classes.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-slate-200 bg-white p-8 transition hover:shadow-lg"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                <GraduationCap size={28} />
              </div>

              <p className="mt-6 text-sm font-semibold text-blue-600">
                {item.range}
              </p>

              <h3 className="mt-2 text-2xl font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClassesOverview;
