export default function StoryCard({ story }) {
  const { name, photo, country, quote, visaImage } = story;

  return (
    <a
      href="#contact"
      className="group relative block shrink-0 w-[20rem] aspect-[8.5/10] rounded-lg overflow-hidden
                 border-[7px] border-accent shadow-cozy hover:shadow-cozy-lg
                 hover:-translate-y-1.5 transition-all duration-300"
    >
      

      <div className="absolute inset-0 bg-gradient-to-t from-[#03361A]/95 via-[#03361A]/40 to-transparent" />

      {visaImage && (
        <div className="absolute top-4 right-4 w-14 h-14 rounded-md overflow-hidden border-2 border-cream shadow-cozy">
          <img
            src={visaImage}
            alt={`${name}'s visa`}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div className="absolute left-5 right-5 bottom-5">
        <p className="text-sm text-cream/90 italic leading-relaxed line-clamp-3 mb-4">
          "{quote}"
        </p>

        <span className="block w-10 h-px bg-accent mb-3" aria-hidden="true" />

        <h3 className="font-display text-xl font-semibold text-cream drop-shadow">
          {name}
        </h3>
        <p className="text-sm text-cream/75 mt-1">{country}</p>
      </div>
    </a>
  );
}