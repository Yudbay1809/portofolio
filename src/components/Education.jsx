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

        <div className="relative mt-8 space-y-6 before:absolute before:left-2 before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-white/20 sm:before:left-3">
          {EDUCATION.map((item, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              whileHover={{ y: -3 }}
              className="relative ml-8 rounded-2xl border border-white/15 bg-slate-900/60 p-5"
            >
              <motion.span
                className="absolute -left-[2.05rem] top-6 h-3 w-3 rounded-full border-2 border-slate-950 bg-amber-300"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.8, repeat: Infinity, delay: index * 0.15 }}
              />
              <p className="text-xs font-semibold uppercase tracking-wide text-amber-200">{item.year}</p>
              <h3 className="mt-2 text-lg font-semibold text-slate-100">{item.place}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.technologies.map((tech) => (
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

export default Education;