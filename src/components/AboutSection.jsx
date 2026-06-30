import { Briefcase, Code, User,Brain,
  Sparkles,
  Bot,
  Database,
  Wrench,
  Users,
  Monitor,
  Server,
  BookOpen, } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Generative AI & Full-Stack Developer
            </h3>

            <p className="text-muted-foreground">
              I'm a Generative AI and Full-Stack Developer passionate about building intelligent, end-to-end applications using LLMs, RAG, FastAPI, React, and modern AI workflows. I enjoy turning AI capabilities into practical products—from document intelligence and conversational assistants to scalable full-stack web applications. I'm currently exploring agentic AI systems and advanced LLM application development through hands-on projects.


            </p>

            

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="https://drive.google.com/file/d/1TNKPTGM2aP4CI229xECRgtHNsyxFOSUL/view?usp=sharing"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Generative AI</h4>
                  <p className="text-muted-foreground">
                    Building LLM-powered applications using RAG, AI agents, prompt engineering, and vector databases to solve real-world problems.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Bot className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">LLM Applications</h4>
                  <p className="text-muted-foreground">
                    Developing intelligent applications powered by LLMs, Retrieval-Augmented Generation (RAG), and AI-driven workflows.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Monitor className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Full-Stack Development</h4>
                  <p className="text-muted-foreground">
                    Developing scalable end-to-end applications with React, FastAPI, Node.js, MongoDB, and modern development practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
