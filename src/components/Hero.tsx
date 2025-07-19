
import { Button } from "@/components/ui/button";
import { Download, Mail, ArrowRight, Sparkles, Linkedin, BookOpen, Phone } from "lucide-react";
import profilePhoto from "/lovable-uploads/ec968f4c-3ca2-4f0e-acc6-5d08ec83f1b1.png";

const Hero = () => {
  const handleDownloadResume = () => {
    // Open Google Drive link in new tab
    window.open('https://drive.google.com/file/d/1NPYjVlsLYODKWkXWFokJStpZ-RxgdePs/view?usp=sharing', '_blank');
  };

  const handleConnect = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-24 overflow-hidden">
      {/* Advanced background effects */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 mesh-gradient animate-pulse-glow" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-2xl animate-pulse delay-1000" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile section */}
          <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="relative">
              <div className="profile-glow">
                <img 
                  src={profilePhoto} 
                  alt="Sharon Nazeer" 
                  className="w-80 h-80 object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
          
          {/* Content section */}
          <div className="order-1 lg:order-2 space-y-8 text-center lg:text-left animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 glass-card text-primary rounded-full text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Available for new opportunities
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight font-poppins tracking-tight">
              Product Manager Who
              <span className="aurora-text block animate-aurora">
                Ships & Scales
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed font-poppins font-light">
              Turning user friction into growth opportunities. Scaled fintech products from 0→1 with 
              <span className="text-primary font-semibold"> 37% success rate increases</span> and 
              <span className="text-primary font-semibold"> ₹1.2Cr fraud prevention</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center pt-8">
              <Button 
                onClick={handleDownloadResume}
                size="lg" 
                className="premium-button group px-8 py-4 text-lg font-medium shimmer-effect"
              >
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Download Resume
              </Button>
              
              <Button 
                onClick={handleConnect}
                variant="outline" 
                size="lg" 
                className="royal-elegance group px-8 py-4 text-lg font-medium text-foreground hover:text-primary transition-all duration-300 hover:bg-primary/5"
              >
                <Mail className="mr-2 h-5 w-5" />
                Let's Connect
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start items-center pt-6">
              <a 
                href="https://www.linkedin.com/in/sharon-n-s-product-growth/"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 royal-elegance rounded-full glow-on-hover"
              >
                <Linkedin className="w-5 h-5 text-blue-600 group-hover:text-blue-500 transition-colors duration-300" />
              </a>
              
              <a 
                href="https://medium.com/@sharonnazeer582"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 royal-elegance rounded-full glow-on-hover"
              >
                <BookOpen className="w-5 h-5 text-green-600 group-hover:text-green-500 transition-colors duration-300" />
              </a>
              
              <a 
                href="mailto:sharonnazeer582@gmail.com"
                className="group p-3 royal-elegance rounded-full glow-on-hover"
              >
                <Mail className="w-5 h-5 text-primary group-hover:text-primary/80 transition-colors duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
