import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/ServicesSection";
import CTASection from "@/components/CTASection";

export default function ServicesPage() {
  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-24 overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-500">Services</span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              Full-stack creative and engineering solutions to design, build, and grow your digital presence.
            </p>
          </div>
        </div>
        
        {/* Background effects */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-15 blur-3xl bg-gradient-to-r from-primary-400 to-accent-500" />
        </div>
      </section>

      <ServicesSection />
      <CTASection />
      <Footer />
    </main>
  );
}

