import { testimonials } from "../data/siteData";

export default function Testimonials() {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="text-3xl font-extrabold text-center">Experiences That Speak for Us</h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white/10 rounded-xl p-6">
              <p className="italic text-blue-100">"{t.quote}"</p>
              <p className="mt-4 font-bold">{t.name}</p>
              <p className="text-sm text-blue-200">{t.country}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}