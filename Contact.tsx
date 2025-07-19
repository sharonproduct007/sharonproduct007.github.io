
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, BookOpen, Send, Phone } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-24 bg-secondary/20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-poppins tracking-tight">
            Let's Build Something Amazing
          </h2>
          <p className="text-lg text-muted-foreground font-poppins">
            Ready to turn your product vision into measurable impact?
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto mt-4 rounded-full" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-semibold text-foreground mb-6 font-poppins">
              Let's Connect
            </h3>
            <p className="text-muted-foreground mb-8 font-poppins leading-relaxed">
              Always open to discussing product opportunities, growth strategies, 
              or just exchanging ideas about building better products.
            </p>
            
            <div className="space-y-4">
              <a 
                href="mailto:sharonnazeer582@gmail.com"
                className="flex items-center gap-4 p-4 glass-card-intense rounded-xl hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2 hover:scale-[1.02]"
              >
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary transition-colors duration-300">
                  <Mail className="h-5 w-5 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-foreground font-poppins">Email</p>
                  <p className="text-muted-foreground font-poppins">sharonnazeer582@gmail.com</p>
                </div>
                <div className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  <Send className="h-4 w-4" />
                </div>
              </a>
              
              <a 
                href="tel:+918157941434"
                className="flex items-center gap-4 p-4 glass-card-intense rounded-xl hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2 hover:scale-[1.02]"
              >
                <div className="p-3 bg-orange-500/10 rounded-lg group-hover:bg-orange-600 transition-colors duration-300">
                  <Phone className="h-5 w-5 text-orange-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-foreground font-poppins">Phone</p>
                  <p className="text-muted-foreground font-poppins">+91 8157941434</p>
                </div>
                <div className="text-orange-600 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Send className="h-4 w-4" />
                </div>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/sharon-n-s-product-growth/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 glass-card-intense rounded-xl hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2 hover:scale-[1.02]"
              >
                <div className="p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-600 transition-colors duration-300">
                  <Linkedin className="h-5 w-5 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-foreground font-poppins">LinkedIn</p>
                  <p className="text-muted-foreground font-poppins">Professional network</p>
                </div>
                <div className="text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Send className="h-4 w-4" />
                </div>
              </a>
              
              <a 
                href="https://medium.com/@sharonnazeer582"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 glass-card-intense rounded-xl hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2 hover:scale-[1.02]"
              >
                <div className="p-3 bg-green-500/10 rounded-lg group-hover:bg-green-600 transition-colors duration-300">
                  <BookOpen className="h-5 w-5 text-green-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-foreground font-poppins">Medium</p>
                  <p className="text-muted-foreground font-poppins">Product insights & stories</p>
                </div>
                <div className="text-green-600 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Send className="h-4 w-4" />
                </div>
              </a>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <form onSubmit={handleSubmit} className="premium-glass p-8 rounded-2xl shadow-xl relative overflow-hidden shimmer-effect">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/50" />
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2 font-poppins">
                    Name
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-xl border-border focus:border-primary focus:ring-primary font-poppins bg-background"
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2 font-poppins">
                    Email
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-xl border-border focus:border-primary focus:ring-primary font-poppins bg-background"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2 font-poppins">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full rounded-xl border-border focus:border-primary focus:ring-primary font-poppins resize-none bg-background"
                    placeholder="Tell me about your project or just say hello!"
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="premium-button w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 rounded-xl font-poppins font-medium transition-all duration-300 hover:scale-[1.02] group shimmer-effect"
                >
                  <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
