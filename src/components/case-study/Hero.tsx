
import { ArrowLeft, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

interface HeroProps {
  title: string;
  subtitle: string;
  coverImage: string;
}

const Hero = ({ title, subtitle, coverImage }: HeroProps) => {
  const navigate = useNavigate();

  return (
    <div className="relative h-[80vh] w-full overflow-hidden">
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <img
          src={coverImage}
          alt={title}
          className="w-full h-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-background" />
      </motion.div>

      <div className="container relative mx-auto px-6 h-full flex flex-col justify-end pb-24">
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-6 left-6 text-white hover:bg-white/20"
          onClick={() => navigate('/')}
          aria-label="Back to home"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="space-y-4"
        >
          <div className="flex items-center gap-3">
            <Sparkles className="h-6 w-6 text-yellow-400" />
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              {title}
            </h1>
          </div>
          <p className="text-xl text-white/80 max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
