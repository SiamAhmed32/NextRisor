"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface HeroSectionProps {
  videoSrc?: string;
  fallbackImage?: string;
}

/**
 * Premium Hero Section with Video Background
 * 
 * Features:
 * - Full-screen video background (desktop) with gradient fallback
 * - Smooth scroll animations with GSAP ScrollTrigger
 * - Framer Motion animations with staggered children
 * - Parallax effects on scroll
 * - Responsive design (gradient on mobile for performance)
 * - Accessibility features
 * 
 * To add video:
 * 1. Place video file in /public/videos/hero-bg.mp4 (MP4/WebM format)
 * 2. Keep video size < 2MB for optimal performance
 * 3. Video will auto-fallback to gradient if not found
 */
export default function HeroSection(props: HeroSectionProps = {}) {
  const { videoSrc, fallbackImage } = props;
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax transforms
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1.05, 1]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], ["0%", "-20%"]);

  useEffect(() => {
    // Check if mobile (disable video on mobile for performance)
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    // GSAP ScrollTrigger for text fade-out (reversible)
    if (!contentRef.current || !sectionRef.current) return;

    let scrollTriggerInstance: ReturnType<typeof ScrollTrigger.create> | null = null;
    let videoTriggerInstance: ReturnType<typeof ScrollTrigger.create> | null = null;

    const ctx = gsap.context(() => {
      // Content fade animation (reversible)
      scrollTriggerInstance = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        onUpdate: (self) => {
          if (contentRef.current) {
            const progress = self.progress;
            // Make it reversible - when scrolling back up, content reappears
            gsap.to(contentRef.current, {
              opacity: 1 - progress,
              y: -50 * progress,
              duration: 0.1,
              ease: "none",
            });
          }
        },
      });

      // Video zoom-out effect (reversible)
      if (videoRef.current && !isMobile) {
        videoTriggerInstance = ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
          onUpdate: (self) => {
            if (videoRef.current) {
              const progress = self.progress;
              gsap.to(videoRef.current, {
                scale: 1.05 - (0.05 * progress),
                duration: 0.1,
                ease: "none",
              });
            }
          },
        });
      }
    });

    return () => {
      // Cleanup ScrollTriggers
      if (scrollTriggerInstance) {
        scrollTriggerInstance.kill();
      }
      if (videoTriggerInstance) {
        videoTriggerInstance.kill();
      }
      ctx.revert();
    };
  }, [isMobile]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  // Helper function to create properly typed cubic bezier ease
  const createCubicBezier = (x1: number, y1: number, x2: number, y2: number): [number, number, number, number] => {
    return [x1, y1, x2, y2];
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: createCubicBezier(0.6, -0.05, 0.01, 0.99),
      },
    },
  } as Variants;

  return (
    <section
      ref={sectionRef}
      className="relative h-screen flex items-center justify-center text-center overflow-hidden pt-16"
      aria-label="Hero section"
    >
      {/* Background Video */}
      {!isMobile && videoSrc && (
        <div className="absolute inset-0 z-0">
          <motion.video
            ref={videoRef}
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              y: videoY,
              scale: videoScale,
              opacity: videoLoaded ? 1 : 0,
            }}
            onLoadedData={() => setVideoLoaded(true)}
            onError={() => setVideoLoaded(false)}
            aria-hidden="true"
          />
          {/* Fallback gradient if video fails to load */}
          <div
            className={`absolute inset-0 bg-gradient-to-br from-primary-600/80 via-primary-600/60 to-accent-500/80 transition-opacity duration-1000 ${
              videoLoaded ? "opacity-0" : "opacity-100"
            }`}
          />
        </div>
      )}

      {/* Static gradient background for mobile */}
      {isMobile && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-500 to-accent-500" />
      )}

      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-[1]"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(20, 35, 160, 0.3), rgba(0, 0, 0, 0.4))",
            "radial-gradient(circle at 80% 50%, rgba(26, 45, 184, 0.3), rgba(0, 0, 0, 0.4))",
            "radial-gradient(circle at 20% 50%, rgba(20, 35, 160, 0.3), rgba(0, 0, 0, 0.4))",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating gradient blobs */}
      <div className="pointer-events-none absolute inset-0 z-[1]">
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 rounded-full blur-3xl opacity-20 bg-gradient-to-r from-primary-400 to-accent-500"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 rounded-full blur-3xl opacity-15 bg-gradient-to-r from-accent-500 to-primary-400"
          animate={{
            x: [0, -30, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Content */}
            <motion.div
        ref={contentRef}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 px-6 max-w-4xl mx-auto text-white"
        style={{
          // GSAP will handle opacity and y transforms via ScrollTrigger
          // Only use Framer Motion for initial animation
        }}
      >
        {/* Status Badge */}
                <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 shadow-lg"
        >
          <div className="flex space-x-1.5">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
                    <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
                  </div>
          <span className="text-sm font-medium text-white/90">
            We're accepting new projects
          </span>
                </motion.div>

        {/* Main Headline */}
                <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] mb-4 sm:mb-6"
          style={{
            fontFamily: "var(--font-inter)",
          }}
        >
          Build Your{" "}
                  <motion.span
            className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-300 via-primary-400 to-accent-500 mt-2"
                    animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
              ease: "linear",
                    }}
                    style={{
              backgroundSize: "200% 200%",
                    }}
                  >
                    Digital Future
                  </motion.span>
                </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white/90 mb-3 sm:mb-4"
        >
          Driving Innovation in Digital Experiences
        </motion.p>

        {/* Description */}
                <motion.p
          variants={itemVariants}
          className="text-sm sm:text-base md:text-lg lg:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-10"
        >
          From stunning web applications to powerful digital platforms, Next Riser powers
          the digital transformations that matter. We transform ideas into exceptional digital experiences.
                </motion.p>

        {/* CTA Buttons */}
              <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
        >
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
            className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl font-semibold text-white shadow-2xl shadow-primary-500/30 hover:shadow-primary-500/50 transition-all duration-300 flex items-center gap-2 sm:gap-3 text-sm sm:text-base"
          >
            <span>Start Your Project</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </motion.a>

          <motion.a
            href="/case-studies"
            whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
            className="px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl font-semibold text-white hover:bg-white/20 transition-all duration-300 flex items-center gap-2 sm:gap-3 text-sm sm:text-base"
          >
            <span>View Case Studies</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
            </svg>
          </motion.a>
            </motion.div>

        {/* Stats Row */}
              <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-white/10"
        >
          {[
            { value: "100+", label: "Projects Delivered" },
            { value: "50+", label: "Happy Clients" },
            { value: "5+", label: "Years Experience" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary-300 mb-1">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-white/60">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center gap-2 text-white/60 group cursor-pointer"
          onClick={() => {
            window.scrollTo({
              top: window.innerHeight,
              behavior: "smooth",
            });
          }}
        >
          <span className="text-xs font-medium uppercase tracking-wider">
            Scroll to explore
          </span>
          <motion.div
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2 group-hover:border-white/60 transition-colors"
          >
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-1.5 h-3 rounded-full bg-white/50 group-hover:bg-white/80 transition-colors"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
