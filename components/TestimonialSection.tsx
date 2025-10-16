"use client";

import { useEffect, useRef } from "react";
import type React from "react";
import { motion, useInView } from "framer-motion";

/* =========================================================
   Types & Data Here
   ========================================================= */
type Review = {
    name: string;
    role: string;
    company: string;
    platform: "Google" | "Trustpilot" | "Clutch" | "G2";
    rating: number; // 1..5
    quote: string;
    initials: string; // used for avatar
    accent: "emerald" | "sky" | "violet" | "fuchsia" | "amber" | "rose";
};

const REVIEWS: Review[] = [
    {
        name: "Tanjir Jamil",
        role: "Founder",
        company: "Violet Bangladesh",
        platform: "Google",
        rating: 5,
        quote:
            "Next Risor delivered a clean, fast site with thoughtful animations. Our bounce rate dropped within a week.",
        initials: "NJ",
        accent: "violet",
    },
    {
        name: "Brain Skill",
        role: "CTO",
        company: "Brain Skill",
        platform: "Trustpilot",
        rating: 5,
        quote:
            "Pixel-perfect build, great communication, and on-time delivery. Their engineering discipline stands out.",
        initials: "AH",
        accent: "emerald",
    },
    {
        name: "Mohyminul Islam Fahim",
        role: "Product Lead",
        company: "Webcomiz",
        platform: "Clutch",
        rating: 4,
        quote:
            "Loved the micro-interactions and performance numbers. Feels premium without being heavy.",
        initials: "MK",
        accent: "sky",
    },
    {
        name: "Istihad Ahmed",
        role: "Head of Growth",
        company: "Gadget & Tech",
        platform: "G2",
        rating: 5,
        quote:
            "Clear scopes, fixed quotes, and sprint-based delivery. Easy to manage, results-driven team.",
        initials: "DL",
        accent: "amber",
    },
    {
        name: "Sadia Rahman",
        role: "Marketing Manager",
        company: "Asterix Labs",
        platform: "Google",
        rating: 5,
        quote:
            "From strategy to execution, they handled it all. Our conversions improved with the redesign.",
        initials: "SR",
        accent: "rose",
    },
    {
        name: "Ethan Park",
        role: "Ops Manager",
        company: "Nimbus Cloud",
        platform: "Trustpilot",
        rating: 4,
        quote:
            "Snappy pages, excellent accessibility, and a robust codebase. Happy to recommend.",
        initials: "EP",
        accent: "emerald",
    },
];

/* =========================================================
   Helpers
   ========================================================= */
function accentClasses(tone: Review["accent"]) {
    switch (tone) {
        case "emerald":
            return {
                ring: "ring-emerald-300/30",
                chip: "from-emerald-400/20 to-teal-500/20",
                avatar: "from-emerald-400 to-teal-500",
            };
        case "sky":
            return {
                ring: "ring-sky-300/30",
                chip: "from-sky-400/20 to-indigo-500/20",
                avatar: "from-sky-400 to-indigo-500",
            };
        case "violet":
            return {
                ring: "ring-violet-300/30",
                chip: "from-violet-400/20 to-fuchsia-500/20",
                avatar: "from-violet-400 to-fuchsia-500",
            };
        case "fuchsia":
            return {
                ring: "ring-fuchsia-300/30",
                chip: "from-fuchsia-400/20 to-pink-500/20",
                avatar: "from-fuchsia-400 to-pink-500",
            };
        case "amber":
            return {
                ring: "ring-amber-300/30",
                chip: "from-amber-400/20 to-orange-500/20",
                avatar: "from-amber-400 to-orange-500",
            };
        case "rose":
            return {
                ring: "ring-rose-300/30",
                chip: "from-rose-400/20 to-pink-500/20",
                avatar: "from-rose-400 to-pink-500",
            };
    }
}

/* =========================================================
   Star Rating
   ========================================================= */
