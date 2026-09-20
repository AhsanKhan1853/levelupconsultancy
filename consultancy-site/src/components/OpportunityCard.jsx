import { HiOutlineAcademicCap, HiOutlineClock, HiOutlineGlobeAlt, HiOutlineLocationMarker } from "react-icons/hi";
import { FaGraduationCap } from "react-icons/fa";

export default function OpportunityCard({ opportunity }) {
  const {
    title,
    university_name,
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

  const courseTitle = specialization ? `${specialization}` : title;

  return (
    <div className="rounded-pebble overflow-hidden bg-cream border border-rule shadow-cozy hover:shadow-cozy-lg hover:-translate-y-0.5 transition-all duration-300">
      {/* Top: cover image + logo + university name */}
      <div
        className="relative h-28 flex flex-col items-center justify-center text-center px-3 bg-primary bg-cover bg-center"
        style={image_url ? { backgroundImage: `url(${image_url})` } : undefined}
      >
        {/* a deep green wash rather than flat black — keeps photos warm */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/45 via-primary/65 to-[#03361A]/85" />

        {is_hot && (
          <span className="absolute top-2.5 right-2.5 z-10 bg-accent text-white text-[11px] font-semibold px-2.5 py-0.5 rounded-full shadow">
            Closing soon
          </span>
        )}

        <div className="relative z-10 flex flex-col items-center">
          {logo_url ? (
            <img
              src={logo_url}
              alt=""
              aria-hidden="true"
              className="h-11 w-11 object-contain bg-cream rounded-full p-1 shadow"
            />
          ) : (
            <div className="h-10 w-10 rounded-full bg-cream flex items-center justify-center shadow">
              <FaGraduationCap className="text-primary text-lg" />
            </div>
          )}
          <p className="mt-1.5 font-display italic text-milk text-[13px] leading-tight">
            {university_name || "University"}
          </p>
          {location && (
            <p className="text-[11px] text-cream/80 flex items-center gap-1 mt-0.5">
              <HiOutlineLocationMarker className="shrink-0" /> {location}
            </p>
          )}
        </div>
      </div>

      {/* Bottom: course details */}
      <div className="p-4">
        <h3 className="font-display font-semibold text-[1.05rem] text-primary leading-snug">
          {courseTitle}
        </h3>

        <div className="grid grid-cols-2 gap-y-1.5 gap-x-2 mt-3 text-xs text-ink/65">
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

        {(tuition_fee || study_format_display) && (
          <div className="mt-3 pt-3 border-t border-dashed border-rule">
            {tuition_fee && (
              <p className="text-[13px] font-semibold text-ink">{tuition_fee}</p>
            )}
            {study_format_display && (
              <p className="text-[11px] text-ink/45">{study_format_display}</p>
            )}
          </div>
        )}

        {discipline?.name && (
          <a
            href="#contact"
            className="inline-block mt-3 text-accent font-semibold text-xs hover:text-primary transition-colors"
          >
            Ask about {discipline.name}
          </a>
        )}
      </div>
    </div>
  );
}