"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";

type Logo = { name: string; src: string };


const YOUR_LOGOS: Logo[] = [
  { name: "Brain Skill", src: "/brands/brain-skill.png" },
  { name: "Violet Bangladesh", src: "/brands/violet-bangladesh.png" },
  { name: "Gadget & Tech", src: "/brands/gadget-and-tech.png" },
  { name: "Webcomiz", src: "/brands/webcomiz.png" },
];


const MID_TIER: Logo[] = [
  { name: "Airbnb", src: "/brands/airbnb.svg" },
  { name: "Trello", src: "/brands/trello.svg" },
  { name: "ClickUp", src: "/brands/clickup.svg" },
  { name: "Behance", src: "/brands/behance.svg" },
  { name: "HubSpot", src: "/brands/hubspot.svg" },
];


const DUMMIES: Logo[] = [
  { name: "NovaTech Labs", src: "/brands/novatech.svg" },
  { name: "Bluewave Innovations", src: "/brands/bluewave.svg" },
  { name: "Orion Softworks", src: "/brands/orion.svg" },
  { name: "PixelForge Media", src: "/brands/pixelforge.svg" },
  { name: "CloudAxis Solutions", src: "/brands/cloudaxis.svg" },
  { name: "VentureStack Digital", src: "/brands/venturestack.svg" },
];


const ALL: Logo[] = [
  ...MID_TIER.slice(0, 2),
  ...YOUR_LOGOS,
  ...MID_TIER.slice(2),
  ...DUMMIES,
];

export default function BrandScroller({
  speed = 40,
  gap = 56,
  maxH = 40,
}: {
  speed?: number;
  gap?: number;
  maxH?: number;
}) {

  const lane = useMemo(() => [...ALL, ...ALL], []);

  return (
    <section className="py-10 lg:py-14">
      <div className="container">
        <div className="text-center mb-6">
          <h3 className="text-xl lg:text-2xl font-semibold">
            Trusted by startups & enterprises
          </h3>
          <p className="opacity-75 text-sm mt-1">
            A mix of real partners & representative brands.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink-900 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink-900 to-transparent z-10" />


          <div className="flex">
            <motion.div
              className="flex items-center flex-none"
              animate={{
                x: [0, -((ALL.length * (100 + gap)) / 2)],
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
              {lane.map((logo, i) => (
                <LogoBadge key={`${logo.name}-${i}`} logo={logo} maxH={maxH} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LogoBadge({ logo, maxH }: { logo: Logo; maxH: number }) {
  return (
    <div
      className="group shrink-0 flex items-center justify-center"
      title={logo.name}
      aria-label={logo.name}
      style={{
        perspective: 800,
        minWidth: "100px"
      }}
    >
      <div className="px-3 py-2">
        <img
          src={logo.src}
          alt={logo.name}
          style={{
            maxHeight: maxH,
            height: "auto",
            width: "auto",
            maxWidth: "120px"
          }}
          className="object-contain opacity-95 group-hover:opacity-100 transition-all duration-200 group-hover:scale-[1.05]"
          loading="lazy"
        />
      </div>
    </div>
  );
}