import { Reveal } from "@/components/reveal";
import { Download, Trophy, BookOpen, Briefcase, Code2, User2, Globe } from "lucide-react";

const SKILLS = {
  "Programming Languages": ["Python", "JavaScript"],
  "Data Science & Analysis": ["Pandas", "NumPy", "Matplotlib", "EDA", "Data Cleaning", "Data Visualization"],
  "Frameworks & Tools": ["Streamlit", "FastAPI", "Power BI", "MongoDB"],
  "Web & Others": ["HTML", "CSS", "Git", "MS Office"],
};

const EXPERIENCE = [
  {
    role: "Freelance Python & Data Developer",
    company: "Self-Employed",
    location: "Hyderabad, Pakistan (Remote)",
    date: "Oct 2025 – Present",
    bullets: [
      "Develop and deploy data analytics dashboards and Python applications for clients using Streamlit.",
      "Perform data cleaning, EDA, and visualization on client datasets to surface actionable business insights.",
      "Build and maintain REST APIs using FastAPI and integrate MongoDB as a backend data store.",
    ],
  },
  {
    role: "Machine Learning Engineering Intern",
    company: "FlyRank AI",
    location: "Remote",
    date: "2024 – Present",
    bullets: [
      "Apply ML techniques and data analysis to real-world product challenges.",
      "Build and refine ML-driven solutions using Python, Scikit-learn, and Pandas.",
      "Conduct exploratory data analysis (EDA) to uncover patterns and drive model improvements.",
    ],
  },
  {
    role: "Python Programming Intern",
    company: "CodeAlpha",
    location: "Remote",
    date: "2023",
    bullets: [
      "Developed Python scripts for data processing, cleaning, and automation.",
      "Built foundational data pipelines using Pandas and NumPy.",
      "Contributed to team projects, improving code quality through collaboration and code review.",
    ],
  },
];

const PROJECTS = [
  {
    name: "Smart Data Analytics App",
    stack: "Python · Pandas · Streamlit · Matplotlib · NumPy",
    url: "https://smart-data-analytics-app.streamlit.app/",
    bullets: [
      "Engineered a full-featured analytics platform automating 100% of the EDA pipeline — instant data profiling, missing-value reports, and statistical summaries.",
      "Reduced dataset exploration time by ~70% with a single-click interface rendering 8+ interactive chart types.",
      "Processed datasets of 50,000+ rows with near-instant response via optimized Pandas & vectorized NumPy.",
    ],
  },
  {
    name: "Aesthetic Weather Analytics Dashboard",
    stack: "Python · Streamlit · REST API · Matplotlib",
    url: "https://asthetic-weather-analytics.streamlit.app/",
    bullets: [
      "Built a live weather dashboard fetching real-time API data for any city with 7-day forecast visualization.",
      "Reduced Streamlit boilerplate by ~60% with a fully custom UI theme; cut redundant API calls by ~40% via caching.",
    ],
  },
];

const CERTS = [
  { icon: "🏆", text: "Indus AI Hackathon — SMIT (Top Participant)", year: "2026" },
  { icon: "🏆", text: "Coding Night Hackathon — SMIT", year: "2025" },
  { icon: "📜", text: "Python Foundations Certificate — Cisco / Saylani Mass IT Training", year: "2025" },
  { icon: "📜", text: "Streamlit Project Certificate (×2) — Saylani Mass IT Training", year: "2025" },
];

const EDUCATION = [
  { degree: "Bachelor of Computer Science (In Progress)", school: "Government College University, Hyderabad", year: "2023 – Present" },
  { degree: "Intermediate — Grade B", school: "Government College University, Hyderabad", year: "2023 – 2025" },
  { degree: "Matriculation — Grade A", school: "GBHS Himayat-ul-Islam School", year: "2021 – 2023" },
];

const SOFT_SKILLS = ["Teamwork & Collaboration", "Effective Communication", "Leadership & Initiative", "Critical Thinking", "Time Management"];
const LANGUAGES = [
  { lang: "English", level: "Intermediate" },
  { lang: "Urdu", level: "Fluent" },
  { lang: "Sindhi", level: "Basic" },
];

/* ── Reusable sub-components ─────────────────────────────── */

function SectionHead({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span style={{ color: "#38BDF8" }}>{icon}</span>
      <h3 className="font-serif font-bold text-lg tracking-wide" style={{ color: "#E7EAF0" }}>
        {title.toUpperCase()}
      </h3>
      <div className="flex-grow h-[1px]" style={{ background: "rgba(56,189,248,0.2)" }} />
    </div>
  );
}

function Pill({ text }: { text: string }) {
  return (
    <span
      className="text-xs font-mono px-2.5 py-1"
      style={{
        color: "#7DD3FC",
        backgroundColor: "rgba(56,189,248,0.10)",
        border: "0.5px solid rgba(56,189,248,0.30)",
        borderRadius: "20px",
      }}
    >
      {text}
    </span>
  );
}

