
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";

import BrandScroller from "@/components/BrandScroller";
import WhyChoosePills from "@/components/WhyChoosePills";
import HowItWorks from "@/components/HowItWorks";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialSection";
import NextRisorProjects from "@/components/NextRisorProjects";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";


export default function Page() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <BrandScroller speed={24} maxH={40} gap={48} />
      <ServicesSection />
      <NextRisorProjects />
      <WhyChoosePills />
      <HowItWorks />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </main>
  );
}