function Stars({ value }: { value: number }) {
    return (
        <div className="inline-flex items-center gap-1" aria-label={`${value} out of 5 stars`}>
            {Array.from({ length: 5 }).map((_, i) => {
                const filled = i < value;
                return (
                    <motion.svg
                        key={i}
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        initial={{ scale: 0.9, opacity: 0.6 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.25, delay: i * 0.05 }}
                        className={filled ? "text-yellow-300" : "text-white/30"}
                        fill="currentColor"
                    >
                        <path d="M12 3l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 18.9 6.2 21l1.1-6.5L2.6 9.8l6.5-.9L12 3z" />
                    </motion.svg>
                );
            })}
        </div>
    );
}

/* =========================================================
   Tilt Helpers (Type Fixed ✅)
   ========================================================= */
function handleTilt(el: HTMLDivElement, e: React.MouseEvent<HTMLDivElement>) {
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty("--rx", `${py * -5}deg`);
    el.style.setProperty("--ry", `${px * 8}deg`);
    el.style.setProperty("--tx", `${px * 6}px`);
    el.style.setProperty("--ty", `${py * 6}px`);
    el.style.transform = `rotateX(var(--rx)) rotateY(var(--ry)) translate3d(var(--tx), var(--ty), 0)`;
}

function resetTilt(el: HTMLDivElement) {
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
    el.style.setProperty("--tx", "0px");
    el.style.setProperty("--ty", "0px");
    el.style.transform = `rotateX(0deg) rotateY(0deg) translate3d(0, 0, 0)`;
}

/* =========================================================
   Testimonial Card
   ========================================================= */
function TestimonialCard({
    review,
    idx,
    layout,
}: {
    review: Review;
    idx: number;
    layout: "left" | "right" | "center";

}) {
    const ref = useRef<HTMLDivElement | null>(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });
    const a = accentClasses(review.accent);

    const baseRotate =
        layout === "left" ? "-1.5deg" : layout === "right" ? "1.5deg" : "0deg";
    const baseTranslateY = layout === "center" ? "0px" : idx % 2 === 0 ? "-6px" : "6px";

    return (
        <motion.article
            ref={ref}
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.45, delay: idx * 0.06, ease: "easeOut" }}
            className={`relative rounded-3xl p-6 lg:p-7 bg-white/6 backdrop-blur-md ring-1 ${a.ring}
                shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_16px_44px_rgba(0,0,0,0.35)]
                will-change-transform`}
            style={{
                transform: `rotate(${baseRotate}) translateY(${baseTranslateY})`,
            }}
            onMouseMove={(e: React.MouseEvent<HTMLDivElement>) =>
                handleTilt(e.currentTarget as HTMLDivElement, e)
            }
            onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) =>
                resetTilt(e.currentTarget as HTMLDivElement)
            }
        >
            <div
                className={`absolute -inset-px rounded-3xl opacity-0 hover:opacity-100 transition duration-300 blur-xl bg-gradient-to-r ${a.chip}`}
            />

            <div className="relative z-10 flex items-center gap-4">
                <div
                    className={`w-12 h-12 shrink-0 rounded-full ring-1 ring-white/15 bg-gradient-to-br ${a.avatar} grid place-items-center text-[13px] font-semibold`}
                >
                    {review.initials}
                </div>
                <div className="min-w-0">
                    <div className="flex items-center gap-2">
                        <h3 className="font-semibold truncate">{review.name}</h3>
                        <span className="text-[11px] px-2 py-0.5 rounded-full bg-white/8 ring-1 ring-white/10">
                            {review.platform}
                        </span>
                    </div>
                    <div className="text-sm opacity-80 truncate">
                        {review.role} • {review.company}
                    </div>
                </div>
            </div>

            <div className="relative z-10 mt-3">
                <Stars value={review.rating} />
            </div>

            <p className="relative z-10 mt-3 text-sm leading-relaxed opacity-90">
                “{review.quote}”
            </p>
        </motion.article>
    );
}

