import { stats } from "../data/siteData";

export default function Stats() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-5 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="text-4xl font-extrabold text-primary">{s.value}</p>
            <p className="mt-2 text-gray-600">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}