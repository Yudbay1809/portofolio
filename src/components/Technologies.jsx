import { motion } from "framer-motion";
import { FaNodeJs } from "react-icons/fa";
import { FaPhp } from "react-icons/fa6";
import { IoLogoFirebase } from "react-icons/io5";
import { RiReactjsLine } from "react-icons/ri";
import { SiAndroidstudio, SiMysql } from "react-icons/si";
import { PROJECTS } from "../constants";

const TECH_META = {
  React: { icon: RiReactjsLine, color: "text-cyan-300", category: "Frontend" },
  "Tailwind CSS": { icon: RiReactjsLine, color: "text-cyan-300", category: "Frontend" },
  HTML: { icon: RiReactjsLine, color: "text-cyan-300", category: "Frontend" },
  CSS: { icon: RiReactjsLine, color: "text-cyan-300", category: "Frontend" },
  Bootstrap: { icon: RiReactjsLine, color: "text-cyan-300", category: "Frontend" },
  "Next.js": { icon: RiReactjsLine, color: "text-cyan-300", category: "Frontend" },
  PHP: { icon: FaPhp, color: "text-blue-300", category: "Backend" },
  MySQL: { icon: SiMysql, color: "text-sky-300", category: "Backend" },
  Python: { icon: FaNodeJs, color: "text-lime-300", category: "Backend" },
  FastAPI: { icon: FaNodeJs, color: "text-lime-300", category: "Backend" },
  SQLAlchemy: { icon: FaNodeJs, color: "text-lime-300", category: "Backend" },
  Firebase: { icon: IoLogoFirebase, color: "text-orange-300", category: "Backend" },
  "Node.js": { icon: FaNodeJs, color: "text-lime-300", category: "Backend" },
  Flutter: { icon: SiAndroidstudio, color: "text-emerald-300", category: "Mobile" },
  Dart: { icon: SiAndroidstudio, color: "text-emerald-300", category: "Mobile" },
  Android: { icon: SiAndroidstudio, color: "text-emerald-300", category: "Mobile" },
  "Android Studio": { icon: SiAndroidstudio, color: "text-emerald-300", category: "Mobile" },
  Riverpod: { icon: SiAndroidstudio, color: "text-emerald-300", category: "Mobile" },
  GoRouter: { icon: SiAndroidstudio, color: "text-emerald-300", category: "Mobile" },
  Desktop: { icon: SiAndroidstudio, color: "text-emerald-300", category: "Desktop" },
  Windows: { icon: SiAndroidstudio, color: "text-emerald-300", category: "Desktop" },
};

const CATEGORY_ORDER = ["Frontend", "Backend", "Mobile", "Desktop"];

const stackCounts = PROJECTS.reduce((acc, project) => {
  project.technologies.forEach((tech) => {
    acc[tech] = (acc[tech] || 0) + 1;
  });
  return acc;
}, {});

const categoryStacks = CATEGORY_ORDER.map((category) => {
  const items = Object.entries(stackCounts)
    .filter(([tech]) => TECH_META[tech]?.category === category)
    .sort((a, b) => b[1] - a[1])
    .map(([tech, count]) => ({
      tech,
      count,
      icon: TECH_META[tech]?.icon,
      color: TECH_META[tech]?.color || "text-slate-300",
    }));

  return { category, items };
}).filter((group) => group.items.length > 0);

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
          {categoryStacks.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="group relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-b from-white/10 to-white/5 p-5 backdrop-blur-sm transition-all duration-300 hover:border-cyan-300/30 hover:shadow-xl hover:shadow-cyan-300/10"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-amber-300/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Category</p>
                  <h3 className="mt-1 text-lg font-bold text-slate-100">{group.category}</h3>
                </div>
                <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-slate-200">
                  {group.items.length} stacks
                </span>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <span
                      key={`${group.category}-${item.tech}`}
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-200"
                    >
                      {Icon ? <Icon className={`text-sm ${item.color}`} /> : null}
                      {item.tech} ({item.count}x)
                    </span>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
