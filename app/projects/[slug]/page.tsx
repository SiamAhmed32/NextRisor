import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack";
import MagicBento from "@/components/MagicBento";

const PROJECT_DATA: { [key: string]: any } = {
  "doctor-appointment-system": {
    id: "doctor-appointment",
    slug: "doctor-appointment-system",
    title: "Doctor Appointment System",
    client: "Healthcare Provider",
    industry: "Healthcare",
    category: "Web App",
    imageUrl: "/images/DocAppointment.png",
    challenge: "Streamlining appointment booking process and improving patient access to healthcare services through a digital platform.",
    solution: "Built a modern Next.js application with React Query for efficient data management, implementing real-time availability, automated reminders, and seamless booking experience.",
    results: [
      { metric: "Booking Efficiency", value: "+55%", description: "Faster appointment scheduling" },
      { metric: "Patient Satisfaction", value: "+48%", description: "Improved user ratings" },
      { metric: "No-Shows", value: "-35%", description: "Reduction with reminders" },
    ],
    tags: ["Next.js", "React Query", "Tailwind", "Healthcare", "Digital Health"],
    testimonial: {
      quote: "The new appointment system has transformed how our patients schedule visits. It's intuitive, fast, and has significantly reduced no-shows.",
      author: "Dr. Sarah Johnson",
      role: "Medical Director",
    },
    features: [
      "Real-time appointment availability",
      "Automated SMS/Email reminders",
      "Patient history tracking",
      "Multi-doctor scheduling",
      "Mobile-responsive design",
    ],
    technologies: ["Next.js 14", "React Query", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
  },
  "furnishop-ecommerce": {
    id: "furnishop",
    slug: "furnishop-ecommerce",
    title: "FurniShop E-Commerce",
    client: "FurniShop",
    industry: "Retail",
    category: "E-commerce",
    imageUrl: "/images/Furnishop.png",
    challenge: "Creating an engaging furniture shopping experience with modern design, smooth animations, and efficient state management.",
    solution: "Developed a full-featured e-commerce platform using Next.js with Redux for state management, featuring smooth animations, product showcases, and optimized checkout flow.",
    results: [
      { metric: "Sales Growth", value: "+67%", description: "Increase in online sales" },
      { metric: "Page Load Speed", value: "-42%", description: "Faster load times" },
      { metric: "User Retention", value: "+53%", description: "Return customer rate" },
    ],
    tags: ["Next.js", "Redux", "E-commerce", "Animations", "Retail"],
    testimonial: {
      quote: "Our sales have increased dramatically since launching the new platform. The user experience is exceptional.",
      author: "Michael Chen",
      role: "CEO, FurniShop",
    },
    features: [
      "Advanced product filtering",
      "3D product previews",
      "Wishlist functionality",
      "Secure payment integration",
      "Order tracking system",
    ],
    technologies: ["Next.js 14", "Redux Toolkit", "Stripe", "Three.js", "Framer Motion"],
  },
  "violet-bangladesh": {
    id: "violet-bangladesh",
    slug: "violet-bangladesh",
    title: "Violet Bangladesh",
    client: "Violet Bangladesh",
    industry: "E-commerce",
    category: "E-commerce",
    imageUrl: "/brands/violet-bangladesh.png",
    challenge: "Creating a seamless online shopping experience for gift and merchandise customers with clear category navigation and trust-building elements.",
    solution: "Developed a comprehensive WooCommerce platform with intuitive category navigation, promotional sections, testimonial integration, and comprehensive policy pages to build customer trust.",
    results: [
      { metric: "User Engagement", value: "+45%", description: "Increase in time on site" },
      { metric: "Conversion Rate", value: "+32%", description: "Improved checkout completion" },
      { metric: "Customer Trust", value: "+60%", description: "Reduction in cart abandonment" },
    ],
    tags: ["E-commerce", "WooCommerce", "Gift Shop", "Branding", "UI/UX"],
    testimonial: {
      quote: "Next Riser transformed our online presence. The new platform makes it easy for customers to find and purchase our unique gift items.",
      author: "Violet Bangladesh Team",
      role: "Client",
    },
    features: [
      "WooCommerce integration",
      "Product categorization",
      "Customer reviews",
      "Secure checkout",
      "Multi-language support",
    ],
    technologies: ["WordPress", "WooCommerce", "PHP", "JavaScript", "MySQL"],
    link: "https://violetbangladesh.com",
  },
};

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  // Handle different slug formats
  const slug = params.slug.toLowerCase().replace(/\s+/g, '-');
  const project = PROJECT_DATA[slug] || 
    Object.values(PROJECT_DATA).find((p: any) => 
      p.id === params.slug || 
      p.title.toLowerCase().replace(/\s+/g, '-') === slug
    );

  if (!project) {
    return (
      <main>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
            <a href="/" className="text-primary-400 hover:underline">Back to Home</a>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  const bentoCards = [
    {
      title: "Challenge",
      description: project.challenge,
      label: "Problem",
      color: "#060010",
    },
    {
      title: "Solution",
      description: project.solution,
      label: "Approach",
      color: "#060010",
    },
    {
      title: "Results",
      description: `Achieved ${project.results.map(r => r.value).join(", ")} across key metrics`,
      label: "Impact",
      color: "#060010",
    },
  ];

  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-20 sm:pt-24 overflow-hidden px-4 sm:px-6">
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <a href="/case-studies" className="text-white/60 hover:text-white transition-colors">
                Case Studies
              </a>
              <span className="text-white/40">/</span>
              <span className="text-primary-400">{project.title}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6">
              {project.title}
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-white/70 leading-relaxed mb-6">
              {project.challenge}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-primary-500/20 text-primary-300 text-sm border border-primary-500/30"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-15 blur-3xl bg-gradient-to-r from-primary-400 to-accent-500" />
        </div>
      </section>

      {/* Scroll Stack Section */}
      <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6">
        <div className="container max-w-4xl mx-auto">
          <ScrollStack useWindowScroll={true} itemDistance={150}>
            <ScrollStackItem>
              <div className="rounded-3xl p-8 sm:p-12 bg-white/5 backdrop-blur-sm border border-white/10">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">The Challenge</h2>
                <p className="text-base sm:text-lg text-white/70 leading-relaxed">{project.challenge}</p>
              </div>
            </ScrollStackItem>
            <ScrollStackItem>
              <div className="rounded-3xl p-8 sm:p-12 bg-white/5 backdrop-blur-sm border border-white/10">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Our Solution</h2>
                <p className="text-base sm:text-lg text-white/70 leading-relaxed mb-6">{project.solution}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.features?.map((feature: string, i: number) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary-400 mt-2 flex-shrink-0" />
                      <span className="text-white/80 text-sm sm:text-base">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollStackItem>
            <ScrollStackItem>
              <div className="rounded-3xl p-8 sm:p-12 bg-white/5 backdrop-blur-sm border border-white/10">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Results</h2>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {project.results.map((result: any, i: number) => (
                    <div key={i} className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
                      <div className="text-2xl sm:text-3xl font-bold text-primary-300 mb-1">{result.value}</div>
                      <div className="text-xs sm:text-sm text-white/60">{result.metric}</div>
                    </div>
                  ))}
                </div>
                {project.testimonial && (
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <p className="text-white/80 italic mb-2">"{project.testimonial.quote}"</p>
                    <p className="text-sm text-white/60">
                      — {project.testimonial.author}, {project.testimonial.role}
                    </p>
                  </div>
                )}
              </div>
            </ScrollStackItem>
            <ScrollStackItem>
              <div className="rounded-3xl p-8 sm:p-12 bg-white/5 backdrop-blur-sm border border-white/10">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Technologies Used</h2>
                <div className="flex flex-wrap gap-3">
                  {project.technologies?.map((tech: string, i: number) => (
                    <span
                      key={i}
                      className="px-4 py-2 rounded-full bg-primary-500/20 text-primary-300 text-sm border border-primary-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollStackItem>
          </ScrollStack>
        </div>
      </section>

      {/* Magic Bento Section */}
      <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12">
            Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-500">Highlights</span>
          </h2>
          <MagicBento
            cards={bentoCards}
            textAutoHide={true}
            enableStars={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            spotlightRadius={300}
            particleCount={12}
            glowColor="20, 35, 160"
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}

