export default function StoryCard({ index = 0 }) {
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

      <div className="relative flex flex-col items-center text-center py-6">
        <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors duration-300">
          <span className="text-2xl">✦</span>
        </div>

        <p className="font-display text-lg font-semibold text-smoke">
          A student's story is on its way
        </p>
        <p className="mt-2 text-sm text-ash leading-relaxed max-w-[16rem]">
          We're gathering real experiences from students we've placed abroad.
          Check back soon.
        </p>
      </div>

      <div className="flex items-center gap-3.5 mt-2 pt-5 border-t border-dashed border-rule">
        <div className="w-12 h-12 rounded-full bg-slate border-2 border-dashed border-rule flex items-center justify-center">
          <span className="text-ash text-lg">?</span>
        </div>
        <div>
          <p className="font-semibold text-ash leading-tight">Coming soon</p>
          <p className="text-sm text-ash/60 leading-tight mt-0.5">Studying somewhere new</p>
        </div>
      </div>
    </div>
  );
}