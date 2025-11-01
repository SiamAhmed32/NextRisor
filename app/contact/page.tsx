import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import BrandScroller from "@/components/BrandScroller";

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center pt-20 sm:pt-24 overflow-hidden px-4 sm:px-6">
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6">
              Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-500">Touch</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-white/70 leading-relaxed">
              Ready to start your project? Let's discuss how we can help bring your vision to life.
            </p>
          </div>
        </div>
        
        {/* Background effects */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-15 blur-3xl bg-gradient-to-r from-primary-400 to-accent-500" />
        </div>
      </section>

      <ContactSection />
      <BrandScroller />
      <Footer />
    </main>
  );
}

