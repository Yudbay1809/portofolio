import { motion } from "framer-motion";
import { FaNodeJs } from "react-icons/fa";
import { FaPhp } from "react-icons/fa6";
import { IoLogoFirebase } from "react-icons/io5";
import { RiReactjsLine } from "react-icons/ri";
import { SiAndroidstudio, SiMysql } from "react-icons/si";

const skills = [
  { name: "React", icon: RiReactjsLine, color: "text-cyan-300", level: 78 },
  { name: "PHP", icon: FaPhp, color: "text-blue-300", level: 80 },
  { name: "Firebase", icon: IoLogoFirebase, color: "text-orange-300", level: 72 },
  { name: "Android Studio", icon: SiAndroidstudio, color: "text-emerald-300", level: 70 },
  { name: "Node.js", icon: FaNodeJs, color: "text-lime-300", level: 74 },
  { name: "MySQL", icon: SiMysql, color: "text-sky-300", level: 83 },
];

const Technologies = () => {
  return (
    <section id="technologies" className="py-8 sm:py-10">
      <div className="section-shell">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          className="section-title"
        >
          Technologies I Use
        </motion.h2>
        <p className="section-subtitle">Skill utama yang paling sering saya pakai untuk membangun aplikasi web dan mobile.</p>

        <div className="mt-7 grid gap-5 md:grid-cols-2">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-b from-white/10 to-white/5 p-5 backdrop-blur-sm transition-all duration-300 hover:border-cyan-300/30 hover:shadow-xl hover:shadow-cyan-300/10"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-amber-300/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-900/50 p-3 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:border-cyan-300/30">
                      <Icon className={`text-2xl ${skill.color}`} />
                    </span>
                    <p className="font-bold text-slate-100">{skill.name}</p>
                  </div>
                  <motion.span
                    className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-bold text-slate-100 backdrop-blur-sm"
                    animate={{ borderColor: ["rgba(255,255,255,0.2)", "rgba(34, 211, 238, 0.5)", "rgba(255,255,255,0.2)"] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    {skill.level}%
                  </motion.span>
                </div>

                <div className="relative h-3 rounded-full bg-slate-700/40 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: index * 0.1, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-amber-300 via-cyan-300 to-indigo-300 shadow-lg shadow-amber-300/20"
                    style={{ boxShadow: "0 0 20px rgba(251, 191, 36, 0.4)" }}
                  />
                </div>

                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-300/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
