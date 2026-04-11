import FadeIn from "@/components/sections/fade-in";
import { Badge } from "@/components/ui/badge";

const categories = [
  {
    title: "Frontend",
    skills: [
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML / CSS",
    ],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Bun", "Deno", "Express", "REST APIs"],
  },
  {
    title: "DevOps & Cloud",
    skills: [
      "AWS",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "Infrastructure as Code",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Skills & Technologies
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <FadeIn key={cat.title} delay={0.1 * (i + 1)}>
              <div className="p-6 rounded-xl border border-border bg-card">
                <h3 className="text-lg font-semibold mb-4">{cat.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
