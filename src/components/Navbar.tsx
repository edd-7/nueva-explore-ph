import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Tourist Spots", id: "tourist-spots" },
    { label: "Delicacies", id: "delicacies" },
    { label: "Visit", id: "visit" },
  ];

  return (
    <nav
      className={`fixed  top-0 left-0 right-0 z-50 transition-smooth px-3 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-transparent backdrop-blur-md shadow-lg"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
     <div className="flex items-center gap-3">
      <img
        src="/src/assets/logo.png" // <-- change this path if needed
        alt="Logo"
        className="w-10 h-10 object-contain"
      />
      <button
        onClick={() => scrollToSection("home")}
        className="text-2xl font-bold text-success hover:text-primary/80 transition-smooth"
      >
        Nueva Ecija Explorer
      </button>
    </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-foreground hover:text-primary transition-smooth font-medium"
              >
                {link.label}
              </button>
            ))}
            <Button onClick={() => scrollToSection("visit")} className="accent-glow">
              Plan Your Visit
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left text-foreground hover:text-primary transition-smooth font-medium py-2"
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("visit")}
              className="w-full accent-glow"
            >
              Plan Your Visit
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
