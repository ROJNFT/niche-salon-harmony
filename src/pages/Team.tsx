
import { TeamSection } from "@/components/TeamSection";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Instagram } from "lucide-react";

const Team = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen py-20">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="mb-8"
          >
            <ArrowLeft className="mr-2" />
            Back to Beauty
          </Button>
          
          <h1 className="text-4xl font-serif text-center mb-16">Our Team</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-primary text-primary-foreground rounded-lg col-span-full lg:col-span-1">
              <h3 className="font-medium text-xl mb-2">Follow Our Salon</h3>
              <p className="text-primary-foreground/80 mb-4">Stay updated with our latest styles and services</p>
              <a 
                href="https://instagram.com/nichebeautylounge.n.spa" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary-foreground hover:opacity-80 transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span>@nichebeautylounge.n.spa</span>
              </a>
            </div>
          </div>

          <div className="mt-8">
            <TeamSection showFullList={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
