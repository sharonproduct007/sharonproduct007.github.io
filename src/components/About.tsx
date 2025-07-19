
const About = () => {
  return (
    <section id="about" className="py-24 bg-background px-6 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-poppins tracking-tight">
            My Builder Origin Story
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full" />
        </div>
        
        <div className="glass-card rounded-2xl p-8 md:p-12 shadow-xl animate-slide-up relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-primary/50 to-transparent" />
          
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="metric-card text-center floating-card">
              <div className="text-3xl font-bold text-primary mb-2">37%</div>
              <div className="text-sm text-muted-foreground">Payment Success Rate</div>
            </div>
            <div className="metric-card text-center floating-card delay-100">
              <div className="text-3xl font-bold text-primary mb-2">₹1.2Cr</div>
              <div className="text-sm text-muted-foreground">Fraud Prevention</div>
            </div>
            <div className="metric-card text-center floating-card delay-200">
              <div className="text-3xl font-bold text-primary mb-2">45%</div>
              <div className="text-sm text-muted-foreground">Onboarding Time Cut</div>
            </div>
            <div className="metric-card text-center floating-card delay-300">
              <div className="text-3xl font-bold text-primary mb-2">$100K+</div>
              <div className="text-sm text-muted-foreground">ARR Growth</div>
            </div>
          </div>
          
          <p className="text-lg md:text-xl text-foreground leading-relaxed font-poppins font-light">
            Product Manager with a proven track record of building and scaling fintech products—from 0→1 MVPs to high-impact rollouts. 
            I blend growth strategy, product analytics, and GTM execution to drive measurable outcomes across retention, engagement, and revenue. 
            Fluent in SQL, Power BI, and behavioral insights, with a knack for turning user friction into decisive product moves that ship fast and ship right.
          </p>
          
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="tech-badge">0→1 Product Builder</span>
            <span className="tech-badge">Growth Strategy</span>
            <span className="tech-badge">Data-Driven</span>
            <span className="tech-badge">GTM Execution</span>
            <span className="tech-badge">Fintech Expert</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
