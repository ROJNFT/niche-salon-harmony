import { TeamSection } from "@/components/TeamSection";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Instagram, Scissors, Sparkle } from "lucide-react";

const Team = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen py-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 -translate-x-1/2 -translate-y-1/2 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 translate-x-1/2 translate-y-1/2 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-1/4 text-primary/10">
        <Scissors className="w-12 h-12 rotate-12" />
      </div>
      <div className="absolute bottom-1/3 left-1/4 text-primary/10">
        <Sparkle className="w-12 h-12" />
      </div>
      
      <div className="container relative">
        <div className="max-w-6xl mx-auto">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="mb-8"
          >
            <ArrowLeft className="mr-2" />
            Back to Beauty
          </Button>
          
          <div className="text-center mb-16">
            <h1 className="text-4xl font-serif">Our Team</h1>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Meet the talented professionals behind Niche Beauty Lounge & Spa. 
              Our team of experts is dedicated to providing you with exceptional services.
            </p>
          </div>
          
          <div className="bg-secondary/30 rounded-2xl p-8 mb-12 border border-primary/10 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <h2 className="text-2xl font-serif mb-4">Follow Our Salon</h2>
                <p className="text-muted-foreground mb-6">
                  Stay updated with our latest styles, services, and salon events.
                </p>
                <a 
                  href="https://instagram.com/nichebeautylounge.n.spa" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                  <span>@nichebeautylounge.n.spa</span>
                </a>
              </div>
              <div className="hidden md:block text-right">
                <Instagram className="h-20 w-20 text-primary/20 inline-block" />
              </div>
            </div>
          </div>

          <div>
            <TeamSection showFullList={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
