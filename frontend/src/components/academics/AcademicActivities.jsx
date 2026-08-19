import { Microscope, BookOpen, Presentation, Trophy } from "lucide-react";
import SectionHeading from "../common/SectionHeading";

const activities = [
  {
    icon: Microscope,
    title: "Science Activities",
    description:
      "Hands-on experiments and activities that encourage curiosity.",
  },
  {
    icon: BookOpen,
    title: "Reading Activities",
    description:
      "Programs that help students develop reading and comprehension skills.",
  },
  {
    icon: Presentation,
    title: "Projects & Presentations",
    description:
      "Opportunities for students to research, create, and present ideas.",
  },
  {
    icon: Trophy,
    title: "Academic Competitions",
    description:
      "Healthy competitions that encourage confidence and continuous improvement.",
  },
];

const AcademicActivities = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Learning Activities"
          title="Learning Through Experience"
          description="Students participate in activities that make academic learning more practical, engaging, and memorable."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {activities.map((activity) => {
            const Icon = activity.icon;

            return (
              <div
                key={activity.title}
                className="rounded-2xl border border-slate-200 p-6"
              >
                <Icon size={30} className="text-blue-600" />

                <h3 className="mt-5 text-lg font-semibold text-slate-900">
                  {activity.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {activity.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AcademicActivities;
