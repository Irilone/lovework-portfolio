
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Hero from "@/components/case-study/Hero";
import RoleSection from "@/components/case-study/RoleSection";
import ProcessSection from "@/components/case-study/ProcessSection";
import GallerySection from "@/components/case-study/GallerySection";
import OutcomesSection from "@/components/case-study/OutcomesSection";
import SideNavigation from "@/components/case-study/SideNavigation";

const projects = {
  solace: {
    title: "Solace - Mental Health Interface",
    subtitle: "Reducing cognitive load in trauma recovery",
    overview: "Applied the Free Energy Principle to create a therapeutic interface that minimizes prediction errors and reduces cognitive strain during trauma recovery.",
    role: "Cognitive Systems Designer",
    timeline: "6 months (2024)",
    tools: ["Figma", "React", "TailwindCSS", "Python"],
    images: [
      "/lovable-uploads/solace-1-onboarding.png",
      "/lovable-uploads/solace-2-home.png",
      "/lovable-uploads/solace-3-form.png"
    ],
    challenges: [
      "High cognitive load during emotional distress states",
      "Unpredictable user mental states requiring adaptive interfaces",
      "Complex therapeutic concepts needing intuitive presentation"
    ],
    solutions: [
      "Implemented predictive processing patterns to reduce cognitive surprise",
      "Created adaptive interfaces that match users' mental models",
      "Developed progressive disclosure mechanisms for complex information"
    ],
    outcomes: [
      "90% reduction in cognitive load during therapeutic sessions",
      "85% decrease in interface-related stress markers",
      "Significant improvement in information retention and engagement"
    ]
  },
  papyrus: {
    title: "Papyrus - Research Navigation",
    subtitle: "Minimizing cognitive load in academic research",
    overview: "Applied active inference principles to create an interface that predicts and facilitates research workflows.",
    role: "Cognitive UX Architect",
    timeline: "4 months (2023)",
    tools: ["Figma", "Framer", "React", "ElasticSearch"],
    images: [
      "/lovable-uploads/papyrus-1-papyrus.png",
      "/lovable-uploads/papyrus-2-challenge.png",
      "/lovable-uploads/papyrus-3-annotations.png"
    ],
    challenges: [
      "High cognitive load during complex research tasks",
      "Information overload leading to decision paralysis",
      "Mental model mismatches in data visualization"
    ],
    solutions: [
      "Implemented predictive search patterns based on research context",
      "Created dynamic information hierarchies that adapt to user behavior",
      "Developed intuitive visual representations of complex relationships"
    ],
    outcomes: [
      "70% reduction in cognitive effort during literature reviews",
      "60% improvement in research pattern recognition",
      "Significant decrease in time spent navigating between related papers"
    ]
  },
  "sos-alarm": {
    title: "SOS Alarm - Emergency Response",
    subtitle: "Optimizing cognitive flow in critical situations",
    overview: "Leveraged the Free Energy Principle to create an emergency response system that minimizes cognitive load under pressure.",
    role: "Cognitive Systems Engineer",
    timeline: "5 months (2023)",
    tools: ["Figma", "ProtoPie", "React", "D3.js"],
    images: [
      "/lovable-uploads/sos-1-helpseekercase.png",
      "/lovable-uploads/sos-2-gtk.png",
      "/lovable-uploads/sos-3-solution.png"
    ],
    challenges: [
      "Extreme cognitive pressure during emergency situations",
      "Complex decision trees requiring rapid navigation",
      "Information overload during critical moments"
    ],
    solutions: [
      "Created predictive interface patterns for emergency scenarios",
      "Implemented cognitive load distribution across time and space",
      "Developed context-aware information presentation systems"
    ],
    outcomes: [
      "40% reduction in cognitive load during emergency response",
      "30% improvement in decision-making accuracy",
      "Significant decrease in response time variation"
    ]
  }
};

const CaseStudy = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState<string>("overview");
  
  const projectKey = id as keyof typeof projects;
  const project = projects[projectKey];

  useEffect(() => {
    if (!project) {
      navigate('/');
    }
  }, [project, navigate]);

  if (!project) return null;

  return (
    <div className="min-h-screen w-full bg-background">
      <Hero 
        title={project.title}
        subtitle={project.subtitle}
        coverImage={project.images[0]}
      />

      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 py-12 md:py-16">
          <div className="flex-1 max-w-4xl space-y-16 md:space-y-24">
            <section 
              id="overview" 
              className="scroll-mt-24 animate-fade-up"
              onFocus={() => setActiveSection("overview")}
              aria-labelledby="overview-heading"
            >
              <h2 id="overview-heading" className="text-3xl font-semibold mb-8">Overview</h2>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {project.overview}
                </p>
              </div>
            </section>

            <RoleSection 
              role={project.role}
              timeline={project.timeline}
              tools={project.tools}
            />

            <ProcessSection 
              challenges={project.challenges}
              solutions={project.solutions}
            />

            <GallerySection 
              title={project.title}
              images={project.images}
            />

            <OutcomesSection 
              outcomes={project.outcomes}
            />
          </div>

          <SideNavigation activeSection={activeSection} />
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
