
import { motion } from "framer-motion";
import { useAnimations } from "@/hooks/use-animations";
import { ReactNode } from "react";

interface AnimatedLayoutProps {
  children: ReactNode;
}

export const AnimatedLayout = ({ children }: AnimatedLayoutProps) => {
  const { animations } = useAnimations();

  return (
    <motion.div
      {...animations.pageTransition}
      className="min-h-screen bg-background"
    >
      {/* Skip Link for Accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-background focus:text-foreground focus:shadow-lg"
      >
        Skip to main content
      </a>

      <main 
        id="main-content" 
        className="container mx-auto px-4 py-8 md:px-6 lg:px-8"
        role="main"
      >
        {children}
      </main>
    </motion.div>
  );
};
