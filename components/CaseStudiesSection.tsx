"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

type CaseStudy = {
    id: string;
    title: string;
    client: string;
    industry: string;
    category: string;
    imageUrl: string;
    challenge: string;
    solution: string;
    results: {
        metric: string;
        value: string;
        description?: string;
    }[];
    tags: string[];
    testimonial?: {
        quote: string;
        author: string;
        role: string;
    };
    link?: string;
    featured?: boolean;
};

const CASE_STUDIES: CaseStudy[] = [
    {
        id: "violet-bangladesh",
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
        featured: true,
        link: "https://violetbangladesh.com",
        testimonial: {
            quote: "Next Riser transformed our online presence. The new platform makes it easy for customers to find and purchase our unique gift items.",
            author: "Violet Bangladesh Team",
            role: "Client",
        },
    },
    {
        id: "doctor-appointment",
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
        featured: true,
    },
    {
        id: "furnishop",
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
        featured: true,
    },
    {
        id: "crypto-dashboard",
        title: "Crypto Trading Dashboard",
        client: "FinTech Startup",
        industry: "Finance",
        category: "Dashboard",
        imageUrl: "gradient:blue-purple",
        challenge: "Providing real-time cryptocurrency trading analytics and market insights in an intuitive dashboard interface.",
        solution: "Created a comprehensive trading dashboard with real-time data visualization, advanced charting capabilities, and responsive design for desktop and mobile trading.",
        results: [
            { metric: "Active Users", value: "+89%", description: "Growth in user base" },
            { metric: "Trading Volume", value: "+124%", description: "Increase in platform activity" },
            { metric: "User Engagement", value: "+76%", description: "Time spent on platform" },
        ],
        tags: ["Web3", "Charts", "Real-time", "Finance", "Analytics"],
    },
    {
        id: "saas-platform",
        title: "Enterprise SaaS Platform",
        client: "Enterprise Client",
        industry: "SaaS",
        category: "SaaS",
        imageUrl: "gradient:green-teal",
        challenge: "Building a scalable enterprise management solution that can handle complex workflows and large user bases.",
        solution: "Developed a cloud-based SaaS platform with microservices architecture, real-time collaboration features, and enterprise-grade security and compliance.",
        results: [
            { metric: "Efficiency", value: "+92%", description: "Workflow optimization" },
            { metric: "Cost Savings", value: "-38%", description: "Reduced operational costs" },
            { metric: "User Adoption", value: "+81%", description: "Employee engagement" },
        ],
        tags: ["SaaS", "Enterprise", "Scalable", "Cloud", "Microservices"],
    },
    {
        id: "social-network",
        title: "Social Community Platform",
        client: "Community Organization",
        industry: "Social",
        category: "Social",
        imageUrl: "gradient:pink-rose",
        challenge: "Creating an engaging social platform for community engagement with real-time interactions and content sharing.",
        solution: "Built a modern social networking platform with real-time messaging, content feeds, community groups, and mobile-first responsive design.",
        results: [
            { metric: "Active Members", value: "+156%", description: "Growth in community" },
            { metric: "Daily Engagement", value: "+94%", description: "Increase in daily active users" },
            { metric: "Content Shared", value: "+203%", description: "User-generated content" },
        ],
        tags: ["Social", "Real-time", "Community", "Mobile-First", "Engagement"],
    },
];

const CATEGORIES = ["All", "E-commerce", "Web App", "Dashboard", "SaaS", "Social"];
const INDUSTRIES = ["All", "E-commerce", "Healthcare", "Retail", "Finance", "SaaS", "Social"];

