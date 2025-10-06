"use client";

import { useMemo, useRef, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

type Step = {
    label: string;
    Icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
    number: string;
};


const PhoneIcon = (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" {...p}>
        <path d="M6 4h6a2 2 0 0 1 2 2v2M9 20h6a2 2 0 0 0 2-2v-2M7 7l10 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
);
const RequirementsIcon = (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" {...p}>
        <path d="M6 4h12v16H6z" stroke="currentColor" strokeWidth="1.8" />
        <path d="M9 8h6M9 12h6M9 16h3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
);
const CustomizeIcon = (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" {...p}>
        <path d="M4 20l6-6M3 21l2-6 4 4-6 2zM14 5l5 5M11 8l5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
);
const DevelopIcon = (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" {...p}>
        <path d="M8 8l-4 4 4 4M16 8l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
);
const QAIcon = (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" {...p}>
        <path d="M12 3l8 4v6c0 5-4 8-8 8s-8-3-8-8V7l8-4z" stroke="currentColor" strokeWidth="1.8" />
        <path d="M9.5 13.5l1.8 1.8 3.2-3.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
);
const DeliveryIcon = (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" {...p}>
        <path d="M3 7h10v10H3zM13 10h4l4 4v3h-8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="7" cy="17" r="2" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17" cy="17" r="2" stroke="currentColor" strokeWidth="1.8" />
    </svg>
);


const STEPS: Step[] = [
    { number: "01", label: "Book a Call", Icon: PhoneIcon },
    { number: "02", label: "Requirement Analysis", Icon: RequirementsIcon },
    { number: "03", label: "Service Customisation", Icon: CustomizeIcon },
    { number: "04", label: "Implement & Develop", Icon: DevelopIcon },
    { number: "05", label: "Quality Assurance", Icon: QAIcon },
    { number: "06", label: "Delivery & Support", Icon: DeliveryIcon },
];

function Pill({ step, index }: { step: Step; index: number }) {
    const ref = useRef<HTMLDivElement | null>(null);

    useLayoutEffect(() => {
        const el = ref.current;
        if (!el) return;
        el.style.setProperty("--rx", "0deg");
        el.style.setProperty("--ry", "0deg");
        el.style.setProperty("--tx", "0px");
        el.style.setProperty("--ty", "0px");
    }, []);

    const onMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        el.style.setProperty("--rx", `${py * -4}deg`);
        el.style.setProperty("--ry", `${px * 6}deg`);
        el.style.setProperty("--tx", `${px * 6}px`);
        el.style.setProperty("--ty", `${py * 6}px`);
    };

    const onLeave = () => {
        const el = ref.current;
        if (!el) return;
        el.style.setProperty("--rx", "0deg");
        el.style.setProperty("--ry", "0deg");
        el.style.setProperty("--tx", "0px");
        el.style.setProperty("--ty", "0px");
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, delay: index * 0.05 }}
            className="relative"
        >
            <div className="absolute -inset-1 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 blur-xl bg-gradient-to-r from-primary-400/25 to-accent-500/25" />
            <div
                ref={ref}
                onMouseMove={onMove}
                onMouseLeave={onLeave}
                className="group relative flex items-center gap-3 rounded-full pl-4 pr-5 py-3 
                   bg-white/5 ring-1 ring-white/10 backdrop-blur-md
                   shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_12px_30px_rgba(0,0,0,0.35)]
                   text-white/95 will-change-transform"
                style={{
                    transform: "rotateX(var(--rx)) rotateY(var(--ry)) translate3d(var(--tx), var(--ty), 0)",
                    transformStyle: "preserve-3d",
                }}
            >
                <div
                    className="size-10 rounded-full grid place-items-center ring-1 ring-white/15 
                     bg-gradient-to-br from-white/12 to-white/5"
                    style={{ transform: "translateZ(22px)" }}
                >
                    <step.Icon className="w-5 h-5" />
                </div>
                <div className="font-medium whitespace-nowrap text-sm lg:text-base" style={{ transform: "translateZ(16px)" }}>
                    {step.label}
                </div>
                <div
                    className="ml-auto text-[11px] px-2 py-0.5 rounded-full ring-1 ring-white/10 
                     bg-white/5 text-white/75"
                    style={{ transform: "translateZ(14px)" }}
                >
                    {step.number}
                </div>
            </div>
        </motion.div>
    );
}


