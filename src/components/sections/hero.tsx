import BlurText from "@/components/reactbits/blur-text";
import { Button } from "@/components/ui/button";
import { ArrowDown, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center px-4 text-center"
    >
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-2">
        Khalil Al Jamil
      </h1>

      <BlurText
        text="Full Stack DevOps Engineer"
        className="text-xl md:text-2xl text-muted-foreground font-medium justify-center"
        delay={120}
        animateBy="words"
        direction="bottom"
      />

      <p className="mt-6 text-muted-foreground max-w-lg text-base md:text-lg mx-auto">
        I build and deploy scalable web applications — from frontend
        interfaces to cloud infrastructure.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
        <Button size="lg" asChild>
          <a href="#projects">
            <ArrowDown className="mr-2 h-4 w-4" />
            View My Work
          </a>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <a href="#contact">
            <Mail className="mr-2 h-4 w-4" />
            Get in Touch
          </a>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
