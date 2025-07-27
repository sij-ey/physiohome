import { Button } from "@/components/ui/button";
import { Play, Users } from "lucide-react";

const HeroSection = () => {
  const stats = [
    { value: "50+", label: "Conditions Covered", color: "text-primary" },
    { value: "200+", label: "Video Exercises", color: "text-secondary" },
    { value: "15+", label: "Expert Physiotherapists", color: "text-primary" },
    { value: "98%", label: "User Satisfaction", color: "text-secondary" },
  ];

  return (
    <section className="pt-24 pb-16 px-4">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Your Personal{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Physiotherapy
            </span>{" "}
            Journey Starts Here
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Evidence-based treatment plans, expert guidance, and personalized exercise routines 
            delivered through professional video content. Recover faster, stronger, and smarter.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button variant="gradient" size="xl" className="group">
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Start Your Treatment
            </Button>
            <Button variant="outline" size="xl">
              <Users className="w-5 h-5 mr-2" />
              Meet Our Experts
            </Button>
          </div>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}>
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
