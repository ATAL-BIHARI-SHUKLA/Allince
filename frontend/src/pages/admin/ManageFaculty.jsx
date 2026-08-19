import { useState } from "react";
import { Pencil, Plus, Trash2, User } from "lucide-react";

const initialFaculty = [
  {
    id: 1,
    name: "Priya Sharma",
    designation: "Mathematics Teacher",
    experience: "8 Years",
  },
  {
    id: 2,
    name: "Amit Kumar",
    designation: "Science Teacher",
    experience: "6 Years",
  },
  {
    id: 3,
    name: "Neha Verma",
    designation: "English Teacher",
    experience: "5 Years",
  },
];

const ManageFaculty = () => {
  const [faculty, setFaculty] = useState(initialFaculty);

  const deleteFaculty = (id) => {
    setFaculty((previous) => previous.filter((member) => member.id !== id));
  };

  return (
    <div>
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Manage Faculty
          </h1>

          <p className="mt-2 text-slate-500">
            Manage teacher and faculty information.
          </p>
        </div>

        <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700">
          <Plus size={18} />
          Add Faculty
        </button>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {faculty.map((member) => (
          <div
            key={member.id}
            className="rounded-2xl border border-slate-200 bg-white p-6"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <User size={26} />
            </div>

            <h2 className="mt-5 text-lg font-bold text-slate-900">
              {member.name}
            </h2>

            <p className="mt-1 text-sm text-blue-600">{member.designation}</p>

            <p className="mt-3 text-sm text-slate-500">
              Experience: {member.experience}
            </p>

            <div className="mt-6 flex gap-3">
              <button className="inline-flex items-center gap-2 rounded-lg bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600">
                <Pencil size={16} />
                Edit
              </button>

              <button
                onClick={() => deleteFaculty(member.id)}
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

export default ManageFaculty;
