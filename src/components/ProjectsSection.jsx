import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Twin AI",
    description: "A personalized AI assistant for your everyday work .",
    image: "https://drive.google.com/file/d/1YamgJ5Qv-N65qEYDAiCjyfYQJtyBYnjD/view?usp=drive_link",
    tags: ["React", "GenAI", "Node.js"],
    demoUrl: "#",
    githubUrl: "https://github.com/abhyudaya-117/Hacksaagon_25.git",
  },
  {
    id: 2,
    title: "AttendEase",
    description:
      "An RFID based attendance system that simplifies tracking and management.",
    image: "https://drive.google.com/file/d/1QImr1nIyZrqVfsYOfGYOphfBkdIXwvkJ/view?usp=drive_link",
    tags: ["MERN Stack", "ArduinoIDE", "IOT"],
    demoUrl: "#",
    githubUrl: "https://github.com/GarvitKhare07/AttendEase.git",
  },
  {
    id: 3,
    title: "MITS Assistant",
    description:
      "AI Chatbot for MITS college related queries.",
    image: "https://drive.google.com/file/d/12K0zDQlBwTOIfbeL38VHIVi0A7YuOvJy/view?usp=sharing",
    tags: ["React", "Node.js", "RAG"],
    demoUrl: "#",
    githubUrl: "https://github.com/Ishanjharia/MITSAssistant",
  },

];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {/* <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a> */}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/GarvitKhare07"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://www.linkedin.com/in/garvit-khare-964480294?utm_source=share_via&utm_content=profile&utm_medium=member_android"
          >
            Check My Linkedin <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