function Bullet({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2 leading-relaxed" style={{ color: "#AEB4C2" }}>
      <span className="mt-0.5 flex-shrink-0 font-bold" style={{ color: "#38BDF8" }}>›</span>
      <span>{text}</span>
    </li>
  );
}

export function ResumeSection() {
  return (
    <section
      id="resume"
      className="py-24 relative"
      style={{ backgroundColor: "#0B0E14" }}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto">

          {/* ── Section heading + download ─────────────────────── */}
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-16">
              <div className="flex items-center space-x-4">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight" style={{ color: "#E7EAF0" }}>
                  Résumé
                </h2>
                <div
                  className="flex-grow h-[1px] w-24"
                  style={{ background: "linear-gradient(to right, rgba(56,189,248,0.4), transparent)" }}
                />
              </div>
              <a
                href="/Muhammad_Sufyan_Resume.docx"
                download
                className="inline-flex items-center gap-2 font-sans font-medium no-underline transition-all duration-200 self-start sm:self-auto"
                style={{
                  padding: "12px 24px",
                  borderRadius: "8px",
                  fontSize: "14px",
                  backgroundColor: "#38BDF8",
                  color: "#0B0E14",
                  border: "1px solid #38BDF8",
                  boxShadow: "0 0 20px rgba(56,189,248,0.35)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.boxShadow = "0 0 30px rgba(56,189,248,0.6)";
                  el.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.boxShadow = "0 0 20px rgba(56,189,248,0.35)";
                  el.style.transform = "translateY(0)";
                }}
              >
                <Download className="w-4 h-4" />
                Download .docx
              </a>
            </div>
          </Reveal>

          {/* ── Resume card ───────────────────────────────────── */}
          <Reveal>
            <div
              className="rounded-xl p-8 md:p-10 space-y-10"
              style={{
                backgroundColor: "#151A24",
                border: "1px solid rgba(56,189,248,0.15)",
              }}
            >

              {/* Header */}
              <div className="text-center border-b pb-8" style={{ borderColor: "rgba(56,189,248,0.15)" }}>
                <h2 className="font-serif font-bold text-3xl md:text-4xl mb-1" style={{ color: "#E7EAF0" }}>
                  Muhammad Sufyan
                </h2>
                <p className="font-sans text-sm mb-3" style={{ color: "#38BDF8", letterSpacing: "2px", textTransform: "uppercase" }}>
                  Python Developer &nbsp;·&nbsp; Data Analyst &nbsp;·&nbsp; ML Enthusiast
                </p>
                <div className="flex flex-wrap justify-center gap-x-5 gap-y-1 text-sm" style={{ color: "#8891A5" }}>
                  <span>+92 312 3738027</span>
                  <span style={{ color: "rgba(56,189,248,0.4)" }}>|</span>
                  <a href="mailto:sufyancreatives@gmail.com" className="hover:text-[#38BDF8] transition-colors no-underline" style={{ color: "inherit" }}>sufyancreatives@gmail.com</a>
                  <span style={{ color: "rgba(56,189,248,0.4)" }}>|</span>
                  <span>Hyderabad, Pakistan</span>
                </div>
                <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 mt-1 text-xs" style={{ color: "#4A5266" }}>
                  <a href="https://smart-data-analytics-app.streamlit.app" target="_blank" rel="noopener noreferrer" className="hover:text-[#38BDF8] transition-colors no-underline" style={{ color: "inherit" }}>smart-data-analytics-app.streamlit.app</a>
                  <span>·</span>
                  <a href="https://asthetic-weather-analytics.streamlit.app" target="_blank" rel="noopener noreferrer" className="hover:text-[#38BDF8] transition-colors no-underline" style={{ color: "inherit" }}>asthetic-weather-analytics.streamlit.app</a>
                </div>
              </div>

              {/* Professional Summary */}
              <div>
                <SectionHead icon={<User2 className="w-4 h-4" />} title="Professional Summary" />
                <p className="leading-relaxed text-sm md:text-base" style={{ color: "#AEB4C2" }}>
                  Results-driven Computer Science student with hands-on experience in Python development, Exploratory Data Analysis, and building interactive data applications. Skilled in end-to-end data workflows — from cleaning and analysis to visualization and deployment via Streamlit. Passionate about leveraging data and machine learning to solve real-world problems. Recognized at multiple hackathons and actively freelancing as a self-employed data developer.
                </p>
              </div>

              {/* Technical Skills */}
              <div>
                <SectionHead icon={<Code2 className="w-4 h-4" />} title="Technical Skills" />
                <div className="space-y-3">
                  {Object.entries(SKILLS).map(([category, skills]) => (
                    <div key={category} className="flex flex-col sm:flex-row sm:items-start gap-2">
                      <span className="text-xs font-mono flex-shrink-0 pt-0.5 w-48" style={{ color: "#8891A5" }}>
                        {category}
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {skills.map((s) => <Pill key={s} text={s} />)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Experience */}
              <div>
                <SectionHead icon={<Briefcase className="w-4 h-4" />} title="Experience" />
                <div className="space-y-8">
                  {EXPERIENCE.map((exp) => (
                    <div key={exp.role}>
                      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
                        <h4 className="font-serif font-bold" style={{ color: "#E7EAF0" }}>{exp.role}</h4>
                        <span
                          className="text-xs font-mono px-2.5 py-0.5 mt-1 sm:mt-0 w-fit"
                          style={{
                            color: "#7DD3FC",
                            backgroundColor: "rgba(56,189,248,0.10)",
                            border: "0.5px solid rgba(56,189,248,0.30)",
                            borderRadius: "20px",
                          }}
                        >
                          {exp.date}
                        </span>
                      </div>
                      <p className="text-sm mb-3" style={{ color: "#8891A5" }}>
                        {exp.company} &nbsp;—&nbsp; {exp.location}
                      </p>
                      <ul className="space-y-1.5">
                        {exp.bullets.map((b, i) => <Bullet key={i} text={b} />)}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Projects */}
              <div>
                <SectionHead icon={<Code2 className="w-4 h-4" />} title="Projects" />
                <div className="space-y-7">
                  {PROJECTS.map((proj) => (
                    <div key={proj.name}>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-1">
                        <h4 className="font-serif font-bold" style={{ color: "#E7EAF0" }}>{proj.name}</h4>
                        <span className="text-xs font-mono" style={{ color: "#4A5266" }}>— {proj.stack}</span>
                        <a
                          href={proj.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs no-underline transition-colors hover:opacity-80"
                          style={{
                            color: "#38BDF8",
                            backgroundColor: "rgba(56,189,248,0.10)",
                            border: "0.5px solid rgba(56,189,248,0.30)",
                            borderRadius: "20px",
                            padding: "2px 10px",
                          }}
                        >
                          Live Demo ↗
                        </a>
                      </div>
                      <ul className="space-y-1.5 mt-2">
                        {proj.bullets.map((b, i) => <Bullet key={i} text={b} />)}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications & Achievements */}
              <div>
                <SectionHead icon={<Trophy className="w-4 h-4" />} title="Certifications & Achievements" />
                <div className="space-y-3">
                  {CERTS.map((c, i) => (
                    <div key={i} className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-2">
                        <span className="text-base flex-shrink-0">{c.icon}</span>
                        <span className="text-sm" style={{ color: "#AEB4C2" }}>{c.text}</span>
                      </div>
                      <span
                        className="text-xs font-mono flex-shrink-0 px-2 py-0.5"
                        style={{
                          color: "#7DD3FC",
                          backgroundColor: "rgba(56,189,248,0.10)",
                          border: "0.5px solid rgba(56,189,248,0.30)",
                          borderRadius: "20px",
                        }}
                      >
                        {c.year}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div>
                <SectionHead icon={<BookOpen className="w-4 h-4" />} title="Education" />
                <div className="space-y-4">
                  {EDUCATION.map((e, i) => (
                    <div key={i} className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                      <div>
                        <p className="font-serif font-semibold text-sm" style={{ color: "#E7EAF0" }}>{e.degree}</p>
                        <p className="text-xs mt-0.5" style={{ color: "#8891A5" }}>{e.school}</p>
                      </div>
                      <span
                        className="text-xs font-mono px-2 py-0.5 w-fit flex-shrink-0"
                        style={{
                          color: "#7DD3FC",
                          backgroundColor: "rgba(56,189,248,0.10)",
                          border: "0.5px solid rgba(56,189,248,0.30)",
                          borderRadius: "20px",
                        }}
                      >
                        {e.year}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Soft Skills + Languages */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <SectionHead icon={<User2 className="w-4 h-4" />} title="Soft Skills" />
                  <div className="flex flex-wrap gap-2">
                    {SOFT_SKILLS.map((s) => (
                      <span
                        key={s}
                        className="text-xs px-3 py-1"
                        style={{
                          color: "#AEB4C2",
                          backgroundColor: "rgba(56,189,248,0.06)",
                          border: "0.5px solid rgba(56,189,248,0.15)",
                          borderRadius: "20px",
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <SectionHead icon={<Globe className="w-4 h-4" />} title="Languages" />
                  <div className="space-y-2">
                    {LANGUAGES.map(({ lang, level }) => (
                      <div key={lang} className="flex items-center justify-between">
                        <span className="text-sm" style={{ color: "#AEB4C2" }}>{lang}</span>
                        <span
                          className="text-xs font-mono px-2.5 py-0.5"
                          style={{
                            color: "#7DD3FC",
                            backgroundColor: "rgba(56,189,248,0.10)",
                            border: "0.5px solid rgba(56,189,248,0.30)",
                            borderRadius: "20px",
                          }}
                        >
                          {level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
