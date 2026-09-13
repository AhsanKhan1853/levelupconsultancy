import { HiOutlineAcademicCap, HiOutlineClock, HiOutlineGlobeAlt, HiOutlineLocationMarker } from "react-icons/hi";
import { FaGraduationCap } from "react-icons/fa";

export default function OpportunityCard({ opportunity }) {
  const {
    title,
    university,
    discipline,
    specialization,
    qualification_level_display,
    duration,
    study_mode_display,
    study_format_display,
    language,
    tuition_fee,
    image_url,
    logo_url,
    is_hot,
    location,
  } = opportunity;

  const courseTitle = specialization
    ? `${specialization}`
    : title;

  const bgImage = image_url || university?.cover_image_url;
  const logo = logo_url || university?.logo_url;
  const displayLocation = location || university?.location;

  return (
    <div className="rounded-2xl overflow-hidden bg-white border border-black shadow-[0_0_0_1px_rgba(255,255,255,0.9)] hover:shadow-2xl transition-shadow duration-300">
      {/* Top: cover image + logo + university name */}
      <div
        className="relative h-28 flex flex-col items-center justify-center text-center px-3 bg-primary/10 bg-cover bg-center"
        style={bgImage ? { backgroundImage: `url(${bgImage})` } : undefined}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70"></div>

        <div className="flex gap-2 absolute top-2 right-2 z-10">
          {is_hot && (
            <span className="bg-red-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
              🔥 Hot
            </span>
          )}
        </div>

        <div className="relative z-10 flex flex-col items-center">
          {logo ? (
            <img
              src={logo}
              alt={university?.name || title}
              className="h-11 w-11 object-contain bg-primary rounded-full p-0.1 shadow"
            />
          ) : (
            <div className="h-9 w-9 rounded-full bg-white flex items-center justify-center shadow">
              <FaGraduationCap className="text-primary text-lg" />
            </div>
          )}
          <p className="mt-1.5 font-italic text-accent text-xs">{university?.name || "University"}</p>
          {displayLocation && (
            <p className="text-[11px] text-white/80 flex items-center gap-1 mt-0.5">
              <HiOutlineLocationMarker className="shrink-0" /> {displayLocation}
            </p>
          )}
        </div>
      </div>

      {/* Bottom: course details */}
      <div className="p-3.5">
        <h3 className="font-bold text-base text-primary leading-snug">{courseTitle}</h3>

        <div className="grid grid-cols-2 gap-y-1.5 gap-x-2 mt-3 text-xs text-gray-600">
          {qualification_level_display && (
            <span className="flex items-center gap-1.5">
              <HiOutlineAcademicCap className="text-accent shrink-0" /> {qualification_level_display}
            </span>
          )}
          {duration && (
            <span className="flex items-center gap-1.5">
              <HiOutlineClock className="text-accent shrink-0" /> {duration}
            </span>
          )}
          {study_mode_display && (
            <span className="flex items-center gap-1.5">
              <HiOutlineLocationMarker className="text-accent shrink-0" /> {study_mode_display}
            </span>
          )}
          {language && (
            <span className="flex items-center gap-1.5">
              <HiOutlineGlobeAlt className="text-accent shrink-0" /> {language}
            </span>
          )}
        </div>

        {tuition_fee && (
          <p className="mt-2 text-xs font-semibold text-gray-800">{tuition_fee}</p>
        )}
        {study_format_display && (
          <p className="text-[11px] text-gray-400">{study_format_display}</p>
        )}

        {discipline?.name && (
          <a
            href="#contact"
            className="inline-block mt-3 text-accent font-semibold text-xs hover:underline"
          >
            {discipline.name} →
          </a>
        )}
      </div>
    </div>
  );
}