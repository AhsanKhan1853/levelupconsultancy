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
    <section id="why-us" className="grain relative bg-oat py-20 sm:py-24 scroll-mt-24">
      <div className="relative max-w-7xl mx-auto px-5">
        <div className="max-w-2xl">
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-ink leading-tight">
            Why families keep sending us their kids
          </h2>
          <p className="mt-4 text-lg text-ink/65">
            Four things we do differently — and they're the reason most of our
            students arrive through a cousin, a neighbour, or an older sibling
            we helped first.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7 mt-14">
          {whyUs.map((w, i) => (
            <div
              key={w.slug}
              className={`group bg-slate p-7 shadow-cozy hover:shadow-cozy-lg hover:-translate-y-1 transition-all duration-300 ${
                i % 2 === 0 ? "rounded-pebble" : "rounded-pebble-alt"
              }`}
            >
              <div className="w-[4.5rem] h-[4.5rem] well">
                <img
                  src={getLogo(w.slug)}
                  alt=""
                  aria-hidden="true"
                  className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = logos["default"];
                  }}
                />
              </div>

              <h3 className="font-display mt-6 font-semibold text-xl text-primary leading-snug">
                {w.title}
              </h3>
              <p className="mt-3 text-[0.95rem] text-ink/70 leading-relaxed">
                {w.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats, kept as a single warm ribbon rather than four more cards —
            they're a footnote to the reasons above, not a rival to them. */}
        <div className="mt-16 bg-slate rounded-pebble px-6 sm:px-10 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 divide-rule lg:divide-x">
            {stats.map((s) => (
              <div key={s.slug} className="flex flex-col items-center text-center px-2">
                <img
                  src={getLogo(s.slug)}
                  alt=""
                  aria-hidden="true"
                  className="w-14 h-14 object-contain"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = logos["default"];
                  }}
                />
                <p className="font-display mt-3 text-4xl sm:text-5xl font-semibold text-primary leading-none">
                  {s.value}
                </p>
                <p className="mt-2 text-sm text-ink/60">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}