
import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

interface OutcomesSectionProps {
  outcomes: string[];
}

const OutcomesSection = ({ outcomes }: OutcomesSectionProps) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1 }
  };

  return (
    <section id="outcomes" className="scroll-mt-24">
      <h2 className="text-3xl font-semibold mb-12 flex items-center gap-3">
        <Trophy className="h-8 w-8 text-yellow-400" />
        Outcomes
      </h2>
      
      <motion.div 
        className="grid gap-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {outcomes.map((outcome, index) => (
          <motion.div 
            key={index}
            variants={item}
            className="p-8 bg-gradient-to-br from-secondary via-secondary/90 to-secondary/70 rounded-2xl text-secondary-foreground shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <div className="flex items-start gap-4">
              <span className="text-2xl">✨</span>
              <p className="text-lg">{outcome}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default OutcomesSection;
