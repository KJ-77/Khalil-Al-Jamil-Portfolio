import FadeIn from "@/components/sections/fade-in";
import SpotlightCard from "@/components/reactbits/spotlight-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ImageIcon, Star } from "lucide-react";

interface Project {
  title: string;
  blurb: string; // short tagline shown under title
  description: string;
  tech: string[];
  // featured-only fields — highlight bullets, role, and year metadata for the hero card
  highlights?: string[];
  role?: string;
  year?: string;
  image?: string;
  github?: string;
  live?: string;
}

// First project = featured/hero. Order matters here.
const projects: Project[] = [
  {
    title: "Way",
    blurb: "Tutoring & scheduling SaaS — Beirut",
    description:
      "Multi-app platform for a Beirut tutoring business. A public client portal, an internal admin dashboard, and a serverless backend on AWS — all sharing one cleanly-versioned Postgres schema and a typed access layer.",
    highlights: [
      "Dual Cognito user pools cleanly separate staff and clients",
      "Serverless backend on AWS Lambda + API Gateway, Postgres on RDS",
      "Tutors, packages, sessions, schedules — one cohesive API surface",
      "Deployed via Serverless Framework, business logic tested with Vitest",
    ],
    role: "Full-Stack / DevOps",
    year: "2025–26",
    tech: [
      "React 19",
      "TypeScript",
      "Vite",
      "AWS Lambda",
      "Cognito",
      "PostgreSQL",
      "Serverless",
      "i18next",
    ],
    github: "https://github.com/KJ-77",
  },
  {
    title: "Orsa Group",
    blurb: "Olive oil e-commerce platform",
    description:
      "Full-stack e-commerce: React storefront with Stripe checkout, Next.js admin dashboard, serverless AWS backend (Lambda + API Gateway + MySQL + S3). Bilingual EN/AR with GSAP-driven motion.",
    tech: [
      "React",
      "Next.js",
      "AWS Lambda",
      "MySQL",
      "Stripe",
      "Cognito",
      "GSAP",
    ],
    github: "https://github.com/KJ-77",
  },
  {
    title: "Hova",
    blurb: "Brand site — Belgian chocolate",
    description:
      "Polished single-page marketing site for a Belgian chocolate brand. Animated product gallery, EmailJS contact form, WhatsApp deep-link, Google Analytics + Meta Pixel wired up. Vercel-deployed.",
    tech: [
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "EmailJS",
      "Vercel",
    ],
    github: "https://github.com/KJ-77",
  },
];

// Featured/hero card — horizontal layout on lg+, stacked on smaller screens
const FeaturedProjectCard = ({ project }: { project: Project }) => (
  <SpotlightCard
    className="h-full flex flex-col !p-0 overflow-hidden"
    spotlightColor="rgba(255, 255, 255, 0.18)"
  >
    <div className="grid grid-cols-1 lg:grid-cols-5 h-full">
      {/* Image area — 2/5 of width on lg */}
      <div className="lg:col-span-2 relative">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            className="w-full h-full aspect-video lg:aspect-auto object-cover lg:rounded-l-xl rounded-t-xl lg:rounded-tr-none"
          />
        ) : (
          <div className="w-full h-full aspect-video lg:aspect-auto bg-secondary/50 lg:rounded-l-xl rounded-t-xl lg:rounded-tr-none flex items-center justify-center min-h-[14rem]">
            <ImageIcon className="h-12 w-12 text-muted-foreground/40" />
          </div>
        )}
        {/* Featured badge sits on the image */}
        <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-background/85 backdrop-blur border border-border text-xs font-medium">
          <Star className="h-3 w-3 fill-current" />
          Featured
        </div>
      </div>

      {/* Details — 3/5 of width on lg */}
      <div className="lg:col-span-3 p-6 md:p-8 flex flex-col">
        <h3 className="text-2xl md:text-3xl font-bold mb-1">{project.title}</h3>
        <p className="text-xs uppercase tracking-wider text-muted-foreground/70 mb-4">
          {project.blurb}
        </p>

        <p className="text-sm md:text-base text-muted-foreground mb-5">
          {project.description}
        </p>

        {/* Highlight bullets — featured card only */}
        {project.highlights && (
          <ul className="space-y-1.5 mb-5">
            {project.highlights.map((h) => (
              <li
                key={h}
                className="text-sm text-muted-foreground flex gap-2 before:content-['→'] before:text-foreground/60 before:shrink-0"
              >
                <span>{h}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Role / year meta row */}
        {(project.role || project.year) && (
          <div className="flex flex-wrap gap-x-6 gap-y-1 mb-5 text-xs uppercase tracking-wider text-muted-foreground/70">
            {project.role && (
              <span>
                <span className="text-foreground/50">role · </span>
                {project.role}
              </span>
            )}
            {project.year && (
              <span>
                <span className="text-foreground/50">year · </span>
                {project.year}
              </span>
            )}
          </div>
        )}

        {/* Tech badges */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map((t) => (
            <Badge key={t} variant="outline" className="text-xs">
              {t}
            </Badge>
          ))}
        </div>

        {/* Links — pushed to the bottom */}
        <div className="flex gap-2 mt-auto">
          {project.github && (
            <Button variant="secondary" size="sm" asChild>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="mr-1.5 h-4 w-4" />
                Code
              </a>
            </Button>
          )}
          {project.live && (
            <Button variant="ghost" size="sm" asChild>
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-1.5 h-4 w-4" />
                Live
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  </SpotlightCard>
);

// Compact secondary card — vertical layout, smaller footprint
const CompactProjectCard = ({ project }: { project: Project }) => (
  <SpotlightCard
    className="h-full flex flex-col !p-0"
    spotlightColor="rgba(255, 255, 255, 0.15)"
  >
    {project.image ? (
      <img
        src={project.image}
        alt={`${project.title} screenshot`}
        className="w-full aspect-video object-cover rounded-t-xl"
      />
    ) : (
      <div className="w-full aspect-video bg-secondary/50 rounded-t-xl flex items-center justify-center">
        <ImageIcon className="h-10 w-10 text-muted-foreground/40" />
      </div>
    )}

    <div className="p-6 flex flex-col flex-1">
      <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
      <p className="text-xs uppercase tracking-wider text-muted-foreground/70 mb-3">
        {project.blurb}
      </p>
      <p className="text-sm text-muted-foreground mb-4 flex-1">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tech.map((t) => (
          <Badge key={t} variant="outline" className="text-xs">
            {t}
          </Badge>
        ))}
      </div>

      <div className="flex gap-2 mt-auto">
        {project.github && (
          <Button variant="ghost" size="sm" asChild>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Github className="mr-1.5 h-4 w-4" />
              Code
            </a>
          </Button>
        )}
        {project.live && (
          <Button variant="ghost" size="sm" asChild>
            <a href={project.live} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-1.5 h-4 w-4" />
              Live
            </a>
          </Button>
        )}
      </div>
    </div>
  </SpotlightCard>
);

const Projects = () => {
  // First entry is the hero/featured project; the rest are secondary
  const [featured, ...secondary] = projects;

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Featured Work
          </h2>
        </FadeIn>

        {/* Bento-style grid: featured card spans full width, then two compact cards below */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FadeIn delay={0.1} className="md:col-span-2">
            <FeaturedProjectCard project={featured} />
          </FadeIn>

          {secondary.map((project, i) => (
            <FadeIn key={project.title} delay={0.2 + 0.1 * i}>
              <CompactProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
