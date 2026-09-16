import { services } from "../Data/siteData";

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="text-3xl font-extrabold text-center">How We Support Students</h2>
        <p className="text-center text-gray-500 mt-2">Everything you need, in one place.</p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-white hover:bg-primary rounded-2xl p-6 transition-all duration-300 hover:scale-105"
              style={{ boxShadow: "0 8px 16px 10px rgba(0, 0, 0, 0.15)" }}
            >
              <h3 className="font-bold text-lg text-primary group-hover:text-white transition-colors duration-300">
                {s.title}
              </h3>
              <p className="mt-3 text-gray-600 group-hover:text-white/90 text-sm transition-colors duration-300">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}