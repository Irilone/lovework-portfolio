
import Navigation from "@/components/Navigation";
import { ReactNode } from "react";
import { AnimatedLayout } from "./AnimatedLayout";

interface BaseLayoutProps {
  children: ReactNode;
}

export const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <AnimatedLayout>
      <Navigation />
      {children}
    </AnimatedLayout>
  );
};
