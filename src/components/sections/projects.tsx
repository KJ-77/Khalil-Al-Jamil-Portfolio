import FadeIn from "@/components/sections/fade-in";
import SpotlightCard from "@/components/reactbits/spotlight-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
}

// TODO: replace with your real projects
const projects: Project[] = [
  {
    title: "Project One",
    description:
      "A brief description of this project — what problem it solves and what makes it interesting.",
    tech: ["React", "TypeScript", "Node.js", "AWS"],
    github: "#",
    live: "#",
  },
  {
    title: "Project Two",
    description:
      "A brief description of this project — what problem it solves and what makes it interesting.",
    tech: ["Docker", "Kubernetes", "CI/CD", "Terraform"],
    github: "#",
  },
  {
    title: "Project Three",
    description:
      "A brief description of this project — what problem it solves and what makes it interesting.",
    tech: ["React", "Tailwind CSS", "Bun", "REST API"],
    github: "#",
    live: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Featured Work
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <FadeIn key={project.title} delay={0.1 * (i + 1)}>
              <SpotlightCard
                className="h-full flex flex-col"
                spotlightColor="rgba(255, 255, 255, 0.15)"
              >
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 flex-1">
                  {project.description}
                </p>

                {/* Tech stack badges */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((t) => (
                    <Badge key={t} variant="outline" className="text-xs">
                      {t}
                    </Badge>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-2 mt-auto">
                  {project.github && (
                    <Button variant="ghost" size="sm" asChild>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-1.5 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.live && (
                    <Button variant="ghost" size="sm" asChild>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-1.5 h-4 w-4" />
                        Live
                      </a>
                    </Button>
                  )}
                </div>
              </SpotlightCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
