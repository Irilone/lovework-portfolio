
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export interface Project {
  title: string;
  description: string;
  images: string[];
  slug: string;
}

interface ProjectsProps {
  projects: Project[];
}

const Projects = ({ projects }: ProjectsProps) => {
  const navigate = useNavigate();

  return (
    <section id="projects" className="py-16 md:py-24 px-4 md:px-6">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12">Selected Work</h2>
        
        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group bg-white dark:bg-soft-black rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="aspect-video bg-neutral-100 dark:bg-neutral-900 overflow-hidden">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-6">
                  {project.description}
                </p>
                <Button 
                  variant="ghost" 
                  className="rounded-full px-0 hover:px-4 transition-all duration-300"
                  onClick={() => navigate(`/case-study/${project.slug}`)}
                >
                  View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <Carousel className="w-full">
            <CarouselContent>
              {projects.map((project, i) => (
                <CarouselItem key={i}>
                  <div className="bg-white dark:bg-soft-black rounded-2xl overflow-hidden shadow-sm">
                    <div className="aspect-video bg-neutral-100 dark:bg-neutral-900 overflow-hidden">
                      <img
                        src={project.images[0]}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                      <p className="text-muted-foreground mb-6">
                        {project.description}
                      </p>
                      <Button 
                        variant="ghost" 
                        className="rounded-full px-0 hover:px-4 transition-all duration-300"
                        onClick={() => navigate(`/case-study/${project.slug}`)}
                      >
                        View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Projects;
