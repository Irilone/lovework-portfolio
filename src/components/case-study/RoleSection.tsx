
interface RoleSectionProps {
  role: string;
  timeline: string;
  tools: string[];
}

const RoleSection = ({ role, timeline, tools }: RoleSectionProps) => {
  return (
    <section id="role" className="scroll-mt-24 animate-fade-up [animation-delay:200ms]">
      <h2 className="text-3xl font-semibold mb-8">Role & Timeline</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-4">
          <h3 className="text-xl font-medium">Role</h3>
          <p className="text-muted-foreground">{role}</p>
          <p className="text-muted-foreground">{timeline}</p>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-medium">Tools Used</h3>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool) => (
              <span 
                key={tool} 
                className="px-4 py-2 bg-secondary rounded-full text-sm font-medium"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoleSection;
