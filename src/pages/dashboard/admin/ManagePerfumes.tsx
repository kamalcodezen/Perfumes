import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPerfumes } from "../../../lib/api/perfume";
import { Plus, Search, Sparkles } from "lucide-react";
import type { Perfume } from "../../../types/perfume";
import { deletePerfume } from "../../../lib/actions/perfume";
import ManagePerfumeTable from "../../../components/dashboard/admin/managePerfumes/ManagePerfumeTable";
import ConfirmDeleteModal from "../../../components/shared/modals/ConfirmDeleteModal";

const ManagePerfumes = () => {
  const [perfumes, setPerfumes] = useState<Perfume[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Reusable Modal State
  const [isDeleteOpen, setIsDeleteOpen] = useState<boolean>(false);
  const [perfumeToDelete, setPerfumeToDelete] = useState<Perfume | null>(null);

  // Fetch Perfumes from API
  const fetchPerfumesList = async () => {
    try {
      setLoading(true);
      const data = await getPerfumes();
      setPerfumes(Array.isArray(data?.data) ? data?.data : []);
    } catch (error) {
      console.error("Error loading perfumes:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPerfumesList();
  }, []);

  // Trigger Delete Modal
  const handleDeleteClick = (perfume: Perfume) => {
    setPerfumeToDelete(perfume);
    setIsDeleteOpen(true);
  };

  // Execute Delete Action
  const handleDeleteConfirm = async (
    id: string,
  ): Promise<{ success: boolean; message?: string }> => {
    try {
      setDeletingId(id);
      await deletePerfume(id);
      setPerfumes((prev) => prev.filter((item) => item._id !== id));
      return { success: true };
    } catch (error) {
      // console.error("Failed to delete perfume:", error);
      return { success: false, message: "Failed to delete the perfume item." };
    } finally {
      setDeletingId(null);
    }
  };

  // Filter perfumes based on search input
  const filteredPerfumes = perfumes.filter(
    (p) =>
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.category.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="w-full space-y-8 text-perf-text-main py-4 mt-12 lg:mt-0">
      {/* 1. Page Header & Primary CTA */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-perf-border/60 p-6 w-full">
        <div>
          <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.25em] text-perf-gold">
            <Sparkles size={14} /> Inventory Control
          </span>
          <h1 className="mt-1 text-3xl font-serif-luxury font-bold text-perf-text-main">
            Manage Perfumes Collection
          </h1>
          <p className="text-xs text-perf-text-muted mt-1">
            Inspect, manage, and remove items from the active boutique catalog.
          </p>
        </div>

        <Link
          to="/dashboard/add-perfume"
          className="inline-flex items-center gap-2 bg-perf-gold hover:opacity-90 text-white px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition duration-300 shadow-md active:scale-95 shrink-0 self-start sm:self-auto"
        >
          <Plus size={16} />
          <span>Add New Fragrance</span>
        </Link>
      </div>

      {/* 2. Search Filter Input */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-perf-border/70 bg-perf-card/40 p-4 backdrop-blur-md w-full">
        <div className="relative w-full sm:w-80">
          <input
            type="text"
            placeholder="Search by title or category..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-xl border border-perf-border/80 bg-perf-input-bg py-2.5 pl-10 pr-4 text-xs text-perf-text-main placeholder:text-perf-text-muted/60 focus:border-perf-gold focus:outline-none transition"
          />
          <Search
            size={16}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-perf-text-muted"
          />
        </div>

        <div className="text-xs text-perf-text-muted font-mono self-end sm:self-auto">
          Showing{" "}
          <span className="font-bold text-perf-gold">
            {filteredPerfumes.length}
          </span>{" "}
          of {perfumes.length} Fragrances
        </div>
      </div>

      {/* 3. Catalog Data Table Component */}
      <ManagePerfumeTable
        loading={loading}
        filteredPerfumes={filteredPerfumes}
        deletingId={deletingId}
        onDeleteClick={handleDeleteClick}
      />

      {/* 4. Delete Confirmation Modal Component */}
      <ConfirmDeleteModal
        isOpen={isDeleteOpen}
        onClose={() => {
          setIsDeleteOpen(false);
          setPerfumeToDelete(null);
        }}
        itemToDelete={perfumeToDelete}
        onDeleteConfirm={handleDeleteConfirm}
      />
    </div>
  );
};

export default ManagePerfumes;
