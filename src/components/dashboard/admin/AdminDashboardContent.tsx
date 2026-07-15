import {
  DollarSign,
  Package,
  ShoppingBag,
  Users,
  TrendingUp,
  Sparkles,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPerfumes } from "../../../lib/api/perfume";
import { getUsers } from "../../../lib/api/user";
import { getUserSession } from "../../../lib/core/session";
import DashboardChart from "./DashboardChart";


interface PerfumeItem {
  _id: string;
  title: string;
  category: string;
  price: number;
  gender: string;
}

interface UserItem {
  _id: string;
  name: string;
  email: string;
}

const AdminDashboardContent = () => {
  const userData = getUserSession();

  const [perfumes, setPerfumes] = useState<PerfumeItem[]>([]);
  const [users, setUsers] = useState<UserItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allPerfumes = await getPerfumes();
        const allUsers = await getUsers();

        setPerfumes(allPerfumes?.data || []);
        setUsers(Array.isArray(allUsers) ? allUsers : allUsers?.data || []);
      } catch (error) {
        console.error("Error fetching dashboard data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="h-[60vh] flex items-center justify-center">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-perf-gold"></div>
      </div>
    );
  }

  return (
    <div className="space-y-8 mt-15 lg:mt-0 text-perf-text-main">
      {/* 1. Welcome Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-lg border border-perf-border/80 bg-gradient-to-r from-perf-card/90 via-perf-card/50 to-perf-card/90 p-6 shadow-sm backdrop-blur-xl">
        <div className="space-y-1">
          <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.25em] text-perf-gold">
            <Sparkles size={14} /> Atelier Overview
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold font-serif-luxury text-perf-text-main">
            Welcome Back, {userData?.user?.name || "Admin"}
          </h1>
          <p className="text-xs text-perf-text-muted">
            Here is a summary of your boutique performance and recent sales
            activity.
          </p>
        </div>

        <Link
          to="/dashboard/add-perfume"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-perf-gold px-5 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-lg transition-all duration-300 hover:opacity-90 active:scale-95 self-start sm:self-auto"
        >
          <span>Add New Perfume</span>
        </Link>
      </div>

      {/* 2. Stats Cards (4) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="relative overflow-hidden rounded-2xl border border-perf-border/70 bg-perf-card/60 p-5 shadow-md backdrop-blur-md">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-perf-text-muted">
              Total Revenue
            </span>
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-perf-gold/10 text-perf-gold">
              <DollarSign size={18} />
            </div>
          </div>
          <div className="mt-4 flex items-baseline justify-between">
            <span className="text-2xl font-black font-mono text-perf-text-main">
              ${perfumes.reduce((acc, curr) => acc + curr.price, 0) * 8}
            </span>
            <span className="flex items-center gap-0.5 text-xs font-bold text-emerald-500">
              <TrendingUp size={12} /> Live
            </span>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-perf-border/70 bg-perf-card/60 p-5 shadow-md backdrop-blur-md">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-perf-text-muted">
              Fragrances in Stock
            </span>
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-perf-gold/10 text-perf-gold">
              <Package size={18} />
            </div>
          </div>
          <div className="mt-4 flex items-baseline justify-between">
            <span className="text-2xl font-black font-mono text-perf-text-main">
              {perfumes.length} Items
            </span>
            <span className="flex items-center gap-0.5 text-xs font-bold text-emerald-500">
              <TrendingUp size={12} /> Active
            </span>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-perf-border/70 bg-perf-card/60 p-5 shadow-md backdrop-blur-md">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-perf-text-muted">
              Active Customers
            </span>
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-perf-gold/10 text-perf-gold">
              <Users size={18} />
            </div>
          </div>
          <div className="mt-4 flex items-baseline justify-between">
            <span className="text-2xl font-black font-mono text-perf-text-main">
              {users.length} Users
            </span>
            <span className="flex items-center gap-0.5 text-xs font-bold text-emerald-500">
              <TrendingUp size={12} /> Live
            </span>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-perf-border/70 bg-perf-card/60 p-5 shadow-md backdrop-blur-md">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-perf-text-muted">
              Total Orders
            </span>
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-perf-gold/10 text-perf-gold">
              <ShoppingBag size={18} />
            </div>
          </div>
          <div className="mt-4 flex items-baseline justify-between">
            <span className="text-2xl font-black font-mono text-perf-text-main">
              48 Orders
            </span>
            <span className="flex items-center gap-0.5 text-xs font-bold text-emerald-500">
              <TrendingUp size={12} /> Monthly
            </span>
          </div>
        </div>
      </div>

      {/* 3. Perfume Analytics  */}
      <DashboardChart perfumes={perfumes} />

      {/* 4. Recent Orders & Top Fragrances */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Recent Clients */}
        <div className="lg:col-span-8 rounded-lg border border-perf-border/80 bg-perf-card/50 p-6 shadow-sm backdrop-blur-md space-y-5">
          <div className="flex items-center justify-between pb-3 border-b border-perf-border/50">
            <div>
              <h2 className="text-lg font-bold font-serif-luxury text-perf-text-main">
                Recent Clients
              </h2>
              <p className="text-xs text-perf-text-muted">
                Latest customers onboarded to the system.
              </p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-perf-border/40 text-perf-text-muted uppercase font-semibold tracking-wider">
                  <th className="pb-3 px-2">Client Name</th>
                  <th className="pb-3 px-2">Email Address</th>
                  <th className="pb-3 px-2 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-perf-border/30">
                {users.slice(0, 4).map((user) => (
                  <tr
                    key={user._id}
                    className="group hover:bg-perf-card/80 transition-colors"
                  >
                    <td className="py-3.5 px-2 font-medium text-perf-text-main">
                      {user.name}
                    </td>
                    <td className="py-3.5 px-2 text-perf-text-muted">
                      {user.email}
                    </td>
                    <td className="py-3.5 px-2 text-right">
                      <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                        Active Account
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top Premium Fragrances */}
        <div className="lg:col-span-4 rounded-lg border border-perf-border/80 bg-perf-card/50 p-6 shadow-sm backdrop-blur-md space-y-5">
          <div className="flex items-center justify-between pb-3 border-b border-perf-border/50">
            <div>
              <h2 className="text-lg font-bold font-serif-luxury text-perf-text-main">
                Premium Collection
              </h2>
              <p className="text-xs text-perf-text-muted">
                Latest luxury fragrances synced dynamically.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {perfumes.slice(0, 4).map((perfume) => (
              <div
                key={perfume._id}
                className="flex items-center justify-between p-3 rounded-2xl bg-perf-input-bg/40 border border-perf-border/30 hover:border-perf-gold/40 transition-colors"
              >
                <div className="space-y-0.5">
                  <p className="text-xs font-bold text-perf-text-main line-clamp-1">
                    {perfume.title}
                  </p>
                  <p className="text-[10px] uppercase text-perf-gold font-medium">
                    {perfume.category}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-bold font-mono text-perf-text-main">
                    ${perfume.price}
                  </p>
                  <p className="text-[10px] text-perf-text-muted">
                    {perfume.gender}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardContent;
