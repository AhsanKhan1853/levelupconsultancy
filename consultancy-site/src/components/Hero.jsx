import { useState, useEffect } from "react";
import heroBg from "../assets/hero-bg.png";

const rotatingWords = [
  "Studying Abroad",
  "Visa Guidance",
  "Scholarships",
  "Test Preparation",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const currentWord = rotatingWords[index];

  return (
    <section
      id="home"
      className="relative bg-night pt-28 sm:pt-32 pb-24 sm:pb-32 overflow-hidden"
    >
      <style>{`
        @keyframes flipChar {
          0% {
            transform: rotateX(90deg);
            opacity: 0;
          }
          60% {
            transform: rotateX(-10deg);
            opacity: 1;
          }
          100% {
            transform: rotateX(0deg);
            opacity: 1;
          }
        }
        .hero-char {
          display: inline-block;
          transform-origin: 50% 50%;
          animation: flipChar 0.5s ease-out both;
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-char { animation: none !important; opacity: 1; transform: none; }
        }
      `}</style>

      <div className="relative max-w-7xl mx-auto px-5 grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
        {/* ---------- Left: the promise ---------- */}
        <div className="max-w-[34rem]">
          {/* <p className="flex items-center gap-2.5 text-accent text-[0.95rem] font-semibold">
            <span className="w-8 h-0.5 bg-accent" aria-hidden="true" />
            Based in Pakistan, sending students everywhere
          </p> */}

          <h1 className="font-display mt-5 text-[2.6rem] sm:text-6xl font-bold leading-[1.08] text-smoke">
            Your trusted partner for{" "}
            <span className="text-accent inline-block" style={{ perspective: "400px" }}>
              {currentWord.split("").map((char, i) => (
                <span
                  key={`${index}-${i}`}
                  className="hero-char"
                  style={{ animationDelay: `${i * 28}ms` }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </span>
          </h1>

          <p className="mt-7 text-lg text-smoke leading-relaxed">
            A nationwide network of counselors who help you choose the right country,
            university, and program — and stay with you from the first application all
            the way to visa approval.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="bg-accent text-night font-bold px-7 py-3.5 rounded-full hover:bg-amber transition-colors"
            >
              Book a free consultation
            </a>
            <a
              href="#why-us"
              className="font-bold text-smoke border-2 border-rule px-7 py-3 rounded-full hover:border-accent hover:text-accent transition-colors"
            >
              See how we work
            </a>
          </div>

          {/* <p className="mt-8 text-sm text-dim">
            No charge for the first sitting. Come with questions, leave with a plan.
          </p> */}
        </div>

        {/* ---------- Right: an arched window onto the office ---------- */}
        <div className="relative hidden lg:block">
          <div className="relative">
            {/* a solid panel behind the photo — offset toward the bottom-right
                and a touch smaller, so it reads as a backing the photo sits
                on top of, rather than a frame the photo is confined inside */}
            <div
              aria-hidden="true"
              className="absolute top-3.5 left-3.5 -bottom-1.5 -right-1.5 rounded-arch bg-slate"
            />

            <div className="relative overflow-hidden">
              <img
                src={heroBg}
                alt="Counselors meeting students at the LevelUp Consulting office"
                className="w-full h-[30rem] object-cover"
              />
            </div>

            {/* years badge, sitting flat on the corner of the frame */}
            <div className="absolute -bottom-6 -left-6 bg-accent rounded-pebble px-7 py-5">
              <p className="font-display text-5xl font-bold text-night leading-none">20+</p>
              <p className="mt-1.5 text-sm text-night font-semibold max-w-[9rem] leading-snug">
                years guiding students abroad
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}