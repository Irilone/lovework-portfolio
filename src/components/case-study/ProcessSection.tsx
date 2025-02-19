
interface ProcessSectionProps {
  challenges: string[];
  solutions: string[];
}

const ProcessSection = ({ challenges, solutions }: ProcessSectionProps) => {
  return (
    <section id="process" className="scroll-mt-24 animate-fade-up [animation-delay:400ms]">
      <h2 className="text-3xl font-semibold mb-8">Process</h2>
      <div className="space-y-12">
        <div>
          <h3 className="text-xl font-medium mb-6">The Challenge</h3>
          <ul className="space-y-4">
            {challenges.map((challenge, index) => (
              <li 
                key={index} 
                className="p-6 bg-secondary rounded-2xl text-secondary-foreground"
              >
                {challenge}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-medium mb-6">The Solution</h3>
          <ul className="space-y-4">
            {solutions.map((solution, index) => (
              <li 
                key={index} 
                className="p-6 bg-secondary rounded-2xl text-secondary-foreground"
              >
                {solution}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
