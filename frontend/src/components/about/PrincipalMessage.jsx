import { Quote } from "lucide-react";

const PrincipalMessage = () => {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid items-center gap-12 rounded-3xl bg-[#F7F8FC] p-8 sm:p-12 lg:grid-cols-[0.8fr_1.2fr] lg:p-16">
          {/* Principal Image */}
          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -bottom-4 -right-4 h-full w-full rounded-2xl bg-[#F59A01]/20" />

            <img
              src="/images/school/principal.jpg"
              alt="Principal of Alliance School"
              className="relative aspect-[4/5] w-full rounded-2xl object-cover"
            />
          </div>

          {/* Message */}
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F59A01]">
              Principal's Message
            </span>

            <Quote
              size={42}
              className="mt-5 text-[#2859B8]/20"
              fill="currentColor"
            />

            <p className="mt-2 text-lg leading-9 text-slate-600 sm:text-xl">
              Our goal is to provide every child with an environment where they
              feel safe, valued, inspired, and confident enough to explore their
              full potential.
            </p>

            <div className="mt-8">
              <h3 className="text-lg font-bold text-[#172554]">
                Principal Name
              </h3>

              <p className="mt-1 text-sm text-[#F59A01]">
                Principal, Alliance School
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrincipalMessage;
