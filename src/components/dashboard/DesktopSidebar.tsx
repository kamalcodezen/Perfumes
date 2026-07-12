import { NavLink, useNavigate } from "react-router-dom";
import { Home, LogOut } from "lucide-react";
import { toast } from "react-toastify";

import { authClient } from "../../lib/auth-client";
import { dashboardNavLinks } from "./dashboardLinks";

const DesktopSidebar = () => {
  const navigate = useNavigate();

  const { data: session } = authClient.useSession();

  const role = session?.user?.role || "user";

  const menus =
    dashboardNavLinks[role as keyof typeof dashboardNavLinks] ||
    dashboardNavLinks.user;

  const handleLogout = async () => {
    await authClient.signOut();

    toast.success("Logout Successful");

    navigate("/");
  };

  return (
    <aside className="hidden lg:flex flex-col w-72 h-screen sticky top-0 bg-perf-card border-r border-perf-border">
      {/* Logo */}

      <div className="p-8 border-b border-perf-border">
        <NavLink to="/">
          <h2 className="text-3xl font-bold text-perf-gold">RossWell</h2>
        </NavLink>

        <p className="mt-2 uppercase tracking-[4px] text-xs text-perf-text-muted">
          {role} Dashboard
        </p>
      </div>

      {/* Navigation */}

      <div className="flex-1 overflow-y-auto p-5 space-y-2">
        {menus.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-300
                ${
                  isActive
                    ? "bg-perf-gold text-white"
                    : "text-perf-text-muted hover:bg-perf-gold/10 hover:text-perf-gold"
                }`
              }
            >
              <Icon size={18} />

              <span>{item.title}</span>
            </NavLink>
          );
        })}
      </div>

      {/* Bottom */}

      <div className="border-t border-perf-border p-5">
        <div className="mb-6">
          <div className="h-14 w-14 rounded-full bg-perf-gold flex items-center justify-center text-xl font-bold text-white">
            {session?.user?.name?.charAt(0).toUpperCase()}
          </div>

          <h3 className="mt-3 font-semibold text-perf-text-main">
            {session?.user?.name}
          </h3>

          <p className="text-sm text-perf-text-muted">{session?.user?.email}</p>
        </div>

        <NavLink
          to="/"
          className="flex items-center gap-3 rounded-xl px-4 py-3 text-perf-text-muted hover:bg-perf-gold/10 hover:text-perf-gold transition-all"
        >
          <Home size={18} />
          Home
        </NavLink>

        <button
          onClick={handleLogout}
          className="mt-3 w-full rounded-xl border border-red-500 py-3 flex items-center justify-center gap-2 text-red-500 hover:bg-red-500 hover:text-white transition-all cursor-pointer"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default DesktopSidebar;
