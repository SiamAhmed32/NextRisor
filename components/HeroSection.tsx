"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

export default function HeroSection() {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const tiltRef = useRef<HTMLDivElement | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const wrap = wrapRef.current;
    const tilt = tiltRef.current;
    if (!wrap || !tilt) return;

    const onMove = (e: MouseEvent) => {
      const rect = wrap.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;

      setMousePosition({ x: px, y: py });

      gsap.to(".hero-blob-1", { x: px * 40, y: py * 40, duration: 1.5, ease: "power2.out" });
      gsap.to(".hero-blob-2", { x: -px * 60, y: -py * 60, duration: 1.5, ease: "power2.out" });
      gsap.to(".hero-blob-3", { x: px * 30, y: -py * 30, duration: 1.5, ease: "power2.out" });

      gsap.to(tilt, {
        rotateY: px * 8,
        rotateX: -py * 8,
        transformPerspective: 1200,
        transformOrigin: "center",
        duration: 0.8,
        ease: "power2.out",
      });
    };

    const onLeave = () => {
      gsap.to(".hero-blob-1", { x: 0, y: 0, duration: 1.2, ease: "power3.out" });
      gsap.to(".hero-blob-2", { x: 0, y: 0, duration: 1.2, ease: "power3.out" });
      gsap.to(".hero-blob-3", { x: 0, y: 0, duration: 1.2, ease: "power3.out" });
      gsap.to(tilt, { rotateX: 0, rotateY: 0, duration: 0.8, ease: "power3.out" });
    };

    wrap.addEventListener("mousemove", onMove as any);
    wrap.addEventListener("mouseleave", onLeave as any);

    return () => {
      wrap.removeEventListener("mousemove", onMove as any);
      wrap.removeEventListener("mouseleave", onLeave as any);
    };
  }, []);

  const floatingElements = [
    { delay: 0, text: "Web Design" },
    { delay: 0.3, text: "UI/UX" },
    { delay: 0.6, text: "Development" },
    { delay: 0.9, text: "SEO" },
    { delay: 1.2, text: "Branding" },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-ink-900 flex items-center">
      <div ref={wrapRef} className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10"
                >
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
                    <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
                  </div>
                  <span className="text-sm font-medium text-white/80">We're accepting new projects</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-5xl lg:text-7xl font-bold leading-tight"
                >
                  Build Your
                  <motion.span
                    className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-500"
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    style={{
                      backgroundSize: "200% 200%"
                    }}
                  >
                    Digital Future
                  </motion.span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-xl text-white/70 leading-relaxed"
                >
                  We transform ideas into exceptional digital experiences.
                  Full-stack development, stunning design, and measurable results.
                </motion.p>
              </div>

              <motion.div
                ref={tiltRef}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 will-change-transform"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl font-semibold text-white shadow-2xl shadow-primary-500/25 hover:shadow-primary-500/40 transition-all duration-300"
                >
                  Start Your Project
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl font-semibold text-white hover:bg-white/10 transition-all duration-300 flex items-center gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  View Our Work
                </motion.button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex items-center gap-8 pt-8"
              >

              </motion.div>
            </motion.div>

            {floatingElements.map((item, index) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: item.delay,
                  type: "spring",
                  stiffness: 100
                }}
                className="absolute hidden lg:block"
                style={{
                  top: `${20 + index * 15}%`,
                  left: `${index % 2 === 0 ? -10 : 90}%`,
                }}
              >
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                  className="px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white/70 text-sm"
                >
                  {item.text}
                </motion.div>
              </motion.div>
            ))}
          </div>

          <div className="relative lg:block hidden">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: 10 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative"
            >
              <div className="relative z-10 w-full h-96 rounded-3xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 backdrop-blur-md border border-white/10 shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(124,45,255,0.1),transparent_50%)]" />

                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-primary-500/30"
                />

                <motion.div
                  animate={{
                    rotate: -360,
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-accent-500/30"
                />

                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                    }}
                    className="w-32 h-32 rounded-2xl bg-gradient-to-br from-primary-400 to-accent-500 shadow-2xl flex items-center justify-center"
                  >
                    <div className="text-white font-bold text-2xl">NR</div>
                  </motion.div>
                </div>
              </div>

              <motion.div
                animate={{
                  x: [0, 10, 0],
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="absolute -top-4 -right-4 w-24 h-24 rounded-2xl bg-gradient-to-br from-green-500 to-teal-500 opacity-20"
              />

              <motion.div
                animate={{
                  x: [0, -15, 0],
                  y: [0, 15, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
                className="absolute -bottom-6 -left-6 w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 opacity-20"
              />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0">
        <div className="hero-blob-1 absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-15 blur-3xl bg-gradient-to-r from-primary-400 to-accent-500" />
        <div className="hero-blob-2 absolute -bottom-48 -right-48 w-[800px] h-[800px] rounded-full opacity-10 blur-3xl bg-gradient-to-r from-accent-500 to-primary-400" />
        <div className="hero-blob-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-5 blur-3xl bg-gradient-to-r from-green-400 to-blue-500" />
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center"
        >
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="w-1 h-3 rounded-full bg-white/40 mt-2"
          />
        </motion.div>
      </div>
    </section>
  );
}