import { motion } from "framer-motion";
import { Phone, Globe, Instagram } from "lucide-react";

const contacts = [
  { icon: Phone, label: "9842573025 | 7339202005", href: "tel:9842573025" },
  { icon: Globe, label: "www.eventspark.in", href: "https://www.eventspark.in" },
  { icon: Instagram, label: "@eventspark", href: "https://instagram.com/eventspark" },
];

const ContactSection = () => (
  <section id="contact" className="section-padding bg-section-gradient" aria-label="Contact us">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <p className="text-spark-cyan font-medium text-sm uppercase tracking-widest mb-3">Get In Touch</p>
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
          Contact <span className="text-gradient-cyan">Us</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {contacts.map((c, i) => (
          <motion.a
            key={c.label}
            href={c.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="glass-card rounded-2xl p-8 text-center hover:border-spark-cyan/40 glow-cyan transition-all duration-300 group block"
          >
            <c.icon size={32} className="text-spark-cyan mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <p className="text-foreground font-medium text-sm">{c.label}</p>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default ContactSection;
