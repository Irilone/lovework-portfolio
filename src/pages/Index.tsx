
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
    <div className="min-h-screen w-full">
      <Navigation />
      
      {/* Theme Toggle - Repositioned */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-24 right-6 z-50 rounded-full bg-background/80 backdrop-blur-sm shadow-md"
        onClick={toggleTheme}
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      >
        {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      </Button>
      
      <Hero />
      <About />

      {/* Projects Section */}
      <section id="projects" className="py-16 md:py-24 px-4 md:px-6">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12">Selected Work</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* Floating Contact Button */}
      <Button
        className="fixed bottom-6 right-6 rounded-full shadow-lg"
        size="lg"
        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
      >
        Let's Connect
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>

      {/* Footer */}
      <footer className="py-8 md:py-12 px-4 md:px-6">
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
      "/lovable-uploads/38649703-1876-4c79-8680-5a09ef0f2c8f.png", // Updated to correct Papyrus project card image
      "/lovable-uploads/a8be5969-52f7-4dcc-a5f5-d9732e6f197d.png",
      "/lovable-uploads/cba00f4b-0405-4cef-96d9-e22ffa995c8b.png",
      "/lovable-uploads/220c85c8-b596-4c6c-bd2b-b60a845a0508.png"
    ],
    profileImage: "/lovable-uploads/04ccfbbf-6214-461d-bc3b-8d158ece3d6a.png",
    slug: "papyrus"
  },
  {
    title: "SOS Alarm",
    description: "Optimizing emergency response workflows through cognitive ergonomics.",
    images: [
      "/lovable-uploads/5c48dc5f-5d5c-4d34-b2de-d27532c3bfe3.png", // Updated to correct SOS Alarm project card image
      "/lovable-uploads/9cd69b84-30c0-4298-99f7-4457f6c78d22.png",
      "/lovable-uploads/03237c2d-8d62-42fb-9a7f-5564be5e06ba.png",
      "/lovable-uploads/b1497a8d-0417-448d-925d-4f7b20d622dc.png"
    ],
    profileImage: "/lovable-uploads/466ef9a3-c93b-4771-86ad-2fa8866f7970.png",
    slug: "sos-alarm"
  },
  {
    title: "Solace",
    description: "A mental health app for trauma recovery, leveraging AI-driven therapeutic interactions.",
    images: [
      "/lovable-uploads/Solace-projectcard-img.jpeg", // Keep this one as is since it's correct
      "/lovable-uploads/a9cb4d78-8b3e-4f8a-ba8f-a1618fc4e776.png",
      "/lovable-uploads/46e75da5-478a-4369-aa20-43942beef716.png",
      "/lovable-uploads/6bbbdb76-96ca-4062-afe4-faf20078abdf.png"
    ],
    profileImage: "/lovable-uploads/22be8763-6688-4c2c-a05f-5fd55da48025.png",
    slug: "solace"
  },
];

export default Index;
