import { studentServices } from "../Data/siteData";

export default function ServiceCarousel() {
  const loop = [...studentServices, ...studentServices];

  return (
    <section className="py-14 bg-gray-50 overflow-hidden">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-center text-primary px-5">
        Our Complete Student Services
      </h2>
      

      <div className="flex gap-6 animate-scroll w-max mt-10">
        {loop.map((s, i) => (
          <div
            key={s.title + "-" + i}
            className="shrink-0 w-80 bg-white rounded-2xl px-6 py-6 hover:shadow-md transition"
            style={{ boxShadow: "0 4px 10px rgba(0,0,0,0.05)" }}
          >
            <h3 className="font-bold text-primary text-base">{s.title}</h3>
            <p className="text-sm text-gray-500 mt-2 leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}