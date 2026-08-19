import { CalendarDays, MapPin } from "lucide-react";
import SectionHeading from "../common/SectionHeading";

const events = [
  {
    title: "Annual Sports Day",
    date: "15",
    month: "March",
    description: "A day full of sports, activities, teamwork, and celebration.",
    location: "School Playground",
  },
  {
    title: "Science Exhibition",
    date: "22",
    month: "March",
    description: "Students showcase creative ideas, experiments, and projects.",
    location: "School Auditorium",
  },
  {
    title: "Cultural Programme",
    date: "05",
    month: "April",
    description:
      "A celebration of creativity, music, dance, and student talent.",
    location: "Main Campus",
  },
];

const UpcomingEvents = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Upcoming Events"
          title="School Activities and Events"
          description="Stay updated with important activities and memorable events happening at Alliance School."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {events.map((event) => (
            <article
              key={event.title}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:shadow-lg"
            >
              <div className="flex items-center gap-4 bg-slate-50 p-6">
                <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-xl bg-blue-600 text-white">
                  <span className="text-xl font-bold">{event.date}</span>

                  <span className="text-xs uppercase">{event.month}</span>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900">
                    {event.title}
                  </h3>

                  <div className="mt-1 flex items-center gap-1 text-xs text-slate-500">
                    <CalendarDays size={14} />
                    Upcoming School Event
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-sm leading-6 text-slate-600">
                  {event.description}
                </p>

                <div className="mt-5 flex items-center gap-2 text-sm text-slate-500">
                  <MapPin size={16} className="text-blue-600" />
                  {event.location}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
