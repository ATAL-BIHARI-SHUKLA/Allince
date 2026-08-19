import { Eye, Target } from "lucide-react";

const VisionMission = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="rounded-3xl bg-blue-600 p-8 text-white sm:p-10">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
            <Eye size={28} />
          </div>

          <h2 className="mt-6 text-3xl font-bold">Our Vision</h2>

          <p className="mt-4 leading-8 text-blue-100">
            To create a learning environment where every child can develop
            knowledge, confidence, creativity, strong values, and the skills
            needed to succeed in the future.
          </p>
        </div>

        <div className="rounded-3xl bg-slate-900 p-8 text-white sm:p-10">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
            <Target size={28} />
          </div>

          <h2 className="mt-6 text-3xl font-bold">Our Mission</h2>

          <p className="mt-4 leading-8 text-slate-300">
            To provide quality education through engaging learning, dedicated
            teachers, meaningful activities, and a safe environment that
            supports the complete development of every student.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
