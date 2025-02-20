import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import ImageWithFallback from "./ImageWithFallback";
import { ProjectCardProps } from "@/types/components/project-card";
import { motion } from "framer-motion";

const ProjectCard = ({ project, onViewCaseStudy }: ProjectCardProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    hover: { y: -5 }
  };

  const imageVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05 }
  };

  return (
    <>
      <motion.div
        className="bg-white dark:bg-soft-black rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
        role="article"
        aria-labelledby={`project-${project.slug}-title`}
        variants={cardVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
        transition={{ duration: 0.3 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <button
          className="w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          onClick={() => setIsDialogOpen(true)}
          aria-label={`View details of ${project.title}`}
        >
          <div className="aspect-video bg-neutral-100 dark:bg-neutral-900 overflow-hidden">
            <motion.div
              variants={imageVariants}
              transition={{ duration: 0.6 }}
            >
              <ImageWithFallback
                src={`/lovable-uploads/${project.slug}-projectcard-img.png`}
                alt={`Preview of ${project.title}`}
                className="w-full h-full object-cover"
                width={800}
                height={450}
                hasMotion={true}
              />
            </motion.div>
          </div>
          <div className="p-6 md:p-8">
            <motion.h3 
              id={`project-${project.slug}-title`}
              className="text-xl font-semibold mb-4"
              animate={{ color: isHovered ? "var(--primary)" : "var(--foreground)" }}
            >
              {project.title}
            </motion.h3>
            <p className="text-muted-foreground">
              {project.description}
            </p>
          </div>
        </button>
        <div className="px-6 md:px-8 pb-6 md:pb-8">
          <motion.div
            whileHover={{ x: 10 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Button 
              variant="ghost" 
              className="rounded-full px-0 hover:px-4 transition-all duration-300"
              onClick={() => onViewCaseStudy(project.slug)}
            >
              View Case Study <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </motion.div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent 
          className="max-w-4xl"
          aria-labelledby={`dialog-title-${project.slug}`}
        >
          <DialogHeader>
            <DialogTitle id={`dialog-title-${project.slug}`}>
              {project.title}
            </DialogTitle>
          </DialogHeader>
          <motion.div 
            className="grid gap-4"
            role="region"
            aria-label={`${project.title} project images`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {project.images.map((image, index) => (
              <ImageWithFallback
                key={index}
                src={image}
                alt={`${project.title} showcase image ${index + 1}`}
                className="w-full rounded-lg shadow-md"
                width={1200}
                height={675}
                allowZoom
                hasMotion={true}
              />
            ))}
          </motion.div>
          <motion.div 
            className="mt-4"
            aria-live="polite"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-muted-foreground">{project.description}</p>
          </motion.div>
          <motion.div 
            className="mt-6"
            whileHover={{ x: 10 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Button 
              onClick={() => onViewCaseStudy(project.slug)}
              className="rounded-full"
            >
              View Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProjectCard;
