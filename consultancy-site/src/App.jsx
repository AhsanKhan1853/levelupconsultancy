import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import WhyUs from "./components/WhyUs";
import Services from "./components/Services";
import Destinations from "./components/Destinations";
import ProcessSteps from "./components/ProcessSteps";
import HotOpportunities from "./components/HotOpportunities";
import HotStories from "./components/HotStories";
import OpportunitySearch from "./components/OpportunitySearch";
import FeedbackForm from "./components/FeedbackForm";
import CTABanner from "./components/CTABanner";
import Footer from "./components/Footer";
import OpportunitiesPage from "./pages/OpportunitiesPage";
import ServicesPage from "./pages/ServicesPage";
import DestinationsPage from "./pages/DestinationsPage";

function LandingPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        // Wait a tick for the page to render before scrolling
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 0);
      }
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [location]);

  return (
    <div>
      <Navbar />
      <Hero />
      <OpportunitySearch /> 
      <WhyUs />
      <Services />
      <HotOpportunities />
      <Destinations />
      <ProcessSteps />
      <HotStories />
      <FeedbackForm />
      <CTABanner />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/opportunities" element={<OpportunitiesPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/destinations" element={<DestinationsPage />} />
      </Routes>
    </BrowserRouter>
  );
}