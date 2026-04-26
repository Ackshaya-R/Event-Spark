import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-spark.jpg";

const HeroSection = () => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden" aria-label="Hero">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Premium event venue" width={1920} height={1080} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-hero-gradient opacity-85" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/10 backdrop-blur-sm mb-8"
          >
            <Sparkles size={16} className="text-accent" />
            <span className="text-accent text-sm font-medium">Premium Event Management</span>
          </motion.div>

          <h1 className="font-heading text-5xl sm:text-6xl lg:text-8xl font-bold text-foreground leading-tight mb-4">
            Event <span className="text-gradient-gold">Spark</span>
          </h1>

          <p className="font-heading text-xl sm:text-2xl text-accent italic mb-6">
            Igniting Moments, Creating Memories ✨
          </p>

          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10 font-body">
            From weddings to corporate events, we handle everything with perfection. Your dream event, our expertise.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-base px-8 group font-semibold"
              onClick={() => scrollTo("#booking")}
            >
              Book Your Event
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-spark-cyan/40 text-spark-cyan hover:bg-spark-cyan/10 text-base px-8"
              onClick={() => scrollTo("#services")}
            >
              Explore Services
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
