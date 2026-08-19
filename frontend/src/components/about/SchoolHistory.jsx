import { CalendarDays, School } from "lucide-react";
import SectionHeading from "../common/SectionHeading";

const timeline = [
  {
    year: "2015",
    title: "The Beginning",
    description:
      "Alliance School began with a vision to provide quality education and strong values to young learners.",
  },
  {
    year: "2018",
    title: "Growing Together",
    description:
      "The school expanded its academic programs and created more opportunities for student development.",
  },
  {
    year: "2022",
    title: "Modern Learning",
    description:
      "New learning methods, activities, and improved facilities were introduced to support better education.",
  },
  {
    year: "Today",
    title: "Moving Forward",
    description:
      "Alliance School continues to focus on academic excellence, creativity, character, and student success.",
  },
];

const SchoolHistory = () => {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Our Journey"
          title="Growing With Every Generation"
          description="Our journey is built on a commitment to education, continuous improvement, and the success of our students."
        />

        <div className="relative mt-12 space-y-8 border-l-2 border-blue-100 pl-8 md:pl-12">
          {timeline.map((item) => (
            <div key={item.year} className="relative">
              <div className="absolute -left-[45px] flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white md:-left-[61px]">
                <School size={16} />
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex items-center gap-2 text-sm font-semibold text-blue-600">
                  <CalendarDays size={16} />
                  {item.year}
                </div>

                <h3 className="mt-3 text-xl font-semibold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SchoolHistory;
