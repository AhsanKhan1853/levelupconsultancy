import { useState } from "react";
import { HiChevronDown } from "react-icons/hi";

function AccordionSection({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border rounded-xl overflow-hidden mb-5 bg-white">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between bg-primary text-white font-semibold px-4 py-3 text-left"
      >
        {title}
        <HiChevronDown className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="divide-y">{children}</div>}
    </div>
  );
}

function SelectRow({ label, value, onChange, options }) {
  return (
    <div className="px-4 py-3">
      <label className="block text-xs text-gray-400 mb-1">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full text-sm text-gray-700 bg-transparent focus:outline-none"
      >
        <option value="">Any</option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
}

function TextRow({ label, value, onChange, placeholder }) {
  return (
    <div className="px-4 py-3">
      <label className="block text-xs text-gray-400 mb-1">{label}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full text-sm text-gray-700 bg-transparent focus:outline-none placeholder:text-gray-300"
      />
    </div>
  );
}

const QUALIFICATION_OPTIONS = [
  { value: "undergrad", label: "Undergraduate" },
  { value: "postgrad", label: "Postgraduate" },
  { value: "phd", label: "PhD / Research" },
];

const STUDY_MODE_OPTIONS = [
  { value: "on_campus", label: "On Campus" },
  { value: "online", label: "Online" },
  { value: "hybrid", label: "Hybrid" },
];

const STUDY_FORMAT_OPTIONS = [
  { value: "full_time", label: "Full-time" },
  { value: "part_time", label: "Part-time" },
];

const INSTITUTE_TYPE_OPTIONS = [
  { value: "public", label: "Public" },
  { value: "private", label: "Private" },
];

export default function OpportunityFilters({ filters, setFilter, disciplines, countries }) {
  return (
    <aside className="w-full lg:w-72 shrink-0">
      <AccordionSection title="Course Information" defaultOpen>
        <SelectRow
          label="Level"
          value={filters.qualification_level}
          onChange={(v) => setFilter("qualification_level", v)}
          options={QUALIFICATION_OPTIONS}
        />
        <SelectRow
          label="Discipline"
          value={filters["discipline__slug"]}
          onChange={(v) => setFilter("discipline__slug", v)}
          options={disciplines.map((d) => ({ value: d.slug, label: d.name }))}
        />
        <TextRow
          label="Specialization"
          value={filters["specialization__icontains"]}
          onChange={(v) => setFilter("specialization__icontains", v)}
          placeholder="e.g. Accounting"
        />
        <TextRow
          label="Language"
          value={filters["language__icontains"]}
          onChange={(v) => setFilter("language__icontains", v)}
          placeholder="e.g. English"
        />
        <SelectRow
          label="Study Mode"
          value={filters.study_mode}
          onChange={(v) => setFilter("study_mode", v)}
          options={STUDY_MODE_OPTIONS}
        />
        <SelectRow
          label="Study Format"
          value={filters.study_format}
          onChange={(v) => setFilter("study_format", v)}
          options={STUDY_FORMAT_OPTIONS}
        />
        <TextRow
          label="Duration"
          value={filters["duration__icontains"]}
          onChange={(v) => setFilter("duration__icontains", v)}
          placeholder="e.g. 4 year"
        />
        <TextRow
          label="Intakes"
          value={filters["intakes__icontains"]}
          onChange={(v) => setFilter("intakes__icontains", v)}
          placeholder="e.g. September"
        />
      </AccordionSection>

      <AccordionSection title="Tuition Fee">
        <div className="px-4 py-4 text-sm text-gray-400 flex items-center gap-2">
          Fee range filtering
          <span className="bg-yellow-100 text-yellow-700 text-xs px-2 py-1 rounded-full">coming soon</span>
        </div>
      </AccordionSection>

      <AccordionSection title="About This University">
        <SelectRow
          label="Institute Type"
          value={filters["university__institute_type"]}
          onChange={(v) => setFilter("university__institute_type", v)}
          options={INSTITUTE_TYPE_OPTIONS}
        />
        <SelectRow
          label="Location"
          value={filters["university__country__slug"]}
          onChange={(v) => setFilter("university__country__slug", v)}
          options={countries.map((c) => ({ value: c.slug, label: c.name }))}
        />
        <TextRow
          label="Campus"
          value={filters["university__campus__icontains"]}
          onChange={(v) => setFilter("university__campus__icontains", v)}
          placeholder="e.g. Main Campus"
        />
      </AccordionSection>
    </aside>
  );
}