"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

type PillItem = {
  text: string;
  rotate: number; // degrees
  variant: "slate" | "gradient";
};

const PILLS: PillItem[] = [
  { text: "Cancel Anytime", rotate: -10, variant: "slate" },
  { text: "24/7 Customer Service", rotate: -6, variant: "gradient" },
  { text: "Refers & Earn", rotate: -12, variant: "slate" },
  { text: "Money Back Guarantee", rotate: -4, variant: "slate" },
];

export default function WhyChooseUsPills() {
  return (
    <section id="why-choose-us" className="relative overflow-hidden">
      {/* ambient lights */}
      <div className="pointer-events-none absolute -top-32 -left-28 h-[520px] w-[520px] rounded-full blur-3xl opacity-25 bg-gradient-to-tr from-primary-400 to-accent-500" />
      <div className="pointer-events-none absolute -bottom-40 -right-32 h-[640px] w-[640px] rounded-full blur-3xl opacity-25 bg-gradient-to-tr from-accent-500 to-primary-400" />

      <div className="container py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* LEFT: copy */}
          <div className="max-w-xl">
            <h2 className="text-3xl lg:text-5xl font-bold leading-tight">
              Why You
              <br className="hidden md:block" />
              <span className="block">Choose Next Risor?</span>
            </h2>

            <p className="mt-4 opacity-85">
              We build fast, scalable experiences with pixel-perfect detail, modern stacks,
              and flexible engagement. Clear communication, transparent milestones, and
              round-the-clock support — so you can focus on growth.
            </p>

            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary-400 to-accent-500 text-ink-900 font-medium shadow-[0_10px_30px_rgba(124,45,255,0.35)] hover:scale-[1.02] active:scale-[0.99] transition"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              Book Now
            </a>
          </div>

          {/* RIGHT: animated pills */}
          <div className="relative lg:min-h-[380px]">
            <div className="flex flex-col gap-6 lg:gap-8 lg:absolute lg:inset-0 lg:justify-center">
              {PILLS.map((pill, i) => (
                <FloatingPill key={pill.text} item={pill} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FloatingPill({ item, index }: { item: PillItem; index: number }) {
  const ref = useRef<HTMLDivElement | null>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty("--rx", `${py * - 6}deg`);
    el.style.setProperty("--ry", `${px * 10}deg`);
    el.style.setProperty("--tx", `${px * 6}px`);
    el.style.setProperty("--ty", `${py * 6}px`);
  };
  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
    el.style.setProperty("--tx", "0px");
    el.style.setProperty("--ty", "0px");
  };

  // slight stagger + float animation
  const floatDelay = 0.15 * index;

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay: floatDelay }}
      className="w-full"
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className={[
          "select-none will-change-transform",
          "rounded-full px-6 py-4 md:px-8 md:py-5",
          "shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_12px_30px_rgba(0,0,0,0.35)]",
          item.variant === "gradient"
            ? "bg-gradient-to-r from-primary-400/90 to-accent-500/90 text-white"
            : "bg-white/5 text-white ring-1 ring-white/10",
        ].join(" ")}
        style={{
          transform:
            "rotateX(var(--rx)) rotateY(var(--ry)) translate3d(var(--tx), var(--ty), 0) rotate(" +
            item.rotate +
            "deg)",
          transformStyle: "preserve-3d",
        }}
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4.2, delay: floatDelay, repeat: Infinity, ease: "easeInOut" }}
      >
        <div
          className="text-base md:text-xl font-semibold tracking-wide"
          style={{ transform: "translateZ(24px)" }}
        >
          {item.text}
        </div>
      </motion.div>
    </motion.div>
  );
}