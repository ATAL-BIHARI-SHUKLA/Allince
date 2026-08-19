import { Quote } from "lucide-react";
import SectionHeading from "../common/SectionHeading";

const PrincipalMessage = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900 p-6 sm:p-10 lg:p-14">
          <div className="grid items-center gap-10 md:grid-cols-[220px_1fr]">
            <div className="mx-auto w-full max-w-[220px] overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a"
                alt="Principal"
                className="aspect-square w-full object-cover"
              />
            </div>

            <div>
              <SectionHeading
                badge="From the Principal"
                title="Together, We Shape the Future"
                align="left"
              />

              <Quote size={40} className="text-blue-400" />

              <p className="mt-4 leading-8 text-slate-300">
                Our goal is to create an environment where children feel
                confident to ask questions, explore their interests, learn from
                their experiences, and discover their unique strengths.
              </p>

              <p className="mt-4 leading-8 text-slate-300">
                With the support of parents and teachers, we can help every
                student build the knowledge, values, and confidence needed for a
                successful future.
              </p>

              <div className="mt-6">
                <h3 className="font-semibold text-white">Principal Name</h3>

                <p className="mt-1 text-sm text-blue-400">
                  Principal, Alliance School
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrincipalMessage;
