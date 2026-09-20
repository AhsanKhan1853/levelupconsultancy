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
          0% { transform: rotateX(90deg); opacity: 0; }
          60% { transform: rotateX(-10deg); opacity: 1; }
          100% { transform: rotateX(0deg); opacity: 1; }
        }
        .hero-char {
          display: inline-block;
          transform-origin: 50% 50%;
          animation: flipChar 0.5s ease-out both;
        }

        @keyframes blobDrift1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(6%, 8%) scale(1.1); }
          66% { transform: translate(-4%, 4%) scale(0.95); }
        }
        @keyframes blobDrift2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-8%, -5%) scale(1.05); }
          66% { transform: translate(5%, -8%) scale(1.15); }
        }
        @keyframes blobDrift3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(4%, -10%) scale(1.1); }
        }
        .blob-1 { animation: blobDrift1 18s ease-in-out infinite; }
        .blob-2 { animation: blobDrift2 22s ease-in-out infinite; }
        .blob-3 { animation: blobDrift3 26s ease-in-out infinite; }

        @media (prefers-reduced-motion: reduce) {
          .hero-char { animation: none !important; opacity: 1; transform: none; }
          .blob-1, .blob-2, .blob-3 { animation: none !important; }
        }
      `}</style>

      {/* Mobile-only: image as full section background */}
      <div className="absolute inset-0 lg:hidden">
        <img
          src={heroBg}
          alt="Counselors meeting students at the LevelUp Consulting office"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-night/70" />
      </div>

      {/* Animated background blobs (all sizes) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="blob-1 absolute -top-20 -left-20 w-[28rem] h-[28rem] rounded-full bg-accent/25 blur-3xl" />
        <div className="blob-2 absolute top-1/3 -right-24 w-[32rem] h-[32rem] rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="blob-3 absolute -bottom-32 left-1/4 w-[26rem] h-[26rem] rounded-full bg-amber-400/15 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
        {/* ---------- Left: the promise ---------- */}
        <div className="max-w-[34rem]">
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
        </div>

        {/* ---------- Right: an arched window onto the office (desktop only) ---------- */}
        <div className="relative hidden lg:block">
          <div className="relative">
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