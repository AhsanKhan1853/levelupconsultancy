import { stats } from "../Data/siteData";
import { HiOutlineAcademicCap, HiOutlineGlobeAlt, HiOutlineUserGroup, HiOutlineBadgeCheck } from "react-icons/hi";

const icons = [HiOutlineAcademicCap, HiOutlineGlobeAlt, HiOutlineUserGroup, HiOutlineBadgeCheck];

export default function Stats() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-5 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s, i) => {
          const Icon = icons[i % icons.length];
          return (
            <div
              key={s.label}
              className="group bg-white hover:bg-primary rounded-2xl p-6 sm:p-8 text-center transition-all duration-300 hover:scale-105"
              style={{ boxShadow: "0 8px 16px 10px rgba(0, 0, 0, 0.15)" }}
            >
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-full bg-primary/10 group-hover:bg-white/20 transition-colors duration-300">
                  <Icon className="text-xl text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <p className="text-4xl sm:text-5xl font-extrabold text-primary group-hover:text-white transition-colors duration-300">
                  {s.value}
                </p>
              </div>

              <p className="mt-3 text-gray-600 group-hover:text-white font-medium text-sm sm:text-base uppercase tracking-wide transition-colors duration-300">
                {s.label}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}