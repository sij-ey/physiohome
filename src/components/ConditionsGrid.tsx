import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ConditionsGrid = () => {
  const conditions = [
    {
      id: "low-back-pain",
      title: "Low Back Pain",
      exercises: 25,
      color: "bg-condition-back-pain",
      description: "Comprehensive exercises for lower back relief and strengthening"
    },
    {
      id: "knee-injuries", 
      title: "Knee Injuries",
      exercises: 30,
      color: "bg-condition-knee",
      description: "Rehabilitation programs for knee recovery and stability"
    },
    {
      id: "stroke-recovery",
      title: "Stroke Recovery", 
      exercises: 40,
      color: "bg-condition-stroke",
      description: "Specialized exercises for stroke rehabilitation and mobility"
    },
    {
      id: "post-surgical",
      title: "Post-Surgical",
      exercises: 35, 
      color: "bg-condition-post-surgical",
      description: "Recovery programs for post-operative rehabilitation"
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Conditions We Treat
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive treatment plans for the most common physical conditions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {conditions.map((condition) => (
            <Link 
              key={condition.id}
              to={`/conditions/${condition.id}`}
              className="group"
            >
              <div className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-all duration-300 group-hover:scale-[1.02]">
                <div className="flex items-center justify-between mb-4">
                  <div className={`px-3 py-1 rounded-full text-white text-sm font-medium ${condition.color}`}>
                    {condition.exercises} exercises
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {condition.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {condition.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center">
          <Link to="/conditions">
            <Button variant="gradient" size="lg">
              View All Conditions
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ConditionsGrid;
