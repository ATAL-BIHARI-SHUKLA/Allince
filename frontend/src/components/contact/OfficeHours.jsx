import { Clock } from "lucide-react";

const officeHours = [
  {
    day: "Monday",
    time: "8:00 AM – 2:00 PM",
  },
  {
    day: "Tuesday",
    time: "8:00 AM – 2:00 PM",
  },
  {
    day: "Wednesday",
    time: "8:00 AM – 2:00 PM",
  },
  {
    day: "Thursday",
    time: "8:00 AM – 2:00 PM",
  },
  {
    day: "Friday",
    time: "8:00 AM – 2:00 PM",
  },
  {
    day: "Saturday",
    time: "8:00 AM – 2:00 PM",
  },
  {
    day: "Sunday",
    time: "Closed",
  },
];

const OfficeHours = () => {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10">
          <div className="text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
              <Clock size={28} />
            </div>

            <h2 className="mt-5 text-3xl font-bold text-slate-900">
              School Office Hours
            </h2>

            <p className="mt-3 text-slate-600">
              Please contact or visit the school during the following office
              hours.
            </p>
          </div>

          <div className="mt-8 divide-y divide-slate-200">
            {officeHours.map((item) => (
              <div
                key={item.day}
                className="flex items-center justify-between gap-4 py-4"
              >
                <span className="font-medium text-slate-900">{item.day}</span>

                <span
                  className={`text-sm ${
                    item.time === "Closed"
                      ? "font-medium text-red-500"
                      : "text-slate-600"
                  }`}
                >
                  {item.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficeHours;
