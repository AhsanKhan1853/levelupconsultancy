import { Link } from "react-router-dom";
import { services } from "../Data/siteData";
import { useAutoScroll } from "../hooks/useAutoScroll";

const logoModules = import.meta.glob("../assets/services/*.png", { eager: true });
const bgModules = import.meta.glob("../assets/services/bg/*.jpg", { eager: true });

const logos = Object.fromEntries(
  Object.entries(logoModules).map(([path, mod]) => {
    const name = path.split("/").pop().replace(".png", "");
    return [name, mod.default];
  })
);

const bgImages = Object.fromEntries(
  Object.entries(bgModules).map(([path, mod]) => {
    const name = path.split("/").pop().replace(".jpg", "");
    return [name, mod.default];
  })
);

function getLogo(slug) {
  return logos[slug] || logos["default"];
}

function getBg(slug) {
  return bgImages[slug] || null;
}

function ServiceCard({ s }) {
  const bg = getBg(s.slug);

  return (
    <Link
      to={`/services#${s.slug}`}
      className="group relative shrink-0 w-[19rem] h-[22rem] rounded-2xl overflow-hidden
        shadow-lg hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.4)] transition-all duration-300 hover:-translate-y-1"
    >
      {bg && (
        <img
          src={bg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          draggable={false}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-night/95 via-night/70 to-night/30" />

      <div className="relative h-full flex flex-col justify-end p-6">
        <div className="w-14 h-14 rounded-xl bg-accent/15 backdrop-blur flex items-center justify-center mb-4 group-hover:bg-accent/25 transition-colors duration-300">
          <img
            src={getLogo(s.slug)}
            alt=""
            aria-hidden="true"
            className="w-8 h-8 object-contain"
            draggable={false}
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = logos["default"];
            }}
          />
        </div>

        <h3 className="font-display font-semibold text-xl text-smoke leading-snug">
          {s.title}
        </h3>
        <p className="mt-2 text-[0.9rem] text-ash leading-relaxed line-clamp-2">
          {s.desc}
        </p>
        <span className="inline-block mt-4 text-sm font-semibold text-accent group-hover:text-amber transition-colors duration-300">
          Read more →
        </span>
      </div>
    </Link>
  );
}

export default function Services() {
  const { ref, containerProps } = useAutoScroll({ speed: 0.5 });

  return (
    <section id="services" className="relative bg-slate py-20 sm:py-24 scroll-mt-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5">
        <div className="max-w-2xl">
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-smoke leading-tight">
            Everything you'd otherwise do alone
          </h2>
          <p className="mt-4 text-lg text-ash">
            Pick the part you're stuck on. We handle the rest around it.
          </p>
        </div>
      </div>

      <div
        ref={ref}
        {...containerProps}
        className="flex gap-6 mt-12 px-5 xl:px-[max(1.25rem,calc((100vw-80rem)/2))] overflow-x-auto pb-6 cursor-grab active:cursor-grabbing [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {services.map((s) => (
          <ServiceCard key={s.slug} s={s} />
        ))}
        {services.map((s) => (
          <ServiceCard key={`${s.slug}-dup`} s={s} />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-5 text-center mt-8">
        <Link
          to="/services"
          className="inline-block bg-emerald-600 text-white font-semibold px-8 py-3.5 rounded-full shadow-lg hover:bg-emerald-500 hover:shadow-[0_0_25px_-5px_rgba(16,185,129,0.5)] transition-all duration-300"
        >
          View all services
        </Link>
      </div>
    </section>
  );
}