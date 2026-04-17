import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FiGithub } from "react-icons/fi";
import { useState, useEffect } from "react";
import { CONTENT, CONTACT } from "../constants";

const Navbar = ({ theme, toggleTheme, language, toggleLanguage, activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navContent = CONTENT[language].navbar;
  const NAV_ITEMS = [
    { href: "#top", label: navContent.home },
    { href: "#about", label: navContent.about },
    { href: "#projects", label: navContent.projects },
    { href: "#experience", label: navContent.experience },
    { href: "#contact", label: navContent.contact },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 sm:p-6 font-sans">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`glass-panel flex items-center justify-between w-full max-w-5xl px-6 py-3 transition-all duration-500 ${
          isScrolled ? "py-2.5 shadow-2xl shadow-cyber/10" : ""
        }`}
      >
        {/* Logo */}
        <div 
          className="text-xl font-bold cursor-pointer group"
          onClick={() => onNavigate("#top")}
        >
          <span className="font-serif italic text-cyber transition-all duration-300 group-hover:text-glow text-2xl">Y</span>
          <span className="ml-1 text-xs font-semibold tracking-[0.2em] text-secondary uppercase opacity-80 group-hover:opacity-100 transition-opacity">Bayu</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.href}
              onClick={() => onNavigate(item.href)}
              className={`text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-300 relative py-1 ${
                activeSection === item.href 
                  ? "text-cyber" 
                  : "text-secondary hover:text-primary"
              }`}
            >
              {item.label}
              {activeSection === item.href && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-0 right-0 h-[1px] bg-cyber shadow-[0_0_8px_rgba(0,255,210,0.6)]"
                />
              )}
            </button>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleLanguage}
            className="p-2 text-[10px] font-bold tracking-widest text-primary hover:text-cyber transition-colors uppercase"
            aria-label="Toggle Language"
          >
            {language}
          </button>

          <button
            onClick={toggleTheme}
            className="p-2 text-primary hover:text-cyber transition-colors text-lg"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? "☼" : "☾"}
          </button>

          <a 
            href={CONTACT.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-primary hover:text-cyber transition-colors text-lg"
            aria-label="GitHub Profile"
          >
            <FiGithub />
          </a>
          
          <button className="hidden sm:block cyber-button text-[10px] py-2 px-6 uppercase tracking-widest font-bold">
            {navContent.resume}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 md:hidden bg-obsidian/95 backdrop-blur-3xl flex flex-col items-center justify-center gap-8"
          >
            {NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                onClick={() => {
                  onNavigate(item.href);
                  setIsMobileMenuOpen(false);
                }}
                className={`text-4xl font-serif tracking-tight transition-all duration-300 ${
                  activeSection === item.href ? "text-cyber italic translate-x-3" : "text-primary opacity-60"
                }`}
              >
                {item.label}
              </button>
            ))}
            <button 
              className="mt-8 ghost-button text-sm px-10"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {navContent.close}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
