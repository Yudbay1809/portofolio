import { motion } from "framer-motion";
import { EXPERIENCES } from "../constants";

const Experience = () => {
  return (
    <section id="experience" className="py-8 sm:py-10">
      <div className="section-shell">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          className="section-title"
        >
          Professional Experience
        </motion.h2>

        <div className="mt-7 space-y-4">
          {EXPERIENCES.map((experience, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="group relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-b from-white/10 to-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-cyan-300/30 hover:shadow-xl hover:shadow-cyan-300/10"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-amber-300/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold text-slate-100">
                    {experience.role} <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-cyan-200">@ {experience.company}</span>
                  </h3>
                  <p className="text-sm text-slate-400 mt-1">{experience.year}</p>
                </div>
                <motion.span
                  className="inline-flex items-center rounded-full border border-amber-300/40 bg-gradient-to-r from-amber-300/15 to-amber-200/10 px-4 py-1.5 text-xs font-semibold text-amber-200 backdrop-blur-sm shadow-lg shadow-amber-300/10"
                  animate={{ boxShadow: ["0 0 0 rgba(0,0,0,0)", "0 0 20px rgba(251, 191, 36, 0.3)", "0 0 0 rgba(0,0,0,0)"] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-300 mr-2 animate-pulse" />
                  {experience.year}
                </motion.span>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-slate-300">{experience.description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {experience.technologies.map((tech, idx) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
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

export default Experience;
