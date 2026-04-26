import { motion } from "framer-motion";
import galleryWedding from "@/assets/gallery-wedding.jpg";
import galleryStage from "@/assets/gallery-stage.jpg";
import galleryLighting from "@/assets/gallery-lighting.jpg";
import galleryVideo from "@/assets/gallery-video.jpg";
import galleryRomantic from "@/assets/gallery-romantic.jpg";

const images = [
  { src: galleryWedding, alt: "Beautiful wedding ceremony decoration" },
  { src: galleryStage, alt: "Corporate event stage setup" },
  { src: galleryLighting, alt: "Professional event lighting" },
  { src: galleryVideo, alt: "Video production setup" },
  { src: galleryRomantic, alt: "Romantic dinner decoration" },
];

const GallerySection = () => (
  <section id="gallery" className="section-padding bg-section-gradient-reverse" aria-label="Gallery">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-spark-cyan font-medium text-sm uppercase tracking-widest mb-3">Our Work</p>
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
          Event <span className="text-gradient-cyan">Gallery</span>
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        {images.map((img, i) => (
          <motion.div
            key={img.alt}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="relative group"
          >
            <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-2 border-border/50 group-hover:border-spark-cyan/60 transition-all duration-500 group-hover:shadow-[0_0_30px_hsl(var(--spark-cyan)/0.3)]">
              <img
                src={img.src}
                alt={img.alt}
                width={800}
                height={800}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
