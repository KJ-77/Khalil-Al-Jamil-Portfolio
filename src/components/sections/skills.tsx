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
    skills: [
      "Node.js",
      "Express",
      "REST APIs",
      "SQL",
      "Java",
      "Python",
    ],
  },
  {
    title: "DevOps & Cloud",
    skills: [
      "AWS",
      "Docker",
      "Terraform",
      "Git",
      "Linux / bash",
      "CI/CD",
      "Infrastructure as Code",
    ],
  },
  {
    title: "Soft Skills",
    skills: [
      "Independent",
      "Problem Solving",
      "Analytical Thinking",
      "Communication",
      "Time Management",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-28 px-4">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Skills & Technologies
          </h2>
        </FadeIn>

        {/* Horizontal rows — label left, badges right. No cards. */}
        <div className="flex flex-col gap-8">
          {categories.map((cat, i) => (
            <FadeIn key={cat.title} delay={0.1 * (i + 1)}>
              <div className="flex flex-col md:flex-row md:items-baseline gap-3 md:gap-6">
                <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground md:w-40 shrink-0">
                  {cat.title}
                </h3>
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
