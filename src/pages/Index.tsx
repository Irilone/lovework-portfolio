import { ArrowRight, Mail, Github, Linkedin, Sun, Moon, Send, ChevronDown } from "lucide-react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Index = () => {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [displayText, setDisplayText] = useState("");
  const fullText = "Creating intuitive and impactful digital experiences";
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    setMounted(true);

    // Typewriter effect with reduced motion check
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    
    if (!prefersReducedMotion) {
      let i = 0;
      const timer = setInterval(() => {
        if (i <= fullText.length) {
          setDisplayText(fullText.slice(0, i));
          i++;
        } else {
          clearInterval(timer);
        }
      }, 50);

      return () => clearInterval(timer);
    } else {
      setDisplayText(fullText);
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  if (!mounted) return null;

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      toast({
        title: "Message sent successfully!",
        description: "I'll get back to you as soon as possible.",
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen w-full">
      <Navigation />
      
      {/* Theme Toggle */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-6 right-20 z-50 rounded-full"
        onClick={toggleTheme}
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      >
        {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      </Button>
      
      {/* Hero Section */}
      <section 
        className="relative min-h-[90vh] flex items-center justify-center px-4 md:px-6"
        aria-labelledby="hero-heading"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent animate-pulse" 
             style={{ animationDuration: '4s' }} />
        
        <div className="relative text-center space-y-6 md:space-y-8 animate-fade-up">
          <span className="text-xs md:text-sm uppercase tracking-widest text-muted-foreground">
            Interaction Designer & HCI Specialist
          </span>
          <h1 
            id="hero-heading"
            className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight"
          >
            Dorian Tykesson
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto">
            {displayText}
            <span className="animate-pulse">|</span>
          </p>
          <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
            Blending cognitive science with human-centered design
          </p>
          <Button 
            size="lg" 
            className="mt-6 md:mt-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 focus-visible:scale-105 focus-visible:ring-offset-4"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            aria-label="View my work"
          >
            View Work <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Scroll Cue */}
        <button
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          aria-label="Scroll to about section"
        >
          <ChevronDown className="h-8 w-8 animate-bounce" style={{ animationDuration: '2s' }} />
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 px-4 md:px-6 bg-soft-gray dark:bg-soft-black">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
            {/* Profile Image with Hover Effect */}
            <div className="relative group">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden bg-neutral-100 dark:bg-neutral-900 ring-2 ring-neutral-200 dark:ring-neutral-800">
                <img
                  src="/lovable-uploads/b87c4c8e-aa5c-463d-b11d-6f5e6a8e36a4.png"
                  alt="Dorian Tykesson"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="eager"
                  fetchpriority="high"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Content */}
            <div className="flex-1 space-y-8 text-center md:text-left">
              {/* Introduction */}
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold">About</h2>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                  Based in Gothenburg, Sweden, I blend cognitive science with human-centered design to create intuitive and impactful digital experiences.
                </p>
              </div>

              {/* Key Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="text-sm uppercase tracking-wider text-muted-foreground">Education</h3>
                  <ul className="space-y-2">
                    <li className="text-sm">MSc in Interaction Design & Technologies</li>
                    <li className="text-sm text-muted-foreground">Chalmers University</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h3 className="text-sm uppercase tracking-wider text-muted-foreground">Specialization</h3>
                  <ul className="space-y-2">
                    <li className="text-sm">UX Research & Design</li>
                    <li className="text-sm">Human-Computer Interaction</li>
                  </ul>
                </div>
              </div>

              {/* Tools & Skills */}
              <div className="space-y-3">
                <h3 className="text-sm uppercase tracking-wider text-muted-foreground">Tools & Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {["Figma", "React", "TypeScript", "Python", "User Research", "Prototyping"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-secondary rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center justify-center md:justify-start space-x-4">
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-secondary" asChild>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-secondary" asChild>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" className="rounded-full" asChild>
                  <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                    View Resume
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
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

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 px-4 md:px-6 bg-soft-gray dark:bg-soft-black">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold">Get in Touch</h2>
            <p className="text-base md:text-lg text-muted-foreground">
              Let's discuss your project or research collaboration
            </p>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="rounded-lg"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="rounded-lg"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                className="min-h-[150px] rounded-lg resize-none"
                required
              />
            </div>
            <div className="flex flex-col items-center space-y-6">
              <Button type="submit" size="lg" className="rounded-full w-full md:w-auto" disabled={isSubmitting}>
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>

              {/* Direct Contact Options */}
              <div className="w-full border-t pt-6 mt-6">
                <p className="text-sm text-center text-muted-foreground mb-4">
                  Or reach out directly
                </p>
                <div className="flex items-center justify-center space-x-4">
                  <Button variant="outline" size="lg" className="rounded-full" asChild>
                    <a href="mailto:dorian@irilone.st">
                      <Mail className="mr-2 h-4 w-4" />
                      Email Me
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" className="rounded-full" asChild>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="mr-2 h-4 w-4" />
                      LinkedIn
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>

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

const projects = [
  {
    title: "Solace",
    description: "A mental health app for trauma recovery, leveraging AI-driven therapeutic interactions.",
    images: [
      "/lovable-uploads/971dd684-5ccc-41dc-b7b3-8d785ef6027a.png",
      "/lovable-uploads/a9cb4d78-8b3e-4f8a-ba8f-a1618fc4e776.png",
      "/lovable-uploads/46e75da5-478a-4369-aa20-43942beef716.png",
      "/lovable-uploads/6bbbdb76-96ca-4062-afe4-faf20078abdf.png"
    ],
    slug: "solace"
  },
  {
    title: "Papyrus",
    description: "Enhancing academic research accessibility through intuitive interface design.",
    images: [
      "/lovable-uploads/5562aace-fd78-4cb5-80b1-2f1a103e0e6e.png",
      "/lovable-uploads/a8be5969-52f7-4dcc-a5f5-d9732e6f197d.png",
      "/lovable-uploads/cba00f4b-0405-4cef-96d9-e22ffa995c8b.png",
      "/lovable-uploads/220c85c8-b596-4c6c-bd2b-b60a845a0508.png"
    ],
    slug: "papyrus"
  },
  {
    title: "SOS Alarm",
    description: "Optimizing emergency response workflows through cognitive ergonomics.",
    images: [
      "/lovable-uploads/2c6840de-d4aa-4dec-b0fe-2bb2516843d8.png",
      "/lovable-uploads/9cd69b84-30c0-4298-99f7-4457f6c78d22.png",
      "/lovable-uploads/03237c2d-8d62-42fb-9a7f-5564be5e06ba.png",
      "/lovable-uploads/b1497a8d-0417-448d-925d-4f7b20d622dc.png"
    ],
    slug: "sos-alarm"
  },
];

export default Index;
