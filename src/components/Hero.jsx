import { motion } from "framer-motion";

const Hero = ({ content }) => {
  return (
    <section id="top" className="relative min-h-[90vh] flex flex-col items-center justify-center pt-20 overflow-hidden">
      {/* Background Ambience */}
      <div className="glow-orb top-[-10%] left-[-10%] bg-cyber/10" />
      <div className="glow-orb bottom-[-10%] right-[-10%] bg-solar/10" />

      <div className="relative z-10 text-center max-w-4xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-cyber/20 bg-cyber/5 text-cyber text-[10px] font-bold tracking-[0.3em] uppercase mb-8">
            Digital Architect
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-8xl font-serif leading-[1.1] mb-8"
        >
          Yudha Bayu <br />
          <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-cyber via-primary to-solar text-glow">Prastyo</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-secondary text-lg md:text-xl font-sans max-w-2xl mx-auto leading-relaxed mb-12"
        >
          {content.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="cyber-button w-full sm:w-auto px-10 py-4 text-sm uppercase tracking-widest font-bold">
            {content.btnProjects}
          </button>
          <button className="ghost-button w-full sm:w-auto px-10 py-4 text-sm uppercase tracking-widest font-bold">
            {content.btnContact}
          </button>
        </motion.div>
      </div>

      {/* Decorative Blueprint Line */}
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 1 }}
        className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-glass-border to-transparent"
      />
    </section>
  );
};

export default Hero;
