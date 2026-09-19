import { useRef } from "react";

// Eagerly pick up every image dropped into src/assets/picfromoffice/,
// so adding or removing a photo there needs no code changes.
const officeImages = import.meta.glob("../assets/picfromoffice/*.{png,jpg,jpeg,webp}", {
  eager: true,
});

const photos = Object.entries(officeImages)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, mod]) => mod.default);

export default function OfficeGallery() {
  const trackRef = useRef(null);

  const scrollByAmount = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.8), behavior: "smooth" });
  };

  if (photos.length === 0) return null;

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="text-3xl font-extrabold text-center">A Look Inside Our Office</h2>
        <p className="text-center text-gray-500 mt-2">
          Where our counselors work with students every day.
        </p>

        <div className="relative mt-10">
          {/* left/right scroll buttons (desktop) */}
          <button
            type="button"
            onClick={() => scrollByAmount(-1)}
            aria-label="Scroll left"
            className="hidden sm:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 items-center justify-center rounded-full bg-white text-primary shadow-lg hover:bg-primary hover:text-white transition-colors"
          >
            &#8592;
          </button>
          <button
            type="button"
            onClick={() => scrollByAmount(1)}
            aria-label="Scroll right"
            className="hidden sm:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 items-center justify-center rounded-full bg-white text-primary shadow-lg hover:bg-primary hover:text-white transition-colors"
          >
            &#8594;
          </button>

          <div
            ref={trackRef}
            className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {photos.map((src, i) => (
              <div
                key={i}
                className="shrink-0 snap-start w-64 sm:w-72 aspect-[4/3] rounded-2xl overflow-hidden border-4 border-white"
                style={{ boxShadow: "0 8px 16px -4px rgba(0, 0, 0, 0.2)" }}
              >
                <img
                  src={src}
                  alt={`Our office ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}