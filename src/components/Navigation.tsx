
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <a
          href="/"
          className="text-lg font-medium hover:text-neutral-500 transition-colors"
        >
          JD
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#about"
            className="text-sm hover:text-neutral-500 transition-colors"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-sm hover:text-neutral-500 transition-colors"
          >
            Work
          </a>
          <a
            href="#contact"
            className="text-sm hover:text-neutral-500 transition-colors"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-20 left-0 right-0 bg-background/80 backdrop-blur-xl border-b border-border md:hidden animate-fade-down">
            <div className="container mx-auto px-6 py-8 flex flex-col space-y-6">
              <a
                href="#about"
                className="text-sm hover:text-neutral-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#projects"
                className="text-sm hover:text-neutral-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Work
              </a>
              <a
                href="#contact"
                className="text-sm hover:text-neutral-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
