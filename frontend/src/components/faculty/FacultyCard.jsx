const FacultyCard = ({ faculty }) => {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative overflow-hidden bg-slate-100">
        <img
          src={faculty.image}
          alt={faculty.name}
          className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/70 to-transparent p-5 pt-16">
          <p className="text-sm font-medium text-blue-300">{faculty.subject}</p>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-slate-900">{faculty.name}</h3>

        <p className="mt-1 text-sm font-medium text-blue-600">{faculty.role}</p>

        <p className="mt-4 text-sm leading-6 text-slate-600">
          {faculty.description}
        </p>

        {faculty.experience && (
          <div className="mt-5 border-t border-slate-100 pt-4">
            <p className="text-sm text-slate-500">
              <span className="font-semibold text-slate-700">Experience:</span>{" "}
              {faculty.experience}
            </p>
          </div>
        )}
      </div>
    </article>
  );
};

export default FacultyCard;
