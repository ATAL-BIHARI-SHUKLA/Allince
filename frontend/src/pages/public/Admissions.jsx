import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  GraduationCap,
  Mail,
  PenLine,
  Search,
  Sparkles,
  Users,
} from "lucide-react";

import illustration1 from "../../assets/illustration1.png";
import illustration2 from "../../assets/illustration2.png";
import illustration3 from "../../assets/illustration3.png";

const admissionSteps = [
  {
    number: "01",
    title: "Parent Enquiry",
    shortTitle: "Start Your Journey",
    description:
      "Begin your child's admission journey by visiting Alliance International School, learning about the school and getting guidance from our admission team.",
    details: [
      "Visit the school for a tour.",
      "Attend information sessions.",
      "Talk to our admission counselors.",
    ],
    icon: Search,
    color: "blue",
    image: illustration1,
    position: "left",
  },

  {
    number: "02",
    title: "Registration",
    shortTitle: "Register Your Child",
    description:
      "Complete the registration process online to formally begin your child's application with Alliance International School.",
    details: [
      "Fill out the online registration form on our website.",
      "Pay the non-refundable application fee.",
    ],
    icon: FileText,
    color: "orange",
    image: illustration2,
    position: "right",
  },

  {
    number: "03",
    title: "Documentation",
    shortTitle: "Submit the Documents",
    description:
      "Submit the required documents so the school can complete the application review and determine the next stage for your child.",
    details: [
      "Submit the birth certificate, previous school records (if any), photographs, proof of residence, and immunization records.",
      "Depending on the grade, your child may have an entrance test or an interaction session.",
    ],
    icon: ClipboardCheck,
    color: "blue",
    image: illustration3,
    position: "left",
  },

  {
    number: "04",
    title: "Admission",
    shortTitle: "Welcome to Alliance",
    description:
      "Shortlisted candidates move forward to the admission stage, where families complete the final formalities before the child begins school.",
    details: [
      "Shortlisted candidates will be invited for an admission interview.",
      "Upon acceptance, pay the admission fee and submit necessary documents.",
      "Attend the orientation session.",
      "Classes begin as scheduled.",
    ],
    icon: GraduationCap,
    color: "orange",
    image: illustration1,
    position: "right",
    final: true,
  },
];

