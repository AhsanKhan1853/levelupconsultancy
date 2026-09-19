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
    <section id="destinations" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="text-3xl font-extrabold text-center">Choose Your Study Destination</h2>

        {loading ? (
          <p className="text-center text-gray-400 mt-10">Loading destinations...</p>
        ) : destinations.length === 0 ? (
          <p className="text-center text-gray-400 mt-10">No destinations available yet.</p>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
            {destinations.map((d) => {
              const isActive = activeId === d.id;
              return (
                <a
                  key={d.id}
                  href="#contact"
                  onClick={(e) => handleCardClick(e, d.id)}
                  className="group relative block aspect-[8.5/10] rounded-2xl overflow-hidden border-solid border-[6px] border-accent transition-transform duration-300 hover:scale-105 focus:outline-none focus-visible:ring-4 focus-visible:ring-accent/50"
                  style={{ boxShadow: "0 8px 16px -4px rgba(0, 0, 0, 0.2)" }}
                >
                  {/* background image (or a themed fallback if none is set) */}
                  {d.image_url ? (
                    <img
                      src={d.image_url}
                      alt={d.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent" />
                  )}

                  {/* gradient so the name stays legible over any photo */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                  {/* country name, always visible */}
                  <h3
                    className={`absolute left-4 right-4 bottom-4 text-white text-xl font-bold drop-shadow transition-opacity duration-300 ${
                      isActive ? "opacity-0" : "opacity-100 group-hover:opacity-0"
                    }`}
                  >
                    {d.name}
                  </h3>

                  {/* details overlay, shown on hover (desktop) or tap (touch) */}
                  <div
                    className={`absolute inset-0 bg-primary/95 p-6 flex flex-col justify-center transition-opacity duration-300 ${
                      isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto"
                    }`}
                  >
                    <h3 className="text-xl font-bold text-white">{d.name}</h3>

                    {d.description && (
                      <p className="text-sm text-white/90 mt-2 line-clamp-3">{d.description}</p>
                    )}
                    {d.universities_count && (
                      <p className="text-sm text-white/90 mt-2">{d.universities_count}</p>
                    )}
                    {d.starting_fee && (
                      <p className="text-sm text-white/90">{d.starting_fee}</p>
                    )}

                    <span className="inline-block mt-4 text-accent font-semibold text-sm">
                      Learn More →
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