/* =========================================================
   Background Mesh
   ========================================================= */
function BackgroundMesh() {
    return (
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <div
                className="absolute -top-40 -left-32 w-[560px] h-[560px] rounded-full blur-3xl opacity-25"
                style={{
                    background:
                        "radial-gradient(45% 45% at 50% 50%, rgba(56,189,248,0.55), rgba(99,102,241,0.10))",
                }}
            />
            <div
                className="absolute -bottom-36 -right-28 w-[600px] h-[600px] rounded-full blur-3xl opacity-25"
                style={{
                    background:
                        "radial-gradient(45% 45% at 50% 50%, rgba(168,85,247,0.55), rgba(236,72,153,0.10))",
                }}
            />
            <div
                className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[640px] h-[640px] rounded-full blur-3xl opacity-15"
                style={{
                    background:
                        "radial-gradient(40% 40% at 50% 50%, rgba(16,185,129,0.45), rgba(16,185,129,0.00))",
                }}
            />
        </div>
    );
}

/* =========================================================
   Mobile Slider
   ========================================================= */
function MobileSlider() {
    return (
        <div className="-mx-4 mt-8 overflow-x-auto md:hidden">
            <div className="px-4 flex gap-4 snap-x snap-mandatory">
                {REVIEWS.map((r, i) => (
                    <div key={r.name} className="snap-center shrink-0 w-[88%]">
                        <TestimonialCard review={r} idx={i} layout="center" />
                    </div>
                ))}
            </div>
        </div>
    );
}

/* =========================================================
   Desktop Layered Layout
   ========================================================= */
function DesktopLayered() {
    const left = [REVIEWS[0], REVIEWS[1]];
    const center = [REVIEWS[2], REVIEWS[3]];
    const right = [REVIEWS[4], REVIEWS[5]];

    return (
        <div className="hidden md:grid grid-cols-12 gap-6 mt-10 lg:mt-14">
            <div className="col-span-12 lg:col-span-4 space-y-6 self-start">
                {left.map((r, i) => (
                    <TestimonialCard key={r.name} review={r} idx={i} layout="left" />
                ))}
            </div>

            <div className="col-span-12 lg:col-span-4 space-y-6 lg:pt-8">
                {center.map((r, i) => (
                    <TestimonialCard key={r.name} review={r} idx={i + 2} layout="center" />
                ))}
            </div>

            <div className="col-span-12 lg:col-span-4 space-y-6 self-end">
                {right.map((r, i) => (
                    <TestimonialCard key={r.name} review={r} idx={i + 4} layout="right" />
                ))}
            </div>
        </div>
    );
}

/* =========================================================
   Section Wrapper
   ========================================================= */
export default function TestimonialsSection() {
    const headRef = useRef<HTMLDivElement | null>(null);
    const inView = useInView(headRef, { once: true, margin: "-80px" });

    useEffect(() => {
        // For future GSAP effects (optional)
    }, []);

    return (
        <section id="testimonials" className="relative overflow-hidden">
            <BackgroundMesh />

            <div className="container py-16 lg:py-24">
                <motion.div
                    ref={headRef}
                    initial={{ opacity: 0, y: 12 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="mx-auto max-w-2xl text-center"
                >
                    <span className="inline-flex items-center gap-2 text-xs pill">
                        <span className="w-2.5 h-2.5 rounded-full bg-primary-400" />
                        What People Say
                    </span>
                    <h2 className="mt-2 text-3xl lg:text-4xl font-bold">Loved by founders, <span className="text-primary-400">trusted by teams</span></h2>
                    <p className="opacity-80 mt-2">
                        Real feedback from clients across Bangladesh and beyond — built by{" "}
                        <span className="text-primary-400 font-medium">Next Risor</span>.
                    </p>
                </motion.div>

                <DesktopLayered />
                <MobileSlider />
            </div>
        </section>
    );
}