export default function CaseStudiesSection() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [activeIndustry, setActiveIndustry] = useState("All");
    const [hoveredCase, setHoveredCase] = useState<string | null>(null);

    const filteredCases = CASE_STUDIES.filter((study) => {
        const categoryMatch = activeCategory === "All" || study.category === activeCategory;
        const industryMatch = activeIndustry === "All" || study.industry === activeIndustry;
        return categoryMatch && industryMatch;
    });

    return (
        <section id="case-studies" className="relative overflow-hidden py-12 sm:py-16 lg:py-24 px-4 sm:px-6">
            {/* Animated background */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute -top-40 -left-32 w-[600px] h-[600px] rounded-full blur-3xl opacity-20 bg-gradient-to-r from-primary-400/30 to-accent-500/30" />
                <div className="absolute -bottom-48 -right-32 w-[700px] h-[700px] rounded-full blur-3xl opacity-20 bg-gradient-to-r from-accent-500/30 to-primary-400/30" />
            </div>

            <div className="container max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-8 sm:mb-12 lg:mb-16"
                >
                    <motion.span
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 text-sm font-medium text-primary-400 mb-4 px-4 py-2 rounded-full bg-primary-400/10 border border-primary-400/20"
                    >
                        <div className="w-2 h-2 rounded-full bg-primary-400 animate-pulse" />
                        CASE STUDIES
                    </motion.span>

                    <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6">
                        Real Work.{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-500">
                            Real Results.
                        </span>
                    </h2>

                    <p className="text-base sm:text-lg lg:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
                        Discover how we've helped companies transform their digital presence and achieve measurable business outcomes.
                    </p>
                </motion.div>

                {/* Filters */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="mb-8 sm:mb-12"
                >
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
                        {/* Category Filter */}
                        <div className="flex items-center gap-2 sm:gap-3 flex-wrap justify-center">
                            <span className="text-sm text-white/60 font-medium hidden sm:inline">Category:</span>
                            {CATEGORIES.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setActiveCategory(category)}
                                    className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 text-sm sm:text-base ${
                                        activeCategory === category
                                            ? "bg-primary-500 text-white shadow-lg shadow-primary-500/25 scale-105"
                                            : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10"
                                    }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>

                        {/* Industry Filter */}
                        <div className="flex items-center gap-2 sm:gap-3 flex-wrap justify-center">
                            <span className="text-sm text-white/60 font-medium hidden sm:inline">Industry:</span>
                            {INDUSTRIES.slice(0, 5).map((industry) => (
                                <button
                                    key={industry}
                                    onClick={() => setActiveIndustry(industry)}
                                    className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 text-sm sm:text-base ${
                                        activeIndustry === industry
                                            ? "bg-accent-500 text-white shadow-lg shadow-accent-500/25 scale-105"
                                            : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10"
                                    }`}
                                >
                                    {industry}
                                </button>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Featured Case Studies with ScrollStack */}
                {filteredCases.filter(s => s.featured).length > 0 && (
                    <div className="mb-12 sm:mb-16">
                        <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">
                            Featured <span className="text-primary-400">Projects</span>
                        </h3>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                            <AnimatePresence mode="wait">
                                {filteredCases
                                    .filter(s => s.featured)
                                    .slice(0, 2)
                                    .map((study, index) => (
                                        <CaseStudyCard
                                            key={study.id}
                                            study={study}
                                            index={index}
                                            isHovered={hoveredCase === study.id}
                                            onHover={setHoveredCase}
                                        />
                                    ))}
                            </AnimatePresence>
                        </div>
                    </div>
                )}

                {/* All Case Studies Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
                >
                    <AnimatePresence mode="wait">
                        {filteredCases.map((study, index) => (
                            <CaseStudyCard
                                key={study.id}
                                study={study}
                                index={index}
                                isHovered={hoveredCase === study.id}
                                onHover={setHoveredCase}
                            />
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Results Stats Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6"
                >
                    {[
                        { label: "Case Studies", value: CASE_STUDIES.length + "+" },
                        { label: "Industries", value: "6+" },
                        { label: "Success Rate", value: "98%" },
                        { label: "Client Satisfaction", value: "5.0" },
                    ].map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 + i * 0.1 }}
                            className="text-center p-4 sm:p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all"
                        >
                            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-300 mb-1 sm:mb-2">
                                {stat.value}
                            </div>
                            <div className="text-xs sm:text-sm text-white/60">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

function CaseStudyCard({
    study,
    index,
    isHovered,
    onHover,
}: {
    study: CaseStudy;
    index: number;
    isHovered: boolean;
    onHover: (id: string | null) => void;
}) {
    const cardRef = useRef<HTMLDivElement>(null);
    const inView = useInView(cardRef, { once: true, margin: "-50px" });

    const getGradientStyle = (gradientString: string) => {
        const gradients: { [key: string]: string } = {
            "blue-purple": "linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)",
            "green-teal": "linear-gradient(135deg, #10B981 0%, #14B8A6 100%)",
            "pink-rose": "linear-gradient(135deg, #EC4899 0%, #F43F5E 100%)",
            "cyan-blue": "linear-gradient(135deg, #06B6D4 0%, #3B82F6 100%)",
        };
        return gradients[gradientString] || gradients["blue-purple"];
    };

    const isGradient = study.imageUrl.startsWith("gradient:");

    return (
        <motion.div
            ref={cardRef}
            layout
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            whileHover={{ y: -8 }}
            transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
                delay: index * 0.1,
            }}
            className={`group relative rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary-400/50 transition-all ${
                study.featured ? "lg:col-span-2 lg:row-span-2" : ""
            }`}
            onMouseEnter={() => onHover(study.id)}
            onMouseLeave={() => onHover(null)}
        >
            {/* Featured Badge */}
            {study.featured && (
                <div className="absolute top-4 left-4 z-20 px-3 py-1.5 rounded-full bg-primary-500 text-white text-xs font-semibold shadow-lg">
                    Featured
                </div>
            )}

            {/* Image/Gradient Background */}
            <div className="relative h-48 sm:h-64 overflow-hidden">
                {isGradient ? (
                    <div
                        className="w-full h-full"
                        style={{
                            background: getGradientStyle(study.imageUrl.replace("gradient:", "")),
                        }}
                    />
                ) : (
                    <img
                        src={study.imageUrl}
                        alt={`${study.title} case study`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
                <div className="absolute inset-0 bg-primary-500/0 group-hover:bg-primary-500/10 transition-colors duration-300" />
            </div>

            {/* Content */}
            <div className="relative z-10 p-6 sm:p-8">
                {/* Client & Industry */}
                <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 rounded-full bg-primary-500/20 text-primary-300 text-xs font-medium border border-primary-500/30">
                        {study.industry}
                    </span>
                    <span className="text-sm text-white/60">{study.client}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 group-hover:text-primary-300 transition-colors">
                    {study.title}
                </h3>

                {/* Challenge (Brief) */}
                <p className="text-sm sm:text-base text-white/70 mb-4 line-clamp-2">
                    {study.challenge}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4">
                    {study.results.slice(0, 3).map((result, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: index * 0.1 + 0.2 + i * 0.05 }}
                            className="text-center p-2 sm:p-3 rounded-lg bg-white/5 border border-white/10"
                        >
                            <div className="text-lg sm:text-xl font-bold text-primary-300 mb-1">
                                {result.value}
                            </div>
                            <div className="text-[10px] sm:text-xs text-white/60 leading-tight">
                                {result.metric}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {study.tags.slice(0, 3).map((tag) => (
                        <span
                            key={tag}
                            className="px-2 sm:px-3 py-1 rounded-full bg-white/5 text-white/70 text-xs border border-white/10"
                        >
                            {tag}
                        </span>
                    ))}
                    {study.tags.length > 3 && (
                        <span className="px-2 sm:px-3 py-1 rounded-full bg-white/5 text-white/60 text-xs border border-white/10">
                            +{study.tags.length - 3}
                        </span>
                    )}
                </div>

                {/* CTA */}
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex gap-2"
                >
                    <a
                        href={study.link ? study.link : `/projects/${study.id}`}
                        target={study.link ? "_blank" : undefined}
                        rel={study.link ? "noopener noreferrer" : undefined}
                        className="flex-1 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl font-semibold text-white text-center text-sm sm:text-base hover:shadow-lg hover:shadow-primary-500/25 transition-all"
                    >
                        View Case Study
                    </a>
                </motion.div>

                {/* Testimonial Preview */}
                {study.testimonial && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: isHovered ? 1 : 0, height: isHovered ? "auto" : 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 pt-4 border-t border-white/10 overflow-hidden"
                    >
                        <p className="text-xs sm:text-sm text-white/80 italic mb-2">
                            "{study.testimonial.quote}"
                        </p>
                        <p className="text-xs text-white/60">
                            — {study.testimonial.author}, {study.testimonial.role}
                        </p>
                    </motion.div>
                )}
            </div>

            {/* Hover Glow */}
            <motion.div
                className="absolute inset-0 rounded-2xl sm:rounded-3xl border-2 border-primary-500/50 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
            />
        </motion.div>
    );
}

