// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// Import components
import TechnologyGrid from "./TechnologyGrid";
import HeroSection from "./HeroSection";
import ServicesSection from "./ServicesSection";
import AboutUsSection from "./AboutUsSection";
import ContactSection from "./ContactSection";
import TestimonialsSection from "./TestimonialsSection";

function Home() {
  return (
    <div className="bg-white">
      {/* section 1 Hero section*/}
      <HeroSection />

      {/* section 2 About us */}
      <AboutUsSection />

      {/* /section-3 Services */}
      <ServicesSection />

      {/* section-4 Carausel */}
      <TestimonialsSection />

      {/* section-5 Tech stacks */}
      <TechnologyGrid />

      {/* section -6 Contact */}
      <ContactSection />
    </div>
  );
}

export default Home;
