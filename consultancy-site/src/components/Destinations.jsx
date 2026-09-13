import { destinations } from "../data/siteData";

export default function Destinations() {
  return (
    <section id="destinations" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="text-3xl font-extrabold text-center">Choose Your Study Destination</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
          {destinations.map((d) => (
            <div
              key={d.country}
              className="group bg-secondary hover:bg-primary rounded-2xl p-6 transition-all duration-300 hover:scale-105"
              style={{ boxShadow: "0 8px 16px -4px rgba(0, 0, 0, 0.15)" }}
            >
              <h3 className="text-xl font-bold text-primary group-hover:text-white transition-colors duration-300">
                {d.country}
              </h3>
              <p className="text-sm text-gray-600 group-hover:text-white/90 mt-2 transition-colors duration-300">
                {d.unis}
              </p>
              <p className="text-sm text-gray-600 group-hover:text-white/90 transition-colors duration-300">
                {d.fee}
              </p>
              
                <a href="#contact"
                className="inline-block mt-4 text-accent group-hover:text-white font-semibold text-sm transition-colors duration-300">
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}