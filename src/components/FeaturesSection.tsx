import { Play, Award, Users } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Play,
      title: "Video-Based Treatment",
      description: "High-quality instructional videos demonstrating proper form and technique for maximum therapeutic benefit.",
      color: "bg-primary",
    },
    {
      icon: Award,
      title: "Expert-Designed Plans", 
      description: "Treatment protocols developed by licensed physiotherapists with years of clinical experience.",
      color: "bg-secondary",
    },
    {
      icon: Users,
      title: "All Ages Welcome",
      description: "Customized programs suitable for patients of all ages and fitness levels, from children to seniors.",
      color: "bg-gradient-to-br from-purple-500 to-pink-500",
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-card">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose PhysioHome?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional-grade physiotherapy accessible anytime, anywhere
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className={`w-20 h-20 ${feature.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <feature.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
