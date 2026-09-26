export default function StoryCard({ story, expanded, onExpand }) {
  const { name, country, quote, visaImage } = story;

  // On touch devices there's no hover, so the first tap expands this card
  // (and collapses whichever one was open) instead of navigating; a second
  // tap on an already-expanded card follows through to WhatsApp.
  const handleClick = (e) => {
    const supportsHover = window.matchMedia("(hover: hover)").matches;
    if (!supportsHover && !expanded) {
      e.preventDefault();
      onExpand();
    }
  };

  return (
      <a
      href="#contact"
      onClick={handleClick}
      className="group relative flex flex-col shrink-0 w-[17rem] h-full rounded-lg overflow-hidden
                 border-[6px] border-accent bg-white shadow-cozy hover:shadow-cozy-lg
                 transition-all duration-300"
    >
      <div
        className={`w-full overflow-hidden bg-white transition-[height] duration-500 ease-in-out ${
          expanded ? "h-[26rem]" : "h-[12.75rem]"
        } group-hover:h-[26rem]`}
      >
        {visaImage ? (
          <img
            src={visaImage}
            alt={`${name}'s success story`}
            className={`w-full h-full transition-[object-fit] duration-300 ${
              expanded ? "object-contain" : "object-cover object-top"
            } group-hover:object-contain`}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary to-accent" />
        )}
      </div>

      <div className="flex-1 flex flex-col justify-between px-5 py-5 bg-[#03361A]">
        <div>
          <p className="text-sm text-cream/90 italic leading-relaxed line-clamp-3 mb-3">
            "{quote}"
          </p>
          <span className="block w-8 h-px bg-accent mb-2" aria-hidden="true" />
        </div>

        <div>
          <h3 className="font-display text-lg font-semibold text-cream">
            {name}
          </h3>
          <p className="text-sm text-cream/75 mt-0.5">{country}</p>
        </div>
      </div>
    </a>
  );
}