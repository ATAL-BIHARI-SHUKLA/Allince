import { Users, GraduationCap, BookOpen, Award } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "500+",
    label: "Students",
  },
  {
    icon: GraduationCap,
    value: "30+",
    label: "Teachers",
  },
  {
    icon: BookOpen,
    value: "8",
    label: "Classes",
  },
  {
    icon: Award,
    value: "10+",
    label: "Years of Excellence",
  },
];

const Statistics = () => {
  return (
    <section className="bg-blue-600 py-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 text-center sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div key={stat.label}>
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white">
                <Icon size={24} />
              </div>

              <p className="mt-4 text-3xl font-bold text-white">{stat.value}</p>

              <p className="mt-1 text-sm text-blue-100">{stat.label}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Statistics;