const AdmissionProcess = () => {
  const [activeStep, setActiveStep] = useState(null);

  return (
    <section className="relative overflow-hidden bg-[#f7faff] py-14 sm:py-16 lg:py-20">
      {/* =========================================================
          BACKGROUND DECORATIONS
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Blue glow */}
        <div
          className="absolute -left-40 top-40 h-[420px] w-[420px] rounded-full bg-[#2859B8]/[0.07] blur-[90px]"
          style={{
            animation: "admissionGlowOne 9s ease-in-out infinite",
          }}
        />

        {/* Orange glow */}
        <div
          className="absolute -right-40 top-[45%] h-[400px] w-[400px] rounded-full bg-[#F59A01]/[0.07] blur-[90px]"
          style={{
            animation: "admissionGlowTwo 11s ease-in-out infinite",
          }}
        />

        {/* Tiny dots */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(40,89,184,0.16) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Decorative circles */}
        <div
          className="absolute left-[-50px] top-[18%] h-44 w-44 rounded-full border-[12px] border-[#2859B8]/[0.06]"
          style={{
            animation: "admissionCircle 8s ease-in-out infinite",
          }}
        />

        <div
          className="absolute right-[-60px] top-[62%] h-52 w-52 rounded-full border-[15px] border-[#F59A01]/[0.07]"
          style={{
            animation: "admissionCircle 10s ease-in-out infinite reverse",
          }}
        />

        {/* Floating sparkle */}
        <div
          className="absolute left-[8%] top-[8%] text-[#F59A01]/50"
          style={{
            animation: "admissionSparkle 3s ease-in-out infinite",
          }}
        >
          <Sparkles size={30} />
        </div>

        <div
          className="absolute right-[9%] top-[25%] text-[#2859B8]/30"
          style={{
            animation: "admissionSparkle 4s ease-in-out infinite reverse",
          }}
        >
          <Sparkles size={24} />
        </div>

        {/* Book */}
        <div
          className="absolute left-[3%] top-[45%] hidden text-[#2859B8]/[0.07] lg:block"
          style={{
            animation: "admissionBook 7s ease-in-out infinite",
          }}
        >
          <BookOpen size={110} strokeWidth={1} />
        </div>

        {/* Cap */}
        <div
          className="absolute right-[3%] top-[12%] hidden text-[#F59A01]/[0.08] lg:block"
          style={{
            animation: "admissionCap 6s ease-in-out infinite",
          }}
        >
          <GraduationCap size={115} strokeWidth={1} />
        </div>
      </div>

      {/* =========================================================
          HEADING
      ========================================================= */}

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#2859B8]/10 bg-[#2859B8]/[0.07] px-5 py-2.5 text-xs font-bold uppercase tracking-[0.18em] text-[#2859B8]">
            <span className="h-2 w-2 rounded-full bg-[#F59A01]" />
            Your Journey With Alliance
          </div>

          <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-[#092451] sm:text-5xl lg:text-6xl">
            Admission
            <span className="text-[#2859B8]"> Process</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base lg:text-lg">
            Every child deserves a smooth beginning. Follow the journey below
            to understand how the admission process at Alliance International
            School works.
          </p>

          {/* Decorative line */}
          <div className="mx-auto mt-7 flex items-center justify-center gap-2">
            <span className="h-1 w-8 rounded-full bg-[#2859B8]/20" />
            <span className="h-1 w-14 rounded-full bg-[#F59A01]" />
            <span className="h-1 w-8 rounded-full bg-[#2859B8]/20" />
          </div>
        </div>

        {/* =========================================================
            INTRODUCTION CARD
        ========================================================= */}

        <div className="mx-auto mt-10 max-w-4xl">
          <div className="relative overflow-hidden rounded-[28px] border border-[#2859B8]/10 bg-white p-6 shadow-[0_15px_50px_rgba(40,89,184,0.08)] sm:p-6 lg:p-10">
            {/* Background shape */}
            <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#2859B8]/[0.04]" />

            <div className="relative grid items-center gap-7 md:grid-cols-[auto_1fr_auto]">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#2859B8]/10 text-[#2859B8]">
                <BookOpen size={30} />
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#F59A01]">
                  A simple beginning
                </p>

                <h3 className="mt-2 text-xl font-extrabold text-[#092451] sm:text-2xl">
                  From first enquiry to your child's first day
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  We have designed this journey to make it easier for parents
                  to understand what comes next at every stage.
                </p>
              </div>

              <div className="hidden h-14 w-14 items-center justify-center rounded-full bg-[#F59A01]/10 text-[#F59A01] md:flex">
                <ArrowDown size={24} />
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================
            PROCESS JOURNEY
        ========================================================= */}

        <div className="relative mx-auto mt-14 max-w-5xl sm:mt-16">
          {/* Central journey line - desktop */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-[#2859B8]/10 via-[#2859B8]/30 to-[#F59A01]/10 lg:block" />

          {/* Process cards */}
          <div className="space-y-7 lg:space-y-9">
            {admissionSteps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === index;
              const isLeft = step.position === "left";

              return (
                <div
                  key={step.number}
                  className="relative"
                >
                  {/* =================================================
                      DESKTOP CONNECTOR
                  ================================================= */}

                  <div className="absolute left-1/2 top-10 hidden -translate-x-1/2 lg:block">
                    <div
                      className={`relative flex h-11 w-11 items-center justify-center rounded-full border-[5px] border-[#f7faff] shadow-lg transition-all duration-500 ${
                        step.color === "orange"
                          ? "bg-[#F59A01] text-white"
                          : "bg-[#2859B8] text-white"
                      } ${
                        isActive
                          ? "scale-125 shadow-xl"
                          : "scale-100"
                      }`}
                    >
                      <span className="text-xs font-extrabold">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* =================================================
                      DESKTOP ROW
                  ================================================= */}

                  <div
                    className={`hidden items-center gap-8 lg:flex ${
                      isLeft ? "flex-row" : "flex-row-reverse"
                    }`}
                  >
                    {/* CARD */}
                    <div className="w-[calc(50%-1.5rem)]">
                      <ProcessCard
                        step={step}
                        Icon={Icon}
                        isActive={isActive}
                        isLeft={isLeft}
                        onActivate={() => setActiveStep(index)}
                        onDeactivate={() => setActiveStep(null)}
                      />
                    </div>

                    {/* ILLUSTRATION */}
                    <div className="flex w-[calc(50%-1.5rem)] items-center justify-center py-1">
                      <ProcessIllustration
                        step={step}
                        isActive={isActive}
                      />
                    </div>
                  </div>

                  {/* =================================================
                      MOBILE / TABLET
                  ================================================= */}

                  <div className="lg:hidden">
                    <div className="relative pl-7 sm:pl-10">
                      {/* Vertical line */}
                      <div className="absolute left-[9px] top-0 h-full w-[2px] bg-gradient-to-b from-[#2859B8]/20 via-[#2859B8]/40 to-[#F59A01]/20 sm:left-[14px]" />

                      {/* Number */}
                      <div
                        className={`absolute left-[-11px] top-6 flex h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faff] text-xs font-extrabold text-white shadow-md sm:left-[-6px] sm:h-12 sm:w-12 ${
                          step.color === "orange"
                            ? "bg-[#F59A01]"
                            : "bg-[#2859B8]"
                        }`}
                      >
                        {step.number}
                      </div>

                      <ProcessCard
                        step={step}
                        Icon={Icon}
                        isActive={isActive}
                        isLeft={true}
                        onActivate={() => setActiveStep(index)}
                        onDeactivate={() => setActiveStep(null)}
                      />

                      <div className="mt-5">
                        <ProcessIllustration
                          step={step}
                          isActive={isActive}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* =========================================================
            ENTRANCE TEST HIGHLIGHT
        ========================================================= */}

        <div className="relative mx-auto mt-16 max-w-5xl overflow-hidden rounded-[32px] bg-[#2859B8] shadow-[0_25px_70px_rgba(40,89,184,0.20)]">
          {/* Decorations */}
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full border-[30px] border-white/[0.06]" />

          <div className="absolute -bottom-24 -left-16 h-56 w-56 rounded-full border-[25px] border-[#F59A01]/10" />

          <div className="relative grid items-center gap-8 p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:p-12">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#F59A01] px-4 py-2 text-xs font-extrabold uppercase tracking-[0.15em] text-white">
                <PenLine size={15} />
                Important Step
              </div>

              <h3 className="mt-5 text-2xl font-extrabold text-white sm:text-3xl">
                Entrance Test
              </h3>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-blue-100 sm:text-base">
                Every year, Alliance International School conducts an entrance
                test for admission. Parents can connect with the school to
                understand the relevant test details, schedule and
                requirements.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <div className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-3 text-sm text-white backdrop-blur-sm">
                  <CheckCircle2
                    size={18}
                    className="text-[#F59A01]"
                  />
                  Annual Entrance Test
                </div>

                <div className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-3 text-sm text-white backdrop-blur-sm">
                  <Users
                    size={18}
                    className="text-[#F59A01]"
                  />
                  Student Assessment
                </div>
              </div>
            </div>

            <div
              className="mx-auto flex h-28 w-28 shrink-0 items-center justify-center rounded-[28px] bg-white/10 text-white backdrop-blur-sm sm:h-36 sm:w-36"
              style={{
                animation: "admissionIconFloat 4s ease-in-out infinite",
              }}
            >
              <ClipboardCheck
                size={65}
                strokeWidth={1.3}
              />
            </div>
          </div>
        </div>


        {/* =========================================================
            FEE STRUCTURE
            Kept inside this admission page/component.
            No separate FeeStructure.jsx file is required.
        ========================================================= */}
        <div className="relative mx-auto mt-16 max-w-6xl">
          <div className="mb-8 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#2859B8]/[0.07] px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#2859B8]">
              <span className="h-2 w-2 rounded-full bg-[#F59A01]" />
              Fee Structure
            </div>

            <h3 className="mt-4 text-3xl font-extrabold text-[#092451] sm:text-4xl">
              School Fee Structure
            </h3>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
              A simple overview of the applicable school fees by class and
              admission category.
            </p>

            <div className="mx-auto mt-5 flex items-center justify-center gap-2">
              <span className="h-1 w-8 rounded-full bg-[#2859B8]/20" />
              <span className="h-1 w-12 rounded-full bg-[#F59A01]" />
              <span className="h-1 w-8 rounded-full bg-[#2859B8]/20" />
            </div>
          </div>

          <div className="overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_15px_45px_rgba(20,50,100,0.08)]">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[900px] border-collapse text-sm">
                <thead>
                  <tr className="bg-[#2859B8] text-white">
                    <th className="border-r border-white/20 px-5 py-4 text-left font-bold">
                      Class
                    </th>
                    <th className="border-r border-white/20 px-5 py-4 text-left font-bold">
                      Category
                    </th>
                    <th className="border-r border-white/20 px-5 py-4 text-right font-bold">
                      A. Funds
                    </th>
                    <th className="border-r border-white/20 px-5 py-4 text-right font-bold">
                      SMS
                    </th>
                    <th className="border-r border-white/20 px-5 py-4 text-right font-bold">
                      Tuition Fee
                    </th>
                    <th className="border-r border-white/20 px-5 py-4 text-right font-bold">
                      Smart Class
                    </th>
                    <th className="px-5 py-4 text-right font-bold">
                      Total
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {[
                    ["Nursery – UKG", "New", "₹5,000", "₹400", "₹32,400", "₹1,800", "₹39,600"],
                    ["Nursery – UKG", "Old", "₹3,500", "₹400", "₹32,400", "₹1,800", "₹38,100"],
                    ["Nursery – UKG", "2nd Child New", "₹5,000", "₹400", "₹27,540", "₹1,800", "₹34,740"],
                    ["Nursery – UKG", "2nd Child Old", "₹3,500", "₹400", "₹27,540", "₹1,800", "₹33,240"],
                    ["1st – 8th", "New", "₹5,000", "₹400", "₹36,000", "₹1,800", "₹43,200"],
                    ["1st – 8th", "Old", "₹5,000", "₹400", "₹36,000", "₹1,800", "₹43,200"],
                    ["1st – 8th", "2nd Child New", "₹5,000", "₹400", "₹30,600", "₹1,800", "₹37,800"],
                    ["1st – 8th", "2nd Child Old", "₹5,000", "₹400", "₹30,600", "₹1,800", "₹37,800"],
                    ["Pre-Nursery", "New", "₹2,500", "₹400", "₹16,800", "₹1,800", "₹22,500"],
                  ].map((row, index) => (
                    <tr
                      key={`${row[0]}-${row[1]}`}
                      className={`border-b border-slate-100 transition-colors hover:bg-[#2859B8]/[0.035] ${
                        index === 8 ? "bg-[#F59A01]/[0.035]" : "bg-white"
                      }`}
                    >
                      <td className="px-5 py-4 font-semibold text-[#092451]">
                        {row[0]}
                      </td>
                      <td className="px-5 py-4 text-slate-600">
                        {row[1]}
                      </td>
                      <td className="px-5 py-4 text-right text-slate-600">
                        {row[2]}
                      </td>
                      <td className="px-5 py-4 text-right text-slate-600">
                        {row[3]}
                      </td>
                      <td className="px-5 py-4 text-right text-slate-600">
                        {row[4]}
                      </td>
                      <td className="px-5 py-4 text-right text-slate-600">
                        {row[5]}
                      </td>
                      <td
                        className={`px-5 py-4 text-right font-extrabold ${
                          index === 8
                            ? "text-[#F59A01]"
                            : "text-[#2859B8]"
                        }`}
                      >
                        {row[6]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="mt-4 text-center text-xs leading-5 text-slate-500">
            * Fee details are subject to the school's applicable fee policy.
            Please contact the school for the latest fee information.
          </p>
        </div>

        {/* =========================================================
            BOTTOM CTA
        ========================================================= */}

        <div className="mx-auto mt-14 max-w-4xl text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F59A01]/10 text-[#F59A01]">
            <GraduationCap size={30} />
          </div>

          <h3 className="mt-5 text-2xl font-extrabold text-[#092451] sm:text-3xl">
            Ready to Begin the Journey?
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600">
            Have questions about admissions or the entrance test? Our school
            team is here to guide parents through the next step.
          </p>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="tel:+919464622222"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#2859B8] px-6 py-3.5 text-sm font-bold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#214b9d]"
            >
              Contact School
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>

            <a
              href="mailto:allianceinternationaljaitu@gmail.com"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#2859B8]/15 bg-white px-6 py-3.5 text-sm font-bold text-[#2859B8] shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#F59A01]/40 hover:text-[#F59A01]"
            >
              <Mail size={17} />
              Email Us
            </a>
          </div>
        </div>

      </div>

      {/* =========================================================
          CARD COMPONENT
      ========================================================= */}

      <style>{`

        @keyframes admissionGlowOne {
          0%,100% {
            transform: translate(0,0) scale(1);
          }

          50% {
            transform: translate(70px,-30px) scale(1.18);
          }
        }

        @keyframes admissionGlowTwo {
          0%,100% {
            transform: translate(0,0) scale(1);
          }

          50% {
            transform: translate(-70px,30px) scale(1.15);
          }
        }

        @keyframes admissionCircle {
          0%,100% {
            transform: translate(0,0) rotate(0deg);
          }

          50% {
            transform: translate(20px,-20px) rotate(10deg);
          }
        }

        @keyframes admissionSparkle {
          0%,100% {
            opacity:.35;
            transform:scale(.8) rotate(0deg);
          }

          50% {
            opacity:1;
            transform:scale(1.15) rotate(15deg);
          }
        }

        @keyframes admissionBook {
          0%,100% {
            transform:translateY(0) rotate(-5deg);
          }

          50% {
            transform:translateY(-18px) rotate(5deg);
          }
        }

        @keyframes admissionCap {
          0%,100% {
            transform:translateY(0) rotate(5deg);
          }

          50% {
            transform:translateY(-20px) rotate(-5deg);
          }
        }

        @keyframes admissionIconFloat {
          0%,100% {
            transform:translateY(0) rotate(0deg);
          }

          50% {
            transform:translateY(-10px) rotate(3deg);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration:.01ms !important;
            animation-iteration-count:1 !important;
            scroll-behavior:auto !important;
          }
        }

      `}</style>
    </section>
  );
};


/* =============================================================
   PROCESS CARD
============================================================= */

const ProcessCard = ({
  step,
  Icon,
  isActive,
  isLeft,
  onActivate,
  onDeactivate,
}) => {
  const isOrange = step.color === "orange";

  return (
    <div
      className={`
        group relative
        transition-all duration-500 ease-out
        ${
          isActive
            ? "translate-y-[-6px]"
            : ""
        }
      `}
    >
      {/* Pin */}
      <div
        className={`
          absolute
          ${
            isLeft
              ? "right-10"
              : "left-10"
          }
          -top-4
          z-30
          hidden
          h-8
          w-8
          rounded-full
          border-4
          border-white
          shadow-md
          sm:block
          ${
            isOrange
              ? "bg-[#F59A01]"
              : "bg-[#2859B8]"
          }
        `}
      >
        <div className="absolute inset-[5px] rounded-full bg-white/30" />
      </div>

      {/* Card shadow/back layer */}
      <div
        className={`
          absolute inset-0
          rounded-[20px]
          transition-all duration-500
          ${
            isOrange
              ? "bg-[#F59A01]"
              : "bg-[#2859B8]"
          }
          ${
            isLeft
              ? "translate-x-3 translate-y-3 rotate-[3deg]"
              : "-translate-x-3 translate-y-3 rotate-[-3deg]"
          }
          ${
            isActive
              ? "translate-x-0 translate-y-0 rotate-0"
              : ""
          }
        `}
      />

      {/* Main paper — tilted normally, perfectly straight on hover */}
      <div
        onMouseEnter={onActivate}
        onMouseLeave={onDeactivate}
        onFocus={onActivate}
        onBlur={onDeactivate}
        onClick={onActivate}
        tabIndex={0}
        role="button"
        aria-expanded={isActive}
        className={`
          relative
          min-h-[300px]
          overflow-hidden
          rounded-[24px]
          border
          border-slate-200
          bg-white
          p-6
          shadow-[0_15px_40px_rgba(20,50,100,0.09)]
          transition-all
          duration-500
          ${
            isLeft
              ? "rotate-[-3deg]"
              : "rotate-[3deg]"
          }
          ${
            isActive
              ? "rotate-0 scale-100 shadow-[0_18px_38px_rgba(20,50,100,0.14)]"
              : ""
          }
          sm:p-6
        `}
      >
        {/* Notebook lines */}
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, transparent 31px, rgba(40,89,184,0.045) 32px)",
            backgroundSize: "100% 32px",
          }}
        />

        {/* Top right number */}
        <div className="absolute right-5 top-4 text-4xl font-black text-[#2859B8]/[0.055]">
          {step.number}
        </div>

        {/* Corner shape */}
        <div
          className={`
            absolute
            -right-10
            -top-10
            h-24
            w-24
            rounded-full
            ${
              isOrange
                ? "bg-[#F59A01]/[0.07]"
                : "bg-[#2859B8]/[0.06]"
            }
          `}
        />

        <div className="relative z-10">
          {/* Icon */}
          <div
            className={`
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-2xl
              transition-all
              duration-500
              ${
                isOrange
                  ? "bg-[#F59A01]/10 text-[#F59A01]"
                  : "bg-[#2859B8]/10 text-[#2859B8]"
              }
              ${
                isActive
                  ? isOrange
                    ? "bg-[#F59A01] text-white"
                    : "bg-[#2859B8] text-white"
                  : ""
              }
            `}
          >
            <Icon size={22} strokeWidth={1.8} />
          </div>

          {/* Label */}
          <p
            className={`
              mt-4
              text-[9px]
              font-extrabold
              uppercase
              tracking-[0.18em]
              ${
                isOrange
                  ? "text-[#F59A01]"
                  : "text-[#2859B8]"
              }
            `}
          >
            Step {step.number}
          </p>

          {/* Title */}
          <h3 className="mt-2 text-xl font-extrabold leading-tight text-[#092451]">
            {step.title}
          </h3>

          <p className="mt-2 text-[13px] leading-5 text-slate-600">
            {step.description}
          </p>

          {/* Detailed content */}
          <div
            className={`
              mt-4
              overflow-hidden
              transition-all
              duration-500
              ${
                isActive
                  ? "max-h-48 opacity-100"
                  : "max-h-0 opacity-0 lg:max-h-0"
              }
            `}
          >
            <div className="border-t border-slate-100 pt-4">
              <ul className="space-y-2">
                {step.details.map((detail) => (
                  <li
                    key={detail}
                    className="flex items-start gap-2 text-xs leading-5 text-slate-600"
                  >
                    <CheckCircle2
                      size={15}
                      className={`mt-0.5 shrink-0 ${
                        isOrange
                          ? "text-[#F59A01]"
                          : "text-[#2859B8]"
                      }`}
                    />

                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Hover hint */}
          <div
            className={`
              mt-5
              flex
              items-center
              gap-2
              text-xs
              font-bold
              transition-all
              ${
                isOrange
                  ? "text-[#F59A01]"
                  : "text-[#2859B8]"
              }
              ${
                isActive
                  ? "opacity-0"
                  : "opacity-100"
              }
            `}
          >
            <span>Hover to explore</span>
            <ArrowRight size={15} />
          </div>
        </div>

        {/* Bottom accent */}
        <div
          className={`
            absolute
            bottom-0
            left-8
            h-1
            w-20
            rounded-full
            transition-all
            duration-500
            ${
              isOrange
                ? "bg-[#F59A01]"
                : "bg-[#2859B8]"
            }
            ${
              isActive
                ? "w-32"
                : ""
            }
          `}
        />
      </div>
    </div>
  );
};


/* =============================================================
   ILLUSTRATION
============================================================= */

const ProcessIllustration = ({
  step,
  isActive,
}) => {
  return (
    <div
      className={`
        relative
        flex
        min-h-[175px]
        w-full
        items-center
        justify-center
        overflow-visible
        transition-all
        duration-700
        ${
          isActive
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }
      `}
    >
      {/* The whole illustration group stays invisible until the paper is hovered. */}
      <div
        className={`
          relative
          flex
          h-full
          w-full
          items-center
          justify-center
          transition-all
          duration-700
          ease-out
          ${
            isActive
              ? "translate-x-0 scale-100"
              : step.position === "left"
                ? "translate-x-[70%] scale-95"
                : "-translate-x-[70%] scale-95"
          }
        `}
      >
        {/* Glow */}
        <div
          className={`
            absolute
            h-32
            w-32
            rounded-full
            blur-3xl
            ${
              step.color === "orange"
                ? "bg-[#F59A01]/10"
                : "bg-[#2859B8]/10"
            }
          `}
        />

        {/* Illustration */}
        <img
          src={step.image}
          alt={`${step.title} illustration`}
          className="
            relative
            z-10
            max-h-[160px]
            w-[50%]
            object-contain
            drop-shadow-[0_20px_35px_rgba(40,89,184,0.10)]
            transition-transform
            duration-700
          "
          style={{
            animation: isActive
              ? "admissionIconFloat 6s ease-in-out infinite"
              : "none",
          }}
        />

      {/* Floating mini label */}
      <div
        className={`
          absolute
          ${
            step.position === "left"
              ? "right-[5%]"
              : "left-[5%]"
          }
          top-[14%]
          z-20
          rounded-2xl
          border
          border-white
          bg-white/90
          px-3
          py-2
          shadow-lg
          backdrop-blur-sm
          transition-all
          duration-500
          ${
            isActive
              ? "translate-y-[-7px] opacity-100"
              : "translate-y-2 opacity-0"
          }
        `}
      >
        <div className="flex items-center gap-2">
          <span
            className={`h-2.5 w-2.5 rounded-full ${
              step.color === "orange"
                ? "bg-[#F59A01]"
                : "bg-[#2859B8]"
            }`}
          />

          <span className="text-[10px] font-bold text-[#092451]">
            {step.shortTitle}
          </span>
        </div>
      </div>

      {/* Sparkles */}
      <div
        className="absolute bottom-[12%] left-[12%] text-[#F59A01]/60"
        style={{
          animation:
            "admissionSparkle 3s ease-in-out infinite",
        }}
      >
        <Sparkles size={20} />
      </div>

        <div
          className="absolute right-[13%] bottom-[20%] text-[#2859B8]/40"
          style={{
            animation:
              "admissionSparkle 4s ease-in-out infinite reverse",
          }}
        >
          <Sparkles size={16} />
        </div>
      </div>
    </div>
  );
};

export default AdmissionProcess;