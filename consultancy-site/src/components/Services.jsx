import { services } from "../data/siteData";

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="text-3xl font-extrabold text-center">How We Support Students</h2>
        <p className="text-center text-gray-500 mt-2">Everything you need, in one place.</p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {services.map((s) => (
            <div key={s.title} className="border rounded-xl p-6 hover:shadow-lg transition">
              <h3 className="font-bold text-lg text-primary">{s.title}</h3>
              <p className="mt-3 text-gray-600 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}