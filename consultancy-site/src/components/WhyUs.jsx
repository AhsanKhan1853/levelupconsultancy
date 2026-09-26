import { whyUs, stats } from "../Data/siteData";

const logoModules = import.meta.glob("../assets/why-us/*.webp", { eager: true });

const logos = Object.fromEntries(
  Object.entries(logoModules).map(([path, mod]) => {
    const name = path.split("/").pop().replace(".webp", "");
    return [name, mod.default];
  })
);

function getLogo(slug) {
  return logos[slug] || logos["default"];
}

export default function WhyUs() {
  return (
    <section id="why-us" className="relative bg-night py-20 sm:py-24 scroll-mt-24 overflow-hidden">
      {/* soft glow accents, consistent with Hero */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-[26rem] h-[26rem] rounded-full bg-accent/15 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-[26rem] h-[26rem] rounded-full bg-emerald-500/15 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5">
        <div className="max-w-2xl">
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-smoke leading-tight">
            Why students trust us with their future
          </h2>
          <p className="mt-4 text-lg text-ash">
            Real guidance, honest advice, and support that doesn't stop
            once your application is submitted.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7 mt-14">
          {whyUs.map((w) => (
            <div
              key={w.slug}
              className="group relative bg-slate/60 backdrop-blur border border-rule rounded-2xl p-7
                shadow-lg hover:border-accent/60 hover:-translate-y-1 hover:shadow-[0_0_30px_-5px_rgba(245,166,35,0.35)]
                transition-all duration-300"
            >
              <div className="relative w-16 h-16 rounded-xl bg-goldsoft ring-1 ring-accent/30 flex items-center justify-center group-hover:ring-accent/60 transition-all duration-300">
                <img
                src={getLogo(w.slug)}
                alt=""
                aria-hidden="true"
                className="w-9 h-9 object-contain transition-transform duration-300 group-hover:scale-110"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = logos["default"];
                }}
              />
            </div>      

              <h3 className="font-display mt-6 font-semibold text-lg text-smoke leading-snug">
                {w.title}
              </h3>
              <p className="mt-3 text-[0.95rem] text-ash leading-relaxed">
                {w.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats ribbon — emerald, distinct from the cards above */}
{/* Stats ribbon — emerald, distinct from the cards above */}
<div className="mt-16 bg-accent rounded-3xl px-6 sm:px-10 py-10 shadow-[0_0_40px_-10px_rgba(204,135,24,0.5)]">
  <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 divide-gray lg:divide-x">
    {stats.map((s) => (
      <div key={s.slug} className="flex flex-col items-center text-center px-2">
        <div className="w-14 h-14 rounded-xl bg-goldsoft ring-1 ring-white/20 flex items-center justify-center shadow-[0_4px_14px_-4px_rgba(51,41,26,0.5)]">
          <img
            src={getLogo(s.slug)}
            alt=""
            aria-hidden="true"
            className="w-8 h-8 object-contain"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = logos["default"];
            }}
          />
        </div>
        <p className="font-display mt-3 text-4xl sm:text-5xl font-bold text-white leading-none">
          {s.value}
        </p>
        <p className="mt-2 text-sm text-emerald-50">{s.label}</p>
      </div>
    ))}
  </div>
</div>
      </div>
    </section>
  );
}