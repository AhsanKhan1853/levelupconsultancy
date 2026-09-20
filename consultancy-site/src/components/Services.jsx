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

function ServiceCard({ s }) {
  return (
    <Link
      to={`/services#${s.slug}`}
      className="group shrink-0 w-72 bg-white hover:bg-primary rounded-2xl p-6 transition-all duration-300"
      style={{ boxShadow: "0 8px 16px 10px rgba(0, 0, 0, 0.15)" }}
    >
      <img
        src={getLogo(s.slug)}
        alt={`${s.title} icon`}
        className="w-16 h-16 object-contain"
        draggable={false}
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = logos["default"];
        }}
      />
      <h3 className="mt-4 font-bold text-lg text-primary group-hover:text-white transition-colors duration-300">
        {s.title}
      </h3>
      <p className="mt-3 text-gray-600 group-hover:text-white/90 text-sm transition-colors duration-300">
        {s.desc}
      </p>
      <span className="inline-block mt-4 text-sm font-semibold text-accent group-hover:text-white transition-colors duration-300">
        Learn more &rarr;
      </span>
    </Link>
  );
}

export default function Services() {
  const { ref, containerProps } = useAutoScroll({ speed: 0.5 });

  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="text-3xl font-extrabold text-center">How We Support Students</h2>
        <p className="text-center text-gray-500 mt-2">Everything you need, in one place.</p>

        {/* Auto-scrolls on its own; drag with a mouse, swipe on touch, or
            scroll with a trackpad/wheel to take over manually at any time. */}
        <div
          ref={ref}
          {...containerProps}
          className="flex gap-6 mt-12 overflow-x-auto pb-2 cursor-grab active:cursor-grabbing [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {services.map((s) => (
            <ServiceCard key={s.slug} s={s} />
          ))}
          {/* rendered a second time so the auto-scroll loop is seamless */}
          {services.map((s) => (
            <ServiceCard key={`${s.slug}-dup`} s={s} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-block bg-accent text-white font-semibold px-8 py-3 rounded-full hover:opacity-90 transition"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}