import { useState } from "react";
import { Reveal } from "@/components/reveal";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import churnScreenshot from "@assets/Screenshot_2026-07-23_191505_1784816139061.png";
import weatherScreenshot from "@assets/image_1784816307185.png";
import dataAnalysisScreenshot from "@assets/image_1784816379557.png";
import portfolioTrackerScreenshot from "@assets/image_1784816461899.png";
import automationScreenshot from "@assets/image_1784816530281.png";
import chatbotScreenshot from "@assets/image_1784816696208.png";

type Category = "All" | "Machine Learning" | "Data Analysis" | "Dashboards" | "Python Tools";

const PROJECTS = [
  {
    id: 1,
    title: "Customer Churn Predictor",
    description: "Telco Sentry — a fully integrated ML system built on IBM Telco data. Analyses 7,043 customers, predicts churn risk in real-time, and provides a financial impact calculator to quantify retention value.",
    category: "Machine Learning" as Category,
    tags: ["Python", "Scikit-Learn", "Pandas", "Streamlit", "SMOTE", "XGBoost"],
    gradient: "from-blue-500/20 via-primary/20 to-purple-500/20",
    screenshot: churnScreenshot,
    githubUrl: "#",
    demoUrl: "https://customer-churn-anaylsis-prediction-ml-dashboard.streamlit.app/",
  },
  {
    id: 2,
    title: "Aesthetic Weather Analytics",
    description: "Comprehensive weather patterns and trends dashboard with multi-year analysis, key statistics (temperature, precipitation, wind speed), and interactive visualisations for climate exploration.",
    category: "Data Analysis" as Category,
    tags: ["Python", "Streamlit", "Pandas", "Matplotlib", "Data Analysis"],
    gradient: "from-sky-500/20 via-blue-500/20 to-primary/20",
    screenshot: weatherScreenshot,
    githubUrl: "#",
    demoUrl: "https://asthetic-weather-analytics.streamlit.app/",
  },
  {
    id: 3,
    title: "Smart Data Analytics App",
    description: "Interactive data analysis application supporting built-in datasets (Iris, etc.) and user-uploaded CSV/XLSX files. Delivers instant EDA, summary stats, and visual insights with zero setup.",
    category: "Data Analysis" as Category,
    tags: ["Python", "Streamlit", "Pandas", "NumPy", "EDA"],
    gradient: "from-teal-500/20 via-emerald-500/20 to-primary/20",
    screenshot: dataAnalysisScreenshot,
    githubUrl: "#",
    demoUrl: "https://smart-data-analytics-app.streamlit.app/",
  },
  {
    id: 4,
    title: "Portfolio Tracker",
    description: "Real-time investment calculator tracking major stocks (AAPL, TSLA, GOOGL, NVDA, META and more). Add or update asset quantities and instantly see total portfolio value with predefined market prices.",
    category: "Dashboards" as Category,
    tags: ["Python", "Streamlit", "Finance", "Real-Time"],
    gradient: "from-green-500/20 via-emerald-500/20 to-teal-500/20",
    screenshot: portfolioTrackerScreenshot,
    githubUrl: "#",
    demoUrl: "https://smart-data-analytics-app.streamlit.app",
  },
  {
    id: 5,
    title: "Task Automation Hub",
    description: "Advanced Python productivity suite featuring a batch File Organiser & Packer, Text Parser & Extractor, and Advanced Web Scraper — all in one streamlined interface built with Streamlit.",
    category: "Python Tools" as Category,
    tags: ["Python", "Streamlit", "os", "shutil", "Automation"],
    gradient: "from-pink-500/20 via-purple-500/20 to-primary/20",
    screenshot: automationScreenshot,
    githubUrl: "#",
    demoUrl: "https://automation-with-python-script.streamlit.app/",
  },
  {
    id: 6,
    title: "AlphaBot Knowledge Hub",
    description: "Interactive rule-based technical assistant chatbot covering Python, Streamlit, Git, APIs, and Space/Tech facts. Provides quick knowledge lookups and guided responses in a clean conversational UI.",
    category: "Machine Learning" as Category,
    tags: ["Python", "Streamlit", "NLP", "Chatbot", "Rule-Based AI"],
    gradient: "from-violet-500/20 via-purple-500/20 to-indigo-500/20",
    screenshot: chatbotScreenshot,
    githubUrl: "#",
    demoUrl: "https://veria-teaching-chatbot.streamlit.app/",
  },
];

const CATEGORIES: Category[] = ["All", "Machine Learning", "Data Analysis", "Dashboards", "Python Tools"];

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredProjects = PROJECTS.filter(
    (p) => activeCategory === "All" || p.category === activeCategory
  );

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4 md:px-8">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Featured Work</h2>
              <div className="w-20 h-1 bg-primary rounded-full" />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                    activeCategory === cat
                      ? "bg-primary text-primary-foreground shadow-[0_0_15px_rgba(0,240,255,0.3)]"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full flex flex-col overflow-hidden group border-border/50 hover:border-primary/50 transition-colors bg-card/50 backdrop-blur-sm">
                  {/* Thumbnail */}
                  <div className={cn("h-48 w-full relative overflow-hidden", !project.screenshot && `bg-gradient-to-br ${project.gradient}`)}>
                    {project.screenshot ? (
                      <>
                        <img
                          src={project.screenshot}
                          alt={project.title}
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-background/30 group-hover:bg-transparent transition-colors duration-500" />
                      </>
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-500" />
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:12px_12px]" />
                      </>
                    )}
                    <div className="absolute bottom-4 left-4 font-mono text-xs font-bold text-white bg-background/60 backdrop-blur px-2 py-1 rounded">
                      {project.category}
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="group-hover:text-primary transition-colors">{project.title}</CardTitle>
                    <CardDescription className="pt-2 line-clamp-3">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="flex-grow">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="font-mono text-[10px] bg-background/50">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  
                  <CardFooter className="pt-4 border-t border-border/50 gap-4">
                    <Button variant="outline" size="sm" className="flex-1 font-mono text-xs group/btn" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-3.5 h-3.5 mr-2 group-hover/btn:text-primary" /> Code
                      </a>
                    </Button>
                    <Button variant="default" size="sm" className="flex-1 font-mono text-xs" asChild>
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3.5 h-3.5 mr-2" /> Demo
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
