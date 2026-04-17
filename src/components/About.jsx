import { motion } from "framer-motion";
import profileImg from "../assets/Me.jpg";

export const About = ({ content }) => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden glass-panel p-2">
              <div className="w-full h-full rounded-2xl bg-onyx border border-glass-border flex items-center justify-center relative overflow-hidden">
                {/* Gradient Accents */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyber via-transparent to-transparent opacity-10" />
                <div className="absolute inset-0 bg-gradient-to-tl from-solar via-transparent to-transparent opacity-10" />
                
                {/* Profile Image */}
                <motion.img 
                  src={profileImg} 
                  alt="Yudha Bayu Prastyo"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-full object-cover relative z-10 opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                />

                {/* Abstract Architect Pattern Decorators */}
                <div className="absolute inset-0 opacity-[0.03] bg-grid-promax scale-150 z-0" />
                
                <motion.div 
                  animate={{ 
                    rotate: 360
                  }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                  className="absolute w-[80%] h-[80%] border-[4px] border-cyber border-t-transparent opacity-30 rounded-full border-dashed z-20 pointer-events-none"
                />
                <motion.div 
                  animate={{ 
                    rotate: -360
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="absolute w-[70%] h-[70%] border-[4px] border-solar border-b-transparent border-l-transparent opacity-30 rounded-full border-dotted z-20 pointer-events-none"
                />
              </div>
            </div>
            {/* Stats Overlay */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-6 -right-6 glass-panel p-6 shadow-2xl"
            >
              <p className="text-3xl font-serif text-solar font-bold">2024</p>
              <p className="text-[10px] text-cyber uppercase tracking-[0.2em] font-bold">{content.alumniLabel}</p>
            </motion.div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
              {content.title} <br />
              <span className="italic text-cyber">{content.titleHighlight}</span>
            </h2>
            <div className="space-y-6 text-secondary text-lg leading-relaxed font-sans">
              <p>{content.description}</p>
              <p className="border-l-2 border-cyber/30 pl-6 italic">
                {content.quote}
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-8">
              <div>
                <p className="text-primary font-bold mb-1 italic font-serif text-xl">{content.specValue}</p>
                <p className="text-[10px] text-cyber uppercase tracking-widest font-bold">{content.specLabel}</p>
              </div>
              <div>
                <p className="text-primary font-bold mb-1 italic font-serif text-xl">{content.aspValue}</p>
                <p className="text-[10px] text-cyber uppercase tracking-widest font-bold">{content.aspLabel}</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};