import { scholarships } from "../Data/siteData";
import { useAutoScroll } from "../hooks/useAutoScroll";

import mbbsImg from "../assets/scholarships/mbbs.webp";
import bdsImg from "../assets/scholarships/bds.webp";
import bachelorsImg from "../assets/scholarships/bachelors.webp";
import mastersImg from "../assets/scholarships/masters.webp";
import phdImg from "../assets/scholarships/phd.webp";
import diplomaImg from "../assets/scholarships/diploma.webp";

const imageMap = {
  mbbs: mbbsImg,
  bds: bdsImg,
  bachelors: bachelorsImg,
  masters: mastersImg,
  phd: phdImg,
  diploma: diplomaImg,
};

function ScholarshipCard({ s, keySuffix }) {
  return (
    <div
      key={s.degree + keySuffix}
      className="relative shrink-0 w-80 h-64 rounded-2xl overflow-hidden"
      style={{ boxShadow: "0 8px 16px 10px rgba(16,19,18,0.5)" }}
    >
      <img
        src={imageMap[s.image]}
        alt={s.degree}
        draggable={false}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/60 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6 text-smoke">
        <h3 className="font-bold text-lg">{s.degree}</h3>
        <p className="text-sm text-sage mt-2 leading-relaxed">{s.desc}</p>
      </div>
    </div>
  );
}

export default function ScholarshipsSection() {
  const { ref, containerProps } = useAutoScroll({ speed: 0.5, reverse: true });

  return (
    <section className="py-16 bg-coal">
      <div className="max-w-7xl mx-auto px-5 text-center">
        <h2 className="text-3xl font-extrabold text-smoke">Scholarships We Offer</h2>
        <p className="text-ash mt-3 max-w-2xl mx-auto">
          We help students access scholarship and funding opportunities across MBBS, BDS,
          Bachelor's, Master's, PhD, and Diploma programs worldwide. Availability changes
          often, so reach out for the latest options.
        </p>
      </div>

      {/* Auto-scrolls on its own; drag with a mouse, swipe on touch, or
          scroll with a trackpad/wheel to take over manually at any time. */}
      <div
        ref={ref}
        {...containerProps}
        className="flex gap-6 mt-12 overflow-x-auto px-5 pb-2 cursor-grab active:cursor-grabbing [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {scholarships.map((s) => (
          <ScholarshipCard key={s.degree} s={s} keySuffix="" />
        ))}
        {/* rendered a second time so the auto-scroll loop is seamless */}
        {scholarships.map((s) => (
          <ScholarshipCard key={s.degree + "-dup"} s={s} keySuffix="-dup" />
        ))}
      </div>
    </section>
  );
}