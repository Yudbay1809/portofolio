import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FiMoon, FiSun } from "react-icons/fi";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import logo from "../assets/YBPLogo.png";

const menuItems = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Education", href: "#education" },
  { label: "Tech", href: "#technologies" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { href: "https://www.linkedin.com/in/yudhabayuprastyo/", icon: FaLinkedin, label: "LinkedIn" },
  { href: "https://github.com/Yudbay1809", icon: FaGithub, label: "GitHub" },
  { href: "https://www.instagram.com/yudbayyy/", icon: FaInstagram, label: "Instagram" },
  { href: "https://wa.me/6285731643104", icon: FaWhatsapp, label: "WhatsApp" },
];

// eslint-disable-next-line react/prop-types
const Navbar = ({ theme, toggleTheme, activeSection, onNavigate }) => {
  const [open, setOpen] = useState(false);

  const handleNavClick = (event, href) => {
    event.preventDefault();
    if (typeof onNavigate === "function") {
      onNavigate(href);
    }
    setOpen(false);
  };

  return (
    <header className="fixed top-0 z-50 w-full">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-8">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-3"
        >
          <a href="#top" onClick={(event) => handleNavClick(event, "#top")} className="flex items-center gap-3">
            <img className="w-10 rounded-xl border border-white/20 sm:w-11" src={logo} alt="Yudha Bayu Prastyo logo" />
            <div className="hidden sm:block">
              <p className="font-semibold tracking-wide text-slate-100">Yudha Bayu Prastyo</p>
              <p className="text-xs text-slate-400">Informatics Graduate</p>
            </div>
          </a>
        </motion.div>

        <div className="hidden items-center gap-1 lg:flex">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(event) => handleNavClick(event, item.href)}
              className={`nav-link rounded-full px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-amber-300 ${
                activeSection === item.href ? "is-active text-amber-300" : "text-slate-300"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="hidden items-center gap-2 lg:flex"
        >
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Ganti tema"
            className="group rounded-full border border-white/15 p-2 text-slate-200 transition-all duration-300 hover:border-cyan-300/60 hover:text-cyan-200 hover:shadow-lg hover:shadow-cyan-300/10"
          >
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>
          {socials.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="group rounded-full border border-white/15 p-2 text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-300/60 hover:text-amber-200 hover:shadow-lg hover:shadow-amber-300/10"
            >
              <Icon />
            </a>
          ))}
        </motion.div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Ganti tema"
            className="rounded-full border border-white/15 p-2 text-slate-200"
          >
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((value) => !value)}
            className="rounded-full border border-white/15 p-2 text-xl text-slate-200"
          >
            {open ? <HiX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="max-h-[70vh] overflow-y-auto border-t border-white/10 bg-slate-950/90 px-4 py-4 backdrop-blur-lg lg:hidden"
          >
            <div className="flex flex-col gap-2">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(event) => handleNavClick(event, item.href)}
                  className={`rounded-full px-3 py-2 text-sm transition-all duration-300 hover:bg-white/5 ${
                    activeSection === item.href ? "bg-white/10 text-amber-200" : "text-slate-200"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-2">
              <button
                type="button"
                onClick={toggleTheme}
                aria-label="Ganti tema"
                className="rounded-full border border-white/15 p-2 text-slate-300 transition hover:border-cyan-300/60 hover:text-cyan-200"
              >
                {theme === "dark" ? <FiSun /> : <FiMoon />}
              </button>
              {socials.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="rounded-full border border-white/15 p-2 text-slate-300 transition hover:border-amber-300/60 hover:text-amber-200"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
