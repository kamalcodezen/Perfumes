import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getPerfumesById } from "../../lib/api/perfume";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Sparkles,
  ShoppingBag,
  Heart,
  ShieldCheck,
  Truck,
  RotateCcw,
  Star,
  ChevronRight,
  Loader2,
  Tag,
  CheckCircle2,
  Minus,
  Plus,
} from "lucide-react";

interface Perfume {
  _id: string;
  title: string;
  imageUrl: string;
  category: string;
  gender: string;
  price: number;
  shortDescription: string;
  fullDescription: string;
  scentNotes?: string;
}

const PerfumeDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [perfume, setPerfume] = useState<Perfume | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [quantity, setQuantity] = useState<number>(1);
  const [isWishlisted, setIsWishlisted] = useState<boolean>(false);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  useEffect(() => {
    if (!id) return;

    const loadPerfume = async () => {
      try {
        setLoading(true);
        const data = await getPerfumesById(id);
        setPerfume(data);
      } catch (error) {
        console.error("Error loading perfume details:", error);
      } finally {
        setLoading(false);
      }
    };

    loadPerfume();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-perf-bg flex flex-col items-center justify-center gap-3">
        <Loader2 size={36} className="animate-spin text-perf-gold" />
        <p className="text-xs font-semibold tracking-widest uppercase text-perf-text-muted">
          Unveiling Fragrance...
        </p>
      </div>
    );
  }

  if (!perfume) {
    return (
      <div className="min-h-screen bg-perf-bg flex flex-col items-center justify-center p-4 text-center">
        <h2 className="text-2xl font-bold font-serif-luxury text-perf-text-main">
          Perfume Not Found
        </h2>
        <p className="text-sm text-perf-text-muted mt-2 mb-6">
          The requested fragrance could not be located in our collection.
        </p>
        <Link
          to="/perfumes"
          className="bg-perf-gold text-white px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider hover:opacity-90 transition"
        >
          Back To Collection
        </Link>
      </div>
    );
  }

  const {
    title,
    imageUrl,
    category,
    gender,
    price,
    shortDescription,
    fullDescription,
    scentNotes,
  } = perfume;

  return (
    <section
      className="min-h-screen bg-perf-bg text-perf-text-main py-10 px-4 sm:px-6 lg:px-12 overflow-x-hidden mt-20"
      data-aos="fade-up"
    >
      <div className="max-w-11/12 mx-auto">
        <nav className="flex items-center gap-2 text-xs text-perf-text-muted mb-8">
          <Link to="/" className="hover:text-perf-gold transition">
            Home
          </Link>
          <ChevronRight size={12} />
          <Link to="/perfumes" className="hover:text-perf-gold transition">
            Collection
          </Link>
          <ChevronRight size={12} />
          <span className="text-perf-gold font-medium line-clamp-1">
            {title}
          </span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-5 space-y-4">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-perf-border/80 bg-perf-card shadow-2xl group">
              <img
                src={imageUrl}
                alt={title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-x-4 top-4 flex items-center justify-between">
                <span className="backdrop-blur-md bg-black/60 border border-white/10 text-perf-gold px-3.5 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase shadow-lg flex items-center gap-1.5">
                  <Sparkles size={13} />
                  {category}
                </span>

                <button
                  type="button"
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={`flex h-10 w-10 items-center justify-center rounded-full backdrop-blur-md border border-white/10 transition-all shadow-lg cursor-pointer active:scale-90 ${
                    isWishlisted
                      ? "bg-perf-gold text-white border-perf-gold"
                      : "bg-black/60 text-white/80 hover:text-perf-gold"
                  }`}
                  aria-label="Wishlist"
                >
                  <Heart
                    size={18}
                    className={isWishlisted ? "fill-white" : ""}
                  />
                </button>
              </div>

              <div className="absolute bottom-4 left-4">
                <span className="bg-perf-card/90 backdrop-blur-md text-perf-text-muted text-[10px] uppercase font-bold tracking-widest px-3 py-1.5 rounded-lg border border-perf-border/60">
                  Target: {gender}
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-amber-400" />
                  ))}
                </div>
                <span className="text-xs text-perf-text-muted font-medium">
                  5.0 (48 Signature Reviews)
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif-luxury text-perf-text-main leading-tight">
                {title}
              </h1>

              <p className="mt-2 text-sm text-perf-gold font-medium tracking-wide">
                {shortDescription}
              </p>
            </div>

            <div className="flex items-baseline gap-4 py-3 border-y border-perf-border/60">
              <span className="text-3xl sm:text-4xl font-black font-mono text-perf-gold">
                ${(price * quantity).toFixed(2)}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-emerald-500 font-semibold bg-emerald-500/10 px-3 py-1 rounded-full">
                <CheckCircle2 size={14} /> In Stock & Ready to Ship
              </span>
            </div>

            {scentNotes && (
              <div className="bg-perf-card border border-perf-border/80 rounded-2xl p-4 space-y-1.5 shadow-sm">
                <span className="text-[11px] font-bold uppercase tracking-widest text-perf-gold flex items-center gap-1.5">
                  <Tag size={13} /> Scent Profile & Key Accord
                </span>
                <p className="text-xs text-perf-text-main leading-relaxed">
                  {scentNotes}
                </p>
              </div>
            )}

            <div className="space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-widest text-perf-text-muted">
                Fragrance Overview
              </h3>
              <p className="text-sm text-perf-text-muted leading-relaxed whitespace-pre-line">
                {fullDescription}
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <div className="flex items-center justify-between border border-perf-border rounded-xl bg-perf-input-bg p-1.5 w-full sm:w-36">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="h-9 w-9 flex items-center justify-center rounded-lg hover:bg-perf-card text-perf-text-main transition active:scale-95 cursor-pointer"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="font-bold text-sm px-2">{quantity}</span>
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="h-9 w-9 flex items-center justify-center rounded-lg hover:bg-perf-card text-perf-text-main transition active:scale-95 cursor-pointer"
                  >
                    <Plus size={14} />
                  </button>
                </div>

                <button
                  type="button"
                  className="flex-1 flex items-center justify-center gap-2 bg-perf-gold hover:opacity-90 text-white font-bold py-3.5 px-6 rounded-xl transition duration-300 shadow-lg cursor-pointer text-sm tracking-wider uppercase"
                >
                  <ShoppingBag size={18} />
                  <span>Add To Cart • ${(price * quantity).toFixed(2)}</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-perf-border/60">
              <div className="flex flex-col items-center text-center p-3 rounded-xl bg-perf-card/40 border border-perf-border/40">
                <ShieldCheck size={20} className="text-perf-gold mb-1" />
                <span className="text-[11px] font-bold text-perf-text-main">
                  100% Authentic
                </span>
                <span className="text-[10px] text-perf-text-muted">
                  Direct From Atelier
                </span>
              </div>

              <div className="flex flex-col items-center text-center p-3 rounded-xl bg-perf-card/40 border border-perf-border/40">
                <Truck size={20} className="text-perf-gold mb-1" />
                <span className="text-[11px] font-bold text-perf-text-main">
                  Express Delivery
                </span>
                <span className="text-[10px] text-perf-text-muted">
                  Ships in 24-48 Hours
                </span>
              </div>

              <div className="flex flex-col items-center text-center p-3 rounded-xl bg-perf-card/40 border border-perf-border/40">
                <RotateCcw size={20} className="text-perf-gold mb-1" />
                <span className="text-[11px] font-bold text-perf-text-main">
                  Easy Return
                </span>
                <span className="text-[10px] text-perf-text-muted">
                  30 Days Guarantee
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerfumeDetails;
