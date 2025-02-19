
import { ArrowRight, Mail, Github, Linkedin } from "lucide-react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen w-full">
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center justify-center px-6">
        <div className="text-center space-y-8 animate-fade-up">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            John Doe
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Product Designer & Developer
          </p>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Crafting meaningful digital experiences through thoughtful design and clean code.
          </p>
          <Button size="lg" className="mt-8 rounded-full">
            View Work <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-soft-gray">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-12">About</h2>
          <div className="space-y-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a designer and developer based in San Francisco, focused on creating 
              intuitive and impactful digital experiences.
            </p>
            <ul className="space-y-4 text-lg text-muted-foreground">
              <li className="flex items-start">
                <span className="mr-4">•</span>
                <span>7+ years of experience in product design and development</span>
              </li>
              <li className="flex items-start">
                <span className="mr-4">•</span>
                <span>Previously led design at [Company Name]</span>
              </li>
              <li className="flex items-start">
                <span className="mr-4">•</span>
                <span>Specialized in user-centered design and clean architecture</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12">Selected Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <div
                key={i}
                className="group bg-white dark:bg-soft-black rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="aspect-video bg-neutral-100 dark:bg-neutral-900 overflow-hidden">
                  <div className="w-full h-full bg-neutral-200 dark:bg-neutral-800 group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-6">
                    {project.description}
                  </p>
                  <Button variant="ghost" className="rounded-full px-0 hover:px-4 transition-all duration-300">
                    View Project <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-soft-gray">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          <p className="text-lg text-muted-foreground mb-12">
            Available for select projects. Let's create something meaningful together.
          </p>
          <div className="flex flex-col items-center space-y-6">
            <Button size="lg" className="rounded-full">
              <Mail className="mr-2 h-4 w-4" />
              hello@johndoe.com
            </Button>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6">
        <div className="container mx-auto max-w-4xl text-center text-muted-foreground">
          <p>© 2024 John Doe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

const projects = [
  {
    title: "Project One",
    description: "A clean, minimal e-commerce experience focused on simplicity and usability.",
  },
  {
    title: "Project Two",
    description: "Redesigning the way people interact with financial data through intuitive interfaces.",
  },
  {
    title: "Project Three",
    description: "Building a scalable design system for a leading technology company.",
  },
];

export default Index;
