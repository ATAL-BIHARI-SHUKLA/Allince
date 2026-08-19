import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap } from "lucide-react";

const AdmissionCTA = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-blue-600 px-6 py-14 sm:px-12 lg:px-16">
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

          <div className="relative flex flex-col justify-between gap-10 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 text-white">
                <GraduationCap size={26} />
              </div>

              <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl">
                Begin Your Child's Journey With Alliance
              </h2>

              <p className="mt-4 leading-7 text-blue-100">
                Give your child a strong educational foundation in a supportive
                environment designed for learning, growth, and success.
              </p>
            </div>

            <Link
              to="/admissions"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-blue-600 transition hover:bg-blue-50"
            >
              Apply for Admission
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionCTA;
