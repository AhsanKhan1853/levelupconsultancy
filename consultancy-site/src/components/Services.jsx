import { Link } from "react-router-dom";
import { services } from "../Data/siteData";
import { useAutoScroll } from "../hooks/useAutoScroll";

// Eagerly import every PNG in assets/services so we can look one up by slug
// at runtime, falling back to assets/services/default.png when missing.
const logoModules = import.meta.glob("../assets/services/*.png", { eager: true });

const logos = Object.fromEntries(
  Object.entries(logoModules).map(([path, mod]) => {
    const name = path.split("/").pop().replace(".png", "");
    return [name, mod.default];
  })
);

function getLogo(slug) {
  return logos[slug] || logos["default"];
}

function ServiceCard({ s, i }) {
  return (
    <Link
      to={`/services#${s.slug}`}
      className={`group shrink-0 w-[19rem] bg-slate hover:bg-primary hover:border-primary
        p-7 shadow-cozy hover:shadow-cozy-lg transition-all duration-300 ${
        i % 2 === 0 ? "rounded-pebble" : "rounded-pebble-alt"
      }`}
    >
      <div className="w-16 h-16 well group-hover:bg-cream/15 transition-colors duration-300">
        <img
          src={getLogo(s.slug)}
          alt=""
          aria-hidden="true"
          className="w-10 h-10 object-contain"
          draggable={false}
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = logos["default"];
          }}
        />
      </div>

      <h3 className="font-display mt-5 font-semibold text-xl text-primary group-hover:text-accent transition-colors duration-300 leading-snug">
        {s.title}
      </h3>
      <p className="mt-3 text-[0.95rem] text-ink/70 group-hover:text-cream/80 transition-colors duration-300">
        {s.desc}
      </p>
      <span className="inline-block mt-5 text-sm font-semibold text-accent group-hover:text-milk underline decoration-transparent group-hover:decoration-current underline-offset-4 transition-all duration-300">
        Read more
      </span>
    </Link>
  );
}

export default function Services() {
  const { ref, containerProps } = useAutoScroll({ speed: 0.5 });

  return (
    <section id="services" className="bg-cream py-20 sm:py-24 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-5">
        <div className="max-w-2xl">
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-ink leading-tight">
            Everything you'd otherwise do alone
          </h2>
          <p className="mt-4 text-lg text-ink/65">
            Pick the part you're stuck on. We handle the rest around it.
          </p>
        </div>
      </div>

      {/* Auto-scrolls on its own; drag with a mouse, swipe on touch, or
          scroll with a trackpad/wheel to take over manually at any time.
          Bleeds past the container so cards run off the edge of the page. */}
      <div
        ref={ref}
        {...containerProps}
        className="flex gap-6 mt-12 px-5 xl:px-[max(1.25rem,calc((100vw-80rem)/2))] overflow-x-auto pb-6 cursor-grab active:cursor-grabbing [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {services.map((s, i) => (
          <ServiceCard key={s.slug} s={s} i={i} />
        ))}
        {/* rendered a second time so the auto-scroll loop is seamless */}
        {services.map((s, i) => (
          <ServiceCard key={`${s.slug}-dup`} s={s} i={i} />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-5 text-center mt-8">
        <Link
          to="/services"
          className="inline-block bg-primary text-cream font-semibold px-8 py-3.5 rounded-full shadow-cozy hover:bg-accent hover:shadow-lamp transition-all duration-300"
        >
          View all services
        </Link>
      </div>
    </section>
  );
}