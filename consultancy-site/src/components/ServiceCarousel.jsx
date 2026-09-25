import { studentServices } from "../Data/siteData";
import { useAutoScroll } from "../hooks/useAutoScroll";

// Eagerly import every PNG in assets/services so we can look one up by slug
// at runtime, falling back to assets/services/default.webp when missing.
// Same pattern used on the Services page (see components/Services.jsx).
const logoModules = import.meta.glob("../assets/services/*.webp", { eager: true });

const logos = Object.fromEntries(
  Object.entries(logoModules).map(([path, mod]) => {
    const name = path.split("/").pop().replace(".webp", "");
    return [name, mod.default];
  })
);

function getLogo(slug) {
  return logos[slug] || logos["default"];
}

function ServiceCarouselCard({ s, cardKey }) {
  return (
    <div
      key={cardKey}
      className="shrink-0 w-80 bg-slate rounded-2xl px-6 py-6 hover:shadow-[0_4px_14px_rgba(16,19,18,0.55)] transition"
      style={{ boxShadow: "0 4px 10px rgba(16,19,18,0.4)" }}
    >
      <img
        src={getLogo(s.slug)}
        alt={`${s.title} icon`}
        className="w-14 h-14 object-contain"
        draggable={false}
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = logos["default"];
        }}
      />
      <h3 className="font-bold text-smoke text-base mt-4">{s.title}</h3>
      <p className="text-sm text-ash mt-2 leading-relaxed">{s.desc}</p>
    </div>
  );
}

export default function ServiceCarousel() {
  const { ref, containerProps } = useAutoScroll({ speed: 0.5 });

  return (
    <section className="py-14 bg-coal">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-center text-smoke px-5">
        Our Complete Student Services
      </h2>

      {/* Auto-scrolls on its own; drag with a mouse, swipe on touch, or
          scroll with a trackpad/wheel to take over manually at any time. */}
      <div
        ref={ref}
        {...containerProps}
        className="flex gap-6 mt-10 overflow-x-auto px-5 pb-2 cursor-grab active:cursor-grabbing [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {studentServices.map((s, i) => (
          <ServiceCarouselCard key={s.title + "-" + i} s={s} cardKey={s.title + "-" + i} />
        ))}
        {/* rendered a second time so the auto-scroll loop is seamless */}
        {studentServices.map((s, i) => (
          <ServiceCarouselCard key={s.title + "-dup-" + i} s={s} cardKey={s.title + "-dup-" + i} />
        ))}
      </div>
    </section>
  );
}