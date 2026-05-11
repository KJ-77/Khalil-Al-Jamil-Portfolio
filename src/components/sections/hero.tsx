import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Mail } from "lucide-react";

// Ease-out-quart — natural deceleration, confident stop
const ease = [0.25, 1, 0.5, 1] as const;

// Staggered fade+slide entrance — each line appears COMPLETE and readable
const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease },
});

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center px-4 text-center"
    >
      <motion.h1
        {...fadeUp(0)}
        className="text-5xl md:text-7xl font-bold tracking-tight"
      >
        Khalil Al Jamil
      </motion.h1>

      {/* Title is the #1 takeaway — instantly readable, no word-by-word delay */}
      <motion.p
        {...fadeUp(0.15)}
        className="mt-4 text-2xl md:text-4xl text-foreground font-semibold"
      >
        Full Stack DevOps Engineer
      </motion.p>

      <motion.p
        {...fadeUp(0.3)}
        className="mt-6 text-muted-foreground max-w-xl text-base md:text-lg"
      >
        I build and deploy scalable web applications — from frontend
        interfaces to cloud infrastructure.
      </motion.p>

      <motion.div
        {...fadeUp(0.45)}
        className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
      >
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
      </motion.div>
    </section>
  );
};

export default Hero;
