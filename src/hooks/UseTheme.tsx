import { Sun, MoonStar } from "lucide-react";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function UseTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("ThemeToggle must be used inside ThemeProvider");
  }

  const { isDarkMode, themeToggle } = context;

  return (
    <>
      {/* Premium Keyframes for Realistic Nature and Space Motion */}
      <style>{`
        @keyframes shootingStar {
          0% {
            transform: translateX(0) translateY(0) rotate(-45deg) scale(0);
            opacity: 1;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateX(-50px) translateY(50px) rotate(-45deg) scale(1);
            opacity: 0;
          }
        }

        .animate-meteor {
          animation: shootingStar 1.2s linear infinite;
        }

        @keyframes sunriseEffect {
          0% {
            transform: translateY(15px) scale(0.6);
            opacity: 0;
          }
          100% {
            transform: translateY(0) scale(1);
            opacity: 0.9;
          }
        }

        .animate-sunrise {
          animation: sunriseEffect 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)
            forwards;
        }

        @keyframes cloudFloat {
          0%,
          100% {
            transform: translateX(0);
          }

          50% {
            transform: translateX(3px);
          }
        }

        .animate-float-cloud {
          animation: cloudFloat 4s ease-in-out infinite;
        }
      `}</style>

      <button
        onClick={themeToggle}
        className={`relative w-20 h-9 sm:w-24 sm:h-10 rounded-full overflow-hidden transition-all duration-700 border cursor-pointer select-none shrink-0
        ${
          isDarkMode
            ? "border-indigo-500/40 shadow-[inset_0_2px_6px_rgba(0,0,0,0.8),_0_0_15px_rgba(99,102,241,0.25)]"
            : "border-sky-200 shadow-[inset_0_2px_4px_rgba(0,0,0,0.05),_0_3px_8px_rgba(14,165,233,0.12)]"
        }`}
      >
        <div
          className={`absolute inset-0 transition-all duration-700 ${
            isDarkMode
              ? "bg-gradient-to-br from-[#040410] via-[#09091d] to-[#140d30]"
              : "bg-gradient-to-b from-[#38bdf8] via-[#7dd3fc] to-[#e0f2fe]"
          }`}
        />

        {!isDarkMode && (
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute left-3.5 bottom-[-4px] w-6 h-6 rounded-full bg-gradient-to-t from-[#f59e0b] to-[#fef08a] blur-[0.3px] shadow-[0_0_8px_rgba(245,158,11,0.6)] animate-sunrise" />

            <div className="absolute left-1.5 top-1.5 w-6 h-2.5 bg-white/70 rounded-full blur-[0.3px] animate-float-cloud" />

            <div
              className="absolute left-6 top-2.5 w-8 h-2 bg-white/50 rounded-full blur-[0.4px] animate-float-cloud"
              style={{ animationDelay: "1s" }}
            />

            <div
              className="absolute left-10 top-1 w-5 h-2 bg-white/40 rounded-full blur-[0.3px] animate-float-cloud"
              style={{ animationDelay: "2s" }}
            />
          </div>
        )}

        {isDarkMode && (
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute left-3.5 top-1.5 text-[#fef08a] text-sm drop-shadow-[0_0_3px_rgba(254,240,138,0.4)]">
              🌙
            </div>

            <div className="absolute right-3 top-0.5 w-[15px] h-[1px] bg-gradient-to-r from-white to-transparent animate-meteor" />

            <div
              className="absolute right-9 top-0 w-[12px] h-[1px] bg-gradient-to-r from-yellow-200 to-transparent animate-meteor"
              style={{ animationDelay: "0.5s" }}
            />

            <span className="absolute left-9 top-1.5 text-[4px] text-white animate-pulse">
              ✦
            </span>

            <span className="absolute left-8 top-5 text-[3px] text-white/40">
              ✦
            </span>

            <span className="absolute left-11 top-3 text-[4px] text-indigo-200 animate-ping">
              ✦
            </span>

            <span className="absolute left-14 top-1 text-[3px] text-yellow-200 animate-pulse">
              ✦
            </span>

            <span className="absolute left-16 top-5 text-[3px] text-white/80">
              ✦
            </span>

            <span className="absolute left-15 top-6 text-[4px] text-purple-300 animate-pulse">
              ✦
            </span>
          </div>
        )}

        <div
          className={`absolute top-0.5 w-7.5 h-7.5 sm:w-8.5 sm:h-8.5 rounded-full transition-all duration-750 z-20 flex items-center justify-center border ${
            isDarkMode
              ? "translate-x-0.5 bg-gradient-to-b from-[#1e1b4b] to-[#312e81] border-indigo-500/40 shadow-[0_0_10px_rgba(99,102,241,0.5),_inset_0_1px_1px_rgba(255,255,255,0.1)] text-indigo-200"
              : "translate-x-[47px] sm:translate-x-[59px] bg-gradient-to-b from-white to-[#f8fafc] border-amber-200 shadow-[0_3px_8px_rgba(245,158,11,0.25),_inset_0_1px_0_rgba(255,255,255,0.9)] text-amber-500"
          }`}
        >
          {isDarkMode ? (
            <MoonStar
              size={12}
              className="sm:size-13 drop-shadow-[0_0_2px_rgba(165,180,252,0.5)]"
            />
          ) : (
            <Sun
              size={13}
              className="sm:size-15 drop-shadow-[0_0_3px_rgba(245,158,11,0.5)]"
            />
          )}
        </div>
      </button>
    </>
  );
}
