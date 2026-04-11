import FadeIn from "@/components/sections/fade-in";
import { User } from "lucide-react";

const highlights = [
  { value: "3+", label: "Years Experience" },
  { value: "15+", label: "Technologies" },
  // TODO: replace placeholder count with actual number
  { value: "10+", label: "Projects Delivered" },
];

const About = () => {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">About Me</h2>
        </FadeIn>

        {/* Profile image + bio — side by side on desktop, stacked on mobile */}
        <div className="flex flex-col md:flex-row gap-10 items-center md:items-start mb-16">
          <FadeIn>
            {/* TODO: replace placeholder with actual photo via <img src="..." /> */}
            <div className="shrink-0 w-48 h-48 rounded-2xl border border-border bg-card flex items-center justify-center">
              <User className="h-16 w-16 text-muted-foreground" />
            </div>
          </FadeIn>

          <div className="flex-1">
            <FadeIn delay={0.1}>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                {/* TODO: replace with your actual bio */}
                I'm a Full Stack DevOps Engineer with a passion for building
                reliable, scalable software. I work across the entire stack —
                from crafting responsive user interfaces with React and
                TypeScript, to designing backend services with Node.js, to
                orchestrating cloud infrastructure on AWS with Docker and
                Kubernetes.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {/* TODO: replace with your actual bio */}
                I care deeply about code quality, developer experience, and
                shipping software that works well in production. Whether it's
                setting up CI/CD pipelines, optimizing performance, or
                architecting a new feature from scratch — I enjoy the full
                lifecycle of building software.
              </p>
            </FadeIn>
          </div>
        </div>

        {/* Key stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {highlights.map((item, i) => (
            <FadeIn key={item.label} delay={0.1 * (i + 1)}>
              <div className="text-center p-6 rounded-xl border border-border bg-card">
                <p className="text-4xl font-bold mb-1">{item.value}</p>
                <p className="text-sm text-muted-foreground">{item.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
