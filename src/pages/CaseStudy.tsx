
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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const projectKey = id as keyof typeof projects;
  const project = projects[projectKey];

  useEffect(() => {
    if (!project) {
      navigate('/');
    }
  }, [project, navigate]);

  if (!project) return null;

  return (
    <div className="min-h-screen w-full">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <img
          src={project.images[0]}
          alt={project.title}
          className="w-full h-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent">
          <div className="container mx-auto px-6 h-full flex flex-col justify-center">
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
            <p className="text-xl text-white/80 animate-fade-up [animation-delay:200ms]">
              {project.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="flex gap-12">
          <div className="flex-1 max-w-4xl">
            {/* Overview */}
            <section id="overview" className="mb-16 scroll-mt-24 animate-fade-up">
              <h2 className="text-2xl font-semibold mb-6">Overview</h2>
              <div className="prose dark:prose-invert">
                <p className="text-lg text-muted-foreground">{project.overview}</p>
              </div>
            </section>

            {/* Role & Tools */}
            <section id="role" className="mb-16 scroll-mt-24 animate-fade-up [animation-delay:200ms]">
              <h2 className="text-2xl font-semibold mb-6">Role & Tools</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-medium mb-4">Role</h3>
                  <p className="text-muted-foreground">{project.role}</p>
                  <p className="text-muted-foreground mt-2">{project.timeline}</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-4">Tools Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span key={tool} className="px-3 py-1 bg-secondary rounded-full text-sm">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Challenges & Solutions */}
            <section id="challenges" className="mb-16 scroll-mt-24 animate-fade-up [animation-delay:400ms]">
              <h2 className="text-2xl font-semibold mb-6">Challenges & Solutions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-medium mb-4">Key Challenges</h3>
                  <ul className="space-y-4">
                    {project.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start p-4 bg-muted rounded-lg">
                        <span className="text-muted-foreground">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-4">Solutions</h3>
                  <ul className="space-y-4">
                    {project.solutions.map((solution, index) => (
                      <li key={index} className="flex items-start p-4 bg-muted rounded-lg">
                        <span className="text-muted-foreground">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Image Gallery */}
            <section id="gallery" className="mb-16 scroll-mt-24 animate-fade-up [animation-delay:600ms]">
              <h2 className="text-2xl font-semibold mb-6">Project Gallery</h2>
              <div className="grid grid-cols-2 gap-4">
                {project.images.map((image, index) => (
                  <button
                    key={index}
                    className="relative aspect-video rounded-lg overflow-hidden hover:opacity-90 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    onClick={() => setSelectedImage(image)}
                    aria-label={`View ${project.title} screenshot ${index + 1}`}
                  >
                    <img
                      src={image}
                      alt={`${project.title} screenshot ${index + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>
            </section>

            {/* Outcomes */}
            <section id="outcomes" className="mb-16 scroll-mt-24 animate-fade-up [animation-delay:800ms]">
              <h2 className="text-2xl font-semibold mb-6">Outcomes</h2>
              <ul className="space-y-4">
                {project.outcomes.map((outcome, index) => (
                  <li key={index} className="flex items-start p-4 bg-muted rounded-lg">
                    <span className="text-muted-foreground">{outcome}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <CaseStudyNav />
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
          onKeyDown={(e) => e.key === 'Escape' && setSelectedImage(null)}
          role="dialog"
          aria-label="Image preview"
          tabIndex={-1}
        >
          <img
            src={selectedImage}
            alt="Full size preview"
            className="max-w-full max-h-[90vh] object-contain"
          />
          <button
            className="absolute top-4 right-4 text-white hover:text-white/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            onClick={() => setSelectedImage(null)}
            aria-label="Close preview"
          >
            <ArrowLeft className="h-6 w-6 transform rotate-90" />
          </button>
        </div>
      )}
    </div>
  );
};

export default CaseStudy;
