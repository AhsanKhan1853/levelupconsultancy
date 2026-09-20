import { destinationPrograms, countries } from "../Data/siteData";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTABanner from "../components/CTABanner";
import destinationsHero from "../assets/destinations/destinations-hero.png";

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
    <div
      className="group relative aspect-[8.5/10] rounded-lg overflow-hidden
                 border-[7px] border-accent shadow-cozy hover:shadow-cozy-lg
                 hover:-translate-y-1.5 transition-all duration-300"
    >
      <img
        src={imageMap[program.image]}
        alt={program.degree}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#03361A]/90 via-[#03361A]/15 to-transparent" />

      <h3 className="font-display absolute left-5 right-5 bottom-5 text-cream text-2xl font-semibold drop-shadow transition-opacity duration-300 group-hover:opacity-0">
        {program.degree}
      </h3>

      <div className="absolute inset-0 bg-primary/95 px-6 py-7 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="font-display text-2xl font-semibold text-cream">{program.degree}</h3>
        <span className="block w-10 h-px bg-accent mt-3 mb-3" aria-hidden="true" />
        <p className="text-sm text-cream/85 leading-relaxed">{program.desc}</p>

        <div className="flex flex-wrap gap-2 mt-4">
          {program.countries.map((country) => (
            <span
              key={country}
              className="px-3 py-1 rounded-md text-xs font-semibold bg-cream text-primary"
            >
              {country}
            </span>
          ))}
        </div>

        <a
          href="#contact"
          className="inline-block mt-5 text-milk font-semibold text-sm underline decoration-accent decoration-2 underline-offset-4"
        >
          Talk to us about {program.degree}
        </a>
      </div>
    </div>
  );
}

export default function DestinationsPage() {
  return (
    <div>
      <Navbar />

      <section className="relative pt-28 h-[420px] flex items-center justify-center text-center text-white overflow-hidden">
        <img
          src={destinationsHero}
          alt="Students studying abroad"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/70 to-primary/90" />
        <div className="relative z-10 px-5">
          <span className="inline-block text-accent font-semibold tracking-wide uppercase text-sm">
            Where You Can Study
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold mt-2">Study Destinations</h1>
          <p className="text-blue-100 mt-4 max-w-xl mx-auto">
            Explore which countries are available for each program level.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-5">
          <h2 className="text-3xl font-extrabold text-center text-primary">
            Available Scholarships by Program
          </h2>
          <p className="text-center text-gray-500 mt-3 max-w-2xl mx-auto">
            Every program below is currently open to applicants in the listed countries.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7 mt-12">
            {destinationPrograms.map((program) => (
              <ProgramCard key={program.degree} program={program} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-oat py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-5">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink text-center">
            Countries We Deal With
          </h2>
          <p className="mt-3 text-ink/65 max-w-xl mx-auto text-center">
            Our full network of partner countries across every program level.
          </p>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 mt-12">
            {countries.map((c) => (
              <div key={c.code} className="flex flex-col items-center gap-2">
                <img
                  src={`https://flagcdn.com/w160/${c.code}.png`}
                  alt={c.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-accent shadow-cozy"
                />
                <span className="text-sm font-semibold text-ink text-center">{c.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </div>
  );
}