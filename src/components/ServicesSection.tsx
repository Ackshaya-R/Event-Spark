import { motion } from "framer-motion";
import {
  Flower2, PartyPopper, Palette, UtensilsCrossed, Castle, Music,
  Megaphone, Camera, Building2, Monitor, Brain, Radio, Plane, Tv
} from "lucide-react";

const leftServices = [
  { icon: Flower2, title: "Mandapam Decoration" },
  { icon: PartyPopper, title: "Surprise Event Planning" },
  { icon: Palette, title: "Bridal Makeup" },
  { icon: UtensilsCrossed, title: "Catering Services (Veg & Non-Veg)" },
  { icon: Castle, title: "Theme-Based Weddings" },
  { icon: Music, title: "Audio & DJ Lighting Setup" },
  { icon: Megaphone, title: "Brand Promotions" },
];

const rightServices = [
  { icon: Camera, title: "Photography & Videography" },
  { icon: Building2, title: "Corporate Events" },
  { icon: Monitor, title: "Video Switching up to 4K" },
  { icon: Brain, title: "AI-Based Event Photo Sharing" },
  { icon: Radio, title: "Live Streaming up to 2K" },
  { icon: Plane, title: "Drone Coverage (DJI Air 3)" },
  { icon: Tv, title: "LED Wall & TV" },
];

const ServiceItem = ({ icon: Icon, title, index }: { icon: typeof Flower2; title: string; index: number }) => (
  <motion.div
    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.05, duration: 0.4 }}
    className="flex items-center gap-4 p-4 rounded-xl border border-border/30 bg-card/30 hover:border-accent/40 hover:bg-card/60 glow-gold-hover transition-all duration-300 group cursor-default"
  >
    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
      <Icon size={20} className="text-accent" />
    </div>
    <span className="text-foreground font-medium text-sm">{title}</span>
  </motion.div>
);

const ServicesSection = () => (
  <section id="services" className="section-padding bg-section-gradient" aria-label="Our Services">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-accent font-medium text-sm uppercase tracking-widest mb-3">What We Offer</p>
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
          Our <span className="text-gradient-gold">Services</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-0">
        {/* Left column */}
        <div className="space-y-3 md:pr-8">
          {leftServices.map((s, i) => (
            <ServiceItem key={s.title} icon={s.icon} title={s.title} index={i} />
          ))}
        </div>

        {/* Glowing divider */}
        <div className="hidden md:flex justify-center px-6">
          <div className="w-px h-full divider-glow rounded-full" />
        </div>

        {/* Right column */}
        <div className="space-y-3 md:pl-8">
          {rightServices.map((s, i) => (
            <ServiceItem key={s.title} icon={s.icon} title={s.title} index={i} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ServicesSection;
