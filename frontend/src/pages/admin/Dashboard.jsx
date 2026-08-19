import { FileText, Clock3, CalendarDays, Images, Users } from "lucide-react";
import DashboardCard from "../../components/admin/DashboardCard";
import StatusBadge from "../../components/admin/StatusBadge";

const recentApplications = [
  {
    id: 1,
    student: "Aarav Sharma",
    className: "Class 3",
    parent: "Rahul Sharma",
    status: "Pending",
  },
  {
    id: 2,
    student: "Ananya Singh",
    className: "Class 5",
    parent: "Vikram Singh",
    status: "Approved",
  },
  {
    id: 3,
    student: "Kabir Verma",
    className: "Class 2",
    parent: "Amit Verma",
    status: "Pending",
  },
];

const Dashboard = () => {
  const stats = [
    {
      title: "Total Applications",
      value: "128",
      icon: FileText,
      description: "All admission applications",
    },
    {
      title: "Pending Applications",
      value: "24",
      icon: Clock3,
      description: "Waiting for review",
    },
    {
      title: "Upcoming Events",
      value: "6",
      icon: CalendarDays,
      description: "Active school events",
    },
    {
      title: "Gallery Images",
      value: "86",
      icon: Images,
      description: "Uploaded school images",
    },
    {
      title: "Faculty Members",
      value: "32",
      icon: Users,
      description: "Active faculty profiles",
    },
  ];

  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
          Dashboard
        </h1>

        <p className="mt-2 text-slate-500">
          Welcome back. Here is an overview of Alliance School.
        </p>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
        {stats.map((stat) => (
          <DashboardCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
            description={stat.description}
          />
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-slate-200 bg-white">
        <div className="border-b border-slate-200 p-6">
          <h2 className="text-lg font-bold text-slate-900">
            Recent Applications
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Latest admission applications received.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase text-slate-500">
                  Student
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase text-slate-500">
                  Class
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase text-slate-500">
                  Parent
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase text-slate-500">
                  Status
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {recentApplications.map((application) => (
                <tr key={application.id}>
                  <td className="px-6 py-4 font-medium text-slate-900">
                    {application.student}
                  </td>

                  <td className="px-6 py-4 text-sm text-slate-600">
                    {application.className}
                  </td>

                  <td className="px-6 py-4 text-sm text-slate-600">
                    {application.parent}
                  </td>

                  <td className="px-6 py-4">
                    <StatusBadge status={application.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
