import { Star, Quote } from "lucide-react";
import type { Testimonial } from "./testimonialsData";

interface TestimonialCardProps {
  testimonial: Testimonial;
  index?: number;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <div className="relative flex flex-col justify-between rounded-lg border border-perf-border/80 bg-perf-card p-8 shadow-sm transition-all duration-300   w-full h-full">
      {/* Decorative Quote Icon */}
      <div className="absolute top-6 right-6 text-perf-gold/20">
        <Quote size={40} />
      </div>

      <div>
        {/* Star Rating */}
        <div className="flex gap-1 mb-6">
          {Array.from({ length: testimonial.rating }).map((_, index) => (
            <Star
              key={index}
              size={16}
              className="fill-perf-gold text-perf-gold"
            />
          ))}
        </div>

        {/* Review Text */}
        <p className="text-base leading-relaxed text-perf-text-muted italic">
          "{testimonial.review}"
        </p>
      </div>

      {/* User Info Footer */}
      <div className="mt-4 pt-6 border-t border-perf-border/50 flex items-center gap-4">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="h-12 w-12 rounded-full object-cover ring-2 ring-perf-gold/30"
        />

        <div className="flex flex-col text-left">
          <h3 className="text-base font-bold text-perf-text-main font-serif-luxury">
            {testimonial.name}
          </h3>
          <span className="text-xs text-perf-text-muted">
            {testimonial.location}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
