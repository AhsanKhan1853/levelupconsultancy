export default function StoryCard({ story, index = 0 }) {
  const { student_name, country, university, photo_url, story: text } = story;

  return (
    <figure
      className={`relative bg-cream text-ink p-7 pt-9 shadow-cozy-lg transition-transform duration-300 hover:-translate-y-1 ${
        index % 2 === 0 ? "rounded-pebble" : "rounded-pebble-alt"
      }`}
    >
      {/* an oversized quote mark, set in the display face and tucked into the corner */}
      <span
        aria-hidden="true"
        className="font-display absolute top-1 left-6 text-[4.5rem] leading-none text-accent/25 select-none"
      >
        &ldquo;
      </span>

      <blockquote className="relative font-display italic text-[1.05rem] leading-relaxed text-ink/85 line-clamp-5">
        {text}
      </blockquote>

      <figcaption className="flex items-center gap-3.5 mt-6 pt-5 border-t border-dashed border-rule">
        {photo_url ? (
          <img
            src={photo_url}
            alt=""
            aria-hidden="true"
            className="w-12 h-12 rounded-full object-cover border-2 border-milk"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-milk text-primary flex items-center justify-center font-display font-semibold text-lg">
            {student_name?.[0]}
          </div>
        )}
        <div>
          <p className="font-semibold text-primary leading-tight">{student_name}</p>
          <p className="text-sm text-ink/55 leading-tight mt-0.5">{country}</p>
          {university && (
            <p className="text-sm text-ink/45 leading-tight">{university}</p>
          )}
        </div>
      </figcaption>
    </figure>
  );
}