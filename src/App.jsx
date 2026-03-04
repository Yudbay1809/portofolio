import { useCallback, useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Technologies from "./components/Technologies";

const SECTION_NAV_ITEMS = [
  { href: "#top", label: "Hero" },
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#technologies", label: "Tech" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const App = () => {
  const { scrollYProgress } = useScroll();
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [activeSection, setActiveSection] = useState("#top");
  const [isSceneTransitioning, setIsSceneTransitioning] = useState(false);
  const wheelLockRef = useRef(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") {
      return "dark";
    }
    return localStorage.getItem("portfolio-theme") || "dark";
  });

  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);
  const spotlight = useMotionTemplate`radial-gradient(340px at ${mouseX}px ${mouseY}px, rgba(125, 211, 252, 0.14), transparent 72%)`;

  const heroY = useTransform(scrollYProgress, [0, 1], [0, -20]);
  const aboutY = useTransform(scrollYProgress, [0, 1], [0, -38]);
  const educationY = useTransform(scrollYProgress, [0, 1], [0, -55]);
  const techY = useTransform(scrollYProgress, [0, 1], [0, -45]);
  const experienceY = useTransform(scrollYProgress, [0, 1], [0, -35]);
  const projectY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const contactY = useTransform(scrollYProgress, [0, 1], [0, -25]);

  useEffect(() => {
    const introTimer = setTimeout(() => setShowIntro(false), 1650);
    return () => clearTimeout(introTimer);
  }, []);

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    const sectionIds = ["top", "about", "education", "technologies", "experience", "projects", "contact"];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element) => element !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target?.id) {
          setActiveSection(`#${visibleEntry.target.id}`);
        }
      },
      { root: null, rootMargin: "-35% 0px -45% 0px", threshold: [0.2, 0.35, 0.55, 0.8] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  const handleNavigate = useCallback((target) => {
    if (!target) {
      return;
    }

    const sectionId = target.replace("#", "");
    const targetElement = document.getElementById(sectionId);
    if (!targetElement) {
      return;
    }

    setActiveSection(target);
    setIsSceneTransitioning(true);

    window.setTimeout(() => {
      const topOffset = 92;
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - topOffset;
      window.scrollTo({ top: targetPosition, behavior: "smooth" });
    }, 110);

    window.setTimeout(() => {
      setIsSceneTransitioning(false);
    }, 620);
  }, []);

  useEffect(() => {
    const isDesktop = window.matchMedia("(min-width: 1024px) and (min-height: 820px)").matches;
    if (!isDesktop) {
      return undefined;
    }

    const sectionOrder = SECTION_NAV_ITEMS.map((item) => item.href);

    const onWheel = (event) => {
      if (showIntro || wheelLockRef.current) {
        return;
      }

      if (Math.abs(event.deltaY) < 18) {
        return;
      }

      const currentIndex = Math.max(sectionOrder.indexOf(activeSection), 0);
      const nextIndex = event.deltaY > 0 ? currentIndex + 1 : currentIndex - 1;

      if (nextIndex < 0 || nextIndex >= sectionOrder.length) {
        return;
      }

      event.preventDefault();
      wheelLockRef.current = true;
      handleNavigate(sectionOrder[nextIndex]);

      window.setTimeout(() => {
        wheelLockRef.current = false;
      }, 760);
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, [activeSection, handleNavigate, showIntro]);

  return (
    <div
      onPointerMove={(event) => {
        mouseX.set(event.clientX);
        mouseY.set(event.clientY);
      }}
      onPointerLeave={() => {
        mouseX.set(-1000);
        mouseY.set(-1000);
      }}
      className={`min-h-screen overflow-x-hidden antialiased ${
        theme === "dark"
          ? "text-slate-100 selection:bg-amber-300 selection:text-slate-900"
          : "text-slate-900 selection:bg-slate-900 selection:text-amber-100"
      }`}
    >
      <AnimatePresence>
        {showIntro ? (
          <motion.div
            className="intro-loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.45, ease: "easeOut" } }}
          >
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.32 }}
              className="text-xs uppercase tracking-[0.35em] text-cyan-200/90"
            >
              Portfolio Loading
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.08 }}
              className="mt-3 text-3xl font-bold sm:text-4xl"
            >
              Yudha Bayu Prastyo
            </motion.h1>
            <div className="intro-track mt-6">
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.25, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {isSceneTransitioning ? (
          <motion.div
            className="scene-transition"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
          />
        ) : null}
      </AnimatePresence>

      <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} />
      <motion.div className="pointer-events-none fixed inset-0 z-20 hidden md:block" style={{ background: spotlight }} />

      <div className="background-grid" aria-hidden="true" />
      <div className="blob blob-one" aria-hidden="true" />
      <div className="blob blob-two" aria-hidden="true" />
      <div className="blob blob-three" aria-hidden="true" />

      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      <main className="story-shell relative z-10 mx-auto w-full max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
        <motion.div style={{ y: heroY }} className="parallax-layer snap-scene" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <Hero />
        </motion.div>

        <motion.div style={{ y: aboutY }} className="parallax-layer snap-scene" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45 }}>
          <About />
        </motion.div>

        <motion.div style={{ y: educationY }} className="parallax-layer snap-scene" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45 }}>
          <Education />
        </motion.div>

        <motion.div style={{ y: techY }} className="parallax-layer snap-scene" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45 }}>
          <Technologies />
        </motion.div>

        <motion.div style={{ y: experienceY }} className="parallax-layer snap-scene" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45 }}>
          <Experience />
        </motion.div>

        <motion.div style={{ y: projectY }} className="parallax-layer snap-scene" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45 }}>
          <Project />
        </motion.div>

        <motion.div style={{ y: contactY }} className="parallax-layer snap-scene" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45 }}>
          <Contact />
        </motion.div>
      </main>

      <aside className="story-dots fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 xl:flex">
        <div className="story-dots-track">
          {SECTION_NAV_ITEMS.map((item) => (
            <button
              key={item.href}
              type="button"
              onClick={() => handleNavigate(item.href)}
              className={`story-dot group ${activeSection === item.href ? "is-active" : ""}`}
              aria-label={`Go to ${item.label}`}
              title={item.label}
            >
              <span className="story-dot-core" />
              <span className="story-dot-label">{item.label}</span>
            </button>
          ))}
        </div>
      </aside>

      <AnimatePresence>
        {showBackToTop ? (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={`fixed bottom-6 right-6 z-40 rounded-full border px-4 py-2 text-sm font-semibold shadow-lg backdrop-blur ${
              theme === "dark"
                ? "border-white/20 bg-slate-950/80 text-amber-200 hover:border-amber-300/70"
                : "border-slate-300 bg-white/90 text-slate-800 hover:border-slate-500"
            }`}
            aria-label="Kembali ke atas"
          >
            Top
          </motion.button>
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export default App;
