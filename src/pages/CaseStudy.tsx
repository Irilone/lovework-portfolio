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
      "/lovable-uploads/971dd684-5ccc-41dc-b7b3-8d785ef6027a.png",
      "/lovable-uploads/a9cb4d78-8b3e-4f8a-ba8f-a1618fc4e776.png",
      "/lovable-uploads/46e75da5-478a-4369-aa20-43942beef716.png",
      "/lovable-uploads/6bbbdb76-96ca-4062-afe4-faf20078abdf.png"
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
      "/lovable-uploads/5562aace-fd78-4cb5-80b1-2f1a103e0e6e.png",
      "/lovable-uploads/a8be5969-52f7-4dcc-a5f5-d9732e6f197d.png",
      "/lovable-uploads/cba00f4b-0405-4cef-96d9-e22ffa995c8b.png",
      "/lovable-uploads/220c85c8-b596-4c6c-bd2b-b60a845a0508.png"
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
      "/lovable-uploads/2c6840de-d4aa-4dec-b0fe-2bb2516843d8.png",
      "/lovable-uploads/9cd69b84-30c0-4298-99f7-4457f6c78d22.png",
      "/lovable-uploads/03237c2d-8d62-42fb-9a7f-5564be5e06ba.png",
      "/lovable-uploads/b1497a8d-0417-448d-925d-4f7b20d622dc.png"
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

      <div className="container mx-auto px-6">
        <div className="flex gap-12 py-16">
          <div className="flex-1 max-w-4xl space-y-24">
            <section 
              id="overview" 
              className="scroll-mt-24 animate-fade-up"
              onFocus={() => setActiveSection("overview")}
            >
              <h2 className="text-3xl font-semibold mb-8">Overview</h2>
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
