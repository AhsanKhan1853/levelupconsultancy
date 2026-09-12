export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 bg-gradient-to-br from-primary to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-5 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Your Trusted Partner for <span className="text-accent">Studying Abroad</span>
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