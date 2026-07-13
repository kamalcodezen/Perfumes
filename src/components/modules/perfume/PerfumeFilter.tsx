import { Search } from "lucide-react";

interface PerfumeFilterProps {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;

  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;

  selectedGender: string;
  setSelectedGender: React.Dispatch<React.SetStateAction<string>>;

  sortBy: string;
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
}

const PerfumeFilter = ({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  selectedGender,
  setSelectedGender,
  sortBy,
  setSortBy,
}: PerfumeFilterProps) => {
  return (
    <section className="rounded-3xl border border-perf-border bg-perf-card p-6 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Search */}
        <div className="lg:col-span-5">
          <label className="block mb-2 text-sm font-semibold text-perf-text-main">
            Search Perfume
          </label>

          <div className="relative">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-perf-text-muted"
            />

            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by perfume title..."
              className="w-full rounded-xl border border-perf-border bg-perf-input-bg py-3 pl-11 pr-4 outline-none focus:border-perf-gold"
            />
          </div>
        </div>

        {/* Category */}
        <div className="lg:col-span-3">
          <label className="block mb-2 text-sm font-semibold text-perf-text-main">
            Category
          </label>

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full rounded-xl border border-perf-border bg-perf-input-bg px-4 py-3 outline-none focus:border-perf-gold"
          >
            <option value="all">All Categories</option>
            <option value="Eau de Parfum">Eau de Parfum</option>
            <option value="Extrait de Parfum">Extrait de Parfum</option>
            <option value="Eau de Toilette">Eau de Toilette</option>
            <option value="Attar Oil">Attar Oil</option>
          </select>
        </div>

        {/* Gender */}
        <div className="lg:col-span-2">
          <label className="block mb-2 text-sm font-semibold text-perf-text-main">
            Gender
          </label>

          <select
            value={selectedGender}
            onChange={(e) => setSelectedGender(e.target.value)}
            className="w-full rounded-xl border border-perf-border bg-perf-input-bg px-4 py-3 outline-none focus:border-perf-gold"
          >
            <option value="all">All</option>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Unisex">Unisex</option>
          </select>
        </div>

        {/* Sort */}
        <div className="lg:col-span-2">
          <label className="block mb-2 text-sm font-semibold text-perf-text-main">
            Sort
          </label>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full rounded-xl border border-perf-border bg-perf-input-bg px-4 py-3 outline-none focus:border-perf-gold"
          >
            <option value="default">Default</option>
            <option value="low">Price: Low → High</option>
            <option value="high">Price: High → Low</option>
            <option value="a-z">A → Z</option>
            <option value="z-a">Z → A</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default PerfumeFilter;
