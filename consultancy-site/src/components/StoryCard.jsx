export default function StoryCard({ story, index = 0 }) {
  const { name, initials, country, university, program, quote } = story;

  return (
    <div
      className={`group relative bg-slate/60 backdrop-blur border border-rule border-dashed p-7 pt-9
        transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_0_30px_-5px_rgba(245,166,35,0.3)]
        ${index % 2 === 0 ? "rounded-pebble" : "rounded-pebble-alt"}`}
    >
      <span
        aria-hidden="true"
        className="font-display absolute top-1 left-6 text-[4.5rem] leading-none text-accent/20 select-none"
      >
        &ldquo;
      </span>

      <div className="relative">
        <p className="text-sm text-ash leading-relaxed min-h-[5.5rem]">{quote}</p>
      </div>

      <div className="flex items-center gap-3.5 mt-6 pt-5 border-t border-dashed border-rule">
        <div className="w-12 h-12 rounded-full bg-accent/10 border-2 border-dashed border-rule flex items-center justify-center shrink-0">
          <span className="text-accent font-display font-semibold text-sm">{initials}</span>
        </div>
        <div className="min-w-0">
          <p className="font-semibold text-smoke leading-tight truncate">{name}</p>
          <p className="text-sm text-ash/70 leading-tight mt-0.5 truncate">
            {program ? `${program} · ` : ""}
            {university ? `${university}, ` : ""}
            {country}
          </p>
        </div>
      </div>
    </div>
  );
}
