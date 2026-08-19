import ContactInfo from "../../components/contact/ContactInfo";
import ContactForm from "../../components/contact/ContactForm";
import GoogleMap from "../../components/contact/GoogleMap";
import OfficeHours from "../../components/contact/OfficeHours";

import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  Mail,
  MapPin,
  PhoneCall,
  Sparkles,
} from "lucide-react";

const Contact = () => {
  return (
    <main className="overflow-hidden bg-white">

      {/* =====================================================
          HERO SECTION
      ====================================================== */}

      <section className="relative isolate overflow-visible bg-[#2859B8]">

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=2200&q=85')",
          }}
        />

        {/* Blue Overlay */}
        <div className="absolute inset-0 bg-[#123d82]/80" />

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#173d83]/95 via-[#2859B8]/80 to-[#2859B8]/55" />

        {/* =================================================
            DECORATIVE ELEMENTS
        ================================================== */}

        {/* Large Left Circle */}
        <div className="absolute -left-28 -top-28 h-72 w-72 rounded-full border-[35px] border-white/5" />

        {/* Large Right Circle */}
        <div className="absolute -right-32 top-20 h-80 w-80 rounded-full border-[40px] border-[#F59A01]/10" />

        {/* Graduation Cap */}
        <div className="absolute left-[7%] top-[28%] hidden rotate-[-12deg] text-white/10 lg:block">
          <GraduationCap
            size={115}
            strokeWidth={1}
          />
        </div>

        {/* Book */}
        <div className="absolute right-[9%] top-[25%] hidden rotate-12 text-white/10 lg:block">
          <BookOpen
            size={100}
            strokeWidth={1}
          />
        </div>

        {/* Decorative Square */}
        <div className="absolute left-[18%] top-[22%] hidden h-14 w-14 rotate-12 rounded-2xl border border-white/15 lg:block" />

        {/* Decorative Square */}
        <div className="absolute right-[22%] bottom-[28%] hidden h-10 w-10 -rotate-12 rounded-xl border border-[#F59A01]/40 lg:block" />

        {/* Decorative Dots */}
        <div className="absolute right-[14%] top-[55%] hidden gap-2 lg:flex">
          <span className="h-2 w-2 rounded-full bg-[#F59A01]" />
          <span className="h-2 w-2 rounded-full bg-white/40" />
          <span className="h-2 w-2 rounded-full bg-white/25" />
        </div>

        {/* Sparkle */}
        <div className="absolute left-[13%] bottom-[28%] hidden text-[#F59A01]/70 lg:block">
          <Sparkles size={28} />
        </div>

        {/* =================================================
            HERO CONTENT
        ================================================== */}

        <div className="relative mx-auto flex min-h-[500px] max-w-7xl items-center px-4 pb-40 pt-28 sm:px-6 sm:pb-44 lg:px-8">

          <div className="mx-auto max-w-4xl text-center text-white">

            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.18em] text-white shadow-lg backdrop-blur-md sm:text-sm">

              <span className="h-2 w-2 rounded-full bg-[#F59A01]" />

              Alliance International School

            </div>

            {/* Heading */}
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">

              Let's Stay

              <span className="block text-[#F59A01]">
                Connected
              </span>

            </h1>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-blue-50 sm:text-base lg:text-lg">
              We are always happy to connect with parents, students and
              families. Reach out to Alliance International School for
              admissions, enquiries or any school-related information.
            </p>

            {/* Divider */}
            <div className="mx-auto mt-7 flex items-center justify-center gap-2">

              <span className="h-1 w-8 rounded-full bg-white/40" />

              <span className="h-1 w-16 rounded-full bg-[#F59A01]" />

              <span className="h-1 w-8 rounded-full bg-white/40" />

            </div>

          </div>

        </div>

        {/* White Curve */}
        <div className="absolute bottom-[-1px] left-[-5%] h-16 w-[110%] rounded-[50%_50%_0_0] bg-white sm:h-20" />

      </section>


      {/* =====================================================
          CONTACT INFORMATION + CONTACT FORM
      ====================================================== */}

      <section className="relative z-20 -mt-28 pb-16 sm:-mt-32 sm:pb-20 lg:-mt-36">

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

          <div className="overflow-hidden rounded-[30px] border border-white/80 bg-white shadow-[0_25px_80px_rgba(22,55,110,0.18)]">

            <div className="grid lg:grid-cols-[0.88fr_1.12fr]">

              <ContactInfo />

              <ContactForm />

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          QUICK CONNECT
      ====================================================== */}

      <section className="relative overflow-hidden bg-slate-50 py-20 sm:py-24">

        {/* Background Decoration */}
        <div className="pointer-events-none absolute -left-20 top-10 h-52 w-52 rounded-full bg-[#2859B8]/5 blur-3xl" />

        <div className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-[#F59A01]/10 blur-3xl" />


        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Heading */}

          <div className="mx-auto max-w-3xl text-center">

            <span className="inline-flex rounded-full bg-[#2859B8]/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#2859B8]">
              Quick Connect
            </span>

            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-[#092451] sm:text-4xl lg:text-5xl">
              Need Help Quickly?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              Choose the easiest way to connect with Alliance International
              School.
            </p>

          </div>


          {/* =================================================
              QUICK CONNECT CARDS
          ================================================== */}

          <div className="mx-auto mt-14 grid max-w-6xl gap-12 md:grid-cols-3 md:gap-7 lg:gap-10">


            {/* =================================================
                CALL CARD
            ================================================= */}

            <a
              href="tel:+919464622222"
              className="group relative block"
            >

              {/* Blue Back Layer */}

              <div className="absolute inset-0 translate-x-3 translate-y-3 rotate-[-3deg] rounded-2xl bg-[#2859B8] transition-all duration-500 group-hover:translate-x-4 group-hover:translate-y-4 group-hover:rotate-[-5deg]" />


              {/* Main White Card */}

              <div className="relative min-h-[235px] overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_12px_35px_rgba(40,89,184,0.10)] transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_22px_45px_rgba(40,89,184,0.18)]">

                {/* Decorative Circle */}

                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full border-[12px] border-[#2859B8]/5" />


                {/* Icon + Number */}

                <div className="relative flex items-start justify-between">

                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#2859B8]/10 text-[#2859B8] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#2859B8] group-hover:text-white">

                    {/* PHONE ICON */}

                    <PhoneCall
                      size={27}
                      strokeWidth={1.9}
                    />

                  </div>


                  <span className="text-4xl font-extrabold text-[#2859B8]/10">
                    01
                  </span>

                </div>


                {/* Card Content */}

                <div className="relative mt-8">

                  <h3 className="text-xl font-extrabold text-[#092451]">
                    Call the School
                  </h3>

                  <p className="mt-2 text-sm text-slate-600">
                    94646-22222
                  </p>

                </div>


                {/* Arrow */}

                <div className="absolute bottom-6 right-7 flex h-9 w-9 items-center justify-center rounded-full bg-[#2859B8]/10 text-[#2859B8] transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[#F59A01] group-hover:text-white">

                  <ArrowRight size={17} />

                </div>

              </div>

            </a>


            {/* =================================================
                WHATSAPP CARD
            ================================================== */}

            <a
              href="https://wa.me/919464622222"
              target="_blank"
              rel="noreferrer"
              className="group relative block"
            >

              {/* Orange Back Layer */}

              <div className="absolute inset-0 translate-x-3 translate-y-3 rotate-[3deg] rounded-2xl bg-[#F59A01] transition-all duration-500 group-hover:translate-x-4 group-hover:translate-y-4 group-hover:rotate-[5deg]" />


              {/* Main White Card */}

              <div className="relative min-h-[235px] overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_12px_35px_rgba(245,154,1,0.10)] transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_22px_45px_rgba(245,154,1,0.18)]">

                {/* Decorative Circle */}

                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full border-[12px] border-[#F59A01]/10" />


                {/* Icon + Number */}

                <div className="relative flex items-start justify-between">

                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#F59A01]/10 text-[#F59A01] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#F59A01] group-hover:text-white">

                    {/* WHATSAPP ICON */}

                    <svg
                      viewBox="0 0 32 32"
                      className="h-7 w-7"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M16 3.2C8.93 3.2 3.2 8.65 3.2 15.36c0 2.38.72 4.59 1.96 6.43L3.1 28.8l7.24-2.25a13.15 13.15 0 0 0 5.66 1.27c7.07 0 12.8-5.45 12.8-12.46C28.8 8.65 23.07 3.2 16 3.2Zm0 22.43c-1.82 0-3.51-.48-4.98-1.32l-.36-.21-4.3 1.34 1.3-4.05-.24-.38a10.36 10.36 0 0 1-1.59-5.55C5.83 10.1 10.38 5.76 16 5.76s10.17 4.34 10.17 9.7S21.62 25.63 16 25.63Zm5.57-7.28c-.3-.15-1.77-.84-2.05-.94-.28-.1-.48-.15-.68.15-.2.3-.78.94-.96 1.14-.18.2-.35.22-.65.07-.3-.15-1.26-.45-2.4-1.44-.89-.77-1.49-1.72-1.67-2.02-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.68-1.61-.93-2.2-.24-.57-.49-.49-.68-.5h-.58c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.5 0 1.47 1.07 2.9 1.22 3.1.15.2 2.1 3.2 5.08 4.49.71.31 1.26.5 1.69.64.71.23 1.35.2 1.86.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.08-.12-.28-.2-.58-.35Z" />
                    </svg>

                  </div>


                  <span className="text-4xl font-extrabold text-[#F59A01]/15">
                    02
                  </span>

                </div>


                {/* Card Content */}

                <div className="relative mt-8">

                  <h3 className="text-xl font-extrabold text-[#092451]">
                    WhatsApp Us
                  </h3>

                  <p className="mt-2 text-sm text-slate-600">
                    Chat with our school team
                  </p>

                </div>


                {/* Arrow */}

                <div className="absolute bottom-6 right-7 flex h-9 w-9 items-center justify-center rounded-full bg-[#F59A01]/10 text-[#F59A01] transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[#2859B8] group-hover:text-white">

                  <ArrowRight size={17} />

                </div>

              </div>

            </a>


            {/* =================================================
                VISIT SCHOOL CARD
            ================================================== */}

            <a
              href="https://www.google.com/maps/search/?api=1&query=Alliance+International+School+Jaitu+Punjab"
              target="_blank"
              rel="noreferrer"
              className="group relative block"
            >

              {/* Blue Back Layer */}

              <div className="absolute inset-0 translate-x-3 translate-y-3 rotate-[-3deg] rounded-2xl bg-[#2859B8] transition-all duration-500 group-hover:translate-x-4 group-hover:translate-y-4 group-hover:rotate-[-5deg]" />


              {/* Main White Card */}

              <div className="relative min-h-[235px] overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_12px_35px_rgba(40,89,184,0.10)] transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_22px_45px_rgba(40,89,184,0.18)]">

                {/* Decorative Circle */}

                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full border-[12px] border-[#2859B8]/5" />


                {/* Icon + Number */}

                <div className="relative flex items-start justify-between">

                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#2859B8]/10 text-[#2859B8] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#2859B8] group-hover:text-white">

                    <MapPin
                      size={27}
                      strokeWidth={1.9}
                    />

                  </div>


                  <span className="text-4xl font-extrabold text-[#2859B8]/10">
                    03
                  </span>

                </div>


                {/* Card Content */}

                <div className="relative mt-8">

                  <h3 className="text-xl font-extrabold text-[#092451]">
                    Visit Our School
                  </h3>

                  <p className="mt-2 text-sm text-slate-600">
                    Get directions to Jaitu
                  </p>

                </div>


                {/* Arrow */}

                <div className="absolute bottom-6 right-7 flex h-9 w-9 items-center justify-center rounded-full bg-[#2859B8]/10 text-[#2859B8] transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[#F59A01] group-hover:text-white">

                  <ArrowRight size={17} />

                </div>

              </div>

            </a>

          </div>

        </div>

      </section>


      {/* =====================================================
          GOOGLE MAP
      ====================================================== */}

      <GoogleMap />


      {/* =====================================================
          OFFICE HOURS
      ====================================================== */}

      <OfficeHours />


      {/* =====================================================
          EMAIL CTA
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#2859B8] px-4 py-14 sm:px-6 lg:px-8">

        {/* Decorative Circle Right */}

        <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full border-[35px] border-white/5" />

        {/* Decorative Circle Left */}

        <div className="absolute -bottom-28 -left-20 h-72 w-72 rounded-full border-[30px] border-[#F59A01]/10" />


        <div className="relative mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-center text-white md:flex-row md:text-left">

          {/* Text */}

          <div>

            <div className="flex items-center justify-center gap-3 md:justify-start">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">

                <Mail size={21} />

              </div>

              <h2 className="text-2xl font-bold sm:text-3xl">
                Have a Question?
              </h2>

            </div>


            <p className="mt-3 max-w-xl text-sm leading-6 text-blue-100 sm:text-base">
              Send us an email and our school administration will be happy to
              assist you.
            </p>

          </div>


          {/* Email Button */}

          <a
            href="mailto:allianceinternationaljaitu@gmail.com"
            className="group inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#F59A01] px-6 py-3.5 font-bold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#e58d00] hover:shadow-xl"
          >

            Email the School

            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />

          </a>

        </div>

      </section>

    </main>
  );
};

export default Contact;