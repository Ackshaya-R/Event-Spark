import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ananya Krishnan",
    role: "Bride, Chennai",
    text: "Event Spark turned our wedding into a fairy tale. The mandapam decoration was breathtaking and every detail was perfect. Couldn't have asked for more!",
    rating: 5,
  },
  {
    name: "Rajesh Mehta",
    role: "CEO, TechVentures",
    text: "Their corporate event setup was world-class. The LED walls, live streaming, and video switching were flawless. Our product launch exceeded all expectations.",
    rating: 5,
  },
  {
    name: "Priya Sundaram",
    role: "Event Host",
    text: "The surprise birthday party they planned for my husband was incredible. The drone footage and AI photo sharing made it unforgettable for everyone.",
    rating: 5,
  },
];

const TestimonialsSection = () => (
  <section id="testimonials" className="section-padding bg-section-gradient-reverse" aria-label="Testimonials">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-accent font-medium text-sm uppercase tracking-widest mb-3">Testimonials</p>
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
          What Our <span className="text-gradient-gold">Clients</span> Say
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.blockquote
            key={t.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="glass-card rounded-2xl p-8 flex flex-col glow-gold-hover transition-all duration-300"
          >
            <div className="flex gap-1 mb-4">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} size={16} className="fill-accent text-accent" />
              ))}
            </div>
            <p className="text-foreground/90 text-sm leading-relaxed flex-1 mb-6">"{t.text}"</p>
            <footer>
              <p className="font-heading font-semibold text-foreground">{t.name}</p>
              <p className="text-sm text-muted-foreground">{t.role}</p>
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
