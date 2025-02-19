
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Creating intuitive and impactful digital experiences";

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    
    if (!prefersReducedMotion) {
      let i = 0;
      const timer = setInterval(() => {
        if (i <= fullText.length) {
          setDisplayText(fullText.slice(0, i));
          i++;
        } else {
          clearInterval(timer);
        }
      }, 50);

      return () => clearInterval(timer);
    } else {
      setDisplayText(fullText);
    }
  }, []);

  return (
    <section 
      className="relative min-h-[90vh] flex items-center justify-center px-4 md:px-6"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent animate-pulse" 
           style={{ animationDuration: '4s' }} />
      
      <div className="relative text-center space-y-6 md:space-y-8 animate-fade-up">
        <span className="text-xs md:text-sm uppercase tracking-widest text-muted-foreground">
          Interaction Designer & HCI Specialist
        </span>
        <h1 
          id="hero-heading"
          className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight"
        >
          Dorian Tykesson
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto">
          {displayText}
          <span className="animate-pulse">|</span>
        </p>
        <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
          Blending cognitive science with human-centered design
        </p>
        <Button 
          size="lg" 
          className="mt-6 md:mt-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 focus-visible:scale-105 focus-visible:ring-offset-4"
          onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          aria-label="View my work"
        >
          View Work <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>

      <button
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        aria-label="Scroll to about section"
      >
        <ChevronDown className="h-8 w-8 animate-bounce" style={{ animationDuration: '2s' }} />
      </button>
    </section>
  );
};

export default Hero;
