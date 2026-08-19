import {
  Languages,
  Calculator,
  FlaskConical,
  Globe2,
  Monitor,
  Palette,
} from "lucide-react";
import SectionHeading from "../common/SectionHeading";

const subjects = [
  {
    icon: Languages,
    title: "Languages",
    description:
      "English and other language subjects for communication and expression.",
  },
  {
    icon: Calculator,
    title: "Mathematics",
    description:
      "Developing numerical skills, logical thinking, and problem-solving.",
  },
  {
    icon: FlaskConical,
    title: "Science",
    description:
      "Encouraging curiosity and understanding of the world around us.",
  },
  {
    icon: Globe2,
    title: "Social Studies",
    description:
      "Learning about society, history, geography, and responsible citizenship.",
  },
  {
    icon: Monitor,
    title: "Computer Education",
    description: "Building basic digital knowledge and technology awareness.",
  },
  {
    icon: Palette,
    title: "Creative Learning",
    description:
      "Activities that encourage creativity, expression, and imagination.",
  },
];

const Subjects = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Subjects"
          title="A Balanced Academic Curriculum"
          description="Students learn through a balanced combination of academic subjects and creative experiences."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {subjects.map((subject) => {
            const Icon = subject.icon;

            return (
              <div
                key={subject.title}
                className="rounded-2xl border border-slate-200 p-6 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Icon size={24} />
                </div>

                <h3 className="mt-5 text-lg font-semibold text-slate-900">
                  {subject.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {subject.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Subjects;
