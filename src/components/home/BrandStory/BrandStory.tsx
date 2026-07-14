import { Sparkles, Gem, Leaf, Award } from "lucide-react";

const features = [
  {
    icon: Gem,
    title: "Luxury Craftsmanship",
    description:
      "Every RossWell fragrance is carefully crafted using premium ingredients to deliver a refined luxury experience.",
  },
  {
    icon: Leaf,
    title: "Finest Ingredients",
    description:
      "We source rare botanical extracts and long-lasting aroma compounds from trusted partners around the world.",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description:
      "Every bottle undergoes strict quality checks to ensure elegance, consistency, and exceptional performance.",
  },
];

const BrandStory = () => {
  return (
    <section className="bg-perf-bg py-20">
      <div className="max-w-11/12 mx-auto grid lg:grid-cols-2 gap-14 items-center">
        {/* Left */}
        <div>
          <span className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.35em] font-bold text-perf-gold">
            <Sparkles size={14} />
            Our Story
          </span>

          <h2 className="mt-4 text-4xl lg:text-5xl font-bold font-serif-luxury text-perf-text-main leading-tight">
            Crafted For Those Who
            <span className="block text-perf-gold">Appreciate Luxury</span>
          </h2>

          <p className="mt-6 text-base leading-7 text-perf-text-muted">
            RossWell was created with a simple vision — to make luxury
            fragrances accessible without compromising elegance, quality, or
            craftsmanship. Every bottle is designed to leave a memorable
            impression, blending timeless sophistication with modern luxury.
          </p>

          <div className="mt-10 grid gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div key={feature.title} className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-perf-gold/10 text-perf-gold">
                    <Icon size={22} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-perf-text-main">
                      {feature.title}
                    </h3>

                    <p className="mt-1 text-base leading-6 text-perf-text-muted">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right */}

        <div className="relative">
          <div className="overflow-hidden rounded-3xl border border-perf-border bg-perf-card">
            <img
              src="https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=900&q=80"
              alt="RossWell Luxury Perfume"
              className="h-[650px] w-full object-cover"
            />
          </div>

          <div className="absolute bottom-8 left-8 rounded-2xl border border-perf-border bg-perf-card/90 backdrop-blur-md p-6 shadow-xl">
            <p className="text-sm uppercase tracking-[0.25em] text-perf-gold">
              Since 2026
            </p>

            <h3 className="mt-2 text-3xl font-bold text-perf-text-main">
              Luxury In Every Drop
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
