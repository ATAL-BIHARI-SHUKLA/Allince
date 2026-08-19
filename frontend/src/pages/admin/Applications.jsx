import { Link } from "react-router-dom";
import { Eye } from "lucide-react";
import DataTable from "../../components/admin/DataTable";
import StatusBadge from "../../components/admin/StatusBadge";

const applications = [
  {
    id: "1",
    studentName: "Aarav Sharma",
    className: "Class 3",
    parentName: "Rahul Sharma",
    phone: "+91 9876543210",
    status: "Pending",
  },
  {
    id: "2",
    studentName: "Ananya Singh",
    className: "Class 5",
    parentName: "Vikram Singh",
    phone: "+91 9876543211",
    status: "Approved",
  },
  {
    id: "3",
    studentName: "Kabir Verma",
    className: "Class 2",
    parentName: "Amit Verma",
    phone: "+91 9876543212",
    status: "Contacted",
  },
];

const Applications = () => {
  const columns = [
    {
      key: "studentName",
      label: "Student",
    },
    {
      key: "className",
      label: "Applying For",
    },
    {
      key: "parentName",
      label: "Parent",
    },
    {
      key: "phone",
      label: "Phone",
    },
    {
      key: "status",
      label: "Status",
      render: (row) => <StatusBadge status={row.status} />,
    },
    {
      key: "actions",
      label: "Actions",
      render: (row) => (
        <Link
          to={`/admin/applications/${row.id}`}
          className="inline-flex items-center gap-2 rounded-lg bg-blue-50 px-3 py-2 text-sm font-medium text-blue-600 hover:bg-blue-100"
        >
          <Eye size={16} />
          View
        </Link>
      ),
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
        Admission Applications
      </h1>

      <p className="mt-2 text-slate-500">
        Manage and review student admission applications.
      </p>

      <div className="mt-8">
        <DataTable
          columns={columns}
          data={applications}
          emptyMessage="No admission applications found."
        />
      </div>
    </div>
  );
};

export default Applications;
