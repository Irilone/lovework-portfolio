
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";

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

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape' && isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
      role="navigation"
      aria-label="Main navigation"
      onKeyDown={handleKeyPress}
    >
      <div className="container mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
        <motion.a
          href="/"
          className="text-base md:text-lg font-medium hover:text-neutral-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md"
          aria-label="Home"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          DT
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {['about', 'projects', 'contact'].map((item) => (
            <motion.a
              key={item}
              href={`#${item}`}
              className="text-sm hover:text-neutral-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden w-10 h-10"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              id="mobile-menu"
              className="absolute top-16 md:top-20 left-0 right-0 bg-background/80 backdrop-blur-xl border-b border-border md:hidden"
              role="menu"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <div className="container mx-auto px-4 md:px-6 py-6 flex flex-col space-y-4">
                {['about', 'projects', 'contact'].map((item) => (
                  <motion.a
                    key={item}
                    href={`#${item}`}
                    className="text-base hover:text-neutral-500 transition-colors py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                    role="menuitem"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;
