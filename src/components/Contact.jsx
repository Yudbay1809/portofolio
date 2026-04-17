import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMail, FiMapPin, FiSend, FiCheckCircle } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { CONTACT } from "../constants";

export const Contact = ({ content }) => {
  const formRef = useRef();
  const [status, setStatus] = useState("idle"); // idle, loading, success, error

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("loading");

    // Credentials retrieved from .env.local for security
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // More reliable way to get form data
    const formData = new FormData(e.target);
    
    // Constructing template params to match your EmailJS Dashboard exactly
    const templateParams = {
      name: formData.get("name"), 
      email: formData.get("email"),
      title: formData.get("subject"),
      message: formData.get("message"),
      time: new Date().toLocaleString("id-ID", { 
        dateStyle: "full", 
        timeStyle: "short" 
      })
    };

    console.log("Mengirim data ke EmailJS:", templateParams);

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(() => {
        setStatus("success");
        formRef.current.reset();
        setTimeout(() => setStatus("idle"), 5000);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      });
  };

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
              <a 
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-6 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-cyber group-hover:bg-cyber group-hover:text-obsidian transition-all duration-300">
                  <FiMail size={18} />
                </div>
                <div>
                  <p className="text-[10px] text-cyber uppercase tracking-widest font-bold opacity-80 mb-1">{content.labels.email}</p>
                  <p className="text-lg font-sans text-primary group-hover:text-cyber transition-colors">{CONTACT.email}</p>
                </div>
              </a>

              <a 
                href={`https://wa.me/${CONTACT.phoneNo.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-6 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-cyber group-hover:bg-cyber group-hover:text-obsidian transition-all duration-300">
                  <FaWhatsapp size={18} />
                </div>
                <div>
                  <p className="text-[10px] text-cyber uppercase tracking-widest font-bold opacity-80 mb-1">{content.labels.phone}</p>
                  <p className="text-lg font-sans text-primary group-hover:text-cyber transition-colors">{CONTACT.phoneNo}</p>
                </div>
              </a>

              <a 
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-6 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-cyber group-hover:bg-cyber group-hover:text-obsidian transition-all duration-300">
                  <FiMapPin size={18} />
                </div>
                <div>
                  <p className="text-[10px] text-cyber uppercase tracking-widest font-bold opacity-80 mb-1">{content.labels.location}</p>
                  <p className="text-lg font-sans text-primary group-hover:text-cyber transition-colors">{CONTACT.address}</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right Side: Minimal Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-panel p-8 md:p-12 relative overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-obsidian/40 backdrop-blur-md z-20"
                >
                  <FiCheckCircle className="text-cyber text-6xl mb-6" />
                  <h3 className="text-3xl font-serif italic mb-4">{content.labels.successTitle || "Terkirim!"}</h3>
                  <p className="text-secondary max-w-xs">{content.labels.successMsg || "Pesan Anda telah berhasil dikirim. Saya akan segera menghubungi Anda."}</p>
                  <button 
                    onClick={() => setStatus("idle")}
                    className="mt-8 text-cyber text-[10px] font-bold tracking-widest uppercase border-b border-cyber/30 pb-1"
                  >
                    Kirim Pesan Lain
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  ref={formRef}
                  onSubmit={handleSubmit}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-8"
                >
              <div className="space-y-2">
                <label className="text-[10px] text-cyber uppercase tracking-widest font-bold ml-1">{content.labels.nameInput}</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  placeholder={content.labels.namePlaceholder}
                  className="w-full glass-input rounded-xl px-4 py-4 font-sans focus:outline-none transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] text-cyber uppercase tracking-widest font-bold ml-1">{content.labels.emailInput}</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  placeholder={content.labels.emailPlaceholder}
                  className="w-full glass-input rounded-xl px-4 py-4 font-sans focus:outline-none transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] text-cyber uppercase tracking-widest font-bold ml-1">{content.labels.subjectInput}</label>
                <input 
                  type="text" 
                  name="subject"
                  required
                  placeholder={content.labels.subjectPlaceholder}
                  className="w-full glass-input rounded-xl px-4 py-4 font-sans focus:outline-none transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] text-cyber uppercase tracking-widest font-bold ml-1">{content.labels.msgInput}</label>
                <textarea 
                  name="message"
                  required
                  rows={4}
                  placeholder={content.labels.msgPlaceholder}
                  className="w-full glass-input rounded-xl px-4 py-4 font-sans focus:outline-none transition-colors resize-none"
                />
              </div>

              <button 
                type="submit"
                disabled={status === "loading"}
                className={`cyber-button w-full py-4 flex items-center justify-center gap-3 text-sm uppercase tracking-widest font-bold ${
                  status === "loading" ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {status === "loading" ? (
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-obsidian border-t-transparent rounded-full animate-spin" />
                    Mengirim...
                  </span>
                ) : (
                  <>{status === "error" ? "Gagal mengirim" : <><FiSend /> {content.labels.sendBtn}</>}</>
                )}
              </button>
            </motion.form>
          )}
        </AnimatePresence>
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
