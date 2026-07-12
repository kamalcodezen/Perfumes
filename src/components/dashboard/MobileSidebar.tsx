import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu, X, Home, LogOut } from "lucide-react";
import { toast } from "react-toastify";

import { authClient } from "../../lib/auth-client";
import { dashboardNavLinks } from "./dashboardLinks";

const MobileSidebar = () => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

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
    <>
      {/* Mobile Topbar */}

      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 h-16 bg-perf-card border-b border-perf-border flex items-center justify-between px-5">
        <h2 className="text-xl font-bold text-perf-gold">RossWell</h2>

        <button onClick={() => setOpen(true)} className="text-perf-text-main">
          <Menu size={28} />
        </button>
      </div>

      {/* Overlay */}

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/60 z-40"
        />
      )}

      {/* Drawer */}

      <aside
        className={`fixed top-0 left-0 z-50 h-full w-72 bg-perf-card border-r border-perf-border transition-all duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Header */}

        <div className="flex items-center justify-between p-6 border-b border-perf-border">
          <h2 className="text-2xl font-bold text-perf-gold">Dashboard</h2>

          <button onClick={() => setOpen(false)}>
            <X />
          </button>
        </div>

        {/* User */}

        <div className="p-6">
          <div className="h-14 w-14 rounded-full bg-perf-gold flex items-center justify-center text-white font-bold text-xl">
            {session?.user?.name?.charAt(0).toUpperCase()}
          </div>

          <h3 className="mt-3 font-semibold text-perf-text-main">
            {session?.user?.name}
          </h3>

          <p className="text-sm text-perf-text-muted">{session?.user?.email}</p>
        </div>

        {/* Menu */}

        <div className="px-5 space-y-2">
          {menus.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-xl px-4 py-3 transition-all
                  ${
                    isActive
                      ? "bg-perf-gold text-white"
                      : "text-perf-text-muted hover:bg-perf-gold/10 hover:text-perf-gold"
                  }`
                }
              >
                <Icon size={18} />

                {item.title}
              </NavLink>
            );
          })}
        </div>

        {/* Bottom */}

        <div className="absolute bottom-0 left-0 right-0 border-t border-perf-border p-5">
          <NavLink
            to="/"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-perf-gold/10"
          >
            <Home size={18} />
            Home
          </NavLink>

          <button
            onClick={handleLogout}
            className="mt-3 w-full rounded-xl border border-red-500 py-3 flex items-center justify-center gap-2 text-red-500 hover:bg-red-500 hover:text-white transition"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
};

export default MobileSidebar;
