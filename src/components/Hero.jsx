import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { FiGithub, FiMail } from "react-icons/fi";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/Me.jpg";

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

// eslint-disable-next-line react/prop-types
const CountUpValue = ({ value, suffix = "" }) => {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20% 0px" });
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      setCurrent(value);
      return;
    }

    if (!isInView) {
      return;
    }

    let startTime = null;
    const duration = 900;
    let rafId = null;

    const tick = (timestamp) => {
      if (!startTime) {
        startTime = timestamp;
      }
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCurrent(Math.floor(progress * value));

      if (progress < 1) {
        rafId = window.requestAnimationFrame(tick);
      }
    };

    rafId = window.requestAnimationFrame(tick);

    return () => {
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, [isInView, prefersReducedMotion, value]);

  return (
    <span ref={ref}>
      {current}
      {suffix}
    </span>
  );
};

const stats = [
  { value: 4, suffix: "+", label: "Project Akademik" },
  { value: 1, suffix: "", label: "Pengalaman IT Support" },
  { value: 2, suffix: "", label: "Program Pendidikan Utama" },
];
const TYPE_WORDS = ["Web Developer", "IT Support", "Problem Solver", "Cloud Enthusiast"];
const ROLE_LINE = "Web Developer • IT Support • Fresh Graduate";

const Hero = () => {
  const [typedWord, setTypedWord] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      setTypedWord(TYPE_WORDS[0]);
      return;
    }

    const currentWord = TYPE_WORDS[wordIndex % TYPE_WORDS.length];
    const typingSpeed = isDeleting ? 48 : 86;
    const timeout = window.setTimeout(() => {
      const nextText = isDeleting
        ? currentWord.slice(0, Math.max(typedWord.length - 1, 0))
        : currentWord.slice(0, typedWord.length + 1);

      setTypedWord(nextText);

      if (!isDeleting && nextText === currentWord) {
        window.setTimeout(() => setIsDeleting(true), 760);
      } else if (isDeleting && nextText.length === 0) {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % TYPE_WORDS.length);
      }
    }, typingSpeed);

    return () => window.clearTimeout(timeout);
  }, [typedWord, isDeleting, wordIndex, prefersReducedMotion]);

  return (
    <section id="top" className="py-8 sm:py-12 lg:py-14">
      <motion.div
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
        initial="hidden"
        animate="show"
        className="section-shell grid gap-8 lg:grid-cols-[1.2fr,0.8fr]"
      >
        <div>
          <motion.p
            variants={item}
            animate={{ opacity: [0.85, 1, 0.85] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-300/40 bg-emerald-300/10 px-4 py-1 text-xs font-semibold text-emerald-200"
          >
            <motion.span
              className="h-2 w-2 rounded-full bg-emerald-300"
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ duration: 1.4, repeat: Infinity }}
            />
            Open to Work
          </motion.p>

          <motion.h1 variants={item} className="text-3xl font-bold leading-tight text-slate-50 sm:text-5xl lg:text-6xl">
            Hi, saya <span className="gradient-text">Yudha Bayu Prastyo</span>
          </motion.h1>

          <motion.p variants={item} className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200 sm:tracking-[0.2em] sm:text-base">
            {typedWord}
            <span className="type-cursor" />
          </motion.p>

          <motion.p variants={item} className="mt-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 sm:text-xs">
            {ROLE_LINE}
          </motion.p>

          <motion.p variants={item} className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-lg">
            {HERO_CONTENT}
          </motion.p>

          <motion.div variants={item} className="mt-7 flex flex-wrap items-center gap-3">
            <motion.a
              href="#contact"
              whileHover={{ y: -4, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-amber-300 to-amber-200 px-6 py-3.5 text-sm font-bold text-slate-900 shadow-lg shadow-amber-300/20 transition-all duration-300 sm:w-auto"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-amber-200 to-amber-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <FiMail className="relative z-10" />
              <span className="relative z-10">Hubungi Saya</span>
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ y: -4, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-amber-300/30 bg-amber-300/10 px-6 py-3.5 text-sm font-semibold text-amber-100 transition-all duration-300 hover:border-amber-300/60 hover:bg-amber-300/20 hover:text-amber-200 sm:w-auto"
            >
              View Projects
            </motion.a>
            <motion.a
              href="https://github.com/Yudbay1809"
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -4, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-slate-100 backdrop-blur-sm transition-all duration-300 hover:border-cyan-200/70 hover:bg-cyan-300/10 hover:text-cyan-100 hover:shadow-lg hover:shadow-cyan-300/10 sm:w-auto"
            >
              <FiGithub />
              Lihat GitHub
            </motion.a>
          </motion.div>

          <motion.div variants={item} className="mt-8 grid gap-4 sm:grid-cols-3">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -6, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 280, damping: 20 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-5 backdrop-blur-sm"
                animate={{ y: [0, -2, 0] }}
                style={{ willChange: "transform" }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-amber-300/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-cyan-300">
                  <CountUpValue value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-1 text-xs font-medium text-slate-400">{stat.label}</p>
                <motion.div
                  className="mt-3 h-1 rounded-full bg-gradient-to-r from-amber-300 via-cyan-300 to-indigo-300"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.3 + index * 0.15 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div variants={item} className="relative mx-auto w-full max-w-sm" whileHover={{ rotate: 0.8, scale: 1.02 }}>
          <motion.div
            className="absolute -inset-4 rounded-[32px] bg-gradient-to-tr from-amber-300/40 via-cyan-300/30 to-indigo-300/30 blur-2xl"
            animate={{ opacity: [0.5, 0.85, 0.5], scale: [1, 1.08, 1], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -inset-1 rounded-[32px] bg-gradient-to-tr from-amber-300/20 to-cyan-300/20"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.img
            src={profilePic}
            alt="Yudha Bayu Prastyo"
            className="relative h-[320px] w-full rounded-[32px] border border-white/20 object-cover shadow-2xl shadow-amber-300/10 sm:h-[400px]"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        <motion.div variants={item} className="col-span-full mt-2 flex justify-center">
          <a href="#about" className="group inline-flex flex-col items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            Scroll
            <span className="scroll-cue">
              <motion.span animate={{ y: [0, 7, 0] }} transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }} />
            </span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
