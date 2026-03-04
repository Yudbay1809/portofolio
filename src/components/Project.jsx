import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { PROJECTS } from "../constants";

const Project = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = useMemo(() => {
    const techs = PROJECTS.flatMap((project) => project.technologies);
    return ["All", ...Array.from(new Set(techs))];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return PROJECTS;
    }
    return PROJECTS.filter((project) => project.technologies.includes(activeFilter));
  }, [activeFilter]);

  return (
    <section id="projects" className="py-8 sm:py-10">
      <div className="section-shell">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          className="section-title"
        >
          Featured Projects
        </motion.h2>
        <p className="section-subtitle">Pilih filter untuk melihat proyek berdasarkan teknologi yang relevan untuk posisi yang kamu incar.</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {filters.map((filter) => (
            <motion.button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              whileTap={{ scale: 0.95 }}
              className={`rounded-full border px-3 py-1 text-xs font-semibold transition ${
                activeFilter === filter
                  ? "border-amber-300/60 bg-amber-300/15 text-amber-200"
                  : "border-white/15 bg-white/5 text-slate-300 hover:border-cyan-300/50"
              }`}
            >
              {filter}
            </motion.button>
          ))}
        </div>

        <motion.div layout className="mt-6 grid gap-4 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.article
                layout
                key={project.title}
                initial={{ opacity: 0, y: 16, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -16, scale: 0.97 }}
                transition={{ duration: 0.28, delay: index * 0.03 }}
                whileHover={{ y: -6 }}
                className="group overflow-hidden rounded-2xl border border-white/15 bg-slate-900/60"
              >
                <div className="relative overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="h-48 w-full object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.45 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-semibold text-slate-100">{project.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <motion.span
                        key={`${project.title}-${tech}`}
                        whileHover={{ y: -1 }}
                        className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-200"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Project;