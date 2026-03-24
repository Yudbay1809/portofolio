import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { PROJECTS } from "../constants";

const getProjectTags = (project) => {
  if (Array.isArray(project.tags) && project.tags.length > 0) {
    return project.tags;
  }

  const techs = project.technologies.map((tech) => tech.toLowerCase());
  const tags = new Set();

  if (techs.some((tech) => ["react", "html", "css", "bootstrap", "tailwind"].includes(tech))) {
    tags.add("Frontend");
  }
  if (techs.some((tech) => ["php", "fastapi", "sqlalchemy", "node.js", "node", "python"].includes(tech))) {
    tags.add("Backend");
  }
  if (techs.some((tech) => ["android", "android studio", "flutter", "dart"].includes(tech))) {
    tags.add("Mobile");
  }
  if (techs.some((tech) => ["desktop", "windows"].includes(tech))) {
    tags.add("Desktop");
  }

  return Array.from(tags);
};

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
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`group relative overflow-hidden rounded-full border px-4 py-2 text-xs font-semibold transition-all duration-300 ${
                activeFilter === filter
                  ? "border-amber-300/60 bg-amber-300/15 text-amber-200 shadow-lg shadow-amber-300/10"
                  : "border-white/15 bg-white/5 text-slate-300 hover:border-cyan-300/50 hover:bg-cyan-300/10 hover:shadow-lg hover:shadow-cyan-300/10"
              }`}
            >
              <span className="relative z-10">{filter}</span>
            </motion.button>
          ))}
        </div>

        <motion.div layout className="mt-8 grid gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.article
                layout
                key={project.title}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-amber-300/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-60" />

                <div className="relative overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-4 right-4 flex gap-2"
                  >
                    <a
                      href="https://github.com/Yudbay1809"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full bg-white/20 backdrop-blur-sm p-2 text-slate-100 transition-all duration-300 hover:bg-amber-300/80 hover:text-slate-900"
                      title="View Code"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.375.072.825-.162.825-.558 0-.273-.012-.975-.012-1.89-3.003.654-3.776 1.278-4.518 1.278-1.042 0-1.878-.81-1.878-1.92 0-1.065.69-1.823 1.47-2.16-1.042-.135-2.085-.51-2.085-2.22 0-1.665 1.29-3.09 2.94-3.09.87 0 1.65.36 2.16.855.69-.18 1.44-.27 2.22-.27 1.77 0 3.48.6 4.86 1.62 1.38 1.02 2.22 2.52 2.22 4.2 0 1.71-1.02 3.09-2.58 3.09-.87 0-1.65-.36-2.16-.855-.69.18-1.44.27-2.22.27-.78 0-1.53-.09-2.22-.27.54.45 1.02 1.08 1.02 2.07 0 1.11-.81 2.07-1.92 2.07-.78 0-1.44-.36-1.8-.9-.36-.54-.54-1.17-.54-1.8 0-1.35.81-2.52 2.07-2.88.36-.09.72-.18 1.08-.27z"/>
                      </svg>
                    </a>
                  </motion.div>
                </div>

                <div className="p-5">
                  <h3 className="text-xl font-bold text-slate-100">{project.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">{project.description}</p>

                  {getProjectTags(project).length > 0 ? (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {getProjectTags(project).map((tag) => (
                        <span
                          key={`${project.title}-${tag}`}
                          className="inline-flex items-center rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-amber-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  ) : null}

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <motion.span
                        key={`${project.title}-${tech}`}
                        whileHover={{ y: -2, scale: 1.05 }}
                        className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.08] px-3 py-1 text-xs font-medium text-slate-200 backdrop-blur-sm transition-all duration-300 hover:border-cyan-300/50 hover:bg-cyan-300/10 hover:text-cyan-200"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {(project.demoUrl || project.repoUrl) && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.demoUrl ? (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-1.5 text-xs font-semibold text-cyan-100 transition hover:border-cyan-300/60 hover:bg-cyan-300/20"
                        >
                          Live Demo
                        </a>
                      ) : null}
                      {project.repoUrl ? (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold text-slate-200 transition hover:border-amber-300/60 hover:bg-amber-300/20 hover:text-amber-200"
                        >
                          View Repo
                        </a>
                      ) : null}
                    </div>
                  )}

                  {project.caseStudy &&
                    (project.caseStudy.problem ||
                      project.caseStudy.role ||
                      project.caseStudy.solution ||
                      project.caseStudy.result) && (
                      <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300">
                        <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Case Study</p>
                        <ul className="mt-3 space-y-2">
                          {project.caseStudy.problem && (
                            <li>
                              <span className="font-semibold text-slate-200">Problem:</span> {project.caseStudy.problem}
                            </li>
                          )}
                          {project.caseStudy.role && (
                            <li>
                              <span className="font-semibold text-slate-200">Role:</span> {project.caseStudy.role}
                            </li>
                          )}
                          {project.caseStudy.solution && (
                            <li>
                              <span className="font-semibold text-slate-200">Solution:</span> {project.caseStudy.solution}
                            </li>
                          )}
                          {project.caseStudy.result && (
                            <li>
                              <span className="font-semibold text-slate-200">Result:</span> {project.caseStudy.result}
                            </li>
                          )}
                        </ul>
                      </div>
                    )}
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
