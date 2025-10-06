"use client";

import { useEffect, useRef } from "react";
import { motion, Variants } from "framer-motion";
import gsap from "gsap";

const IconCircle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-ink-800/70 ring-1 ring-white/5">
    {children}
  </div>
);

const baseIconProps = {
  width: 28,
  height: 28,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "white",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const IconPencil = () => (
  <svg {...baseIconProps}>
    <path d="M12 20h9" />
    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
  </svg>
);

const IconCode = () => (
  <svg {...baseIconProps}>
    <path d="M8 9l-3 3 3 3" />
    <path d="M16 9l3 3-3 3" />
    <path d="M14 4l-4 16" />
  </svg>
);

const IconClapper = () => (
  <svg {...baseIconProps}>
    <rect x="3" y="8" width="18" height="11" rx="2" />
    <path d="M3 8l4-5 5 5" />
    <path d="M9 3l5 5" />
  </svg>
);

const IconMegaphone = () => (
  <svg {...baseIconProps}>
    <path d="M3 11v2a2 2 0 0 0 2 2h2l5 4V5L7 9H5a2 2 0 0 0-2 2z" />
    <path d="M14 6.5v11" />
  </svg>
);

const IconFeather = () => (
  <svg {...baseIconProps}>
    <path d="M20 7a7 7 0 0 0-10 10L4 23l6-2a7 7 0 0 0 10-10z" />
    <path d="M14 7l-7 7" />
  </svg>
);

const IconSEO = () => (
  <svg {...baseIconProps}>
    <circle cx="11" cy="11" r="7" />
    <path d="M21 21l-4.3-4.3" />
    <path d="M8 11h6M11 8v6" />
  </svg>
);

const IconCube = () => (
  <svg {...baseIconProps}>
    <path d="M12 2l8 4.5v9L12 20l-8-4.5v-9L12 2z" />
    <path d="M12 2v18" />
    <path d="M20 6.5l-8 4.5-8-4.5" />
  </svg>
);

const IconCart = () => (
  <svg {...baseIconProps}>
    <circle cx="9" cy="20" r="1.5" />
    <circle cx="18" cy="20" r="1.5" />
    <path d="M3 3h2l2 12h11l2-8H6" />
  </svg>
);

const IconLedger = () => (
  <svg {...baseIconProps}>
    <rect x="3" y="4" width="14" height="16" rx="2" />
    <path d="M7 8h6M7 12h6M7 16h4" />
    <path d="M17 8h4M17 12h2" />
  </svg>
);

const IconSparkles = () => (
  <svg {...baseIconProps}>
    <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z" />
    <path d="M5 18l.8 2.2L8 21l-2.2.8L5 24l-.8-2.2L2 21l2.2-.8L5 18z" />
  </svg>
);

const IconGlobe = () => (
  <svg {...baseIconProps}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18" />
    <path d="M12 3a15.3 15.3 0 0 1 0 18a15.3 15.3 0 0 1 0-18" />
  </svg>
);

const IconDomain = () => (
  <svg {...baseIconProps}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M7 9h10M7 13h4" />
  </svg>
);

const IconProxy = () => (
  <svg {...baseIconProps}>
    <path d="M4 12a8 8 0 0 1 16 0" />
    <path d="M2 12h20" />
    <path d="M6 16h12" />
    <path d="M8 20h8" />
  </svg>
);

const IconTshirt = () => (
  <svg {...baseIconProps}>
    <path d="M16 3l5 3-3 4v9H6V10L3 6l5-3 2 3h4l2-3z" />
  </svg>
);

const IconCap = () => (
  <svg {...baseIconProps}>
    <path d="M3 10l9-5 9 5-9 5-9-5z" />
    <path d="M21 10v4" />
    <path d="M12 15v6" />
  </svg>
);

/** ---------- Data ---------- */

type Service = {
  title: string;
  description: string;
  Icon: React.FC;
  projects: number; // Added project count
};

const SERVICES: Service[] = [
  {
    title: "Graphic Design",
    description:
      "Stunning brand visuals, social assets, and creative systems that communicate clearly.",
    Icon: IconPencil,
    projects: 42,
  },
  {
    title: "Web & Software Development",
    description:
      "High-performance websites and custom apps, engineered for scale and speed.",
    Icon: IconCode,
    projects: 67,
  },
  {
    title: "Multimedia & Video Editing",
    description:
      "Compelling edits, motion graphics, and storytelling that keep audiences engaged.",
    Icon: IconClapper,
    projects: 28,
  },
  {
    title: "Digital Marketing",
    description:
      "Targeted campaigns and conversion-focused funnels that grow your pipeline.",
    Icon: IconMegaphone,
    projects: 35,
  },
  {
    title: "Creative Writing Solution",
    description:
      "Clear copy, scripts, and captions that fit your brand voice and convert.",
    Icon: IconFeather,
    projects: 51,
  },
  {
    title: "SEO",
    description:
      "Technical audits, on-page fixes, and content strategies that rank and retain.",
    Icon: IconSEO,
    projects: 39,
  },
  {
    title: "3D Animation & Visualization",
    description:
      "Immersive 3D scenes and animations to showcase products and ideas.",
    Icon: IconCube,
    projects: 19,
  },
  {
    title: "E-Commerce Solution",
    description:
      "Storefronts, payments, and CRM flows optimized for checkout and loyalty.",
    Icon: IconCart,
    projects: 23,
  },
  {
    title: "Accounting",
    description:
      "Accurate books, reports, and insights to keep your decisions data-driven.",
    Icon: IconLedger,
    projects: 31,
  },
  {
    title: "Special Combo",
    description:
      "Curated bundles across design, dev, and growth to hit ambitious timelines.",
    Icon: IconSparkles,
    projects: 45,
  },
  {
    title: "Premium Website",
    description:
      "Pixel-perfect builds with advanced interactions and enterprise performance.",
    Icon: IconGlobe,
    projects: 58,
  },
  {
    title: "Premium Domains",
    description:
      "Memorable domains and secure DNS for a credible, scalable presence.",
    Icon: IconDomain,
    projects: 27,
  },
  {
    title: "Proxy",
    description:
      "Fast, secure routing layers to protect privacy and improve reliability.",
    Icon: IconProxy,
    projects: 14,
  },
  {
    title: "Merchandise",
    description:
      "On-brand apparel and assets that turn your audience into advocates.",
    Icon: IconTshirt,
    projects: 22,
  },
  {
    title: "Academy",
    description:
      "Workshops and training programs tailored to your team and stack.",
    Icon: IconCap,
    projects: 33,
  },
];

/** ---------- Animations ---------- */

const containerVars: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
};

