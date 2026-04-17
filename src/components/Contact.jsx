import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";
import { CONTACT } from "../constants";

export const Contact = ({ content }) => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Flare */}
      <div className="glow-orb -bottom-20 -left-20 bg-solar/10" />

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Left Side: Editorial Pitch */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <span className="text-[10px] font-bold tracking-[0.3em] text-cyber uppercase mb-6 inline-block">{content.sectionLabel}</span>
            <h2 className="text-5xl md:text-7xl font-serif leading-tight mb-8">
              {content.title} <br />
              <span className="italic text-cyber">{content.titleHighlight}</span>
            </h2>
            <p className="text-secondary text-lg leading-relaxed max-w-md mb-12">
              {content.description}
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-cyber group-hover:bg-cyber group-hover:text-obsidian transition-all duration-300">
                  <FiMail size={18} />
                </div>
                <div>
                  <p className="text-[10px] text-secondary uppercase tracking-widest font-bold">{content.labels.email}</p>
                  <p className="text-lg font-sans">{CONTACT.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-cyber group-hover:bg-cyber group-hover:text-obsidian transition-all duration-300">
                  <FiPhone size={18} />
                </div>
                <div>
                  <p className="text-[10px] text-secondary uppercase tracking-widest font-bold">{content.labels.phone}</p>
                  <p className="text-lg font-sans">{CONTACT.phoneNo}</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-cyber group-hover:bg-cyber group-hover:text-obsidian transition-all duration-300">
                  <FiMapPin size={18} />
                </div>
                <div>
                  <p className="text-[10px] text-secondary uppercase tracking-widest font-bold">{content.labels.location}</p>
                  <p className="text-lg font-sans">{CONTACT.address}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Minimal Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-panel p-8 md:p-12 relative"
          >
            <form className="space-y-8">
              <div className="space-y-2">
                <label className="text-[10px] text-secondary uppercase tracking-widest font-bold ml-1">{content.labels.nameInput}</label>
                <input 
                  type="text" 
                  placeholder={content.labels.namePlaceholder}
                  className="w-full glass-input rounded-xl px-4 py-4 font-sans focus:outline-none transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] text-secondary uppercase tracking-widest font-bold ml-1">{content.labels.emailInput}</label>
                <input 
                  type="email" 
                  placeholder={content.labels.emailPlaceholder}
                  className="w-full glass-input rounded-xl px-4 py-4 font-sans focus:outline-none transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] text-secondary uppercase tracking-widest font-bold ml-1">{content.labels.msgInput}</label>
                <textarea 
                  rows={4}
                  placeholder={content.labels.msgPlaceholder}
                  className="w-full glass-input rounded-xl px-4 py-4 font-sans focus:outline-none transition-colors resize-none"
                />
              </div>

              <button className="cyber-button w-full py-4 flex items-center justify-center gap-3 text-sm uppercase tracking-widest font-bold">
                <FiSend /> {content.labels.sendBtn}
              </button>
            </form>
          </motion.div>

        </div>
      </div>

      <footer className="mt-24 py-12 border-t border-glass-border">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-[10px] text-secondary uppercase tracking-[0.3em]">
            © 2024 Yudha Bayu Prastyo — Digital Architect
          </p>
        </div>
      </footer>
    </section>
  );
};
