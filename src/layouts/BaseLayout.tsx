
import Navigation from "@/components/Navigation";
import { ReactNode } from "react";

interface BaseLayoutProps {
  children: ReactNode;
}

export const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8 md:px-6 lg:px-8">
        {children}
      </main>
    </div>
  );
};
