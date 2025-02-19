
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
    title: "Solace",
    subtitle: "A mental health app for trauma recovery",
    overview: "Designing a compassionate digital space for trauma recovery through AI-driven therapeutic interactions.",
    role: "Lead UX Designer & Researcher",
    timeline: "6 months (2024)",
    tools: ["Figma", "React", "TailwindCSS", "Python"],
    images: [
      "/lovable-uploads/solace-1-onboarding.png",
      "/lovable-uploads/solace-2-home.png",
      "/lovable-uploads/solace-3-form.png"
    ],
    challenges: [
      "Creating a safe and supportive digital environment for trauma survivors",
      "Balancing AI capabilities with human-centered design principles",
      "Ensuring privacy and security while maintaining user engagement"
    ],
    solutions: [
      "Implemented trauma-informed design principles throughout the interface",
      "Developed an AI system that adapts to individual user needs and preferences",
      "Created a robust security framework with end-to-end encryption"
    ],
    outcomes: [
      "90% user satisfaction rate in initial testing",
      "Significantly reduced dropout rates compared to traditional therapy apps",
      "Innovative approach to mental health support recognized by industry experts"
    ]
  },
  papyrus: {
    title: "Papyrus",
    subtitle: "Enhancing academic research accessibility",
    overview: "Revolutionizing how researchers interact with academic literature through intuitive interface design.",
    role: "UX Designer & Information Architect",
    timeline: "4 months (2023)",
    tools: ["Figma", "Framer", "React", "ElasticSearch"],
    images: [
      "/lovable-uploads/papyrus-1-papyrus.png",
      "/lovable-uploads/papyrus-2-challenge.png",
      "/lovable-uploads/papyrus-3-annotations.png"
    ],
    challenges: [
      "Complex information architecture requiring intuitive navigation",
      "Diverse user base with varying technical expertise",
      "Large-scale data visualization and organization"
    ],
    solutions: [
      "Developed a clear and consistent information hierarchy",
      "Implemented adaptive interface elements for different user levels",
      "Created innovative visualization tools for research connections"
    ],
    outcomes: [
      "50% reduction in time spent searching for relevant papers",
      "Improved research workflow efficiency by 40%",
      "Positive feedback from both novice and expert researchers"
    ]
  },
  "sos-alarm": {
    title: "SOS Alarm",
    subtitle: "Optimizing emergency response workflows",
    overview: "Redesigning emergency response systems to enhance decision-making and reduce response times.",
    role: "UX Designer & Cognitive Systems Engineer",
    timeline: "5 months (2023)",
    tools: ["Figma", "ProtoPie", "React", "D3.js"],
    images: [
      "/lovable-uploads/sos-1-helpseekercase.png",
      "/lovable-uploads/sos-2-gtk.png",
      "/lovable-uploads/sos-3-solution.png"
    ],
    challenges: [
      "Critical decision-making under high-pressure situations",
      "Complex integration with existing emergency systems",
      "Need for absolute reliability and quick response times"
    ],
    solutions: [
      "Implemented cognitive load reduction techniques in the interface",
      "Created streamlined workflows based on operator feedback",
      "Developed fail-safe systems with redundancy"
    ],
    outcomes: [
      "20% reduction in emergency response times",
      "Improved operator confidence and reduced stress levels",
      "Successfully integrated with existing emergency response systems"
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
