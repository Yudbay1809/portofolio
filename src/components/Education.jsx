import { motion } from "framer-motion";
import { EDUCATION } from "../constants";

export const Education = () => {
  return (
    <section id="education" className="py-8 sm:py-10">
      <div className="section-shell">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          className="section-title"
        >
          Education Journey
        </motion.h2>

        <div className="relative mt-8 space-y-6">
          {EDUCATION.map((item, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="group relative ml-6 overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-b from-white/10 to-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-cyan-300/30 hover:shadow-xl hover:shadow-cyan-300/10"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-indigo-300/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <motion.span
                className="absolute -left-[2.1rem] top-5 h-3.5 w-3.5 rounded-full border-2 border-slate-950 bg-gradient-to-r from-amber-300 to-cyan-300 shadow-lg shadow-amber-300/30"
                animate={{ scale: [1, 1.25, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
              />

              <div className="absolute -left-px top-0 h-12 w-1 bg-gradient-to-b from-amber-300 via-cyan-300 to-indigo-300 opacity-50 group-hover:opacity-100 transition-opacity" />

              <p className="inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-200 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-300 animate-pulse" />
                {item.year}
              </p>
              <h3 className="mt-3 text-lg font-bold text-slate-100">{item.place}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{item.description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {item.technologies.map((tech, idx) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.04 }}
                    whileHover={{ y: -2, scale: 1.05 }}
                    className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.08] px-3 py-1.5 text-xs font-medium text-slate-200 backdrop-blur-sm transition-all duration-300 hover:border-cyan-300/50 hover:bg-cyan-300/10 hover:shadow-lg hover:shadow-cyan-300/10"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
