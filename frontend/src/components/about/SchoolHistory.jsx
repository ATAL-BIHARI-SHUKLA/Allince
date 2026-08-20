const SchoolHistory = () => {
  return (
    <section className="bg-[#F7F8FC] py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-2 lg:gap-24 lg:px-8">
        {/* Content */}
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F59A01]">
            Our Journey
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-[#172554] sm:text-4xl">
            Growing Together Through the Years
          </h2>

          <p className="mt-6 leading-8 text-slate-500">
            Alliance School was established with a vision to make quality
            education accessible and meaningful for every child.
          </p>

          <p className="mt-4 leading-8 text-slate-500">
            Over the years, our school has continued to grow as a learning
            community built on trust, dedication, discipline, and a commitment
            to student success.
          </p>

          <div className="mt-8 border-l-2 border-[#F59A01] pl-5">
            <p className="text-sm font-medium leading-7 text-[#172554]">
              "Education is not just about learning subjects, but about
              preparing children for life."
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="relative">
          <div className="absolute -right-5 -top-5 h-full w-full rounded-2xl bg-[#2859B8]/10" />

          <img
            src="/images/school/school-history.jpg"
            alt="Alliance School journey"
            className="relative aspect-[4/3] w-full rounded-2xl object-cover shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default SchoolHistory;
