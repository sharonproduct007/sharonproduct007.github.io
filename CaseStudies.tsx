import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, ExternalLink, Sparkles, Brain, Zap, Shield, Target } from "lucide-react";

// Import case study images
import fintechImage from "@/assets/case-study-fintech.jpg";
import automationImage from "@/assets/case-study-automation.jpg";
import neobankImage from "@/assets/case-study-neobank.jpg";
import inventoryImage from "@/assets/case-study-inventory.jpg";
import sprintImage from "@/assets/case-study-sprint.jpg";

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: "AEPS Single Page Payment",
      subtitle: "Rural fintech isn't about scale — it's about trust.",
      description: "This case study unpacks how we fixed broken flows in AEPS onboarding, simplified agent commissions, and created a UI that your uncle in the village could operate with confidence.",
      highlight: "With real-time fail reconciliation logic and agent-first dashboard redesigns, we turned downtime complaints into daily gratitude.",
      cta: "Download the case deck that made Aadhaar feel like empowerment, not paperwork.",
      link: "https://drive.google.com/file/d/1VuyA64olAAvIS0-AGLWAVNTnI__khqEw/view?usp=sharing",
      icon: Shield,
      gradient: "from-emerald-400/20 to-teal-600/20",
      metrics: ["37% success rate increase", "38% drop in support volume", "6 weeks delivery"],
      image: fintechImage,
    },
    {
      id: 2,
      title: "MIS Prompt Engineering",
      subtitle: "How We Automated Weekly Chaos into Clicks",
      description: "Excel fatigue is real. When leadership meetings depended on last-minute MIS firefighting, we stepped in. This case study shows how we engineered a modular MIS prompt engine — think GPT-style query templates for non-tech folks — that slashed prep time and improved decision speed.",
      highlight: "Prompt logic + sheet hooks = power without Python.",
      cta: "See how a simple prompt framework transformed MIS from Monday madness to Monday magic.",
      link: "https://drive.google.com/file/d/1O-X7N5YBrjsY0F0DdlShbHfc4HJcB0Lw/view?usp=sharing",
      icon: Brain,
      gradient: "from-purple-400/20 to-pink-600/20",
      metrics: ["80% faster reporting", "Zero manual errors", "Weekly automation"],
      image: automationImage,
    },
    {
      id: 3,
      title: "NEOB: Neo-Banking MVP",
      subtitle: "How We Brought Meaning to a Neo-Banking MVP",
      description: "Design is not luxury; it's leverage. In this case study, we walk you through how a lightweight, insight-led product strategy turned a vague neobank idea into a sharp, modular MVP. No fluff, just frictionless KYC flows, pre-approved credit hooks, and a feature-slim app that spoke directly to underserved Tier 2 users.",
      highlight: "Want to see how we ran laser-focused sprints with less than 2 FTEs?",
      cta: "Download the blueprint that brought sanity to neobanking chaos.",
      link: "https://drive.google.com/file/d/13rwhyUCnXk8gyvgeeji18IP0h5hciKdS/view?usp=sharing",
      icon: Zap,
      gradient: "from-blue-400/20 to-cyan-600/20",
      metrics: ["45% faster onboarding", "32% Day-1 activation", "2 FTE team"],
      image: neobankImage,
    },
    {
      id: 4,
      title: "Inventory Management for SMEs",
      subtitle: "From Google Sheet Hell to SKU Zen",
      description: "Small businesses don't need software. They need breathing room. We helped a 7-outlet FMCG chain manage stock, expiry, and vendor returns without buying a single SaaS tool. Just Excel, clever logic, and frictionless adoption.",
      highlight: "This case study showcases SKU mapping, reorder thresholds, and dashboard views that made shop managers feel like ops wizards.",
      cta: "Download the tracker logic and design brief that made inventory painless and powerful.",
      link: "https://drive.google.com/file/d/1mMBQwr2FyAJdh3MxCgpmhXrd8Zx60J8S/view?usp=sharing",
      icon: Target,
      gradient: "from-orange-400/20 to-red-600/20",
      metrics: ["7 outlets managed", "Zero SaaS costs", "100% adoption rate"],
      image: inventoryImage,
    },
    {
      id: 5,
      title: "Sprint Analysis Framework",
      subtitle: "The Invisible Metrics That Changed Everything",
      description: "Scrum isn't broken — visibility is. This deep dive explores how we rebuilt sprint health metrics beyond burn-down charts. With carryover heatmaps, blocker timelines, and anonymous dev pulse surveys, we gave teams the tools to speak the truth in retros.",
      highlight: "From chaos to cadence in 3 weeks flat. Zero new tools. Just better thinking.",
      cta: "Get the Sprint Efficiency Tracker deck that made sprints feel like progress again.",
      link: "https://drive.google.com/file/d/1LW3ftQTkqJfBZ1E9Wtjx7P-SXGCgmlka/view?usp=sharing",
      icon: Sparkles,
      gradient: "from-indigo-400/20 to-purple-600/20",
      metrics: ["3 weeks transformation", "20% cycle waste reduction", "Zero new tools"],
      image: sprintImage,
    },
  ];

  const handleDownloadCase = (link: string) => {
    window.open(link, '_blank');
  };

  return (
    <section className="py-20 px-4 relative">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur-sm border border-white/10 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Case Studies</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
            Real Impact, Real Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Deep dives into product challenges, strategic decisions, and measurable outcomes that shaped businesses and delighted users.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => {
            const IconComponent = study.icon;
            return (
              <Card 
                key={study.id} 
                className={`premium-glass glow-on-hover shimmer-effect transition-all duration-500 group relative overflow-hidden ${
                  index === 0 ? 'lg:col-span-2' : ''
                }`}
              >
                {/* Case study image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent"></div>
                  <div className="absolute top-4 right-4 p-2 rounded-xl bg-background/20 backdrop-blur-sm">
                    <IconComponent className="w-5 h-5 text-white" />
                  </div>
                </div>
                
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <CardHeader className="relative z-10">
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2 group-hover:text-primary transition-colors">
                      {study.title}
                    </CardTitle>
                    <CardDescription className="text-lg font-medium text-foreground/80 mb-3">
                      {study.subtitle}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2">
                      {study.metrics.map((metric, idx) => (
                        <span 
                          key={idx} 
                          className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20"
                        >
                          {metric}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="relative z-10">
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {study.description}
                  </p>
                  
                  <div className="p-4 rounded-lg bg-gradient-to-r from-primary/5 to-secondary/5 backdrop-blur-sm border border-white/10 mb-6">
                    <p className="text-sm font-medium text-foreground/90">
                      🛠️ {study.highlight}
                    </p>
                  </div>

                  <p className="text-sm text-muted-foreground mb-6">
                    📥 {study.cta}
                  </p>

                  <Button 
                    onClick={() => handleDownloadCase(study.link)}
                    className="w-full premium-button group/btn relative overflow-hidden shimmer-effect"
                    size="lg"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative flex items-center justify-center gap-2">
                      <Download className="w-4 h-4" />
                      <span>Download Case Study</span>
                      <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </div>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full royal-elegance">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">
              More case studies coming soon...
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;