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

        <div className="mt-7 grid gap-4 md:grid-cols-2">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                whileHover={{ y: -3 }}
                className="rounded-xl border border-white/15 bg-white/5 p-4"
              >
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="rounded-lg border border-white/10 bg-slate-900/70 p-2">
                      <Icon className={`text-2xl ${skill.color}`} />
                    </span>
                    <p className="font-semibold text-slate-100">{skill.name}</p>
                  </div>
                  <span className="text-sm font-semibold text-slate-300">{skill.level}%</span>
                </div>
                <div className="h-2 rounded-full bg-slate-700/60">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.08 }}
                    className="h-2 rounded-full bg-gradient-to-r from-amber-300 to-cyan-300"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Technologies;