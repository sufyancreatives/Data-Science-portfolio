import { Reveal } from "@/components/reveal";

const EXPERIENCES = [
  {
    id: 1,
    role: "Freelance Python & Data Developer",
    company: "Self-Employed — Hyderabad, Pakistan (Remote)",
    date: "Oct 2025 – Present",
    bullets: [
      "Develop and deploy data analytics dashboards and Python applications for clients using Streamlit.",
      "Perform data cleaning, EDA, and visualization on client datasets to surface actionable business insights.",
      "Build and maintain REST APIs using FastAPI and integrate MongoDB as a backend data store.",
    ],
  },
  {
    id: 2,
    role: "Machine Learning Engineering Intern",
    company: "FlyRank AI",
    date: "2024 – Present",
    bullets: [
      "Apply ML techniques and data analysis to real-world product challenges.",
      "Build and refine ML-driven solutions using Python, Scikit-learn, and Pandas.",
      "Conduct exploratory data analysis (EDA) to uncover patterns and drive model improvements.",
      "Collaborate with the engineering team to integrate predictive models into production workflows.",
      "Document findings and translate technical results into clear, actionable insights.",
    ],
  },
  {
    id: 3,
    role: "Python Programming Intern",
    company: "CodeAlpha",
    date: "2023",
    bullets: [
      "Developed Python scripts for data processing, cleaning, and automation.",
      "Built foundational data pipelines using Pandas and NumPy.",
      "Explored machine learning fundamentals and applied basic models using Scikit-learn.",
      "Contributed to team projects, improving code quality through collaboration and code review.",
      "Gained hands-on experience solving real business problems with Python.",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-24 relative"
      style={{ backgroundColor: "#0B0E14" }}
    >
      <div className="container mx-auto px-4 md:px-8">
        {/* max-width 820px matches reference */}
        <div style={{ maxWidth: "820px", margin: "0 auto" }}>

          {/* Section heading */}
          <Reveal>
            <div className="flex items-center space-x-4 mb-16">
              <h2
                className="text-3xl md:text-4xl font-bold tracking-tight"
                style={{ color: "#E7EAF0" }}
              >
                Experience
              </h2>
              <div
                className="flex-grow h-[1px]"
                style={{ background: "linear-gradient(to right, rgba(56,189,248,0.4), transparent)" }}
              />
            </div>
          </Reveal>

          {/*
            Timeline wrapper — padding-left: 36px creates gutter.
            ::before equivalent: absolute line at left 11px.
            Marker pulls back -36px; its centre (12px) aligns with line (11px).
          */}
          <div className="relative" style={{ paddingLeft: "36px" }}>

            {/* Vertical gradient line */}
            <div
              className="absolute"
              style={{
                left: "11px",
                top: "8px",
                bottom: "8px",
                width: "1.5px",
                background: "linear-gradient(to bottom, rgba(56,189,248,0.5), rgba(56,189,248,0.08))",
              }}
            />

            {EXPERIENCES.map((exp, index) => (
              <Reveal key={exp.id} delay={index * 0.15}>
                {/* margin-bottom: 56px between entries, 0 on last */}
                <div
                  className="relative group"
                  style={{ marginBottom: index < EXPERIENCES.length - 1 ? "56px" : 0 }}
                >
                  {/* Circular marker — 24×24 px, left: -36px, top: 2px */}
                  <div
                    className="absolute flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{
                      left: "-36px",
                      top: "2px",
                      width: "24px",
                      height: "24px",
                      borderRadius: "50%",
                      backgroundColor: "#10141C",
                      border: "1.5px solid #38BDF8",
                    }}
                  >
                    <div
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        backgroundColor: "#38BDF8",
                        boxShadow: "0 0 8px rgba(56,189,248,0.8)",
                      }}
                    />
                  </div>

                  {/* Role + date */}
                  <div
                    className="flex items-start justify-between gap-4"
                    style={{ marginBottom: "4px" }}
                  >
                    <h3
                      className="font-serif font-bold"
                      style={{ fontSize: "19px", color: "#E7EAF0" }}
                    >
                      {exp.role}
                    </h3>
                    {/* Date badge */}
                    <span
                      className="flex-shrink-0 font-sans font-medium whitespace-nowrap"
                      style={{
                        fontSize: "12px",
                        color: "#7DD3FC",
                        backgroundColor: "rgba(56,189,248,0.1)",
                        border: "0.5px solid rgba(56,189,248,0.3)",
                        padding: "4px 12px",
                        borderRadius: "20px",
                      }}
                    >
                      {exp.date}
                    </span>
                  </div>

                  {/* Company */}
                  <p
                    className="font-sans"
                    style={{ fontSize: "14px", color: "#8891A5", marginBottom: "16px" }}
                  >
                    {exp.company}
                  </p>

                  {/* Bullets — › in #38BDF8, body in #AEB4C2 */}
                  <ul style={{ listStyle: "none" }}>
                    {exp.bullets.map((bullet, i) => (
                      <li
                        key={i}
                        className="relative font-sans"
                        style={{
                          paddingLeft: "18px",
                          fontSize: "14px",
                          color: "#AEB4C2",
                          lineHeight: "1.7",
                          marginBottom: i < exp.bullets.length - 1 ? "8px" : 0,
                        }}
                      >
                        <span
                          className="absolute left-0 top-0 font-bold"
                          style={{ color: "#38BDF8" }}
                        >
                          ›
                        </span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
