export default function StoryCard({ story }) {
  const { name, country, quote, visaImage } = story;

  return (
    <a
      href="#contact"
      className="group relative flex flex-col shrink-0 w-[22rem] h-full rounded-lg overflow-hidden
                 border-[7px] border-accent bg-white shadow-cozy hover:shadow-cozy-lg
                 hover:-translate-y-1.5 transition-all duration-300"
    >
      {visaImage ? (
        <img
          src={visaImage}
          alt={`${name}'s success story`}
          className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div className="w-full aspect-[4/5] bg-gradient-to-br from-primary to-accent" />
      )}

      <div className="flex-1 flex flex-col justify-between px-6 py-6 bg-[#03361A]">
        <div>
          <p className="text-sm text-cream/90 italic leading-relaxed line-clamp-3 mb-4">
            "{quote}"
          </p>
          <span className="block w-10 h-px bg-accent mb-3" aria-hidden="true" />
        </div>

        <div>
          <h3 className="font-display text-xl font-semibold text-cream">
            {name}
          </h3>
          <p className="text-sm text-cream/75 mt-1">{country}</p>
        </div>
      </div>
    </a>
  );
}