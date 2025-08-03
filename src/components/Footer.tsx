import { Heart, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-white/10 py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="font-orbitron font-bold text-xl gradient-text mb-4">
                E. SAI YAKSHITH
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Building elegant digital solutions that solve real-world problems through innovative technology and creative design.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-orbitron font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors duration-300">
                  About
                </a>
                <a href="#projects" className="block text-muted-foreground hover:text-primary transition-colors duration-300">
                  Projects
                </a>
                <a href="#skills" className="block text-muted-foreground hover:text-primary transition-colors duration-300">
                  Skills
                </a>
                <a href="#contact" className="block text-muted-foreground hover:text-primary transition-colors duration-300">
                  Contact
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-orbitron font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/in/yakshithetikala" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/30 transition-colors duration-300 group"
                >
                  <Linkedin className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a 
                  href="mailto:yakshith@example.com"
                  className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center hover:bg-secondary/30 transition-colors duration-300 group"
                >
                  <Mail className="w-5 h-5 text-secondary group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a 
                  href="#"
                  className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center hover:bg-accent/30 transition-colors duration-300 group"
                >
                  <Github className="w-5 h-5 text-accent group-hover:scale-110 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-muted-foreground flex items-center justify-center">
              Made with <Heart className="w-4 h-4 text-red-500 mx-2" /> by E. Sai Yakshith
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              © 2024 E. Sai Yakshith. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;