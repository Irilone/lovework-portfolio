
import { ArrowRight, Sun, Moon } from "lucide-react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Hero from "@/components/sections/Hero";
import ProjectCard from "@/components/ProjectCard";
import { Project } from "@/types/project";
import Contact from "@/components/sections/Contact";
import About from "@/components/sections/About";

const Index = () => {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  if (!mounted) return null;

  return (
    <div 
      className="min-h-screen w-full"
      role="main"
    >
      <Navigation />
      
      {/* Theme Toggle - Enhanced for accessibility */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-24 right-6 z-50 rounded-full bg-background/80 backdrop-blur-sm shadow-md focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        onClick={toggleTheme}
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        aria-pressed={isDark}
      >
        {isDark ? (
          <Sun className="h-5 w-5" aria-hidden="true" />
        ) : (
          <Moon className="h-5 w-5" aria-hidden="true" />
        )}
      </Button>
      
      <Hero />
      <About />

      {/* Projects Section with improved accessibility */}
      <section 
        id="projects" 
        className="py-16 md:py-24 px-4 md:px-6"
        aria-labelledby="projects-heading"
      >
        <div className="container mx-auto">
          <h2 
            id="projects-heading" 
            className="text-2xl md:text-3xl font-bold mb-8 md:mb-12"
          >
            Selected Work
          </h2>
          
          <div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            role="list"
            aria-label="Project showcase"
          >
            {projects.map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
                onViewCaseStudy={(slug) => navigate(`/case-study/${slug}`)}
              />
            ))}
          </div>
        </div>
      </section>

      <Contact />

      {/* Floating Contact Button with enhanced accessibility */}
      <Button
        className="fixed bottom-6 right-6 rounded-full shadow-lg focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        size="lg"
        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        aria-label="Scroll to contact section"
      >
        Let's Connect
        <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
      </Button>

      {/* Footer with proper semantic structure */}
      <footer 
        className="py-8 md:py-12 px-4 md:px-6"
        role="contentinfo"
      >
        <div className="container mx-auto max-w-4xl text-center text-muted-foreground text-sm md:text-base">
          <p>© 2024 Dorian Tykesson. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

const projects: Project[] = [
  {
    title: "Papyrus",
    description: "Enhancing academic research accessibility through intuitive interface design.",
    images: [
      "/lovable-uploads/Papyrus-projectcard-img.png",
      "/lovable-uploads/papyrus-1-papyrus.png",
      "/lovable-uploads/papyrus-2-challenge.png",
      "/lovable-uploads/papyrus-3-annotations.png"
    ],
    profileImage: "/lovable-uploads/Papyrus-projectcard-img.png",
    slug: "papyrus"
  },
  {
    title: "SOS Alarm",
    description: "Optimizing emergency response workflows through cognitive ergonomics.",
    images: [
      "/lovable-uploads/SOSALArm-projectcard-img.png",
      "/lovable-uploads/sos-1-helpseekercase.png",
      "/lovable-uploads/sos-2-gtk.png",
      "/lovable-uploads/sos-3-solution.png"
    ],
    profileImage: "/lovable-uploads/SOSALArm-projectcard-img.png",
    slug: "sos-alarm"
  },
  {
    title: "Solace",
    description: "A mental health app for trauma recovery, leveraging AI-driven therapeutic interactions.",
    images: [
      "/lovable-uploads/Solace-projectcard-img.png",
      "/lovable-uploads/solace-1-onboarding.png",
      "/lovable-uploads/solace-2-home.png",
      "/lovable-uploads/solace-3-form.png"
    ],
    profileImage: "/lovable-uploads/Solace-projectcard-img.png",
    slug: "solace"
  },
];

export default Index;
