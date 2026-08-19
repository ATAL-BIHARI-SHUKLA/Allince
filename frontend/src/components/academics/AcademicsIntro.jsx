import { BookOpen, GraduationCap, Sparkles } from "lucide-react";
import SectionHeading from "../common/SectionHeading";

const AcademicsIntro = () => {
  const highlights = [
    {
      icon: BookOpen,
      title: "Strong Foundation",
      description: "A structured academic program designed for young learners.",
    },
    {
      icon: GraduationCap,
      title: "Class 1 to 8",
      description:
        "Focused learning experiences for every stage of school education.",
    },
    {
      icon: Sparkles,
      title: "Overall Growth",
      description:
        "Academics combined with creativity, activities, and life skills.",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <SectionHeading
            badge="Academic Excellence"
            title="Learning Beyond the Classroom"
            description="Our academic approach focuses on understanding, curiosity, confidence, and continuous improvement."
            align="left"
          />

          <p className="leading-8 text-slate-600">
            At Alliance School, we provide students with a strong educational
            foundation while encouraging them to explore, question, think
            creatively, and develop important skills.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            Our learning environment is designed to make education engaging and
            meaningful for students from Class 1 to Class 8.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="rounded-xl bg-slate-50 p-4">
                  <Icon size={24} className="text-blue-600" />

                  <h3 className="mt-3 text-sm font-semibold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl">
          <img
            src="https://images.unsplash.com/photo-1509062522246-3755977927d"
            alt="Students learning"
            className="h-[450px] w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AcademicsIntro;
