
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 px-4 md:px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          {/* Profile Image with Hover Effect */}
          <div className="relative group">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden bg-neutral-100 dark:bg-neutral-900 ring-2 ring-neutral-200 dark:ring-neutral-800">
              <img
                src="/lovable-uploads/b3050c0a-1bfd-4fe8-a8ec-d2c112daddc5.png"
                alt="Profile picture"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="eager"
                fetchPriority="high"
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Content */}
          <div className="flex-1 space-y-6">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold">About Me</h2>
              <p className="text-muted-foreground">
                I'm a Human-Computer Interaction specialist and Interaction Designer focused on creating intuitive digital experiences. 
                With a background in cognitive science and design, I bridge the gap between human psychology and digital interfaces.
              </p>
              <p className="text-muted-foreground">
                My work combines research-driven insights with creative solutions to build products that truly resonate with users.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <Button variant="outline" size="icon" className="rounded-full" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full" asChild>
                <a href="mailto:contact@example.com" aria-label="Email Contact">
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
