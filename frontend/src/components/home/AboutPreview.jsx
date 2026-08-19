import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionHeading from "../common/SectionHeading";

const AboutPreview = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="overflow-hidden rounded-2xl">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
            alt="Alliance School students"
            className="h-[400px] w-full object-cover"
          />
        </div>

        <div>
          <SectionHeading
            badge="About Our School"
            title="Education That Builds Confidence"
            description="At Alliance School, we focus on creating a strong foundation for every student through quality education, values, creativity, and personal growth."
            align="left"
          />

          <p className="text-sm leading-7 text-slate-600">
            Our learning environment encourages curiosity, critical thinking,
            teamwork, and confidence. We believe that every child has unique
            potential and deserves the opportunity to learn and grow.
          </p>

          <Link
            to="/about"
            className="mt-6 inline-flex items-center gap-2 font-semibold text-blue-600 transition hover:gap-3"
          >
            Learn More About Us
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
