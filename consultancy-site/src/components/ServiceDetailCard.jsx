export default function ServiceDetailCard({ service }) {
  return (
    <div id={service.slug} className="scroll-mt-28 border-2 border-primary/10 rounded-2xl overflow-hidden bg-white">
      <div className="bg-primary px-6 py-4">
        <h3 className="text-accent font-bold text-lg sm:text-xl">{service.title}</h3>
      </div>
      <div className="p-6">
        <p className="text-gray-600 text-sm">{service.detail}</p>
        <div className="mt-4 space-y-3">
          {service.points.map((p) => (
            <div key={p.title} className="flex gap-3">
              <span className="shrink-0 w-5 h-5 rounded-full bg-primary text-white text-xs flex items-center justify-center mt-0.5">
                ✓
              </span>
              <div>
                <p className="font-semibold text-primary text-sm">{p.title}</p>
                <p className="text-gray-500 text-sm">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}