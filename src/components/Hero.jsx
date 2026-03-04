import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
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

  useEffect(() => {
    if (!isInView) {
      return;
    }

    let startTime = null;
    const duration = 900;

    const tick = (timestamp) => {
      if (!startTime) {
        startTime = timestamp;
      }
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCurrent(Math.floor(progress * value));

      if (progress < 1) {
        window.requestAnimationFrame(tick);
      }
    };

    window.requestAnimationFrame(tick);
  }, [isInView, value]);

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

const Hero = () => {
  const [typedWord, setTypedWord] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
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
  }, [typedWord, isDeleting, wordIndex]);

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

          <motion.p variants={item} className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-lg">
            {HERO_CONTENT}
          </motion.p>

          <motion.div variants={item} className="mt-7 flex flex-wrap items-center gap-3">
            <motion.a
              href="#contact"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-amber-300 px-5 py-3 text-sm font-bold text-slate-900 transition hover:bg-amber-200 sm:w-auto"
            >
              <FiMail />
              Hubungi Saya
            </motion.a>
            <motion.a
              href="https://github.com/Yudbay1809"
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-200/70 hover:text-cyan-100 sm:w-auto"
            >
              <FiGithub />
              Lihat GitHub
            </motion.a>
          </motion.div>

          <motion.div variants={item} className="mt-8 grid gap-3 sm:grid-cols-3">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 220, damping: 16 }}
                className="rounded-xl border border-white/10 bg-white/5 p-4"
                animate={{ y: [0, -2, 0] }}
                style={{ willChange: "transform" }}
              >
                <p className="text-2xl font-bold text-amber-200">
                  <CountUpValue value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-xs text-slate-400">{stat.label}</p>
                <motion.div
                  className="mt-2 h-0.5 rounded-full bg-gradient-to-r from-amber-300/70 to-cyan-300/70"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.15 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div variants={item} className="relative mx-auto w-full max-w-sm" whileHover={{ rotate: 0.5, scale: 1.015 }}>
          <motion.div
            className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-amber-300/30 via-cyan-300/20 to-blue-400/20 blur-lg"
            animate={{ opacity: [0.55, 0.9, 0.55], scale: [1, 1.04, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.img
            src={profilePic}
            alt="Yudha Bayu Prastyo"
            className="relative h-[320px] w-full rounded-3xl border border-white/20 object-cover shadow-2xl sm:h-[400px]"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut" }}
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
