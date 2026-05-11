import { useState, type FormEvent } from "react";
import FadeIn from "@/components/sections/fade-in";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Mail, Linkedin, Github, Phone, Send } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    href: "mailto:khalil@aljamil.org",
    display: "khalil@aljamil.org",
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // EmailJS wiring lives at the integration layer — keeping the handler local for now
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="py-28 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Left: heading + context + links — fills the column for balance */}
          <FadeIn delay={0.1}>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Let's Work Together
              </h2>
              <p className="text-muted-foreground text-lg mb-10">
                I'm always open to new opportunities, collaborations, or just a
                friendly chat about tech. Feel free to reach out.
              </p>

              <div className="space-y-5">
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={
                      link.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <link.icon className="h-5 w-5 shrink-0" />
                    <span>{link.display}</span>
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Right: form */}
          <FadeIn delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-5">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, name: e.target.value }))
                    }
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  placeholder="What's this about?"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      subject: e.target.value,
                    }))
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Your message..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      message: e.target.value,
                    }))
                  }
                  required
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </FadeIn>
        </div>

        {/* Footer */}
        <FadeIn delay={0.3}>
          <Separator className="my-16" />
          <p className="text-sm text-muted-foreground text-center">
            &copy; {new Date().getFullYear()} Khalil Al Jamil. All rights
            reserved.
          </p>
        </FadeIn>
      </div>
    </section>
  );
};

export default Contact;
