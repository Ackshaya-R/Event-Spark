import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import GallerySection from "@/components/GallerySection";
import EventTypesSection from "@/components/EventTypesSection";
import BookingSection from "@/components/BookingSection";
import ContactSection from "@/components/ContactSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => (
  <main>
    <Navbar />
    <HeroSection />
    <ServicesSection />
    <GallerySection />
    <EventTypesSection />
    <TestimonialsSection />
    <BookingSection />
    <ContactSection />
    <Footer />
  </main>
);

export default Index;
