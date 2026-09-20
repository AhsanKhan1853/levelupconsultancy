import { Link } from "react-router-dom";
import { countries } from "../Data/siteData";

export default function CountriesSection() {
  const preview = countries.slice(0, 12);

  return (
    <section className="bg-oat py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-5 text-center">
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink">
          Countries We Deal With
        </h2>
        <p className="mt-3 text-ink/65 max-w-xl mx-auto">
          A growing network across Europe, Asia, and North America.
        </p>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-5 mt-10">
          {preview.map((c) => (
            <div key={c.code} className="flex flex-col items-center gap-2">
              <img
                src={`https://flagcdn.com/w160/${c.code}.png`}
                alt={c.name}
                className="w-14 h-14 rounded-full object-cover border-2 border-accent shadow-cozy"
              />
              <span className="text-sm font-semibold text-ink">{c.name}</span>
            </div>
          ))}
        </div>

        <Link
          to="/destinations"
          className="inline-block mt-10 bg-primary text-cream font-semibold px-8 py-3.5 rounded-full shadow-cozy hover:bg-accent transition-colors"
        >
          Check All Countries We Deal With
        </Link>
      </div>
    </section>
  );
}