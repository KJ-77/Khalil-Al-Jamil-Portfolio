import FadeIn from "@/components/sections/fade-in";
import { User } from "lucide-react";

const highlights = [
  { value: "3+", label: "Years Experience" },
  { value: "15+", label: "Technologies" },
  { value: "3", label: "Production Apps" },
];

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">About Me</h2>
        </FadeIn>

        {/* Profile image + bio — side by side on desktop, stacked on mobile */}
        <div className="flex flex-col md:flex-row gap-10 items-center md:items-start mb-12">
          <FadeIn>
            {/* TODO: replace placeholder with actual photo via <img src="..." /> */}
            <div className="shrink-0 w-48 h-48 rounded-2xl border border-border bg-card flex items-center justify-center">
              <User className="h-16 w-16 text-muted-foreground" />
            </div>
          </FadeIn>

          <div className="flex-1">
            <FadeIn delay={0.1}>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                I'm a Full Stack DevOps Engineer based in Beirut. I build the
                whole thing — React and TypeScript on the frontend, Node and
                serverless functions in the middle, and AWS infrastructure
                underneath. I've shipped e-commerce platforms, multi-app SaaS
                products, and brand sites for real clients.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-muted-foreground text-lg leading-relaxed">
                What I care about is software that keeps running after launch.
                That means clean CI/CD pipelines, infrastructure-as-code, sane
                auth boundaries, and observability you actually look at. I
                enjoy the full lifecycle — from a blank Figma to a Lambda
                quietly serving traffic in production.
              </p>
            </FadeIn>
          </div>
        </div>

        {/* Stats — inline row with dividers, no cards */}
        <FadeIn delay={0.3}>
          <div className="flex flex-wrap items-center gap-8 md:gap-12 pt-8 border-t border-border">
            {highlights.map((item, i) => (
              <div key={item.label} className="flex items-center gap-8 md:gap-12">
                <div>
                  <p className="text-3xl font-bold">{item.value}</p>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                </div>
                {/* Vertical divider between stats, skip after last */}
                {i < highlights.length - 1 && (
                  <div className="hidden sm:block w-px h-10 bg-border" />
                )}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default About;
