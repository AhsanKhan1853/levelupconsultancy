import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { opportunities } from "../Data/opportunitiesData";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function OpportunitiesPage() {
  const [searchParams] = useSearchParams();

  const filteredOpportunities = useMemo(() => {
    const disciplineSlug = searchParams.get("discipline__slug");
    const qualificationLevel = searchParams.get("qualification_level");
    const isHot = searchParams.get("is_hot");
    const search = searchParams.get("search")?.toLowerCase();

    return opportunities.filter((op) => {
      if (disciplineSlug && op.discipline?.slug !== disciplineSlug) return false;
      if (
        qualificationLevel &&
        !op.qualification_level_display
          ?.toLowerCase()
          .includes(qualificationLevel.toLowerCase())
      )
        return false;
      if (isHot === "true" && !op.is_hot) return false;
      if (
        search &&
        !`${op.title} ${op.university_name} ${op.specialization}`
          .toLowerCase()
          .includes(search)
      )
        return false;
      return true;
    });
  }, [searchParams]);

  return (
    <div>
      <Navbar />
      <section className="pt-32 pb-20 max-w-7xl mx-auto px-5">
        <h1 className="text-3xl font-extrabold">All Opportunities</h1>
        <p className="text-gray-500 mt-2">{filteredOpportunities.length} opportunities found</p>

        {filteredOpportunities.length === 0 ? (
          <p className="mt-10 text-gray-400">No opportunities match your filters yet.</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6 mt-10">
            {filteredOpportunities.map((op) => (
              <OpportunityCard key={op.id} opportunity={op} />
            ))}
          </div>
        )}
      </section>
      <Footer />
    </div>
  );
}
