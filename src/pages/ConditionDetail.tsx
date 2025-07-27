import Header from "@/components/Header";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Play, Clock, Repeat, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const ConditionDetail = () => {
  const { conditionId } = useParams();
  
  const conditionData = {
    "low-back-pain": {
      title: "Low Back Pain Treatment",
      totalExercises: 25,
      description: "Comprehensive program designed to relieve lower back pain and strengthen core muscles",
      color: "bg-condition-back-pain"
    },
    "knee-injuries": {
      title: "Knee Injury Recovery",
      totalExercises: 30,
      description: "Rehabilitation program for knee strength and stability",
      color: "bg-condition-knee"
    },
    "stroke-recovery": {
      title: "Stroke Recovery Program", 
      totalExercises: 40,
      description: "Specialized exercises for neurological recovery",
      color: "bg-condition-stroke"
    },
    "post-surgical": {
      title: "Post-Surgical Rehabilitation",
      totalExercises: 35,
      description: "Recovery program for post-operative healing",
      color: "bg-condition-post-surgical"
    }
  };

  const condition = conditionData[conditionId as keyof typeof conditionData];
  const currentExercise = 1;
  const progress = 0;

  if (!condition) {
    return <div>Condition not found</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <div className="flex items-center mb-6">
            <Link to="/conditions">
              <Button variant="ghost" size="sm" className="mr-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Conditions
              </Button>
            </Link>
          </div>
          
          {/* Treatment Header */}
          <div className={`${condition.color} rounded-xl p-6 text-white mb-8`}>
            <h1 className="text-2xl md:text-3xl font-bold mb-2">
              {condition.title}
            </h1>
            <p className="text-white/90 mb-4">
              Exercise {currentExercise} of {condition.totalExercises}: Pelvic Tilts
            </p>
            <div className="mb-2">
              <div className="flex justify-between text-sm mb-1">
                <span>Progress</span>
                <span>{progress}%</span>
              </div>
              <Progress value={progress} className="h-2 bg-white/20" />
            </div>
          </div>
          
          {/* Video Player */}
          <div className="bg-card rounded-xl overflow-hidden mb-8 border">
            <div className="relative aspect-video bg-gray-900 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Play className="w-8 h-8 text-white ml-1" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Video Demonstration</h3>
                <p className="text-gray-300">Pelvic Tilts</p>
              </div>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50">
              <Button variant="ghost" size="sm">
                <Play className="w-4 h-4 mr-2" />
                Play
              </Button>
              <Button variant="ghost" size="sm">
                <Repeat className="w-4 h-4 mr-2" />
                Replay
              </Button>
              <Button variant="ghost" size="sm">
                🔊
              </Button>
            </div>
          </div>
          
          {/* Exercise Details */}
          <div className="bg-card rounded-xl p-6 border mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-semibold">Pelvic Tilts</h2>
              <span className="px-3 py-1 bg-difficulty-easy text-white rounded-full text-sm font-medium">
                Easy
              </span>
            </div>
            
            <p className="text-muted-foreground mb-6">
              Gentle movement to strengthen core and improve spinal alignment
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="w-4 h-4 mr-2" />
                2-3 minutes
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Repeat className="w-4 h-4 mr-2" />
                10-15 repetitions
              </div>
            </div>
            
            {/* Instructions */}
            <div className="mb-6">
              <h3 className="flex items-center text-lg font-semibold mb-4">
                <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-xs">✓</span>
                </div>
                Instructions
              </h3>
              <ol className="space-y-3">
                <li className="flex">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm mr-3 mt-0.5">
                    1
                  </span>
                  <span>Lie on your back with knees bent and feet flat on the floor</span>
                </li>
                <li className="flex">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm mr-3 mt-0.5">
                    2
                  </span>
                  <span>Gently tilt your pelvis to flatten your lower back against the floor</span>
                </li>
                <li className="flex">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm mr-3 mt-0.5">
                    3
                  </span>
                  <span>Hold for 5 seconds, then return to neutral position</span>
                </li>
                <li className="flex">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm mr-3 mt-0.5">
                    4
                  </span>
                  <span>Repeat slowly and controlled</span>
                </li>
              </ol>
            </div>
            
            {/* Precautions */}
            <div>
              <h3 className="flex items-center text-lg font-semibold mb-4">
                <Shield className="w-5 h-5 mr-3 text-orange-500" />
                Precautions
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Stop if you experience sharp pain</li>
                <li>• Move slowly and avoid sudden movements</li>
                <li>• Breathe normally throughout the exercise</li>
                <li>• Consult your physiotherapist if unsure</li>
              </ul>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex gap-4">
            <Button variant="gradient" size="lg" className="flex-1">
              Complete Exercise
            </Button>
            <Button variant="outline" size="lg" className="flex-1">
              Next Exercise
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ConditionDetail;
