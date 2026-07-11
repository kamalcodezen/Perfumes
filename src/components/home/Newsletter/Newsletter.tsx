import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaApple,
  FaGooglePlay,
} from "react-icons/fa6";

const Newsletter = () => {
  useEffect(() => {
    // Initialize AOS scroll animation
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="w-full text-perf-text-main py-10 px-6 border-y border-perf-border/80">
      <div
        data-aos="fade-up"
        className="max-w-11/12 mx-auto flex flex-col lg:flex-row items-center justify-between gap-8"
      >
        {/* Left Column: Social Media Icons */}
        <div className="flex flex-col items-center lg:items-start space-y-3">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-perf-text-muted">
            Follow Us On Social Media
          </span>
          <div className="flex items-center gap-5 text-xl text-perf-text-main">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-perf-gold transition-colors duration-300"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-perf-gold transition-colors duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="hover:text-perf-gold transition-colors duration-300"
            >
              <FaYoutube />
            </a>
            <a
              href="#"
              aria-label="TikTok"
              className="hover:text-perf-gold transition-colors duration-300"
            >
              <FaTiktok />
            </a>
          </div>
        </div>

        {/* Middle Column: Email Newsletter Form */}
        <div className="flex flex-col items-center text-center space-y-3 w-full lg:w-auto max-w-lg">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-perf-text-muted">
            Sign Up For Exclusive Email Offers & More
          </span>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex w-full items-center border border-perf-border rounded-sm overflow-hidden shadow-sm bg-perf-bg"
          >
            <input
              type="email"
              placeholder="Your email address"
              className="w-full px-4 py-3 text-sm text-perf-text-main bg-transparent outline-none placeholder:text-perf-text-muted"
            />
            <button
              type="submit"
              className="bg-perf-gold hover:opacity-90 text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-6 py-3.5 transition-all duration-300 whitespace-nowrap cursor-pointer"
            >
              Sign Up
            </button>
          </form>
        </div>

        {/* Right Column: QR Code & Mobile App Buttons */}
        <div className="flex flex-col items-center lg:items-end space-y-2">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-perf-text-muted self-center lg:self-start">
            Get Our App
          </span>
          <div className="flex items-center gap-3">
            {/* QR Code Container with Your Border Theme */}
            <div className="bg-white p-1.5 rounded-xl border border-perf-border shadow-sm">
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=65x65&data=https://rosswell.com"
                alt="RossWell App QR Code"
                className="w-16 h-16 object-contain"
              />
            </div>

            {/* App Store & Google Play Badges with Theme Border */}
            <div className="flex flex-col gap-1.5">
              <a
                href="#"
                className="flex items-center gap-2 bg-perf-bg border border-perf-border hover:border-perf-gold text-perf-text-main px-3 py-1.5 rounded-lg transition-colors duration-300"
              >
                <FaApple className="text-lg text-perf-gold" />
                <div className="flex flex-col text-left leading-none">
                  <span className="text-[9px] uppercase text-perf-text-muted">
                    Download on the
                  </span>
                  <span className="text-xs font-semibold">App Store</span>
                </div>
              </a>

              <a
                href="#"
                className="flex items-center gap-2 bg-perf-bg border border-perf-border hover:border-perf-gold text-perf-text-main px-3 py-1.5 rounded-lg transition-colors duration-300"
              >
                <FaGooglePlay className="text-sm text-perf-gold" />
                <div className="flex flex-col text-left leading-none">
                  <span className="text-[9px] uppercase text-perf-text-muted">
                    Get it on
                  </span>
                  <span className="text-xs font-semibold">Google Play</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
