import { 
  RiJavascriptFill, 
  RiCss3Fill, 
  RiHtml5Fill 
} from "react-icons/ri";
import { 
  BiLogoReact, 
  BiLogoTailwindCss, 
  BiLogoNodejs, 
  BiLogoPhp,
  BiLogoPython
} from "react-icons/bi";
import { SiMysql, SiGooglecloud, SiFirebase } from "react-icons/si";
import { motion } from "framer-motion";

const TECH_ICONS = [
  { icon: <RiHtml5Fill />, name: "HTML5" },
  { icon: <RiCss3Fill />, name: "CSS3" },
  { icon: <RiJavascriptFill />, name: "JavaScript" },
  { icon: <BiLogoPhp />, name: "PHP" },
  { icon: <BiLogoReact />, name: "React" },
  { icon: <BiLogoTailwindCss />, name: "Tailwind" },
  { icon: <SiMysql />, name: "MySQL" },
  { icon: <BiLogoNodejs />, name: "Node.js" },
  { icon: <BiLogoPython />, name: "Python" },
  { icon: <SiGooglecloud />, name: "GCP" },
  { icon: <SiFirebase />, name: "Firebase" },
];

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = ({ content }) => {
  return (
    <section id="technologies" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <span className="text-[10px] font-bold tracking-[0.3em] text-cyber uppercase mb-4 inline-block">{content.sectionLabel}</span>
        <h2 className="text-4xl md:text-5xl font-serif">{content.title} <span className="italic text-cyber">{content.titleHighlight}</span></h2>
      </motion.div>

      <div className="flex flex-wrap items-center justify-center gap-6 max-w-5xl mx-auto px-4">
        {TECH_ICONS.map((tech, index) => (
          <motion.div
            key={index}
            variants={iconVariants(2 + index * 0.5)}
            initial="initial"
            animate="animate"
            className="group relative"
          >
            <div className="glass-panel p-6 sm:p-8 flex items-center justify-center group-hover:border-cyber/40 transition-all duration-300">
              <div className="text-4xl sm:text-6xl transition-all duration-300 group-hover:scale-110 text-primary group-hover:text-cyber">
                {tech.icon}
              </div>
              
              {/* Tooltip Label */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <span className="text-[9px] font-bold tracking-widest text-cyber uppercase whitespace-nowrap bg-obsidian px-2 py-1 rounded border border-cyber/20">
                  {tech.name}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Decorative Line */}
      <div className="mt-20 flex justify-center opacity-20 pointer-events-none">
        <div className="w-1/2 h-[1px] bg-gradient-to-r from-transparent via-cyber to-transparent" />
      </div>
    </section>
  );
};

export default Technologies;