import FadeIn from "@/components/sections/fade-in";

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
          <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            {/* TODO: replace with your actual bio */}
            I'm a Full Stack DevOps Engineer with a passion for building
            reliable, scalable software. I work across the entire stack — from
            crafting responsive user interfaces with React and TypeScript, to
            designing backend services with Node.js, to orchestrating cloud
            infrastructure on AWS with Docker and Kubernetes.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-muted-foreground text-lg leading-relaxed mb-12">
            {/* TODO: replace with your actual bio */}
            I care deeply about code quality, developer experience, and shipping
            software that works well in production. Whether it's setting up CI/CD
            pipelines, optimizing performance, or architecting a new feature from
            scratch — I enjoy the full lifecycle of building software.
          </p>
        </FadeIn>

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
