import { motion } from "framer-motion";

const Experience = ({ content }) => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-cyber/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="text-[10px] font-bold tracking-[0.3em] text-cyber uppercase mb-4 inline-block">{content.sectionLabel}</span>
          <h2 className="text-4xl md:text-5xl font-serif">{content.title} <span className="italic text-cyber">&</span> {content.titleHighlight}</h2>
        </motion.div>

        <div className="space-y-8">
          {content.items.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel p-8 md:p-12 hover:bg-onyx/80 transition-all duration-500 group"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                
                {/* Time & Company */}
                <div className="md:w-1/3">
                  <p className="text-solar font-bold tracking-[0.2em] text-xs uppercase mb-4">
                    {experience.year}
                  </p>
                  <h3 className="text-2xl font-serif italic mb-2 transition-colors group-hover:text-cyber">
                    {experience.company}
                  </h3>
                  <p className="text-secondary font-sans text-sm tracking-wide">
                    {content.professionalRole}
                  </p>
                </div>

                {/* Role & Description */}
                <div className="md:w-2/3">
                  <h4 className="text-xl font-bold font-sans mb-4 text-primary">
                    {experience.role}
                  </h4>
                  <p className="text-secondary leading-relaxed mb-8 font-sans">
                    {experience.description}
                  </p>
                  
                  {/* Tech Stack for this role */}
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, idx) => (
                      <span 
                        key={idx} 
                        className="text-[10px] font-bold px-4 py-1.5 rounded-full bg-obsidian border border-glass-border text-primary/80 uppercase tracking-tighter transition-all hover:border-cyber/30 hover:text-cyber"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;