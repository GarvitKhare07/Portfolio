import {
  Brain,
  Monitor,
  Server,
  Database,
  Code2,
  Wrench,
  BookOpen,
  Users,
} from "lucide-react";

const skillCategories = [
  {
    title: "Generative AI",
    icon: Brain,
    skills: [
      "LLMs",
      "RAG",
      "ChromaDB",
      "AI Chatbots",
      "Prompt Engineering",
      "Context-Aware AI Systems"
      
    ],
  },
  {
    title: "Frontend Development",
    icon: Monitor,
    skills: [
      "React.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Responsive Design",
      "Framer Motion",
    ],
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: [
      "FastAPI",
      "Node.js",
      "Express.js",
      "REST APIs",
      "Authentication",
      "API Integration",
    ],
  },
  {
    title: "Programming Languages",
    icon: Code2,
    skills: ["Python", "JavaScript", "C++", "Java", "SQL"],
  },
  {
    title: "Database & Storage",
    icon: Database,
    skills: [
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "ChromaDB",
      "Database Design",
    ],
  },
  {
    title: "Core CS",
    icon: BookOpen,
    skills: [
      "Data Structures",
      "Algorithms",
      "DBMS",
      "Operating Systems",
      
      "Computer Networks",
      "OOPs",
    ],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Vercel"
    ],
  },
  
  {
    title: "Professional Skills",
    icon: Users,
    skills: [
      "Problem Solving",
      "Communication",
      "Team Collaboration",
      "Leadership",
      "Project Ownership",
    ],
  },
];

export const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="py-24 px-4 relative bg-secondary/30"
    >
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.title}
                className="gradient-border p-6 rounded-2xl card-hover"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-full bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>

                  <h3 className="font-semibold text-lg">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-2 rounded-md border border-border bg-card text-sm text-muted-foreground hover:border-primary hover:text-primary transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};