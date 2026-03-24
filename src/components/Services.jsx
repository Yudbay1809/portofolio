import { motion } from "framer-motion";

const services = [
  {
    title: "Web App Development",
    description: "Membangun web app responsif dari nol, termasuk UI, state, dan integrasi API.",
  },
  {
    title: "Backend API & Database",
    description: "Merancang API, autentikasi, dan skema database yang rapi serta mudah dirawat.",
  },
  {
    title: "Maintenance & Troubleshooting",
    description: "Perbaikan bug, optimasi performa, serta monitoring agar sistem tetap stabil.",
  },
  {
    title: "Technical Documentation",
    description: "Dokumentasi teknis yang jelas supaya tim mudah onboarding dan handover.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-8 sm:py-10">
      <div className="section-shell">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          className="section-title"
        >
          What I Can Help With
        </motion.h2>
        <p className="section-subtitle">Area kerja yang paling sering saya tangani dan saya nikmati.</p>

        <div className="mt-7 grid gap-5 md:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="group relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-b from-white/10 to-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-cyan-300/30 hover:shadow-xl hover:shadow-cyan-300/10"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-cyan-300/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <h3 className="relative text-lg font-semibold text-slate-100">{service.title}</h3>
              <p className="relative mt-3 text-sm leading-relaxed text-slate-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
