"use client";

import { motion } from "framer-motion";

export default function CTASection() {
    return (
        <section className="relative py-24 lg:py-32 overflow-hidden">
            <div className="pointer-events-none absolute inset-0 -z-10">
                <motion.div
                    className="absolute -top-40 left-1/4 w-[800px] h-[800px] rounded-full blur-3xl opacity-15"
                    animate={{
                        background: [
                            "radial-gradient(50% 50% at 50% 50%, rgba(124, 45, 255, 0.3), rgba(124, 45, 255, 0))",
                            "radial-gradient(50% 50% at 50% 50%, rgba(236, 72, 153, 0.3), rgba(236, 72, 153, 0))",
                            "radial-gradient(50% 50% at 50% 50%, rgba(124, 45, 255, 0.3), rgba(124, 45, 255, 0))",
                        ]
                    }}
                    transition={{ duration: 8, repeat: Infinity }}
                />
                <motion.div
                    className="absolute -bottom-40 right-1/4 w-[700px] h-[700px] rounded-full blur-3xl opacity-15"
                    animate={{
                        background: [
                            "radial-gradient(50% 50% at 50% 50%, rgba(236, 72, 153, 0.3), rgba(236, 72, 153, 0))",
                            "radial-gradient(50% 50% at 50% 50%, rgba(124, 45, 255, 0.3), rgba(124, 45, 255, 0))",
                            "radial-gradient(50% 50% at 50% 50%, rgba(236, 72, 153, 0.3), rgba(236, 72, 153, 0))",
                        ]
                    }}
                    transition={{ duration: 10, repeat: Infinity }}
                />
            </div>

            <div className="container">
                <div className="relative max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mb-8"
                    >
                        <div className="flex space-x-1">
                            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                            <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
                            <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
                        </div>
                        <span className="text-sm font-medium text-white/80">Ready to start your project?</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-4xl lg:text-6xl font-bold mb-6"
                    >
                        Let's Build Your
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
                            Next Big Idea
                        </motion.span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed"
                    >
                        From concept to launch, we transform visionary ideas into exceptional digital experiences
                        that drive real business results and captivate audiences.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <motion.a
                            href="#contact"
                            className="px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl font-semibold text-white shadow-2xl shadow-primary-500/25 hover:shadow-primary-500/40 transition-all duration-300 flex items-center gap-3"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                            </svg>
                            Start Conversation
                        </motion.a>

                        <motion.a
                            href="#projects"
                            className="px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl font-semibold text-white hover:bg-white/10 transition-all duration-300 flex items-center gap-3"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M2 12h20M12 2v20" />
                            </svg>
                            View Our Work
                        </motion.a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-12 pt-8 border-t border-white/10"
                    >
                        <div className="flex items-center gap-4">
                            <div className="flex -space-x-3">
                                {[1, 2, 3].map((i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                                        className="w-10 h-10 rounded-full bg-gradient-to-r from-primary-400 to-accent-500 border-2 border-ink-900"
                                    />
                                ))}
                            </div>
                            <div className="text-left">
                                <div className="font-semibold text-white">Join 300+ Happy Clients</div>
                                <div className="text-sm text-white/60">Worldwide satisfaction</div>
                            </div>
                        </div>

                        <div className="h-8 w-px bg-white/20 hidden sm:block" />

                        <div className="text-center sm:text-left">
                            <div className="font-semibold text-white">24-48 Hour Response</div>
                            <div className="text-sm text-white/60">Quick project kickoff</div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
            >
                <motion.div
                    animate={{
                        y: [0, 10, 0],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                    }}
                    className="text-white/40 text-sm flex items-center gap-2"
                >
                    <span>Scroll to explore</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 5v14M5 12h14" />
                    </svg>
                </motion.div>
            </motion.div>
        </section>
    );
}