import { Instagram, Phone, Globe, Sparkles } from "lucide-react";

const Footer = () => (
  <footer className="bg-background border-t border-border/30" role="contentinfo">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-8">
        <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
          Event <span className="text-gradient-gold">Spark</span>
        </h3>
        <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
          Turning Every Event into a Celebration <Sparkles size={14} className="text-accent" />
        </p>
      </div>

      <div className="flex justify-center gap-6 mb-8">
        <a href="tel:9842573025" className="text-muted-foreground hover:text-accent transition-colors" aria-label="Phone">
          <Phone size={20} />
        </a>
        <a href="https://www.eventspark.in" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors" aria-label="Website">
          <Globe size={20} />
        </a>
        <a href="https://instagram.com/eventspark" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors" aria-label="Instagram">
          <Instagram size={20} />
        </a>
      </div>

      <div className="border-t border-border/30 pt-6 text-center text-xs text-muted-foreground">
        <p>© 2026 Event Spark. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
