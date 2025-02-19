
import { ArrowRight, Mail, Github, Linkedin, Sun, Moon } from "lucide-react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Index = () => {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen w-full">
      <Navigation />
      
      {/* Theme Toggle */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-6 right-6 z-50 rounded-full"
        onClick={toggleTheme}
      >
        {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      </Button>
      
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center justify-center px-6 bg-gradient-to-b from-background to-secondary/20">
        <div className="text-center space-y-8 animate-fade-up">
          <span className="text-sm uppercase tracking-widest text-muted-foreground">
            Interaction Designer & HCI Specialist
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Dorian Tykesson
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Blending cognitive science with human-centered design
          </p>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Creating intuitive and impactful digital experiences through research-driven design
          </p>
          <Button size="lg" className="mt-8 rounded-full" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
            View Work <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-soft-gray dark:bg-soft-black">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-12">About</h2>
          <div className="space-y-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Based in Gothenburg, Sweden, I specialize in creating intuitive digital experiences
              through the lens of cognitive science and human-computer interaction.
            </p>
            <ul className="space-y-4 text-lg text-muted-foreground">
              <li className="flex items-start">
                <span className="mr-4">•</span>
                <span>MSc in Interaction Design & Technologies from Chalmers University</span>
              </li>
              <li className="flex items-start">
                <span className="mr-4">•</span>
                <span>Background in Cognitive Science & Psychology</span>
              </li>
              <li className="flex items-start">
                <span className="mr-4">•</span>
                <span>Specialized in usability testing and user research</span>
              </li>
              <li className="flex items-start">
                <span className="mr-4">•</span>
                <span>Passionate about mental health tech and accessibility</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12">Selected Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <div
                key={i}
                className="group bg-white dark:bg-soft-black rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="aspect-video bg-neutral-100 dark:bg-neutral-900 overflow-hidden">
                  <div className="w-full h-full bg-neutral-200 dark:bg-neutral-800 group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-6">
                    {project.description}
                  </p>
                  <Button variant="ghost" className="rounded-full px-0 hover:px-4 transition-all duration-300">
                    View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-soft-gray dark:bg-soft-black">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          <p className="text-lg text-muted-foreground mb-12">
            Available for select projects and research collaborations.
          </p>
          <div className="flex flex-col items-center space-y-6">
            <Button size="lg" className="rounded-full">
              <Mail className="mr-2 h-4 w-4" />
              dorian@irilone.st
            </Button>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6">
        <div className="container mx-auto max-w-4xl text-center text-muted-foreground">
          <p>© 2024 Dorian Tykesson. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

const projects = [
  {
    title: "Solace",
    description: "A mental health app for trauma recovery, leveraging AI-driven therapeutic interactions.",
  },
  {
    title: "Papyrus",
    description: "Enhancing academic research accessibility through intuitive interface design.",
  },
  {
    title: "SOS Alarm",
    description: "Optimizing emergency response workflows through cognitive ergonomics.",
  },
];

export default Index;
