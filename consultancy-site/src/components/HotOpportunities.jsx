import { useEffect, useState } from "react";
import { getHotOpportunities } from "../api/opportunities";
import OpportunityCard from "./OpportunityCard";

export default function HotOpportunities() {
  const [opportunities, setOpportunities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getHotOpportunities()
      .then((data) => setOpportunities(data.results ?? data))
      .catch(() => setOpportunities([]))
      .finally(() => setLoading(false));
  }, []);

  if (!loading && opportunities.length === 0) return null;

  return (
    <section
      id="opportunities"
      className="grain relative bg-oat py-20 sm:py-24 scroll-mt-24"
    >
      <div className="relative max-w-7xl mx-auto px-5">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl sm:text-5xl font-semibold text-ink leading-tight">
              Open right now
            </h2>
            <p className="mt-4 text-lg text-ink/65">
              Intakes and visa openings we're actively filing for. The list moves
              quickly — ask us before a deadline closes.
            </p>
          </div>
          <span className="flex items-center gap-2 bg-milk text-accent font-semibold text-sm px-4 py-2 rounded-full">
            <span className="w-2 h-2 rounded-full bg-accent" aria-hidden="true" />
            Updated regularly
          </span>
        </div>

        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6 mt-12" aria-busy="true">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="h-64 bg-cream/70 border border-rule rounded-pebble animate-pulse"
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6 mt-12">
            {opportunities.map((op) => (
              <OpportunityCard key={op.id} opportunity={op} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}