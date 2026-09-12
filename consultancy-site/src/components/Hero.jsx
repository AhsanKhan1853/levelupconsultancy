import { useState, useEffect } from "react";
import heroBg from "../assets/hero-bg.jpg";

const rotatingWords = [
  "Studying Abroad",
  "Visa Guidance",
  "Scholarship Support",
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
      className="relative pt-32 pb-20 text-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-orange-900/80"></div>

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
        .flip-char {
          display: inline-block;
          transform-origin: 50% 50%;
          animation: flipChar 0.5s ease-out both;
        }
      `}</style>

      <div className="relative max-w-7xl mx-auto px-5 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Your Trusted Partner for{" "}
            <span className="text-accent inline-block" style={{ perspective: "400px" }}>
              {currentWord.split("").map((char, i) => (
                <span
                  key={`${index}-${i}`}
                  className="flip-char"
                  style={{ animationDelay: `${i * 30}ms` }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </span>
          </h1>
          <p className="mt-5 text-lg text-blue-100">
            Nationwide network of experts helping students choose the right country,
            university, and program — from application to visa approval.
          </p>
          <div className="mt-8 flex gap-4">
            <a href="#contact" className="bg-accent px-6 py-3 rounded-full font-semibold hover:opacity-90 transition">
              Free Consultation
            </a>
            <a href="#services" className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-primary transition">
              Check Eligibility
            </a>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="bg-white/10 rounded-2xl p-10 text-center">
            <p className="text-6xl font-extrabold">20+</p>
            <p className="mt-2 text-blue-100">Years Guiding Students Abroad</p>
          </div>
        </div>
      </div>
    </section>
  );
}