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
          className="relative group"
        >
          <div className="absolute -inset-2 rounded-[32px] bg-gradient-to-tr from-amber-300/30 via-cyan-300/20 to-indigo-300/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative overflow-hidden rounded-[32px]">
            <img src={aboutImg} alt="Tentang Yudha" className="h-full min-h-[280px] w-full rounded-[32px] border border-white/20 object-cover sm:min-h-[320px] transition-transform duration-700 group-hover:scale-1.05" />
          </div>
          <motion.div
            className="absolute bottom-3 left-3 right-3 rounded-2xl border border-white/20 bg-gradient-to-r from-slate-950/80 to-slate-950/60 px-4 py-2.5 text-[11px] font-medium text-slate-200 backdrop-blur-xl sm:bottom-4 sm:left-4 sm:right-auto sm:px-5 sm:text-xs shadow-lg"
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 mr-2 animate-pulse" />
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
                whileHover={{ y: -3, scale: 1.05 }}
                className="group relative overflow-hidden rounded-full border border-white/15 bg-gradient-to-r from-white/10 to-white/5 px-4 py-2 text-xs font-semibold text-slate-200 backdrop-blur-sm transition-all duration-300 hover:border-cyan-300/50 hover:shadow-lg hover:shadow-cyan-300/10"
              >
                <span className="relative z-10">{point}</span>
              </motion.span>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.35, delay: 0.2 }}
            className="mt-6 relative overflow-hidden rounded-2xl border border-cyan-300/30 bg-gradient-to-r from-cyan-300/10 to-indigo-300/10 p-5 text-sm text-cyan-100 backdrop-blur-sm"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-300/5 via-transparent to-indigo-300/5 opacity-0 transition-opacity duration-500" />
            <p className="relative z-10 flex items-center gap-2">
              <span className="inline-block w-1 h-6 rounded-full bg-gradient-to-b from-cyan-300 to-indigo-300" />
              Fokus saya: membangun solusi yang praktis, stabil, dan mudah dipakai user non-teknis.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};