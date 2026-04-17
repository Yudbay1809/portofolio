import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const Project = ({ content }) => {
  return (
    <section id="projects" className="py-24 relative">
      {/* Background Flare */}
      <div className="glow-orb top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cyber/5" />

      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="text-[10px] font-bold tracking-[0.3em] text-cyber uppercase mb-4 inline-block">{content.sectionLabel}</span>
          <h2 className="text-4xl md:text-5xl font-serif italic">{content.title} <span className="not-italic text-primary border-b border-cyber/30 pb-2">{content.titleHighlight}</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {content.items.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative flex flex-col"
            >
              {/* Image Container / Architectural Plate */}
              <div className="relative aspect-[16/10] mb-8 overflow-hidden rounded-2xl glass-panel p-3 transition-all duration-700 group-hover:shadow-[0_0_60px_rgba(0,255,210,0.15)] group-hover:border-cyber/30">
                <div className="w-full h-full overflow-hidden rounded-xl bg-onyx relative">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.8 }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700"
                  />
                  {/* Overlay for Actions */}
                  <div className="absolute inset-0 bg-obsidian/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6">
                    <button className="p-3 bg-cyber text-white rounded-full hover:scale-110 transition-transform shadow-xl">
                      <FiExternalLink size={20} />
                    </button>
                    <button className="p-3 bg-white text-slate-950 rounded-full hover:scale-110 transition-transform shadow-xl">
                      <FiGithub size={20} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="px-2">
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-cyber text-[10px] font-bold tracking-[0.2em] uppercase">0{index + 1}</span>
                  <div className="h-[1px] flex-grow bg-glass-border" />
                </div>
                
                <h3 className="text-2xl font-serif italic mb-4 group-hover:text-cyber transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-secondary text-base leading-relaxed mb-6 font-sans">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="text-[9px] font-bold px-3 py-1 rounded bg-onyx/40 text-secondary border border-glass-border uppercase tracking-tighter"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;