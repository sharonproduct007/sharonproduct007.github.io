
import { 
  Database, 
  BarChart3, 
  Zap, 
  Users, 
  FileText, 
  CheckSquare, 
  Figma as FigmaIcon, 
  Globe,
  Code2,
  Brain,
  Sparkles
} from "lucide-react";

const techCategories = [
  {
    name: "Analytics & BI",
    icon: BarChart3,
    tools: ["SQL", "Power BI", "Metabase", "Amplitude", "Mixpanel"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    name: "Frontend Development",
    icon: Code2,
    tools: ["React", "HTML", "Tailwind CSS", "TypeScript"],
    color: "from-cyan-500 to-blue-500"
  },
  {
    name: "Backend & AI",
    icon: Brain,
    tools: ["Node.js", "Python", "LLM", "Prompt Engineering"],
    color: "from-purple-500 to-pink-500"
  },
  {
    name: "CRM & Sales",
    icon: Users,
    tools: ["Salesforce", "HubSpot"],
    color: "from-green-500 to-emerald-500"
  },
  {
    name: "Project Management",
    icon: CheckSquare,
    tools: ["Notion", "JIRA", "Asana"],
    color: "from-purple-500 to-violet-500"
  },
  {
    name: "Design & API",
    icon: FigmaIcon,
    tools: ["Figma", "Postman"],
    color: "from-orange-500 to-red-500"
  },
  {
    name: "Content & Strategy",
    icon: Sparkles,
    tools: ["Copywriting", "GTM", "Screen Writing"],
    color: "from-pink-500 to-rose-500"
  }
];

const TechStack = () => {
  return (
    <section id="tech-stack" className="py-24 bg-background px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/10" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-poppins tracking-tight">
            Tech Arsenal
          </h2>
          <p className="text-lg text-muted-foreground font-poppins">
            Tools that power data-driven product decisions
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto mt-4 rounded-full" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {techCategories.map((category, index) => (
            <div 
              key={index}
              className="group glass-card rounded-2xl p-6 hover:shadow-xl transition-all duration-500 animate-slide-up relative overflow-hidden hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${category.color}`} />
              
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 bg-gradient-to-br ${category.color} rounded-xl text-white group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-foreground font-poppins text-sm">
                  {category.name}
                </h3>
              </div>
              
              <div className="space-y-2">
                {category.tools.map((tool, i) => (
                  <div 
                    key={i}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-accent/50 transition-colors duration-200 group/tool"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full group-hover/tool:scale-125 transition-transform" />
                    <span className="text-sm font-medium text-foreground">{tool}</span>
                    <Sparkles className="h-3 w-3 text-primary ml-auto opacity-0 group-hover/tool:opacity-100 transition-opacity" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
