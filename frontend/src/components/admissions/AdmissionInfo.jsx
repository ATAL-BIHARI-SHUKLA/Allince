import { GraduationCap, HeartHandshake, School } from "lucide-react";
import SectionHeading from "../common/SectionHeading";

const features = [
  {
    icon: GraduationCap,
    title: "Quality Education",
    description:
      "A strong academic foundation for students from Class 1 to Class 8.",
  },
  {
    icon: HeartHandshake,
    title: "Supportive Environment",
    description:
      "A caring environment where every child can learn and grow with confidence.",
  },
  {
    icon: School,
    title: "Holistic Development",
    description:
      "A balanced focus on academics, creativity, activities, and personal growth.",
  },
];

const AdmissionInfo = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Admissions Open"
          title="Begin Your Child's Learning Journey"
          description="Alliance School welcomes students who are ready to learn, grow, explore, and build a strong foundation for the future."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                  <Icon size={24} />
                </div>

                <h3 className="mt-5 text-lg font-semibold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AdmissionInfo;
