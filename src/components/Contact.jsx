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

        <div className="mt-7 grid gap-4 md:grid-cols-3">
          <motion.a
            href="https://wa.me/6285731643104"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -4 }}
            className="rounded-xl border border-white/15 bg-white/5 p-4 transition hover:border-emerald-300/50"
          >
            <FiPhoneCall className="text-xl text-emerald-200" />
            <p className="mt-2 text-xs uppercase tracking-wide text-slate-400">Phone / WhatsApp</p>
            <p className="mt-1 font-semibold text-slate-100">{CONTACT.phoneNo}</p>
          </motion.a>

          <motion.a
            href="https://www.google.com/maps/search/?api=1&query=Tegal%2C%20Jawa%20Tengah%2C%20Indonesia"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.08 }}
            whileHover={{ y: -4 }}
            className="rounded-xl border border-white/15 bg-white/5 p-4 transition hover:border-cyan-300/50"
          >
            <FiMapPin className="text-xl text-cyan-200" />
            <p className="mt-2 text-xs uppercase tracking-wide text-slate-400">Location</p>
            <p className="mt-1 font-semibold text-slate-100">{CONTACT.address}</p>
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.14 }}
            whileHover={{ y: -4 }}
            className="rounded-xl border border-white/15 bg-white/5 p-4"
          >
            <FiMail className="text-xl text-amber-200" />
            <p className="mt-2 text-xs uppercase tracking-wide text-slate-400">Email</p>
            <a href={`mailto:${CONTACT.email}`} className="mt-1 block break-all font-semibold text-slate-100 underline decoration-transparent transition hover:decoration-current">
              {CONTACT.email}
            </a>
            <motion.button
              type="button"
              onClick={onCopyEmail}
              whileTap={{ scale: 0.95 }}
              className="mt-3 inline-flex items-center gap-1 rounded-md border border-white/20 px-2 py-1 text-xs font-semibold text-slate-200 hover:border-amber-300/50"
            >
              {copied ? <FiCheck /> : <FiCopy />}
              {copied ? "Copied" : "Copy"}
            </motion.button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.2 }}
          className="mt-6 rounded-2xl border border-amber-300/30 bg-amber-300/10 p-4 text-center text-sm text-amber-100"
        >
          <p>Ingin melihat studi kasus detail, source code, atau demo langsung? Hubungi saya kapan pun.</p>
        </motion.div>
      </div>
    </section>
  );
};
