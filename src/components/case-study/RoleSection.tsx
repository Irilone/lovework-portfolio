
import { motion } from "framer-motion";
import { User, Clock, Wrench } from "lucide-react";

interface RoleSectionProps {
  role: string;
  timeline: string;
  tools: string[];
}

const RoleSection = ({ role, timeline, tools }: RoleSectionProps) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
  };

  return (
    <section id="role" className="scroll-mt-24">
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-12"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div className="space-y-6" variants={item}>
          <div className="flex items-center gap-3 mb-6">
            <User className="h-6 w-6 text-primary" />
            <h3 className="text-xl font-medium">Role</h3>
          </div>
          <div className="p-6 bg-secondary rounded-2xl">
            <p className="text-lg text-secondary-foreground">{role}</p>
            <div className="mt-4 flex items-center gap-2 text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>{timeline}</span>
            </div>
          </div>
        </motion.div>

        <motion.div className="space-y-6" variants={item}>
          <div className="flex items-center gap-3 mb-6">
            <Wrench className="h-6 w-6 text-primary" />
            <h3 className="text-xl font-medium">Tools Used</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {tools.map((tool) => (
              <motion.span 
                key={tool}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-secondary rounded-full text-sm font-medium transform transition-all duration-300 hover:shadow-md"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default RoleSection;
