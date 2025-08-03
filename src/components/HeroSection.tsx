import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.9)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-4 h-4 border border-primary/30 rotate-45 floating-animation"></div>
        <div className="absolute bottom-32 right-20 w-6 h-6 border border-secondary/30 floating-animation" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 right-10 w-3 h-3 bg-accent/50 rounded-full floating-animation" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-20 w-5 h-5 border border-accent/30 rotate-12 floating-animation" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-slide-up">
          {/* Welcome Line */}
          <p className="text-lg md:text-xl text-muted-foreground mb-4 font-inter">
            Hi, I'm Yakshith – blending creativity with code to shape intelligent systems.
          </p>

          {/* Main Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-orbitron font-black mb-6 leading-tight">
            <span className="gradient-text">E. SAI</span>
            <br />
            <span className="text-foreground">YAKSHITH</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl lg:text-3xl text-foreground/90 mb-8 font-inter font-medium max-w-3xl mx-auto">
            Building elegant digital solutions that solve{" "}
            <span className="gradient-text font-semibold">real-world problems</span>
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="hero" size="hero" className="group">
              <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              View My Resume
            </Button>
            <Button 
              variant="glass" 
              size="hero" 
              onClick={() => scrollToSection("contact")}
              className="group"
            >
              <Mail className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              Get in Touch
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div 
            className="flex flex-col items-center cursor-pointer group"
            onClick={() => scrollToSection("about")}
          >
            <p className="text-sm text-muted-foreground mb-2 font-inter">Discover More</p>
            <ArrowDown className="w-6 h-6 text-primary animate-bounce group-hover:text-secondary transition-colors duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;