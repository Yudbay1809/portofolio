import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Technologies from "./components/Technologies";
import { CONTENT } from "./constants";

const App = () => {
  const { scrollYProgress } = useScroll();
  const [showIntro, setShowIntro] = useState(true);
  const [activeSection, setActiveSection] = useState("#top");
  
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "dark";
    return localStorage.getItem("portfolio-theme") || "dark";
  });
  
  const [language, setLanguage] = useState(() => {
    if (typeof window === "undefined") return "id";
    return localStorage.getItem("portfolio-language") || "id";
  });

  // Handle Intro Timeout
  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Theme Management
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  // Language Management
  useEffect(() => {
    localStorage.setItem("portfolio-language", language);
  }, [language]);

  // Section Observer for Active State
  useEffect(() => {
    const sectionIds = ["top", "about", "education", "technologies", "experience", "projects", "contact"];
    const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find(e => e.isIntersecting);
        if (visible) setActiveSection(`#${visible.target.id}`);
      },
      { threshold: 0.3 }
    );

    sections.forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => setTheme(p => p === "dark" ? "light" : "dark");
  const toggleLanguage = () => setLanguage(lang => lang === "id" ? "en" : "id");

  const handleNavigate = useCallback((target) => {
    const sectionId = target.replace("#", "");
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }, []);

  const currentContent = CONTENT[language];

  return (
    <div className="min-h-screen selection:bg-cyber/30 selection:text-white">
      {/* Background Layers */}
      <div className="bg-grid-promax pointer-events-none" />
      
      {/* Intro Loader */}
      <AnimatePresence>
        {showIntro && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="promax-loader"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-serif italic mb-2 tracking-tighter">
                Yudha Bayu <span className="text-cyber">Prastyo</span>
              </h1>
              <p className="text-[10px] font-bold tracking-[0.5em] text-secondary uppercase opacity-60">
                Digital Architect
              </p>
              <div className="loader-bar-wrap">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.8, ease: "easeInOut" }}
                  className="loader-bar-fill"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Navbar 
        theme={theme} 
        toggleTheme={toggleTheme} 
        language={language}
        toggleLanguage={toggleLanguage}
        activeSection={activeSection} 
        onNavigate={handleNavigate} 
      />

      <main className="relative z-10">
        <Hero content={currentContent.hero} onNavigate={handleNavigate} />
        <About content={currentContent.about} />
        <Education content={currentContent.education} />
        <Technologies content={currentContent.technologies} />
        <Experience content={currentContent.experience} />
        <Project content={currentContent.projects} />
        <Contact content={currentContent.contact} />
      </main>

      {/* Modern Back to Top */}
      <AnimatePresence>
        {scrollYProgress.get() > 0.1 && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-8 right-8 z-[60] w-12 h-12 glass-panel flex items-center justify-center text-cyber hover:bg-cyber hover:text-obsidian transition-all"
          >
            ↑
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
