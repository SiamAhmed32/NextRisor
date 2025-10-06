"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#" },
        { name: "Our Services", href: "#services" },
        { name: "Case Studies", href: "#projects" },
        { name: "Careers", href: "#" },
        { name: "Blog", href: "#" },
      ]
    },
    {
      title: "Services",
      links: [
        { name: "Web Development", href: "#services" },
        { name: "UI/UX Design", href: "#services" },
        { name: "Mobile Apps", href: "#services" },
        { name: "Branding", href: "#services" },
        { name: "SEO & Marketing", href: "#services" },
      ]
    },
    {
      title: "Connect",
      links: [
        { name: "Contact Us", href: "#contact" },
        { name: "Get Quote", href: "#contact" },
        { name: "Support", href: "#" },
        { name: "Partnership", href: "#" },
      ]
    }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "#",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: "GitHub",
      href: "#",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    },
    {
      name: "Dribbble",
      href: "#",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm9.747 10.689c-.507-.094-1.017-.163-1.529-.208-.447 1.372-1.011 2.685-1.678 3.927.714.271 1.393.619 2.029 1.039.271-1.648.178-3.345-.822-4.758zM16.5 5.715c.824.999 1.36 2.204 1.544 3.511 1.299-.194 2.58-.539 3.819-1.025-.645-1.184-1.659-2.149-2.896-2.771-.447.427-.865.885-1.251 1.371-.086.102-.172.202-.216.314zm-2.9-.915c.284-.33.582-.65.894-.96-1.624-.75-3.495-1.056-5.394-.894.945.495 1.779 1.185 2.447 2.025.33-.03.66-.044.991-.044.975 0 1.944.135 2.874.394.06-.165.119-.33.178-.495v-.026zM8.25 4.5c-1.8.18-3.539.75-5.049 1.649.405 1.184 1.05 2.259 1.874 3.174 1.214-.225 2.429-.405 3.644-.539-.36-1.409-.494-2.868-.394-4.284h-.075zm-4.649 8.324c-.629-.854-1.125-1.814-1.463-2.849-1.125 1.349-1.799 3.044-1.799 4.874 0 1.484.48 2.854 1.289 3.959 1.004-1.349 2.069-2.649 3.194-3.914-.809-.495-1.554-1.08-2.221-1.77zm2.846 5.174c-1.139 1.244-2.279 2.489-3.314 3.869.914.629 1.989.989 3.119.989.81 0 1.584-.18 2.279-.494-.225-1.289-.36-2.594-.404-3.914-.585.15-1.169.284-1.68.55zm5.553 4.423c-.314 0-.629-.015-.943-.045.045-1.349.27-2.684.659-3.974.629.045 1.259.09 1.888.149.18 1.334.135 2.684-.135 3.989-.539-.12-1.094-.18-1.469-.12zm4.423-1.349c-.254-1.244-.315-2.534-.18-3.809 1.259.12 2.489.39 3.659.809-.12 1.484-.659 2.849-1.604 3.844-1.029-1.004-1.799-2.204-1.875-3.844zm3.034-5.423c-1.139-.42-2.324-.69-3.539-.81.18-1.004.405-1.989.675-2.974.72 1.004 1.214 2.204 1.394 3.464.495-.24.989-.48 1.47-.68z"/>
        </svg>
      )
    },
    {
      name: "Twitter",
      href: "#",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      )
    }
  ];

  return (
    <footer className="relative py-20 bg-ink-900/80 backdrop-blur-xl border-t border-white/10">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-16">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <motion.div 
              className="inline-flex items-center gap-3 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary-400 to-accent-500 flex items-center justify-center shadow-lg shadow-primary-500/25">
                <span className="text-white font-bold text-sm">NR</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-2xl tracking-tight">
                  Next <span className="text-primary-400">Risor</span>
                </span>
                <span className="text-sm text-white/60">Digital Agency</span>
              </div>
            </motion.div>
            
            <p className="text-white/70 leading-relaxed mb-6">
              Transforming ideas into exceptional digital experiences. 
              We deliver world-class design, development, and innovation.
            </p>
            
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-primary-400 hover:border-primary-400/30 hover:bg-primary-400/10 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Columns */}
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
            >
              <h4 className="font-semibold text-white mb-6 text-lg">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <motion.li key={link.name}>
                    <motion.a
                      href={link.href}
                      className="text-white/60 hover:text-primary-400 transition-colors duration-300 text-sm"
                      whileHover={{ x: 5 }}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: (sectionIndex * 0.1) + (linkIndex * 0.05) }}
                    >
                      {link.name}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-white/10 mt-12 pt-8 flex flex-col lg:flex-row justify-between items-center gap-4"
        >
          <div className="text-white/60 text-sm">
            © {currentYear} Next Risor. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6 text-sm text-white/60">
            <motion.a
              href="#"
              className="hover:text-primary-400 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              Privacy Policy
            </motion.a>
            <motion.a
              href="#"
              className="hover:text-primary-400 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              Terms of Service
            </motion.a>
            <motion.a
              href="#"
              className="hover:text-primary-400 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              Cookies
            </motion.a>
          </div>
        </motion.div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-primary-500/10 to-accent-500/10 border border-primary-500/20 backdrop-blur-sm"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Ready to start your project?</h3>
              <p className="text-white/70">Let's create something amazing together.</p>
            </div>
            <motion.a
              href="#contact"
              className="px-8 py-3 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl font-semibold text-white shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 transition-all duration-300 whitespace-nowrap"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Today
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}