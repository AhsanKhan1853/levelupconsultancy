import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Destinations from "./components/Destination";
import ProcessSteps from "./components/ProcessSteps";
import Testimonials from "./components/Testimonials";
import CTABanner from "./components/CTABanner";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Destinations />
      <ProcessSteps />
      <Testimonials />
      <CTABanner />
      <Footer />
    </div>
  );
}