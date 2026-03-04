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

        <div className="mt-7 grid gap-4">
          {EXPERIENCES.map((experience, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-white/15 bg-slate-900/60 p-5"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-lg font-semibold text-slate-100">
                  {experience.role} <span className="text-cyan-200">@ {experience.company}</span>
                </h3>
                <motion.span
                  className="rounded-full border border-amber-300/35 bg-amber-300/10 px-3 py-1 text-xs font-semibold text-amber-200"
                  animate={{ boxShadow: ["0 0 0 rgba(0,0,0,0)", "0 0 14px rgba(245,158,11,0.28)", "0 0 0 rgba(0,0,0,0)"] }}
                  transition={{ duration: 2.2, repeat: Infinity }}
                >
                  {experience.year}
                </motion.span>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-slate-300">{experience.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {experience.technologies.map((tech) => (
                  <motion.span
                    key={tech}
                    whileHover={{ y: -2 }}
                    className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-200"
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