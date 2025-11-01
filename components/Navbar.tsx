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
      className={`fixed top-0 inset-x-0 z-[10001] transition-all ${scrolled || open ? "bg-ink-900/95 backdrop-blur-md border-b border-white/10" : "bg-transparent"
        }`}
    >
      <div className="container h-16 flex items-center justify-between">
        {/* Brand */}
        <a href="/" className="inline-flex items-center gap-2 group">
          <motion.div
            className="w-8 h-8 lg:w-10 lg:h-10 rounded-xl bg-gradient-to-tr from-primary-400 to-accent-500 flex items-center justify-center shadow-lg shadow-primary-500/25"
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            <span className="text-white font-bold text-sm">NR</span>
          </motion.div>
          <span className="font-semibold tracking-wide">
            Next <span className="text-primary-400">Riser</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 text-sm">
          <a
            href="/"
            className="relative opacity-85 hover:opacity-100 transition group"
          >
            Home
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-primary-400 to-accent-500 transition-all group-hover:w-full" />
          </a>
          <a
            href="/services"
            className="relative opacity-85 hover:opacity-100 transition group"
          >
            Services
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-primary-400 to-accent-500 transition-all group-hover:w-full" />
          </a>
          <a
            href="/case-studies"
            className="relative opacity-85 hover:opacity-100 transition group"
          >
            Case Studies
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-primary-400 to-accent-500 transition-all group-hover:w-full" />
          </a>
          <a
            href="/about"
            className="relative opacity-85 hover:opacity-100 transition group"
          >
            About Company
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-primary-400 to-accent-500 transition-all group-hover:w-full" />
          </a>
          <a
            href="/testimonials"
            className="relative opacity-85 hover:opacity-100 transition group"
          >
            Testimonial
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-primary-400 to-accent-500 transition-all group-hover:w-full" />
            </a>
          <a
            href="/contact"
            className="btn-primary shadow-[0_8px_24px_rgba(20,35,160,0.35)]"
          >
            Contact Us
          </a>
        </nav>

        {/* Mobile button */}
        <button
          aria-label="Open menu"
          className="lg:hidden p-2.5 rounded-xl glass z-[10002] relative"
          onClick={() => setOpen(true)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-white">
            <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[9998]"
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              initial={{ x: "-100%" }} 
              animate={{ x: 0 }} 
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed left-0 top-0 h-screen w-[85vw] max-w-sm bg-ink-900/98 backdrop-blur-xl border-r border-white/10 p-6 z-[9999] flex flex-col gap-6 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/10">
                <div className="font-bold text-lg text-white">Menu</div>
                <button 
                  className="p-2 rounded-lg hover:bg-white/10 transition-colors" 
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <nav className="grid gap-3 flex-1 overflow-y-auto">
                <a
                  href="/"
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-white font-medium"
                >
                  Home
                </a>
                <a
                  href="/services"
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-white font-medium"
                >
                  Services
                </a>
                <a
                  href="/case-studies"
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-white font-medium"
                >
                  Case Studies
                </a>
                <a
                  href="/about"
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-white font-medium"
                >
                  About Company
                </a>
                <a
                  href="/testimonials"
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-white font-medium"
                >
                  Testimonials
                </a>
                <a 
                  href="/contact" 
                  onClick={() => setOpen(false)} 
                  className="mt-auto px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl font-semibold text-white text-center shadow-lg hover:shadow-xl transition-all"
                >
                  Contact Us
                </a>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
