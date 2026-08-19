import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-700/40 via-slate-950 to-slate-950" />

      <div className="relative mx-auto grid min-h-[620px] max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-200">
            <GraduationCap size={18} />
            Learning • Growing • Achieving
          </div>

          <h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Building Strong Foundations for a
            <span className="block text-blue-400">Brighter Future</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
            Alliance School provides a safe, supportive, and engaging learning
            environment for students from Class 1 to Class 8.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/admissions"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-700"
            >
              Apply for Admission
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-600 px-6 py-3.5 font-semibold text-white transition hover:bg-white hover:text-slate-900"
            >
              <Phone size={18} />
              Contact Us
            </Link>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="absolute -inset-8 rounded-full bg-blue-600/20 blur-3xl" />

          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-800 p-3 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d"
              alt="Students learning in classroom"
              className="h-[450px] w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
