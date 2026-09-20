import servicesHero from "../assets/services-hero.png";

export default function ServicesHero() {
  return (
    <section className="relative bg-primary overflow-hidden pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-2 gap-10 items-center relative z-10">
        <div className="text-center lg:text-left text-white">
          <span className="inline-block text-accent font-semibold tracking-wide uppercase text-sm">
            What We Offer
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold mt-2">Our Services</h1>
          <p className="text-blue-100 mt-4 max-w-xl mx-auto lg:mx-0">
            Everything you need to study or travel abroad, handled by one dedicated team.
          </p>
        </div>
        <img src={servicesHero} alt="Visa and study abroad services" className="w-full max-w-lg mx-auto" />
      </div>
    </section>
  );
}