const cardVars: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.38, ease: "easeOut" } },
};

export default function ServicesSection() {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const cards = cardsRef.current;
    const handlers: Array<{
      enter: (e: MouseEvent) => void;
      move: (e: MouseEvent) => void;
      leave: () => void;
    }> = [];

    cards.forEach((el) => {
      if (!el) return;

      const bounds = () => el.getBoundingClientRect();

      const onEnter = () => {
        gsap.to(el, { duration: 0.25, scale: 1.02, boxShadow: "0 12px 36px rgba(0,0,0,0.55)" });
      };

      const onMove = (e: MouseEvent) => {
        const b = bounds();
        const relX = e.clientX - b.left;
        const relY = e.clientY - b.top;
        const percentX = (relX / b.width) - 0.5;  // -0.5..0.5
        const percentY = (relY / b.height) - 0.5;

        const rotateY = percentX * 10; // left/right
        const rotateX = -percentY * 10; // up/down

        gsap.to(el, {
          duration: 0.2,
          rotateX,
          rotateY,
          transformPerspective: 800,
          transformOrigin: "center",
        });
      };

      const onLeave = () => {
        gsap.to(el, {
          duration: 0.35,
          rotateX: 0,
          rotateY: 0,
          scale: 1,
          boxShadow: "0 8px 30px rgba(0,0,0,0.45)",
        });
      };

      el.addEventListener("mouseenter", onEnter as any);
      el.addEventListener("mousemove", onMove as any);
      el.addEventListener("mouseleave", onLeave as any);

      handlers.push({ enter: onEnter as any, move: onMove as any, leave: onLeave });
    });

    return () => {
      cards.forEach((el, i) => {
        if (!el) return;
        const h = handlers[i];
        el.removeEventListener("mouseenter", h?.enter as any);
        el.removeEventListener("mousemove", h?.move as any);
        el.removeEventListener("mouseleave", h?.leave as any);
      });
    };
  }, []);

  return (
    <section id="services" className="py-16 lg:py-24">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl lg:text-5xl font-semibold">Our Services</h2>
          <p className="opacity-80 mt-3">
            A full-stack creative and engineering team to design, build, and grow your brand.
          </p>
        </div>

        <motion.div
          variants={containerVars}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SERVICES.map(({ title, description, Icon, projects }, i) => (
            <motion.article
              key={title}
              variants={cardVars}
              ref={(el) => {
                if (el) cardsRef.current[i] = el;
              }}
              className="rounded-3xl p-6 glass shadow-card transition will-change-transform
                         ring-1 ring-white/5 hover:ring-primary-400/40 relative"
            >
              {/* Project count badge */}
              <div className="absolute top-4 right-4 px-2 py-1 rounded-full bg-primary-400/20 ring-1 ring-primary-400/30 text-primary-300 text-xs font-medium">
                {projects}+ Projects
              </div>

              <IconCircle>
                <Icon />
              </IconCircle>

              <h3 className="text-lg font-semibold mb-2">{title}</h3>
              <p className="opacity-80 text-sm mb-6">{description}</p>

              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm opacity-90 hover:opacity-100"
              >
                Read More
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}