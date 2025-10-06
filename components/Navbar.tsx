"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? "bg-ink-900/70 backdrop-blur border-b border-white/10" : "bg-transparent"
        }`}
    >
      <div className="container h-16 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="inline-flex items-center gap-2 group">
          <motion.div
            className="w-8 h-8 lg:w-10 lg:h-10 rounded-xl bg-gradient-to-tr from-primary-400 to-accent-500 flex items-center justify-center shadow-lg shadow-primary-500/25"
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            <span className="text-white font-bold text-sm">NR</span>
          </motion.div>
          <span className="font-semibold tracking-wide">
            Next <span className="text-primary-400">Risor</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 text-sm">
          {["Home", "Services", "Stories", "Contact"].map((item) => (
            <a
              key={item}
              href={item === "Home" ? "#" : `#${item.toLowerCase()}`}
              className="relative opacity-85 hover:opacity-100 transition"
            >
              {item}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-primary-400 to-accent-500 transition-all group-hover:w-full" />
            </a>
          ))}
          <a
            href="#services"
            className="btn-primary shadow-[0_8px_24px_rgba(124,45,255,0.35)]"
          >
            Explore Now
          </a>
        </nav>

        {/* Mobile button */}
        <button
          aria-label="Open menu"
          className="lg:hidden p-2 rounded-xl glass"
          onClick={() => setOpen(true)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              initial={{ x: -320 }} animate={{ x: 0 }} exit={{ x: -320 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed left-0 top-0 h-full w-80 bg-ink-800 p-6 z-50 flex flex-col gap-4"
            >
              <div className="flex items-center justify-between">
                <div className="font-semibold">Menu</div>
                <button className="pill" onClick={() => setOpen(false)}>Close</button>
              </div>
              <nav className="grid gap-2 text-sm">
                {["Home", "Services", "Stories", "Contact"].map((item) => (
                  <a
                    key={item}
                    href={item === "Home" ? "#" : `#${item.toLowerCase()}`}
                    onClick={() => setOpen(false)}
                    className="pill hover:ring-1 hover:ring-white/10"
                  >
                    {item}
                  </a>
                ))}
                <a href="#services" onClick={() => setOpen(false)} className="btn-primary mt-2">
                  Explore Now
                </a>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
