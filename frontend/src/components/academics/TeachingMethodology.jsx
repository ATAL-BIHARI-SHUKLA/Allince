import { Lightbulb, Users, MessageSquare, Puzzle } from "lucide-react";
import SectionHeading from "../common/SectionHeading";

const methods = [
  {
    icon: Lightbulb,
    title: "Concept-Based Learning",
    description:
      "Students are encouraged to understand concepts instead of only memorizing information.",
  },
  {
    icon: Users,
    title: "Collaborative Learning",
    description:
      "Group activities and discussions help students learn from one another.",
  },
  {
    icon: MessageSquare,
    title: "Interactive Teaching",
    description:
      "Teachers use discussions, questions, examples, and activities to make lessons engaging.",
  },
  {
    icon: Puzzle,
    title: "Activity-Based Learning",
    description:
      "Practical activities help students connect classroom knowledge with real experiences.",
  },
];

const TeachingMethodology = () => {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="How We Teach"
          title="An Engaging Approach to Education"
          description="Our teaching methods are designed to make learning active, understandable, and enjoyable."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {methods.map((method) => {
            const Icon = method.icon;

            return (
              <div
                key={method.title}
                className="rounded-2xl bg-white p-6 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Icon size={24} />
                </div>

                <h3 className="mt-5 font-semibold text-slate-900">
                  {method.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {method.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TeachingMethodology;
