
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface HeroProps {
  title: string;
  subtitle: string;
  coverImage: string;
}

const Hero = ({ title, subtitle, coverImage }: HeroProps) => {
  const navigate = useNavigate();

  return (
    <div className="relative h-[80vh] w-full overflow-hidden">
      <img
        src={coverImage}
        alt={title}
        className="w-full h-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-background">
        <div className="container mx-auto px-6 h-full flex flex-col justify-end pb-24">
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
            {title}
          </h1>
          <p className="text-xl text-white/80 max-w-2xl animate-fade-up [animation-delay:200ms]">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
