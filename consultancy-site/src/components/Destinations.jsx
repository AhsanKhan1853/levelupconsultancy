import { useEffect, useState } from "react";
import { getCountries } from "../api/countries";

export default function Destinations() {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    getCountries()
      .then((data) => setDestinations(data.results ?? data))
      .catch(() => setDestinations([]))
      .finally(() => setLoading(false));
  }, []);

  // On touch devices there's no hover, so the first tap reveals the details
  // overlay instead of navigating; a second tap (or tapping "Learn More")
  // follows through, just like a normal link.
  const handleCardClick = (e, id) => {
    const supportsHover = window.matchMedia("(hover: hover)").matches;
    if (!supportsHover && activeId !== id) {
      e.preventDefault();
      setActiveId(id);
    }
  };

  return (
    <section id="destinations" className="bg-cream py-20 sm:py-24 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-5">
        <div className="max-w-2xl">
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-ink leading-tight">
            Where do you want to wake up next year?
          </h2>
          <p className="mt-4 text-lg text-ink/65">
            Sixty-odd countries, and a counselor who has placed students in each
            one. Hover a card to see what studying there actually costs.
          </p>
        </div>

        {loading ? (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-7 mt-14" aria-busy="true">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="aspect-[8.5/10] bg-oat animate-pulse" />
            ))}
          </div>
        ) : destinations.length === 0 ? (
          <div className="mt-14 stitched rounded-pebble bg-oat px-8 py-14 text-center">
            <p className="font-display text-2xl text-primary">Destinations are on their way</p>
            <p className="mt-3 text-ink/65">
              We're adding countries to this page. Message us and we'll tell you
              what's open right now.
            </p>
            <a
              href="#contact"
              className="inline-block mt-6 bg-primary text-cream font-semibold px-7 py-3 rounded-full shadow-cozy hover:bg-accent transition-colors"
            >
              Ask a counselor
            </a>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-7 mt-14">
            {destinations.map((d) => {
              const isActive = activeId === d.id;
              return (
                <a
                  key={d.id}
                  href="#contact"
                  onClick={(e) => handleCardClick(e, d.id)}
                  className="group relative block aspect-[8.5/10] rounded-lg overflow-hidden
                             border-[7px] border-accent shadow-cozy hover:shadow-cozy-lg
                             hover:-translate-y-1.5 transition-all duration-300"
                >
                  {/* background image (or a themed fallback if none is set) */}
                  {d.image_url ? (
                    <img
                      src={d.image_url}
                      alt={d.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent" />
                  )}

                  {/* gradient so the name stays legible over any photo */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#03361A]/90 via-[#03361A]/15 to-transparent" />

                  {/* country name, always visible */}
                  <h3
                    className={`font-display absolute left-5 right-5 bottom-5 text-cream text-2xl font-semibold drop-shadow transition-opacity duration-300 ${
                      isActive ? "opacity-0" : "opacity-100 group-hover:opacity-0"
                    }`}
                  >
                    {d.name}
                  </h3>

                  {/* details overlay, shown on hover (desktop) or tap (touch) */}
                  <div
                    className={`absolute inset-0 bg-primary/95 px-6 py-7 flex flex-col justify-center transition-opacity duration-300 ${
                      isActive
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto"
                    }`}
                  >
                    <h3 className="font-display text-2xl font-semibold text-cream">{d.name}</h3>
                    <span className="block w-10 h-px bg-accent mt-3 mb-3" aria-hidden="true" />

                    {d.description && (
                      <p className="text-sm text-cream/85 line-clamp-3 leading-relaxed">
                        {d.description}
                      </p>
                    )}
                    {d.universities_count && (
                      <p className="text-sm text-cream/85 mt-2">{d.universities_count}</p>
                    )}
                    {d.starting_fee && (
                      <p className="text-sm text-milk font-semibold mt-1">{d.starting_fee}</p>
                    )}

                    <span className="inline-block mt-5 text-milk font-semibold text-sm underline decoration-accent decoration-2 underline-offset-4">
                      Talk to us about {d.name}
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}