import { useEffect, useRef } from "react";
import { Award, GraduationCap, Users, Calendar } from "lucide-react";
const ExperienceSection = () => {
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
  return <section id="experience" ref={sectionRef} className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-orbitron font-bold mb-6">
              Experience & <span className="gradient-text">Achievements</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Experience */}
            <div className="scroll-animate">
              <div className="glass p-8 rounded-2xl border border-white/10 hover:border-primary/30 transition-all duration-500 h-full">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mr-4">
                    <Users className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-orbitron font-bold">Professional Experience</h3>
                    <p className="text-primary">Leadership & Technical Coordination</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="border-l-2 border-primary/30 pl-6 pb-6">
                    <div className="flex items-center mb-2">
                      <Calendar className="w-4 h-4 text-primary mr-2" />
                      <span className="text-sm text-muted-foreground">Recent</span>
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      Technical Coordinator
                    </h4>
                    <p className="text-secondary font-medium mb-2">
                      Android App Development Workshop
                    </p>
                    <p className="text-muted-foreground mb-3">
                      Conducted by Neuron Club AI, Jain University
                    </p>
                    <p className="text-foreground/90 leading-relaxed">
                      Led technical coordination for comprehensive Android development workshop, 
                      facilitating knowledge transfer and hands-on learning experiences for participants.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Achievements & Education */}
            <div className="space-y-8">
              {/* Certifications */}
              <div className="scroll-animate">
                <div className="glass p-8 rounded-2xl border border-white/10 hover:border-secondary/30 transition-all duration-500">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 bg-gradient-secondary rounded-xl flex items-center justify-center mr-4">
                      <Award className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-orbitron font-bold">Certifications</h3>
                      <p className="text-secondary">Professional Development</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-secondary/10 rounded-lg border border-secondary/20">
                      <div>
                        <h4 className="font-semibold text-foreground">Machine Learning Fundamentals</h4>
                        <p className="text-sm text-muted-foreground">Advanced AI Concepts</p>
                      </div>
                      <span className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm">
                        Upcoming
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-accent/10 rounded-lg border border-accent/20">
                      <div>
                        <h4 className="font-semibold text-foreground">Full-Stack Development</h4>
                        <p className="text-sm text-muted-foreground">Modern Web Technologies</p>
                      </div>
                      <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm">
                        Upcoming
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="scroll-animate">
                <div className="glass p-8 rounded-2xl border border-white/10 hover:border-accent/30 transition-all duration-500">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 bg-gradient-accent rounded-xl flex items-center justify-center mr-4">
                      <GraduationCap className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-orbitron font-bold">Education</h3>
                      <p className="text-accent">Academic Foundation</p>
                    </div>
                  </div>

                  <div className="border-l-2 border-accent/30 pl-6">
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      Bachelor's Degree
                    </h4>
                    <p className="text-accent font-medium mb-2">
                      Computer Science & Engineering
                    </p>
                    <p className="text-muted-foreground mb-3">Jain University  2022-26</p>
                    <p className="text-foreground/90 leading-relaxed">
                      Pursuing comprehensive education in computer science with focus on 
                      software engineering, data structures, and emerging technologies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ExperienceSection;