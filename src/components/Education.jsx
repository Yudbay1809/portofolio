import { motion } from "framer-motion";

const Education = ({ content }) => {
  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-[10px] font-bold tracking-[0.3em] text-cyber uppercase mb-4 inline-block">{content.sectionLabel}</span>
          <h2 className="text-4xl md:text-5xl font-serif">{content.title} <span className="italic text-cyber">&</span> {content.titleHighlight}</h2>
        </motion.div>

        <div className="space-y-12 relative">
          {/* Timeline Line */}
          <div className="absolute left-0 sm:left-1/2 top-0 bottom-0 w-[1px] bg-glass-border -translate-x-1/2 hidden sm:block" />

          {content.items.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative flex flex-col sm:flex-row gap-8 ${
                index % 2 === 0 ? "sm:flex-row-reverse" : ""
              }`}
            >
              {/* Desktop Center Dot */}
              <div className="absolute left-1/2 top-0 w-3 h-3 rounded-full bg-cyber -translate-x-1/2 hidden sm:block shadow-[0_0_15px_rgba(0,255,210,0.5)] z-10 mt-2" />

              {/* Content Card */}
              <div className="sm:w-1/2">
                <div className={`glass-panel p-8 hover:border-cyber/30 transition-colors duration-500 ${
                  index % 2 === 0 ? "sm:text-right" : "sm:text-left"
                }`}>
                  <span className="text-solar text-sm font-bold tracking-widest mb-2 block">{edu.year}</span>
                  <h3 className="text-xl font-serif mb-2 italic">{edu.place}</h3>
                  <p className="text-secondary text-sm leading-relaxed mb-6">
                    {edu.description}
                  </p>
                  <div className={`flex flex-wrap gap-2 ${
                    index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
                  }`}>
                    {edu.technologies.map((tech, idx) => (
                      <span key={idx} className="text-[9px] font-bold px-3 py-1 rounded-full bg-onyx border border-glass-border text-primary/70 tracking-tighter uppercase">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Empty space for alignment */}
              <div className="sm:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;