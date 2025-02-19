
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CaseStudyNav from "@/components/CaseStudyNav";

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
      {/* Hero Section with Parallax Effect */}
      <div className="relative h-[80vh] w-full overflow-hidden">
        <img
          src={project.images[0]}
          alt={project.title}
          className="w-full h-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-background">
          <div className="container mx-auto px-6 h-full flex flex-col justify-end pb-24">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-6 left-6 text-white hover:bg-white/20"
              onClick={() => navigate('/')}
              aria-label="Back to home"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-up">
              {project.title}
            </h1>
            <p className="text-xl text-white/80 max-w-2xl animate-fade-up [animation-delay:200ms]">
              {project.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6">
        <div className="flex gap-12 py-16">
          <div className="flex-1 max-w-4xl space-y-24">
            {/* Overview */}
            <section 
              id="overview" 
              className="scroll-mt-24 animate-fade-up"
              onFocus={() => setActiveSection("overview")}
            >
              <h2 className="text-3xl font-semibold mb-8">Overview</h2>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-xl text-muted-foreground leading-relaxed">{project.overview}</p>
              </div>
            </section>

            {/* Role & Timeline */}
            <section 
              id="role" 
              className="scroll-mt-24 animate-fade-up [animation-delay:200ms]"
              onFocus={() => setActiveSection("role")}
            >
              <h2 className="text-3xl font-semibold mb-8">Role & Timeline</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <h3 className="text-xl font-medium">Role</h3>
                  <p className="text-muted-foreground">{project.role}</p>
                  <p className="text-muted-foreground">{project.timeline}</p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-medium">Tools Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span 
                        key={tool} 
                        className="px-4 py-2 bg-secondary rounded-full text-sm font-medium"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Process */}
            <section 
              id="process" 
              className="scroll-mt-24 animate-fade-up [animation-delay:400ms]"
              onFocus={() => setActiveSection("process")}
            >
              <h2 className="text-3xl font-semibold mb-8">Process</h2>
              <div className="space-y-12">
                <div>
                  <h3 className="text-xl font-medium mb-6">The Challenge</h3>
                  <ul className="space-y-4">
                    {project.challenges.map((challenge, index) => (
                      <li 
                        key={index} 
                        className="p-6 bg-secondary rounded-2xl text-secondary-foreground"
                      >
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-6">The Solution</h3>
                  <ul className="space-y-4">
                    {project.solutions.map((solution, index) => (
                      <li 
                        key={index} 
                        className="p-6 bg-secondary rounded-2xl text-secondary-foreground"
                      >
                        {solution}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Gallery */}
            <section 
              id="gallery" 
              className="scroll-mt-24 animate-fade-up [animation-delay:600ms]"
              onFocus={() => setActiveSection("gallery")}
            >
              <h2 className="text-3xl font-semibold mb-8">Visual Journey</h2>
              <div className="space-y-8">
                {project.images.map((image, index) => (
                  <figure key={index} className="space-y-4">
                    <img
                      src={image}
                      alt={`${project.title} - Design phase ${index + 1}`}
                      className="w-full rounded-2xl shadow-lg"
                      loading={index === 0 ? "eager" : "lazy"}
                    />
                    <figcaption className="text-sm text-muted-foreground text-center">
                      Phase {index + 1} of the design process
                    </figcaption>
                  </figure>
                ))}
              </div>
            </section>

            {/* Outcomes */}
            <section 
              id="outcomes" 
              className="scroll-mt-24 animate-fade-up [animation-delay:800ms]"
              onFocus={() => setActiveSection("outcomes")}
            >
              <h2 className="text-3xl font-semibold mb-8">Outcomes</h2>
              <div className="grid gap-6">
                {project.outcomes.map((outcome, index) => (
                  <div 
                    key={index}
                    className="p-6 bg-secondary rounded-2xl text-secondary-foreground"
                  >
                    {outcome}
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Side Navigation */}
          <aside className="hidden lg:block sticky top-24 h-fit">
            <nav 
              className="space-y-4 text-sm border-l border-border pl-8"
              aria-label="Case study sections"
            >
              {["overview", "role", "process", "gallery", "outcomes"].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className={`block py-2 transition-colors ${
                    activeSection === section
                      ? "text-foreground font-medium border-l-2 border-foreground -ml-[33px] pl-8"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              ))}
            </nav>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
