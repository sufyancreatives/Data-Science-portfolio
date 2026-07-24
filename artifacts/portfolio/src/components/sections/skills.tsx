import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";

const SKILL_CATEGORIES = [
  {
    title: "Core Competencies",
    skills: [
      "Python Programming",
      "Machine Learning",
      "Data Science",
      "Data Analysis",
      "Exploratory Data Analysis (EDA)",
      "Data Cleaning & Preprocessing",
      "Data Visualization",
      "Predictive Modeling",
      "Applied Artificial Intelligence",
    ],
  },
  {
    title: "Python Libraries & Frameworks",
    skills: ["NumPy", "Pandas", "Matplotlib", "Scikit-learn", "Streamlit", "FastAPI", "Uvicorn"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git & GitHub", "Jupyter Notebook", "Google Colab", "Visual Studio Code"],
  },
  {
    title: "Professional Skills",
    skills: [
      "Problem Solving & Critical Thinking",
      "Team Collaboration & Leadership",
      "Effective Communication",
      "Time Management",
      "Self-Learning & Research",
      "Adaptability",
    ],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="flex items-center space-x-4 mb-16">
              <div className="flex-grow h-[1px] bg-border" />
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-right">Technical Arsenal</h2>
            </div>
          </Reveal>

          <div className="grid gap-10">
            {SKILL_CATEGORIES.map((category, index) => (
              <Reveal key={category.title} delay={index * 0.1}>
                <div className="space-y-4">
                  <h3 className="text-lg font-mono text-primary/80 uppercase tracking-widest flex items-center gap-2">
                    <span className="text-muted-foreground/50">0{index + 1}.</span> {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="px-4 py-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default rounded-md bg-secondary/50 border border-border/50"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
