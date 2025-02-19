
import { ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen w-full">
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center space-y-6 animate-fade-up">
          <span className="text-sm uppercase tracking-widest text-neutral-500">
            Welcome to my portfolio
          </span>
          <h1 className="text-4xl md:text-6xl font-bold max-w-3xl">
            Creating meaningful digital experiences through design
          </h1>
          <p className="text-lg text-neutral-500 max-w-xl mx-auto">
            I'm a designer and developer focused on crafting clean & user‑friendly experiences
          </p>
          <Button size="lg" className="mt-8 rounded-full">
            View Projects <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-soft-gray">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12">Selected Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project placeholder - we'll add real projects later */}
            {[1, 2, 3].map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="aspect-video bg-neutral-100" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Project Title</h3>
                  <p className="text-neutral-500">
                    A brief description of the project and its impact.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <p className="text-lg text-neutral-500 mb-6">
            I'm a passionate designer and developer with a focus on creating
            intuitive and impactful digital experiences. With expertise in both
            design and development, I bridge the gap between aesthetics and
            functionality.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-soft-gray">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          <p className="text-lg text-neutral-500 mb-8">
            Interested in working together? Let's schedule a call.
          </p>
          <Button size="lg" className="rounded-full">
            Contact Me
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
