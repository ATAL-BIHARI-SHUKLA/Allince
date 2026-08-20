import { Quote, Award } from "lucide-react";

const PrincipalMessage = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24">
      {/* ================= ULTRA-PREMIUM ORANGE BACKGROUND ================= */}

      {/* 1. Base Subtle Warm Gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#FFF9F1] via-white to-white" />

      {/* 2. Massive Top-Right Orange Glow */}
      <div className="pointer-events-none absolute -right-[20%] -top-[20%] z-0 h-[60rem] w-[60rem] rounded-full bg-[radial-gradient(circle,rgba(245,154,1,0.08)_0%,transparent_60%)] blur-[80px]" />

      {/* 3. Pulsing Bottom-Left Deep Orange Glow */}
      <div className="pointer-events-none absolute -bottom-[10%] -left-[15%] z-0 h-[50rem] w-[50rem] animate-[pulse_6s_ease-in-out_infinite] rounded-full bg-[radial-gradient(circle,rgba(245,154,1,0.06)_0%,transparent_70%)] blur-[100px]" />

      {/* 4. Subtle Blue Ambient Light (for brand balance) */}
      <div className="pointer-events-none absolute left-[15%] top-[15%] z-0 h-[35rem] w-[35rem] rounded-full bg-[#2859B8]/[0.03] blur-[100px]" />

      {/* 5. Modern Floating Glass Elements */}
      {/* Top Right Glass Square */}
      <div className="pointer-events-none absolute right-[6%] top-[12%] z-0 h-32 w-32 rotate-12 rounded-[2rem] border border-[#F59A01]/20 bg-white/40 shadow-2xl backdrop-blur-2xl transition-transform duration-700 hover:rotate-45 sm:h-48 sm:w-48 lg:right-[3%]" />

      {/* Bottom Left Floating Pill */}
      <div className="pointer-events-none absolute -left-[2%] bottom-[15%] z-0 h-24 w-12 -rotate-12 rounded-full border border-[#F59A01]/15 bg-white/50 shadow-xl backdrop-blur-xl sm:h-40 sm:w-16" />

      {/* 6. Orange Tinted Elegant Grid */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(#F59A01_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.04]" />

      {/* ================= CONTENT CONTAINER ================= */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
        {/* ================= MAIN PREMIUM CARD ================= */}
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/60 bg-white shadow-[0_20px_70px_rgba(245,154,1,0.08)] backdrop-blur-sm">
          {/* Top Gradient Line */}
          <div className="absolute left-0 top-0 h-1.5 w-full bg-gradient-to-r from-[#2859B8] via-[#2859B8] to-[#F59A01]" />

          <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-0">
            {/* ================= IMAGE SIDE ================= */}
            <div className="relative flex items-center justify-center p-8 sm:p-12 lg:pr-6">
              {/* Background Blob behind image */}
              <div className="absolute inset-0 z-0 bg-[#2859B8]/[0.015]" />

              <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
                {/* Orange Offset Border */}
                <div className="absolute -bottom-5 -right-5 z-0 h-full w-full rounded-[2rem] border-2 border-[#F59A01]/50 transition-transform duration-500 hover:-translate-x-2 hover:-translate-y-2" />

                {/* Blue Shadow Block */}
                <div className="absolute -left-4 -top-4 z-0 h-32 w-32 rounded-3xl bg-[#2859B8]/10" />

                {/* Main Image */}
                <div className="group relative z-10 overflow-hidden rounded-[2rem] bg-slate-100 shadow-[0_20px_45px_rgba(23,37,84,0.12)]">
                  <img
                    src="https://i.pinimg.com/1200x/89/f0/5f/89f05f32484d05017c8f067b306d952c.jpg"
                    alt="Principal of Alliance School"
                    className="relative aspect-[4/5] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#172554]/40 via-transparent to-transparent" />

                  {/* Floating Label on Image */}
                  <div className="absolute bottom-6 left-6 rounded-xl border border-white/40 bg-white/90 p-3 px-4 shadow-lg backdrop-blur-md">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2859B8]/15 text-[#2859B8]">
                        <Award size={16} />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#172554]">
                        Visionary Leadership
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ================= MESSAGE SIDE ================= */}
            <div className="relative z-10 px-6 pb-12 pt-6 sm:px-12 sm:pb-16 lg:py-16 lg:pl-10 lg:pr-16">
              {/* Label */}
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-8 rounded-full bg-[#F59A01]" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F59A01]">
                  Principal's Message
                </span>
              </div>

              {/* Heading with Gradient */}
              <h2 className="mt-5 text-3xl font-bold leading-tight text-[#172554] sm:text-4xl lg:text-[2.5rem]">
                A Message from Our{" "}
                <span className="bg-gradient-to-r from-[#2859B8] to-[#F59A01] bg-clip-text text-transparent">
                  Principal
                </span>
              </h2>

              {/* Stylish Quote Box (Designed for Longer Text) */}
              <div className="relative mt-8 rounded-2xl bg-[#FFFDF9] p-6 shadow-sm ring-1 ring-slate-100 sm:p-8">
                {/* Left Orange Accent Line */}
                <div className="absolute bottom-0 left-0 top-0 w-1.5 rounded-l-2xl bg-[#F59A01]" />

                {/* Watermark Quote Icon */}
                <Quote
                  size={80}
                  className="absolute right-4 top-4 text-[#F59A01]/[0.05]"
                />

                <div className="relative z-10 flex flex-col gap-4">
                  <div className="flex items-center text-[#F59A01]">
                    <Quote size={24} fill="currentColor" />
                  </div>

                  {/* Paragraph 1 */}
                  <p className="text-base italic leading-relaxed text-slate-600 sm:text-[17px] sm:leading-[1.8]">
                    "At Alliance International School, our primary goal is to
                    provide every child with an environment where they feel
                    safe, valued, inspired, and confident enough to explore
                    their full potential. Education is the foundation upon which
                    we build the future."
                  </p>

                  {/* Paragraph 2 */}
                  <p className="text-base italic leading-relaxed text-slate-600 sm:text-[17px] sm:leading-[1.8]">
                    We believe that each student is unique, endowed with diverse
                    talents and capabilities. Our dedicated faculty is committed
                    to nurturing these talents, fostering critical thinking, and
                    instilling core ethical values that will guide them
                    throughout their lives.
                  </p>

                  {/* Paragraph 3 */}
                  <p className="text-base italic leading-relaxed text-slate-600 sm:text-[17px] sm:leading-[1.8]">
                    I invite you to partner with us in this beautiful journey of
                    shaping young minds. Together, we can create a brighter,
                    more promising tomorrow for our children."
                  </p>
                </div>
              </div>

              {/* Principal Info / Signature Area */}
              <div className="mt-8 flex items-center gap-5 lg:mt-10">
                {/* Initial/Avatar Circle */}
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#2859B8] to-[#F59A01] p-[2px] shadow-lg">
                  <div className="flex h-full w-full items-center justify-center rounded-full bg-white">
                    <span className="text-xl font-bold text-[#2859B8]">P</span>
                  </div>
                </div>

                <div>
                  <h3 className="font-serif text-xl font-bold tracking-wide text-[#172554] sm:text-2xl">
                    Dr. Principal Name
                  </h3>
                  <p className="mt-0.5 text-sm font-semibold tracking-wide text-[#F59A01]">
                    Principal, Alliance School
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrincipalMessage;
