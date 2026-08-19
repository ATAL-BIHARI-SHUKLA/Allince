import { useState } from "react";
import { CalendarDays, Pencil, Plus, Trash2 } from "lucide-react";

const initialEvents = [
  {
    id: 1,
    title: "Annual Sports Day",
    date: "15 March 2026",
    location: "School Ground",
  },
  {
    id: 2,
    title: "Science Exhibition",
    date: "22 April 2026",
    location: "Activity Hall",
  },
];

const ManageEvents = () => {
  const [events, setEvents] = useState(initialEvents);

  const deleteEvent = (id) => {
    setEvents((previous) => previous.filter((event) => event.id !== id));
  };

  return (
    <div>
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Manage Events
          </h1>

          <p className="mt-2 text-slate-500">
            Add, edit, and manage upcoming school events.
          </p>
        </div>

        <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700">
          <Plus size={18} />
          Add Event
        </button>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {events.map((event) => (
          <div
            key={event.id}
            className="rounded-2xl border border-slate-200 bg-white p-6"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <CalendarDays size={23} />
            </div>

            <h2 className="mt-5 text-lg font-bold text-slate-900">
              {event.title}
            </h2>

            <p className="mt-3 text-sm text-slate-500">{event.date}</p>

            <p className="mt-1 text-sm text-slate-500">{event.location}</p>

            <div className="mt-6 flex gap-3">
              <button className="inline-flex items-center gap-2 rounded-lg bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600">
                <Pencil size={16} />
                Edit
              </button>

              <button
                onClick={() => deleteEvent(event.id)}
                className="inline-flex items-center gap-2 rounded-lg bg-red-50 px-4 py-2 text-sm font-medium text-red-600"
              >
                <Trash2 size={16} />
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageEvents;
