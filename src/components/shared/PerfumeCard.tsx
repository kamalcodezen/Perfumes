import { Link } from "react-router-dom";
import { Heart, Eye } from "lucide-react";

interface Perfume {
  _id: string;
  title: string;
  imageUrl: string;
  category: string;
  gender: string;
  price: number;
  shortDescription: string;
}

interface PerfumeCardProps {
  perfume: Perfume;
}

const PerfumeCard = ({ perfume }: PerfumeCardProps) => {
  const { _id, title, imageUrl, category, gender, price, shortDescription } =
    perfume;

  return (
    <article className="group overflow-hidden rounded-3xl border border-perf-border bg-perf-card transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/5]">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover duration-500 group-hover:scale-110"
        />

        {/* Wishlist */}
        <button className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 backdrop-blur hover:bg-perf-gold hover:text-white transition cursor-pointer">
          <Heart size={18} />
        </button>

        {/* Category */}
        <span className="absolute left-4 top-4 rounded-full bg-perf-gold px-3 py-1 text-xs font-semibold text-white">
          {category}
        </span>
      </div>

      {/* Content */}

      <div className="space-y-4 p-5">
        <div className="flex items-center justify-between">
          <span className="text-xs uppercase tracking-wider text-perf-text-muted">
            {gender}
          </span>

          <span className="text-xl font-bold text-perf-gold">${price}</span>
        </div>

        <h2 className="line-clamp-1 text-xl font-bold text-perf-text-main">
          {title}
        </h2>

        <p className="line-clamp-2 text-sm text-perf-text-muted">
          {shortDescription}
        </p>

        <Link
          to={`/perfumes/${_id}`}
          className="flex items-center justify-center gap-2 rounded-xl bg-perf-gold py-3 font-semibold text-white transition hover:opacity-90"
        >
          <Eye size={18} />
          View Details
        </Link>
      </div>
    </article>
  );
};

export default PerfumeCard;
