import { whyUs, stats } from "../Data/siteData";

// Eagerly import every PNG in assets/why-us so we can look one up by slug
// at runtime. If a reason (or stat) doesn't have a matching file, we fall
// back to assets/why-us/default.png — same pattern used on the Services page.
const logoModules = import.meta.glob("../assets/why-us/*.png", { eager: true });

const logos = Object.fromEntries(
  Object.entries(logoModules).map(([path, mod]) => {
    const name = path.split("/").pop().replace(".png", "");
    return [name, mod.default];
  })
);

function getLogo(slug) {
  return logos[slug] || logos["default"];
}

export default function WhyUs() {
  return (
    <section id="why-us" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="text-3xl font-extrabold text-center">Why LevelUp Consulting</h2>
        <p className="text-center text-gray-500 mt-2">
          What sets us apart from the rest.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {whyUs.map((w) => (
            <div
              key={w.slug}
              className="group relative bg-white rounded-2xl p-7 pt-10 text-center transition-all duration-300 hover:-translate-y-1"
              style={{ boxShadow: "0 8px 16px 10px rgba(0, 0, 0, 0.06)" }}
            >
              <span className="absolute top-4 right-5 text-4xl font-extrabold text-primary/10 group-hover:text-accent/20 transition-colors duration-300">
                {w.number}
              </span>

              <img
                src={getLogo(w.slug)}
                alt={`${w.title} icon`}
                className="w-24 h-24 sm:w-28 sm:h-28 mx-auto object-contain transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = logos["default"];
                }}
              />

              <h3 className="mt-5 font-bold text-lg text-primary">{w.title}</h3>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">{w.description}</p>
            </div>
          ))}
        </div>

        {/* Stats, restyled to match the reasons above: same card, same blob-icon
            language — the numbers (20+, 50K+, 60+, 800+) are kept front and center. */}
        <div className="mt-16">
          <h3 className="text-xl sm:text-2xl font-extrabold text-center text-primary">
            LevelUp, by the Numbers
          </h3>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
            {stats.map((s) => (
              <div
                key={s.slug}
                className="group bg-white rounded-2xl p-7 pt-8 text-center transition-all duration-300 hover:-translate-y-1"
                style={{ boxShadow: "0 8px 16px 10px rgba(0, 0, 0, 0.06)" }}
              >
                <img
                  src={getLogo(s.slug)}
                  alt={`${s.label} icon`}
                  className="w-20 h-20 sm:w-24 sm:h-24 mx-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = logos["default"];
                  }}
                />

                <p className="mt-4 text-3xl sm:text-4xl font-extrabold text-primary">
                  {s.value}
                </p>
                <p className="mt-1 text-gray-600 text-sm font-medium uppercase tracking-wide">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
