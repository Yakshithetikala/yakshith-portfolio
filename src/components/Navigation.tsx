import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "glass border-b border-white/10 backdrop-blur-xl py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div 
          className="font-orbitron font-bold text-xl gradient-text cursor-pointer"
          onClick={() => scrollToSection("hero")}
        >
          E. SAI YAKSHITH
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection("about")}
            className="text-foreground hover:text-primary transition-colors duration-300"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-foreground hover:text-primary transition-colors duration-300"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="text-foreground hover:text-primary transition-colors duration-300"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection("experience")}
            className="text-foreground hover:text-primary transition-colors duration-300"
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-foreground hover:text-primary transition-colors duration-300"
          >
            Contact
          </button>
          <Button variant="glass" size="sm">
            Resume
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass backdrop-blur-xl border-b border-white/10">
          <div className="container mx-auto px-6 py-4 space-y-4">
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left text-foreground hover:text-primary transition-colors duration-300"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="block w-full text-left text-foreground hover:text-primary transition-colors duration-300"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="block w-full text-left text-foreground hover:text-primary transition-colors duration-300"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="block w-full text-left text-foreground hover:text-primary transition-colors duration-300"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left text-foreground hover:text-primary transition-colors duration-300"
            >
              Contact
            </button>
            <Button variant="glass" size="sm" className="w-full">
              Resume
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;