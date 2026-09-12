import { stats } from "../data/siteData";

export default function Stats() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-5 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div
            key={s.label}
            className="group bg-accent hover:bg-primary rounded-2xl p-6 sm:p-8 text-center transition-colors duration-300"
            style={{ boxShadow: "0 8px 16px 10px rgba(0, 0, 0, 0.15)" }}
          >
            <p className="text-4xl sm:text-5xl font-extrabold text-primary group-hover:text-accent transition-colors duration-300">
              {s.value}
            </p>
            <p className="mt-3 text-gray-600 group-hover:text-accent font-medium text-sm sm:text-base transition-colors duration-300">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}