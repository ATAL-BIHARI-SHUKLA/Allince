import { GraduationCap } from "lucide-react";
import SectionHeading from "../common/SectionHeading";

const classes = [
  "Class 1",
  "Class 2",
  "Class 3",
  "Class 4",
  "Class 5",
  "Class 6",
  "Class 7",
  "Class 8",
];

const ClassesAvailable = () => {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Available Classes"
          title="Admissions for Class 1 to Class 8"
          description="Parents can apply for admission to the appropriate class based on their child's eligibility."
        />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
          {classes.map((className) => (
            <div
              key={className}
              className="rounded-2xl border border-slate-200 bg-white p-5 text-center transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
            >
              <GraduationCap size={26} className="mx-auto text-blue-600" />

              <p className="mt-3 text-sm font-semibold text-slate-900">
                {className}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClassesAvailable;
