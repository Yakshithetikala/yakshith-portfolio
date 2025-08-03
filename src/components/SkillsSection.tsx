import { useEffect, useRef } from "react";
import { Code, Layers, BarChart3 } from "lucide-react";

const SkillsSection = () => {
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
      { threshold: 0.3 }
    );

    const elements = sectionRef.current?.querySelectorAll('.scroll-animate');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      skills: ["Python", "Java", "HTML", "CSS", "JavaScript", "SQL"],
      color: "primary"
    },
    {
      title: "Frameworks & Libraries",
      icon: Layers,
      skills: ["React", "Node.js", "MongoDB"],
      color: "secondary"
    },
    {
      title: "Data & Tools",
      icon: BarChart3,
      skills: ["Power BI"],
      color: "accent"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return {
          bg: "bg-primary/20",
          border: "border-primary/30",
          hover: "hover:border-primary/50",
          icon: "bg-gradient-primary",
          skill: "bg-primary/20 text-primary border-primary/30"
        };
      case "secondary":
        return {
          bg: "bg-secondary/20",
          border: "border-secondary/30",
          hover: "hover:border-secondary/50",
          icon: "bg-gradient-secondary",
          skill: "bg-secondary/20 text-secondary border-secondary/30"
        };
      case "accent":
        return {
          bg: "bg-accent/20",
          border: "border-accent/30",
          hover: "hover:border-accent/50",
          icon: "bg-gradient-accent",
          skill: "bg-accent/20 text-accent border-accent/30"
        };
      default:
        return {
          bg: "bg-primary/20",
          border: "border-primary/30",
          hover: "hover:border-primary/50",
          icon: "bg-gradient-primary",
          skill: "bg-primary/20 text-primary border-primary/30"
        };
    }
  };

  return (
    <section id="skills" ref={sectionRef} className="py-20 lg:py-32 bg-background-secondary relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-orbitron font-bold mb-6">
              My <span className="gradient-text">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive toolkit for building modern, intelligent applications
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => {
              const colorClasses = getColorClasses(category.color);
              const Icon = category.icon;
              
              return (
                <div 
                  key={index} 
                  className="scroll-animate group"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className={`glass p-8 rounded-2xl border ${colorClasses.border} ${colorClasses.hover} transition-all duration-500 hover:scale-105 hover:shadow-2xl h-full`}>
                    {/* Category Header */}
                    <div className="flex items-center mb-6">
                      <div className={`w-14 h-14 ${colorClasses.icon} rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-orbitron font-bold">
                        {category.title}
                      </h3>
                    </div>

                    {/* Skills List */}
                    <div className="space-y-3">
                      {category.skills.map((skill, skillIndex) => (
                        <div 
                          key={skillIndex}
                          className={`px-4 py-3 ${colorClasses.skill} rounded-lg border font-medium transition-all duration-300 hover:scale-105 cursor-default`}
                          style={{ animationDelay: `${(index * 0.2) + (skillIndex * 0.1)}s` }}
                        >
                          {skill}
                        </div>
                      ))}
                    </div>

                    {/* Skill Count */}
                    <div className="mt-6 pt-6 border-t border-white/10">
                      <p className="text-muted-foreground text-center">
                        <span className={`font-bold text-lg ${category.color === 'primary' ? 'text-primary' : category.color === 'secondary' ? 'text-secondary' : 'text-accent'}`}>
                          {category.skills.length}
                        </span>{" "}
                        {category.skills.length === 1 ? 'Technology' : 'Technologies'}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;