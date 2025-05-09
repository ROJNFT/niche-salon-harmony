import { LocationCard } from "@/components/LocationCard";
import { HeadSpaSection } from "@/components/HeadSpaSection";
import { EstheticianSection } from "@/components/EstheticianSection";
import { TeamSection } from "@/components/TeamSection";
import Logo from "@/components/Logo";
import { Sparkles, Phone } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Location = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const locations = {
    lounge: {
      name: "Niche Beauty Lounge",
      address: "5393 Truxtun Ave, Bakersfield, CA 93309",
      phone: "(661) 327-5393",
      image: "/lovable-uploads/Front Photo.jpg",
      features: ["Hair Services", "Nail Services", "Esthetician Services"]
    },
    spa: {
      name: "Niche Beauty Spa",
      address: "5060 California Ave STE 110, Bakersfield, CA 93309",
      phone: "(661) 836-9775",
      image: "/lovable-uploads/03cfe203-5dc8-4a7f-bda3-c535b47c837b.png",
      features: ["Hair Services", "Nail Services", "Head Spa Treatments"]
    }
  };

  const location = locations[id as keyof typeof locations];

  if (!location) {
    return <div>Location not found</div>;
  }

  // Function to format phone number for tel: link
  const formatPhoneForCall = (phone: string) => {
    return phone.replace(/\D/g, ''); // Remove all non-digits
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
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
          <button 
            onClick={() => navigate('/')}
            className="absolute left-0 top-0 flex items-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Locations
          </button>
          
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Logo className="h-56 w-auto mx-auto" />
          </div>
          <div className="max-w-2xl mx-auto">
            <LocationCard {...location} />
          </div>
        </div>
      </section>

      {/* Conditional Section */}
      {id === 'spa' ? <HeadSpaSection /> : <EstheticianSection />}

      {/* Team Section */}
      <TeamSection />

      {/* Book Now Section */}
      <section className="py-20 bg-primary text-primary-foreground text-center">
        <div className="container">
          <h2 className="text-4xl font-serif mb-6">Ready to Experience Niche Beauty?</h2>
          <a 
            href={`tel:${formatPhoneForCall(location.phone)}`} 
            className="inline-flex items-center bg-white text-primary px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all"
          >
            <Phone className="w-5 h-5 mr-2" />
            Call {location.phone}
          </a>
        </div>
      </section>
    </div>
  );
};

export default Location;
