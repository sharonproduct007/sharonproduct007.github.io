
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, TrendingUp, Users, Database } from "lucide-react";

const experiences = [
  {
    company: "Radiant Acemoney",
    role: "Product Manager",
    period: "April 2025 - Present",
    icon: TrendingUp,
    achievements: [
      "Redesigned AEPS transaction flow into unified single-screen experience—drove 37% increase in payment success",
      "Launched contextual notification system using Mixpanel segmentation—boosted engagement by 40%",
      "Overhauled NEOB onboarding app—reduced onboarding time by 45% and improved Day-1 activation by 32%",
      "Built real-time fraud detection dashboard—prevented ₹1.2 Cr in losses, reduced fraudulent transactions by 23%",
      "Introduced API-first sprint model—improved delivery velocity by 25%"
    ]
  },
  {
    company: "Splore AI",
    role: "Associate Product Growth",
    period: "March 2024 - March 2025",
    icon: Users,
    achievements: [
      "Redesigned early-funnel activation—tripled sign-ups and improved user activation by 40%",
      "Integrated AI-based recommendation engine—reduced time-to-value by 27%", 
      "Drove $100K+ in ARR through rapid experimentation cycles across Sales, Marketing, and Product",
      "Built scalable feedback loop using Airtable and Linear—accelerated 2 critical feature launches",
      "Co-led CAC:LTV optimization with RevOps for quarterly revenue planning"
    ]
  },
  {
    company: "My Captain",
    role: "Program Consultant", 
    period: "April 2022 - Feb 2024",
    icon: Database,
    achievements: [
      "Diagnosed learner retention drop-off using Salesforce CRM—improved early retention by 22%",
      "Supported GTM motion for high-ticket programs—drove 15% uplift in conversion and GTV growth",
      "Mapped 200+ user conversations into structured insights—shaped curriculum revisions for better LTV",
      "Designed lead qualification logic using Salesforce scoring—reduced pipeline clutter by 31%",
      "Bridged user ops and product build through live feedback translation"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-background px-6 relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient opacity-20" />
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-poppins tracking-tight">
            Professional Journey
          </h2>
          <p className="text-lg text-muted-foreground font-poppins">
            Building products that scale and deliver measurable impact
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto mt-4 rounded-full" />
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="glass-card-intense hover:scale-[1.02] transition-all duration-500 floating-card animate-slide-up">
              <CardContent className="p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-2xl" />
                <div className="flex items-start gap-6 relative">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 glass-card flex items-center justify-center animate-pulse-glow">
                      <exp.icon className="w-7 h-7 text-primary" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-2 font-poppins bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text">{exp.company}</h3>
                        <p className="text-lg text-primary font-semibold">{exp.role}</p>
                      </div>
                      <div className="flex items-center gap-2 glass-card px-3 py-1 rounded-full mt-2 md:mt-0">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-primary">{exp.period}</span>
                      </div>
                    </div>
                    
                    <ul className="space-y-4">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-4 group">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-200" />
                          <span className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-200">{achievement}</span>
                        </li>
                      ))}
                    </ul>
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

export default Experience;
