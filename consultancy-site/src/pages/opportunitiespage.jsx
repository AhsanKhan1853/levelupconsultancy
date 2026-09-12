import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getOpportunities } from "../api/opportunities";
import OpportunityCard from "../components/OpportunityCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function OpportunitiesPage() {
  const [searchParams] = useSearchParams();
  const [opportunities, setOpportunities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const params = Object.fromEntries(searchParams.entries());
    setLoading(true);
    getOpportunities(params)
      .then((data) => setOpportunities(data.results ?? data))
      .catch(() => setOpportunities([]))
      .finally(() => setLoading(false));
  }, [searchParams]);

  return (
    <div>
      <Navbar />
      <section className="pt-32 pb-20 max-w-7xl mx-auto px-5">
        <h1 className="text-3xl font-extrabold">All Opportunities</h1>
        <p className="text-gray-500 mt-2">{opportunities.length} opportunities found</p>

        {loading ? (
          <p className="mt-10 text-gray-400">Loading...</p>
        ) : opportunities.length === 0 ? (
          <p className="mt-10 text-gray-400">No opportunities match your filters yet.</p>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
            {opportunities.map((op) => (
              <OpportunityCard key={op.id} opportunity={op} />
            ))}
          </div>
        )}
      </section>
      <Footer />
    </div>
  );
}