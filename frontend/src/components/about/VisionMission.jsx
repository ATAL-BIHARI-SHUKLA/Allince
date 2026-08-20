import { Check, Eye, Target, Sparkles } from "lucide-react";

// Change this path according to your actual image location
// const studentsLearning = "/images/school/students-learning.jpg";

const VisionMission = () => {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 sm:py-24">
      {/* ================= BACKGROUND BASE & ELEMENTS ================= */}

      {/* 1. Concentric Rings (Representing Target/Focus) */}
      <div className="pointer-events-none absolute -right-[15%] -top-[10%] z-0 hidden h-[40rem] w-[40rem] rounded-full border-[1.5px] border-slate-200/60 lg:block" />
      <div className="pointer-events-none absolute -right-[10%] -top-[5%] z-0 hidden h-[30rem] w-[30rem] rounded-full border-[1.5px] border-slate-200/50 lg:block" />
      <div className="pointer-events-none absolute -right-[5%] top-[0%] z-0 hidden h-[20rem] w-[20rem] rounded-full border-[1.5px] border-slate-200/40 lg:block" />

      {/* 2. Abstract Dot Matrix Block */}
      <div className="pointer-events-none absolute left-[5%] top-[10%] z-0 h-24 w-24 bg-[radial-gradient(#94a3b8_2px,transparent_2px)] [background-size:16px_16px] opacity-20" />

      {/* 3. Scattered Micro-Elements (Plus & Circles) */}
      {/* Top Left Plus */}
      <div className="pointer-events-none absolute left-[15%] top-[25%] z-0 flex h-6 w-6 items-center justify-center text-xl font-light text-slate-300">
        +
      </div>
      {/* Bottom Right Orange Plus */}
      <div className="pointer-events-none absolute bottom-[15%] right-[25%] z-0 flex h-8 w-8 animate-pulse items-center justify-center text-2xl font-light text-[#F59A01]/40">
        +
      </div>
      {/* Bottom Left Hollow Circle */}
      <div className="pointer-events-none absolute bottom-[20%] left-[8%] z-0 h-4 w-4 rounded-full border-[2px] border-[#2859B8]/20" />

      {/* ================= GLOWS & FLOATING ORBS ================= */}

      {/* Soft Blue Glow */}
      <div className="pointer-events-none absolute -left-40 top-1/2 h-[34rem] w-[34rem] -translate-y-1/2 animate-[pulse_5s_ease-in-out_infinite] rounded-full bg-[#2859B8]/[0.05] blur-[110px]" />

      {/* Soft Orange Glow */}
      <div className="pointer-events-none absolute -right-32 bottom-0 h-[26rem] w-[26rem] animate-[pulse_6s_ease-in-out_infinite] rounded-full bg-[#F59A01]/[0.05] blur-[100px]" />

      {/* Floating Glass Orb 1 (Blueish) */}
      <div className="pointer-events-none absolute left-[45%] top-20 z-0 hidden h-16 w-16 animate-[bounce_6s_ease-in-out_infinite] rounded-full border border-white/60 bg-gradient-to-tr from-[#2859B8]/20 to-white/40 shadow-lg backdrop-blur-md lg:block" />

      {/* Floating Glass Orb 2 (Orangeish) */}
      <div className="pointer-events-none absolute bottom-32 right-[45%] z-0 hidden h-24 w-24 animate-[bounce_8s_ease-in-out_infinite_reverse] rounded-full border border-white/60 bg-gradient-to-bl from-[#F59A01]/20 to-white/40 shadow-xl backdrop-blur-md lg:block" />

      {/* Orange Decorative Lines */}
      <div className="pointer-events-none absolute right-[6%] top-[22%] z-0 hidden lg:block">
        <span className="absolute right-0 top-0 h-[2px] w-28 bg-[#F59A01]/30" />
        <span className="absolute right-0 top-5 h-[2px] w-20 bg-[#F59A01]/20" />
        <span className="absolute right-0 top-10 h-[2px] w-12 bg-[#F59A01]/10" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-2 lg:gap-24 lg:px-8">
        {/* ================= IMAGE SIDE ================= */}
        <div className="relative order-2 lg:order-1">
          {/* Blue Background Shape */}
          <div
            className="absolute -left-4 -top-4 h-[92%] w-[92%] bg-[#2859B8]/10 backdrop-blur-sm"
            style={{
              clipPath: "polygon(0 0, 85% 0, 100% 15%, 92% 100%, 0 92%)",
            }}
          />

          {/* Orange Offset Border */}
          <div
            className="absolute -bottom-4 -right-4 h-[92%] w-[92%] border-2 border-[#F59A01]/60"
            style={{
              clipPath: "polygon(0 0, 85% 0, 100% 15%, 92% 100%, 0 92%)",
            }}
          />

          {/* Main Image Card */}
          <div
            className="group relative z-10 h-[350px] overflow-hidden shadow-[0_25px_60px_rgba(23,37,84,0.18)] sm:h-[430px] lg:h-[500px]"
            style={{
              clipPath:
                "polygon(0 0, 92% 0, 100% 8%, 100% 92%, 92% 100%, 0 100%)",
            }}
          >
            <img
              src="https://i.pinimg.com/1200x/24/0e/cd/240ecd6947817bfb918035900d9b6ef2.jpg"
              alt="Students learning at Alliance School"
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* Image Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#172554]/60 via-transparent to-transparent" />

            {/* Floating Badge - Glassmorphism */}
            <div className="absolute bottom-5 left-5 flex items-center gap-3 rounded-xl border border-white/40 bg-white/80 px-4 py-3 shadow-xl backdrop-blur-md transition-transform duration-300 group-hover:-translate-y-2 sm:bottom-6 sm:left-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F59A01]/15 text-[#F59A01]">
                <Sparkles size={19} />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500">
                  Growing Together
                </p>
                <p className="mt-0.5 text-sm font-bold text-[#172554]">
                  Learn. Grow. Succeed.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= CONTENT SIDE ================= */}
        <div className="relative order-1 lg:order-2">
          {/* Section Label */}
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-10 bg-[#F59A01]" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F59A01]">
              Our Purpose
            </span>
          </div>

          {/* Heading - Gradient Text */}
          <h2 className="mt-5 text-3xl font-bold leading-tight text-[#172554] sm:text-4xl">
            Empowering Children to{" "}
            <span className="bg-gradient-to-r from-[#2859B8] to-[#F59A01] bg-clip-text text-transparent">
              Learn, Grow and Succeed
            </span>
          </h2>

          {/* Vision & Mission */}
          <div className="mt-8 space-y-5">
            {/* Vision - Glassmorphism Card */}
            <div className="group relative overflow-hidden rounded-xl border border-white/60 bg-white/70 p-6 shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_18px_40px_rgba(40,89,184,0.12)]">
              <div className="absolute bottom-0 left-0 top-0 w-1.5 bg-[#2859B8]" />
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#2859B8]/10 text-[#2859B8] transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#2859B8] group-hover:text-white">
                  <Eye size={22} />
                </div>
                <div>
                  <h3 className="font-bold text-[#172554]">Our Vision</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    To create confident, responsible, and compassionate learners
                    who are prepared to contribute positively to society.
                  </p>
                </div>
              </div>
            </div>

            {/* Mission - Glassmorphism Card */}
            <div className="group relative overflow-hidden rounded-xl border border-white/60 bg-white/70 p-6 shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_18px_40px_rgba(245,154,1,0.12)]">
              <div className="absolute bottom-0 left-0 top-0 w-1.5 bg-[#F59A01]" />
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F59A01]/10 text-[#F59A01] transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#F59A01] group-hover:text-white">
                  <Target size={22} />
                </div>
                <div>
                  <h3 className="font-bold text-[#172554]">Our Mission</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    To provide quality education through engaging learning,
                    experienced teachers, strong values, and a supportive
                    environment.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Checklist */}
          <ul className="mt-8 grid gap-3 sm:grid-cols-1">
            {[
              "A safe and supportive learning environment",
              "Focus on academic and personal growth",
              "Encouraging creativity and confidence",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-sm font-medium text-slate-700 transition-colors hover:text-[#2859B8]"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F59A01]/15 text-[#F59A01]">
                  <Check size={14} strokeWidth={3} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
