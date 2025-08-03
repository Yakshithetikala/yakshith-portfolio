import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import signLanguageImage from "@/assets/project-sign-language.jpg";
import vehicleTrackingImage from "@/assets/project-vehicle-tracking.jpg";
import payrollImage from "@/assets/project-payroll.jpg";

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = sectionRef.current?.querySelectorAll('.scroll-animate');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Sign Language Detection",
      description: "A machine learning-based solution that interprets sign language gestures into text for improved accessibility.",
      image: signLanguageImage,
      technologies: ["Python", "TensorFlow", "OpenCV", "React"],
      type: "Machine Learning"
    },
    {
      title: "Advanced AI Solutions for Real-Time Stolen Vehicle Tracking",
      description: "An AI-powered tracking system that assists in locating stolen vehicles using real-time surveillance data.",
      image: vehicleTrackingImage,
      technologies: ["Python", "AI/ML", "Real-time Processing", "Computer Vision"],
      type: "AI System"
    },
    {
      title: "Employee Payroll System",
      description: "A full-stack system to manage employee payrolls with user authentication and dynamic reporting.",
      image: payrollImage,
      technologies: ["React", "Node.js", "MongoDB", "Authentication"],
      type: "Full-Stack"
    }
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-orbitron font-bold mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Showcasing innovative solutions that blend creativity with cutting-edge technology
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="scroll-animate group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="glass rounded-2xl overflow-hidden border border-white/10 hover:border-primary/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-primary/20 backdrop-blur-sm rounded-full text-primary text-sm font-semibold border border-primary/30">
                        {project.type}
                      </span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl md:text-2xl font-orbitron font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-secondary/20 rounded-full text-secondary text-sm font-medium border border-secondary/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <Button variant="neon" size="sm" className="flex-1">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Project
                      </Button>
                      <Button variant="glass" size="sm">
                        <Github className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Projects */}
          <div className="text-center mt-12 scroll-animate">
            <Button variant="outline" size="lg" className="group">
              View All Projects
              <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;