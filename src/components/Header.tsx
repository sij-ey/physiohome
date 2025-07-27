import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
            <Heart className="w-6 h-6 text-white fill-white" />
          </div>
          <span className="text-xl font-bold text-foreground">PhysioHome</span>
        </Link>
        
        <Button variant="gradient" size="sm">
          Get Started
        </Button>
      </div>
    </header>
  );
};

export default Header;
