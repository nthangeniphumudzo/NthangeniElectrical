import { Footer } from "./components/layout/Footer";
import { MobileActionBar } from "./components/layout/MobileActionBar";
import { Navbar } from "./components/layout/Navbar";
import { ContactSection } from "./components/sections/ContactSection";
import { GallerySection } from "./components/sections/GallerySection";
import { HeroSection } from "./components/sections/HeroSection";
import { MarqueeStrip } from "./components/sections/MarqueeStrip";
import { ServicesSection } from "./components/sections/ServicesSection";
import { WhyUsSection } from "./components/sections/WhyUsSection";
import { useScrollReveal } from "./hooks/useScrollReveal";

function App() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <main className="main-with-mobile-bar">
        <HeroSection />
        <MarqueeStrip />
        <ServicesSection />
        <GallerySection />
        <WhyUsSection />
        <ContactSection />
      </main>
      <Footer />
      <MobileActionBar />
    </div>
  );
}

export default App;
