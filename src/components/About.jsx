import { motion } from "framer-motion";
import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";

const highlights = ["Problem solving", "IT Support", "Web Development", "Cloud Enthusiast"];

export const About = () => {
  return (
    <section id="about" className="py-8 sm:py-10">
      <div className="section-shell grid gap-8 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.01 }}
          className="relative"
        >
          <img src={aboutImg} alt="Tentang Yudha" className="h-full min-h-[280px] w-full rounded-2xl border border-white/20 object-cover sm:min-h-[320px]" />
          <motion.div
            className="absolute bottom-3 left-3 right-3 rounded-xl border border-white/20 bg-slate-950/70 px-3 py-2 text-[11px] text-slate-200 backdrop-blur sm:bottom-4 sm:left-4 sm:right-auto sm:px-4 sm:text-xs"
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          >
            Based in Tegal, Indonesia
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle leading-relaxed">{ABOUT_TEXT}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {highlights.map((point, index) => (
              <motion.span
                key={point}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.25, delay: index * 0.06 }}
                whileHover={{ y: -2 }}
                className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-200"
              >
                {point}
              </motion.span>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.35, delay: 0.2 }}
            className="mt-6 rounded-xl border border-cyan-300/30 bg-cyan-300/10 p-4 text-sm text-cyan-100"
          >
            Fokus saya: membangun solusi yang praktis, stabil, dan mudah dipakai user non-teknis.
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};