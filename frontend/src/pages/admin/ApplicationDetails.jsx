import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Mail, Phone } from "lucide-react";
import StatusBadge from "../../components/admin/StatusBadge";

const ApplicationDetails = () => {
  const { id } = useParams();

  // Temporary data until backend connection
  const application = {
    id,
    studentName: "Aarav Sharma",
    className: "Class 3",
    dateOfBirth: "12 May 2018",
    gender: "Male",
    parentName: "Rahul Sharma",
    email: "rahul@example.com",
    phone: "+91 9876543210",
    address: "Punjab, India",
    status: "Pending",
  };

  return (
    <div>
      <Link
        to="/admin/applications"
        className="inline-flex items-center gap-2 text-sm font-medium text-blue-600"
      >
        <ArrowLeft size={18} />
        Back to Applications
      </Link>

      <div className="mt-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">
            Application Details
          </h1>

          <p className="mt-1 text-slate-500">
            Application ID: #{application.id}
          </p>
        </div>

        <StatusBadge status={application.status} />
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-lg font-bold text-slate-900">Student Details</h2>

          <div className="mt-6 space-y-4">
            <Detail label="Student Name" value={application.studentName} />
            <Detail label="Class Applying For" value={application.className} />
            <Detail label="Date of Birth" value={application.dateOfBirth} />
            <Detail label="Gender" value={application.gender} />
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-lg font-bold text-slate-900">Parent Details</h2>

          <div className="mt-6 space-y-4">
            <Detail label="Parent Name" value={application.parentName} />

            <div className="flex items-center gap-3">
              <Mail size={18} className="text-blue-600" />
              <span className="text-sm text-slate-700">
                {application.email}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Phone size={18} className="text-blue-600" />
              <span className="text-sm text-slate-700">
                {application.phone}
              </span>
            </div>

            <Detail label="Address" value={application.address} />
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-lg font-bold text-slate-900">
          Update Application Status
        </h2>

        <div className="mt-5 flex flex-wrap gap-3">
          <button className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700">
            Mark as Contacted
          </button>

          <button className="rounded-xl bg-green-600 px-5 py-3 text-sm font-semibold text-white hover:bg-green-700">
            Approve
          </button>

          <button className="rounded-xl bg-red-600 px-5 py-3 text-sm font-semibold text-white hover:bg-red-700">
            Reject
          </button>
        </div>
      </div>
    </div>
  );
};

const Detail = ({ label, value }) => {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
        {label}
      </p>

      <p className="mt-1 text-sm font-medium text-slate-800">{value}</p>
    </div>
  );
};

export default ApplicationDetails;
