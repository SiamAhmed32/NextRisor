"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

type Stat = {
    label: string;
    value: number;
    suffix?: string;
    accent: "emerald" | "sky" | "violet";
};

const STATS: Stat[] = [
    { label: "Clients Served", value: 50, suffix: "+", accent: "emerald" },
    { label: "Projects Delivered", value: 330, suffix: "+", accent: "sky" },
    { label: "Team Members", value: 15, suffix: "+", accent: "violet" },
];

export default function StatsSection() {
    return (
        <section id="stats" className="relative overflow-hidden">
            {/* subtle wide gradient backdrop to make the section feel broader */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute -top-40 -left-24 h-[520px] w-[520px] rounded-full blur-3xl opacity-25 bg-gradient-to-tr from-emerald-400/30 to-teal-500/20" />
                <div className="absolute -bottom-48 -right-24 h-[620px] w-[620px] rounded-full blur-3xl opacity-25 bg-gradient-to-tr from-sky-400/25 to-indigo-500/20" />
            </div>

            <div className="container py-16 lg:py-24">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold">Our Numbers</h2>
                    <p className="opacity-80 mt-2">
                        Momentum that matters — <span className="text-primary-400 font-medium">Next Risor</span> grows with every launch.
                    </p>
                </div>

                {/* wide, premium grid */}
                <div className="mt-10 lg:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
                    {STATS.map((s, i) => (
                        <StatCard key={s.label} stat={s} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function StatCard({ stat, index }: { stat: Stat; index: number }) {
    const ref = useRef<HTMLDivElement | null>(null);
    const [count, setCount] = useState(0);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const end = stat.value;
            const duration = 2000; // 2 seconds
            const increment = end / (duration / 16); // 60fps

            const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    setCount(end);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(start));
                }
            }, 16);

            return () => clearInterval(timer);
        }
    }, [isInView, stat.value]);

    const accentRing =
        stat.accent === "emerald"
            ? "bg-gradient-to-r from-emerald-400/30 to-teal-500/30"
            : stat.accent === "sky"
                ? "bg-gradient-to-r from-sky-400/30 to-indigo-500/30"
                : "bg-gradient-to-r from-violet-400/30 to-fuchsia-500/30";

    const accentBorder =
        stat.accent === "emerald"
            ? "ring-emerald-300/30"
            : stat.accent === "sky"
                ? "ring-sky-300/30"
                : "ring-violet-300/30";

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, delay: index * 0.07 }}
            className="group relative"
        >
            {/* hover glow */}
            <div className={`absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 blur-xl ${accentRing}`} />

            {/* glass card */}
            <div
                className={`relative rounded-2xl p-6 lg:p-8 bg-white/6 backdrop-blur-md ring-1 ${accentBorder}
                    shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_14px_40px_rgba(0,0,0,0.30)]
                    will-change-transform transition-transform duration-300 group-hover:scale-[1.015]`}
                style={{
                    transform:
                        "perspective(900px) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg)) translate3d(var(--tx,0px), var(--ty,0px), 0)",
                }}
                onMouseMove={(e) => handleMove(e.currentTarget, e)}
                onMouseLeave={(e) => handleLeave(e.currentTarget)}
            >
                {/* tiny accent chip */}
                <div className="mb-4 inline-flex items-center gap-2 text-[11px] px-2 py-1 rounded-full bg-white/8 ring-1 ring-white/10">
                    <span className="w-2 h-2 rounded-full bg-current opacity-80" />
                    <span className="opacity-85">Milestone</span>
                </div>

                {/* animated number */}
                <div className="block text-4xl lg:text-5xl font-semibold tracking-tight">
                    {count}
                    <span className="text-primary-400 align-super text-2xl lg:text-3xl ml-1">
                        {stat.suffix || ""}
                    </span>
                </div>

                <div className="mt-1.5 text-sm opacity-85">{stat.label}</div>

                {/* subtle bottom shine */}
                <div className="pointer-events-none absolute inset-x-6 bottom-3 h-[2px] rounded-full bg-gradient-to-r from-white/10 via-white/25 to-white/10 opacity-60" />
            </div>
        </motion.div>
    );
}

/* -------- 3D tilt helpers (CSS variable based, GPU friendly) -------- */
function handleMove(el: HTMLDivElement, e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty("--rx", `${py * -6}deg`);
    el.style.setProperty("--ry", `${px * 10}deg`);
    el.style.setProperty("--tx", `${px * 6}px`);
    el.style.setProperty("--ty", `${py * 6}px`);
}

function handleLeave(el: HTMLDivElement) {
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
    el.style.setProperty("--tx", "0px");
    el.style.setProperty("--ty", "0px");
}