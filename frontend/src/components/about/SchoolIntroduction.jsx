import { GraduationCap, Users, Heart } from "lucide-react";
import SectionHeading from "../common/SectionHeading";

const highlights = [
  {
    icon: GraduationCap,
    title: "Quality Learning",
    description:
      "A strong educational foundation for students from Class 1 to Class 8.",
  },
  {
    icon: Users,
    title: "Student-Centered",
    description:
      "We focus on the individual growth and development of every child.",
  },
  {
    icon: Heart,
    title: "Values & Character",
    description:
      "Education that helps students grow with confidence and good values.",
  },
];

const SchoolIntroduction = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <SectionHeading
            badge="Who We Are"
            title="A Place Where Young Minds Grow"
            description="Alliance School is committed to providing a strong academic foundation in a safe, supportive, and inspiring environment."
            align="left"
          />

          <p className="text-base leading-8 text-slate-600">
            We believe that every child has unique abilities and potential. Our
            approach to education focuses not only on academic learning but also
            on creativity, confidence, communication, discipline, and overall
            personality development.
          </p>

          <p className="mt-4 text-base leading-8 text-slate-600">
            Through dedicated teachers, engaging learning experiences, and a
            positive school environment, we help students build the foundation
            they need for a successful future.
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
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
            alt="Alliance School students"
            className="h-[450px] w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default SchoolIntroduction;
