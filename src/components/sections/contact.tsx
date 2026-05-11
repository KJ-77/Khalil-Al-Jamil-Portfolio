import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import FadeIn from "@/components/sections/fade-in";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Mail,
  Linkedin,
  Github,
  Phone,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

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

// EmailJS config — values come from .env.local at build time, baked into the bundle.
// These are public-safe values (the service is domain-restricted via the EmailJS dashboard).
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// Status drives the inline feedback message + button state below the form
type SubmitStatus =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "success" }
  | { kind: "error"; message: string };

const initialFormData = { name: "", email: "", subject: "", message: "" };

const Contact = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [status, setStatus] = useState<SubmitStatus>({ kind: "idle" });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Defend against missing env vars at runtime — fail loud rather than silently no-op
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setStatus({
        kind: "error",
        message:
          "Email service is not configured. Please reach out via the links on the left.",
      });
      return;
    }

    setStatus({ kind: "submitting" });

    // Trim whitespace before sending — keeps the inbox copy clean
    const templateParams = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      subject: formData.subject.trim(),
      message: formData.message.trim(),
    };

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        { publicKey: EMAILJS_PUBLIC_KEY },
      );
      setStatus({ kind: "success" });
      setFormData(initialFormData);
    } catch (err) {
      // EmailJS rejects with either an EmailJSResponseStatus { status, text } or a generic Error
      const message =
        err instanceof Error
          ? err.message
          : typeof err === "object" && err !== null && "text" in err
            ? String((err as { text: unknown }).text)
            : "Something went wrong. Please try again or email me directly.";
      setStatus({ kind: "error", message });
    }
  };

  const isSubmitting = status.kind === "submitting";

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
                    disabled={isSubmitting}
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
                    disabled={isSubmitting}
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
                  disabled={isSubmitting}
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
                  disabled={isSubmitting}
                  required
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>

              {/* Inline feedback — replaces the button area on success/error, no toast deps */}
              {status.kind === "success" && (
                <div
                  role="status"
                  className="flex items-start gap-2 text-sm text-primary p-3 rounded-md border border-primary/30 bg-primary/10"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5" />
                  <span>
                    Message sent — I'll get back to you as soon as I can.
                  </span>
                </div>
              )}
              {status.kind === "error" && (
                <div
                  role="alert"
                  className="flex items-start gap-2 text-sm text-destructive p-3 rounded-md border border-destructive/30 bg-destructive/10"
                >
                  <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
                  <span>{status.message}</span>
                </div>
              )}
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
