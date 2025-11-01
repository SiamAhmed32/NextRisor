"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";

type Logo = {
  name: string;
  src: string;
  href?: string;
};

// Our valued partners - real clients
const VALUED_PARTNERS: Logo[] = [
  { name: "Brain Skill", src: "/brands/brain-skill.png" },
  { name: "Violet Bangladesh", src: "/brands/violet-bangladesh.png" },
  { name: "Gadget & Tech", src: "/brands/gadget-and-tech.png" },
  { name: "Webcomiz", src: "/brands/webcomiz.png" },
];

// Additional trusted brands
const TRUSTED_BRANDS: Logo[] = [
  { name: "Airbnb", src: "/brands/airbnb.svg" },
  { name: "Trello", src: "/brands/trello.svg" },
  { name: "ClickUp", src: "/brands/clickup.svg" },
  { name: "Behance", src: "/brands/behance.svg" },
  { name: "HubSpot", src: "/brands/hubspot.svg" },
];

// Representative brands
const REPRESENTATIVE_BRANDS: Logo[] = [
  { name: "NovaTech Labs", src: "/brands/novatech.svg" },
  { name: "Bluewave Innovations", src: "/brands/bluewave.svg" },
  { name: "Orion Softworks", src: "/brands/orion.svg" },
  { name: "PixelForge Media", src: "/brands/pixelforge.svg" },
  { name: "CloudAxis Solutions", src: "/brands/cloudaxis.svg" },
  { name: "VentureStack Digital", src: "/brands/venturestack.svg" },
];

// Combined list: valued partners first, then others
const ALL_LOGOS: Logo[] = [
  ...TRUSTED_BRANDS.slice(0, 2),
  ...VALUED_PARTNERS,
  ...TRUSTED_BRANDS.slice(2),
  ...REPRESENTATIVE_BRANDS,
];

interface BrandScrollerProps {
  speed?: number;
  gap?: number;
  maxH?: number;
  title?: string;
  subtitle?: string;
}

export default function BrandScroller({
  speed = 40,
  gap = 56,
  maxH = 40,
  title = "Our Valued Partners",
  subtitle = "Trusted by innovative companies and growing startups",
}: BrandScrollerProps) {
  // Create infinite scroll by duplicating the array
  const infiniteLane = useMemo(() => [...ALL_LOGOS, ...ALL_LOGOS], []);

  // Calculate scroll distance (half of the duplicated array width)
  const scrollDistance = useMemo(() => {
    const itemWidth = 100 + gap;
    return -(ALL_LOGOS.length * itemWidth);
  }, [gap]);

  return (
    <section className="py-10 lg:py-14 relative overflow-hidden">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 lg:mb-12"
        >
          <h3 className="text-xl lg:text-2xl font-semibold text-white mb-2">
            {title}
          </h3>
          <p className="opacity-75 text-sm lg:text-base mt-1 text-white/70">
            {subtitle}
          </p>
        </motion.div>

        {/* Scrolling container */}
        <div className="relative overflow-hidden">
          {/* Gradient fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink-900 via-ink-900/50 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink-900 via-ink-900/50 to-transparent z-10" />

          {/* Scrolling animation */}
          <motion.div
            className="flex items-center flex-none"
            animate={{
              x: [0, scrollDistance],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: speed,
                ease: "linear",
              },
            }}
            style={{ gap: `${gap}px` }}
          >
            {infiniteLane.map((logo, index) => (
              <LogoCard
                key={`${logo.name}-${index}`}
                logo={logo}
                maxH={maxH}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

interface LogoCardProps {
  logo: Logo;
  maxH: number;
  index: number;
}

function LogoCard({ logo, maxH, index }: LogoCardProps) {
  const isValuedPartner = VALUED_PARTNERS.some((p) => p.name === logo.name);

  return (
    <motion.div
      className="group shrink-0 flex items-center justify-center"
      title={logo.name}
      aria-label={logo.name}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      style={{
        minWidth: "100px",
        perspective: 800,
      }}
    >
      <motion.div
        className={`px-4 py-3 rounded-xl transition-all duration-300 ${
          isValuedPartner
            ? "bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10"
            : "hover:bg-white/5"
        }`}
        whileHover={{ y: -4, scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="relative">
          <img
            src={logo.src}
            alt={`${logo.name} logo`}
            style={{
              maxHeight: maxH,
              height: "auto",
              width: "auto",
              maxWidth: "120px",
            }}
            className="object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
            loading="lazy"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}