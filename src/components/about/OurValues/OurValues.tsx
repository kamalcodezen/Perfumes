import { ShieldCheck, Leaf, HeartHandshake, Gem } from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "Authenticity",
    description:
      "Every RossWell fragrance is carefully crafted using genuine premium ingredients.",
  },
  {
    icon: Gem,
    title: "Luxury Quality",
    description:
      "Exceptional craftsmanship and elegant design define every bottle we create.",
  },
  {
    icon: HeartHandshake,
    title: "Customer First",
    description:
      "We believe trust is earned through outstanding products and excellent service.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "We continuously work towards responsible sourcing and environmentally conscious practices.",
  },
];

const OurValues = () => {
  return (
    <section className="py-20 bg-perf-bg">
      <div className="max-w-11/12 mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.35em] font-bold text-perf-gold">
            Core Values
          </span>

          <h2 className="mt-3 text-4xl font-bold font-serif-luxury text-perf-text-main">
            What Defines RossWell
          </h2>

          <p className="mt-5 text-perf-text-muted leading-7">
            Our values guide every fragrance we create and every experience we
            deliver to our customers.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <div
                key={value.title}
                className="rounded-3xl border border-perf-border bg-perf-card p-7 transition duration-300 hover:-translate-y-2 hover:border-perf-gold"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-perf-gold/10 text-perf-gold">
                  <Icon size={28} />
                </div>

                <h3 className="mt-6 text-xl font-bold text-perf-text-main">
                  {value.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-perf-text-muted">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurValues;
