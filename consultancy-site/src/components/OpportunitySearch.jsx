import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { getCountries } from "../api/countries";
import { getCourses } from "../api/courses";

const TABS = ["Courses", "Universities", "Scholarships"];

export default function OpportunitySearch() {
  const [tab, setTab] = useState("Courses");
  const [course, setCourse] = useState("");
  const [qualification, setQualification] = useState("");
  const [country, setCountry] = useState("");
  const [countries, setCountries] = useState([]);
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getCountries()
      .then((data) => setCountries(data.results ?? data))
      .catch(() => setCountries([]));
    getCourses()
      .then((data) => setCourses(data.results ?? data))
      .catch(() => setCourses([]));
  }, []);

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (course) params.set("discipline__slug", course);
    if (qualification) params.set("qualification_level", qualification);
    if (country) params.set("country__slug", country);
    navigate(`/opportunities?${params.toString()}`);
  };

  return (
    // The band matches the hill at the foot of the hero, so the card rests in
    // it rather than floating over a visible seam.
    <div className="bg-oat">
      <div className="relative -mt-14 z-30 max-w-5xl mx-auto px-4">
        <div className="bg-accent rounded-pebble shadow-cozy-lg border border-rule p-6 sm:p-9">
          <div className="flex flex-wrap items-center gap-x-1 gap-y-3 pb-4 mb-7 border-b border-rule">
            {TABS.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`font-semibold whitespace-nowrap px-4 py-2 rounded-full transition ${
                  tab === t
                    ? "bg-primary text-cream shadow-cozy"
                    : "text-ink/55 hover:text-primary hover:bg-oat"
                }`}
              >
                {t}
              </button>
            ))}
            <span className="ml-auto flex items-center gap-2 text-ink/45 text-sm whitespace-nowrap">
              Intelligent search
              <span className="bg-milk text-accent text-xs font-semibold px-2.5 py-1 rounded-full">
                coming soon
              </span>
            </span>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            <label className="grid gap-1.5">
              <span className="text-sm text-ink/60">Course</span>
              <select
                className="field"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
              >
                <option value="">Any course</option>
                {courses.map((c) => (
                  <option key={c.id} value={c.slug}>
                    {c.name}
                  </option>
                ))}
              </select>
            </label>

            <label className="grid gap-1.5">
              <span className="text-sm text-ink/60">Qualification</span>
              <select
                className="field"
                value={qualification}
                onChange={(e) => setQualification(e.target.value)}
              >
                <option value="">Any level</option>
                <option value="undergrad">Undergraduate</option>
                <option value="postgrad">Postgraduate</option>
                <option value="phd">PhD / Research</option>
              </select>
            </label>

            <label className="grid gap-1.5">
              <span className="text-sm text-ink/60">Destination</span>
              <select
                className="field"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              >
                <option value="">Anywhere</option>
                {countries.map((c) => (
                  <option key={c.id} value={c.slug}>
                    {c.name}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-7">
            <button
              onClick={handleSearch}
              className="flex items-center gap-2.5 bg-accent text-white px-9 py-3.5 rounded-full font-semibold shadow-lamp hover:bg-primary transition-colors duration-300"
            >
              <FaSearch className="text-sm" /> Find opportunities
            </button>
            <span className="text-sm text-ink/50">
              Or leave it blank and browse everything.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}