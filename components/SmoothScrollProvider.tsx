"use client";

import { useEffect, ReactNode } from "react";

interface SmoothScrollProviderProps {
  children: ReactNode;
}

/**
 * Smooth Scroll Provider using Lenis
 * 
 * To enable smooth scrolling:
 * 1. Install: npm install @studio-freight/lenis
 * 2. Uncomment the Lenis code below
 * 
 * For now, this component provides native smooth scrolling via CSS
 */
export default function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  useEffect(() => {
    // Native smooth scroll via CSS
    document.documentElement.style.scrollBehavior = "smooth";

    // Optional: Initialize Lenis for advanced smooth scrolling
    // Uncomment the code below after installing @studio-freight/lenis
    /*
    import Lenis from "@studio-freight/lenis";
    
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
    */

    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return <>{children}</>;
}

