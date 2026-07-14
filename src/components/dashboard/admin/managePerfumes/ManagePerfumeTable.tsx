import React from "react";
import { Link } from "react-router-dom";
import { Trash2, Eye, Loader2, AlertCircle } from "lucide-react";
import type { Perfume } from "../../../../types/perfume";

interface ManagePerfumeTableProps {
  loading: boolean;
  filteredPerfumes: Perfume[];
  deletingId: string | null;
  onDeleteClick: (perfume: Perfume) => void;
}

const ManagePerfumeTable: React.FC<ManagePerfumeTableProps> = ({
  loading,
  filteredPerfumes,
  deletingId,
  onDeleteClick,
}) => {
  return (
    <div className="rounded-lg border border-perf-border/70 bg-perf-card/40 backdrop-blur-md overflow-hidden  w-full min-h-screen">
      {loading ? (
        /* Loading State */
        <div className="flex flex-col items-center justify-center py-20 gap-3">
          <Loader2 size={36} className="animate-spin text-perf-gold" />
          <p className="text-xs font-semibold tracking-widest uppercase text-perf-text-muted">
            Loading Catalog Items...
          </p>
        </div>
      ) : filteredPerfumes.length === 0 ? (
        /* Empty State */
        <div className="flex flex-col items-center justify-center py-16 text-center space-y-3">
          <AlertCircle size={40} className="text-perf-gold/60" />
          <p className="text-sm font-semibold text-perf-text-main">
            No perfumes match your criteria.
          </p>
          <p className="text-xs text-perf-text-muted max-w-sm">
            Try adjusting your search terms or add a new perfume to the
            inventory.
          </p>
        </div>
      ) : (
        /* Responsive Data Table */
        <div className="overflow-x-auto w-full">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-perf-border/60 bg-perf-input-bg/40 text-perf-text-muted uppercase font-semibold tracking-wider">
                <th className="py-4 px-6">Product</th>
                <th className="py-4 px-4 hidden md:table-cell">Category</th>
                <th className="py-4 px-4">Gender</th>
                <th className="py-4 px-4">Price</th>
                <th className="py-4 px-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-perf-border/30">
              {filteredPerfumes.map((perfume) => (
                <tr
                  key={perfume._id}
                  className="group hover:bg-perf-card/80 transition-colors"
                >
                  {/* Item Image + Title */}
                  <td className="py-3.5 px-6">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-xl overflow-hidden bg-perf-input-bg border border-perf-border/60 shrink-0">
                        <img
                          src={perfume.imageUrl}
                          alt={perfume.title}
                          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="space-y-0.5">
                        <p className="font-bold text-perf-text-main line-clamp-1">
                          {perfume.title}
                        </p>
                        <p className="text-[10px] text-perf-text-muted font-mono">
                          ID: {perfume._id.slice(-6)}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Category Cell */}
                  <td className="py-3.5 px-4 font-medium text-perf-gold hidden md:table-cell">
                    {perfume.category}
                  </td>

                  {/* Gender */}
                  <td className="py-3.5 px-4 capitalize text-perf-text-muted">
                    {perfume.gender}
                  </td>

                  {/* Price */}
                  <td className="py-3.5 px-4 font-mono font-bold text-perf-text-main">
                    ${perfume.price}
                  </td>

                  {/* Actions: View / Delete */}
                  <td className="py-3.5 px-6 text-right">
                    <div className="flex items-center justify-end gap-2">
                      {/* View Details Link */}
                      <Link
                        to={`/perfumes/${perfume._id}`}
                        className="flex h-8 w-8 items-center justify-center rounded-lg border border-perf-border/60 bg-perf-input-bg text-perf-text-muted hover:border-perf-gold hover:text-perf-gold transition"
                        title="View Details"
                      >
                        <Eye size={14} />
                      </Link>

                      {/* Delete Action Button */}
                      <button
                        type="button"
                        onClick={() => onDeleteClick(perfume)}
                        disabled={deletingId === perfume._id}
                        className="flex h-8 w-8 items-center justify-center rounded-lg border border-rose-500/30 bg-rose-500/10 text-rose-400 hover:bg-rose-500 hover:text-white transition cursor-pointer disabled:opacity-50"
                        title="Delete Item"
                      >
                        {deletingId === perfume._id ? (
                          <Loader2 size={14} className="animate-spin" />
                        ) : (
                          <Trash2 size={14} />
                        )}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ManagePerfumeTable;
