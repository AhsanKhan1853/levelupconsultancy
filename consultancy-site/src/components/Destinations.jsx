import { useEffect, useState } from "react";
import { getCountries } from "../api/countries";

export default function Destinations() {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCountries()
      .then((data) => setDestinations(data.results ?? data))
      .catch(() => setDestinations([]))
      .finally(() => setLoading(false));
  }, []);

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
            {destinations.map((d) => (
              <div
                key={d.id}
                className="group bg-secondary hover:bg-primary rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105"
                style={{ boxShadow: "0 8px 16px -4px rgba(0, 0, 0, 0.15)" }}
              >
                {d.image_url && (
                  <img src={d.image_url} alt={d.name} className="w-full h-36 object-cover" />
                )}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary group-hover:text-white transition-colors duration-300">
                    {d.name}
                  </h3>
                  {d.description && (
                    <p className="text-sm text-gray-600 group-hover:text-white/90 mt-2 line-clamp-2 transition-colors duration-300">
                      {d.description}
                    </p>
                  )}
                  {d.universities_count && (
                    <p className="text-sm text-gray-600 group-hover:text-white/90 mt-2 transition-colors duration-300">
                      {d.universities_count}
                    </p>
                  )}
                  {d.starting_fee && (
                    <p className="text-sm text-gray-600 group-hover:text-white/90 transition-colors duration-300">
                      {d.starting_fee}
                    </p>
                  )}

                  <a
                    href="#contact"
                    className="inline-block mt-4 text-accent group-hover:text-white font-semibold text-sm transition-colors duration-300"
                  >
                    Learn More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
