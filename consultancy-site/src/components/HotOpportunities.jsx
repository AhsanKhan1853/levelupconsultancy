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
    <section id="hot-opportunities" className="py-20">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="text-3xl font-extrabold text-center">🔥 Hot Opportunities</h2>
        <p className="text-center text-gray-500 mt-2">Latest visa and study openings, updated regularly.</p>

        {loading ? (
          <p className="text-center mt-12 text-gray-400">Loading...</p>
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