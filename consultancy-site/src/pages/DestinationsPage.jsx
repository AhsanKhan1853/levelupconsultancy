import { destinationPrograms } from "../Data/siteData";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTABanner from "../components/CTABanner";
import destinationsHero from "../assets/destinations/destinations-hero.png";

import mbbsImg from "../assets/scholarships/mbbs.png";
import bdsImg from "../assets/scholarships/bds.png ";
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

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {destinationPrograms.map((program) => (
              <div
                key={program.degree}
                className="relative rounded-2xl overflow-hidden min-h-[320px] flex flex-col justify-end"
                style={{ boxShadow: "0 8px 16px 10px rgba(0,0,0,0.06)" }}
              >
                <img
                  src={imageMap[program.image]}
                  alt={program.degree}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/60 to-transparent" />

                <div className="relative z-10 p-6 sm:p-7 text-white">
                  <h3 className="font-bold text-xl">{program.degree}</h3>
                  <p className="text-sm text-blue-50/90 mt-2 leading-relaxed">{program.desc}</p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {program.countries.map((country) => (
                      <span
                        key={country}
                        className="px-4 py-2 rounded-lg text-sm font-semibold bg-white/95 text-primary"
                      >
                        {country}
                      </span>
                    ))}
                  </div>
                </div>
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