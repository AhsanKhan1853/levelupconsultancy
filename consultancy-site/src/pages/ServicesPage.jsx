import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { services } from "../Data/siteData";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTABanner from "../components/CTABanner";
import servicesHero from "../assets/services-hero.png";

// Eagerly import every PNG in assets/services so we can look one up by slug
// at runtime. If a service doesn't have a matching file, we fall back to
// assets/services/default.png.
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

export default function ServicesPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "center" }), 0);
      }
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [location]);

  return (
    <div>
      <Navbar />

      <section className="pt-32 pb-16 bg-primary/5">
        <div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-2 gap-10 items-center">
          <div className="text-center lg:text-left">
            <span className="inline-block text-accent font-semibold tracking-wide uppercase text-sm">
              What We Offer
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold mt-2 text-primary">
              Our Services
            </h1>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto lg:mx-0">
              Everything you need to study abroad, handled by one dedicated team —
              from choosing a university to settling into your new city.
            </p>
          </div>
          <img
            src={servicesHero}
            alt="Consultant guiding a student through study-abroad growth and opportunities"
            className="w-full max-w-lg mx-auto"
          />
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((s) => (
              <div
                key={s.slug}
                id={s.slug}
                className="group bg-white rounded-2xl p-7 sm:p-8 flex gap-5 sm:gap-6 items-start transition-all duration-300 hover:-translate-y-1 scroll-mt-28"
                style={{ boxShadow: "0 8px 16px 10px rgba(0, 0, 0, 0.06)" }}
              >
                <div className="shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-accent/10 transition-colors duration-300">
                  <img
                    src={getLogo(s.slug)}
                    alt={`${s.title} icon`}
                    className="w-9 h-9 sm:w-11 sm:h-11 object-contain"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = logos["default"];
                    }}
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg sm:text-xl text-primary">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-gray-600 text-sm sm:text-base leading-relaxed">
                    {s.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </div>
  );
}