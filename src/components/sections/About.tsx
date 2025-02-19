
import { ArrowRight, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const skills = ["Figma", "React", "TypeScript", "Python", "User Research", "Prototyping"];

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 px-4 md:px-6 bg-soft-gray dark:bg-soft-black">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          {/* Profile Image with Hover Effect */}
          <div className="relative group">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden bg-neutral-100 dark:bg-neutral-900 ring-2 ring-neutral-200 dark:ring-neutral-800">
              <img
                src="/lovable-uploads/b87c4c8e-aa5c-463d-b11d-6f5e6a8e36a4.png"
                alt="Dorian Tykesson"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="eager"
                fetchPriority="high"
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Content */}
          <div className="flex-1 space-y-8 text-center md:text-left">
            {/* Introduction */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold">About</h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Based in Gothenburg, Sweden, I blend cognitive science with human-centered design to create intuitive and impactful digital experiences.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="text-sm uppercase tracking-wider text-muted-foreground">Education</h3>
                <ul className="space-y-2">
                  <li className="text-sm">MSc in Interaction Design & Technologies</li>
                  <li className="text-sm text-muted-foreground">Chalmers University</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-sm uppercase tracking-wider text-muted-foreground">Specialization</h3>
                <ul className="space-y-2">
                  <li className="text-sm">UX Research & Design</li>
                  <li className="text-sm">Human-Computer Interaction</li>
                </ul>
              </div>
            </div>

            {/* Tools & Skills */}
            <div className="space-y-3">
              <h3 className="text-sm uppercase tracking-wider text-muted-foreground">Tools & Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-secondary rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center md:justify-start space-x-4">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-secondary" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-secondary" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" className="rounded-full" asChild>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  View Resume
                  <ArrowRight className="ml-2 h-4 w-4" />
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
