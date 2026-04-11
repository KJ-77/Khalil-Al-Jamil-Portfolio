import FadeIn from "@/components/sections/fade-in";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Linkedin, Github, Phone } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    href: "mailto:Khalil.aljamil2004@gmail.com",
    display: "Khalil.aljamil2004@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/khalil-aljamil/",
    display: "linkedin.com/in/khalil-aljamil",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/KJ-77",
    display: "github.com/KJ-77",
  },
  {
    icon: Phone,
    label: "Phone",
    href: "tel:+96170779950",
    display: "+961 70 779 950",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground text-lg mb-12">
            I'm always open to new opportunities, collaborations, or just a
            friendly chat about tech. Feel free to reach out.
          </p>
        </FadeIn>

        {/* Contact links */}
        <FadeIn delay={0.15}>
          <div className="space-y-4">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="flex items-center justify-center gap-3 text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                <link.icon className="h-5 w-5" />
                <span>{link.display}</span>
              </a>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.25}>
          <div className="mt-12">
            <Button size="lg" asChild>
              <a href="mailto:Khalil.aljamil2004@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                Send Me an Email
              </a>
            </Button>
          </div>
        </FadeIn>

        {/* Footer */}
        <FadeIn delay={0.3}>
          <Separator className="my-12" />
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Khalil Al Jamil. All rights
            reserved.
          </p>
        </FadeIn>
      </div>
    </section>
  );
};

export default Contact;
