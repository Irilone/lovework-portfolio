
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
      <div className="container mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
        <a
          href="/"
          className="text-base md:text-lg font-medium hover:text-neutral-500 transition-colors"
        >
          DT
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
          className="md:hidden w-10 h-10"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-16 md:top-20 left-0 right-0 bg-background/80 backdrop-blur-xl border-b border-border md:hidden animate-fade-down">
            <div className="container mx-auto px-4 md:px-6 py-6 flex flex-col space-y-4">
              <a
                href="#about"
                className="text-base hover:text-neutral-500 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#projects"
                className="text-base hover:text-neutral-500 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Work
              </a>
              <a
                href="#contact"
                className="text-base hover:text-neutral-500 transition-colors py-2"
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
