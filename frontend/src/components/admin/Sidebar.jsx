import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  FileText,
  CalendarDays,
  Images,
  Users,
  Settings,
  X,
} from "lucide-react";

const menuItems = [
  {
    name: "Dashboard",
    path: "/admin/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Applications",
    path: "/admin/applications",
    icon: FileText,
  },
  {
    name: "Manage Events",
    path: "/admin/events",
    icon: CalendarDays,
  },
  {
    name: "Manage Gallery",
    path: "/admin/gallery",
    icon: Images,
  },
  {
    name: "Manage Faculty",
    path: "/admin/faculty",
    icon: Users,
  },
  {
    name: "Settings",
    path: "/admin/settings",
    icon: Settings,
  },
];

const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <>
      {isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 bg-slate-950/50 lg:hidden"
          aria-label="Close sidebar"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-72 flex-col bg-slate-950 text-white transition-transform duration-300 lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-20 items-center justify-between border-b border-white/10 px-6">
          <NavLink to="/admin/dashboard" className="text-xl font-bold">
            Alliance
            <span className="text-blue-400"> Admin</span>
          </NavLink>

          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="rounded-lg p-2 text-slate-300 hover:bg-white/10 lg:hidden"
          >
            <X size={22} />
          </button>
        </div>

        <nav className="flex-1 space-y-2 p-4">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "text-slate-400 hover:bg-white/10 hover:text-white"
                  }`
                }
              >
                <Icon size={20} />
                {item.name}
              </NavLink>
            );
          })}
        </nav>

        <div className="border-t border-white/10 p-5">
          <p className="text-xs text-slate-500">Alliance School Admin Panel</p>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
