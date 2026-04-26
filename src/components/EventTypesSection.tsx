import { motion } from "framer-motion";

const eventTypes = [
  { emoji: "💍", title: "Weddings", description: "Elegant ceremonies and receptions crafted to perfection." },
  { emoji: "🏢", title: "Corporate Events", description: "Professional setups for conferences, product launches, and team events." },
  { emoji: "🎉", title: "Birthday Parties", description: "Fun-filled celebrations with creative themes and entertainment." },
  { emoji: "📢", title: "Brand Promotions", description: "Eye-catching activations and campaigns that drive engagement." },
  { emoji: "🎁", title: "Surprise Events", description: "Unforgettable surprise experiences planned with secrecy and love." },
];

const EventTypesSection = () => (
  <section className="section-padding bg-section-gradient" aria-label="Event Types">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-accent font-medium text-sm uppercase tracking-widest mb-3">We Specialize In</p>
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
          Event <span className="text-gradient-gold">Types</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {eventTypes.map((et, i) => (
          <motion.div
            key={et.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="glass-card rounded-2xl p-8 text-center hover:border-accent/40 glow-gold-hover transition-all duration-300 group"
          >
            <span className="text-5xl mb-5 block group-hover:scale-110 transition-transform">{et.emoji}</span>
            <h3 className="font-heading text-xl font-bold text-foreground mb-2">{et.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{et.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default EventTypesSection;
