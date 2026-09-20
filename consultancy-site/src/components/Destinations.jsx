import { destinationPrograms } from "../Data/siteData";
import { useAutoScroll } from "../hooks/useAutoScroll";

import mbbsImg from "../assets/scholarships/mbbs.png";
import bdsImg from "../assets/scholarships/bds.png";
import bachelorsImg from "../assets/scholarships/bachelors.png";
import mastersImg from "../assets/scholarships/masters.jpg";
import phdImg from "../assets/scholarships/phd.jpg";
import diplomaImg from "../assets/scholarships/diploma.jpg";

const imageMap = {
  mbbs: mbbsImg,
  bds: bdsImg,
  bachelors: bachelorsImg,
  masters: mastersImg,
  phd: phdImg,
  diploma: diplomaImg,
};

function ProgramCard({ program }) {
  return (
    <a
      href="#contact"
      className="group shrink-0 w-[20rem] rounded-2xl overflow-hidden bg-slate border border-rule
                 shadow-lg hover:-translate-y-1.5 hover:shadow-[0_0_30px_-5px_rgba(245,166,35,0.35)]
                 hover:border-accent/60 transition-all duration-300"
    >
      <div className="relative h-44 overflow-hidden">
        <img
          src={imageMap[program.image]}
          alt={program.degree}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate via-transparent to-transparent" />
      </div>

      <div className="p-6">
        <h3 className="font-display font-semibold text-lg text-smoke">{program.degree}</h3>
        <p className="mt-2 text-sm text-ash leading-relaxed line-clamp-2">{program.desc}</p>

        <div className="flex flex-wrap gap-2 mt-4">
          {program.countries.map((country) => (
            <span
              key={country}
              className="px-3 py-1 rounded-md text-xs font-semibold bg-accent/10 text-accent border border-accent/20"
            >
              {country}
            </span>
          ))}
        </div>

        <span className="inline-flex items-center gap-1.5 mt-5 text-sm font-semibold text-emerald-400 group-hover:text-emerald-300 transition-colors">
          Talk to us about {program.degree}
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </span>
      </div>
    </a>
  );
}

export default function Destinations() {
  const { ref, containerProps } = useAutoScroll({ speed: 0.5 });
  const loop = [...destinationPrograms, ...destinationPrograms];

  return (
    <section id="destinations" className="relative bg-night py-20 sm:py-24 scroll-mt-24 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-[26rem] h-[26rem] rounded-full bg-emerald-500/15 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-[26rem] h-[26rem] rounded-full bg-accent/15 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5">
        <div className="max-w-2xl">
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-smoke leading-tight">
            Where do you want to study next year?
          </h2>
          <p className="mt-4 text-lg text-ash">
            From MBBS to PhD, here's what's currently open and where.
          </p>
        </div>
      </div>

      <div
        ref={ref}
        {...containerProps}
        className="relative flex gap-6 mt-12 px-5 xl:px-[max(1.25rem,calc((100vw-80rem)/2))] overflow-x-auto pb-6 cursor-grab active:cursor-grabbing [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {loop.map((program, i) => (
          <ProgramCard key={program.degree + "-" + i} program={program} />
        ))}
      </div>
    </section>
  );
}