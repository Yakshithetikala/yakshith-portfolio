import { useEffect, useRef } from "react";
import { Code, Database, Zap } from "lucide-react";

const AboutSection = () => {
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

  return (
    <section id="about" ref={sectionRef} className="py-20 lg:py-32 bg-background-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-secondary/5 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-orbitron font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* About Text */}
            <div className="scroll-animate">
              <div className="glass p-8 lg:p-12 rounded-2xl border border-white/10">
                <p className="text-lg md:text-xl text-foreground/90 leading-relaxed font-inter mb-6">
                  I'm <span className="gradient-text font-semibold">E. Sai Yakshith</span>, a Web Developer and Data Analyst who loves turning ideas into smart digital solutions.
                </p>
                <p className="text-lg md:text-xl text-foreground/90 leading-relaxed font-inter mb-6">
                  With a strong foundation in full-stack development and a deep interest in data-driven systems, I create experiences that are both functional and futuristic.
                </p>
                <p className="text-lg md:text-xl text-foreground/90 leading-relaxed font-inter">
                  My passion lies in bridging the gap between <span className="text-primary">creative design</span> and <span className="text-secondary">intelligent technology</span>, delivering solutions that make a real impact.
                </p>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid gap-6 scroll-animate">
              <div className="glass p-6 rounded-xl border border-white/10 hover:border-primary/30 transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-orbitron font-semibold">Full-Stack Development</h3>
                </div>
                <p className="text-muted-foreground">
                  Building end-to-end web applications with modern technologies and best practices.
                </p>
              </div>

              <div className="glass p-6 rounded-xl border border-white/10 hover:border-secondary/30 transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Database className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-orbitron font-semibold">Data Analysis</h3>
                </div>
                <p className="text-muted-foreground">
                  Transforming raw data into actionable insights through advanced analytics and visualization.
                </p>
              </div>

              <div className="glass p-6 rounded-xl border border-white/10 hover:border-accent/30 transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-orbitron font-semibold">AI Integration</h3>
                </div>
                <p className="text-muted-foreground">
                  Incorporating machine learning and AI technologies to create intelligent systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;