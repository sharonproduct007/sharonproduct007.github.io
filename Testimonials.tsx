
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "He doesn't just execute — he frames and solves problems with clarity.",
    author: "Senior Engineering Manager",
    company: "Tech Startup"
  },
  {
    text: "Sharon's ability to translate complex requirements into actionable product roadmaps is exceptional.",
    author: "Head of Product",
    company: "Fintech Company"
  },
  {
    text: "Incredible ownership mentality. Takes problems and delivers solutions that exceed expectations.",
    author: "VP of Growth",
    company: "SaaS Platform"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16 text-center font-poppins">
          What People Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="bg-gray-50 border-0 shadow-md hover:shadow-lg transition-all duration-300 rounded-2xl animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                <Quote className="h-8 w-8 text-gray-400 mb-4" />
                <p className="text-gray-700 mb-6 font-poppins leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-semibold text-gray-900 font-poppins">
                    {testimonial.author}
                  </p>
                  <p className="text-gray-600 font-poppins text-sm">
                    {testimonial.company}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
