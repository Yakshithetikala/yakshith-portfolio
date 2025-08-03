import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Linkedin, Send, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const {
    toast
  } = useToast();
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      });
    }, {
      threshold: 0.3
    });
    const elements = sectionRef.current?.querySelectorAll('.scroll-animate');
    elements?.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!"
    });
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return <section id="contact" ref={sectionRef} className="py-20 lg:py-32 bg-background-secondary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-orbitron font-bold mb-6">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to bring your ideas to life? Let's discuss how we can work together to create something amazing.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="scroll-animate">
              <div className="glass p-8 lg:p-12 rounded-2xl border border-white/10">
                <h3 className="text-2xl md:text-3xl font-orbitron font-bold mb-6">
                  Send me a message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleInputChange} required className="bg-background/50 border-white/20 focus:border-primary/50 rounded-lg h-12" />
                  </div>
                  
                  <div>
                    <Input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleInputChange} required className="bg-background/50 border-white/20 focus:border-primary/50 rounded-lg h-12" />
                  </div>
                  
                  <div>
                    <Textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleInputChange} required rows={6} className="bg-background/50 border-white/20 focus:border-primary/50 rounded-lg resize-none" />
                  </div>
                  
                  <Button type="submit" variant="neon" size="lg" className="w-full group">
                    <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Info & Resume */}
            <div className="space-y-8">
              {/* Personal Info */}
              <div className="scroll-animate">
                <div className="glass p-8 rounded-2xl border border-white/10">
                  <h3 className="text-2xl md:text-3xl font-orbitron font-bold mb-6">
                    Get in Touch
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-muted-foreground text-sm">Email</p>
                        <p className="text-foreground font-medium">yakshith@example.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mr-4">
                        <MapPin className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <p className="text-muted-foreground text-sm">Location</p>
                        <p className="text-foreground font-medium">India</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mr-4">
                        <Linkedin className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <p className="text-muted-foreground text-sm">LinkedIn</p>
                        <a href="https://www.linkedin.com/in/yakshithetikala" target="_blank" rel="noopener noreferrer" className="text-foreground font-medium hover:text-accent transition-colors duration-300">
                          yakshithetikala
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Resume Download */}
              <div className="scroll-animate">
                <Card className="glass border-white/10 overflow-hidden">
                  <CardContent className="p-8">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                        <Download className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-orbitron font-bold mb-2">
                        Download Resume
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        Get a comprehensive overview of my skills, experience, and projects.
                      </p>
                      <Button variant="hero" size="lg" className="w-full">
                        <Download className="w-5 h-5 mr-2" />
                        Download PDF
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Floating Action */}
              <div className="scroll-animate">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;