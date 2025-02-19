
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Project } from "@/types/project";
import ImageWithFallback from "./ImageWithFallback";

interface ProjectCardProps {
  project: Project;
  onViewCaseStudy: (slug: string) => void;
}

const ProjectCard = ({ project, onViewCaseStudy }: ProjectCardProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <div
        className="group bg-white dark:bg-soft-black rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
        role="article"
        aria-labelledby={`project-${project.slug}-title`}
      >
        <button
          className="w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          onClick={() => setIsDialogOpen(true)}
          aria-label={`View details of ${project.title}`}
        >
          <div className="aspect-video bg-neutral-100 dark:bg-neutral-900 overflow-hidden">
            <ImageWithFallback
              src={project.images[0]}
              alt={`Preview of ${project.title}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              width={800}
              height={450}
            />
          </div>
          <div className="p-6 md:p-8">
            <h3 
              id={`project-${project.slug}-title`}
              className="text-xl font-semibold mb-3"
            >
              {project.title}
            </h3>
            <p className="text-muted-foreground mb-6">
              {project.description}
            </p>
          </div>
        </button>
        <div className="px-6 md:px-8 pb-6 md:pb-8">
          <Button 
            variant="ghost" 
            className="rounded-full px-0 hover:px-4 transition-all duration-300"
            onClick={() => onViewCaseStudy(project.slug)}
          >
            View Case Study <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>{project.title}</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4">
            {project.images.map((image, index) => (
              <ImageWithFallback
                key={index}
                src={image}
                alt={`${project.title} showcase image ${index + 1}`}
                className="w-full rounded-lg shadow-md"
                width={1200}
                height={675}
              />
            ))}
          </div>
          <div className="mt-4">
            <p className="text-muted-foreground">{project.description}</p>
          </div>
          <div className="mt-6">
            <Button 
              onClick={() => onViewCaseStudy(project.slug)}
              className="rounded-full"
            >
              View Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProjectCard;
