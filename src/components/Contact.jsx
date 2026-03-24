import { useState } from "react";
import { motion } from "framer-motion";
import { FiCheck, FiCopy, FiMail, FiMapPin, FiPhoneCall } from "react-icons/fi";
import { CONTACT } from "../constants";

export const Contact = () => {
  const [copied, setCopied] = useState(false);

  const onCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="contact" className="py-8 sm:py-10">
      <div className="section-shell">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          className="section-title"
        >
          Let&apos;s Connect
        </motion.h2>
        <p className="section-subtitle">Siap berdiskusi untuk peluang kerja, project kolaborasi, atau technical interview.</p>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <motion.a
            href="https://wa.me/6285731643104"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -8, scale: 1.03 }}
            className="group relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-b from-white/10 to-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-emerald-300/40 hover:shadow-xl hover:shadow-emerald-300/10"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-300/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative">
              <div className="inline-flex rounded-2xl border border-emerald-300/30 bg-gradient-to-br from-emerald-300/20 to-emerald-300/10 p-3 shadow-lg shadow-emerald-300/10">
                <FiPhoneCall className="text-2xl text-emerald-300" />
              </div>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-slate-400">Phone / WhatsApp</p>
              <p className="mt-1.5 font-bold text-slate-100">{CONTACT.phoneNo}</p>
              <p className="mt-1 text-xs text-slate-500">Tap to chat</p>
            </div>
          </motion.a>

          <motion.a
            href="https://www.google.com/maps/search/?api=1&query=Tegal%2C%20Jawa%20Tengah%2C%20Indonesia"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.06 }}
            whileHover={{ y: -8, scale: 1.03 }}
            className="group relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-b from-white/10 to-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-cyan-300/40 hover:shadow-xl hover:shadow-cyan-300/10"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-300/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative">
              <div className="inline-flex rounded-2xl border border-cyan-300/30 bg-gradient-to-br from-cyan-300/20 to-cyan-300/10 p-3 shadow-lg shadow-cyan-300/10">
                <FiMapPin className="text-2xl text-cyan-300" />
              </div>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-slate-400">Location</p>
              <p className="mt-1.5 font-bold text-slate-100">{CONTACT.address}</p>
              <p className="mt-1 text-xs text-slate-500">View on Maps</p>
            </div>
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.12 }}
            whileHover={{ y: -8, scale: 1.03 }}
            className="group relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-b from-white/10 to-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-amber-300/40 hover:shadow-xl hover:shadow-amber-300/10"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-amber-300/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative">
              <div className="inline-flex rounded-2xl border border-amber-300/30 bg-gradient-to-br from-amber-300/20 to-amber-300/10 p-3 shadow-lg shadow-amber-300/10">
                <FiMail className="text-2xl text-amber-300" />
              </div>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-slate-400">Email</p>
              <a href={`mailto:${CONTACT.email}`} className="mt-1.5 block font-bold text-slate-100 break-all hover:text-amber-200 transition-colors">
                {CONTACT.email}
              </a>
              <motion.button
                type="button"
                onClick={onCopyEmail}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold text-slate-200 backdrop-blur-sm transition-all duration-300 hover:border-amber-300/50 hover:bg-amber-300/20 hover:shadow-lg hover:shadow-amber-300/10"
              >
                {copied ? <FiCheck className="text-emerald-300" /> : <FiCopy />}
                {copied ? "Copied!" : "Copy Email"}
              </motion.button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2 }}
          className="mt-8 relative overflow-hidden rounded-3xl border border-amber-300/30 bg-gradient-to-r from-amber-300/10 via-amber-300/5 to-indigo-300/10 p-6 text-center backdrop-blur-sm"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-amber-300/5 via-transparent to-indigo-300/5" />
          <p className="relative z-10 text-sm text-amber-100">
            <span className="inline-block w-2 h-2 rounded-full bg-amber-300 mr-2 animate-pulse" />
            Ingin melihat studi kasus detail, source code, atau demo langsung? Hubungi saya kapan pun.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
