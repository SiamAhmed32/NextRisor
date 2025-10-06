"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactSection() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            console.log(form);
            setIsSubmitting(false);
            setForm({ name: "", email: "", subject: "", message: "" });
        }, 2000);
    }

    const contactMethods = [
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                </svg>
            ),
            title: "Chat with us",
            description: "Our friendly team is here to help.",
            contact: "contact@nextrisor.com"
        },
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
            ),
            title: "Call us",
            description: "Mon-Fri from 9am to 5pm.",
            contact: "+1 (555) 123-4567"
        },
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                </svg>
            ),
            title: "Visit us",
            description: "Come say hello at our office.",
            contact: "123 Design Street, Creative City"
        }
    ];

    return (
        <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
            <div className="pointer-events-none absolute inset-0 -z-10">
                <motion.div
                    className="absolute -top-40 -left-20 w-[700px] h-[700px] rounded-full blur-3xl opacity-15"
                    animate={{
                        background: [
                            "radial-gradient(50% 50% at 50% 50%, rgba(124, 45, 255, 0.25), rgba(124, 45, 255, 0))",
                            "radial-gradient(50% 50% at 50% 50%, rgba(236, 72, 153, 0.25), rgba(236, 72, 153, 0))",
                            "radial-gradient(50% 50% at 50% 50%, rgba(124, 45, 255, 0.25), rgba(124, 45, 255, 0))",
                        ]
                    }}
                    transition={{ duration: 8, repeat: Infinity }}
                />
                <motion.div
                    className="absolute -bottom-40 -right-20 w-[700px] h-[700px] rounded-full blur-3xl opacity-15"
                    animate={{
                        background: [
                            "radial-gradient(50% 50% at 50% 50%, rgba(236, 72, 153, 0.25), rgba(236, 72, 153, 0))",
                            "radial-gradient(50% 50% at 50% 50%, rgba(124, 45, 255, 0.25), rgba(124, 45, 255, 0))",
                            "radial-gradient(50% 50% at 50% 50%, rgba(236, 72, 153, 0.25), rgba(236, 72, 153, 0))",
                        ]
                    }}
                    transition={{ duration: 10, repeat: Infinity }}
                />
            </div>

            <div className="container">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mb-6">
                                <div className="flex space-x-1">
                                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                    <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
                                    <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
                                </div>
                                <span className="text-sm font-medium text-white/80">Get in touch</span>
                            </div>

                            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                                Let's Start Your
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
                                    Project Together
                                </motion.span>
                            </h2>

                            <p className="text-xl text-white/70 leading-relaxed">
                                Ready to bring your vision to life? Let's discuss your project and create something extraordinary together.
                            </p>
                        </motion.div>

                        <div className="space-y-6">
                            {contactMethods.map((method, index) => (
                                <motion.div
                                    key={method.title}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 border border-primary-500/30 flex items-center justify-center text-primary-400 flex-shrink-0">
                                        {method.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-white mb-1">{method.title}</h3>
                                        <p className="text-white/60 text-sm mb-2">{method.description}</p>
                                        <p className="text-white/80 font-medium">{method.contact}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-10"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-white/80 mb-2">Your Name</label>
                                    <motion.input
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 placeholder-white/40 focus:border-primary-400 focus:ring-2 focus:ring-primary-400/20 outline-none transition-all"
                                        whileFocus={{ scale: 1.02 }}
                                        transition={{ type: "spring", stiffness: 400 }}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-white/80 mb-2">Email Address</label>
                                    <motion.input
                                        name="email"
                                        type="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 placeholder-white/40 focus:border-primary-400 focus:ring-2 focus:ring-primary-400/20 outline-none transition-all"
                                        whileFocus={{ scale: 1.02 }}
                                        transition={{ type: "spring", stiffness: 400 }}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-white/80 mb-2">Subject</label>
                                <motion.input
                                    name="subject"
                                    value={form.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 placeholder-white/40 focus:border-primary-400 focus:ring-2 focus:ring-primary-400/20 outline-none transition-all"
                                    whileFocus={{ scale: 1.02 }}
                                    transition={{ type: "spring", stiffness: 400 }}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-white/80 mb-2">Your Message</label>
                                <motion.textarea
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 placeholder-white/40 focus:border-primary-400 focus:ring-2 focus:ring-primary-400/20 outline-none transition-all resize-none"
                                    whileFocus={{ scale: 1.02 }}
                                    transition={{ type: "spring", stiffness: 400 }}
                                />
                            </div>

                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl font-semibold text-white shadow-2xl shadow-primary-500/25 hover:shadow-primary-500/40 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-3"
                                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                            >
                                {isSubmitting ? (
                                    <>
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                                        />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                                        </svg>
                                        Send Message
                                    </>
                                )}
                            </motion.button>
                        </form>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-center text-white/60 text-sm mt-6"
                        >
                            We'll get back to you within 24 hours
                        </motion.p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}