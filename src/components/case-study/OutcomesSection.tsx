
interface OutcomesSectionProps {
  outcomes: string[];
}

const OutcomesSection = ({ outcomes }: OutcomesSectionProps) => {
  return (
    <section id="outcomes" className="scroll-mt-24 animate-fade-up [animation-delay:800ms]">
      <h2 className="text-3xl font-semibold mb-8">Outcomes</h2>
      <div className="grid gap-6">
        {outcomes.map((outcome, index) => (
          <div 
            key={index}
            className="p-6 bg-secondary rounded-2xl text-secondary-foreground"
          >
            {outcome}
          </div>
        ))}
      </div>
    </section>
  );
};

export default OutcomesSection;
