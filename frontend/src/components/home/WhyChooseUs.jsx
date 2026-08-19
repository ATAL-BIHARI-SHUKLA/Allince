import {
  GraduationCap,
  Users,
  ShieldCheck,
  HeartHandshake,
} from "lucide-react";
import SectionHeading from "../common/SectionHeading";

const features = [
  {
    icon: GraduationCap,
    title: "Quality Education",
    description:
      "A strong academic foundation designed for meaningful learning.",
  },
  {
    icon: Users,
    title: "Experienced Faculty",
    description: "Dedicated teachers who guide and support every student.",
  },
  {
    icon: ShieldCheck,
    title: "Safe Environment",
    description: "A secure and supportive environment for children to grow.",
  },
  {
    icon: HeartHandshake,
    title: "Holistic Development",
    description:
      "Focus on academics, values, creativity, and overall development.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Why Choose Alliance"
          title="A Better Place to Learn and Grow"
          description="We create an environment where students can develop knowledge, confidence, skills, and strong values."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
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

export default WhyChooseUs;
