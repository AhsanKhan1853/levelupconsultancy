import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { services } from "../Data/siteData";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTABanner from "../components/CTABanner";
import OfficeGallery from "../components/OfficeGallery";
import ServicesHero from "../components/ServicesHero";
import ServiceCarousel from "../components/ServiceCarousel";
import ServiceDetailCard from "../components/ServiceDetailCard";
import ScholarshipsSection from "../components/ScholarshipsSection";

export default function ServicesPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "center" }), 0);
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [location]);

  return (
    <div>
      <Navbar />
      <ServicesHero />
      <ServiceCarousel />
      <ScholarshipsSection />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-5 grid md:grid-cols-2 gap-8">
          {services.map((s) => (
            <ServiceDetailCard key={s.slug} service={s} />
          ))}
        </div>
      </section>

      <CTABanner />
      <Footer />
    </div>
  );
}