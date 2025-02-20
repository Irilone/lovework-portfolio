
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
import { supabase } from "@/integrations/supabase/client";
import { useQuery } from "@tanstack/react-query";

const fetchProjects = async (): Promise<Project[]> => {
  const { data: projects, error } = await supabase
    .from('projects')
    .select(`
      *,
      project_images (
        url,
        type,
        "order"
      )
    `)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching projects:', error);
    throw error;
  }

  return projects.map(project => ({
    id: project.id,
    slug: project.slug,
    title: project.title,
    description: project.description,
    category: project.category,
    overview: project.overview,
    role: project.role,
    tools: project.tools,
    challenges: project.challenges,
    solutions: project.solutions,
    outcomes: project.outcomes,
    images: project.project_images
      .sort((a: any, b: any) => a.order - b.order)
      .map((img: any) => img.url),
    profileImage: project.project_images.find((img: any) => img.type === 'cover')?.url || ''
  }));
};

const Index = () => {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const navigate = useNavigate();

  const { data: projects = [], isLoading, error } = useQuery({
    queryKey: ['projects'],
    queryFn: fetchProjects
  });

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
          
          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-pulse">
              {[1, 2, 3].map((n) => (
                <div key={n} className="bg-muted rounded-2xl h-[400px]" />
              ))}
            </div>
          ) : error ? (
            <div className="text-center text-red-500">
              Failed to load projects. Please try again later.
            </div>
          ) : (
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
          )}
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

export default Index;
