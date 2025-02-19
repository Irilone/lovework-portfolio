
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-[90vh] flex items-center justify-center px-4 md:px-6 bg-gradient-to-b from-background to-secondary/20">
      <div className="text-center space-y-6 md:space-y-8 animate-fade-up">
        <span className="text-xs md:text-sm uppercase tracking-widest text-muted-foreground">
          Interaction Designer & HCI Specialist
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight">
          Dorian Tykesson
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto">
          Blending cognitive science with human-centered design
        </p>
        <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
          Creating intuitive and impactful digital experiences through research-driven design
        </p>
        <Button 
          size="lg" 
          className="mt-6 md:mt-8 rounded-full" 
          onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
        >
          View Work <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
