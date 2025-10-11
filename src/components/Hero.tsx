import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-nueva-ecija.jpg";
import { MapPin } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Beautiful landscape of Nueva Ecija Philippines"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="w-6 h-6" />
            <span className="text-lg font-medium">Nueva Ecija, Philippines</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Discover the Hidden Gems of Nueva Ecija
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Experience breathtaking landscapes, pristine rivers, and authentic Filipino culture in the heart of Central Luzon
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => scrollToSection("tourist-spots")}
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 accent-glow"
            >
              Explore Destinations
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("delicacies")}
              className="bg-white/10 text-white border-white/30 hover:bg-white/20 text-lg px-8 py-6 backdrop-blur-sm"
            >
              Taste Local Flavors
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
