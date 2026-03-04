import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FiMoon, FiSun } from "react-icons/fi";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import logo from "../assets/YBPLogo.png";

const menuItems = [
  { label: "About", href: "#about" },
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
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/60 backdrop-blur-xl">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-8">
        <a href="#top" onClick={(event) => handleNavClick(event, "#top")} className="flex items-center gap-3">
          <img className="w-10 rounded-xl border border-white/20 sm:w-11" src={logo} alt="Yudha Bayu Prastyo logo" />
          <div className="hidden sm:block">
            <p className="font-semibold tracking-wide text-slate-100">Yudha Bayu Prastyo</p>
            <p className="text-xs text-slate-400">Informatics Graduate</p>
          </div>
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(event) => handleNavClick(event, item.href)}
              className={`nav-link text-sm font-medium transition hover:text-amber-300 ${
                activeSection === item.href ? "is-active text-amber-300" : "text-slate-300"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Ganti tema"
            className="rounded-lg border border-white/15 p-2 text-slate-200 transition hover:border-cyan-300/60 hover:text-cyan-200"
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
              className="rounded-lg border border-white/15 p-2 text-slate-300 transition hover:-translate-y-0.5 hover:border-amber-300/60 hover:text-amber-200"
            >
              <Icon />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Ganti tema"
            className="rounded-lg border border-white/15 p-2 text-slate-200"
          >
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((value) => !value)}
            className="rounded-lg border border-white/15 p-2 text-xl text-slate-200"
          >
            {open ? <HiX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="max-h-[70vh] overflow-y-auto border-t border-white/10 bg-slate-950/90 px-4 py-4 backdrop-blur lg:hidden"
          >
            <div className="flex flex-col gap-3">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(event) => handleNavClick(event, item.href)}
                  className={`rounded-md px-2 py-1 text-sm hover:bg-white/5 ${
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
                className="rounded-lg border border-white/15 p-2 text-slate-300"
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
                  className="rounded-lg border border-white/15 p-2 text-slate-300"
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
