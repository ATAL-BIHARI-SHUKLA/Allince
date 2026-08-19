import {
  BookOpen,
  Heart,
  Lightbulb,
  Users,
  ShieldCheck,
  Award,
} from "lucide-react";
import SectionHeading from "../common/SectionHeading";

const values = [
  {
    icon: BookOpen,
    title: "Learning",
    description:
      "We encourage curiosity, knowledge, and a lifelong love for learning.",
  },
  {
    icon: Heart,
    title: "Respect",
    description:
      "We promote kindness, respect, empathy, and positive relationships.",
  },
  {
    icon: Lightbulb,
    title: "Creativity",
    description:
      "Students are encouraged to think differently and explore new ideas.",
  },
  {
    icon: Users,
    title: "Teamwork",
    description:
      "We believe in learning together, supporting each other, and growing as a community.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "We teach honesty, responsibility, discipline, and strong moral values.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We continuously work toward improvement and the best possible outcomes.",
  },
];

const CoreValues = () => {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Our Values"
          title="The Principles That Guide Us"
          description="Our values shape the way we teach, learn, interact, and grow together as a school community."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <div
                key={value.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Icon size={24} />
                </div>

                <h3 className="mt-5 text-lg font-semibold text-slate-900">
                  {value.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
