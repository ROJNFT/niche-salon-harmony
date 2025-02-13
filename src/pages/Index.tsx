
import Logo from "@/components/Logo";
import { Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <section className="relative py-12 bg-secondary overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 transform -translate-x-1/2 -translate-y-1/2 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 transform translate-x-1/2 translate-y-1/2 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 text-primary/10">
          <Sparkles className="w-8 h-8" />
        </div>
        <div className="absolute bottom-1/4 left-1/4 text-primary/10">
          <Sparkles className="w-8 h-8" />
        </div>
        
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <Logo className="h-56 w-auto mx-auto mb-16" />
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button
                size="lg"
                className="text-lg px-8 py-6 h-auto"
                onClick={() => navigate('/location/lounge')}
              >
                Visit Niche Beauty Lounge
              </Button>
              <Button
                size="lg"
                className="text-lg px-8 py-6 h-auto"
                onClick={() => navigate('/location/spa')}
              >
                Visit Niche Beauty Spa
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
