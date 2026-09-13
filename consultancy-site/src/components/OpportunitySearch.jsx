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
    <div className="relative -mt-16 z-30 max-w-5xl mx-auto px-4">
      <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
        {/* Tabs */}
        <div className="flex gap-6 border-b pb-3 mb-6 overflow-x-auto">
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`font-medium whitespace-nowrap pb-2 border-b-2 transition ${
                tab === t ? "text-primary border-primary" : "text-gray-500 border-transparent"
              }`}
            >
              {t}
            </button>
          ))}
          <span className="ml-auto flex items-center gap-2 text-gray-400 text-sm whitespace-nowrap">
            Intelligent Search
            <span className="bg-yellow-100 text-yellow-700 text-xs px-2 py-1 rounded-full">
              coming soon
            </span>
          </span>
        </div>

        {/* Filters */}
        <div className="grid sm:grid-cols-3 gap-4">
          <select
            className="border rounded-lg p-3 text-gray-700"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          >
            <option value="">Select Course</option>
            {courses.map((c) => (
              <option key={c.id} value={c.slug}>
                {c.name}
              </option>
            ))}
          </select>

          <select
            className="border rounded-lg p-3 text-gray-700"
            value={qualification}
            onChange={(e) => setQualification(e.target.value)}
          >
            <option value="">Select Qualification</option>
            <option value="undergrad">Undergraduate</option>
            <option value="postgrad">Postgraduate</option>
            <option value="phd">PhD / Research</option>
          </select>

          <select
            className="border rounded-lg p-3 text-gray-700"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            <option value="">Select Location</option>
            {countries.map((c) => (
              <option key={c.id} value={c.slug}>
                {c.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex justify-center mt-6">
          <button
            onClick={handleSearch}
            className="flex items-center gap-2 bg-accent text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition"
          >
            <FaSearch /> Search
          </button>
        </div>
      </div>
    </div>
  );
}