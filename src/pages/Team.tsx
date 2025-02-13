
import { TeamSection } from "@/components/TeamSection";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

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
            Back to Home
          </Button>
          <h1 className="text-4xl font-serif text-center mb-16">Our Team</h1>
          <TeamSection showFullList={true} />
        </div>
      </div>
    </div>
  );
};

export default Team;
