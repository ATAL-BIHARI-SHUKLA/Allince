import { Menu, LogOut, User } from "lucide-react";
import useAuth from "../../hooks/useAuth";

const AdminNavbar = ({ setIsSidebarOpen }) => {
  const { admin, logout } = useAuth();

  return (
    <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-slate-200 bg-white px-4 sm:px-6 lg:px-8">
      <button
        type="button"
        onClick={() => setIsSidebarOpen(true)}
        className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 lg:hidden"
      >
        <Menu size={24} />
      </button>

      <div className="hidden lg:block">
        <h1 className="text-xl font-bold text-slate-900">Alliance School</h1>

        <p className="text-sm text-slate-500">Administration Panel</p>
      </div>

      <div className="ml-auto flex items-center gap-3">
        <div className="hidden text-right sm:block">
          <p className="text-sm font-semibold text-slate-900">
            {admin?.name || "Administrator"}
          </p>

          <p className="text-xs text-slate-500">
            {admin?.email || "admin@allianceschool.com"}
          </p>
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
          <User size={20} />
        </div>

        <button
          type="button"
          onClick={logout}
          className="rounded-lg p-2 text-red-500 transition hover:bg-red-50"
          title="Logout"
        >
          <LogOut size={20} />
        </button>
      </div>
    </header>
  );
};

export default AdminNavbar;
