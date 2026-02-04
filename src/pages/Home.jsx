import Hero from "../components/Hero";
import QuickActions from "../components/QuickActions";
import BookingSection from "../components/BookingSection";
import Highlights from "../components/Highlights";
import AboutLegacy from "../components/AboutLegacy";
import FocusAreas from "../components/FocusAreas";
import ServicesCarousel from "../components/ServicesCarousel";
import Team from "../components/Team";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#EAF4FB] text-[#1F2937] font-sans">
      <Hero />
      <QuickActions />
      <BookingSection />
      <Highlights />
      <AboutLegacy />
      <FocusAreas />
      <ServicesCarousel />
      <Team />
      <Footer />
    </div>
  );
}
