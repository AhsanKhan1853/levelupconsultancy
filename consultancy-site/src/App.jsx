import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Destinations from "./components/Destination";
import ProcessSteps from "./components/ProcessSteps";
import HotOpportunities from "./components/HotOpportunities";
import HotStories from "./components/HotStories";
import OpportunitySearch from "./components/OpportunitySearch";
import FeedbackForm from "./components/FeedbackForm";
import CTABanner from "./components/CTABanner";
import Footer from "./components/Footer";
import OpportunitiesPage from "./pages/OpportunitiesPage";

function LandingPage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <OpportunitySearch />
      <Stats />
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
      </Routes>
    </BrowserRouter>
  );
}