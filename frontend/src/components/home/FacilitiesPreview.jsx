import { Link } from "react-router-dom";
import { BookOpen, Monitor, Trophy, Shield, ArrowRight } from "lucide-react";
import SectionHeading from "../common/SectionHeading";

const facilities = [
  {
    icon: BookOpen,
    title: "Library",
  },
  {
    icon: Monitor,
    title: "Smart Classrooms",
  },
  {
    icon: Trophy,
    title: "Sports & Activities",
  },
  {
    icon: Shield,
    title: "Safe Campus",
  },
];

const FacilitiesPreview = () => {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            badge="Our Facilities"
            title="Everything Students Need to Learn"
            description="Our school provides a supportive environment with facilities designed for learning and development."
            align="left"
          />

          <Link
            to="/facilities"
            className="mb-10 inline-flex items-center gap-2 font-semibold text-blue-600 hover:gap-3"
          >
            View All Facilities
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {facilities.map((facility) => {
            const Icon = facility.icon;

            return (
              <div
                key={facility.title}
                className="rounded-2xl bg-white p-8 text-center shadow-sm"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                  <Icon size={28} />
                </div>

                <h3 className="mt-5 font-semibold text-slate-900">
                  {facility.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesPreview;
