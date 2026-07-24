import { Reveal } from "@/components/reveal";
import { Briefcase, FolderOpen, Cpu, Award } from "lucide-react";

export function AboutSection() {
  const stats = [
    { label: "Years Experience", value: "1+", icon: <Briefcase className="w-5 h-5 text-primary mb-2" /> },
    { label: "Projects Completed", value: "10+", icon: <FolderOpen className="w-5 h-5 text-primary mb-2" /> },
    { label: "Core Technologies", value: "9+", icon: <Cpu className="w-5 h-5 text-primary mb-2" /> },
    { label: "Certifications", value: "3+", icon: <Award className="w-5 h-5 text-primary mb-2" /> },
  ];

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="flex items-center space-x-4 mb-8">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">About Me</h2>
              <div className="flex-grow h-[1px] bg-border" />
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Reveal delay={0.1}>
              <div className="prose dark:prose-invert prose-lg text-muted-foreground font-sans space-y-4">
                <p>
                  I'm Muhammad Sufyan, a Python Developer and Machine Learning enthusiast passionate about turning raw data into meaningful insights. I began my journey with a Python Programming internship at CodeAlpha, and I'm currently working as a Machine Learning Engineering Intern at FlyRank AI, where I apply data analysis and ML techniques to real-world problems.
                </p>
                <p>
                  My focus lies in building practical, impactful projects across data science, machine learning, and predictive modeling — driven by curiosity and a commitment to continuous learning.
                </p>
                <p className="text-sm font-mono text-primary/70">
                  📍 Hyderabad, Sindh, Pakistan
                </p>
              </div>
            </Reveal>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <Reveal key={stat.label} delay={0.2 + i * 0.1}>
                  <div className="p-6 rounded-2xl bg-card border border-border/50 shadow-sm hover:border-primary/50 transition-colors group">
                    {stat.icon}
                    <div className="text-3xl font-bold font-serif mb-1 group-hover:text-primary transition-colors">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider font-mono">
                      {stat.label}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
