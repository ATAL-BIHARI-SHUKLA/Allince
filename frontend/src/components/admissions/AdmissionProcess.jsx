import {
  FileText,
  ClipboardCheck,
  MessageCircle,
  CircleCheckBig,
} from "lucide-react";
import SectionHeading from "../common/SectionHeading";

const steps = [
  {
    icon: FileText,
    number: "01",
    title: "Submit Application",
    description:
      "Complete the online admission form with the required student and parent details.",
  },
  {
    icon: ClipboardCheck,
    number: "02",
    title: "Application Review",
    description: "The school administration reviews the submitted application.",
  },
  {
    icon: MessageCircle,
    number: "03",
    title: "School Contact",
    description:
      "Parents may be contacted for further information or the next admission steps.",
  },
  {
    icon: CircleCheckBig,
    number: "04",
    title: "Admission Confirmation",
    description:
      "After completing the required process, the school confirms the admission status.",
  },
];

const AdmissionProcess = () => {
  return (
    <section className="bg-slate-900 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="How to Apply"
          title="Simple Admission Process"
          description="Follow these steps to submit your child's admission application."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="relative rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <span className="text-sm font-bold text-blue-400">
                  {step.number}
                </span>

                <div className="mt-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                  <Icon size={24} />
                </div>

                <h3 className="mt-5 text-lg font-semibold text-white">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AdmissionProcess;
