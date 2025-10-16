"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

type Project = {
    title: string;
    subtitle: string;
    imageUrl: string;
    tags: string[];
    link?: string;
    category: string;
    featured?: boolean;
};

const PROJECTS: Project[] = [
    {
        title: "Doctor Appointment System",
        subtitle: "Healthcare portal & booking platform",
        imageUrl: "/images/DocAppointment.png",
        tags: ["Next.js", "React Query", "Tailwind", "Healthcare"],
        category: "Web App",
        featured: true,
    },
    {
        title: "FurniShop E-Commerce",
        subtitle: "Modern furniture shopping experience",
        imageUrl: "/images/Furnishop.png",
        tags: ["Next.js", "Redux", "E-commerce", "Animations"],
        category: "E-commerce",
        featured: true,
    },
    {
        title: "Crypto Dashboard",
        subtitle: "Real-time trading analytics",
        imageUrl: "gradient:blue-purple",
        tags: ["Web3", "Charts", "Real-time"],
        category: "Dashboard",
    },
    {
        title: "SaaS Platform",
        subtitle: "Enterprise management solution",
        imageUrl: "gradient:green-teal",
        tags: ["SaaS", "Enterprise", "Scalable"],
        category: "SaaS",
    },
    {
        title: "Social Network",
        subtitle: "Community engagement platform",
        imageUrl: "gradient:pink-rose",
        tags: ["Social", "Real-time", "Community"],
        category: "Social",
    },
    {
        title: "Fintech Mobile App",
        subtitle: "Banking and investment platform",
        imageUrl: "gradient:cyan-blue",
        tags: ["Mobile", "Finance", "Security"],
        category: "Mobile",
    },
];

const CATEGORIES = ["All", "Web App", "E-commerce", "Dashboard", "SaaS", "Social", "Mobile"];

export default function AdvancedProjectShowcase() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [hoveredProject, setHoveredProject] = useState<string | null>(null);

    const filteredProjects = activeCategory === "All"
        ? PROJECTS
        : PROJECTS.filter(project => project.category === activeCategory);

    return (
        <section id="projects" className="relative overflow-hidden py-20 lg:py-28">
            {/* Animated background */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute -top-40 -left-32 w-[600px] h-[600px] rounded-full blur-3xl opacity-20 bg-gradient-to-r from-blue-500/30 to-purple-600/30" />
                <div className="absolute -bottom-48 -right-32 w-[700px] h-[700px] rounded-full blur-3xl opacity-20 bg-gradient-to-r from-green-500/30 to-teal-600/30" />
            </div>

            <div className="container">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 text-sm font-medium text-primary-400 mb-4"
                    >
                        <div className="w-2 h-2 rounded-full bg-primary-400" />
                        PROJECT SHOWCASE
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl lg:text-6xl font-bold mb-6"
                    >
                        Our <span className="text-primary-400">Digital</span> Craft
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-300 max-w-2xl mx-auto"
                    >
                        Transforming ideas into exceptional digital experiences that drive results and inspire innovation.
                    </motion.p>
                </div>

                {/* Category Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-wrap justify-center gap-4 mb-12"
                >
                    {CATEGORIES.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeCategory === category
                                    ? "bg-primary-500 text-white shadow-lg shadow-primary-500/25"
                                    : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
                >
                    <AnimatePresence>
                        {filteredProjects.map((project, index) => (
                            <ProjectCard
                                key={project.title}
                                project={project}
                                index={index}
                                isHovered={hoveredProject === project.title}
                                onHover={setHoveredProject}
                            />
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}

function ProjectCard({
    project,
    index,
    isHovered,
    onHover
}: {
    project: Project;
    index: number;
    isHovered: boolean;
    onHover: (title: string | null) => void;
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

    const isGradient = project.imageUrl.startsWith("gradient:");

    return (
        <motion.div
            ref={cardRef}
            layout
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
                delay: index * 0.1
            }}
            className={`group relative rounded-3xl overflow-hidden cursor-pointer ${project.featured ? "lg:col-span-2 lg:row-span-2" : ""
                }`}
            onMouseEnter={() => onHover(project.title)}
            onMouseLeave={() => onHover(null)}
        >
            {/* Background Image/Gradient */}
            <div className="absolute inset-0">
                {isGradient ? (
                    <div
                        className="w-full h-full"
                        style={{
                            background: getGradientStyle(project.imageUrl.replace("gradient:", ""))
                        }}
                    />
                ) : (
                    <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />
                )}

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                {/* Hover Overlay */}
                <motion.div
                    className="absolute inset-0 bg-primary-500/20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 p-8 h-full flex flex-col justify-end min-h-[400px]">
                {/* Category Badge */}
                {/* <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium mb-4 border border-white/20"
                >
                    {project.category}
                </motion.span> */}

                {/* Title & Description */}
                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    className="text-2xl lg:text-3xl font-bold text-white mb-3"
                >
                    {project.title}
                </motion.h3>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.4 }}
                    className="text-gray-200 mb-6 text-lg"
                >
                    {project.subtitle}
                </motion.p>

                {/* Tags */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                    className="flex flex-wrap gap-2 mb-6"
                >
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white/80 text-xs font-medium border border-white/20"
                        >
                            {tag}
                        </span>
                    ))}
                </motion.div>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ delay: index * 0.1 + 0.6, type: "spring" }}
                    className="flex gap-4"
                >
                    <button className="px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-100 transition-colors">
                        View Project
                    </button>
                    <button className="px-6 py-3 border border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-colors">
                        Case Study
                    </button>
                </motion.div>
            </div>

            {/* Hover Effect Border */}
            <motion.div
                className="absolute inset-0 rounded-3xl border-2 border-primary-500/50 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
            />
        </motion.div>
    );
}