function MobileSlider() {
    return (
        <div className="mt-8">
            <Swiper
                modules={[Autoplay, FreeMode]}
                freeMode
                autoplay={{ delay: 2200, disableOnInteraction: false }}
                spaceBetween={12}
                slidesPerView={1.1}
                centeredSlides
                className="!px-2"
            >
                {STEPS.map((s, i) => (
                    <SwiperSlide key={s.label}>
                        <Pill step={s} index={i} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}


function DesktopOrbitLike() {

    const left = useMemo(() => [STEPS[0], STEPS[1], STEPS[2]], []);
    const right = useMemo(() => [STEPS[3], STEPS[4], STEPS[5]], []);

    return (
        <div className="mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-center gap-8">

            <div className="hidden lg:flex flex-col gap-6">
                {left.map((s, i) => <Pill key={s.label} step={s} index={i} />)}
            </div>


            <div className="relative mx-auto">

                <div className="absolute -inset-[18%] rounded-full ring-1 ring-white/10" />
                <div className="absolute -inset-[6%] rounded-full ring-1 ring-white/10" />

                <motion.div
                    initial={{ opacity: 0, scale: 0.92 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6 }}
                    className="relative size-56 lg:size-64 rounded-full grid place-items-center 
                     bg-gradient-to-br from-white/10 to-white/5 ring-1 ring-white/12 backdrop-blur-md
                     shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_20px_60px_rgba(0,0,0,0.35)]"
                >
                    <div className="text-center px-6">
                        <div className="text-xl lg:text-2xl font-semibold">How it Works?</div>
                        <div className="mt-1 text-xs opacity-75">Six clean steps from idea to launch</div>
                    </div>


                </motion.div>
            </div>

            {/* Right pills */}
            <div className="hidden lg:flex flex-col gap-6">
                {right.map((s, i) => <Pill key={s.label} step={s} index={i + 3} />)}
            </div>

            {/* Tablet fallback grid */}
            <div className="hidden md:grid lg:hidden grid-cols-2 gap-4 md:mt-6">
                {STEPS.map((s, i) => <Pill key={s.label} step={s} index={i} />)}
            </div>
        </div>
    );
}

/* =========================================================
   GSAP background waves (floating gradient blobs)
   ========================================================= */
function AnimatedWaves() {
    const wrap = useRef<HTMLDivElement | null>(null);
    const b1 = useRef<HTMLDivElement | null>(null);
    const b2 = useRef<HTMLDivElement | null>(null);
    const b3 = useRef<HTMLDivElement | null>(null);

    useLayoutEffect(() => {
        if (!wrap.current) return;
        const ctx = gsap.context(() => {
            // Floating paths (slow, subtle)
            gsap.to(b1.current, { x: 60, y: -30, scale: 1.08, rotate: 8, duration: 10, repeat: -1, yoyo: true, ease: "sine.inOut" });
            gsap.to(b2.current, { x: -40, y: 40, scale: 1.06, rotate: -6, duration: 12, repeat: -1, yoyo: true, ease: "sine.inOut" });
            gsap.to(b3.current, { x: 30, y: 50, scale: 1.05, rotate: 10, duration: 14, repeat: -1, yoyo: true, ease: "sine.inOut" });
        }, wrap);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={wrap} className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            {/* Blob 1 */}
            <div
                ref={b1}
                className="absolute -top-40 -left-32 w-[520px] h-[520px] rounded-full blur-3xl opacity-[0.28]"
                style={{ background: "radial-gradient(45% 45% at 50% 50%, rgba(138,79,255,0.65), rgba(83,35,178,0.10))" }}
            />
            {/* Blob 2 */}
            <div
                ref={b2}
                className="absolute -bottom-36 -right-24 w-[580px] h-[580px] rounded-full blur-3xl opacity-[0.25]"
                style={{ background: "radial-gradient(45% 45% at 50% 50%, rgba(255,100,204,0.55), rgba(83,35,178,0.08))" }}
            />
            {/* Blob 3 */}
            <div
                ref={b3}
                className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[620px] h-[620px] rounded-full blur-3xl opacity-[0.18]"
                style={{ background: "radial-gradient(40% 40% at 50% 50%, rgba(124,45,255,0.55), rgba(124,45,255,0.00))" }}
            />
        </div>
    );
}

/* =========================================================
   Main Section
   ========================================================= */
export default function HowItWorks() {
    return (
        <section id="how-it-works" className="relative overflow-hidden">
            {/* Animated GSAP background waves across the whole section */}
            <AnimatedWaves />

            {/* Ambient static lights (very soft) */}
            <div className="pointer-events-none absolute -top-28 -left-24 h-[520px] w-[520px] rounded-full blur-3xl opacity-25 bg-gradient-to-tr from-primary-400 to-accent-500" />
            <div className="pointer-events-none absolute -bottom-40 -right-28 h-[620px] w-[620px] rounded-full blur-3xl opacity-25 bg-gradient-to-tr from-accent-500 to-primary-400" />

            <div className="container py-16 lg:py-24">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5 }}
                    className="mx-auto max-w-2xl text-center"
                >
                    <h2 className="text-3xl lg:text-4xl font-bold">How It Works</h2>
                    <p className="opacity-80 mt-2">
                        A simple 6-step flow we use at <span className="text-primary-400 font-medium">Next Risor</span> to deliver high-quality outcomes.
                    </p>
                </motion.div>

                {/* Desktop / Tablet */}
                <DesktopOrbitLike />

                {/* Mobile swiper */}
                <div className="md:hidden">
                    <MobileSlider />
                </div>
            </div>
        </section>
    );
}