import { destinations } from "../data/siteData";

export default function Destinations() {
  return (
    <section id="destinations" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="text-3xl font-extrabold text-center">Choose Your Study Destination</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
          {destinations.map((d) => (
            <div key={d.country} className="bg-white rounded-xl shadow p-6 hover:-translate-y-1 transition">
              <h3 className="text-xl font-bold text-primary">{d.country}</h3>
              <p className="text-sm text-gray-600 mt-2">{d.unis}</p>
              <p className="text-sm text-gray-600">{d.fee}</p>
              <a href="#contact" className="inline-block mt-4 text-accent font-semibold text-sm">
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}