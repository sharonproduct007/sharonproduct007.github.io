
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard, UserPlus, Shield, Utensils, ArrowRight, Target, Cog, BarChart3 } from "lucide-react";

const projects = [
  {
    title: "AEPS Single-Page Transaction Flow",
    problem: "Fragmented AEPS payment journey causing 17% transaction failures and high support volume",
    process: "Redesigned into unified single-page interface, aligned frontend/UX/backend validation using Figma, Postman, JIRA",
    impact: "37% increase in payment success, 38% drop in support tickets within 6 weeks",
    icon: CreditCard,
    tags: ["Fintech", "UX Design", "API Integration"],
    metrics: ["37% ↑ Success", "38% ↓ Support", "₹1.2Cr Secured"]
  },
  {
    title: "NEOB Onboarding App Rebuild", 
    problem: "Early-stage churn due to complex onboarding process and poor form validation",
    process: "Introduced API-driven real-time validation, simplified form logic, reduced cognitive load with Hotjar insights",
    impact: "45% reduction in onboarding time, 32% increase in Day-1 activation",
    icon: UserPlus,
    tags: ["Onboarding", "Real-time Validation", "User Research"],
    metrics: ["45% ↓ Time", "32% ↑ Activation", "80% Completion"]
  },
  {
    title: "Real-Time Fraud Detection System",
    problem: "Increasing transaction risks threatening platform security and user trust",
    process: "Developed live fraud detection with rule-based logic, deployed dashboards using SQL and Metabase",
    impact: "23% reduction in suspicious transactions, prevented ₹1.2 Cr in potential losses",
    icon: Shield,
    tags: ["Fraud Prevention", "Real-time Analytics", "Risk Management"],
    metrics: ["23% ↓ Fraud", "₹1.2Cr Saved", "99.7% Accuracy"]
  },
  {
    title: "Fridge2Fork Zero-Waste App",
    problem: "Food waste problem - users struggling to utilize available ingredients efficiently", 
    process: "Conducted user interviews, mapped friction points, built no-code MVP with recommendation engine",
    impact: "80% weekly usage across initial testers, validated product-market fit",
    icon: Utensils,
    tags: ["Product Discovery", "MVP", "Sustainability"],
    metrics: ["80% Usage", "4.8★ Rating", "0→1 Success"]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-secondary/30 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-poppins tracking-tight">
            Case Studies
          </h2>
          <p className="text-lg text-muted-foreground font-poppins">
            Problem → Process → Impact
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto mt-4 rounded-full" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="glass-card-intense hover:scale-[1.02] transition-all duration-500 floating-card group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <CardHeader className="relative overflow-hidden pb-4">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-2xl" />
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 glass-card flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-pulse-glow">
                    <project.icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground font-poppins bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text">{project.title}</CardTitle>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tech-badge text-xs">{tag}</span>
                  ))}
                </div>
              </CardHeader>
              
              <CardContent className="p-6 pt-0 relative">
                <div className="space-y-6">
                  <div className="glass-card p-4 border-l-4 border-l-destructive">
                    <h4 className="font-semibold text-destructive mb-3 flex items-center gap-2">
                      <div className="w-2 h-2 bg-destructive rounded-full" />
                      Problem
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{project.problem}</p>
                  </div>
                  
                  <div className="glass-card p-4 border-l-4 border-l-primary">
                    <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      Process
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{project.process}</p>
                  </div>
                  
                  <div className="glass-card p-4 border-l-4 border-l-green-500">
                    <h4 className="font-semibold text-green-500 mb-3 flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      Impact
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.impact}</p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {project.metrics.map((metric, i) => (
                        <div key={i} className="glass-card p-3 text-center hover:scale-105 transition-transform duration-200">
                          <span className="text-primary font-bold text-sm block">{metric}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
