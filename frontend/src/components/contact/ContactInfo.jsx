import { MapPin, Phone, Mail } from "lucide-react";
import SectionHeading from "../common/SectionHeading";

const contactDetails = [
  {
    icon: MapPin,
    title: "School Address",
    details: "Your School Address Here",
  },
  {
    icon: Phone,
    title: "Phone Number",
    details: "+91 XXXXX XXXXX",
  },
  {
    icon: Mail,
    title: "Email Address",
    details: "info@allianceschool.com",
  },
];

const ContactInfo = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Contact Information"
          title="Get in Touch With Alliance School"
          description="Contact us for admissions, general enquiries, or any information related to our school."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {contactDetails.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                  <Icon size={26} />
                </div>

                <h3 className="mt-5 text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {item.details}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
