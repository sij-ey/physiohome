import Header from "@/components/Header";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const Conditions = () => {
  const conditions = [
    {
      id: "low-back-pain",
      title: "Low Back Pain",
      exercises: 25,
      color: "bg-condition-back-pain",
      description: "Comprehensive exercises targeting lower back pain relief, core strengthening, and spinal alignment improvement."
    },
    {
      id: "knee-injuries", 
      title: "Knee Injuries",
      exercises: 30,
      color: "bg-condition-knee",
      description: "Rehabilitation programs focusing on knee stability, strength, and range of motion recovery."
    },
    {
      id: "stroke-recovery",
      title: "Stroke Recovery", 
      exercises: 40,
      color: "bg-condition-stroke",
      description: "Specialized exercises designed for neurological recovery and motor function restoration."
    },
    {
      id: "post-surgical",
      title: "Post-Surgical",
      exercises: 35, 
      color: "bg-condition-post-surgical",
      description: "Structured recovery programs for post-operative healing and functional restoration."
    },
    {
      id: "shoulder-impingement",
      title: "Shoulder Impingement",
      exercises: 28,
      color: "bg-orange-500",
      description: "Targeted exercises for shoulder mobility, rotator cuff strengthening, and pain relief."
    },
    {
      id: "neck-pain",
      title: "Neck Pain",
      exercises: 22,
      color: "bg-teal-500",
      description: "Gentle exercises for cervical spine health, posture correction, and tension relief."
    },
    {
      id: "hip-problems",
      title: "Hip Problems",
      exercises: 26,
      color: "bg-indigo-500",
      description: "Comprehensive hip strengthening and mobility exercises for various hip conditions."
    },
    {
      id: "ankle-sprains",
      title: "Ankle Sprains",
      exercises: 20,
      color: "bg-pink-500",
      description: "Progressive rehabilitation for ankle stability, strength, and injury prevention."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="flex items-center mb-8">
            <Link to="/">
              <Button variant="ghost" size="sm" className="mr-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
          
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              All Conditions We Treat
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from our comprehensive library of evidence-based treatment programs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {conditions.map((condition) => (
              <Link 
                key={condition.id}
                to={`/conditions/${condition.id}`}
                className="group"
              >
                <div className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-all duration-300 group-hover:scale-[1.02] h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`px-3 py-1 rounded-full text-white text-sm font-medium ${condition.color}`}>
                      {condition.exercises} exercises
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {condition.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {condition.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Conditions;
