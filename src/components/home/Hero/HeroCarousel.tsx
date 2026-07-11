import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

import banner1 from "../../../../public/images/banner-1.png";
import banner2 from "../../../../public/images/banner-2.png";
import banner3 from "../../../../public/images/banner-3.png";
import banner4 from "../../../../public/images/banner-4.png";

const HeroCarousel = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="h-full w-full"
      >
        {/* =========================================
            SLIDE 1: BORNTOSTANDOUT (LEFT ALIGNED)
        ========================================= */}
        <SwiperSlide>
          <div
            className="relative h-screen w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${banner1})` }}
          >
            {/* Contrast Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent z-10" />

            <div className="relative z-20 h-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16 flex items-center">
              <div className="grid lg:grid-cols-12 w-full items-center gap-6 pt-20">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="lg:col-span-7 space-y-4 flex flex-col items-start"
                >
                  {/* Subtle Text Above Button */}
                  <span className="text-xs sm:text-sm font-semibold tracking-[0.3em] text-[#e57c58] uppercase">
                    New Brand Arrival
                  </span>

                  <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-md leading-relaxed drop-shadow-sm">
                    Indulge in exclusive, highly concentrated artisan fragrances
                    crafted to leave an unforgettable impression.
                  </p>

                  <div className="pt-2 flex items-center gap-4">
                    <Link to="/perfumes">
                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        className="
                          group relative overflow-hidden
                          border-2 border-white
                          bg-transparent text-black
                          font-semibold px-8 py-4 uppercase tracking-[0.25em] text-xs sm:text-sm
                          shadow-xl flex items-center gap-3 cursor-pointer
                          transition-colors duration-500 hover:text-white
                        "
                      >
                        <span
                          className="
                            absolute inset-0 bg-white
                            translate-x-0 group-hover:translate-x-full
                            transition-transform duration-500 ease-in-out z-0
                          "
                        />

                        <span className="relative z-10 flex items-center gap-3">
                          <span>Shop Now</span>
                          <FaArrowRight
                            size={14}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                          />
                        </span>
                      </motion.button>
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* =========================================
            SLIDE 4: LUXURY ESSENTIALS (CENTERED)
        ========================================= */}
        <SwiperSlide>
          <div
            className="relative h-screen w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${banner4})` }}
          >
            <div className="absolute inset-0 bg-black/40 z-10" />

            <div className="relative z-20 h-full max-w-5xl mx-auto px-6 flex flex-col justify-center items-center text-center">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-4 flex flex-col items-center pt-24"
              >
                {/* Subtle Text Above Button */}
                <span className="text-xs sm:text-sm font-semibold tracking-[0.35em] text-white/80 uppercase">
                  Unveiling Timeless Elegance
                </span>

                <p className="text-sm sm:text-base text-white/70 max-w-lg leading-relaxed">
                  Discover refined scents tailored for sophisticated moments.
                </p>

                <div className="pt-2 flex items-center gap-4">
                  <Link to="/perfumes">
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      className="
                        group relative overflow-hidden
                        border-2 border-white
                        bg-transparent text-black
                        font-semibold px-8 py-4 uppercase tracking-[0.25em] text-xs sm:text-sm
                        shadow-xl flex items-center gap-3 cursor-pointer
                        transition-colors duration-500 hover:text-white
                      "
                    >
                      <span
                        className="
                          absolute inset-0 bg-white
                          translate-x-0 group-hover:translate-x-full
                          transition-transform duration-500 ease-in-out z-0
                        "
                      />

                      <span className="relative z-10 flex items-center gap-3">
                        <span>Shop Now</span>
                        <FaArrowRight
                          size={14}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </span>
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </SwiperSlide>

        {/* =========================================
            SLIDE 2: SIGNATURE SCENTS (RIGHT ALIGNED)
        ========================================= */}
        <SwiperSlide>
          <div
            className="relative h-screen w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${banner2})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/40 to-transparent z-10" />

            <div className="relative z-20 h-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16 flex items-center">
              <div className="grid lg:grid-cols-12 w-full items-center gap-10">
                <div className="hidden lg:block lg:col-span-5 w-full" />

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="lg:col-span-7 flex flex-col items-end text-right space-y-4"
                >
                  <span className="text-xs sm:text-sm font-semibold tracking-[0.3em] text-[#e57c58] uppercase">
                    Luxury Essentials
                  </span>

                  <h1 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-[0.18em] leading-tight uppercase font-serif text-white">
                    Signature <br />
                    <span className="text-[#e57c58] font-normal">Scents</span>
                  </h1>

                  <p className="text-sm sm:text-base text-white/80 max-w-md leading-relaxed">
                    Explore curated collections of rare oud, French florals, and
                    timeless oriental notes.
                  </p>

                  <div className="pt-2">
                    <Link to="/perfumes">
                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        className="
                          group relative overflow-hidden
                          border-2 border-white
                          bg-transparent text-black
                          font-semibold px-8 py-4 uppercase tracking-[0.25em] text-xs sm:text-sm
                          shadow-xl flex items-center gap-3 cursor-pointer
                          transition-colors duration-500 hover:text-white
                        "
                      >
                        <span
                          className="
                            absolute inset-0 bg-white
                            translate-x-0 group-hover:translate-x-full
                            transition-transform duration-500 ease-in-out z-0
                          "
                        />

                        <span className="relative z-10 flex items-center gap-3">
                          <span>Explore Collection</span>
                          <FaArrowRight
                            size={14}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                          />
                        </span>
                      </motion.button>
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* =========================================
            SLIDE 3: BRAND HIGHLIGHT (CENTERED)
        ========================================= */}
        <SwiperSlide>
          <div
            className="relative h-screen w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${banner3})` }}
          >
            <div className="absolute inset-0 bg-black/50 z-10" />

            <div className="relative z-20 h-full max-w-5xl mx-auto px-6 flex flex-col justify-center items-center text-center">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-4 flex flex-col items-center pt-24"
              >
                {/* Subtle Text Above Button */}
                <span className="text-xs sm:text-sm font-semibold tracking-[0.35em] text-[#e57c58] uppercase">
                  Crafted for Distinction
                </span>

                <p className="text-sm sm:text-base text-white/80 max-w-md leading-relaxed">
                  Experience pure, long-lasting artisan perfumes crafted for
                  those who stand out.
                </p>

                <div className="pt-2 flex items-center gap-4">
                  <Link to="/perfumes">
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      className="
                        group relative overflow-hidden
                        border-2 border-white
                        bg-transparent text-black
                        font-semibold px-8 py-4 uppercase tracking-[0.25em] text-xs sm:text-sm
                        shadow-xl flex items-center gap-3 cursor-pointer
                        transition-colors duration-500 hover:text-white
                      "
                    >
                      <span
                        className="
                          absolute inset-0 bg-white
                          translate-x-0 group-hover:translate-x-full
                          transition-transform duration-500 ease-in-out z-0
                        "
                      />

                      <span className="relative z-10 flex items-center gap-3">
                        <span>Shop Now</span>
                        <FaArrowRight
                          size={14}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </span>
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default HeroCarousel;
